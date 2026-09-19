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
    if (logType === 'web_access' || logType === 'web_history') {
      // 1. Web訪問・流入元・回遊動線ログの処理
      result = handleWebHistoryLog(ss, data, contents);
    } else {
      // 2. 見積もり詳細ログの処理
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
  const typeName = spec.cageType === 'A' ? 'Type A（全面扉）' : 'Type C（前窓＋扉）';
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
