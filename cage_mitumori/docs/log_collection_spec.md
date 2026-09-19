# Googleスプレッドシート見積もりログ収集 詳細仕様書

本ドキュメントは、3Dケージ見積もりシミュレーターにおいて、お客様が見積もりボタンを押した際の内容（仕様・価格・端末・試行錯誤プロセス）をGoogleスプレッドシートへ自動蓄積するための完全マニュアルです。

---

## 1. 概要と目的

* **背景**: 以前のGoogle AI Studioでのチャットログのように、お客様が「どんなサイズ・仕様で悩み、いくらの提示を受けたのか」を可視化し、商品開発やマーケティング改善に活かします。
* **安全性・プライバシー**: お客様の個人情報（氏名・電話番号・メール等）は一切収集せず、匿名の製品仕様・端末環境のみを完全バックグラウンドで収集します。
* **見積IDの1対1紐づき**: 見積もり時に発行される「見積ID（例: `EST-20260919-8F3A`）」は、**画像カード・問い合わせテキスト・スプレッドシートのすべてで完全一致**します。お客様から問い合わせがあった際、スプレッドシートで `Ctrl + F` 検索するだけで該当ログを一発特定できます。

---

## 2. 収集データ項目一覧（スプレッドシートの列定義）

スプレッドシートの1行目（A列〜U列）には、以下のヘッダーを設定します。

| 列 | 項目名 | 内容例 | 用途・分析メリット |
| :-: | :--- | :--- | :--- |
| **A** | 日時 | `2026/09/19 14:05:12` | 試算された正確な日時 |
| **B** | 見積ID | `EST-20260919-8F3A` | **問い合わせテキスト・画像カードと照合するキー** |
| **C** | 端末ID (Visitor) | `usr_a8f3` | 同一端末（ブラウザ）の識別。リピート訪問の分析 |
| **D** | セッションID | `ses_0192` | 1回の訪問の識別。ブラウザを閉じると新IDに切替 |
| **E** | 試算回数 | `1` / `2` / `3`... | その訪問内で何回目の見積もりボタンクリックか |
| **F** | デバイス | `iPhone` / `Android` / `PC` | モバイル比率の把握、UI/3D軽量化の優先度決定 |
| **G** | ブラウザ | `Safari` / `Chrome` / `Edge` | ブラウザ固有の表示崩れ対策 |
| **H** | 画面サイズ | `393x852` / `1920x1080` | お客様の実際の画面解像度・ボタン配置調整用 |
| **I** | ケージ種類 | `Type A（全面扉）` / `Type C` | どちらのタイプが人気かの比率分析 |
| **J** | フレーム色 | `シルバー` / `ブラック` | フレーム色の人気傾向・比率分析 |
| **K** | 幅W(mm) | `900` | ケージの横幅 |
| **L** | 奥行D(mm) | `450` | ケージの奥行 |
| **M** | 高さH(mm) | `450` | ケージの高さ |
| **N** | パネル構成 | `床:透明アクリル \| 背:中空ポリカ \| 側:パンチング \| 天:金網25mm` | 各面の選択パネル素材・板厚の完全記録 |
| **O** | 選択オプション | `正面2倍幅, 自在キャスター, 換気調整板` | 人気オプションや同時購入の組み合わせ分析 |
| **P** | 提示価格(円) | `31200` | お客様に画面上で提示された税込合計金額 |
| **Q** | 概算重量(kg) | `8.6` | 計算されたケージ総重量 |
| **R** | 内部原価(円) | `18900` | システム内部で計算された資材・部材原価 |
| **S** | 想定粗利(円) | `12300` | 提示価格 − 内部原価（どのサイズが利益率が良いか） |
| **T** | 検討時間(秒) | `45` | ページを開いてからボタンを押すまでの所要秒数 |
| **U** | 流入元(Referrer) | `https://www.instagram.com/` | どのSNS・Webサイトから訪問されたか |
| **V** | 直前からの変更点 | `天分割:パンチング/金網25mm, 色:銀→黒` | 2回目以降の試算で何を変えたかの思考プロセス |
| **W** | 生データ(JSON) | `{"timestamp":...}` | AI分析や将来の追加集計用バックアップ |

---

## 3. Google Apps Script（GAS）完成版ソースコード

以下のコードを、Googleスプレッドシートの「拡張機能」＞「Apps Script」に貼り付けます。

```javascript
/**
 * 3Dケージ見積もりシミュレーター ログ受信用 Webhook API
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const contents = e.postData.contents;
    const data = JSON.parse(contents);

    const now = new Date();
    const formattedDate = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');

    const spec = data.spec || {};
    const calc = data.calculated || {};
    const dev = data.device || {};
    const meta = data.meta || {};

    // ケージ種類の日本語化
    const typeName = spec.cageType === 'A' ? 'Type A（全面扉）' : 'Type C（前窓＋扉）';

    // フレーム色
    const frameColorName = spec.frameColorDisplayName || (spec.frameColor === 'black' ? 'ブラック' : 'シルバー');

    // パネル構成テキスト
    const panelsText = spec.panelsSummary || '標準仕様';

    // オプション一覧テキスト
    let optText = spec.optionsSummary || '';
    if (!optText) {
      const optList = [];
      if (spec.hasFloorReinforcement) optList.push('床補強');
      if (spec.hasTopReinforcement || (spec.W && spec.W > 940)) optList.push('天板補強');
      if (spec.hasSideReinforcement) optList.push(`側面補強(${spec.sideOpeningH || ''}mm)`);
      if (spec.hasDoorAntiFlex) optList.push('扉たわみ防止');
      if (spec.footType === 'caster') optList.push('自在キャスター');
      if (spec.hasSideVentCover) optList.push('換気量調整板');
      if (spec.frontWideFrame === '2x') optList.push('正面2倍幅');
      if (spec.frontWideFrame === '3x') optList.push('正面3倍幅');
      optText = optList.length > 0 ? optList.join(', ') : 'なし';
    }

    // 粗利計算
    const price = calc.priceWithMarkup || 0;
    const cost = calc.rawCost || 0;
    const profit = price - cost;

    // スプレッドシートに1行追記（全23列: A〜W）
    sheet.appendRow([
      formattedDate,                    // A: 日時
      data.estimateId || '',            // B: 見積ID
      data.visitorId || '',             // C: 端末ID
      data.sessionId || '',             // D: セッションID
      data.seq || 1,                    // E: 試算回数
      dev.type || '',                   // F: デバイス
      dev.browser || '',                // G: ブラウザ
      dev.screen || '',                 // H: 画面サイズ
      typeName,                         // I: ケージ種類
      frameColorName,                   // J: フレーム色
      spec.W || '',                     // K: 幅W
      spec.D || '',                     // L: 奥行D
      spec.H || '',                     // M: 高さH
      panelsText,                       // N: パネル構成
      optText,                          // O: 選択オプション
      price,                            // P: 提示価格
      Number((calc.weight || 0).toFixed(1)), // Q: 概算重量
      cost,                             // R: 内部原価
      profit,                           // S: 想定粗利
      meta.elapsedSec || 0,             // T: 検討時間(秒)
      meta.referrer || '',              // U: 流入元
      meta.diffNote || '',              // V: 直前からの変更点
      contents                          // W: 生データ(JSON)
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 1行目のヘッダー項目を自動セットアップする関数
 * （Apps Script上部のプルダウンで setupSheet を選んで「実行」をクリックしてください）
 */
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = [
    '日時', '見積ID', '端末ID', 'セッションID', '試算回数',
    'デバイス', 'ブラウザ', '画面サイズ', 'ケージ種類', 'フレーム色',
    '幅W(mm)', '奥行D(mm)', '高さH(mm)', 'パネル構成', '選択オプション',
    '提示価格(円)', '概算重量(kg)', '内部原価(円)', '想定粗利(円)',
    '検討時間(秒)', '流入元(Referrer)', '直前からの変更点', '生データ(JSON)'
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#f3f4f6');
  sheet.setFrozenRows(1);
}
```

---

## 4. Googleスプレッドシート＆GAS 設定手順（3ステップ）

Googleアカウントやパスワードを誰にも渡すことなく、ご自身の手元で5分ほどで完了できます。

### ステップ1：スプレッドシートを作成
1. ログを管理したいGoogleアカウントで [Googleスプレッドシート](https://sheets.new) を新規作成します。
2. ファイル名を「**ケージシミュレーター_見積もりログ**」等にします。
3. 1行目の **A1 〜 W1** に、上記の表の項目名（`日時`, `見積ID`, `端末ID`, ...）を入力します（または後述の `setupSheet` を実行）。

### ステップ2：GASコードを貼り付け
1. スプレッドシートの上部メニュー **「拡張機能」** ＞ **「Apps Script」** をクリックします。
2. 最初に入力されているコードをすべて消去し、**上記「3. Google Apps Script（GAS）完成版ソースコード」を丸ごと貼り付け**ます。
3. 上部の **フロッピーディスクアイコン（保存）** をクリックします。

### ステップ3：ウェブアプリとしてデプロイ（公開）
1. 画面右上の青い **「デプロイ」** ＞ **「新しいデプロイ」** をクリックします。
2. 左側の歯車マークをクリックし、**「ウェブアプリ」** を選択します。
3. 以下の通り設定します：
   * **説明**: `見積もりログ受信API`
   * **次のユーザーとして実行**: `自分（あなたのGoogleアカウント）`
   * **アクセスできるユーザー**: `全員`（※匿名のお客様のブラウザから書き込めるようにするため必須）
4. **「デプロイ」** をクリックします。
   * ※初回のみ「アクセスを承認」ポップアップが出ます。「アカウントを選択」＞「詳細」＞「（安全ではないページ）に移動」＞「許可」をクリックします。
5. デプロイ完了画面に表示される **「ウェブアプリのURL」**（`https://script.google.com/macros/s/XXXXX/exec`）をコピーします。

---

## 5. シミュレーター側での有効化方法

すでにシミュレーター側のプログラム（`src/main.js`）にはログ送信ロジックが組み込まれています。  
発行されたURLを、ルート直下の **`cost_materials_config.js`** に貼り付けるだけで即座にログ収集が開始されます。

```javascript
// cost_materials_config.js の最下部
  // 本番稼働中エンドポイント (v2)
  gasLogEndpointUrl: 'https://script.google.com/macros/s/AKfycbyGOKgX2Yy01VbMNe4g_2oyr9Lr_Kq-ziKmvh3rnwGmXKV-kLkoEkVUQ2uOqnwNE7tX/exec',
  // デプロイID: AKfycbyGOKgX2Yy01VbMNe4g_2oyr9Lr_Kq-ziKmvh3rnwGmXKV-kLkoEkVUQ2uOqnwNE7tX
  ...
}
```

* **安全仕様**: URLが空文字のときは一切通信を行わないため、開発中・ローカル環境でもエラーは出ません。

---

## 6. 将来のWebサイト本流合流時の連携メモ

自社Webサイト（本流）からシミュレーターへのリンクに、以下のバトンパス処理を入れることで、お客様がどのSNS・外部サイトから来たのかを100%追跡できます。

```html
<!-- 自社WebサイトのHTML例 -->
<!-- 訪問時のリファラや広告パラメータを引き継いでシミュレーターへ渡す -->
<a href="https://simulator.example.com/?origin=instagram">3Dケージ見積もりはこちら</a>
```

シミュレーター側はURLパラメータ `?origin=...` を読み取ってスプレッドシートの「流入元」列に記録するため、シミュレーターと自社サイトが別ドメインや別サーバーであっても完璧に連携できます。
