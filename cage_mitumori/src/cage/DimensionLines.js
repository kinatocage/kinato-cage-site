import * as THREE from 'three';

/**
 * 3D空間内の寸法線・寸法アノテーション描画クラス
 */
export class DimensionLines {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'DimensionLines';

    // 寸法線用マテリアル（明るい背景で見やすい濃いスカイブルー）
    this.lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      linewidth: 2,
      depthTest: false,
      transparent: true,
      opacity: 0.85
    });

    this.textSprites = [];
    this.activeGeometries = [];
  }

  clear() {
    while (this.group.children.length > 0) {
      const obj = this.group.children[0];
      this.group.remove(obj);
    }
    for (const geom of this.activeGeometries) {
      geom.dispose();
    }
    this.activeGeometries = [];

    for (const sprite of this.textSprites) {
      if (sprite.material.map) {
        sprite.material.map.dispose();
      }
      sprite.material.dispose();
    }
    this.textSprites = [];
  }

  /**
   * テキストスプライトの生成（ダークスタジオで見やすいカード＋カラーボーダー＋白テキスト、150%拡大）
   */
  createTextSprite(text, borderColor = '#38bdf8', textColor = '#ffffff', bgColor = 'rgba(20, 26, 38, 0.88)') {
    const canvas = document.createElement('canvas');
    canvas.width = 384;
    canvas.height = 120;
    const ctx = canvas.getContext('2d');

    // 背景角丸矩形
    ctx.fillStyle = bgColor;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 4;
    const r = 24;
    ctx.beginPath();
    ctx.roundRect(10, 10, 364, 100, r);
    ctx.fill();
    ctx.stroke();

    // テキスト (太字・高解像度)
    ctx.font = 'bold 44px sans-serif';
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 192, 60);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      depthTest: false,
      transparent: true
    });
    const sprite = new THREE.Sprite(spriteMat);
    // 従来（60 x 20）の150% = 90 x 30
    sprite.scale.set(90, 30, 1);
    this.textSprites.push(sprite);
    return sprite;
  }

  /**
   * 寸法ラベルの更新（寸法線は引かず、数字ラベルのみを150%サイズですっきり表示）
   */
  update(params) {
    this.clear();
    const { W, D, H, cageType, frontWindowH, hasSideReinforcement, sideOpeningH } = params;

    // 1. 幅 (W) 寸法ラベル（ケージ手前下側）
    const yW = 5;
    const zW = D / 2 + 55;
    const spriteW = this.createTextSprite(`W: ${W} mm`, '#38bdf8', '#ffffff');
    spriteW.position.set(0, yW, zW);
    this.group.add(spriteW);

    // 2. 奥行き (D) 寸法ラベル（ケージ右側面下側）
    const xD = W / 2 + 55;
    const yD = 5;
    const spriteD = this.createTextSprite(`D: ${D} mm`, '#38bdf8', '#ffffff');
    spriteD.position.set(xD, yD, 0);
    this.group.add(spriteD);

    // 3. 高さ (H) 寸法ラベル（ケージ左側面手前）
    const xH = -W / 2 - 55;
    const zH = D / 2;
    const spriteH = this.createTextSprite(`H: ${H} mm`, '#38bdf8', '#ffffff');
    spriteH.position.set(xH, H / 2, zH);
    this.group.add(spriteH);

    // 4. Type C 前窓開口寸法ラベル
    if (cageType === 'C') {
      const xFW = W / 2 + 50;
      const zFW = D / 2 + 10;
      const yMid = 20 + frontWindowH / 2;
      const spriteFW = this.createTextSprite(`前窓: ${frontWindowH} mm`, '#fb923c', '#ffffff', 'rgba(35, 20, 12, 0.9)');
      spriteFW.scale.set(80, 27, 1);
      spriteFW.position.set(xFW, yMid, zFW);
      this.group.add(spriteFW);
    }

    // 5. 側面補強フレーム 開口寸法ラベル
    if (hasSideReinforcement) {
      const xSide = -W / 2 - 50;
      const zSide = 0;
      const yMid = 20 + sideOpeningH / 2;
      const spriteSide = this.createTextSprite(`側面開口: ${sideOpeningH} mm`, '#34d399', '#ffffff', 'rgba(12, 32, 24, 0.9)');
      spriteSide.scale.set(85, 27, 1);
      spriteSide.position.set(xSide, yMid, zSide);
      this.group.add(spriteSide);
    }
  }

  setVisible(visible) {
    this.group.visible = visible;
  }
}
