# Googleスプレッドシート Webシステムログ＆見積もりログ収集 詳細仕様書

本ドキュメントは、**「Webサイト全体の流入元・回遊動線」** および **「3Dケージ見積もりシミュレーターの詳細仕様」** を1つのGoogleスプレッドシート（**Webシステムのログ**）へ自動蓄積・連携するための完全マニュアルです。

---

## 1. 全体像と特徴

* **スプレッドシート名**: `Webシステムのログ`
* **2つのシートで役割分担**:
  1. **`Web履歴` シート**: サイト訪問時・ページ回遊時に1行記録。同一セッションの回遊動線（例: `トップ ➔ コンセプト ➔ 見積もりシステム`）を上書き更新し、行数を無駄に増やさず動線を可視化（プラン2方式）。
  2. **`見積もりシステム` シート**: 見積もりボタンを押した瞬間の寸法・素材・オプション・提示価格・原価・粗利・回遊動線を詳細記録。
* **端末ID・セッションIDの共通化**:
  * Webサイト（Astro）と見積もりシミュレーター（`/sim/`）で全く同一の `端末ID (usr_xxxx)` および `セッションID (ses_xxxx)` を使用。
  * `Web履歴` と `見積もりシステム` の両シート間で、同一のお客様を `Ctrl + F` で完全に追跡・照合可能。

---

## 2. スプレッドシートの列定義

### シート1：`見積もりシステム`（全24列: A〜X）
| 列 | 項目名 | 内容例 | 用途・分析メリット |
| :-: | :--- | :--- | :--- |
| **A** | 日時 | `2026/09/19 14:05:12` | 試算された正確な日時 |
| **B** | 見積ID | `EST-20260919-8F3A` | 画像カード・問い合わせテキストと照合するキー |
| **C** | 端末ID (Visitor) | `usr_a8f3` | 同一端末（ブラウザ）の識別。リピート訪問分析 |
| **D** | セッションID | `ses_0192` | 1回の訪問の識別（ブラウザを閉じると切替） |
| **E** | 試算回数 | `1` / `2` / `3`... | その訪問内で何回目の見積もりボタンクリックか |
| **F** | デバイス | `iPhone` / `Android` / `PC` | モバイル比率の把握 |
| **G** | ブラウザ | `Safari` / `Chrome` / `Edge` | 表示崩れ対策 |
| **H** | 画面サイズ | `393x852` / `1920x1080` | お客様の画面解像度 |
| **I** | ケージ種類 | `Type A（全面扉）` / `Type C` | 種類の人気傾向 |
| **J** | フレーム色 | `シルバー` / `ブラック` | フレーム色の人気傾向 |
| **K** | 幅W(mm) | `900` | ケージ横幅 |
| **L** | 奥行D(mm) | `450` | ケージ奥行 |
| **M** | 高さH(mm) | `450` | ケージ高さ |
| **N** | パネル構成 | `床:透明アクリル \| 背:中空ポリカ \| ...` | 選択パネル素材・板厚 |
| **O** | 選択オプション | `正面2倍幅, 自在キャスター, 換気調整板` | 人気オプションの組み合わせ分析 |
| **P** | 提示価格(円) | `31200` | 画面上で提示された税込合計金額 |
| **Q** | 概算重量(kg) | `8.6` | 計算されたケージ総重量 |
| **R** | 内部原価(円) | `18900` | 部材・加工原価 |
| **S** | 想定粗利(円) | `12300` | 提示価格 − 内部原価 |
| **T** | 検討時間(秒) | `45` | 見積もりまでの所要秒数 |
| **U** | 流入元(Referrer) | `https://www.instagram.com/` | 外部流入元 |
| **V** | 回遊ページ動線 | `トップ ➔ コンセプト ➔ 見積もりシステム` | 見積もりに至るまでのサイト内動線 |
| **W** | 直前からの変更点 | `天分割:パンチング/金網25mm, 色:銀→黒` | 試算ごとの変更思考プロセス |
| **X** | 生データ(JSON) | `{"timestamp":...}` | 追加集計・AI分析用バックアップ |

---

### シート2：`Web履歴`（全11列: A〜K）
※同一セッションIDは1行に集約され、ページを移動するたびに「最新更新日時」「回遊ページ動線」「閲覧ページ数」が上書き更新されます。

| 列 | 項目名 | 内容例 | 用途・分析メリット |
| :-: | :--- | :--- | :--- |
| **A** | 初回訪問日時 | `2026/09/19 14:00:10` | サイトに入ってきた正確な日時 |
| **B** | 最新更新日時 | `2026/09/19 14:08:25` | 最後に別ページを見た日時（滞在時間推測用） |
| **C** | 端末ID (Visitor) | `usr_a8f3` | 同一端末の識別（リピーター分析） |
| **D** | セッションID | `ses_0192` | **見積もりシステムシートと照合する共通キー** |
| **E** | 流入元種別 | `Instagram` / `Google検索` / `X (Twitter)` / `直接 / お気に入り` | どの経路が最も効果的か一目瞭然 |
| **F** | 流入元URL/リファラ | `https://l.instagram.com/` | 詳細な流入元URL |
| **G** | 着地ページ(LP) | `/` (トップ) または `/sim/` など | お客様が最初に目にしたページ |
| **H** | 回遊ページ動線 | `トップ ➔ コンセプト ➔ 見積もりシステム` | サイト内をどのように巡回したか |
| **I** | 閲覧ページ数 | `3` | セッション内の総PV数 |
| **J** | デバイス / ブラウザ | `iPhone / Safari` | アクセス環境 |
| **K** | 画面サイズ | `393x852` | 解像度 |

---

## 3. Google Apps Script（GAS）完成版ソースコード

以下のコードを、Googleスプレッドシートの「拡張機能」＞「Apps Script」の `コード.gs` に上書き貼り付けします。

```javascript
/**
 * =================================================================
 * きなとのケージ屋さん - Webシステム & 見積もりログ収集 GAS Webhook API
 * =================================================================
 */

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
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
      // 1. Web訪問・流入元・回遊動線ログの処理（プラン2: 同一セッションは1行に集約・更新）
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
        existingRow = i + 2;
        break;
      }
    }
  }

  if (existingRow > 0) {
    // 既存セッションの更新（最新日時、回遊動線、ページ数）
    sheet.getRange(existingRow, 2).setValue(formattedDate);
    sheet.getRange(existingRow, 8).setValue(pageHistory);
    sheet.getRange(existingRow, 9).setValue(pageCount);
    return createJsonResponse({ status: 'success', action: 'updated', row: existingRow });
  } else {
    // 新規訪問セッションの追加
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

  const typeName = spec.cageType === 'A' ? 'Type A（全面扉）' : 'Type C（前窓＋扉）';
  const frameColorName = spec.frameColorDisplayName || (spec.frameColor === 'black' ? 'ブラック' : 'シルバー');
  const panelsText = spec.panelsSummary || '標準仕様';
  const optText = spec.optionsSummary || 'なし';

  const price = calc.priceWithMarkup || 0;
  const cost = calc.rawCost || 0;
  const profit = price - cost;
  const pageHistory = Array.isArray(meta.pageHistory) ? meta.pageHistory.join(' ➔ ') : (meta.pageHistory || '');

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

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * =================================================================
 * 初期セットアップ用関数（Apps Script上部で選択して「実行」）
 * =================================================================
 */
function setupSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. 「見積もりシステム」シートの作成またはリネーム
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

  // 2. 「Web履歴」シートの作成
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
    .setBackground('#e0f2fe')
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
    .setBackground('#fef3c7')
    .setHorizontalAlignment('center');
  sheet.setFrozenRows(1);
}
```

---

## 4. スプレッドシート側でやるべき操作手順（5ステップ）

### ステップ1：スプレッドシート名を変更
1. Googleスプレッドシートを開きます。
2. 左上のファイル名「**ケージシミュレーター_見積もりログ**」をクリックし、「**Webシステムのログ**」に変更します。

### ステップ2：Apps Scriptコードを上書き貼り付け
1. メニューバーの **「拡張機能」** ＞ **「Apps Script」** をクリックします。
2. エディタ内の既存コードをすべて消去し、上記 **「3. Google Apps Script（GAS）完成版ソースコード」** を丸ごと貼り付けます。
3. 画面上部の **フロッピーディスクアイコン（保存）** をクリックします。

### ステップ3：自動セットアップ関数を実行（ワンクリック）
1. Apps Script画面上部の関数プルダウン（実行ボタンの左隣）で **`setupSpreadsheet`** を選択します。
2. **「実行」** ボタンをクリックします。
3. スプレッドシートに戻ると、既存の「シート1」が **「見積もりシステム」** に変わり、新シート **「Web履歴」** がヘッダー装飾付きで自動生成されます。

### ステップ4：ウェブアプリとして最新版を公開（デプロイ更新）
1. Apps Script画面右上の青い **「デプロイ」** ＞ **「デプロイを管理」** をクリックします。
2. 左側の「ウェブアプリ」を選択し、右上の鉛筆アイコン（編集）をクリックします。
3. **バージョン** のプルダウンで **「新バージョン」** を選択します。
4. **「デプロイ」** をクリックします。
   * ※URLは以前と同じものが維持されるため、プログラム側のURL変更は不要です。

---

## 5. ローカル環境でのテスト方法

1. `npm run dev` でローカルサーバーを起動します。
2. ブラウザで例えば `http://localhost:4321/?origin=instagram` を開きます。
3. 開発者ツールのコンソール（F12）を開くと、`[WebLog] (ローカル環境) GASへアクセスログを送信中` と表示され、スプレッドシートの **`Web履歴`** シートに「Instagram」「直接/お気に入り」「トップ」などが書き込まれます。
4. 他のページ（コンセプト、見積もりシステム）へ遷移すると、`Web履歴` シートの同一行の「回遊ページ動線」が `トップ ➔ コンセプト ➔ 見積もりシステム` に更新されます。
5. `/sim/` で「見積もりと重量を計算」ボタンを押すと、**`見積もりシステム`** シートに詳細が書き込まれ、端末ID・セッションIDが両シートで一致していることを確認できます。

---

## 6. 本番デプロイ時の重要チェック事項（ローカルログ停止）

テストが完了し、本番環境（Cloudflare Pages）へ公開する際は、ローカルデバッグ時のテストログがスプレッドシートに混入しないよう、以下の2箇所のフラグを `true` に設定してください：

1. **`src/components/WebAnalyticsTracker.astro`**:
   ```javascript
   const SKIP_LOG_ON_LOCALHOST = true;
   ```
2. **`cage_mitumori/src/main.js`**:
   ```javascript
   const SKIP_LOG_ON_LOCALHOST = true;
   ```
   ※変更後は `npm run build:sim` でシミュレーター成果物を同期してください。
