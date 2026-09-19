import * as THREE from 'three';

/**
 * 穴径 3.1mm、ピッチ 7mm の塩ビパンチングパネル用テクスチャを生成
 * @param {number} panelW パネル幅 (mm)
 * @param {number} panelD パネル奥行き/高さ (mm)
 * @param {boolean} hasGrommets 配線グロメット穴を含めるかどうか (天面用=true, 側面用=false)
 */
export function createPunchingTexture(panelW, panelD, hasGrommets = true) {
  // ピクセル解像度（1mm あたり 4px）
  const scale = 4;
  const canvasW = Math.min(2048, Math.max(256, Math.round(panelW * scale)));
  const canvasH = Math.min(2048, Math.max(256, Math.round(panelD * scale)));

  const canvas = document.createElement('canvas');
  canvas.width = canvasW;
  canvas.height = canvasH;
  const ctx = canvas.getContext('2d');

  // 白背景（パネル樹脂部分 = 不透明アルファ）
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasW, canvasH);

  // 黒丸（パンチング穴部分 = 透過アルファ）
  ctx.fillStyle = '#000000';

  const pitch = 7.0;          // 7mm ピッチ
  const holeRadius = 3.1 / 2; // 直径 3.1mm -> 半径 1.55mm

  const pitchPx = pitch * (canvasW / panelW);
  const radiusPx = holeRadius * (canvasW / panelW);

  // PlaneGeometry(panelW, panelD) with rotation.x = -Math.PI/2 において、
  // Canvasの「上端 (y = 35)」が 3D空間の「奥側 (-Z, 奥端から35mm)」に対応する
  const grommetR = 15.0; // 半径 15mm (φ30mm穴)
  const grommet1 = { x: 35, y: 35 }; // 奥左 (左端から35mm, 奥端から35mm)
  const grommet2 = { x: panelW - 35, y: 35 }; // 奥右 (右端から35mm, 奥端から35mm)

  // 1. パンチング小穴の描画
  for (let x = pitch / 2; x < panelW; x += pitch) {
    for (let y = pitch / 2; y < panelD; y += pitch) {
      if (hasGrommets) {
        const dist1 = Math.hypot(x - grommet1.x, y - grommet1.y);
        const dist2 = Math.hypot(x - grommet2.x, y - grommet2.y);
        if (dist1 < grommetR + 2.5 || dist2 < grommetR + 2.5) {
          continue; // 奥側のグロメット穴の範囲を除外
        }
      }

      const cx = (x / panelW) * canvasW;
      const cy = (y / panelD) * canvasH;

      ctx.beginPath();
      ctx.arc(cx, cy, radiusPx, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 2. 奥側2箇所のグロメット大穴 (直径30mm) を透明にする（黒塗り）※天面のみ
  if (hasGrommets) {
    const gRadiusPx = grommetR * (canvasW / panelW);
    ctx.beginPath();
    ctx.arc((grommet1.x / panelW) * canvasW, (grommet1.y / panelD) * canvasH, gRadiusPx, 0, Math.PI * 2);
    ctx.arc((grommet2.x / panelW) * canvasW, (grommet2.y / panelD) * canvasH, gRadiusPx, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}
