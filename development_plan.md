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
上記タスクを順次実行し、ビルドエラーやUIの崩れがないかをQAがテストします。完成後、LibrarianがGitコミットを行います。
