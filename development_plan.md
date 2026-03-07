# Development Plan: きなとのケージ屋さん リニューアルプロジェクト

## Current Phase: 企画・設計 (Phase 1)
チーム全体での議論を通じ、サイトのUI/UX向上とコード品質の強化を図るフェーズです。

### チームの基本方針 (.cursorrules準拠)
*   **PM**: 要件定義、進捗管理。本ドキュメント（development_plan.md）をつねに最新に保つ。
*   **Interaction Architect**: 派手な演出を避け、心地よく確信を持てるインタラクションを設計する。
*   **Senior Developer**: 自己文書化されたコード、JSDocの徹底、エラーハンドリングの実装。
*   **DevOps / Librarian**: READMEの更新、適切なGitコミットメッセージの管理。
*   **QA Engineer**: エッジケースやレンダリングのテスト。
*   **Traceability Auditor**: 要件と実際のコードの乖離を許さない厳しい監査。

### 実行予定タスク
1.  **AI生成画像素材の配置**: 
    生成した3枚の画像（hero_interior, wood_cage_detail, acrylic_cage）を `public/assets/` などの静的ディレクトリに配置し、サイト内で利用可能にする。
2.  **インタラクションの改善**:
    ホバー時の自然な浮遊感、画像読み込みにおけるスケルトンスクリーンやプレースホルダーの改善。
3.  **コードのリファクタリング**:
    既存の `src/lib/microcms.ts` や Astro コンポーネントに対し、型注釈やJSDocコメントを付与。データの安全性を担保する。
4.  **ドキュメント化**:
    `README.md` に最新のセットアップ・運用手順を追記し、コミット案を作成する。

## Next Phase: 実装・検証 (Phase 2)
上記タスクを実行し、UI改善とコードの自己文書化を完了しました。

## Current Phase: ナビゲーション強化・Options追加 (Phase 3)
### 実行予定タスク
1.  **microCMSスキーマの修正**: `options` エンドポイントが持つ実際のフィールド構成（`name`, `images`, `details`, `category`, `price`, `applicableTypes`）に合わせて `src/lib/microcms.ts` の型を修正。
2.  **Options一覧ページの作成**: `src/pages/options.astro` を新設し、カテゴリ付きでオプションを一覧表示する画面を構築する。
3.  **グローバルナビゲーションの追加**: `Layout.astro` のヘッダーを拡張し、「Cage Types」「製作事例紹介」「オプション類」へのリンクを配置。スマホ（モバイル）環境では横スクロールで素早くアクセスできるUIにする。
4.  **トップページの文言修正**: "Latest Works" を "製作事例紹介" に変更する。

## Current Phase: ローカル管理ツール(Streamlit)の実装 (Phase 4)
### 実行予定タスク
1.  **Python環境の構築**: `Web` ディレクトリと同階層に `admin-tools` フォルダを作成。`requirements.txt` に `streamlit`, `requests`, `python-dotenv` を定義し、`venv` 環境を整備する。
2.  **API通信モジュールの作成**: `microcms_api.py` などを設け、GET/POST/PATCHリクエスト、および `/media` エンドポイント経由での画像アップロード(Multipart FormData送信)のロジックを一元化する。
3.  **Streamlitアプリの構築 (`app.py`)**: 
    - サイドバー: 「新規登録 / 既存データの編集」および「Types / Works / Options」の切り替えナビゲーション。
    - メイン領域: 各種入力・編集フォーム。参照フィールド（`cageType` や `applicableTypes`など）は事前にGETした各リストからSelectBox/MultiSelectで選べるようにする。
4.  **編集（PATCH）機能実装**: 一覧から対象を選択しフォームに現在値をロード。修正後に更新できるよう組む。

## Current Phase: AstroのSSR化と本番環境同期 (Phase 5)
### 実行予定タスク
1.  **Cloudflare Adapter導入**: `Web` ディレクトリで `npx astro add cloudflare` (または手動インストール) を行い、`dependencies` に追加する。
2.  **Astro Config修正**: `astro.config.mjs` の設定を更新し、`output: 'server'` と `adapter: cloudflare()` を適用する。
3.  **Type Check**: SSR化によりAstroのビルド構成が変わるため、事前に `npm run build` を実行してエラーがないか確認する。
4.  **本番反映とテスト**: 構成完了後、GitHubへプッシュすることでCloudflareに自動ビルドを走らせ、本番URLでリアルタイムにmicroCMSのデータが反映されるか検証する。
