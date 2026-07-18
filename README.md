# きなとのケージ屋さん Webサイト & 管理ツール

「きなとのケージ屋さん」の公式Webサイトおよびデータ管理用ローカルツールのリポジトリです。
本サイトは、ペットに優しくおしゃれなケージを提案・提供するために設計されており、静的サイトジェネレーター（Astro）とヘッドレスCMS（microCMS）を組み合わせた高速かつモダンなWeb体験と、Python（Streamlit）による直感的なデータ管理を提供します。

## 🚀 主な機能・特徴

- **高速なWebフロントエンド**: Astro 5 を採用し、静的生成(SSG)およびサーバーサイドレンダリング(SSR)を組み合わせた高速表示。
- **モダンなスタイリング**: Tailwind CSS v4 を用いた美しいレスポンシブデザインと、快適なUI/UXを実現する滑らかなインタラクション。
- **柔軟なコンテンツ管理**: microCMSを利用したお知らせ、製作事例（Works）、ケージタイプ（Types）、オプションパーツ（Options）の動的配信。
- **専用データ管理ツール**: 非エンジニアでもmicroCMSのデータをローカルからPATCH/POST/画像アップロードできるStreamlit管理アプリケーション。

## 🤖 AIチャットの構成とオーケストレーション

本プロジェクトでは、訪問者向けに生き物の飼育相談と最適なケージサイズ・概算価格を提案する **AI相談チャット窓口**（アシスタント名: 「きなとさん」）を実装しています。
この機能は頻繁にプロンプトや接客ルールがチューニングされるため、構成とオーケストレーションの仕組みを以下にまとめます。

### 1. 関連ファイル
- 📂 **[src/data/prompts.ts](file:///c:/Users/owner/OneDrive/Desktop/Web/src/data/prompts.ts)**
  - **`priceList`**: AIが概算価格を計算するためのケージサイズ別価格表データ。
  - **`aiPromptTemplate`**: 初期バージョンのシステムプロンプト。
  - **`aiPromptTemplateV2`**: **【推奨・現在使用中】** 段階的誘導対話（ステップ1〜5）のルールと記述順序が設定されたアップデート版システムプロンプト。
- 📂 **[src/components/CageChatInteractive.astro](file:///c:/Users/owner/OneDrive/Desktop/Web/src/components/CageChatInteractive.astro)**
  - **【現在アクティブ】** 段階的な誘導対話（サイズ・価格 → 飼育環境 → レイアウト・床材 → 多頭飼育 → メンテナンス）に対応したチャットUIとGemini API連携ロジックを実装したコンポーネント。
- 📂 **[src/components/CageChat.astro](file:///c:/Users/owner/OneDrive/Desktop/Web/src/components/CageChat.astro)**
  - 従来の一括回答形式のチャットコンポーネント。

### 2. プロンプトに設定されている接客ルール（チューニングポイント）
AIの回答品質を一定に保つため、システムプロンプトには以下のような厳密なルールが設定されています：
- **最適サイズの推奨**: 価格表の最大値（例: 90cm）に引っ張られず、生体が終生飼育で快適に過ごせる「真の推奨サイズ」を提示すること。表にない大型ケージ（例: 120cm以上）が必要な場合は、その旨を正直に伝えた上で、算出ロジックから概算価格を提示します。
- **オプション類の自動提案**: 鍵について聞かれた場合は「ワンプッシュ式スライド扉鍵」を提案。TypeAやTypeCなどはあらかじめ鍵代込みの価格であることを正しく案内します。
- **熱源に関する制御**:
  - 強い熱源が不要な生体（ヘビ、ハリネズミ、フクモモ等）には、天板に取り付ける遠赤外線ヒーター（暖突など）で十分であることを案内し、**「金網」や「バスキングランプ」といった言葉は一切使用しない**。
  - 強い熱源が必要な生体（フトアゴヒゲトカゲなど）にのみ、天板金網オプションを提示する。
- **システム仕様の隠蔽**: 「幅100cm、奥行60cm、高さ90cm」を超える大型ケージの補強について言及する際、システム上の閾値（100cmなど）を直接言及せず、「大型ケージになりますので、必要な補強を相談の上で決定します」といった自然な接客の文脈で伝える。

### 3. オーケストレーションの技術的特徴
- **Gemini API (v1) マルチターンへの適合**:
  Gemini API (v1) ではシステムインストラクションがそのまま扱えないケースを考慮し、会話履歴の最初のターンに「システムプロンプトの埋め込み」と「AIの了解メッセージ」をダミーの会話（user/model）として注入する形でオーケストレーションしています。
- **APIプロキシの利用**:
  APIキーの露出を防ぎつつセキュアにリクエストを中継するため、Cloudflare Workersで構築したプロキシサーバー（`https://damp-grass-c643.kinatocage.workers.dev/`）を経由して通信しています。
- **問い合わせへのコンテキスト連携**:
  AIとのチャット履歴を `sessionStorage` に蓄積し、チャットウィンドウ内の「問い合わせフォームに入力」ボタンを押すことで、チャットログを引き継いだ状態でお問い合わせフォーム（`/contact`）へ遷移できます。

## 🛠️ 技術スタック

### フロントエンド / インフラ
- **Framework**: [Astro (v5.17.1)](https://astro.build/)
- **Styling**: [Tailwind CSS (v4.2.2)](https://tailwindcss.com/)
- **CMS SDK**: `microcms-js-sdk` (v3.3.0)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) (SSRモード: `@astrojs/cloudflare` 使用)
- **Other**: `cheerio` (Webスクレイピング/パース用), `dotenv`

### 管理ツール (admin-tools)
- **GUI Framework**: [Streamlit](https://streamlit.io/)
- **Language**: Python 3.x
- **Libraries**: `requests` (API通信用), `python-dotenv`

---

## 📁 プロジェクト構成

```text
kinato-cage-site/
├── .astro/               # Astroのビルドキャッシュ
├── admin-tools/          # ローカル管理ツール (Streamlit / Python)
│   ├── app.py            # Streamlit アプリケーション本体
│   ├── microcms_api.py   # microCMSとの通信モジュール
│   ├── requirements.txt  # Pythonパッケージ依存関係
│   └── venv/             # Python 仮想環境
├── public/               # 静的アセット (画像、ファビコン等)
├── src/                  # Astroフロントエンドのソースコード
│   ├── assets/           # 画像・アセット類
│   ├── components/       # Astro/ReactなどのUIコンポーネント
│   ├── data/             # 静的・型定義・プロンプト等データ
│   ├── layouts/          # 共通ページレイアウト
│   ├── lib/              # microCMSクライアント定義等の共通ロジック
│   ├── pages/            # ページルーティング (Astroファイル)
│   └── styles/           # CSSスタイル設定 (Tailwind読み込み)
├── astro.config.mjs      # Astroの設定ファイル
├── package.json          # Node.jsプロジェクトの定義・スクリプト
└── tsconfig.json         # TypeScript設定
```

---

## ⚙️ 環境構築と起動方法

### 前提条件
- **Node.js**: v18.x 以上推奨
- **Python**: v3.9 以上推奨（`admin-tools` の起動に必要）

### 1. リポジトリのセットアップ
リポジトリをクローンし、Node.jsの依存関係をインストールします。

```bash
npm install
```

### 2. 環境変数の設定
プロジェクトルートに `.env` ファイルを作成し、必要な設定を行います。

```env
PUBLIC_MICROCMS_SERVICE_DOMAIN=your-service-domain
PUBLIC_MICROCMS_API_KEY=your-api-key
```

また、`admin-tools` ディレクトリ内にも専用の `.env` ファイルが必要です。
`admin-tools/.env.example` を参考に、`admin-tools/.env` を作成してください。

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

### 3. 開発サーバーの起動

このプロジェクトには、Astroのフロントエンド開発サーバーと、Pythonの管理ツールを同時に起動する便利なコマンドが用意されています。

#### A. 両方同時に起動する場合 (推奨)
```bash
npm run dev:all
```
*※ `concurrently` を用い、フロントエンド開発サーバー (`npm run dev`) と管理ツール (`npm run admin`) を同時に起動します。*

#### B. フロントエンドのみ起動する場合
```bash
npm run dev
```
ブラウザで [http://localhost:4321/](http://localhost:4321/) を開きます。

#### C. 管理ツール (Streamlit) のみ起動する場合
初回起動時は、`admin-tools` 内でPython仮想環境の準備が必要です。

```bash
# Windows環境での仮想環境準備
cd admin-tools
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
cd ..
```

その後、以下のコマンドで起動します：
```bash
npm run admin
```
ブラウザで [http://localhost:8501/](http://localhost:8501/) が自動的に開きます。

---

## 🚢 ビルドと本番デプロイ

### ローカルでのビルドテスト
```bash
npm run build
```

### デプロイ先
本プロジェクトは **Cloudflare Pages** へのデプロイを想定しています。
Astro config (`astro.config.mjs`) で SSR 出力が設定されており、Cloudflare Pages の Functions を使用して動作します。
環境変数 `PUBLIC_MICROCMS_SERVICE_DOMAIN` および `PUBLIC_MICROCMS_API_KEY` を Cloudflare Pages の管理画面にて設定してください。

---

## 📄 ライセンス

このプロジェクトは、プライベートな独自コンテンツおよびコードを含んでいます。
特別な明記がない限り、ソースコードの無断転載・複製を禁じます。

---
© 2026 きなとのケージ屋さん
