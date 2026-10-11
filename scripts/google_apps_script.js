/**
 * =================================================================
 * きなとのケージ屋さん - Webシステム & 見積もりログ収集 GAS Webhook API
 * =================================================================
 * 
 * 【スプレッドシート構造】
 * 1. シート「見積もりシステム」: 3Dシミュレーターの見積もり結果・仕様詳細ログ
 * 2. シート「Web履歴」: サイト全体の訪問・流入元・回遊動線ログ（1セッション1行で最新化）
 */

/**
 * 仕様取得・APIエンドポイント (GET)
 * 見積りID（?estimateId=EST-xxxx または ?id=EST-xxxx）からスプレッドシートの保存仕様を検索・返却
 */
function doGet(e) {
  try {
    const params = (e && e.parameter) || {};
    const action = params.action;

    // 1. 端末ID指定によるデータ削除アクション
    if (action === 'delete_visitor') {
      const visitorId = params.visitorId;
      if (!visitorId) {
        return createJsonResponse({ status: 'error', message: 'visitorId が指定されていません。' });
      }
      return deleteVisitorData(visitorId);
    }

    // 2. 見積もりシートの列ズレ修復アクション
    if (action === 'fix_estimate') {
      const count = fixEstimateSheetData();
      return createJsonResponse({ status: 'success', message: `列ズレを修復しました（修復件数: ${count}件）` });
    }

    const estimateId = params.estimateId || params.id;
    if (!estimateId) {
      return createJsonResponse({
        status: 'error',
        message: 'クエリパラメータ estimateId が指定されていません。例: ?estimateId=EST-20261005-XXXX または ?action=delete_visitor&visitorId=usr_xxxx'
      });
    }

    const targetId = String(estimateId).trim().toUpperCase();
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('見積もりシステム');
    if (!sheet) {
      return createJsonResponse({ status: 'error', message: '「見積もりシステム」シートが見つかりません。' });
    }

    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) {
      return createJsonResponse({ status: 'not_found', message: '見積もりログがまだ記録されていません。' });
    }

    // B列（見積ID）を最終行から逆順に検索（直近のログを最優先）
    const estimateIds = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
    let targetRow = -1;
    for (let i = estimateIds.length - 1; i >= 0; i--) {
      const cellVal = String(estimateIds[i][0]).trim().toUpperCase();
      if (cellVal === targetId) {
        targetRow = i + 2; // 2行目起点
        break;
      }
    }

    if (targetRow === -1) {
      return createJsonResponse({
        status: 'not_found',
        message: `指定された見積ID「${estimateId}」のデータが見つかりませんでした。`
      });
    }

    // 対象行のA列〜X列（全24列）を取得
    const rowValues = sheet.getRange(targetRow, 1, 1, 24).getValues()[0];
    const rawJsonStr = rowValues[23]; // X列: 生データ(JSON)

    let parsedSpec = null;
    let originalTotals = null;
    if (rawJsonStr) {
      try {
        const parsed = JSON.parse(rawJsonStr);
        parsedSpec = parsed.spec || null;
        originalTotals = parsed.calculated || parsed.totals || null;
      } catch (err) {
        console.warn('rawJson parse error:', err);
      }
    }

    return createJsonResponse({
      status: 'success',
      estimateId: rowValues[1],
      createdAt: rowValues[0],
      spec: parsedSpec,
      originalTotals: originalTotals,
      summary: {
        cageTypeName: rowValues[8],
        frameColorName: rowValues[9],
        W: rowValues[10],
        D: rowValues[11],
        H: rowValues[12],
        panelsSummary: rowValues[13],
        optionsSummary: rowValues[14],
        originalPrice: rowValues[15],
        originalWeight: rowValues[16]
      }
    });

  } catch (error) {
    return createJsonResponse({ status: 'error', message: error.toString() });
  }
}

/**
 * Webhook受信エントリーポイント (POST)
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    // 最大15秒間ロック取得を待機（同時書き込み衝突の防止）
    lock.waitLock(15000);

    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({ status: 'error', message: 'No payload received' });
    }

    const contents = e.postData.contents;
    const data = JSON.parse(contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // ログ種別の判定
    const logType = data.type || (data.estimateId ? 'estimate' : 'web_access');

    let result;
    if (logType === 'page_view' || logType === 'page_stay') {
      // 0. Web閲覧履歴ログ（離脱時1行追記方式）の処理
      result = handlePageViewLog(ss, data, contents);
    } else if (logType === 'ai_chat' || logType === 'chat') {
      // ★新規: AIチャット履歴ログ（1問1答1行追記方式）の処理
      result = handleAiChatLog(ss, data, contents);
    } else if (logType === 'web_access' || logType === 'web_history') {
      // 1. Web訪問・流入元・回遊動線ログの処理
      result = handleWebHistoryLog(ss, data, contents);
    } else if (logType === 'calc_error' || logType === 'error') {
      // 2. 計算エラー・システム例外ログの処理
      result = handleCalcErrorLog(ss, data, contents);
    } else {
      // 3. 見積もり詳細ログの処理
      result = handleEstimateLog(ss, data, contents);
    }

    SpreadsheetApp.flush();
    return result;

  } catch (error) {
    return createJsonResponse({ status: 'error', message: error.toString() });
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

/**
 * Web閲覧履歴ログの保存（方式A: 離脱時1行追記方式）
 * 1回のページ閲覧につき必ず「1行のみ」を末尾に追記します。
 * 流入元種別、流入元URL/リファラ、着地ページ(LP)、画面サイズ、デバイス種別を網羅記録。
 */
function handlePageViewLog(ss, data, rawJson) {
  let sheet = ss.getSheetByName('Web閲覧履歴');
  if (!sheet) {
    sheet = ss.insertSheet('Web閲覧履歴');
    setupPageViewHeader(sheet);
  } else if (sheet.getLastColumn() < 10) {
    // 既存シートのヘッダーが古い（7列等）場合は最新10列ヘッダーに自動アップデート
    setupPageViewHeader(sheet);
  }

  const now = new Date();
  // 記録日時: YYYY-MM-DD HH:mm:ss
  const formattedDate = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');

  const visitorId = data.visitorId || data.deviceId || '';
  const pagePath = data.path || data.pathname || '/';
  const pageTitle = data.title || '';
  const duration = (typeof data.duration === 'number' && !isNaN(data.duration))
    ? Math.max(0, Math.round(data.duration))
    : (parseInt(data.duration, 10) || 0);
  const referrer = data.referrer || 'Direct';
  const referrerCategory = data.referrerCategory || detectReferrerCategory(referrer);
  const landingPage = data.landingPage || pagePath;
  const screen = data.screen || (data.device ? (data.device.screen || '') : '');
  const deviceType = data.deviceType || (data.device ? (data.device.type || data.device) : '不明');

  // 1行追記（全10列）
  sheet.appendRow([
    formattedDate,    // 1. 記録日時
    visitorId,        // 2. 端末ID
    pagePath,         // 3. ページパス
    pageTitle,        // 4. ページタイトル
    duration,         // 5. 滞在時間（秒数）
    referrerCategory, // 6. 流入元種別
    referrer,         // 7. 流入元URL/リファラ
    landingPage,      // 8. 着地ページ(LP)
    screen,           // 9. 画面サイズ
    deviceType        // 10. デバイス種別
  ]);

  return createJsonResponse({
    status: 'success',
    action: 'page_view_appended',
    row: sheet.getLastRow()
  });
}

/**
 * Web閲覧履歴シートのヘッダー初期設定
 */
function setupPageViewHeader(sheet) {
  const headers = [
    '記録日時',
    '端末ID',
    'ページパス',
    'ページタイトル',
    '滞在時間（秒）',
    '流入元種別',
    '流入元URL/リファラ',
    '着地ページ(LP)',
    '画面サイズ',
    'デバイス種別'
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#d1fae5') // 上品なペールエメラルドグリーン
    .setHorizontalAlignment('center');
  sheet.setFrozenRows(1);
}

/**
 * AIチャット履歴ログの保存（1問1答1行追記方式）
 * ユーザーが質問し、AIが回答したタイミングで1行追記します。
 */
function handleAiChatLog(ss, data, rawJson) {
  let sheet = ss.getSheetByName('AIチャット履歴');
  if (!sheet) {
    sheet = ss.insertSheet('AIチャット履歴');
    setupAiChatHeader(sheet);
  }

  const now = new Date();
  const formattedDate = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');

  const visitorId = data.visitorId || data.deviceId || '';
  const turn = Number(data.turn || data.turnCount || 1);
  const path = data.path || data.pathname || '/';
  const question = data.question || data.userMessage || '';
  const answer = data.answer || data.aiResponse || data.reply || '';
  const recommendedSpec = data.recommendedSpec || data.specSummary || 'なし';
  const referrer = data.referrer || 'Direct';
  const deviceType = data.deviceType || (data.device ? (data.device.type || data.device) : '不明');

  sheet.appendRow([
    formattedDate,    // 1. 記録日時
    visitorId,        // 2. 端末ID
    turn,             // 3. 会話ターン
    path,             // 4. 相談元ページ
    question,         // 5. ユーザーの質問
    answer,           // 6. AIの回答
    recommendedSpec,  // 7. 提案ケージ仕様
    referrer,         // 8. 流入元
    deviceType        // 9. デバイス種別
  ]);

  return createJsonResponse({
    status: 'success',
    action: 'ai_chat_logged',
    row: sheet.getLastRow()
  });
}

/**
 * AIチャット履歴シートのヘッダー初期設定
 */
function setupAiChatHeader(sheet) {
  const headers = [
    '記録日時',
    '端末ID',
    '会話ターン',
    '相談元ページ',
    'ユーザーの質問',
    'AIの回答',
    '提案ケージ仕様',
    '流入元',
    'デバイス種別'
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#fce7f3') // パステルローズ/ピンク（きなとさんチャットのトーン）
    .setHorizontalAlignment('center');
  sheet.setFrozenRows(1);
}


/**
 * Web訪問・流入元・回遊動線ログの保存・更新
 * ※同一セッションIDは1行に集約し、回遊経路・最新日時を上書き更新します。
 */
function handleWebHistoryLog(ss, data, rawJson) {
  let sheet = ss.getSheetByName('Web履歴');
  if (!sheet) {
    sheet = ss.insertSheet('Web履歴');
    setupWebHistoryHeader(sheet);
  }

  const now = new Date();
  const formattedDate = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');

  const visitorId = data.visitorId || '';
  const sessionId = data.sessionId || '';
  const referrerCategory = data.referrerCategory || detectReferrerCategory(data.referrer || '');
  const referrer = data.referrer || 'Direct';
  const landingPage = data.landingPage || data.path || '/';
  const pageHistory = Array.isArray(data.pageHistory) ? data.pageHistory.join(' ➔ ') : (data.pageHistory || landingPage);
  const pageCount = data.pageCount || (Array.isArray(data.pageHistory) ? data.pageHistory.length : 1);
  const dev = data.device || {};
  const deviceText = `${dev.type || '不明'} / ${dev.browser || '不明'}`;
  const screen = dev.screen || '';

  // 既存セッションの探索（D列 = セッションID）
  let existingRow = -1;
  const lastRow = sheet.getLastRow();
  if (lastRow > 1 && sessionId) {
    const sessionIds = sheet.getRange(2, 4, lastRow - 1, 1).getValues();
    for (let i = sessionIds.length - 1; i >= 0; i--) {
      if (sessionIds[i][0] === sessionId) {
        existingRow = i + 2; // 2行目起点
        break;
      }
    }
  }

  if (existingRow > 0) {
    // 既存セッションの更新:
    // B列: 最新更新日時, H列: 回遊動線, I列: 閲覧ページ数
    sheet.getRange(existingRow, 2).setValue(formattedDate);
    sheet.getRange(existingRow, 8).setValue(pageHistory);
    sheet.getRange(existingRow, 9).setValue(pageCount);
    return createJsonResponse({ status: 'success', action: 'updated', row: existingRow });
  } else {
    // 新規訪問セッションの追加:
    sheet.appendRow([
      formattedDate,        // A: 初回訪問日時
      formattedDate,        // B: 最新更新日時
      visitorId,            // C: 端末ID
      sessionId,            // D: セッションID
      referrerCategory,     // E: 流入元種別
      referrer,             // F: 流入元URL/リファラ
      landingPage,          // G: 着地ページ(LP)
      pageHistory,          // H: 回遊ページ動線
      pageCount,            // I: 閲覧ページ数
      deviceText,           // J: デバイス / ブラウザ
      screen                // K: 画面サイズ
    ]);
    return createJsonResponse({ status: 'success', action: 'appended', row: sheet.getLastRow() });
  }
}

/**
 * 見積もり詳細ログの保存
 */
function handleEstimateLog(ss, data, rawJson) {
  let sheet = ss.getSheetByName('見積もりシステム');
  if (!sheet) {
    // 既存の「シート1」があればリネーム、無ければ新規作成
    const defaultSheet = ss.getSheetByName('シート1');
    if (defaultSheet) {
      sheet = defaultSheet;
      sheet.setName('見積もりシステム');
    } else {
      sheet = ss.insertSheet('見積もりシステム');
    }
    setupEstimateHeader(sheet);
  }

  const now = new Date();
  const formattedDate = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');

  const spec = data.spec || {};
  const calc = data.calculated || {};
  const dev = data.device || {};
  const meta = data.meta || {};

  // ケージ種類の日本語化
  let typeName = spec.typeName;
  if (!typeName) {
    if (spec.cageType === 'A_FRONT') {
      typeName = 'Type A（前開き扉）';
    } else if (spec.cageType === 'A_FRAMED') {
      typeName = 'Type A（枠囲い扉）';
    } else if (spec.cageType === 'A') {
      typeName = 'Type A（全面扉）';
    } else {
      typeName = 'Type C（前窓＋扉）';
    }
  }
  const frameColorName = spec.frameColorDisplayName || (spec.frameColor === 'black' ? 'ブラック' : 'シルバー');
  const panelsText = spec.panelsSummary || '標準仕様';
  const optText = spec.optionsSummary || 'なし';

  // 粗利計算
  const price = calc.priceWithMarkup || 0;
  const cost = calc.rawCost || 0;
  const profit = price - cost;

  // 回遊動線
  const pageHistory = Array.isArray(meta.pageHistory) ? meta.pageHistory.join(' ➔ ') : (meta.pageHistory || '');

  // 全24列（A〜X）
  sheet.appendRow([
    formattedDate,                          // A: 日時
    data.estimateId || '',                  // B: 見積ID
    data.visitorId || '',                   // C: 端末ID
    data.sessionId || '',                   // D: セッションID
    data.seq || 1,                          // E: 試算回数
    dev.type || '',                         // F: デバイス
    dev.browser || '',                      // G: ブラウザ
    dev.screen || '',                       // H: 画面サイズ
    typeName,                               // I: ケージ種類
    frameColorName,                         // J: フレーム色
    spec.W || '',                           // K: 幅W
    spec.D || '',                           // L: 奥行D
    spec.H || '',                           // M: 高さH
    panelsText,                             // N: パネル構成
    optText,                                // O: 選択オプション
    price,                                  // P: 提示価格(円)
    Number((calc.weight || 0).toFixed(1)),  // Q: 概算重量(kg)
    cost,                                   // R: 内部原価(円)
    profit,                                 // S: 想定粗利(円)
    meta.elapsedSec || 0,                   // T: 検討時間(秒)
    meta.referrer || '',                    // U: 流入元
    pageHistory,                            // V: 回遊ページ動線
    meta.diffNote || '',                    // W: 直前からの変更点
    rawJson                                 // X: 生データ(JSON)
  ]);

  return createJsonResponse({ status: 'success', action: 'estimate_logged', estimateId: data.estimateId });
}

/**
 * 流入元URLから種別（Instagram / X / Google等）を判定
 */
function detectReferrerCategory(ref) {
  if (!ref || ref === 'Direct' || ref === '') return '直接 / お気に入り';
  const lower = ref.toLowerCase();
  if (lower.includes('instagram.com')) return 'Instagram';
  if (lower.includes('t.co') || lower.includes('twitter.com') || lower.includes('x.com')) return 'X (Twitter)';
  if (lower.includes('google.')) return 'Google検索';
  if (lower.includes('yahoo.')) return 'Yahoo!検索';
  if (lower.includes('bing.')) return 'Bing検索';
  if (lower.includes('line.me')) return 'LINE';
  if (lower.includes('tiktok.com')) return 'TikTok';
  if (lower.includes('youtube.com') || lower.includes('youtu.be')) return 'YouTube';
  return '外部Webサイト';
}

/**
 * JSONレスポンス生成
 */
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * =================================================================
 * 初期セットアップ用関数（スプレッドシート画面の「実行」ボタンで一発作成）
 * =================================================================
 */
function setupSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. 「見積もりシステム」シートのセットアップ
  let estSheet = ss.getSheetByName('見積もりシステム');
  if (!estSheet) {
    const sheet1 = ss.getSheetByName('シート1');
    if (sheet1) {
      sheet1.setName('見積もりシステム');
      estSheet = sheet1;
    } else {
      estSheet = ss.insertSheet('見積もりシステム');
    }
  }
  setupEstimateHeader(estSheet);

  // 2. 「Web履歴」シートのセットアップ
  let webSheet = ss.getSheetByName('Web履歴');
  if (!webSheet) {
    webSheet = ss.insertSheet('Web履歴');
  }
  setupWebHistoryHeader(webSheet);
}

function setupEstimateHeader(sheet) {
  const headers = [
    '日時', '見積ID', '端末ID', 'セッションID', '試算回数',
    'デバイス', 'ブラウザ', '画面サイズ', 'ケージ種類', 'フレーム色',
    '幅W(mm)', '奥行D(mm)', '高さH(mm)', 'パネル構成', '選択オプション',
    '提示価格(円)', '概算重量(kg)', '内部原価(円)', '想定粗利(円)',
    '検討時間(秒)', '流入元(Referrer)', '回遊ページ動線', '直前からの変更点', '生データ(JSON)'
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#e0f2fe') // 淡いスカイブルー
    .setHorizontalAlignment('center');
  sheet.setFrozenRows(1);
}

function setupWebHistoryHeader(sheet) {
  const headers = [
    '初回訪問日時', '最新更新日時', '端末ID', 'セッションID',
    '流入元種別', '流入元URL/リファラ', '着地ページ(LP)',
    '回遊ページ動線', '閲覧ページ数', 'デバイス / ブラウザ', '画面サイズ'
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#fef3c7') // 淡いアンバー/ウォームイエロー
    .setHorizontalAlignment('center');
  sheet.setFrozenRows(1);
}

/**
 * 計算エラー・例外ログの保存
 */
function handleCalcErrorLog(ss, data, rawJson) {
  let sheet = ss.getSheetByName('エラーログ');
  if (!sheet) {
    sheet = ss.insertSheet('エラーログ');
    setupErrorLogHeader(sheet);
  }

  const now = new Date();
  const formattedDate = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
  const spec = data.spec || {};
  const dev = data.device || {};

  sheet.appendRow([
    formattedDate,
    data.visitorId || '',
    data.sessionId || '',
    data.errorMessage || '不明なエラー',
    data.url || '',
    `W:${spec.W || ''} D:${spec.D || ''} H:${spec.H || ''} Type:${spec.cageType || ''}`,
    dev.screen || '',
    data.errorStack || '',
    rawJson
  ]);

  return createJsonResponse({ status: 'success', action: 'error_logged' });
}

function setupErrorLogHeader(sheet) {
  const headers = [
    '日時', '端末ID', 'セッションID', 'エラー内容',
    '発生URL', 'ケージ設定', '画面サイズ', 'スタックトレース', '生データ(JSON)'
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#fee2e2') // 淡いレッド
    .setHorizontalAlignment('center');
  sheet.setFrozenRows(1);
}

/**
 * =================================================================
 * 【修復用メンテナンス関数】見積もりシステムシートの列ズレ自動修復
 * =================================================================
 * 2026/10/11 14:58:11以降に発生した列ズレ行（行199以降等）を自動検出し、
 * 生データ(JSON)またはズレた各列の値から正しい全24列（A〜X）へ自動復元・整列します。
 * 
 * 【使い方】
 * Google Apps Scriptエディタ画面の上の関数選択プルダウンで「fixEstimateSheetData」を選択し、
 * 「実行」をクリックするだけで、既存の崩れた行が一瞬で綺麗に復元されます。
 */
function fixEstimateSheetData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('見積もりシステム');
  if (!sheet) {
    Logger.log('「見積もりシステム」シートが見つかりません。');
    return;
  }

  // ヘッダー行を最新の正規定義にセット
  setupEstimateHeader(sheet);

  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    Logger.log('修復対象のデータ行がありません。');
    return;
  }

  const lastCol = Math.max(24, sheet.getLastColumn());
  const range = sheet.getRange(2, 1, lastRow - 1, lastCol);
  const values = range.getValues();
  let fixCount = 0;

  for (let r = 0; r < values.length; r++) {
    const row = values[r];
    const rowNum = r + 2;

    // 崩れ行の判定:
    // H列が "A" や "C" などのケージ記号、または F列が数値（検討時間）で C・D列が空欄、または G列に変更点テキストが入っている行
    const colH = String(row[7] || '').trim();
    const colG = String(row[6] || '').trim();
    const colF = row[5];
    const colC = String(row[2] || '').trim();

    const isCorrupted = (
      colH === 'A' || colH === 'C' || colH === 'A_FRONT' || colH === 'A_FRAMED' || colH === 'C_FRAMED' ||
      (typeof colF === 'number' && colF > 0 && colC === '') ||
      (colG.includes('試算') || colG.includes('追加') || colG.includes('解除') || colG.includes('変更'))
    );

    if (!isCorrupted) continue;

    // 行内のセルから生データJSONを探す
    let rawJsonStr = '';
    for (let c = row.length - 1; c >= 0; c--) {
      const valStr = String(row[c] || '').trim();
      if (valStr.startsWith('{') && valStr.endsWith('}') && (valStr.includes('estimateId') || valStr.includes('spec'))) {
        rawJsonStr = valStr;
        break;
      }
    }

    let fixedRow = new Array(24).fill('');

    if (rawJsonStr) {
      try {
        const data = JSON.parse(rawJsonStr);
        const spec = data.spec || {};
        const calc = data.calculated || data.totals || {};
        const dev = data.device || {};
        const meta = data.meta || {};

        let typeName = spec.typeName;
        if (!typeName) {
          if (spec.cageType === 'A_FRONT') typeName = 'Type A（前開き扉）';
          else if (spec.cageType === 'A_FRAMED') typeName = 'Type A（枠囲い扉）';
          else if (spec.cageType === 'A') typeName = 'Type A（全面扉）';
          else typeName = 'Type C（前窓＋扉）';
        }
        const frameColorName = spec.frameColorDisplayName || (spec.frameColor === 'black' ? 'ブラック' : 'シルバー');
        const panelsText = spec.panelsSummary || '標準仕様';
        const optText = spec.optionsSummary || 'なし';
        const price = calc.priceWithMarkup || 0;
        const cost = calc.rawCost || 0;
        const profit = price - cost;
        const pageHistory = Array.isArray(meta.pageHistory) ? meta.pageHistory.join(' ➔ ') : (meta.pageHistory || '');

        fixedRow = [
          row[0] || (data.timestamp ? Utilities.formatDate(new Date(data.timestamp), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss') : ''), // A: 日時
          data.estimateId || row[1] || '',                  // B: 見積ID
          data.visitorId || '',                             // C: 端末ID
          data.sessionId || '',                             // D: セッションID
          data.seq || row[4] || 1,                          // E: 試算回数
          dev.type || 'Windows',                            // F: デバイス
          dev.browser || 'Browser',                         // G: ブラウザ
          dev.screen || '1920x1080',                        // H: 画面サイズ
          typeName,                                         // I: ケージ種類
          frameColorName,                                   // J: フレーム色
          spec.W || row[10] || '',                          // K: 幅W
          spec.D || row[11] || '',                          // L: 奥行D
          spec.H || row[12] || '',                          // M: 高さH
          panelsText,                                       // N: パネル構成
          optText,                                          // O: 選択オプション
          price,                                            // P: 提示価格(円)
          Number((calc.weight || 0).toFixed(1)),            // Q: 概算重量(kg)
          cost,                                             // R: 内部原価(円)
          profit,                                           // S: 想定粗利(円)
          meta.elapsedSec || row[5] || 0,                   // T: 検討時間(秒)
          meta.referrer || 'Direct',                        // U: 流入元
          pageHistory,                                      // V: 回遊ページ動線
          meta.diffNote || row[6] || '',                    // W: 直前からの変更点
          rawJsonStr                                        // X: 生データ(JSON)
        ];
      } catch (err) {
        Logger.log('JSONパース失敗 (行 ' + rowNum + '): ' + err);
      }
    }

    // JSONがなかった場合のフォールバック（ズレていた値を手動マッピングで正規化）
    if (!fixedRow[1]) {
      fixedRow[0] = row[0]; // A: 日時
      fixedRow[1] = row[1]; // B: 見積ID
      fixedRow[2] = '';     // C: 端末ID
      fixedRow[3] = '';     // D: セッションID
      fixedRow[4] = row[4] || 1; // E: 試算回数
      fixedRow[5] = 'Windows';   // F: デバイス
      fixedRow[6] = 'Browser';   // G: ブラウザ
      fixedRow[7] = '1920x1080'; // H: 画面サイズ
      fixedRow[8] = row[8] || (colH === 'C' ? 'Type C（前窓＋扉）' : 'Type A（全面扉）'); // I: ケージ種類
      fixedRow[9] = row[9] || 'シルバー'; // J: フレーム色
      fixedRow[10] = row[10] || ''; // K: 幅W
      fixedRow[11] = row[11] || ''; // L: 奥行D
      fixedRow[12] = row[12] || ''; // M: 高さH
      fixedRow[13] = row[13] || '標準仕様'; // N: パネル構成
      fixedRow[14] = row[14] || 'なし';     // O: 選択オプション
      fixedRow[15] = row[15] || 0;          // P: 提示価格
      fixedRow[16] = row[16] || 0;          // Q: 概算重量
      fixedRow[17] = row[17] || 0;          // R: 内部原価
      fixedRow[18] = row[18] || 0;          // S: 想定粗利
      fixedRow[19] = row[5] || 0;           // T: 検討時間(秒) ← F列から移動
      fixedRow[20] = 'Direct';              // U: 流入元
      fixedRow[21] = '';                    // V: 回遊動線
      fixedRow[22] = row[6] || '';          // W: 直前からの変更点 ← G列から移動
      fixedRow[23] = '';                    // X: 生データ(JSON)
    }

    // 該当行の全24列（A〜X）を正規位置に一括上書き
    sheet.getRange(rowNum, 1, 1, 24).setValues([fixedRow]);
    fixCount++;
    Logger.log('行 ' + rowNum + ' (' + fixedRow[1] + ') を正常な列配置に修復しました。');
  }

  SpreadsheetApp.flush();
  Logger.log('=== 修復完了: 合計 ' + fixCount + ' 行を正常な列位置に修復しました ===');
  return fixCount;
}

/**
 * =================================================================
 * 【端末データ削除関数】指定した端末IDの全行を一括削除
 * =================================================================
 * 「見積もりシステム」「Web閲覧履歴」「AIチャット履歴」「Web履歴」シートから
 * 指定された端末ID（開発用PCなど）の行を完全に削除します。
 */
function deleteVisitorData(visitorId) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const targetId = String(visitorId).trim();
  const results = {};

  const sheetConfigs = [
    { name: '見積もりシステム', primaryCol: 3 }, // C列が端末ID
    { name: 'Web閲覧履歴', primaryCol: 2 },      // B列が端末ID
    { name: 'AIチャット履歴', primaryCol: 2 },    // B列が端末ID
    { name: 'Web履歴', primaryCol: 3 },          // C列が端末ID
    { name: 'エラーログ', primaryCol: 2 }         // B列が端末ID
  ];

  sheetConfigs.forEach(cfg => {
    const sheet = ss.getSheetByName(cfg.name);
    if (!sheet) return;

    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) {
      results[cfg.name] = 0;
      return;
    }

    const lastCol = sheet.getLastColumn();
    const range = sheet.getRange(2, 1, lastRow - 1, lastCol);
    const values = range.getValues();
    let deletedCount = 0;

    // 下の行から上に向かってループ（行削除時のインデックスズレ防止）
    for (let i = values.length - 1; i >= 0; i--) {
      const row = values[i];
      const rowNum = i + 2;

      // プライマリ列に一致するか、または行のいずれかのセルに一致するか
      let match = (String(row[cfg.primaryCol - 1] || '').trim() === targetId);
      if (!match) {
        for (let c = 0; c < row.length; c++) {
          if (String(row[c] || '').trim() === targetId) {
            match = true;
            break;
          }
        }
      }

      if (match) {
        sheet.deleteRow(rowNum);
        deletedCount++;
      }
    }

    results[cfg.name] = deletedCount;
  });

  SpreadsheetApp.flush();
  Logger.log('=== 削除完了: 端末ID「' + targetId + '」===');
  Logger.log(JSON.stringify(results));

  return createJsonResponse({
    status: 'success',
    action: 'visitor_deleted',
    visitorId: targetId,
    deleted: results
  });
}

/**
 * 開発用PC（usr_ezzx19）を1クリックで削除するGASエディタ用実行関数
 */
function deleteTargetVisitor() {
  const result = deleteVisitorData('usr_ezzx19');
  Logger.log(result.getContent());
}


