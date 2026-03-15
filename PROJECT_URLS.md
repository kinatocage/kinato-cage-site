# きなとのケージ屋さん - プロジェクトURL一覧・デプロイ手順

## 🌐 本番環境（一般公開用）
- **公開用Webサイト (Cloudflare Pages)**
  🔗 https://kinato-cage-site.pages.dev/
  - 本番の最新状態が反映されるURLです。お客様はこちらのURLを見る形になります。

## 💻 ローカル開発環境（手元でのテスト・確認用）
- **Webサイト開発画面 (Astro)**
  🔗 http://localhost:4321/
  - `C:\Users\owner\OneDrive\Desktop\Web` にて `npm run dev` を実行している間だけ見れるテスト用サイトです。ファイルを保存すると即座に画面が変わります。
- **管理者用ツール (Streamlit)**
  🔗 http://localhost:8501/
  - `C:\Users\owner\OneDrive\Desktop\Web\admin-tools` フォルダにて `.\venv\Scripts\activate.ps1` と `streamlit run app.py` で起動する、オーダー管理や見積もり、ケージの一覧を管理するための社内ツールです。

## ⚙️ 各種管理ダッシュボード（設定やデータ入力用）
- **Cloudflare 管理画面**
  🔗 https://dash.cloudflare.com/
  - ページのデプロイ履歴の確認や、後から「独自ドメイン（`kinatocage.com`など）」を設定したい場合に使います。
- **microCMS 管理画面**
  🔗 https://kinatocage.microcms.io/apis/types （※プロジェクト名により変わります）
  - 作例（ギャラリー）の写真や、ケージの種類などを追加・編集するためのシステムです。ここで記事を追加すると、Astroのサイトに自動で反映されます。
- **GitHub リポジトリ**
  🔗 https://github.com/kinatocage/kinato-cage-site
  - ソースコードのバックアップと、変更履歴の管理場所です。

---

## 🚀 最新版を本番（Cloudflare）へ公開する時の2ステップ
デザインを変えたり、コードを修正したあと「実機（本番URL）に反映させたい！」という時は、VSCodeのターミナルの `C:\Users\owner\OneDrive\Desktop\Web` フォルダ内で以下の2行を実行するだけで完了します。
（※Githubを経由しなくてOKです）

1. ビルド（本番用にファイルをまとめる）
```bash
npm run build
```

2. デプロイ（Cloudflareにアップロードする）
```bash
npx wrangler pages deploy dist --project-name="kinato-cage-site"
```
