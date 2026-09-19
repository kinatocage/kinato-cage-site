import * as THREE from 'three';

/**
 * 中空ポリカ（ツインカーボ）用の水平リブテクスチャおよびバンプマップを生成
 * - 背面：横方向（左右水平方向）に筋が走る
 * - 側面：奥行方向（前後水平方向）に筋が走る
 * どちらもパネル面内では「水平方向（水平ストライプ）」の筋となります。
 * 
 * @param {number} panelW パネル幅/奥行き (mm)
 * @param {number} panelH パネル高さ (mm)
 * @returns {{ map: THREE.CanvasTexture, bumpMap: THREE.CanvasTexture }}
 */
export function createHollowPolycaTexture(panelW, panelH) {
  // ピクセル解像度（高さ方向に十分なリブを描画できるようスケール調整）
  const scale = 3;
  const canvasW = Math.min(1024, Math.max(128, Math.round(panelW * scale)));
  const canvasH = Math.min(2048, Math.max(256, Math.round(panelH * scale)));

  // 1. カラーテクスチャ（半透明・すりガラス感・リブ隔壁の光沢線）
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = canvasW;
  colorCanvas.height = canvasH;
  const ctx = colorCanvas.getContext('2d');

  // ベース半透明背景（かすかに爽やかなポリカ色）
  ctx.fillStyle = 'rgba(235, 242, 248, 0.72)';
  ctx.fillRect(0, 0, canvasW, canvasH);

  // 2. バンプマップ用Canvas（凹凸・立体リブ反射用）
  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = canvasW;
  bumpCanvas.height = canvasH;
  const bCtx = bumpCanvas.getContext('2d');

  // バンプベース（ニュートラルグレー 128）
  bCtx.fillStyle = '#808080';
  bCtx.fillRect(0, 0, canvasW, canvasH);

  const ribPitchMm = 6.0; // リブのピッチ（約6mm間隔）
  const pitchPx = (ribPitchMm / panelH) * canvasH;

  // 水平リブ（筋）を等間隔で描画
  for (let y = 0; y < canvasH; y += pitchPx) {
    const nextY = Math.min(canvasH, y + pitchPx);
    const cellH = nextY - y;

    // --- カラーマップ描画 ---
    // セル内部の屈折グラデーション（中空ポリカ特有の光沢・透過・ボケ感）
    const grad = ctx.createLinearGradient(0, y, 0, nextY);
    grad.addColorStop(0.0, 'rgba(140, 165, 185, 0.95)'); // リブ境界シャドウ（濃い筋）
    grad.addColorStop(0.18, 'rgba(255, 255, 255, 1.0)'); // 隔壁ハイライト（光る白筋）
    grad.addColorStop(0.5, 'rgba(220, 235, 248, 0.55)'); // セル中央（透過・すりガラス）
    grad.addColorStop(0.82, 'rgba(240, 248, 255, 0.80)');
    grad.addColorStop(1.0, 'rgba(140, 165, 185, 0.95)'); // リブ境界シャドウ

    ctx.fillStyle = grad;
    ctx.fillRect(0, y, canvasW, cellH);

    // リブ隔壁の濃いシャドウ筋（遠目からでもはっきりと筋を認識させる）
    const shadowH = Math.max(1.5, Math.round(pitchPx * 0.12));
    ctx.fillStyle = 'rgba(90, 115, 135, 0.85)';
    ctx.fillRect(0, y, canvasW, shadowH);

    // リブ隔壁のシャープな白色ハイライト筋
    const highlightH = Math.max(1.5, Math.round(pitchPx * 0.16));
    ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
    ctx.fillRect(0, y + shadowH, canvasW, highlightH);

    // --- バンプマップ描画 ---
    // リブの凹凸シリンダー形状を強いバンプコントラストで表現
    const bGrad = bCtx.createLinearGradient(0, y, 0, nextY);
    bGrad.addColorStop(0.0, '#1a1a1a'); // 深い溝（暗部）
    bGrad.addColorStop(0.2, '#f0f0f0'); // 隔壁エッジハイライト（凸）
    bGrad.addColorStop(0.5, '#999999'); // リブ中央平坦部
    bGrad.addColorStop(0.8, '#d8d8d8');
    bGrad.addColorStop(1.0, '#1a1a1a'); // 深い溝

    bCtx.fillStyle = bGrad;
    bCtx.fillRect(0, y, canvasW, cellH);
  }

  const map = new THREE.CanvasTexture(colorCanvas);
  map.wrapS = THREE.ClampToEdgeWrapping;
  map.wrapT = THREE.ClampToEdgeWrapping;
  map.minFilter = THREE.LinearFilter;
  map.magFilter = THREE.LinearFilter;

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.ClampToEdgeWrapping;
  bumpMap.wrapT = THREE.ClampToEdgeWrapping;
  bumpMap.minFilter = THREE.LinearFilter;
  bumpMap.magFilter = THREE.LinearFilter;

  return { map, bumpMap };
}
