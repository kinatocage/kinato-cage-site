import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const simDir = path.join(rootDir, 'cage_mitumori');
const simDistDir = path.join(simDir, 'dist');
const targetSimDir = path.join(rootDir, 'public', 'sim');
const distDir = path.join(rootDir, 'dist');

console.log('[build-sim] === 3Dケージ見積もりシミュレーターのビルド＆同期を開始 ===');

// Windows / OneDrive 環境でビルド時のファイルロックによる失敗を防ぐため、事前に dist を安全にクリーンアップ
if (fs.existsSync(distDir)) {
  try {
    fs.rmSync(distDir, { recursive: true, force: true });
  } catch (e) {
    console.log('[build-sim] 注意: distディレクトリの事前クリーンアップをスキップしました（ロック中等のため）');
  }
}

// 1. cage_mitumori の node_modules 確認
const simNodeModules = path.join(simDir, 'node_modules');
if (!fs.existsSync(simNodeModules)) {
  console.log('[build-sim] cage_mitumori の依存パッケージをインストール中...');
  execSync('npm install', { cwd: simDir, stdio: 'inherit' });
}

// 2. cage_mitumori の Vite ビルド実行
console.log('[build-sim] cage_mitumori を Vite でビルド中...');
execSync('npm run build', { cwd: simDir, stdio: 'inherit' });

if (!fs.existsSync(simDistDir)) {
  console.error('[build-sim] エラー: cage_mitumori/dist が生成されませんでした。');
  process.exit(1);
}

// 3. public/sim の整備とコピー
console.log(`[build-sim] 成果物を ${targetSimDir} に同期中...`);
if (fs.existsSync(targetSimDir)) {
  fs.rmSync(targetSimDir, { recursive: true, force: true });
}
fs.mkdirSync(targetSimDir, { recursive: true });

// ディレクトリ再帰コピー
function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

copyRecursive(simDistDir, targetSimDir);
console.log('[build-sim] === 3Dケージ見積もりシミュレーターの同期が完了しました (public/sim/) ===');
