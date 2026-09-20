import * as THREE from 'three';

/**
 * 20mm x 20mm アルミフレームの2D断面Shape（4面Tスロット溝付き）
 */
export function create2020Shape() {
  const shape = new THREE.Shape();
  const half = 10;        // 20mm / 2
  const slotW = 3.0;      // 開口半幅 (開口幅 6mm)
  const neckT = 1.8;      // 開口部の立ち上がり厚み
  const innerW = 5.5;     // 溝内部の半幅 (内部幅 11mm)
  const depth = 5.0;      // 溝深さ

  // 右上コーナーから時計回りにパスを作成
  // 右上角 (10, 10)
  shape.moveTo(half, half);

  // 右辺 (X = 10, Y: 10 -> -10)
  shape.lineTo(half, slotW);
  shape.lineTo(half - neckT, slotW);
  shape.lineTo(half - neckT, innerW);
  shape.lineTo(half - depth, innerW);
  shape.lineTo(half - depth, -innerW);
  shape.lineTo(half - neckT, -innerW);
  shape.lineTo(half - neckT, -slotW);
  shape.lineTo(half, -slotW);
  shape.lineTo(half, -half); // 右下角 (10, -10)

  // 下辺 (Y = -10, X: 10 -> -10)
  shape.lineTo(slotW, -half);
  shape.lineTo(slotW, -half + neckT);
  shape.lineTo(innerW, -half + neckT);
  shape.lineTo(innerW, -half + depth);
  shape.lineTo(-innerW, -half + depth);
  shape.lineTo(-innerW, -half + neckT);
  shape.lineTo(-slotW, -half + neckT);
  shape.lineTo(-slotW, -half);
  shape.lineTo(-half, -half); // 左下角 (-10, -10)

  // 左辺 (X = -10, Y: -10 -> 10)
  shape.lineTo(-half, -slotW);
  shape.lineTo(-half + neckT, -slotW);
  shape.lineTo(-half + neckT, -innerW);
  shape.lineTo(-half + depth, -innerW);
  shape.lineTo(-half + depth, innerW);
  shape.lineTo(-half + neckT, innerW);
  shape.lineTo(-half + neckT, slotW);
  shape.lineTo(-half, slotW);
  shape.lineTo(-half, half); // 左上角 (-10, 10)

  // 上辺 (Y = 10, X: -10 -> 10)
  shape.lineTo(-slotW, half);
  shape.lineTo(-slotW, half - neckT);
  shape.lineTo(-innerW, half - neckT);
  shape.lineTo(-innerW, half - depth);
  shape.lineTo(innerW, half - depth);
  shape.lineTo(innerW, half - neckT);
  shape.lineTo(slotW, half - neckT);
  shape.lineTo(slotW, half);
  shape.lineTo(half, half); // 閉じる

  // 中心タップ穴 (直径 4.5mm)
  const centerHole = new THREE.Path();
  centerHole.absarc(0, 0, 2.25, 0, Math.PI * 2, true);
  shape.holes.push(centerHole);

  return shape;
}

/**
 * 20mm x 40mm アルミフレームの2D断面Shape（幅20mm x 高さ40mm、縦2スロット）
 */
export function create2040Shape() {
  const shape = new THREE.Shape();
  const halfX = 10;       // 20mm / 2
  const halfY = 20;       // 40mm / 2
  const slotW = 3.0;      // 開口半幅 (6mm)
  const neckT = 1.8;
  const innerW = 5.5;
  const depth = 5.0;

  // X: [-10, 10], Y: [-20, 20]
  // 右上角 (10, 20)
  shape.moveTo(halfX, halfY);

  // 右辺 (X = 10): 2つのスロット (Y = +10, Y = -10)
  // 上部スロット (Y = 10 付近)
  shape.lineTo(halfX, 10 + slotW);
  shape.lineTo(halfX - neckT, 10 + slotW);
  shape.lineTo(halfX - neckT, 10 + innerW);
  shape.lineTo(halfX - depth, 10 + innerW);
  shape.lineTo(halfX - depth, 10 - innerW);
  shape.lineTo(halfX - neckT, 10 - innerW);
  shape.lineTo(halfX - neckT, 10 - slotW);
  shape.lineTo(halfX, 10 - slotW);

  // 下部スロット (Y = -10 付近)
  shape.lineTo(halfX, -10 + slotW);
  shape.lineTo(halfX - neckT, -10 + slotW);
  shape.lineTo(halfX - neckT, -10 + innerW);
  shape.lineTo(halfX - depth, -10 + innerW);
  shape.lineTo(halfX - depth, -10 - innerW);
  shape.lineTo(halfX - neckT, -10 - innerW);
  shape.lineTo(halfX - neckT, -10 - slotW);
  shape.lineTo(halfX, -10 - slotW);

  shape.lineTo(halfX, -halfY); // 右下角 (10, -20)

  // 下辺 (Y = -20): 1つのスロット (X = 0 付近)
  shape.lineTo(slotW, -halfY);
  shape.lineTo(slotW, -halfY + neckT);
  shape.lineTo(innerW, -halfY + neckT);
  shape.lineTo(innerW, -halfY + depth);
  shape.lineTo(-innerW, -halfY + depth);
  shape.lineTo(-innerW, -halfY + neckT);
  shape.lineTo(-slotW, -halfY + neckT);
  shape.lineTo(-slotW, -halfY);
  shape.lineTo(-halfX, -halfY); // 左下角 (-10, -20)

  // 左辺 (X = -10): 2つのスロット (Y = -10, Y = +10)
  // 下部スロット
  shape.lineTo(-halfX, -10 - slotW);
  shape.lineTo(-halfX + neckT, -10 - slotW);
  shape.lineTo(-halfX + neckT, -10 - innerW);
  shape.lineTo(-halfX + depth, -10 - innerW);
  shape.lineTo(-halfX + depth, -10 + innerW);
  shape.lineTo(-halfX + neckT, -10 + innerW);
  shape.lineTo(-halfX + neckT, -10 + slotW);
  shape.lineTo(-halfX, -10 + slotW);

  // 上部スロット
  shape.lineTo(-halfX, 10 - slotW);
  shape.lineTo(-halfX + neckT, 10 - slotW);
  shape.lineTo(-halfX + neckT, 10 - innerW);
  shape.lineTo(-halfX + depth, 10 - innerW);
  shape.lineTo(-halfX + depth, 10 + innerW);
  shape.lineTo(-halfX + neckT, 10 + innerW);
  shape.lineTo(-halfX + neckT, 10 + slotW);
  shape.lineTo(-halfX, 10 + slotW);

  shape.lineTo(-halfX, halfY); // 左上角 (-10, 20)

  // 上辺 (Y = 20): 1つのスロット (X = 0 付近)
  shape.lineTo(-slotW, halfY);
  shape.lineTo(-slotW, halfY - neckT);
  shape.lineTo(-innerW, halfY - neckT);
  shape.lineTo(-innerW, halfY - depth);
  shape.lineTo(innerW, halfY - depth);
  shape.lineTo(innerW, halfY - neckT);
  shape.lineTo(slotW, halfY - neckT);
  shape.lineTo(slotW, halfY);
  shape.lineTo(halfX, halfY); // 閉じる

  // 中心タップ穴2つ (Y = -10 と Y = +10)
  const holeTop = new THREE.Path();
  holeTop.absarc(0, 10, 2.25, 0, Math.PI * 2, true);
  shape.holes.push(holeTop);

  const holeBottom = new THREE.Path();
  holeBottom.absarc(0, -10, 2.25, 0, Math.PI * 2, true);
  shape.holes.push(holeBottom);

  return shape;
}

// キャッシュ
const shape2020 = create2020Shape();
const shape2040 = create2040Shape();
const shape2060 = create2060Shape();

/**
 * 20mm x 60mm アルミフレームの2D断面Shape（幅20mm x 高さ60mm、縦3スロット: AFS-2060-4）
 */
export function create2060Shape() {
  const shape = new THREE.Shape();
  const halfX = 10;       // 20mm / 2
  const halfY = 30;       // 60mm / 2
  const slotW = 3.0;      // 開口半幅 (6mm)
  const neckT = 1.8;
  const innerW = 5.5;
  const depth = 5.0;

  // X: [-10, 10], Y: [-30, 30]
  // 右上角 (10, 30)
  shape.moveTo(halfX, halfY);

  // 右辺 (X = 10): 3つのスロット (Y = +20, Y = 0, Y = -20)
  // 上部スロット (Y = 20 付近)
  shape.lineTo(halfX, 20 + slotW);
  shape.lineTo(halfX - neckT, 20 + slotW);
  shape.lineTo(halfX - neckT, 20 + innerW);
  shape.lineTo(halfX - depth, 20 + innerW);
  shape.lineTo(halfX - depth, 20 - innerW);
  shape.lineTo(halfX - neckT, 20 - innerW);
  shape.lineTo(halfX - neckT, 20 - slotW);
  shape.lineTo(halfX, 20 - slotW);

  // 中央スロット (Y = 0 付近)
  shape.lineTo(halfX, slotW);
  shape.lineTo(halfX - neckT, slotW);
  shape.lineTo(halfX - neckT, innerW);
  shape.lineTo(halfX - depth, innerW);
  shape.lineTo(halfX - depth, -innerW);
  shape.lineTo(halfX - neckT, -innerW);
  shape.lineTo(halfX - neckT, -slotW);
  shape.lineTo(halfX, -slotW);

  // 下部スロット (Y = -20 付近)
  shape.lineTo(halfX, -20 + slotW);
  shape.lineTo(halfX - neckT, -20 + slotW);
  shape.lineTo(halfX - neckT, -20 + innerW);
  shape.lineTo(halfX - depth, -20 + innerW);
  shape.lineTo(halfX - depth, -20 - innerW);
  shape.lineTo(halfX - neckT, -20 - innerW);
  shape.lineTo(halfX - neckT, -20 - slotW);
  shape.lineTo(halfX, -20 - slotW);

  shape.lineTo(halfX, -halfY); // 右下角 (10, -30)

  // 下辺 (Y = -30): 1つのスロット (X = 0 付近)
  shape.lineTo(slotW, -halfY);
  shape.lineTo(slotW, -halfY + neckT);
  shape.lineTo(innerW, -halfY + neckT);
  shape.lineTo(innerW, -halfY + depth);
  shape.lineTo(-innerW, -halfY + depth);
  shape.lineTo(-innerW, -halfY + neckT);
  shape.lineTo(-slotW, -halfY + neckT);
  shape.lineTo(-slotW, -halfY);
  shape.lineTo(-halfX, -halfY); // 左下角 (-10, -30)

  // 左辺 (X = -10): 3つのスロット (Y = -20, Y = 0, Y = +20)
  // 下部スロット (Y = -20 付近)
  shape.lineTo(-halfX, -20 - slotW);
  shape.lineTo(-halfX + neckT, -20 - slotW);
  shape.lineTo(-halfX + neckT, -20 - innerW);
  shape.lineTo(-halfX + depth, -20 - innerW);
  shape.lineTo(-halfX + depth, -20 + innerW);
  shape.lineTo(-halfX + neckT, -20 + innerW);
  shape.lineTo(-halfX + neckT, -20 + slotW);
  shape.lineTo(-halfX, -20 + slotW);

  // 中央スロット (Y = 0 付近)
  shape.lineTo(-halfX, -slotW);
  shape.lineTo(-halfX + neckT, -slotW);
  shape.lineTo(-halfX + neckT, -innerW);
  shape.lineTo(-halfX + depth, -innerW);
  shape.lineTo(-halfX + depth, innerW);
  shape.lineTo(-halfX + neckT, innerW);
  shape.lineTo(-halfX + neckT, slotW);
  shape.lineTo(-halfX, slotW);

  // 上部スロット (Y = 20 付近)
  shape.lineTo(-halfX, 20 - slotW);
  shape.lineTo(-halfX + neckT, 20 - slotW);
  shape.lineTo(-halfX + neckT, 20 - innerW);
  shape.lineTo(-halfX + depth, 20 - innerW);
  shape.lineTo(-halfX + depth, 20 + innerW);
  shape.lineTo(-halfX + neckT, 20 + innerW);
  shape.lineTo(-halfX + neckT, 20 + slotW);
  shape.lineTo(-halfX, 20 + slotW);

  shape.lineTo(-halfX, halfY); // 左上角 (-10, 30)

  // 上辺 (Y = 30): 1つのスロット (X = 0 付近)
  shape.lineTo(-slotW, halfY);
  shape.lineTo(-slotW, halfY - neckT);
  shape.lineTo(-innerW, halfY - neckT);
  shape.lineTo(-innerW, halfY - depth);
  shape.lineTo(innerW, halfY - depth);
  shape.lineTo(innerW, halfY - neckT);
  shape.lineTo(slotW, halfY - neckT);
  shape.lineTo(slotW, halfY);
  shape.lineTo(halfX, halfY); // 閉じる

  // 中心タップ穴3つ (Y = -20, Y = 0, Y = +20)
  const holeTop = new THREE.Path();
  holeTop.absarc(0, 20, 2.25, 0, Math.PI * 2, true);
  shape.holes.push(holeTop);

  const holeMid = new THREE.Path();
  holeMid.absarc(0, 0, 2.25, 0, Math.PI * 2, true);
  shape.holes.push(holeMid);

  const holeBottom = new THREE.Path();
  holeBottom.absarc(0, -20, 2.25, 0, Math.PI * 2, true);
  shape.holes.push(holeBottom);

  return shape;
}

/**
 * 指定した長さの2020アルミフレームジオメトリを生成
 * @param {number} length 長さ (mm)
 */
export function create2020Geometry(length) {
  return new THREE.ExtrudeGeometry(shape2020, {
    depth: length,
    bevelEnabled: false,
    steps: 1
  });
}

/**
 * 20mm x 20mm アルミフレーム（1面溝なし: AFSF-2020-4）の2D断面Shape
 * @param {'top'|'bottom'|'left'|'right'} flatSide 溝なしにする面
 */
export function create2020Flat1Shape(flatSide = 'bottom') {
  const shape = new THREE.Shape();
  const half = 10;        // 20mm / 2
  const slotW = 3.0;      // 開口半幅 (開口幅 6mm)
  const neckT = 1.8;      // 開口部の立ち上がり厚み
  const innerW = 5.5;     // 溝内部の半幅 (内部幅 11mm)
  const depth = 5.0;      // 溝深さ

  // 右上角 (half, half)
  shape.moveTo(half, half);

  // 右辺 (X = 10, Y: 10 -> -10)
  if (flatSide === 'right') {
    shape.lineTo(half, -half); // 右辺フラット
  } else {
    shape.lineTo(half, slotW);
    shape.lineTo(half - neckT, slotW);
    shape.lineTo(half - neckT, innerW);
    shape.lineTo(half - depth, innerW);
    shape.lineTo(half - depth, -innerW);
    shape.lineTo(half - neckT, -innerW);
    shape.lineTo(half - neckT, -slotW);
    shape.lineTo(half, -slotW);
    shape.lineTo(half, -half);
  }

  // 下辺 (Y = -10, X: 10 -> -10)
  if (flatSide === 'bottom') {
    shape.lineTo(-half, -half); // 下辺フラット
  } else {
    shape.lineTo(slotW, -half);
    shape.lineTo(slotW, -half + neckT);
    shape.lineTo(innerW, -half + neckT);
    shape.lineTo(innerW, -half + depth);
    shape.lineTo(-innerW, -half + depth);
    shape.lineTo(-innerW, -half + neckT);
    shape.lineTo(-slotW, -half + neckT);
    shape.lineTo(-slotW, -half);
    shape.lineTo(-half, -half);
  }

  // 左辺 (X = -10, Y: -10 -> 10)
  if (flatSide === 'left') {
    shape.lineTo(-half, half); // 左辺フラット
  } else {
    shape.lineTo(-half, -slotW);
    shape.lineTo(-half + neckT, -slotW);
    shape.lineTo(-half + neckT, -innerW);
    shape.lineTo(-half + depth, -innerW);
    shape.lineTo(-half + depth, innerW);
    shape.lineTo(-half + neckT, innerW);
    shape.lineTo(-half + neckT, slotW);
    shape.lineTo(-half, slotW);
    shape.lineTo(-half, half);
  }

  // 上辺 (Y = 10, X: -10 -> 10)
  if (flatSide === 'top') {
    shape.lineTo(half, half); // 上辺フラット
  } else {
    shape.lineTo(-slotW, half);
    shape.lineTo(-slotW, half - neckT);
    shape.lineTo(-innerW, half - neckT);
    shape.lineTo(-innerW, half - depth);
    shape.lineTo(innerW, half - depth);
    shape.lineTo(innerW, half - neckT);
    shape.lineTo(slotW, half - neckT);
    shape.lineTo(slotW, half);
    shape.lineTo(half, half);
  }

  // 中心タップ穴 (直径 4.5mm)
  const centerHole = new THREE.Path();
  centerHole.absarc(0, 0, 2.25, 0, Math.PI * 2, true);
  shape.holes.push(centerHole);

  return shape;
}

const flatShapes = {
  top: create2020Flat1Shape('top'),
  bottom: create2020Flat1Shape('bottom'),
  left: create2020Flat1Shape('left'),
  right: create2020Flat1Shape('right')
};

/**
 * 指定した長さ・溝なし面の2020アルミフレームジオメトリを生成 (AFSF-2020-4)
 * @param {number} length 長さ (mm)
 * @param {'top'|'bottom'|'left'|'right'} flatSide 溝なしにする面
 */
export function create2020FlatGeometry(length, flatSide = 'bottom') {
  const shape = flatShapes[flatSide] || flatShapes.bottom;
  return new THREE.ExtrudeGeometry(shape, {
    depth: length,
    bevelEnabled: false,
    steps: 1
  });
}

/**
 * 指定した長さの2040アルミフレームジオメトリを生成
 * @param {number} length 長さ (mm)
 */
export function create2040Geometry(length) {
  return new THREE.ExtrudeGeometry(shape2040, {
    depth: length,
    bevelEnabled: false,
    steps: 1
  });
}

/**
 * 指定した長さの2060アルミフレームジオメトリを生成 (AFS-2060-4)
 * @param {number} length 長さ (mm)
 */
export function create2060Geometry(length) {
  return new THREE.ExtrudeGeometry(shape2060, {
    depth: length,
    bevelEnabled: false,
    steps: 1
  });
}

/**
 * 15mm x 30mm アルミフレームの2D断面Shape (AFS-1530-6)
 * - 厚み15mm (X: -7.5〜+7.5), 幅30mm (Y: -15〜+15)
 * - X両面に開口幅6mm (slotW=3.0) のT溝、Y面はフラット、中心φ5穴
 */
export function create1530Shape() {
  const shape = new THREE.Shape();
  const halfX = 7.5;
  const halfY = 15.0;
  const slotW = 3.0;
  const neckT = 1.5;
  const innerW = 5.0;
  const depth = 4.5;

  // 右上 (7.5, 15)
  shape.moveTo(halfX, halfY);

  // 右辺 (X = 7.5): Y = 15 -> -15
  shape.lineTo(halfX, slotW);
  shape.lineTo(halfX - neckT, slotW);
  shape.lineTo(halfX - neckT, innerW);
  shape.lineTo(halfX - depth, innerW);
  shape.lineTo(halfX - depth, -innerW);
  shape.lineTo(halfX - neckT, -innerW);
  shape.lineTo(halfX - neckT, -slotW);
  shape.lineTo(halfX, -slotW);
  shape.lineTo(halfX, -halfY); // 右下 (7.5, -15)

  // 下辺 (フラット)
  shape.lineTo(-halfX, -halfY); // 左下 (-7.5, -15)

  // 左辺 (X = -7.5): Y = -15 -> 15
  shape.lineTo(-halfX, -slotW);
  shape.lineTo(-halfX + neckT, -slotW);
  shape.lineTo(-halfX + neckT, -innerW);
  shape.lineTo(-halfX + depth, -innerW);
  shape.lineTo(-halfX + depth, innerW);
  shape.lineTo(-halfX + neckT, innerW);
  shape.lineTo(-halfX + neckT, slotW);
  shape.lineTo(-halfX, slotW);
  shape.lineTo(-halfX, halfY); // 左上 (-7.5, 15)

  // 上辺 (フラット)
  shape.lineTo(halfX, halfY);

  // 中心φ5穴
  const centerHole = new THREE.Path();
  centerHole.absarc(0, 0, 2.5, 0, Math.PI * 2, true);
  shape.holes.push(centerHole);

  return shape;
}

const shape1530 = create1530Shape();

/**
 * 指定した長さの1530アルミフレームジオメトリを生成 (AFS-1530-6)
 * @param {number} length 長さ (mm)
 */
export function create1530Geometry(length) {
  return new THREE.ExtrudeGeometry(shape1530, {
    depth: length,
    bevelEnabled: false,
    steps: 1
  });
}



