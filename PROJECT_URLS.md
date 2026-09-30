# きなとのケージ屋さん - プロジェクトURL一覧・デプロイ手順

## 🌐 本番環境（一般公開用）
- **公開用Webサイト (Cloudflare Pages)**
  🔗 https://kinato-cage-site.pages.dev/
  - 本番の最新状態が反映されるURLです。お客様はこちらのURLを見る形になります。
- **3Dケージ見積もりシミュレーター（限定公開・秘匿運用）**
  🔗 https://kinato-cage-site.pages.dev/sim/
  - TOPページ等にはリンクを掲載せず、URL直接入力のみでアクセスできる3Dシミュレーター画面です（検索エンジン除外 noindex 設定済み）。

## 💻 ローカル開発環境（手元でのテスト・確認用）
- **Webサイト開発画面 (Astro)**
  🔗 http://localhost:4321/
  - `C:\Users\owner\OneDrive\Desktop\Web` にて `npm run dev` を実行している間だけ見れるテスト用サイトです。ファイルを保存すると即座に画面が変わります。
  - シミュレーター画面も 🔗 http://localhost:4321/sim/ でそのまま確認できます。
- **シミュレーター単体開発画面 (Vite)**
  🔗 http://localhost:5173/
  - `cage_mitumori` フォルダ内の `start_simulator.bat` をダブルクリック、または `cd cage_mitumori && npm run dev` でシミュレーター単体を高速開発できます。
  - 修正内容は `npm run build` または `npm run build:sim` で本流サイト（`public/sim/`）へ自動反映されます。
- **管理者用ツール (Streamlit)**
  🔗 http://localhost:8501/
  - `C:\Users\owner\OneDrive\Desktop\Web` にて `npm run admin` で一発起動できます。
  - （内部的には `.\admin-tools\venv\Scripts\python.exe -m streamlit run .\admin-tools\app.py` を実行しています）
- **両方を一気に起動する場合**
  - `npm run dev:all` を実行すると、Webサイト開発と管理者ツールの両方が同時に立ち上がります。

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

## 🚀 最新版を本番（Cloudflare）へ公開する手順（安全デプロイ）

> [!IMPORTANT]
> **【二重事故防止セーフティゲート（自動検証システム）】**
> 原価・部材リストの露出事故およびログ不達事故を永久に防ぐため、自動検証ゲートが組み込まれています。
> デプロイ時は以下の**安全デプロイコマンド（1行）**を実行してください。

```bash
npm run deploy:safe
```

このコマンドを実行すると、以下の6段階の安全検証が全自動で実行されます：
1. **静的検証 (ESLint)**: 未宣言変数（`singleCost`等のReferenceError要因）や構文エラーを100%機械検知（エラー時は即停止）
2. **ソースコード漏洩検査**: `index.html` に部材表や原価タグが静的混入していないかスキャン（混入時は即停止）
3. **プロダクションビルド**: シミュレーター（Vite）およびサイト全体（Astro）のビルド
4. **成果物漏洩検査**: 配布用HTML内にBOM要素が混入していないか最終確認
5. **GASエンドポイント設定検証**: 見積もりログ収集URLが正しく設定されているか確認
6. **Cloudflareデプロイ**: 上記すべてがPASSした場合のみ本番公開を実行

---

## 🛠️ 管理者用: 資材リスト（BOM・原価内訳）の確認方法
通常のお客様向け画面および本番環境（`kinato-cage-site.pages.dev`）では、部材リストや原価情報は**一切出力されません（HTMLにも存在せず、URLにパラメータをつけても絶対に表示されません）**。

部材数や原価内訳を確認したい場合は、**ローカル開発環境でのみ** URLの末尾に `?debug=bom` を付与してアクセスしてください：

- **ローカル開発環境でのBOM確認**:
  🔗 http://localhost:5173/?debug=bom
  *(※一度開くとセッション中保持されます。解除したい場合は `?debug=off` を付与してください)*
- **本番環境（完全遮断）**:
  🔗 https://kinato-cage-site.pages.dev/sim/
  *(※本番環境では `?debug=bom` を付与してもセキュリティ保護により完全に無効化されます)*

