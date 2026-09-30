import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('\n🛡️ ========================================================');
console.log('   きなとのケージ屋さん - 安全デプロイ検証パイプライン');
console.log('========================================================\n');

// -----------------------------------------------------------------
// Step 1: 静的コード解析 (ESLint による未宣言変数・構文エラーの完全遮断)
// -----------------------------------------------------------------
console.log('▶ [Step 1/6] 静的コード解析（ESLint）を実行中...');
try {
  execSync('npx eslint "cage_mitumori/src/**/*.js"', { cwd: rootDir, stdio: 'inherit' });
  console.log('  ✅ ESLint検証クリア: 未宣言変数・構文エラーはありません。\n');
} catch (err) {
  console.error('\n❌ 【デプロイ拒否】ESLintエラーを検出しました！');
  console.error('   未宣言変数（ReferenceErrorの要因）または構文エラーが存在するため、デプロイを即時中止しました。');
  console.error('   上記のエラー箇所を修正してから再度実行してください。\n');
  process.exit(1);
}

// -----------------------------------------------------------------
// Step 2: ソースコードBOM静的漏洩検査 (HTMLチェック)
// -----------------------------------------------------------------
console.log('▶ [Step 2/6] ソースコード内BOM静的漏洩スキャンを実行中...');
const simHtmlPath = path.join(rootDir, 'cage_mitumori', 'index.html');
if (fs.existsSync(simHtmlPath)) {
  const htmlContent = fs.readFileSync(simHtmlPath, 'utf8');
  const forbiddenKeywords = [
    'id="bom-container"',
    '資材リスト内訳',
    '【開発確認用表示中】',
    'frame-bom-table',
    'other-bom-table',
    '本番デプロイ時には必ず非表示'
  ];

  const leaks = forbiddenKeywords.filter(keyword => htmlContent.includes(keyword));
  if (leaks.length > 0) {
    console.error('\n❌ 【デプロイ拒否】cage_mitumori/index.html にBOMの静的記述が検出されました！');
    console.error(`   検出された禁止キーワード: ${leaks.join(', ')}`);
    console.error('   部材リスト（原価）は静的HTMLには一切含めず、動的デバッグ注入（?debug=bom）を使用してください。');
    process.exit(1);
  }
  console.log('  ✅ ソースコード検査クリア: 静的HTMLにBOMや原価タグは一切含まれていません。\n');
}

// -----------------------------------------------------------------
// Step 3: プロダクションビルドの実行
// -----------------------------------------------------------------
console.log('▶ [Step 3/6] プロダクションビルド（npm run build）を実行中...');
try {
  execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });
  console.log('  ✅ ビルド完了。\n');
} catch (err) {
  console.error('\n❌ 【デプロイ拒否】ビルドに失敗しました。');
  process.exit(1);
}

// -----------------------------------------------------------------
// Step 4: ビルド成果物（dist / public）の漏洩スキャン
// -----------------------------------------------------------------
console.log('▶ [Step 4/6] ビルド成果物の漏洩スキャンを実行中...');
const distHtmlPaths = [
  path.join(rootDir, 'public', 'sim', 'index.html'),
  path.join(rootDir, 'dist', 'client', 'sim', 'index.html'),
  path.join(rootDir, 'dist', 'index.html')
];

for (const p of distHtmlPaths) {
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    if (content.includes('id="bom-container"') || content.includes('資材リスト内訳')) {
      console.error(`\n❌ 【デプロイ拒否】ビルド成果物 (${p}) にBOM要素が混入しています！`);
      process.exit(1);
    }
  }
}
console.log('  ✅ 成果物検査クリア: 配布HTMLにBOMや原価の露出はありません。\n');

// -----------------------------------------------------------------
// Step 5: GASエンドポイント疎通・設定検査
// -----------------------------------------------------------------
console.log('▶ [Step 5/6] GASエンドポイント設定の検証...');
const configPath = path.join(rootDir, 'cage_mitumori', 'cost_materials_config.js');
if (fs.existsSync(configPath)) {
  const configText = fs.readFileSync(configPath, 'utf8');
  const gasMatch = configText.match(/gasLogEndpointUrl:\s*'([^']+)'/);
  if (!gasMatch || !gasMatch[1].startsWith('https://script.google.com/')) {
    console.error('\n❌ 【デプロイ拒否】cost_materials_config.js の gasLogEndpointUrl が正しく設定されていません！');
    process.exit(1);
  }
  console.log('  ✅ GASエンドポイント設定確認完了。\n');
}

// -----------------------------------------------------------------
// Step 6: Cloudflare Pages への本番デプロイ
// -----------------------------------------------------------------
console.log('▶ [Step 6/6] Cloudflare Pages への本番デプロイを実行中...');
try {
  execSync('npx wrangler pages deploy dist --project-name="kinato-cage-site"', { cwd: rootDir, stdio: 'inherit' });
  console.log('\n🎉 ========================================================');
  console.log('   ✨ 全ての安全検証をクリアし、本番デプロイが完了しました！');
  console.log('   本番URL: https://kinato-cage-site.pages.dev/');
  console.log('   シミュレーターURL: https://kinato-cage-site.pages.dev/sim/');
  console.log('   （管理者用BOM確認: https://kinato-cage-site.pages.dev/sim/?debug=bom）');
  console.log('========================================================\n');
} catch (err) {
  console.error('\n❌ Cloudflare Pages へのアップロード中にエラーが発生しました。');
  process.exit(1);
}
