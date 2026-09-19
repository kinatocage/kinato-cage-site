# 本流Webサイト統合手順書・引継ぎ資料（開発・連携ガイド）

本書は、「きなとのケージ屋さん 3Dケージ見積もりシミュレーター（`cage_mitumori`）」を、本流のWebサイト（`https://kinato-cage-site.pages.dev/`）のサブディレクトリ **`/sim/`**（`https://kinato-cage-site.pages.dev/sim/`）として統合・結合するための公式手順および引継ぎ仕様書です。

本流Webサイト側の開発を担当するAI（Antigravity）および開発者の方は、本書の手順に従って作業を行ってください。

---

## 1. 統合のゴールと全体構成

* **本流Webサイト URL**: `https://kinato-cage-site.pages.dev/`
* **シミュレーター公開 URL**: `https://kinato-cage-site.pages.dev/sim/`
* **ホスティング環境**: Cloudflare Pages
* **シミュレーター技術スタック**: Vite + Vanilla JavaScript (ES Modules) + Three.js

---

## 2. 結合アプローチの選択肢

本流Webサイトのフレームワーク（Next.js / Astro / Vite / 純粋な静的HTML など）に応じて、以下の2つのいずれかの方法で統合できます。
**推奨は最もシンプルかつ安全な「パターンA（静的ビルド成果物コピー方式）」**です。

### 【推奨】パターンA：本流Webサイトの `public/sim/` への配置（即座に完了）

Cloudflare Pages や一般的なWebフレームワーク（Next.js, Vite, Astro, Nuxt等）では、`public/` フォルダ配下に置かれた静的ファイルはそのまま公開URLパスとして配信されます。

#### 具体的な手順：

1. **シミュレーター側でビルドを実行**
   ```bash
   # cage_mitumori ディレクトリ内
   npm run build
   ```
   ビルドが完了すると、`dist/` ディレクトリが生成されます。
   ※ `vite.config.js` にて `base: './'` が設定されているため、生成されたアセットはすべて相対パスになっており、`/sim/` 配下に置いてもパス崩れが発生しません。

2. **本流Webサイト側に `public/sim/` を作成**
   本流Webサイト側のプロジェクト直下にある `public/` フォルダ内に、`sim` フォルダを作成します。
   ```text
   kinato-cage-site/ （本流Webサイトのリポジトリ）
   └── public/
       └── sim/     <-- ここを作成
   ```

3. **`dist/` の中身を丸ごと `public/sim/` にコピー**
   シミュレーターの `dist/` の中身をすべて `public/sim/` に配置します。
   ```text
   kinato-cage-site/
   └── public/
       └── sim/
           ├── index.html
           ├── assets/
           │   ├── index-xxxx.js
           │   └── index-xxxx.css
           ├── logo_kinato.png
           ├── character_transparent.png
           └── qr_code_kinato.png
   ```

4. **本流Webサイト側でナビゲーション・リンクを設置**
   本流サイトのヘッダーメニューやCTAボタン等に、`/sim/` へのリンクを追加します。
   ```html
   <a href="/sim/" class="btn-simulator">3Dケージ見積もりシミュレーターを試す</a>
   ```

5. **本流Webサイト側をコミット & プッシュ**
   Cloudflare Pages が自動デプロイを検知し、数分以内に `https://kinato-cage-site.pages.dev/sim/` でシミュレーターが閲覧可能になります。

---

### パターンB：同一リポジトリへの完全コード統合（開発も一元化する場合）

ソースコードレベルで完全に1つのフォルダ・リポジトリにまとめたい場合の手順です。

1. **リポジトリ構造の例（モノレポ風配置）**
   ```text
   kinato-cage-site/
   ├── apps/
   │   ├── web/          # 本流Webサイト本体
   │   └── simulator/    # この cage_mitumori をそのまま移動
   ├── package.json
   ```
   または本流サイト直下にサブフォルダとして配置：
   ```text
   kinato-cage-site/
   ├── src/              # 本流Webサイトのソース
   ├── sim-src/          # シミュレーターのソースコード一式
   ├── package.json
   ```

2. **ビルドスクリプトの連携（package.json 例）**
   本流Webサイトのビルド時に、シミュレーターも同時にビルドして本流サイトの公開ディレクトリに出力します。
   ```json
   {
     "scripts": {
       "build:sim": "cd sim-src && npm install && npm run build",
       "build": "npm run build:sim && cp -r sim-src/dist public/sim && vite build"
     }
   }
   ```

---

## 3. シミュレーター側の主要な仕様・設計（引継ぎ事項）

本流Webサイト担当者がシミュレーターの設定やメンテナンスを行うための重要情報です。

### 3.1 価格・資材原価・工賃の設定 (`cost_materials_config.js`)
* **ファイルの役割**:
  アルミフレームの単価、各パネル（透明アクリル、黒マット、中空ポリカ、パンチング、金網各サイズ）の㎡単価、基本工賃、追加オプション（補強、換気板、扉たわみ防止、スライド鍵等）の原価および提示価格を集中管理しています。
* **編集方法**:
  JavaScriptのオブジェクト形式（`const COST_CONFIG = { ... }`）で平易に記載されています。
  価格改定や資材原価の変動時は、このファイルの該当数値を書き換えて再ビルドするだけで反映されます。

### 3.2 生体プリセット設定 (`preset_creatures_config.js`)
* **ファイルの役割**:
  「ヒョウモントカゲモドキ」「フトアゴヒゲトカゲ」「ボールパイソン」「リクガメ」等の推奨寸法（幅・奥行・高さ）およびおすすめパネル構成（天板金網、床中空ポリカなど）を定義しています。
* **追加・変更**:
  生体の追加や推奨サイズの微調整は、本ファイルに新しいキーを追加するだけでUIのセレクトボックスへ自動反映されます。

### 3.3 見積もりログ自動収集（Googleスプレッドシート連携）
お客様がシミュレーターで「見積りと重量計算」を実行すると、試算ログが自動的にGoogleスプレッドシートへリアルタイム記録されます。

* **受信用Webhook URL (GAS)**:
  `https://script.google.com/macros/s/AKfycbyGOKgX2Yy01VbMNe4g_2oyr9Lr_Kq-ziKmvh3rnwGmXKV-kLkoEkVUQ2uOqnwNE7tX/exec`
* **デプロイID (v2)**:
  `AKfycbyGOKgX2Yy01VbMNe4g_2oyr9Lr_Kq-ziKmvh3rnwGmXKV-kLkoEkVUQ2uOqnwNE7tX`
* **仕様書**:
  [`docs/log_collection_spec.md`](./log_collection_spec.md) に詳細なフィールド定義、GASコード、自動セットアップ関数（`setupSheet`）が記載されています。
* **特徴**:
  直前の試算からの変更点（例: `W:800→900, 床補強追加`）や、検討時間（秒）、デバイス・ブラウザ情報、粗利計算結果が自動送信されます。

### 3.4 見積もりカード画像生成・ダウンロード機能
* シミュレーター内の「お見積もり結果・画像保存を開く」から、Three.js の3Dキャプチャ＋公式ロゴ（`public/logo_kinato.png`）＋マスコットキャラ（`public/character_transparent.png`）＋ショップ案内QRコード（`public/qr_code_kinato.png`）を合成した高解像度PNG画像を端末（PC・スマホ）に直接保存できます。
* 仕様テキストのワンクリッククリップボードコピー機能も実装されており、公式LINEやお問い合わせフォームへの貼り付け注文に直結しています。

---

## 4. 本流Webサイト側で確認・対応すべきチェックリスト

- [ ] **`/sim/` へのアクセス確認**:
  `https://kinato-cage-site.pages.dev/sim/` を開き、3Dケージモデル（Three.js）が正常に描画されること。
- [ ] **アセット読み込みの確認**:
  F12開発者ツールの「Console」「Network」タブで、404エラー（JS, CSS, PNG画像等）が発生していないこと。
- [ ] **見積もり計算・ログ送信の動作確認**:
  寸法を変更して「見積りと重量計算」ボタンを押し、HUDおよびモーダルに価格が表示され、GASスプレッドシートに新しい行が追加されること。
- [ ] **画像保存・テキストコピーの動作確認**:
  モーダルから「見積もりカードを画像保存 (PNG)」をクリックしてPNGファイルがダウンロードできること。
- [ ] **本流サイト内リンクの動作確認**:
  本流Webサイトのトップページやグローバルナビゲーションから `/sim/` への動線が正しく動作すること。
