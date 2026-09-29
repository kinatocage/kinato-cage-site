import * as THREE from 'three';
import { create2020Geometry, create2020FlatGeometry, create2040Geometry, create2060Geometry, create4040Geometry, create1530Geometry } from './ProfileGeometry.js';
import { createPunchingTexture } from './PunchingTexture.js';
import { createHollowPolycaTexture } from './HollowPolycaTexture.js';

/**
 * フレーム型番生成ヘルパー
 * - シルバー2020: AFS-2020-4-{L}
 * - シルバー2020 溝なし1面: AFSF-2020-4-{L}
 * - ブラック2020: AFS-2020-4-BK-{L}（溝なし規格なし・通常型番維持）
 * - シルバー2040: AFS-2040-4-{L}
 * - ブラック2040: AFS-2040-4-BK-{L}
 * - シルバー2060: AFS-2060-4-{L}
 * - シルバー4040: AFS-4040-4-{L}
 * - ブラック4040: AFS-4040-4-BK-{L}
 * - 金網用シルバーインナー2020: AFS-2020-5-{L}
 */
export function getFrameBaseCode(profile, frameColor, isMeshInner = false, isFlat1 = false) {
  if (isMeshInner) return profile === '2040' ? 'AFS-2040-5' : 'AFS-2020-5';
  if (profile === '4040') return frameColor === 'black' ? 'AFS-4040-4-BK' : 'AFS-4040-4';
  if (profile === '2060') return 'AFS-2060-4';
  if (profile === '2040') {
    if (isFlat1 && frameColor === 'silver') return 'AFSF-2040-4';
    return frameColor === 'black' ? 'AFS-2040-4-BK' : 'AFS-2040-4';
  }
  if (isFlat1 && frameColor === 'silver') return 'AFSF-2020-4';
  return frameColor === 'black' ? 'AFS-2020-4-BK' : 'AFS-2020-4';
}

function getFramePartNumber(profile, length, frameColor, isMeshInner = false, isFlat1 = false) {
  const roundedL = Math.round(length);
  const baseCode = getFrameBaseCode(profile, frameColor, isMeshInner, isFlat1);
  return `${baseCode}-${roundedL}`;
}

/**
 * パラメトリック・ケージ3Dモデル構築クラス
 */
export class CageModel {
  /**
   * @param {MaterialFactory} materialFactory
   */
  constructor(materialFactory) {
    this.materials = materialFactory;
    this.root = new THREE.Group();
    this.root.name = 'CageRoot';

    this.frameGroup = new THREE.Group();
    this.frameGroup.name = 'Frames';
    this.root.add(this.frameGroup);

    this.panelGroup = new THREE.Group();
    this.panelGroup.name = 'Panels';
    this.root.add(this.panelGroup);

    this.doorGroup = new THREE.Group();
    this.doorGroup.name = 'Doors';
    this.root.add(this.doorGroup);

    this.feetGroup = new THREE.Group();
    this.feetGroup.name = 'Feet';
    this.root.add(this.feetGroup);

    this.perchGroup = new THREE.Group();
    this.perchGroup.name = 'Perch';
    this.root.add(this.perchGroup);

    this.caulkingGroup = new THREE.Group();
    this.caulkingGroup.name = 'Caulking';
    this.root.add(this.caulkingGroup);

    this.rubberPackingGroup = new THREE.Group();
    this.rubberPackingGroup.name = 'RubberPacking';
    this.root.add(this.rubberPackingGroup);

    this.dividerGroup = new THREE.Group();
    this.dividerGroup.name = 'RoomDivider';
    this.root.add(this.dividerGroup);

    // 現在のパラメータ
    this.params = {
      W: 750,
      D: 450,
      H: 300,
      cageType: 'A',          // 'A' または 'C'
      frontWindowH: 50,        // Type Cの前窓フレーム間開口高さ (mm)
      hasSideReinforcement: false, // 側面補強フレームの有無 (左右対称)
      sideOpeningH: 120,       // 側面上部フレーム間開口高さ (デフォルト: 上下均等 120mm)
      hasFloorReinforcement: false, // 床面中央補強フレーム (床面積 > 750×450mm で推奨ON)
      hasTopReinforcement: false,  // 天面中央補強フレーム (W>940mmで必須ON、940mm以下は任意)
      hasDoorAntiFlex: false,      // 強力爬虫類向けスライド扉たわみ防止レール (扉幅-2mm)
      hasSideVentCover: false,     // 側面換気量調整板 (t1.5外張りアクリル板)
      hasPerch: false,             // 止まり木（天板吊り下げ式・後付け対応）
      hasRubberPacking: false,     // モレ対策ゴムパッキン (側面・背面 隙間モレ抑制)
      hasRoomDivider: false,       // ２室分け（後付け仕切り板・Type A/C両対応）
      frontWideFrame: '2x',        // 正面下側幅広フレーム: '2x' (40mm) | '3x' (60mm) | 'none' (20mm標準)
      doorHingeSide: 'left',       // 前開き扉開き方向: 'left' (左ヒンジ・右打掛) | 'right' (左打掛・右ヒンジ)
      footType: 'rubber',      // 'rubber' (ゴム脚) | 'caster' (キャスター)
      showPanels: true,
      doorState: 'closed',     // 'closed' | 'left_open' | 'right_open' (排他制御)
      frameColor: 'silver',    // 'silver' | 'black'
      panelConfig: {
        front: 'acrylic',
        floor: 'acrylic',
        back: 'acrylic',
        side: 'acrylic',
        sideUpper: 'punching',
        sideLower: 'acrylic',
        top: 'punching',
        topLeft: 'punching',
        topRight: 'punching',
        partition: 'black_matte'
      }
    };

    // 使用済みリソースの追跡
    this.activeGeometries = [];
    this.activeTextures = [];
    this.activeMaterials = [];

    // 部材集計リスト
    this.partsList = [];
  }

  /**
   * メモリ解放
   */
  disposeResources() {
    for (const geom of this.activeGeometries) {
      geom.dispose();
    }
    this.activeGeometries = [];

    for (const tex of this.activeTextures) {
      tex.dispose();
    }
    this.activeTextures = [];

    for (const mat of this.activeMaterials) {
      mat.dispose();
    }
    this.activeMaterials = [];
  }

  /**
   * グループ内のメッシュを全削除
   */
  clearGroup(group) {
    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
    }
  }

  /**
   * アルミフレーム部材メッシュを生成して配置
   * @param {string} profile '2020' | '2020_flat' | '2040' | '2060'
   * @param {number} length 長さ (mm)
   * @param {THREE.Vector3} pos 位置
   * @param {THREE.Euler} rot 回転
   * @param {string} name メッシュ名
   * @param {THREE.Material} customMaterial カスタムマテリアル
   * @param {'top'|'bottom'|'left'|'right'} flatSide 溝なし面（2020_flat時）
   */
  addFrameMember(profile, length, pos, rot, name = '', customMaterial = null, flatSide = 'bottom', targetGroup = null) {
    let geom;
    if (profile === '4040') {
      geom = create4040Geometry(length);
    } else if (profile === '2060') {
      geom = create2060Geometry(length);
    } else if (profile === '2040') {
      geom = create2040Geometry(length);
    } else if (profile === '2020_flat') {
      geom = create2020FlatGeometry(length, flatSide);
    } else {
      geom = create2020Geometry(length);
    }
    geom.translate(0, 0, -length / 2);
    this.activeGeometries.push(geom);

    const mesh = new THREE.Mesh(geom, customMaterial || this.materials.aluminum);
    mesh.position.copy(pos);
    mesh.rotation.copy(rot);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = name;

    (targetGroup || this.frameGroup).add(mesh);
    return mesh;
  }

  /**
   * 扉用エンドキャップの生成・配置
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {THREE.Euler} rot
   * @param {THREE.Material} customMaterial
   * @param {THREE.Group} targetGroup
   */
  addDoorEndCap(x, y, z, rot = null, customMaterial = null, targetGroup = null) {
    const w = 20, h = 20, r = 2;
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2 + r, -h / 2);
    shape.lineTo(w / 2 - r, -h / 2);
    shape.absarc(w / 2 - r, -h / 2 + r, r, -Math.PI / 2, 0, false);
    shape.lineTo(w / 2, h / 2 - r);
    shape.absarc(w / 2 - r, h / 2 - r, r, 0, Math.PI / 2, false);
    shape.lineTo(-w / 2 + r, h / 2);
    shape.absarc(-w / 2 + r, h / 2 - r, r, Math.PI / 2, Math.PI, false);
    shape.lineTo(-w / 2, -h / 2 + r);
    shape.absarc(-w / 2 + r, -h / 2 + r, r, Math.PI, Math.PI * 1.5, false);

    const extrudeSettings = {
      depth: 3,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.25,
      bevelThickness: 0.25
    };
    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.translate(0, 0, -1.5);
    this.activeGeometries.push(geom);

    const mesh = new THREE.Mesh(geom, customMaterial || this.materials.endCapMaterial);
    mesh.position.set(x, y, z);
    if (rot) mesh.rotation.copy(rot);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = '扉用エンドキャップ';

    (targetGroup || this.frameGroup).add(mesh);
    return mesh;
  }

  /**
   * 2040用エンドキャップ（ECP-2040-4）の生成・配置
   * - 断面 40x20mm、厚み 3mm、角R2mmのABS樹脂キャップ
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {THREE.Euler} rot
   * @param {THREE.Material} customMaterial
   * @param {THREE.Group} targetGroup
   */
  addEndCap2040(x, y, z, rot = null, customMaterial = null, targetGroup = null) {
    const w = 40, h = 20, r = 2;
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2 + r, -h / 2);
    shape.lineTo(w / 2 - r, -h / 2);
    shape.absarc(w / 2 - r, -h / 2 + r, r, -Math.PI / 2, 0, false);
    shape.lineTo(w / 2, h / 2 - r);
    shape.absarc(w / 2 - r, h / 2 - r, r, 0, Math.PI / 2, false);
    shape.lineTo(-w / 2 + r, h / 2);
    shape.absarc(-w / 2 + r, h / 2 - r, r, Math.PI / 2, Math.PI, false);
    shape.lineTo(-w / 2, -h / 2 + r);
    shape.absarc(-w / 2 + r, -h / 2 + r, r, Math.PI, Math.PI * 1.5, false);

    const extrudeSettings = {
      depth: 3,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.25,
      bevelThickness: 0.25
    };
    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.translate(0, 0, -1.5);
    this.activeGeometries.push(geom);

    const mesh = new THREE.Mesh(geom, customMaterial || this.materials.endCapMaterial);
    mesh.position.set(x, y, z);
    if (rot) mesh.rotation.copy(rot);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = '2040スペーサー用エンドキャップ';

    (targetGroup || this.frameGroup).add(mesh);
    return mesh;
  }

  /**
   * CP-294N 専用の独立した完全黒色マテリアルを取得
   * ※フレーム色（シルバー/ブラック）に関わらず常に純黒を保持
   */
  getLatchBlackMaterial() {
    if (!this.latchBlackMaterial) {
      this.latchBlackMaterial = new THREE.MeshStandardMaterial({
        color: 0x18181a, // 漆黒マットブラック
        roughness: 0.5,
        metalness: 0.15,
        name: 'CP294N_Black'
      });
      this.activeMaterials.push(this.latchBlackMaterial);
    }
    return this.latchBlackMaterial;
  }

  /**
   * タキゲン CP-294N スライドラッチ本体メッシュの生成（図面・横断面図準拠）
   * ※色はブラックのみ（シルバーフレームでもブラックフレームでも黒色固定）
   * ※可動チルトノブ（knobPivot）を内包し、爪が受金の穴に刺さる様子・自動ロックアニメーションに対応
   * @param {boolean} isLeftDoor - 左扉（つまみが右向き、受金スロットが左向き）か右扉か
   */
  createSlideLatchMesh(isLeftDoor) {
    const latchGroup = new THREE.Group();
    const blackMat = this.getLatchBlackMaterial();

    // 1. 固定ベース本体 (幅25mm, 高さ70mm, 厚み8mm, 四隅R付き)
    // 図面: 25 x 70 x 8mm, M4取付穴ピッチ50mm
    const baseShape = new THREE.Shape();
    const bw = 25, bh = 70, br = 3;
    baseShape.moveTo(-bw / 2 + br, -bh / 2);
    baseShape.lineTo(bw / 2 - br, -bh / 2);
    baseShape.quadraticCurveTo(bw / 2, -bh / 2, bw / 2, -bh / 2 + br);
    baseShape.lineTo(bw / 2, bh / 2 - br);
    baseShape.quadraticCurveTo(bw / 2, bh / 2, bw / 2 - br, bh / 2);
    baseShape.lineTo(-bw / 2 + br, bh / 2);
    baseShape.quadraticCurveTo(-bw / 2, bh / 2, -bw / 2, bh / 2 - br);
    baseShape.lineTo(-bw / 2, -bh / 2 + br);
    baseShape.quadraticCurveTo(-bw / 2, -bh / 2, -bw / 2 + br, -bh / 2);

    const baseGeom = new THREE.ExtrudeGeometry(baseShape, { depth: 8, bevelEnabled: false });
    this.activeGeometries.push(baseGeom);
    const baseMesh = new THREE.Mesh(baseGeom, blackMat);
    baseMesh.position.set(0, 0, 0); // Z: 0 ~ 8mm
    baseMesh.castShadow = true;
    latchGroup.add(baseMesh);

    // 2. 取付ボルト頭 (M4六角穴付きボルト頭: φ7mm x 3mm, 上下ピッチ50mm, 黒色)
    for (const dy of [-25, 25]) {
      const boltGeom = new THREE.CylinderGeometry(3.5, 3.5, 3, 16);
      boltGeom.rotateX(Math.PI / 2);
      this.activeGeometries.push(boltGeom);
      const boltMesh = new THREE.Mesh(boltGeom, blackMat);
      boltMesh.position.set(0, dy, 8.5);
      latchGroup.add(boltMesh);
    }

    // 3. 可動ノブグループ (knobPivotGroup)
    // ピボット中心: ベース前面 Z = 8.0mm, X = 0, Y = 0 (ヒンジピン軸)
    const knobPivotGroup = new THREE.Group();
    knobPivotGroup.position.set(0, 0, 8.0);
    latchGroup.add(knobPivotGroup);
    latchGroup.userData.knobPivot = knobPivotGroup;

    // 方向定義:
    // armDir: 受金側（左扉なら -1、右扉なら +1）
    // knobDir: 指操作部側（左扉なら +1、右扉なら -1）
    const armDir = isLeftDoor ? -1 : 1;
    const knobDir = isLeftDoor ? 1 : -1;

    // A. ヒンジ中央ブロック
    const pivotBlockGeom = new THREE.BoxGeometry(12, 28, 6);
    this.activeGeometries.push(pivotBlockGeom);
    const pivotBlock = new THREE.Mesh(pivotBlockGeom, blackMat);
    pivotBlock.position.set(0, 0, 3);
    knobPivotGroup.add(pivotBlock);

    // B. ラッチアームおよび上側ガイドリップ (断面図参照: 受金プレートの上に乗るガイド)
    // 受金プレート上面 Z_world = 6.5mm に沿ってスライド
    const lipGeom = new THREE.BoxGeometry(16, 22, 2.5);
    this.activeGeometries.push(lipGeom);
    const lipMesh = new THREE.Mesh(lipGeom, blackMat);
    lipMesh.position.set(armDir * 10, 0, 0.5); // Z_world = 8.5mm
    lipMesh.castShadow = true;
    knobPivotGroup.add(lipMesh);

    // C. 下側ラッチ爪 (断面図参照: 受金プレートのD型穴に深く刺さるフック爪)
    // 先端外側は45度のカム斜面（閉まる時に受金先端に当たって持ち上がる）
    // 内側根元は垂直ロック面（穴の端面に掛かって開かない）
    const hookShape = new THREE.Shape();
    // 爪の断面 (XZ平面に沿う形状、Y軸方向に押し出し)
    // 原点をアーム付け根側とし、先端(外側)に向かって伸びる
    if (isLeftDoor) {
      // 左扉: 先端は -X 方向
      hookShape.moveTo(0, 0);
      hookShape.lineTo(-11, 0);       // アーム下面に沿う
      hookShape.lineTo(-15, -2.8);    // 先端カム斜面 (閉まる時の受金当たり面)
      hookShape.lineTo(-12, -2.8);    // 爪先端底面 (穴を貫通)
      hookShape.lineTo(-7, 0);        // 垂直〜テーパーロックフック
      hookShape.closePath();
    } else {
      // 右扉: 先端は +X 方向
      hookShape.moveTo(0, 0);
      hookShape.lineTo(11, 0);
      hookShape.lineTo(15, -2.8);
      hookShape.lineTo(12, -2.8);
      hookShape.lineTo(7, 0);
      hookShape.closePath();
    }
    const hookGeom = new THREE.ExtrudeGeometry(hookShape, { depth: 14, bevelEnabled: false });
    hookGeom.translate(0, 0, -7); // Y方向の中心を 0 に
    // 回転して Y軸方向押し出しを合わせる
    hookGeom.rotateX(-Math.PI / 2);
    this.activeGeometries.push(hookGeom);
    const hookMesh = new THREE.Mesh(hookGeom, blackMat);
    hookMesh.position.set(0, 0, -0.75); // Z_world = 7.25 - 2.8 = 4.45mm (受金プレート厚み5.0〜6.5mmを完全に貫通刺突！)
    hookMesh.castShadow = true;
    knobPivotGroup.add(hookMesh);

    // D. 指掛け解除つまみ機構 (断面図・製品図面準拠)
    // 立ち上がりブロック
    const standGeom = new THREE.BoxGeometry(10, 24, 16);
    this.activeGeometries.push(standGeom);
    const standMesh = new THREE.Mesh(standGeom, blackMat);
    standMesh.position.set(knobDir * 4, 0, 8);
    standMesh.castShadow = true;
    knobPivotGroup.add(standMesh);

    // 人差し指フック（図面全高 34mm、指が引っ掛かる湾曲フック）
    const hookLeverShape = new THREE.Shape();
    hookLeverShape.moveTo(0, 0);
    hookLeverShape.lineTo(knobDir * 8, 4);
    hookLeverShape.lineTo(knobDir * 5, 10);
    hookLeverShape.lineTo(knobDir * -2, 8);
    hookLeverShape.closePath();
    const hookLeverGeom = new THREE.ExtrudeGeometry(hookLeverShape, { depth: 22, bevelEnabled: false });
    hookLeverGeom.translate(0, 0, -11);
    hookLeverGeom.rotateX(-Math.PI / 2);
    this.activeGeometries.push(hookLeverGeom);
    const hookLeverMesh = new THREE.Mesh(hookLeverGeom, blackMat);
    hookLeverMesh.position.set(knobDir * 4, 0, 16);
    hookLeverMesh.castShadow = true;
    knobPivotGroup.add(hookLeverMesh);

    // 親指押し板（フィンガープレート: 図面左上の楕円形状ベロ, 幅20mm x 長さ18mm x 厚み3mm）
    const thumbShape = new THREE.Shape();
    thumbShape.moveTo(0, -9);
    thumbShape.lineTo(12, -9);
    thumbShape.quadraticCurveTo(18, -9, 18, 0);
    thumbShape.quadraticCurveTo(18, 9, 12, 9);
    thumbShape.lineTo(0, 9);
    thumbShape.closePath();
    const thumbGeom = new THREE.ExtrudeGeometry(thumbShape, { depth: 3, bevelEnabled: false });
    this.activeGeometries.push(thumbGeom);
    const thumbMesh = new THREE.Mesh(thumbGeom, blackMat);
    if (!isLeftDoor) {
      thumbMesh.rotation.y = Math.PI;
    }
    thumbMesh.position.set(knobDir * 6, 0, 10);
    thumbMesh.castShadow = true;
    knobPivotGroup.add(thumbMesh);

    return latchGroup;
  }

  /**
   * 柱側 スライドラッチ受け金（ストライカー）およびアクリル丸板スペーサーの生成
   * - 図面寸法: 厚み1.5mm, 幅27mm, 先端R13.5半円＋D型大穴
   * - 取り付け面: ケージ正面（手前側 Z=D/2）から見える格好で柱前面に取り付け
   * - ケージ高さ方向フレーム（柱）の前面にアクリル丸板 (φ20mm t5mm x 2枚, 上下隣接)
   * - その上に穴が開いている部品（受金）が乗る格好
   * - ケージ外側位置（X=0）と同じになるよう外側を切断加工（ツライチ）
   * @param {boolean} isLeftPillar - 左柱側か右柱側か
   */
  createStrikerAssembly(isLeftPillar) {
    const group = new THREE.Group();
    const acrylicMat = this.materials.acrylic;
    const blackMat = this.getLatchBlackMaterial(); // 完全黒色固定

    // 内側（開口部中央）を向く方向: 左柱なら +1, 右柱なら -1
    const dir = isLeftPillar ? 1 : -1;

    // 1. 直径20mm 厚み5mm のアクリル丸板 × 2枚 (柱前面 Z: 0~5mm, 上下ピッチ20mm: Y=±10mm)
    // 柱幅20mmの中心溝は外側端から 10mm (dir * 10)
    for (const dy of [-10, 10]) {
      const discGeom = new THREE.CylinderGeometry(10, 10, 5, 24);
      discGeom.rotateX(Math.PI / 2); // 円盤の法線をZ軸（正面）向きに
      this.activeGeometries.push(discGeom);
      const discMesh = new THREE.Mesh(discGeom, acrylicMat);
      discMesh.position.set(dir * 10, dy, 2.5);
      group.add(discMesh);

      // 固定ネジ頭 (M4皿/六角ボルト頭: φ7mm x 2.5mm, 黒色)
      const boltGeom = new THREE.CylinderGeometry(3.5, 3.5, 2.5, 16);
      boltGeom.rotateX(Math.PI / 2);
      this.activeGeometries.push(boltGeom);
      const boltMesh = new THREE.Mesh(boltGeom, blackMat);
      boltMesh.position.set(dir * 10, dy, 7.5);
      group.add(boltMesh);
    }

    // 2. 受け金プレート (公式図面準拠: 幅27mm, 厚み1.5mm, 先端R13.5半円 + D型大穴)
    // 外側端はケージ外側面とツライチ (X = 0)
    // 柱内面 (X = 20mm) を越えて内側へ約18mm突出 (全長 38mm, 先端 X = 38mm)
    const shape = new THREE.Shape();
    const w = 27;     // 幅 27mm (Y: -13.5 ~ +13.5)
    const r = w / 2;  // 半円半径 13.5mm
    const lTip = 38;  // 先端位置
    const lArcCenter = lTip - r; // 38 - 13.5 = 24.5mm

    if (isLeftPillar) {
      // 左柱: 外側 X=0 (切断端面) から右側 (+X) へ伸長
      shape.moveTo(0, -r);
      shape.lineTo(lArcCenter, -r);
      shape.absarc(lArcCenter, 0, r, -Math.PI / 2, Math.PI / 2, false);
      shape.lineTo(0, r);
      shape.closePath();

      // 受穴: 図面および写真 CP-294N.png 通りの「D型半円大穴」
      // 先端内側に幅約15mm, 高さ約15mmのD型穴をくり抜く
      const holeRadius = 7.5;
      const holeArcCenter = lArcCenter - 1.0; // 23.5mm
      const holeStraightX = lArcCenter - 7.5; // 17.0mm
      const holePath = new THREE.Path();
      holePath.moveTo(holeStraightX, -holeRadius);
      holePath.lineTo(holeArcCenter, -holeRadius);
      holePath.absarc(holeArcCenter, 0, holeRadius, -Math.PI / 2, Math.PI / 2, false);
      holePath.lineTo(holeStraightX, holeRadius);
      holePath.closePath();
      shape.holes.push(holePath);

      // M4取付穴 (アクリル丸板の中心 X=10, Y=±10)
      for (const dy of [-10, 10]) {
        const screwHole = new THREE.Path();
        screwHole.absarc(10, dy, 2.2, 0, Math.PI * 2, true);
        shape.holes.push(screwHole);
      }
    } else {
      // 右柱: 外側 X=0 (切断端面) から左側 (-X) へ伸長
      shape.moveTo(0, -r);
      shape.lineTo(-lArcCenter, -r);
      shape.absarc(-lArcCenter, 0, r, -Math.PI / 2, -Math.PI * 1.5, true);
      shape.lineTo(0, r);
      shape.closePath();

      // 受穴: D型半円大穴
      const holeRadius = 7.5;
      const holeArcCenter = -lArcCenter + 1.0;
      const holeStraightX = -lArcCenter + 7.5;
      const holePath = new THREE.Path();
      holePath.moveTo(holeStraightX, -holeRadius);
      holePath.lineTo(holeArcCenter, -holeRadius);
      holePath.absarc(holeArcCenter, 0, holeRadius, -Math.PI / 2, -Math.PI * 1.5, true);
      holePath.lineTo(holeStraightX, holeRadius);
      holePath.closePath();
      shape.holes.push(holePath);

      // M4取付穴 (アクリル丸板の中心 X=-10, Y=±10)
      for (const dy of [-10, 10]) {
        const screwHole = new THREE.Path();
        screwHole.absarc(-10, dy, 2.2, 0, Math.PI * 2, true);
        shape.holes.push(screwHole);
      }
    }

    const plateGeom = new THREE.ExtrudeGeometry(shape, { depth: 1.5, bevelEnabled: false });
    this.activeGeometries.push(plateGeom);
    const plateMesh = new THREE.Mesh(plateGeom, blackMat);
    plateMesh.position.set(0, 0, 5.0); // アクリル丸板の前面 (Z = 5.0mm) から手前に1.5mm (Z: 5.0 ~ 6.5mm)
    plateMesh.castShadow = true;
    group.add(plateMesh);

    return group;
  }

  /**
   * M4 エンドキャップ（ECP-2020-4）の生成・配置
   * - 断面 20x20mm、厚み 3mm、角R2mmのABS樹脂キャップ
   * - 奥行き方向フレームの端部に嵌め込み配置
   */
  addEndCap(x, y, z) {
    const w = 20, h = 20, r = 2;
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2 + r, -h / 2);
    shape.lineTo(w / 2 - r, -h / 2);
    shape.absarc(w / 2 - r, -h / 2 + r, r, -Math.PI / 2, 0, false);
    shape.lineTo(w / 2, h / 2 - r);
    shape.absarc(w / 2 - r, h / 2 - r, r, 0, Math.PI / 2, false);
    shape.lineTo(-w / 2 + r, h / 2);
    shape.absarc(-w / 2 + r, h / 2 - r, r, Math.PI / 2, Math.PI, false);
    shape.lineTo(-w / 2, -h / 2 + r);
    shape.absarc(-w / 2 + r, -h / 2 + r, r, Math.PI, Math.PI * 1.5, false);

    const extrudeSettings = {
      depth: 3,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.25,
      bevelThickness: 0.25
    };
    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    // 中心をZ=0に
    geom.translate(0, 0, -1.5);
    this.activeGeometries.push(geom);

    const mesh = new THREE.Mesh(geom, this.materials.endCapMaterial);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = 'M4エンドキャップ';

    this.frameGroup.add(mesh);
    return mesh;
  }

  /**
   * 金網（ワイヤーメッシュ）の生成
   * - 線径 φ3.2mm（半径1.6mm）、SS400 ポリエチレン樹脂粉体塗装（黒）
   * - 直交溶接ワイヤーメッシュを精密に表現（横ワイヤーと縦ワイヤーが上下で接合）
   * @param {number} width - 幅 (A寸法)
   * @param {number} depth - 奥行き (B寸法)
   * @param {number} pitch - ピッチ (15, 25, 30mm)
   * @returns {THREE.Group}
   */
  createWireMesh(width, depth, pitch) {
    const meshGroup = new THREE.Group();
    meshGroup.name = `WireMesh_P${pitch}_${width}x${depth}`;

    const wireR = 1.6; // φ3.2mmの半径

    // 横ワイヤー（X軸方向、長さ width）
    const numWiresX = Math.max(2, Math.floor(depth / pitch) + 1);
    const startZ = -((numWiresX - 1) * pitch) / 2;

    const xWireGeom = new THREE.CylinderGeometry(wireR, wireR, width, 8);
    xWireGeom.rotateZ(Math.PI / 2);
    this.activeGeometries.push(xWireGeom);

    for (let i = 0; i < numWiresX; i++) {
      const wire = new THREE.Mesh(xWireGeom, this.materials.wireMesh);
      wire.position.set(0, wireR, startZ + i * pitch);
      wire.castShadow = true;
      meshGroup.add(wire);
    }

    // 縦ワイヤー（Z軸方向、長さ depth）
    const numWiresZ = Math.max(2, Math.floor(width / pitch) + 1);
    const startX = -((numWiresZ - 1) * pitch) / 2;

    const zWireGeom = new THREE.CylinderGeometry(wireR, wireR, depth, 8);
    zWireGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(zWireGeom);

    for (let i = 0; i < numWiresZ; i++) {
      const wire = new THREE.Mesh(zWireGeom, this.materials.wireMesh);
      wire.position.set(startX + i * pitch, -wireR, 0);
      wire.castShadow = true;
      meshGroup.add(wire);
    }

    return meshGroup;
  }

  /**
   * パラメータを更新して3Dモデルを再構築
   * @param {Object} newParams
   */
  update(newParams) {
    if (newParams && newParams.panelConfig) {
      this.params.panelConfig = Object.assign({}, this.params.panelConfig, newParams.panelConfig);
      const paramsCopy = { ...newParams };
      delete paramsCopy.panelConfig;
      Object.assign(this.params, paramsCopy);
    } else if (newParams) {
      Object.assign(this.params, newParams);
    }
    const { W, D, H, cageType, frontWindowH, hasSideReinforcement, sideOpeningH, showPanels, frameColor, hasFloorReinforcement, hasTopReinforcement, footType, doorHingeSide } = this.params;
    const isSilver = (frameColor === 'silver');

    if (frameColor) {
      this.materials.setFrameColor(frameColor);
    }

    this.clearGroup(this.frameGroup);
    this.clearGroup(this.panelGroup);
    this.clearGroup(this.doorGroup);
    this.clearGroup(this.feetGroup);
    this.clearGroup(this.perchGroup);
    this.clearGroup(this.dividerGroup);
    this.clearGroup(this.caulkingGroup);
    this.clearGroup(this.rubberPackingGroup);
    this.disposeResources();

    // 寸法変更時は扉アニメーション状態をリセット（新しい寸法で即時配置）
    this._doorAnim = null;

    this.partsList = [];

    const rotZ = new THREE.Euler(0, 0, 0);                 // Z方向（前後）
    const rotX = new THREE.Euler(0, Math.PI / 2, 0);        // X方向（左右）
    const rotY = new THREE.Euler(Math.PI / 2, 0, 0);        // Y方向（上下）

    const colorSuffix = frameColor === 'black' ? ' (ブラック)' : ' (シルバー)';

    // 柱の長さはすべて H - 40mm
    const pillarLength = Math.max(10, H - 40);

    // 奥行方向フレームの長さ: ケージ指定寸法Dより前後3mmずつ計6mm短縮（両端に厚み3mmのエンドキャップが取り付く）
    const depthFrameL = Math.max(10, D - 6);

    // ==========================================
    // 1. フレームの構築
    // ==========================================
    if (cageType === 'A_FRAMED') {
      // ---------------- Type A 正面枠囲い ----------------
      // 床・左右フレーム (2020、長さ D - 6mm、前後3mmエンドキャップで全長D)
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(-W / 2 + 10, 10, 0), rotZ, '床・左2020');
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(W / 2 - 10, 10, 0), rotZ, '床・右2020');
      this.recordPart(getFramePartNumber('2020', depthFrameL, frameColor), depthFrameL, 2, '床面 左右通し (前後3mm短縮・キャップ取付)', 'frame');

      // 床・正面フレーム (AFS-4040-4: 40x40mm、長さ W - 40mm)
      // 正面最前面 Z = D/2 から奥行き40mm (Z: D/2 - 40 〜 D/2, 中心 Z = D/2 - 20)
      // 高さ Y: 0 〜 40 (中心 Y = 20)
      const floorFrontL = Math.max(10, W - 40);
      this.addFrameMember('4040', floorFrontL, new THREE.Vector3(0, 20, D / 2 - 20), rotX, '床・正面4040 (枠囲い下部)');
      this.recordPart(getFramePartNumber('4040', floorFrontL, frameColor), floorFrontL, 1, '正面下部 40x40枠囲い (AFS-4040-4)', 'frame');

      // 床・背面フレーム (2020、長さ W - 40)
      const floorBackL = Math.max(10, W - 40);
      this.addFrameMember('2020', floorBackL, new THREE.Vector3(0, 10, -D / 2 + 10), rotX, '床・背面2020');
      this.recordPart(getFramePartNumber('2020', floorBackL, frameColor), floorBackL, 1, '床面 背面', 'frame');

      // 床・中央補強フレーム (長さ D - 60mm、中心 Z = -10)
      if (hasFloorReinforcement) {
        const floorCenterL = Math.max(10, D - 60);
        const reinfProfile = isSilver ? '2020_flat' : '2020';
        this.addFrameMember(reinfProfile, floorCenterL, new THREE.Vector3(0, 10, -10), rotZ, '床・中央補強2020', null, 'top');
        this.recordPart(getFramePartNumber('2020', floorCenterL, frameColor, false, true), floorCenterL, 1, '床面 中央補強 (2分割・D-60mm)', 'frame');
      }

      // 柱フレーム
      // 奥側2本: 2020 (長さ H - 40mm, Z = -D/2 + 10)
      const pillarY = H / 2;
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(-W / 2 + 10, pillarY, -D / 2 + 10), rotY, '柱・奥左2020');
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(W / 2 - 10, pillarY, -D / 2 + 10), rotY, '柱・奥右2020');
      this.recordPart(getFramePartNumber('2020', pillarLength, frameColor), pillarLength, 2, '柱 (奥2隅)', 'frame');

      // 手前側2本: 2040 (幅20mm x 奥行40mm, 長さ H - 40mm, Z = D/2 - 20)
      this.addFrameMember('2040', pillarLength, new THREE.Vector3(-W / 2 + 10, pillarY, D / 2 - 20), rotY, '柱・手前左2040');
      this.addFrameMember('2040', pillarLength, new THREE.Vector3(W / 2 - 10, pillarY, D / 2 - 20), rotY, '柱・手前右2040');
      this.recordPart(getFramePartNumber('2040', pillarLength, frameColor), pillarLength, 2, '柱・正面枠囲い (2040・奥行40mm)', 'frame');

      // 天面フレームの金網仕様判定（シルバー金網仕様時は金網に接する天面フレームすべて 5シリーズ）
      const needTopSplit = hasTopReinforcement || (W > 940);
      const topConfig = this.params.panelConfig || {};

      let isTopMesh = false;
      if (needTopSplit) {
        // 左右2面ある場合: どちらかが金網仕様（mesh）でも 5シリーズ
        const isLeftMesh = Boolean(topConfig.topLeft && topConfig.topLeft.startsWith('mesh'));
        const isRightMesh = Boolean(topConfig.topRight && topConfig.topRight.startsWith('mesh'));
        isTopMesh = isLeftMesh || isRightMesh;
      } else {
        // 1面天板の場合: 金網仕様の場合のみ 5シリーズ
        isTopMesh = Boolean(topConfig.top && topConfig.top.startsWith('mesh'));
      }

      // シルバーフレームかつ金網仕様の場合のみ 5シリーズ（金網φ3.2mmは4シリーズの溝に嵌まらないため）
      const isSilverTopMesh = isSilver && isTopMesh;

      // 天面・左右フレーム (2020、長さ D - 6mm)
      const topDepthPartCode = isSilverTopMesh ? 'AFS-2020-5' : getFrameBaseCode('2020', frameColor);
      const topDepthPartNumber = `${topDepthPartCode}-${depthFrameL}`;
      const topDepthNote = isSilverTopMesh
        ? '天面 左右通し (天面金網受用・AFS-2020-5)'
        : '天面 左右通し (前後3mm短縮・キャップ取付)';
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(-W / 2 + 10, H - 10, 0), rotZ, '天面・左2020');
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(W / 2 - 10, H - 10, 0), rotZ, '天面・右2020');
      this.recordPart(topDepthPartNumber, depthFrameL, 2, topDepthNote, 'frame', {
        partCode: topDepthPartCode,
        lengthMm: depthFrameL,
        unitType: 'm'
      });

      // 天面・背面フレーム (2020、長さ W - 40)
      const topBackL = Math.max(10, W - 40);
      const topBackPartCode = isSilverTopMesh ? 'AFS-2020-5' : getFrameBaseCode('2020', frameColor);
      const topBackPartNumber = `${topBackPartCode}-${topBackL}`;
      const topBackNote = isSilverTopMesh
        ? '天面 背面 (天面金網受用・AFS-2020-5)'
        : '天面 背面';
      this.addFrameMember('2020', topBackL, new THREE.Vector3(0, H - 10, -D / 2 + 10), rotX, '天面・背面2020');
      this.recordPart(topBackPartNumber, topBackL, 1, topBackNote, 'frame', {
        partCode: topBackPartCode,
        lengthMm: topBackL,
        unitType: 'm'
      });

      // 天面・手前フレーム (AFS-2040-4横向き: 高さ20mm x 奥行40mm、長さ W - 40mm)
      // 金網仕様の場合のみ AFS-2040-5 となり、塩ビパンチングパネル時（2面の場合は2面とも塩ビパンチング時）は AFS-2040-4
      const topFrontPartCode = isSilverTopMesh ? 'AFS-2040-5' : getFrameBaseCode('2040', frameColor);
      const topFrontPartNumber = `${topFrontPartCode}-${floorFrontL}`;
      const topFrontNote = isSilverTopMesh
        ? '正面上部 2040横向き (天面金網受用・AFS-2040-5)'
        : '正面上部 2040横向き (奥行40mm・AFS-2040-4)';

      const m2040Flat = new THREE.Matrix4().makeBasis(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(1, 0, 0)
      );
      const rot2040Flat = new THREE.Euler().setFromRotationMatrix(m2040Flat);
      this.addFrameMember('2040', floorFrontL, new THREE.Vector3(0, H - 10, D / 2 - 20), rot2040Flat, '天面・手前2040 (横向き枠囲い上部)');
      this.recordPart(topFrontPartNumber, floorFrontL, 1, topFrontNote, 'frame', {
        partCode: topFrontPartCode,
        lengthMm: floorFrontL,
        unitType: 'm'
      });

      // 天面・中央補強フレーム (W>940mmで必須、またはオプション指定、長さ D - 60mm、中心 Z = -10)
      if (hasTopReinforcement || W > 940) {
        const topCenterL = Math.max(10, D - 60);
        const topCenterPartCode = isSilverTopMesh ? 'AFS-2020-5' : getFrameBaseCode('2020', frameColor, false, true);
        const topCenterPartNumber = `${topCenterPartCode}-${topCenterL}`;
        const topCenterNote = isSilverTopMesh
          ? '天面 中央補強 (天面金網受用・AFS-2020-5)'
          : '天面 中央補強 (2分割・D-60mm)';
        const reinfProfile = (isSilver && !isSilverTopMesh) ? '2020_flat' : '2020';
        this.addFrameMember(reinfProfile, topCenterL, new THREE.Vector3(0, H - 10, -10), rotZ, '天面・中央補強2020', null, 'bottom');
        this.recordPart(topCenterPartNumber, topCenterL, 1, topCenterNote, 'frame', {
          partCode: topCenterPartCode,
          lengthMm: topCenterL,
          unitType: 'm'
        });
      }

    } else if (cageType === 'A' || cageType === 'A_FRONT') {
      // ---------------- Type A / Type A 前開き ----------------
      // 床・左右フレーム (2020、長さ D - 6mm、前後3mmエンドキャップで全長D)
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(-W / 2 + 10, 10, 0), rotZ, '床・左2020');
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(W / 2 - 10, 10, 0), rotZ, '床・右2020');
      this.recordPart(getFramePartNumber('2020', depthFrameL, frameColor), depthFrameL, 2, '床面 左右通し (前後3mm短縮・キャップ取付)', 'frame');

      // 床・正面フレーム
      const floorFrontL = Math.max(10, W - 40);
      const frontWideFrame = this.params.frontWideFrame || '2x';

      if (frontWideFrame === '3x') {
        if (frameColor === 'black') {
          // ブラックフレームにはAFS-2060がないため、40mm幅の上に20mm幅を乗せる2本構成（計60mm高）
          // 下段: 2040 (高さ40mm, Y=0〜40, 中心Y=20)
          this.addFrameMember('2040', floorFrontL, new THREE.Vector3(0, 20, D / 2 - 10), rotX, '床・正面2040 (3倍幅下段)');
          this.recordPart(getFramePartNumber('2040', floorFrontL, 'black'), floorFrontL, 1, '床面 正面 3倍幅下段 (40mm幅・ブラック)', 'frame');

          // 上段: 2020 (高さ20mm, Y=40〜60, 中心Y=50)
          this.addFrameMember('2020', floorFrontL, new THREE.Vector3(0, 50, D / 2 - 10), rotX, '床・正面2020 (3倍幅上段)');
          this.recordPart(getFramePartNumber('2020', floorFrontL, 'black'), floorFrontL, 1, '床面 正面 3倍幅上段 (20mm幅・ブラック2段構成)', 'frame');
        } else {
          // シルバーフレーム: AFS-2060-4 (高さ60mm, Y=0〜60, 中心Y=30) 1本
          this.addFrameMember('2060', floorFrontL, new THREE.Vector3(0, 30, D / 2 - 10), rotX, '床・正面2060 (3倍幅)');
          this.recordPart(getFramePartNumber('2060', floorFrontL, 'silver'), floorFrontL, 1, '床面 正面 3倍幅 (AFS-2060-4)', 'frame');
        }
      } else if (frontWideFrame === '2x') {
        // 2倍幅: 2040 (高さ40mm, Y=0〜40, 中心Y=20) 1本
        this.addFrameMember('2040', floorFrontL, new THREE.Vector3(0, 20, D / 2 - 10), rotX, '床・正面2040 (2倍幅)');
        this.recordPart(getFramePartNumber('2040', floorFrontL, frameColor), floorFrontL, 1, '床面 正面 2倍幅 (AFS-2040・内側)', 'frame');
      } else {
        // 幅広なし (標準): 2020 (高さ20mm, Y=0〜20, 中心Y=10) 1本
        this.addFrameMember('2020', floorFrontL, new THREE.Vector3(0, 10, D / 2 - 10), rotX, '床・正面2020 (標準幅)');
        this.recordPart(getFramePartNumber('2020', floorFrontL, frameColor), floorFrontL, 1, '床面 正面 (標準2020)', 'frame');
      }

      // 床・背面フレーム (2020、長さ W - 40)
      const floorBackL = Math.max(10, W - 40);
      this.addFrameMember('2020', floorBackL, new THREE.Vector3(0, 10, -D / 2 + 10), rotX, '床・背面2020');
      this.recordPart(getFramePartNumber('2020', floorBackL, frameColor), floorBackL, 1, '床面 背面', 'frame');

      // 床・中央補強フレーム (オプションまたはW>750mmで連動、長さ D - 40)
      if (hasFloorReinforcement) {
        const floorCenterL = Math.max(10, D - 40);
        const reinfProfile = isSilver ? '2020_flat' : '2020';
        this.addFrameMember(reinfProfile, floorCenterL, new THREE.Vector3(0, 10, 0), rotZ, '床・中央補強2020', null, 'top');
        this.recordPart(getFramePartNumber('2020', floorCenterL, frameColor, false, true), floorCenterL, 1, '床面 中央補強 (2分割)', 'frame');
      }

      // 柱フレーム (4本すべて H - 40mm、床奥行きフレーム Y=20 に乗る)
      const pillarY = H / 2;
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(-W / 2 + 10, pillarY, D / 2 - 10), rotY, '柱・手前左');
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(W / 2 - 10, pillarY, D / 2 - 10), rotY, '柱・手前右');
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(-W / 2 + 10, pillarY, -D / 2 + 10), rotY, '柱・奥左');
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(W / 2 - 10, pillarY, -D / 2 + 10), rotY, '柱・奥右');
      this.recordPart(getFramePartNumber('2020', pillarLength, frameColor), pillarLength, 4, '柱 (4隅・床奥行き乗せ)', 'frame');

      // 天面フレームの金網仕様判定（シルバー金網仕様時は金網に接する天面フレームすべて 5シリーズ）
      const needTopSplit = hasTopReinforcement || (W > 940);
      const topConfig = this.params.panelConfig || {};

      let isTopMesh = false;
      if (needTopSplit) {
        // 左右2面ある場合: どちらかが金網仕様（mesh）でも 5シリーズ
        const isLeftMesh = Boolean(topConfig.topLeft && topConfig.topLeft.startsWith('mesh'));
        const isRightMesh = Boolean(topConfig.topRight && topConfig.topRight.startsWith('mesh'));
        isTopMesh = isLeftMesh || isRightMesh;
      } else {
        // 1面天板の場合: 金網仕様の場合のみ 5シリーズ
        isTopMesh = Boolean(topConfig.top && topConfig.top.startsWith('mesh'));
      }

      // シルバーフレームかつ金網仕様の場合のみ 5シリーズ（金網φ3.2mmは4シリーズの溝に嵌まらないため）
      const isSilverTopMesh = isSilver && isTopMesh;

      // 天面・左右フレーム (2020、長さ D - 6mm)
      const topDepthPartCode = isSilverTopMesh ? 'AFS-2020-5' : getFrameBaseCode('2020', frameColor);
      const topDepthPartNumber = `${topDepthPartCode}-${depthFrameL}`;
      const topDepthNote = isSilverTopMesh
        ? '天面 左右通し (天面金網受用・AFS-2020-5)'
        : '天面 左右通し (前後3mm短縮・キャップ取付)';
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(-W / 2 + 10, H - 10, 0), rotZ, '天面・左2020');
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(W / 2 - 10, H - 10, 0), rotZ, '天面・右2020');
      this.recordPart(topDepthPartNumber, depthFrameL, 2, topDepthNote, 'frame', {
        partCode: topDepthPartCode,
        lengthMm: depthFrameL,
        unitType: 'm'
      });

      // 天面・前後フレーム (2020、長さ W - 40)
      const topBackL = Math.max(10, W - 40);
      const topFrontBackPartCode = isSilverTopMesh ? 'AFS-2020-5' : getFrameBaseCode('2020', frameColor);
      const topFrontBackPartNumber = `${topFrontBackPartCode}-${topBackL}`;
      const topFrontBackNote = isSilverTopMesh
        ? '天面 前後 (天面金網受用・AFS-2020-5)'
        : '天面 前後';
      this.addFrameMember('2020', topBackL, new THREE.Vector3(0, H - 10, -D / 2 + 10), rotX, '天面・背面2020');
      this.addFrameMember('2020', topBackL, new THREE.Vector3(0, H - 10, D / 2 - 10), rotX, '天面・手前2020');
      this.recordPart(topFrontBackPartNumber, topBackL, 2, topFrontBackNote, 'frame', {
        partCode: topFrontBackPartCode,
        lengthMm: topBackL,
        unitType: 'm'
      });

      // 天面・中央補強フレーム (W>940mmで必須、またはオプション指定、長さ D - 40)
      if (hasTopReinforcement || W > 940) {
        const topCenterL = Math.max(10, D - 40);
        const topCenterPartCode = isSilverTopMesh ? 'AFS-2020-5' : getFrameBaseCode('2020', frameColor, false, true);
        const topCenterPartNumber = `${topCenterPartCode}-${topCenterL}`;
        const topCenterNote = isSilverTopMesh
          ? '天面 中央補強 (天面金網受用・AFS-2020-5)'
          : '天面 中央補強 (2分割)';
        const reinfProfile = (isSilver && !isSilverTopMesh) ? '2020_flat' : '2020';
        this.addFrameMember(reinfProfile, topCenterL, new THREE.Vector3(0, H - 10, 0), rotZ, '天面・中央補強2020', null, 'bottom');
        this.recordPart(topCenterPartNumber, topCenterL, 1, topCenterNote, 'frame', {
          partCode: topCenterPartCode,
          lengthMm: topCenterL,
          unitType: 'm'
        });
      }

    } else {
      // ---------------- Type C ----------------
      // 床・左右フレーム (2020、長さ D - 6mm)
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(-W / 2 + 10, 10, 0), rotZ, '床・左2020');
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(W / 2 - 10, 10, 0), rotZ, '床・右2020');
      this.recordPart(getFramePartNumber('2020', depthFrameL, frameColor), depthFrameL, 2, '床面 左右通し (前後3mm短縮・キャップ取付)', 'frame');

      // 床・前後フレーム (2020、長さ W - 40)
      const floorFrontBackL = Math.max(10, W - 40);
      this.addFrameMember('2020', floorFrontBackL, new THREE.Vector3(0, 10, D / 2 - 10), rotX, '床・手前2020');
      this.addFrameMember('2020', floorFrontBackL, new THREE.Vector3(0, 10, -D / 2 + 10), rotX, '床・背面2020');
      this.recordPart(getFramePartNumber('2020', floorFrontBackL, frameColor), floorFrontBackL, 2, '床面 前後', 'frame');

      // 床・中央補強フレーム (オプションまたはW>750mmで連動、長さ D - 40)
      if (hasFloorReinforcement) {
        const floorCenterL = Math.max(10, D - 40);
        const reinfProfile = isSilver ? '2020_flat' : '2020';
        this.addFrameMember(reinfProfile, floorCenterL, new THREE.Vector3(0, 10, 0), rotZ, '床・中央補強2020', null, 'top');
        this.recordPart(getFramePartNumber('2020', floorCenterL, frameColor, false, true), floorCenterL, 1, '床面 中央補強 (2分割)', 'frame');
      }

      // 柱フレーム (4本すべて H - 40mm)
      const pillarY = H / 2;
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(-W / 2 + 10, pillarY, D / 2 - 10), rotY, '柱・手前左');
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(W / 2 - 10, pillarY, D / 2 - 10), rotY, '柱・手前右');
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(-W / 2 + 10, pillarY, -D / 2 + 10), rotY, '柱・奥左');
      this.addFrameMember('2020', pillarLength, new THREE.Vector3(W / 2 - 10, pillarY, -D / 2 + 10), rotY, '柱・奥右');
      this.recordPart(getFramePartNumber('2020', pillarLength, frameColor), pillarLength, 4, '柱 (4隅)', 'frame');

      // 天面フレームの金網仕様判定（シルバー金網仕様時は金網に接する天面フレームすべて 5シリーズ）
      const needTopSplitC = hasTopReinforcement || (W > 940);
      const topConfigC = this.params.panelConfig || {};

      let isTopMeshC = false;
      if (needTopSplitC) {
        const isLeftMesh = Boolean(topConfigC.topLeft && topConfigC.topLeft.startsWith('mesh'));
        const isRightMesh = Boolean(topConfigC.topRight && topConfigC.topRight.startsWith('mesh'));
        isTopMeshC = isLeftMesh || isRightMesh;
      } else {
        isTopMeshC = Boolean(topConfigC.top && topConfigC.top.startsWith('mesh'));
      }

      const isSilverTopMeshC = isSilver && isTopMeshC;

      // 天面・左右フレーム (2020、長さ D - 6mm)
      const topDepthPartCodeC = isSilverTopMeshC ? 'AFS-2020-5' : getFrameBaseCode('2020', frameColor);
      const topDepthPartNumberC = `${topDepthPartCodeC}-${depthFrameL}`;
      const topDepthNoteC = isSilverTopMeshC
        ? '天面 左右通し (天面金網受用・AFS-2020-5)'
        : '天面 左右通し (前後3mm短縮・キャップ取付)';
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(-W / 2 + 10, H - 10, 0), rotZ, '天面・左2020');
      this.addFrameMember('2020', depthFrameL, new THREE.Vector3(W / 2 - 10, H - 10, 0), rotZ, '天面・右2020');
      this.recordPart(topDepthPartNumberC, depthFrameL, 2, topDepthNoteC, 'frame', {
        partCode: topDepthPartCodeC,
        lengthMm: depthFrameL,
        unitType: 'm'
      });

      // 天面・前後フレーム (2020、長さ W - 40)
      const topBackLC = Math.max(10, W - 40);
      const topFrontBackPartCodeC = isSilverTopMeshC ? 'AFS-2020-5' : getFrameBaseCode('2020', frameColor);
      const topFrontBackPartNumberC = `${topFrontBackPartCodeC}-${topBackLC}`;
      const topFrontBackNoteC = isSilverTopMeshC
        ? '天面 前後 (天面金網受用・AFS-2020-5)'
        : '天面 前後';
      this.addFrameMember('2020', topBackLC, new THREE.Vector3(0, H - 10, -D / 2 + 10), rotX, '天面・背面2020');
      this.addFrameMember('2020', topBackLC, new THREE.Vector3(0, H - 10, D / 2 - 10), rotX, '天面・手前2020');
      this.recordPart(topFrontBackPartNumberC, topBackLC, 2, topFrontBackNoteC, 'frame', {
        partCode: topFrontBackPartCodeC,
        lengthMm: topBackLC,
        unitType: 'm'
      });

      // 天面・中央補強フレーム (W>940mmで必須、またはオプション指定、長さ D - 40)
      if (hasTopReinforcement || W > 940) {
        const topCenterLC = Math.max(10, D - 40);
        const topCenterPartCodeC = isSilverTopMeshC ? 'AFS-2020-5' : getFrameBaseCode('2020', frameColor, false, true);
        const topCenterPartNumberC = `${topCenterPartCodeC}-${topCenterLC}`;
        const topCenterNoteC = isSilverTopMeshC
          ? '天面 中央補強 (天面金網受用・AFS-2020-5)'
          : '天面 中央補強 (2分割)';
        const reinfProfileC = (isSilver && !isSilverTopMeshC) ? '2020_flat' : '2020';
        this.addFrameMember(reinfProfileC, topCenterLC, new THREE.Vector3(0, H - 10, 0), rotZ, '天面・中央補強2020', null, 'bottom');
        this.recordPart(topCenterPartNumberC, topCenterLC, 1, topCenterNoteC, 'frame', {
          partCode: topCenterPartCodeC,
          lengthMm: topCenterLC,
          unitType: 'm'
        });
      }

      // Type C 正面中桟フレーム (2020、前窓開口 frontWindowH の上)
      // 溝のない面をケージ室内側（奥側/-Z方向、rotXではローカルright）に配置
      const midBarY = 20 + frontWindowH + 10;
      const midBarL = Math.max(10, W - 40);
      const midBarProfile = isSilver ? '2020_flat' : '2020';
      this.addFrameMember(midBarProfile, midBarL, new THREE.Vector3(0, midBarY, D / 2 - 10), rotX, '正面・中桟2020', null, 'right');
      this.recordPart(getFramePartNumber('2020', midBarL, frameColor, false, true), midBarL, 1, '正面 中桟 (レール受け)', 'frame');
    }

    // 奥行き方向フレーム4本（床左右・天面左右）の両端にM4エンドキャップ（計8個）を取り付け
    // 手前側: Z = D/2 - 1.5, 奥側: Z = -D/2 + 1.5
    const capPositions = [
      // 手前側（4箇所）
      { x: -W / 2 + 10, y: 10, z: D / 2 - 1.5 },
      { x: W / 2 - 10, y: 10, z: D / 2 - 1.5 },
      { x: -W / 2 + 10, y: H - 10, z: D / 2 - 1.5 },
      { x: W / 2 - 10, y: H - 10, z: D / 2 - 1.5 },
      // 奥側（4箇所）
      { x: -W / 2 + 10, y: 10, z: -D / 2 + 1.5 },
      { x: W / 2 - 10, y: 10, z: -D / 2 + 1.5 },
      { x: -W / 2 + 10, y: H - 10, z: -D / 2 + 1.5 },
      { x: W / 2 - 10, y: H - 10, z: -D / 2 + 1.5 },
    ];
    for (const pos of capPositions) {
      this.addEndCap(pos.x, pos.y, pos.z);
    }
    this.recordPart('ECP-2020-4', '-', 8, '奥行きフレーム両端 (前後計8箇所)', 'frame', {
      partCode: 'ECP-2020-4',
      lengthMm: null,
      unitType: 'piece'
    });

    // 側面補強フレーム (オプション: 左右対称、長さ 通常: D - 40 / 枠囲い: D - 60)
    // 溝のない面をケージ室内側（左フレーム: 右向き/right、右フレーム: 左向き/left）に配置
    if (hasSideReinforcement) {
      const isFramed = (cageType === 'A_FRAMED');
      const sideReinfL = Math.max(10, isFramed ? D - 60 : D - 40);
      const sideReinfZ = isFramed ? -10 : 0;
      const upperH = sideOpeningH;
      const lowerH = Math.max(10, H - 60 - upperH);
      const sideReinfY = 20 + lowerH + 10;
      const reinfProfile = isSilver ? '2020_flat' : '2020';
      this.addFrameMember(reinfProfile, sideReinfL, new THREE.Vector3(-W / 2 + 10, sideReinfY, sideReinfZ), rotZ, '側面補強・左2020', null, 'right');
      this.addFrameMember(reinfProfile, sideReinfL, new THREE.Vector3(W / 2 - 10, sideReinfY, sideReinfZ), rotZ, '側面補強・右2020', null, 'left');
      const noteSuffix = isFramed ? ' (D-60mm)' : '';
      this.recordPart(getFramePartNumber('2020', sideReinfL, frameColor, false, true), sideReinfL, 2, `側面 補強フレーム (左右${noteSuffix})`, 'frame');
    }

    // ==========================================
    // 2. パネルおよびスライド扉の構築
    // ==========================================
    this.buildPanels(rotX, rotZ);
    this.buildDoors();
    this.buildDoorPartsRecord();

    // ==========================================
    // 3. 接地脚の構築 (ゴム足 TM-18 または キャスター)
    // ==========================================
    if (this.params.footType === 'caster') {
      this.buildCasters();
    } else {
      this.buildFeet();
    }

    // ==========================================
    // 4. 止まり木オプションの構築 (天板吊り下げ式)
    // ==========================================
    if (this.params.hasPerch) {
      this.buildPerch();
    }

    // ==========================================
    // 5. 防水コーキングの構築 (標準装備)
    // ==========================================
    this.buildCaulking();

    // ==========================================
    // 6. モレ対策ゴムパッキンの構築 (オプション)
    // ==========================================
    if (this.params.hasRubberPacking) {
      this.buildRubberPacking();
    }

    // ==========================================
    // 7. ２室分け仕切り板オプションの構築
    // ==========================================
    if (this.params.hasRoomDivider) {
      this.buildRoomDivider();
    }

    // 表示トグルの反映
    this.panelGroup.visible = showPanels;
    this.doorGroup.visible = showPanels;
    this.caulkingGroup.visible = showPanels;
    this.rubberPackingGroup.visible = showPanels;
    this.dividerGroup.visible = showPanels;
  }

  /**
   * 固定パネルの生成（厚み3mm、透明アクリル・半透明塩ビパンチング・金網＋背面上部グロメット）
   * - 材料寸法はフレーム溝（深さ5mm）の収まり代を考慮し、各間口寸法（内寸）に+10mm加算
   */
  buildPanels(rotX, rotZ) {
    const { W, D, H, cageType, frontWindowH, hasSideReinforcement, sideOpeningH, hasFloorReinforcement, hasTopReinforcement, frameColor } = this.params;
    const panelConfig = this.params.panelConfig || {};
    const panelT = 3.0; // アクリル・パネル厚み 3mm

    const floorMatType = panelConfig.floor || 'acrylic';
    const backMatType = panelConfig.back || 'acrylic';
    const sideMatType = panelConfig.side || 'acrylic';
    const sideUpperMatType = panelConfig.sideUpper || 'punching';
    const sideLowerMatType = panelConfig.sideLower || 'acrylic';
    const topMatType = panelConfig.top || 'punching';
    const topLeftMatType = panelConfig.topLeft || 'punching';
    const topRightMatType = panelConfig.topRight || 'punching';

    // 1. 底面パネル（間口+10mm: 通常 D-30 / 枠囲い D-50）
    const isFramed = (cageType === 'A_FRAMED');
    const floorMatD = isFramed ? D - 50 : D - 30; // (D - 60) + 10 or (D - 40) + 10
    const floorCenterZ = isFramed ? -10 : 0;
    const isFloorBlackMatte = (floorMatType === 'black_matte');
    const isFloorSmokeGray = (floorMatType === 'smoke_gray');
    let floorMat = this.materials.acrylic;
    let floorPartName = '透明アクリル 3.0mm 底板';
    let floorCode = 'acrylic_extrusion_3_0';
    if (isFloorBlackMatte) {
      floorMat = this.materials.blackMatteAcrylic;
      floorPartName = 'アクリル黒両面マット 3.0mm 底板';
      floorCode = 'acrylic_black_matte_3_0';
    } else if (isFloorSmokeGray) {
      floorMat = this.materials.smokeGrayAcrylic;
      floorPartName = 'アクリル グレースモーク半透明 3.0mm 底板';
      floorCode = 'acrylic_smoke_gray_3_0';
    }

    if (hasFloorReinforcement) {
      // 2分割底板
      const splitFloorW = (W - 60) / 2; // 間口幅
      const splitFloorMatW = Math.round(splitFloorW + 10); // 材料幅 (溝5mm x 2)
      const floorGeom = new THREE.BoxGeometry(splitFloorMatW, panelT, floorMatD);
      this.activeGeometries.push(floorGeom);

      const leftFloor = new THREE.Mesh(floorGeom, floorMat);
      leftFloor.position.set(-splitFloorW / 2 - 10, 20 - panelT / 2, floorCenterZ);
      this.panelGroup.add(leftFloor);

      const rightFloor = new THREE.Mesh(floorGeom, floorMat);
      rightFloor.position.set(splitFloorW / 2 + 10, 20 - panelT / 2, floorCenterZ);
      this.panelGroup.add(rightFloor);

      this.recordPart(floorPartName, `${splitFloorMatW} x ${floorMatD} mm`, 2, '床面 (2分割)', 'panel', {
        panelCode: floorCode,
        partCode: floorCode,
        widthMm: splitFloorMatW,
        heightMm: floorMatD,
        unitType: 'm2'
      });
    } else {
      // 1枚底板
      const floorMatW = W - 30; // (W - 40) + 10
      const floorGeom = new THREE.BoxGeometry(floorMatW, panelT, floorMatD);
      this.activeGeometries.push(floorGeom);
      const floorMesh = new THREE.Mesh(floorGeom, floorMat);
      floorMesh.position.set(0, 20 - panelT / 2, floorCenterZ);
      this.panelGroup.add(floorMesh);
      this.recordPart(floorPartName, `${floorMatW} x ${floorMatD} mm`, 1, '床面 (1枚)', 'panel', {
        panelCode: floorCode,
        partCode: floorCode,
        widthMm: floorMatW,
        heightMm: floorMatD,
        unitType: 'm2'
      });
    }

    // 2. 背面パネル（透明アクリル / 半透明塩ビパンチング / 中空ポリカ / ブラックマット地アクリル: 間口+10mm）
    const backMatW = W - 30; // (W - 40) + 10
    const backMatH = H - 30; // (H - 40) + 10

    if (backMatType === 'punching') {
      const backPunchingTex = createPunchingTexture(backMatW, backMatH, false);
      this.activeTextures.push(backPunchingTex);
      const backPunchingMat = this.materials.createPunchingMaterial(backPunchingTex);
      this.activeMaterials.push(backPunchingMat);

      const backGeom = new THREE.PlaneGeometry(backMatW, backMatH);
      this.activeGeometries.push(backGeom);
      const backMesh = new THREE.Mesh(backGeom, backPunchingMat);
      backMesh.position.set(0, H / 2, -D / 2 + 10);
      this.panelGroup.add(backMesh);
      this.recordPart('塩ビパンチングボード 透明 3.0mm 背板', `${backMatW} x ${backMatH} mm`, 1, '背面 (通気パネル・φ3.1-P7)', 'panel', {
        panelCode: 'pvc_punching_3_0',
        partCode: 'pvc_punching_3_0',
        widthMm: backMatW,
        heightMm: backMatH,
        unitType: 'm2'
      });
    } else if (backMatType === 'polyca') {
      // 中空ポリカ（横方向に筋が走る）
      const { map: backPolycaMap, bumpMap: backPolycaBump } = createHollowPolycaTexture(backMatW, backMatH);
      this.activeTextures.push(backPolycaMap, backPolycaBump);
      const backPolycaMat = this.materials.createPolycaMaterial(backPolycaMap, backPolycaBump);
      this.activeMaterials.push(backPolycaMat);

      const backGeom = new THREE.BoxGeometry(backMatW, backMatH, 4.0);
      this.activeGeometries.push(backGeom);
      const backMesh = new THREE.Mesh(backGeom, backPolycaMat);
      backMesh.position.set(0, H / 2, -D / 2 + 10);
      this.panelGroup.add(backMesh);
      this.recordPart('中空ポリカ 4.0mm 背板', `${backMatW} x ${backMatH} mm`, 1, '背面 (中空ポリカ・横筋)', 'panel', {
        panelCode: 'polyca_4_0',
        partCode: 'polyca_4_0',
        widthMm: backMatW,
        heightMm: backMatH,
        unitType: 'm2'
      });
    } else if (backMatType === 'black_matte') {
      // ブラックマット地アクリル（完全不透明・低グロス）
      const backGeom = new THREE.BoxGeometry(backMatW, backMatH, panelT);
      this.activeGeometries.push(backGeom);
      const backMesh = new THREE.Mesh(backGeom, this.materials.blackMatteAcrylic);
      backMesh.position.set(0, H / 2, -D / 2 + 10);
      this.panelGroup.add(backMesh);
      this.recordPart('アクリル黒両面マット 3.0mm 背板', `${backMatW} x ${backMatH} mm`, 1, '背面', 'panel', {
        panelCode: 'acrylic_black_matte_3_0',
        partCode: 'acrylic_black_matte_3_0',
        widthMm: backMatW,
        heightMm: backMatH,
        unitType: 'm2'
      });
    } else if (backMatType === 'smoke_gray') {
      // グレースモーク半透明アクリル
      const backGeom = new THREE.BoxGeometry(backMatW, backMatH, panelT);
      this.activeGeometries.push(backGeom);
      const backMesh = new THREE.Mesh(backGeom, this.materials.smokeGrayAcrylic);
      backMesh.position.set(0, H / 2, -D / 2 + 10);
      this.panelGroup.add(backMesh);
      this.recordPart('アクリル グレースモーク半透明 3.0mm 背板', `${backMatW} x ${backMatH} mm`, 1, '背面', 'panel', {
        panelCode: 'acrylic_smoke_gray_3_0',
        partCode: 'acrylic_smoke_gray_3_0',
        widthMm: backMatW,
        heightMm: backMatH,
        unitType: 'm2'
      });
    } else {
      // 透明アクリル
      const backGeom = new THREE.BoxGeometry(backMatW, backMatH, panelT);
      this.activeGeometries.push(backGeom);
      const backMesh = new THREE.Mesh(backGeom, this.materials.acrylic);
      backMesh.position.set(0, H / 2, -D / 2 + 10);
      this.panelGroup.add(backMesh);
      this.recordPart('透明アクリル 3.0mm 背板', `${backMatW} x ${backMatH} mm`, 1, '背面', 'panel', {
        panelCode: 'acrylic_extrusion_3_0',
        partCode: 'acrylic_extrusion_3_0',
        widthMm: backMatW,
        heightMm: backMatH,
        unitType: 'm2'
      });
    }

    // 3. コンセント穴（配線用ゴムグロメット φ30）の配置判定
    // ルール1: 天板が1枚（分割無し）＆塩ビパンチング -> 天板奥側左右端に2か所、背面なし
    // ルール2: 天板が2枚（分割あり）＆塩ビパンチング（左右とも） -> 天板各1枚に2か所ずつ（計4か所）、背面なし
    // ルール3: 天板が金網（分割ありなし問わず）、または天板2分割で左右どちらかが塩ビパンチング（もう片方が金網等） -> 背面上部に2か所、天板なし
    const needTopSplit = hasTopReinforcement || (W > 940);
    const isTopSinglePunching = !needTopSplit && (topMatType === 'punching');
    const isTopSplitBothPunching = needTopSplit && (topLeftMatType === 'punching') && (topRightMatType === 'punching');

    let grommetMode = 'back_top_2'; // デフォルト: ルール3（背面上部左右2箇所）
    if (isTopSinglePunching) {
      grommetMode = 'top_single_2'; // ルール1（天板1枚奥左右2箇所）
    } else if (isTopSplitBothPunching) {
      grommetMode = 'top_split_4';  // ルール2（天板2分割奥各2箇所 計4箇所）
    }

    // ルール3の場合のみ背面上部にゴムグロメットを2箇所配置
    if (grommetMode === 'back_top_2') {
      const grommetY = (H - 20) - 35;
      const grommetZ = -D / 2 + 10;
      const backGrommetGeom = new THREE.CylinderGeometry(19, 19, 4.5, 32);
      backGrommetGeom.rotateX(Math.PI / 2); // 背面パネル（XY平面）に沿ってZ軸方向にリングを向ける
      this.activeGeometries.push(backGrommetGeom);

      const grommetLeftX = -(W - 40) / 2 + 35;
      const grommetRightX = (W - 40) / 2 - 35;

      const grommetLeft = new THREE.Mesh(backGrommetGeom, this.materials.grommetMaterial);
      grommetLeft.position.set(grommetLeftX, grommetY, grommetZ);
      this.panelGroup.add(grommetLeft);

      const grommetRight = new THREE.Mesh(backGrommetGeom, this.materials.grommetMaterial);
      grommetRight.position.set(grommetRightX, grommetY, grommetZ);
      this.panelGroup.add(grommetRight);

      const note = needTopSplit
        ? '背面板 上部左右2箇所 (天面仕様・端から35mm)'
        : '背面板 上部左右 (端から35mm)';
      this.recordPart('配線用ゴムグロメット (φ30穴用, 黒)', '外径38mm / 穴径30mm', 2, note, 'other');
    }

    // 4. 左右側面パネル配置ヘルパー
    const sideMatD = isFramed ? D - 50 : D - 30; // (D - 60) + 10 or (D - 40) + 10
    const sideCenterZ = isFramed ? -10 : 0;

    const addSidePanelPair = (panelDepth, panelHeight, posY, matType, locLabel) => {
      const prefix = locLabel ? `${locLabel}・` : '';
      const labelDesc = locLabel ? `${locLabel} ` : '';

      if (matType === 'punching') {
        const sidePunchingTex = createPunchingTexture(panelDepth, panelHeight, false);
        this.activeTextures.push(sidePunchingTex);
        const sidePunchingMat = this.materials.createPunchingMaterial(sidePunchingTex);
        this.activeMaterials.push(sidePunchingMat);

        const geom = new THREE.PlaneGeometry(panelDepth, panelHeight);
        geom.rotateY(Math.PI / 2);
        this.activeGeometries.push(geom);

        const leftMesh = new THREE.Mesh(geom, sidePunchingMat);
        leftMesh.position.set(-W / 2 + 10, posY, sideCenterZ);
        this.panelGroup.add(leftMesh);

        const rightMesh = new THREE.Mesh(geom, sidePunchingMat);
        rightMesh.position.set(W / 2 - 10, posY, sideCenterZ);
        this.panelGroup.add(rightMesh);

        this.recordPart(`塩ビパンチングボード 透明 3.0mm 側板 (${prefix}φ3.1-P7)`, `${panelDepth} x ${panelHeight} mm`, 2, `左右側面 ${labelDesc}(通気パネル)`, 'panel', {
          panelCode: 'pvc_punching_3_0',
          partCode: 'pvc_punching_3_0',
          widthMm: panelDepth,
          heightMm: panelHeight,
          unitType: 'm2'
        });
      } else if (matType === 'polyca') {
        // 中空ポリカ（奥行方向に筋が走る）
        const { map: polycaMap, bumpMap: polycaBump } = createHollowPolycaTexture(panelDepth, panelHeight);
        this.activeTextures.push(polycaMap, polycaBump);
        const polycaMat = this.materials.createPolycaMaterial(polycaMap, polycaBump);
        this.activeMaterials.push(polycaMat);

        const geom = new THREE.BoxGeometry(4.0, panelHeight, panelDepth);
        this.activeGeometries.push(geom);

        const leftMesh = new THREE.Mesh(geom, polycaMat);
        leftMesh.position.set(-W / 2 + 10, posY, sideCenterZ);
        this.panelGroup.add(leftMesh);

        const rightMesh = new THREE.Mesh(geom, polycaMat);
        rightMesh.position.set(W / 2 - 10, posY, sideCenterZ);
        this.panelGroup.add(rightMesh);

        this.recordPart(`中空ポリカ 4.0mm 側板 (${prefix}奥行筋)`, `${panelDepth} x ${panelHeight} mm`, 2, `左右側面 ${labelDesc}(中空ポリカ)`, 'panel', {
          panelCode: 'polyca_4_0',
          partCode: 'polyca_4_0',
          widthMm: panelDepth,
          heightMm: panelHeight,
          unitType: 'm2'
        });
      } else if (matType === 'black_matte') {
        // ブラックマット地アクリル
        const geom = new THREE.BoxGeometry(panelT, panelHeight, panelDepth);
        this.activeGeometries.push(geom);

        const leftMesh = new THREE.Mesh(geom, this.materials.blackMatteAcrylic);
        leftMesh.position.set(-W / 2 + 10, posY, sideCenterZ);
        this.panelGroup.add(leftMesh);

        const rightMesh = new THREE.Mesh(geom, this.materials.blackMatteAcrylic);
        rightMesh.position.set(W / 2 - 10, posY, sideCenterZ);
        this.panelGroup.add(rightMesh);

        this.recordPart(`アクリル黒両面マット 3.0mm 側板 (${prefix})`, `${panelDepth} x ${panelHeight} mm`, 2, `左右側面 ${labelDesc}`, 'panel', {
          panelCode: 'acrylic_black_matte_3_0',
          partCode: 'acrylic_black_matte_3_0',
          widthMm: panelDepth,
          heightMm: panelHeight,
          unitType: 'm2'
        });
      } else if (matType === 'smoke_gray') {
        // グレースモーク半透明アクリル
        const geom = new THREE.BoxGeometry(panelT, panelHeight, panelDepth);
        this.activeGeometries.push(geom);

        const leftMesh = new THREE.Mesh(geom, this.materials.smokeGrayAcrylic);
        leftMesh.position.set(-W / 2 + 10, posY, sideCenterZ);
        this.panelGroup.add(leftMesh);

        const rightMesh = new THREE.Mesh(geom, this.materials.smokeGrayAcrylic);
        rightMesh.position.set(W / 2 - 10, posY, sideCenterZ);
        this.panelGroup.add(rightMesh);

        this.recordPart(`アクリル グレースモーク半透明 3.0mm 側板 (${prefix})`, `${panelDepth} x ${panelHeight} mm`, 2, `左右側面 ${labelDesc}`, 'panel', {
          panelCode: 'acrylic_smoke_gray_3_0',
          partCode: 'acrylic_smoke_gray_3_0',
          widthMm: panelDepth,
          heightMm: panelHeight,
          unitType: 'm2'
        });
      } else {
        // 透明アクリル
        const geom = new THREE.BoxGeometry(panelT, panelHeight, panelDepth);
        this.activeGeometries.push(geom);

        const leftMesh = new THREE.Mesh(geom, this.materials.acrylic);
        leftMesh.position.set(-W / 2 + 10, posY, sideCenterZ);
        this.panelGroup.add(leftMesh);

        const rightMesh = new THREE.Mesh(geom, this.materials.acrylic);
        rightMesh.position.set(W / 2 - 10, posY, sideCenterZ);
        this.panelGroup.add(rightMesh);

        this.recordPart(`透明アクリル 3.0mm 側板 (${prefix})`, `${panelDepth} x ${panelHeight} mm`, 2, `左右側面 ${labelDesc}`, 'panel', {
          panelCode: 'acrylic_extrusion_3_0',
          partCode: 'acrylic_extrusion_3_0',
          widthMm: panelDepth,
          heightMm: panelHeight,
          unitType: 'm2'
        });
      }
    };

    if (hasSideReinforcement) {
      // 側面補強あり：上部・下部を個別に選択可能 (sideOpeningH = 側面上部開口高さ)
      const upperH = sideOpeningH; // 上部開口間口高さ
      const lowerH = Math.max(10, H - 60 - upperH); // 下部開口間口高さ
      const lowerMatH = Math.round(lowerH + 10); // 下部材料高さ (溝5mm x 2)
      const upperMatH = Math.round(upperH + 10); // 上部材料高さ (溝5mm x 2)

      // --- 下部パネル ---
      addSidePanelPair(sideMatD, lowerMatH, 20 + lowerH / 2, sideLowerMatType, '下部');

      // --- 上部パネル ---
      const upperCenterY = H - 20 - upperH / 2;
      addSidePanelPair(sideMatD, upperMatH, upperCenterY, sideUpperMatType, '上部');

      // --- 側面換気量調整板 (オプション: 側面2分割かつ側面上部が塩ビパンチング時に外張り追加) ---
      if (this.params.hasSideVentCover && sideUpperMatType === 'punching') {
        const ventCoverT = 1.5; // 厚み 1.5mm 透明アクリル
        const ventCoverH = upperH + 10; // 間口に対して+10mm (上下各5mm突出して開口を完全にカバー)
        const ventCoverD = D - 2; // ケージサイズに対して-2mm (前後各1mm逃がし)

        const ventGeom = new THREE.BoxGeometry(ventCoverT, ventCoverH, ventCoverD);
        this.activeGeometries.push(ventGeom);

        // 外張り配置: フレーム外側 (X = ±W/2) の外表面に密着
        const leftVentX = -W / 2 - ventCoverT / 2;
        const rightVentX = W / 2 + ventCoverT / 2;

        const leftVent = new THREE.Mesh(ventGeom, this.materials.ventCoverAcrylic);
        leftVent.position.set(leftVentX, upperCenterY, 0);
        leftVent.castShadow = true;
        this.panelGroup.add(leftVent);

        const rightVent = new THREE.Mesh(ventGeom, this.materials.ventCoverAcrylic);
        rightVent.position.set(rightVentX, upperCenterY, 0);
        rightVent.castShadow = true;
        this.panelGroup.add(rightVent);

        // No.1 化粧つまみネジの生成と配置
        // 穴位置: 奥行方向端から9mm内側 (Z = ±(D/2 - 10))、上下端から40mm内側
        const screwZFront = (D - 2) / 2 - 9; // = D/2 - 10 (柱中心溝位置)
        const screwZBack = -(D - 2) / 2 + 9;  // = -D/2 + 10 (柱中心溝位置)
        const screwYTop = upperCenterY + ventCoverH / 2 - 40;
        const screwYBottom = upperCenterY - ventCoverH / 2 + 40;

        const screwPositions = [
          { y: screwYTop, z: screwZFront },
          { y: screwYTop, z: screwZBack },
          { y: screwYBottom, z: screwZFront },
          { y: screwYBottom, z: screwZBack },
        ];

        // 左右側面それぞれ4箇所につまみネジを配置 (計8個)
        for (const pos of screwPositions) {
          // 左側面 (X = -W/2 - ventCoverT から外側 -X 方向へ)
          this.addThumbScrew(-W / 2 - ventCoverT, pos.y, pos.z, -1);
          // 右側面 (X = W/2 + ventCoverT から外側 +X 方向へ)
          this.addThumbScrew(W / 2 + ventCoverT, pos.y, pos.z, 1);
        }

        this.recordPart('側面換気量調整板 (透明アクリル 1.5mm)', `${ventCoverH} x ${ventCoverD} mm`, 2, '左右側面上部 外張り (φ9mm穴加工4箇所/枚・保温換気調整)', 'panel', {
          panelCode: 'acrylic_extrusion_1_5',
          partCode: 'acrylic_extrusion_1_5',
          widthMm: ventCoverH,
          heightMm: ventCoverD,
          unitType: 'm2'
        });
        const screwColorName = frameColor === 'black' ? 'ブラック' : 'ホワイト';
        this.recordPart(`No.1 化粧つまみネジ (${screwColorName})`, '外径φ15mm / M4 (手締め・工具不要)', 8, '側面換気量調整板 固定用 (左右計8箇所)', 'other');
      }

    } else {
      // 側面補強なし：全面選択
      const sideMatH = H - 30; // (H - 40) + 10
      addSidePanelPair(sideMatD, sideMatH, H / 2, sideMatType, '');

      // --- 側面換気量調整板 (オプション: 側面補強なしで塩ビパンチング時に高さ2分割・計4枚外張り追加) ---
      if (this.params.hasSideVentCover && sideMatType === 'punching') {
        const ventCoverT = 1.5; // 厚み 1.5mm 透明アクリル
        const openingH = H - 40; // 間口高さ (上下フレーム内寸)
        // 間口半分 + 10mm余裕 (上下フレームに10mmずつ被り、中央Y=H/2で突き合わせ)
        const ventCoverH = Math.round(openingH / 2 + 10);
        const ventCoverD = D - 2; // ケージサイズに対して-2mm (前後各1mm逃がし)

        const ventGeom = new THREE.BoxGeometry(ventCoverT, ventCoverH, ventCoverD);
        this.activeGeometries.push(ventGeom);

        // 外張り配置: フレーム外側 (X = ±W/2) の外表面に密着 (突き合わせのため左右Xは同一)
        const leftVentX = -W / 2 - ventCoverT / 2;
        const rightVentX = W / 2 + ventCoverT / 2;

        // 中心Y座標 (下段: Y=10〜H/2, 上段: Y=H/2〜H-10)
        const lowerCenterY = 10 + ventCoverH / 2;
        const upperCenterY = H - 10 - ventCoverH / 2;

        // 1. 下段パネル (左右)
        const leftLowerMesh = new THREE.Mesh(ventGeom, this.materials.ventCoverAcrylic);
        leftLowerMesh.position.set(leftVentX, lowerCenterY, 0);
        leftLowerMesh.castShadow = true;
        this.panelGroup.add(leftLowerMesh);

        const rightLowerMesh = new THREE.Mesh(ventGeom, this.materials.ventCoverAcrylic);
        rightLowerMesh.position.set(rightVentX, lowerCenterY, 0);
        rightLowerMesh.castShadow = true;
        this.panelGroup.add(rightLowerMesh);

        // 2. 上段パネル (左右)
        const leftUpperMesh = new THREE.Mesh(ventGeom, this.materials.ventCoverAcrylic);
        leftUpperMesh.position.set(leftVentX, upperCenterY, 0);
        leftUpperMesh.castShadow = true;
        this.panelGroup.add(leftUpperMesh);

        const rightUpperMesh = new THREE.Mesh(ventGeom, this.materials.ventCoverAcrylic);
        rightUpperMesh.position.set(rightVentX, upperCenterY, 0);
        rightUpperMesh.castShadow = true;
        this.panelGroup.add(rightUpperMesh);

        // No.1 化粧つまみネジの生成と配置 (各パネル4箇所、左右計16個)
        const screwZFront = (D - 2) / 2 - 9; // = D/2 - 10 (柱中心溝位置)
        const screwZBack = -(D - 2) / 2 + 9;  // = -D/2 + 10 (柱中心溝位置)

        // 柱溝 (Y=20〜H-20) の範囲内で各パネルの上下端からバランスよく配置
        const lowerScrewYBottom = Math.max(25, 10 + Math.min(30, ventCoverH * 0.2));
        const lowerScrewYTop = Math.min(H / 2 - 15, H / 2 - Math.min(25, ventCoverH * 0.2));
        const upperScrewYBottom = Math.max(H / 2 + 15, H / 2 + Math.min(25, ventCoverH * 0.2));
        const upperScrewYTop = Math.min(H - 25, H - 10 - Math.min(30, ventCoverH * 0.2));

        const screwPositions = [
          // 下段パネル用 (4箇所)
          { y: lowerScrewYTop, z: screwZFront },
          { y: lowerScrewYTop, z: screwZBack },
          { y: lowerScrewYBottom, z: screwZFront },
          { y: lowerScrewYBottom, z: screwZBack },
          // 上段パネル用 (4箇所)
          { y: upperScrewYTop, z: screwZFront },
          { y: upperScrewYTop, z: screwZBack },
          { y: upperScrewYBottom, z: screwZFront },
          { y: upperScrewYBottom, z: screwZBack },
        ];

        // 左右側面それぞれ8箇所につまみネジを配置 (計16個)
        for (const pos of screwPositions) {
          // 左側面 (X = -W/2 - ventCoverT から外側 -X 方向へ)
          this.addThumbScrew(-W / 2 - ventCoverT, pos.y, pos.z, -1);
          // 右側面 (X = W/2 + ventCoverT から外側 +X 方向へ)
          this.addThumbScrew(W / 2 + ventCoverT, pos.y, pos.z, 1);
        }

        // BOM記録: 換気量調整板 4枚 (左右各2枚)
        this.recordPart('側面換気量調整板 (透明アクリル 1.5mm)', `${ventCoverH} x ${ventCoverD} mm`, 4, '左右側面外張り (上下各2枚・φ9mm穴加工4箇所/枚・保温換気調整)', 'panel', {
          panelCode: 'acrylic_extrusion_1_5',
          partCode: 'acrylic_extrusion_1_5',
          widthMm: ventCoverH,
          heightMm: ventCoverD,
          unitType: 'm2'
        });

        // BOM記録: 化粧つまみネジ 16個
        const screwColorName = frameColor === 'black' ? 'ブラック' : 'ホワイト';
        this.recordPart(`No.1 化粧つまみネジ (${screwColorName})`, '外径φ15mm / M4 (手締め・工具不要)', 16, '側面換気量調整板 固定用 (左右計16箇所)', 'other');
      }
    }

    // 5. 天板パネルの構築ヘルパー
    // hasGrommets: この天板パネルにコンセント穴（テクスチャ穴およびゴムグロメット3Dメッシュ）を配置するかどうか
    const buildTopSection = (wOp, dOp, centerX, matType, locName, hasGrommets = false) => {
      const isMesh = matType && matType.startsWith('mesh');
      const isBlackFrame = (frameColor === 'black');

      if (isMesh) {
        const pitch = parseInt(matType.replace('mesh', ''), 10); // 15, 25, 30

        if (isBlackFrame) {
          // ブラックフレームの場合：シルバーの2020インナーフレームを間口にかませる
          // 実機写真（黒フレーム金網30mm.JPG）の納まり（各3mmの組立余裕隙間）:
          // - 奥行き方向 (左右2本): 外側間口 dOp (410mm) より前後各3mm減 (計6mm減) => 404mm
          // - 幅方向 (前後2本): 左右インナーフレーム内寸 (wOp - 40 = 670mm) より左右各3mm減 (計6mm減) => 664mm
          const depthInnerL = Math.max(10, Math.round(dOp - 6));
          const frontInnerL = Math.max(10, Math.round(wOp - 46));

          // 左右フレーム（Z軸方向）
          const leftX = centerX - wOp / 2 + 10;
          const rightX = centerX + wOp / 2 - 10;
          this.addFrameMember('2020', depthInnerL, new THREE.Vector3(leftX, H - 10, topCenterZ), rotZ, `天面インナー左2020 (${locName})`, this.materials.silverInnerFrame);
          this.addFrameMember('2020', depthInnerL, new THREE.Vector3(rightX, H - 10, topCenterZ), rotZ, `天面インナー右2020 (${locName})`, this.materials.silverInnerFrame);

          // 前後フレーム（X軸方向）
          const frontZ = topCenterZ + dOp / 2 - 10;
          const backZ = topCenterZ - dOp / 2 + 10;
          this.addFrameMember('2020', frontInnerL, new THREE.Vector3(centerX, H - 10, frontZ), rotX, `天面インナー前2020 (${locName})`, this.materials.silverInnerFrame);
          this.addFrameMember('2020', frontInnerL, new THREE.Vector3(centerX, H - 10, backZ), rotX, `天面インナー後2020 (${locName})`, this.materials.silverInnerFrame);

          this.recordPart(getFramePartNumber('2020', depthInnerL, 'silver', true), depthInnerL, 2, `天面 金網取付用インナーフレーム左右 (${locName}・黒ケージ専用)`, 'frame', {
            partCode: 'AFS-2020-5',
            lengthMm: depthInnerL,
            unitType: 'm'
          });
          this.recordPart(getFramePartNumber('2020', frontInnerL, 'silver', true), frontInnerL, 2, `天面 金網取付用インナーフレーム前後 (${locName}・黒ケージ専用)`, 'frame', {
            partCode: 'AFS-2020-5',
            lengthMm: frontInnerL,
            unitType: 'm'
          });

          // 金網寸法：外側のブラックフレーム間口より40mm小さくしてはめ込み分10mm足す（合計30mm減寸法、750x450時 680x380mm）
          const meshW = Math.max(10, Math.round(wOp - 30));
          const meshD = Math.max(10, Math.round(dOp - 30));

          const wireMeshObj = this.createWireMesh(meshW, meshD, pitch);
          wireMeshObj.position.set(centerX, H - 10, topCenterZ);
          this.panelGroup.add(wireMeshObj);

          const modelNumber = `FENP${pitch}-A${meshW}-B${meshD}`;
          const meshCode = `wire_mesh_${pitch}`;
          this.recordPart(`金網 ${pitch}mmピッチ（黒粉体塗装） (型番: ${modelNumber})`, `${meshW} x ${meshD} mm (線径φ3.2, SS400黒塗装)`, 1, `天面 (${locName})`, 'panel', {
            panelCode: meshCode,
            partCode: meshCode,
            widthMm: meshW,
            heightMm: meshD,
            unitType: 'm2'
          });

        } else {
          // シルバーフレームの場合：ケージ天面フレームの溝に直接金網が収まる (間口+10mm)
          const meshW = Math.max(10, Math.round(wOp + 10));
          const meshD = Math.max(10, Math.round(dOp + 10));

          const wireMeshObj = this.createWireMesh(meshW, meshD, pitch);
          wireMeshObj.position.set(centerX, H - 10, topCenterZ);
          this.panelGroup.add(wireMeshObj);

          const modelNumber = `FENP${pitch}-A${meshW}-B${meshD}`;
          const meshCode = `wire_mesh_${pitch}`;
          this.recordPart(`金網 ${pitch}mmピッチ（黒粉体塗装） (型番: ${modelNumber})`, `${meshW} x ${meshD} mm (線径φ3.2, SS400黒塗装)`, 1, `天面 (${locName})`, 'panel', {
            panelCode: meshCode,
            partCode: meshCode,
            widthMm: meshW,
            heightMm: meshD,
            unitType: 'm2'
          });
        }

      } else if (matType === 'acrylic') {
        // 透明アクリル天板 (押出板)
        const topMatW = Math.round(wOp + 10);
        const topMatD = Math.round(dOp + 10);
        const topGeom = new THREE.BoxGeometry(topMatW, panelT, topMatD);
        this.activeGeometries.push(topGeom);

        const topMesh = new THREE.Mesh(topGeom, this.materials.acrylic);
        topMesh.position.set(centerX, H - 20 + panelT / 2, topCenterZ);
        this.panelGroup.add(topMesh);

        this.recordPart('透明アクリル 3.0mm 天板', `${topMatW} x ${topMatD} mm`, 1, `天面 (${locName})`, 'panel', {
          panelCode: 'acrylic_extrusion_3_0',
          partCode: 'acrylic_extrusion_3_0',
          widthMm: topMatW,
          heightMm: topMatD,
          unitType: 'm2'
        });

      } else {
        // 塩ビパンチング天板 (punching)
        const topMatW = Math.round(wOp + 10);
        const topMatD = Math.round(dOp + 10);
        // hasGrommets が true の時のみテクスチャ上にφ30穴を透過描画
        const punchingTex = createPunchingTexture(topMatW, topMatD, hasGrommets);
        this.activeTextures.push(punchingTex);
        const punchingMat = this.materials.createPunchingMaterial(punchingTex);
        this.activeMaterials.push(punchingMat);

        const topGeom = new THREE.PlaneGeometry(topMatW, topMatD);
        topGeom.rotateX(-Math.PI / 2);
        this.activeGeometries.push(topGeom);

        const topMesh = new THREE.Mesh(topGeom, punchingMat);
        topMesh.position.set(centerX, H - 20 + panelT / 2, topCenterZ);
        this.panelGroup.add(topMesh);

        this.recordPart('塩ビパンチングボード 透明 3.0mm 天板 (φ3.1-P7)', `${topMatW} x ${topMatD} mm`, 1, `天面 (${locName}・通気パネル)`, 'panel', {
          panelCode: 'pvc_punching_3_0',
          partCode: 'pvc_punching_3_0',
          widthMm: topMatW,
          heightMm: topMatD,
          unitType: 'm2'
        });

        // このセクションにグロメット穴を設ける場合、天板奥側左右端（端から35mm）にゴムグロメット3Dメッシュを配置
        if (hasGrommets) {
          const topGrommetGeom = new THREE.CylinderGeometry(19, 19, 4.5, 32);
          // 水平面（XZ）に配置するため回転不要（法線はY軸方向）
          this.activeGeometries.push(topGrommetGeom);

          const grommetY = H - 20 + panelT / 2;
          const grommetZ = topCenterZ - topMatD / 2 + 35; // パネル奥端から35mm
          const gLeftX = centerX - topMatW / 2 + 35;  // パネル左端から35mm
          const gRightX = centerX + topMatW / 2 - 35; // パネル右端から35mm

          const gLeft = new THREE.Mesh(topGrommetGeom, this.materials.grommetMaterial);
          gLeft.position.set(gLeftX, grommetY, grommetZ);
          this.panelGroup.add(gLeft);

          const gRight = new THREE.Mesh(topGrommetGeom, this.materials.grommetMaterial);
          gRight.position.set(gRightX, grommetY, grommetZ);
          this.panelGroup.add(gRight);
        }
      }
    };

    const topCenterZ = isFramed ? -10 : 0;
    const topMatD = isFramed ? D - 60 : D - 40; // 天面間口奥行き (通常 D-40 / 枠囲い D-60)
    if (needTopSplit) {
      // 2分割天板 (左側・右側)
      const splitTopW = (W - 60) / 2; // 各間口幅
      const leftCenterX = -splitTopW / 2 - 10;
      const rightCenterX = splitTopW / 2 + 10;

      // ルール2（左右とも塩ビパンチング）の場合のみ、各天板パネルに穴を開ける
      const hasGrommetsInSplit = (grommetMode === 'top_split_4');
      buildTopSection(splitTopW, topMatD, leftCenterX, topLeftMatType, '左側', hasGrommetsInSplit);
      buildTopSection(splitTopW, topMatD, rightCenterX, topRightMatType, '右側', hasGrommetsInSplit);

      if (grommetMode === 'top_split_4') {
        this.recordPart('配線用ゴムグロメット (φ30穴用, 黒)', '外径38mm / 穴径30mm', 4, '天面板 奥側各2箇所 (計4箇所・端から35mm)', 'other');
      }
    } else {
      // 1枚天板 (全面)
      // ルール1（塩ビパンチング）の場合のみ天板に穴を開ける
      const hasGrommetsInSingle = (grommetMode === 'top_single_2');
      buildTopSection(W - 40, topMatD, 0, topMatType, '全面', hasGrommetsInSingle);

      if (grommetMode === 'top_single_2') {
        this.recordPart('配線用ゴムグロメット (φ30穴用, 黒)', '外径38mm / 穴径30mm', 2, '天面板 奥側左右 (端から35mm)', 'other');
      }
    }

    // 6. Type C の前窓（はめ殺し固定窓・透明アクリル押出板 t3: 間口+10mm）
    if (cageType === 'C') {
      const fwMatW = W - 30; // (W - 40) + 10
      const fwMatH = frontWindowH + 10; // 間口高さ + 10 (上下溝5mm x 2)
      const fwGeom = new THREE.BoxGeometry(fwMatW, fwMatH, panelT);
      this.activeGeometries.push(fwGeom);
      const fwMesh = new THREE.Mesh(fwGeom, this.materials.acrylic);
      fwMesh.position.set(0, 20 + frontWindowH / 2, D / 2 - 10);
      this.panelGroup.add(fwMesh);
      this.recordPart('透明アクリル 3.0mm 前窓', `${fwMatW} x ${fwMatH} mm`, 1, '正面 下部はめ殺し固定窓', 'panel', {
        panelCode: 'acrylic_extrusion_3_0',
        partCode: 'acrylic_extrusion_3_0',
        widthMm: fwMatW,
        heightMm: fwMatH,
        unitType: 'm2'
      });
    }
  }

  /**
   * ガラスレール（上側: PGRU-03-4, 下側: PGRL-03-4）の生成・配置
   * - アルミフレームの溝に取り付き、開口間口が上側12mm、下側7mm狭まる仕様を再現
   * - 2本の長手溝（奥溝・手前溝）を持つABS樹脂レール
   * @param {number} railL - レール全長 (左右柱の内寸 W - 40mm)
   * @param {number} bottomY - 下側レール取付フレーム上面Y
   * @param {number} topY - 上側レール取付フレーム下面Y
   * @param {number} frontZ - 正面フレームの中心Z (D/2 - 10)
   */
  buildGlassRails(railL, bottomY, topY, frontZ) {
    const { frameColor } = this.params;

    // 1. 下側レール (PGRL-03-4: 全幅16mm, 高さ7mm, 溝深さ5mm)
    // 断面 (YZ平面): Z = -8 ~ +8, Y = 0 ~ 7 (フレーム上面から上に7mm突出)
    const bottomShape = new THREE.Shape();
    bottomShape.moveTo(-8.0, 2.5);
    bottomShape.lineTo(-6.5, 2.5);
    bottomShape.lineTo(-6.5, 7.0);
    bottomShape.lineTo(-5.0, 7.0);
    bottomShape.lineTo(-5.0, 2.0); // 奥溝底
    bottomShape.lineTo(-1.5, 2.0);
    bottomShape.lineTo(-1.5, 7.0); // 中壁
    bottomShape.lineTo(1.5, 7.0);
    bottomShape.lineTo(1.5, 2.0);  // 手前溝底
    bottomShape.lineTo(5.0, 2.0);
    bottomShape.lineTo(5.0, 7.0);
    bottomShape.lineTo(6.5, 7.0);
    bottomShape.lineTo(6.5, 2.5);
    bottomShape.lineTo(8.0, 2.5);
    bottomShape.lineTo(8.0, 0.0);  // 底面
    bottomShape.lineTo(-8.0, 0.0);
    bottomShape.closePath();

    const extrudeOptBottom = {
      depth: railL,
      bevelEnabled: false,
      steps: 1
    };
    const bottomGeom = new THREE.ExtrudeGeometry(bottomShape, extrudeOptBottom);
    bottomGeom.translate(0, 0, -railL / 2);
    bottomGeom.rotateY(-Math.PI / 2);
    this.activeGeometries.push(bottomGeom);

    const bottomRailMesh = new THREE.Mesh(bottomGeom, this.materials.railMaterial);
    bottomRailMesh.position.set(0, bottomY, frontZ);
    bottomRailMesh.castShadow = true;
    bottomRailMesh.receiveShadow = true;
    bottomRailMesh.name = '下側ガラスレール';
    this.doorGroup.add(bottomRailMesh);

    // 2. 上側レール (PGRU-03-4: 全幅16mm, 全高12mm, 溝深さ11mm)
    // 断面 (YZ平面): Y=0 がレール下面 (topY - 12), Y=12 がフレーム取付下面 (topY)
    const topShape = new THREE.Shape();
    topShape.moveTo(-8.0, 12.0 - 2.5); // ツバ下面
    topShape.lineTo(-6.5, 12.0 - 2.5);
    topShape.lineTo(-6.5, 0.0);        // 外壁下面
    topShape.lineTo(-5.0, 0.0);
    topShape.lineTo(-5.0, 11.0);       // 奥溝天井
    topShape.lineTo(-1.5, 11.0);
    topShape.lineTo(-1.5, 0.0);        // 中壁下面
    topShape.lineTo(1.5, 0.0);
    topShape.lineTo(1.5, 11.0);        // 手前溝天井
    topShape.lineTo(5.0, 11.0);
    topShape.lineTo(5.0, 0.0);
    topShape.lineTo(6.5, 0.0);
    topShape.lineTo(6.5, 12.0 - 2.5);  // 前ツバ下面
    topShape.lineTo(8.0, 12.0 - 2.5);
    topShape.lineTo(8.0, 12.0);        // 取付天井面
    topShape.lineTo(-8.0, 12.0);
    topShape.closePath();

    const extrudeOptTop = {
      depth: railL,
      bevelEnabled: false,
      steps: 1
    };
    const topGeom = new THREE.ExtrudeGeometry(topShape, extrudeOptTop);
    topGeom.translate(0, 0, -railL / 2);
    topGeom.rotateY(-Math.PI / 2);
    this.activeGeometries.push(topGeom);

    const topRailMesh = new THREE.Mesh(topGeom, this.materials.railMaterial);
    topRailMesh.position.set(0, topY - 12, frontZ);
    topRailMesh.castShadow = true;
    topRailMesh.receiveShadow = true;
    topRailMesh.name = '上側ガラスレール';
    this.doorGroup.add(topRailMesh);
  }

  /**
   * 強力爬虫類向けスライド扉たわみ防止レールの生成・配置
   * - 下側ガラスレール (PGRL-03-4) を左右端の柱内側面（X = ±openingW/2）に縦向きに取り付け
   * - レール長さ: 開口間口高さ openingH に対して -25mm
   * - 扉が閉まった時にレール溝内に入り込み、内側からの押し出し変形を防止
   * @param {number} openingW - 間口幅 (W - 40)
   * @param {number} openingH - 間口開口高さ (topY - bottomY)
   * @param {number} bottomY - 下側レール取付フレーム上面Y
   * @param {number} topY - 上側レール取付フレーム下面Y
   * @param {number} frontZ - 正面中心Z (D/2 - 10)
   * @param {string} frameColor - フレームカラー
   */
  buildAntiFlexRails(openingW, openingH, bottomY, topY, frontZ, frameColor) {
    const railL = Math.max(10, openingH - 25);

    // 下側レール断面 (PGRL-03-4: 全幅16mm, 高さ7mm, 溝深さ5mm)
    // 断面 (YZ平面): Z = -8 ~ +8, Y = 0 ~ 7 (底面 Y=0)
    const shape = new THREE.Shape();
    shape.moveTo(-8.0, 2.5);
    shape.lineTo(-6.5, 2.5);
    shape.lineTo(-6.5, 7.0);
    shape.lineTo(-5.0, 7.0);
    shape.lineTo(-5.0, 2.0); // 奥溝底
    shape.lineTo(-1.5, 2.0);
    shape.lineTo(-1.5, 7.0); // 中壁
    shape.lineTo(1.5, 7.0);
    shape.lineTo(1.5, 2.0);  // 手前溝底
    shape.lineTo(5.0, 2.0);
    shape.lineTo(5.0, 7.0);
    shape.lineTo(6.5, 7.0);
    shape.lineTo(6.5, 2.5);
    shape.lineTo(8.0, 2.5);
    shape.lineTo(8.0, 0.0);  // 底面
    shape.lineTo(-8.0, 0.0);
    shape.closePath();

    const extrudeOpt = {
      depth: railL,
      bevelEnabled: false,
      steps: 1
    };

    // レール中心Y: 下レール上面 (bottomY+7) と 上レール下面 (topY-12) の中間
    // 上下空き = openingH - 19。レール長 = openingH - 25。上下各3mmのクリアランス
    const railCenterY = (bottomY + 7 + topY - 12) / 2;

    // --- 左側たわみ防止レール ---
    // 底面 (0) が柱内側面 X = -openingW / 2 に接し、溝が +X 方向（ケージ内側）を向く
    // Z幅は frontZ - 8 ~ frontZ + 8
    const leftGeom = new THREE.ExtrudeGeometry(shape, extrudeOpt);
    leftGeom.translate(0, 0, -railL / 2); // 長さ方向の中心を原点に
    // 座標変換: X_cage = Y_shape (0~7), Y_cage = Z_shape (-railL/2~railL/2), Z_cage = X_shape (-8~8)
    const matLeft = new THREE.Matrix4().set(
      0, 1, 0, 0,
      0, 0, 1, 0,
      1, 0, 0, 0,
      0, 0, 0, 1
    );
    leftGeom.applyMatrix4(matLeft);
    this.activeGeometries.push(leftGeom);

    const leftRailMesh = new THREE.Mesh(leftGeom, this.materials.railMaterial);
    leftRailMesh.position.set(-openingW / 2, railCenterY, frontZ);
    leftRailMesh.castShadow = true;
    leftRailMesh.receiveShadow = true;
    leftRailMesh.name = '左側たわみ防止レール';
    this.doorGroup.add(leftRailMesh);

    // --- 右側たわみ防止レール ---
    // 底面 (0) が柱内側面 X = +openingW / 2 に接し、溝が -X 方向（ケージ内側）を向く
    const rightGeom = new THREE.ExtrudeGeometry(shape, extrudeOpt);
    rightGeom.translate(0, 0, -railL / 2);
    // 座標変換: X_cage = -Y_shape (0~-7), Y_cage = Z_shape (-railL/2~railL/2), Z_cage = X_shape (-8~8)
    const matRight = new THREE.Matrix4().set(
      0, -1, 0, 0,
      0,  0, 1, 0,
      1,  0, 0, 0,
      0,  0, 0, 1
    );
    rightGeom.applyMatrix4(matRight);
    this.activeGeometries.push(rightGeom);

    const rightRailMesh = new THREE.Mesh(rightGeom, this.materials.railMaterial);
    rightRailMesh.position.set(openingW / 2, railCenterY, frontZ);
    rightRailMesh.castShadow = true;
    rightRailMesh.receiveShadow = true;
    rightRailMesh.name = '右側たわみ防止レール';
    this.doorGroup.add(rightRailMesh);
  }

  /**
   * TypeA 正面枠囲い用の引き違いスライド扉の生成
   * - 開口部: 幅 W - 40mm, 高さ H - 60mm
   * - 幅方向フレーム: AFSF-2020-4 (442mm等、(W - 40)/2 + 12mm) × 4本 (黒は AFS-2020-4-BK)
   * - 高さ方向フレーム: AFSF-2040-4 (398mm等、(H - 60) - 42mm) × 4本 (黒は AFS-2040-4-BK、幅フレームに乗る格好)
   * - エンドキャップ: ECP-2020-4-GY (シルバー時) / ECP-2020-4 (黒) × 8個
   * - 透明アクリル押出板 3.0mm: (幅フレーム-64mm) × (高さフレーム+10mm) × 2枚
   * - 左側扉: ケージ内側 (Z = D/2 - 30mm)
   * - 右側扉: ケージ外側 (Z = D/2 - 10mm)
   * - 上下に各1mm隙間
   */
  buildFramedDoors() {
    const { W, D, H, doorState, frameColor } = this.params;
    const isSilver = (frameColor === 'silver');

    const openingW = Math.max(10, W - 40); // 間口幅 (左右柱内寸)
    const openingH = Math.max(10, H - 60); // 間口高さ (下4040、上2040横向き)

    // 幅方向フレーム長さ: 間口860mmで442mm => Math.round(openingW / 2 + 12)
    const doorFrameW = Math.max(10, Math.round(openingW / 2 + 12));

    // 高さ方向フレーム長さ: 間口440mmで398mm => openingH - 42
    const doorFrameH = Math.max(10, openingH - 42);

    // アクリル板寸法
    const panelW = Math.max(10, doorFrameW - 64); // 442 - 64 = 378mm
    const panelH = Math.max(10, doorFrameH + 10); // 398 + 10 = 408mm

    // 開口部と扉の垂直位置
    // 間口下端 Y=40, 間口上端 Y=H-20, 扉下端 Y=41 (+1mm隙間), 扉上端 Y=H-21 (-1mm隙間)
    const doorCenterY = (H + 20) / 2;
    const bottomFrameY = 51; // 41 + 10
    const topFrameY = H - 31; // H - 21 - 10

    // スライド限界と基準位置
    // 全閉時: フレーム（柱内面 ±openingW / 2）との隙間を2mm開けた位置を全閉位置とする
    const capThickness = 3;
    const gapClose = 2; // フレームとの隙間 2mm
    const baseLeftCenterX = -openingW / 2 + gapClose + capThickness + doorFrameW / 2;
    const baseRightCenterX = openingW / 2 - gapClose - capThickness - doorFrameW / 2;

    // スライド移動量: ロック解除つまみとの干渉を考慮した限界位置 (doorFrameW - 85mm)
    const maxSlide = Math.max(0, doorFrameW - 85);

    let targetLeftX = baseLeftCenterX;
    let targetRightX = baseRightCenterX;

    if (doorState === 'left_open') {
      targetLeftX = baseLeftCenterX + maxSlide;
    } else if (doorState === 'right_open') {
      targetRightX = baseRightCenterX - maxSlide;
    }

    let currentLeftX = targetLeftX;
    let currentRightX = targetRightX;
    if (this._doorAnim && !this._doorAnim.isFrontOpen) {
      currentLeftX = this._doorAnim.currentLeftX ?? targetLeftX;
      currentRightX = this._doorAnim.currentRightX ?? targetRightX;
    }

    // 奥行きZ位置
    // 開口部厚み40mm: Z: [D/2 - 40, D/2]
    // 左扉 (ケージ内側・奥側): Z = D/2 - 30
    // 右扉 (ケージ外側・手前側): Z = D/2 - 10
    const leftDoorZ = D / 2 - 30;
    const rightDoorZ = D / 2 - 10;

    const frameMat = isSilver ? this.materials.aluminum : this.materials.blackFrame;
    const capMat = isSilver ? this.materials.perchGrayCap : this.materials.endCapMaterial;

    // 扉フレーム用の回転オイラー角 (正規直交基底から正確に算出)
    // 幅方向フレーム (2020): 長さ方向を左右X軸、厚み方向を上下Y軸、溝無し面を奥側(-Z軸: ケージ内側)
    const m2020H = new THREE.Matrix4().makeBasis(
      new THREE.Vector3(0, 0, -1), // 元のShape X軸 -> -Z軸 (ケージ内側)
      new THREE.Vector3(0, 1, 0),  // 元のShape Y軸 -> +Y軸
      new THREE.Vector3(1, 0, 0)   // 元のExtrude Z軸 -> +X軸 (左右長)
    );
    const rot2020H = new THREE.Euler().setFromRotationMatrix(m2020H);

    // 高さ方向フレーム (2040): 長さ方向を上下Y軸、40mm幅を左右X軸、20mm厚みを前後Z軸
    const m2040V = new THREE.Matrix4().makeBasis(
      new THREE.Vector3(0, 0, 1),  // 元のShape X軸 (20mm) -> +Z軸
      new THREE.Vector3(1, 0, 0),  // 元のShape Y軸 (40mm) -> +X軸
      new THREE.Vector3(0, 1, 0)   // 元のExtrude Z軸 -> +Y軸 (上下長)
    );
    const rot2040V = new THREE.Euler().setFromRotationMatrix(m2040V);

    // ヘルパー: 1枚の枠囲い扉グループを構築 (ローカル原点: X=扉中心, Y=0, Z=0)
    const buildSingleDoorGroup = (isInnerDoor) => {
      const group = new THREE.Group();

      // 1. 下側フレーム (2020, 長さ doorFrameW)
      // 溝無し面がケージ内側 (-Z方向)
      this.addFrameMember(isSilver ? '2020_flat' : '2020', doorFrameW, new THREE.Vector3(0, bottomFrameY, 0), rot2020H, '扉下フレーム2020', frameMat, 'right', group);

      // 2. 上側フレーム (2020, 長さ doorFrameW)
      this.addFrameMember(isSilver ? '2020_flat' : '2020', doorFrameW, new THREE.Vector3(0, topFrameY, 0), rot2020H, '扉上フレーム2020', frameMat, 'right', group);

      // 3. 左側縦フレーム (2040, 長さ doorFrameH)
      // 幅40mm (X軸方向)、奥行20mm (Z軸方向)
      // エンドキャップ外面 (-doorFrameW / 2 - 3) と外側端面がツライチになるよう3mm外側に配置:
      // 中心位置: (-doorFrameW / 2 - 3) + 20 = -doorFrameW / 2 + 17
      this.addFrameMember('2040', doorFrameH, new THREE.Vector3(-doorFrameW / 2 + 17, doorCenterY, 0), rot2040V, '扉左縦フレーム2040', frameMat, null, group);

      // 4. 右側縦フレーム (2040, 長さ doorFrameH)
      // エンドキャップ外面 (doorFrameW / 2 + 3) と外側端面がツライチになるよう3mm外側に配置:
      // 中心位置: (doorFrameW / 2 + 3) - 20 = doorFrameW / 2 - 17
      this.addFrameMember('2040', doorFrameH, new THREE.Vector3(doorFrameW / 2 - 17, doorCenterY, 0), rot2040V, '扉右縦フレーム2040', frameMat, null, group);

      // 5. 透明アクリル板 (3.0mm 押出板)
      const panelGeom = new THREE.BoxGeometry(panelW, panelH, 3.0);
      this.activeGeometries.push(panelGeom);
      const panelMesh = new THREE.Mesh(panelGeom, this.materials.acrylic);
      panelMesh.position.set(0, doorCenterY, 0);
      panelMesh.castShadow = true;
      group.add(panelMesh);

      // 6. エンドキャップ ECP-2020-4 (上下フレームの左右両端4箇所: 厚み3mmがフレーム端面から外側に突出)
      const rotCapLeft = new THREE.Euler(0, -Math.PI / 2, 0);
      const rotCapRight = new THREE.Euler(0, Math.PI / 2, 0);

      this.addDoorEndCap(-doorFrameW / 2 - 1.5, bottomFrameY, 0, rotCapLeft, capMat, group);
      this.addDoorEndCap(doorFrameW / 2 + 1.5, bottomFrameY, 0, rotCapRight, capMat, group);
      this.addDoorEndCap(-doorFrameW / 2 - 1.5, topFrameY, 0, rotCapLeft, capMat, group);
      this.addDoorEndCap(doorFrameW / 2 + 1.5, topFrameY, 0, rotCapRight, capMat, group);

      // 7. スライドラッチおよび左扉用スペーサーフレーム
      if (isInnerDoor) {
        // 左扉（内側扉）: AFS-2040 長さ94mm スペーサーフレーム + ECP-2040 エンドキャップ2個
        // 縦フレーム前面 (ローカル Z = +10mm) から手前へ厚み20mm (中心 Z = 20)
        this.addFrameMember('2040', 94, new THREE.Vector3(-doorFrameW / 2 + 17, doorCenterY, 20), rot2040V, '左扉スペーサー2040', frameMat, null, group);

        // スペーサー用エンドキャップ ECP-2040 (上下各1個)
        const rotCap2040Top = new THREE.Euler(-Math.PI / 2, 0, 0);
        const rotCap2040Bottom = new THREE.Euler(Math.PI / 2, 0, 0);
        this.addEndCap2040(-doorFrameW / 2 + 17, doorCenterY + 47 + 1.5, 20, rotCap2040Top, capMat, group);
        this.addEndCap2040(-doorFrameW / 2 + 17, doorCenterY - 47 - 1.5, 20, rotCap2040Bottom, capMat, group);

        // CP-294N スライドラッチ本体 (スペーサー前面 Z = 30 に取り付け)
        const latchMesh = this.createSlideLatchMesh(true);
        latchMesh.position.set(-doorFrameW / 2 + 17, doorCenterY, 30);
        group.add(latchMesh);
        group.userData.latchKnob = latchMesh.userData.knobPivot;
      } else {
        // 右扉（外側扉）: CP-294N スライドラッチ本体 (縦フレーム前面 Z = 10 に直接取り付け)
        const latchMesh = this.createSlideLatchMesh(false);
        latchMesh.position.set(doorFrameW / 2 - 17, doorCenterY, 10);
        group.add(latchMesh);
        group.userData.latchKnob = latchMesh.userData.knobPivot;
      }

      return group;
    };

    // 左扉の生成と配置
    const leftDoorGroup = buildSingleDoorGroup(true);
    leftDoorGroup.position.set(currentLeftX, 0, leftDoorZ);
    this.doorGroup.add(leftDoorGroup);

    // 右扉の生成と配置
    const rightDoorGroup = buildSingleDoorGroup(false);
    rightDoorGroup.position.set(currentRightX, 0, rightDoorZ);
    this.doorGroup.add(rightDoorGroup);

    // ケージ柱側の受け金（ストライカー）およびアクリル丸板スペーサー
    // 取り付け面: ケージ正面（手前側 Z = D/2）から見える格好で柱前面に取り付け
    // 左柱側: ケージ左端 X = -W / 2, Y = doorCenterY, Z = D / 2
    const leftStriker = this.createStrikerAssembly(true);
    leftStriker.position.set(-W / 2, doorCenterY, D / 2);
    this.doorGroup.add(leftStriker);

    // 右柱側: ケージ右端 X = W / 2, Y = doorCenterY, Z = D / 2
    const rightStriker = this.createStrikerAssembly(false);
    rightStriker.position.set(W / 2, doorCenterY, D / 2);
    this.doorGroup.add(rightStriker);

    // アニメーション設定
    this._doorAnim = {
      isFramed: true,
      leftDoor: leftDoorGroup,
      rightDoor: rightDoorGroup,
      leftLatchKnob: leftDoorGroup.userData.latchKnob,
      rightLatchKnob: rightDoorGroup.userData.latchKnob,
      baseLeftCenterX,
      baseRightCenterX,
      leftKnobGroup: null,
      rightKnobGroup: null,
      lockGroup: null,
      leftKnobOffsetX: 0,
      rightKnobOffsetX: 0,
      lockOffsetX: 0,
      currentLeftX,
      currentRightX,
      targetLeftX,
      targetRightX,
      animating: (currentLeftX !== targetLeftX || currentRightX !== targetRightX),
      startLeftX: currentLeftX,
      startRightX: currentRightX,
      startTime: performance.now(),
      duration: 1600
    };
  }

  /**
   * 正面引き違いスライド扉の生成
   * - 排他制御（'closed' | 'left_open' | 'right_open'）
   * - 20mm残しスライド限界（つまみ干渉防止）
   * - 扉厚み3mm、ガラスレール溝に精密に収まる配置
   * - 材料高さ: 間口寸法（開口高さ）より9mm減（レールクリアランス）
   */
  buildDoors() {
    this.clearGroup(this.doorGroup);
    const { W, D, H, cageType, frontWindowH, doorState, hasDoorAntiFlex, frameColor } = this.params;

    // TypeA 正面枠囲いは専用の枠囲い扉を生成
    if (cageType === 'A_FRAMED') {
      this.buildFramedDoors();
      return;
    }

    // TypeA 前開き扉の生成
    if (cageType === 'A_FRONT') {
      this.buildFrontOpenDoor();
      return;
    }

    const openingW = W - 40;            // 左右柱の内寸 (間口幅)
    let doorW = (openingW + 30) / 2;    // 重なり代 30mm 考慮: (W - 10) / 2

    // 強力爬虫類向けスライド扉たわみ防止レール選択時: 扉幅を幅方向に-2mm
    if (hasDoorAntiFlex) {
      doorW -= 2;
    }

    let bottomY = 0;
    const topY = H - 20;

    if (cageType === 'A') {
      const frontWideFrame = this.params.frontWideFrame || '2x';
      if (frontWideFrame === '3x') {
        bottomY = 60;
      } else if (frontWideFrame === '2x') {
        bottomY = 40;
      } else {
        bottomY = 20;
      }
    } else {
      bottomY = 40 + frontWindowH;
    }

    const openingH = Math.max(10, topY - bottomY); // フレーム間内寸開口高さ
    const frontZ = D / 2 - 10;

    // 上下ガラスレールの生成・配置（間口が上12mm、下7mm狭まる）
    this.buildGlassRails(openingW, bottomY, topY, frontZ);

    // 強力爬虫類向けたわみ防止レールの生成・配置 (左右端の縦レール PGRL-03-4, 間口-25mm)
    if (hasDoorAntiFlex) {
      this.buildAntiFlexRails(openingW, openingH, bottomY, topY, frontZ, frameColor);
    }

    // 扉の材料高さ: 間口寸法より9mm減 (例: 間口240mmなら231mm)
    const doorH = Math.max(10, openingH - 9);

    // 扉の垂直中心: 下レール溝底 (bottomY + 2mm) より0.5mm浮かせた位置に下端が来るよう配置
    // 下端 = bottomY + 2.5mm, 上端 = topY - 6.5mm (上レール溝深さ11mmの中に5.5mm潜る)
    const doorCenterY = bottomY + 2.5 + doorH / 2;

    const doorThickness = 3.0; // 扉厚み 3mm
    const doorGeom = new THREE.BoxGeometry(doorW, doorH, doorThickness);
    this.activeGeometries.push(doorGeom);

    // スライド限界の計算:
    // 全閉時の重なりは30mm。全スライド量 = doorW - 30。
    // 20mm残すため、最大スライド量 = (doorW - 30) - 20 = doorW - 50 mm
    const maxSlide = Math.max(0, doorW - 50);

    // レール溝の中心に合わせた扉のZ配置（奥溝中心: -3.25mm、手前溝中心: +3.25mm）
    const leftDoorZ = frontZ - 3.25;
    const rightDoorZ = frontZ + 3.25;

    // 全閉時の基準X位置
    // たわみ防止レール（PGRL-03-4）選択時: レール溝底は柱内面から2mm内側にあるため、扉端も2mm内側を基準とする
    const doorEdgeOffset = hasDoorAntiFlex ? 2 : 0;
    const baseLeftCenterX = (-openingW / 2 + doorEdgeOffset) + (doorW / 2);  // たわみ防止ON時: 左端が柱から+2mm
    const baseRightCenterX = (openingW / 2 - doorEdgeOffset) - (doorW / 2); // たわみ防止ON時: 右端が柱から-2mm

    // 目標X位置の計算（doorStateに基づく）
    let targetLeftX = baseLeftCenterX;
    let targetRightX = baseRightCenterX;

    if (doorState === 'left_open') {
      // 左扉を開く：右方向へ maxSlide 移動
      targetLeftX = baseLeftCenterX + maxSlide;
    } else if (doorState === 'right_open') {
      // 右扉を開く：左方向へ maxSlide 移動
      targetRightX = baseRightCenterX - maxSlide;
    }

    // アニメーション用の現在位置（再ビルド時は前回の現在位置を引き継ぐ、なければ目標位置から開始）
    let currentLeftX = targetLeftX;
    let currentRightX = targetRightX;
    if (this._doorAnim) {
      // 前回アニメーション中の現在位置を引き継ぎ
      currentLeftX = this._doorAnim.currentLeftX;
      currentRightX = this._doorAnim.currentRightX;
    }

    // ---------------- 左扉 ----------------
    const leftDoor = new THREE.Mesh(doorGeom, this.materials.doorGlassLeft);
    leftDoor.position.set(currentLeftX, doorCenterY, leftDoorZ);
    leftDoor.castShadow = false;
    this.doorGroup.add(leftDoor);

    // 左扉のつまみネジ（RNSFS4 SUS303 段付きローレットノブ: 左端から15mm・上下中央）
    const leftKnobOffsetX = -doorW / 2 + 15; // 扉中心からのオフセット
    const leftKnobGroup = this.addKnobScrew(
      currentLeftX + leftKnobOffsetX,
      doorCenterY,
      leftDoorZ + doorThickness / 2
    );

    // ---------------- 右扉 ----------------
    const rightDoor = new THREE.Mesh(doorGeom, this.materials.doorGlassRight);
    rightDoor.position.set(currentRightX, doorCenterY, rightDoorZ);
    rightDoor.castShadow = false;
    this.doorGroup.add(rightDoor);

    // 右扉のつまみネジ（RNSFS4 SUS303 段付きローレットノブ: 右端から15mm・上下中央）
    const rightKnobOffsetX = doorW / 2 - 15; // 扉中心からのオフセット
    const rightKnobGroup = this.addKnobScrew(
      currentRightX + rightKnobOffsetX,
      doorCenterY,
      rightDoorZ + doorThickness / 2
    );

    // ---------------- スライド扉鍵 (C-108 ワンプッシュシリンダー錠) ----------------
    const doorBottomY = doorCenterY - doorH / 2;
    const lockY = doorBottomY + 20;
    const lockOffsetX = -doorW / 2 + 15; // 右扉中心からのオフセット（板端から15mm・30mm重なりの中央）
    const lockGroup = this.addDoorLock(
      currentRightX + lockOffsetX,
      lockY,
      rightDoorZ + doorThickness / 2
    );

    // アニメーション管理オブジェクトの更新
    this._doorAnim = {
      // 扉メッシュ参照
      leftDoor,
      rightDoor,
      leftKnobGroup,
      rightKnobGroup,
      lockGroup,
      // 各パーツの扉中心からのオフセット
      leftKnobOffsetX,
      rightKnobOffsetX,
      lockOffsetX,
      // 現在位置と目標位置
      currentLeftX,
      currentRightX,
      targetLeftX,
      targetRightX,
      // アニメーションパラメータ
      animating: (currentLeftX !== targetLeftX || currentRightX !== targetRightX),
      startLeftX: currentLeftX,
      startRightX: currentRightX,
      startTime: performance.now(),
      duration: 3000, // 3秒でアニメーション完了
    };
  }

  /**
   * TypeA 前開き扉（左ヒンジ・右打掛 横開き扉）の精密生成
   * - パネル寸法:
   *   幅: (W - 2.0) - 21.3 mm (外寸540時 516.7 ≒ 516.8 mm)
   *   高さ: H - 4.0 mm (外寸300時 296.0 mm)
   *   厚み: 3.0 mm
   *   4隅角丸: R10
   * - 配置位置（4等分線上）:
   *   パネル高さを4等分し、下側等分線 (1/4) および上側等分線 (3/4) 上に部品中心を配置
   * - 3mm浮かせ配置:
   *   ヒンジ部材およびロック部材フレーム側を、フレーム前面から 3mm 浮かせて配置 (隙間3mm)
   * - 開閉アニメーション:
   *   開く時: ロック部材が270度回転して解錠 → 扉が左ヒンジを中心にスイング開
   *   閉める時: 扉が完全に閉まる → ロック部材が270度逆回転して施錠
   */
  /**
   * 皿プラスネジ（Countersunk Phillips Screw）の生成・配置ヘルパー
   * - 皿テーパー頭部（深みのあるスチールシルバー調）
   * - 十字溝（プラススロット）
   */
  addCountersunkPhillipsScrew(targetGroup, x, y, z, rotationZ = 0) {
    // 皿頭部（テーパー状）
    const headGeom = new THREE.CylinderGeometry(3.5, 2.0, 1.2, 16);
    headGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(headGeom);
    const headMesh = new THREE.Mesh(headGeom, this.materials.screwSilver);
    headMesh.position.set(x, y, z);
    targetGroup.add(headMesh);

    // プラス十字穴（縦線・横線）
    const slotHGeom = new THREE.BoxGeometry(3.8, 0.7, 0.4);
    const slotVGeom = new THREE.BoxGeometry(0.7, 3.8, 0.4);
    this.activeGeometries.push(slotHGeom, slotVGeom);
    const slotH = new THREE.Mesh(slotHGeom, this.materials.screwSlot);
    const slotV = new THREE.Mesh(slotVGeom, this.materials.screwSlot);
    slotH.position.set(x, y, z + 0.5);
    slotV.position.set(x, y, z + 0.5);
    if (rotationZ !== 0) {
      slotH.rotation.z = rotationZ;
      slotV.rotation.z = rotationZ;
    }
    targetGroup.add(slotH);
    targetGroup.add(slotV);
  }

  /**
   * TypeA 前開き扉（左ヒンジ・右打掛 横開き扉）の精密生成
   * - パネル寸法:
   *   幅: (W - 2.0) - 21.3 mm (外寸540時 516.7 ≒ 516.8 mm)
   *   高さ: 間口H + 36 mm (間口240mmのとき276mm、上下各18mmフレームかぶり)
   *   厚み: 3.0 mm
   *   4隅角丸: R10
   * - 配置位置（4等分線上）:
   *   パネル高さを4等分し、下側等分線 (1/4) および上側等分線 (3/4) 上に部品中心を配置
   * - 3mm浮かせ配置:
   *   ヒンジ部材およびロック部材フレーム側を、フレーム前面から 3mm 浮かせて配置 (隙間3mm)
   * - 皿プラスネジ:
   *   ヒンジ側（4箇所）およびロック側（4箇所）に皿プラスネジを配置
   * - 開閉アニメーション:
   *   開く時: ロック部材が270度回転して解錠 → 扉が左ヒンジを中心に120度スイング開
   *   閉める時: 扉が完全に閉まる → ロック部材が270度逆回転して施錠
   */
  buildFrontOpenDoor() {
    const { W, D, H, doorState } = this.params;

    // 1. パネル寸法および位置の算出
    // 間口開口高さ（床幅広フレーム仕様を考慮）
    let openingBottomY = 40;
    const fwf = this.params.frontWideFrame || '2x';
    if (fwf === '3x') {
      openingBottomY = 60;
    } else if (fwf === '2x') {
      openingBottomY = 40;
    } else {
      openingBottomY = 20;
    }
    const openingTopY = H - 20;
    const openingH = Math.max(10, openingTopY - openingBottomY); // 540x400x300時: 240mm

    // パネルは開口部から上下それぞれ18mmずつフレームにかぶる（間口240mmのとき276mm）
    const panelBottomY = openingBottomY - 18; // 22mm
    const panelTopY = openingTopY + 18;       // H - 2mm
    const panelH = panelTopY - panelBottomY;  // openingH + 36 = 276mm
    const panelCenterY = (panelBottomY + panelTopY) / 2;

    const panelW = (W - 2.0) - 21.3; // 例: 540 - 23.3 = 516.7 ≒ 516.8mm
    const panelT = 3.0; // 3mm厚透明アクリル
    const frontZ = D / 2; // 正面フレーム前面位置
    const doorOffsetZ = 3.0; // フレームからの浮き代 3mm

    // パネルのX中心
    const panelLeftX = -W / 2 + 21.3;
    const panelRightX = W / 2 - 2.0;
    const panelCenterX = (panelLeftX + panelRightX) / 2;

    // 2. ヒンジ・ロックおよび切欠きの高さ中心（パネル高さを4等分した上側・下側の等分線）
    // 下側等分線: panelBottomY + panelH * 1 / 4
    // 上側等分線: panelBottomY + panelH * 3 / 4
    const lowerFeatureY = panelBottomY + (panelH * 1) / 4;
    const upperFeatureY = panelBottomY + (panelH * 3) / 4;

    // パネルローカルY（パネル中心 panelCenterY からの相対オフセット）
    // lowerNotchLocalY = -panelH / 4, upperNotchLocalY = +panelH / 4
    const notchW = 19.0; // 切欠き幅 19mm
    const notchH = 52.0; // 切欠き高さ 52mm

    const btmNotchY1 = -panelH / 4 + notchH / 2; // 下側切欠き上端
    const btmNotchY2 = -panelH / 4 - notchH / 2; // 下側切欠き下端

    const topNotchY1 = panelH / 4 + notchH / 2;  // 上側切欠き上端
    const topNotchY2 = panelH / 4 - notchH / 2;  // 上側切欠き下端

    // 3. 4隅R10角丸＋切欠き（ヒンジ逆側の辺に2箇所）のパネル外形Shapeを生成
    const cornerR = 10.0;
    const halfW = panelW / 2;
    const halfH = panelH / 2;
    const r = Math.min(cornerR, halfW / 4, halfH / 4);

    const isRightHinge = (this.params.doorHingeSide === 'right');
    const shape = new THREE.Shape();

    if (!isRightHinge) {
      // 左ヒンジ・右打掛 (右辺に切欠き2箇所)
      shape.moveTo(-halfW + r, -halfH);
      shape.lineTo(halfW - r, -halfH);
      shape.absarc(halfW - r, -halfH + r, r, -Math.PI / 2, 0, false);
      shape.lineTo(halfW, btmNotchY2);
      shape.lineTo(halfW - notchW, btmNotchY2);
      shape.lineTo(halfW - notchW, btmNotchY1);
      shape.lineTo(halfW, btmNotchY1);
      shape.lineTo(halfW, topNotchY2);
      shape.lineTo(halfW - notchW, topNotchY2);
      shape.lineTo(halfW - notchW, topNotchY1);
      shape.lineTo(halfW, topNotchY1);
      shape.lineTo(halfW, halfH - r);
      shape.absarc(halfW - r, halfH - r, r, 0, Math.PI / 2, false);
      shape.lineTo(-halfW + r, halfH);
      shape.absarc(-halfW + r, halfH - r, r, Math.PI / 2, Math.PI, false);
      shape.lineTo(-halfW, -halfH + r);
      shape.absarc(-halfW + r, -halfH + r, r, Math.PI, Math.PI * 1.5, false);
    } else {
      // 左打掛・右ヒンジ (左辺に切欠き2箇所)
      shape.moveTo(-halfW + r, -halfH);
      shape.lineTo(halfW - r, -halfH);
      shape.absarc(halfW - r, -halfH + r, r, -Math.PI / 2, 0, false);
      shape.lineTo(halfW, halfH - r);
      shape.absarc(halfW - r, halfH - r, r, 0, Math.PI / 2, false);
      shape.lineTo(-halfW + r, halfH);
      shape.absarc(-halfW + r, halfH - r, r, Math.PI / 2, Math.PI, false);
      shape.lineTo(-halfW, topNotchY1);
      shape.lineTo(-halfW + notchW, topNotchY1);
      shape.lineTo(-halfW + notchW, topNotchY2);
      shape.lineTo(-halfW, topNotchY2);
      shape.lineTo(-halfW, btmNotchY1);
      shape.lineTo(-halfW + notchW, btmNotchY1);
      shape.lineTo(-halfW + notchW, btmNotchY2);
      shape.lineTo(-halfW, btmNotchY2);
      shape.lineTo(-halfW, -halfH + r);
      shape.absarc(-halfW + r, -halfH + r, r, Math.PI, Math.PI * 1.5, false);
    }

    const extrudeSettings = {
      steps: 1,
      depth: panelT,
      bevelEnabled: false
    };
    const panelGeom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    this.activeGeometries.push(panelGeom);

    const panelMesh = new THREE.Mesh(panelGeom, this.materials.doorGlassRight);
    panelMesh.castShadow = false;

    // 4. 回転軸（ヒンジピン軸）ピボットグループの構築
    // 蝶番ピン軸位置: 左ヒンジ時は X = -W/2 + 21.25, 右ヒンジ時は X = W/2 - 21.25
    const pivotX = isRightHinge ? (W / 2 - 10 - 11.25) : (-W / 2 + 10 + 11.25);
    const pivotZ = frontZ + panelT;
    const doorPivot = new THREE.Group();
    doorPivot.name = 'FrontOpenDoorPivot';
    doorPivot.position.set(pivotX, 0, pivotZ);

    panelMesh.position.set(panelCenterX - pivotX, panelCenterY, -panelT);
    doorPivot.add(panelMesh);

    const hingeFrameX = isRightHinge ? (W / 2 - 10) : (-W / 2 + 10);
    const lockFrameX = isRightHinge ? (-W / 2 + 10) : (W / 2 - 10);

    // 5. TH-31 ステンレス蝶番の配置
    this.addHingeTH31(hingeFrameX, pivotX, upperFeatureY, frontZ, panelT, doorPivot, isRightHinge);
    this.addHingeTH31(hingeFrameX, pivotX, lowerFeatureY, frontZ, panelT, doorPivot, isRightHinge);

    // 6. C-1249-4 ステンレス打掛の配置
    const lockPivots = [];
    this.addLockC1249(lockFrameX, upperFeatureY, frontZ, panelT, pivotX, doorPivot, lockPivots, isRightHinge);
    this.addLockC1249(lockFrameX, lowerFeatureY, frontZ, panelT, pivotX, doorPivot, lockPivots, isRightHinge);

    this.doorGroup.add(doorPivot);

    // 7. 開閉アニメーション設定（打掛ロック270度回転 ＋ 扉120度スイング回転）
    const isDoorOpen = doorState === 'open' || doorState === 'left_open' || doorState === 'right_open';
    const targetRotY = isDoorOpen ? (isRightHinge ? Math.PI * (120 / 180) : -Math.PI * (120 / 180)) : 0;
    const targetLockRotZ = isDoorOpen ? (isRightHinge ? -Math.PI * 1.5 : Math.PI * 1.5) : 0;

    let currentRotY = targetRotY;
    let currentLockRotZ = targetLockRotZ;
    if (this._doorAnim && typeof this._doorAnim.currentRotY === 'number') {
      currentRotY = this._doorAnim.currentRotY;
      currentLockRotZ = this._doorAnim.currentLockRotZ ?? targetLockRotZ;
    }

    doorPivot.rotation.y = currentRotY;
    for (const lp of lockPivots) {
      lp.rotation.z = currentLockRotZ;
    }

    this._doorAnim = {
      isFrontOpen: true,
      doorPivot,
      lockPivots,
      currentRotY,
      targetRotY,
      currentLockRotZ,
      targetLockRotZ,
      startRotY: currentRotY,
      startLockRotZ: currentLockRotZ,
      animating: Math.abs(currentRotY - targetRotY) > 0.001 || Math.abs(currentLockRotZ - targetLockRotZ) > 0.001,
      startTime: performance.now(),
      duration: 2200, // 2.2秒で2段階動作完了
    };
  }

  /**
   * TH-31 ステンレス蝶番の精密モデリング・配置
   */
  addHingeTH31(frameX, pivotX, y, frontZ, spacerT, doorPivot, isRightHinge = false) {
    const hingeMat = this.materials.handleMaterial;
    const baseZ = frontZ + spacerT;

    // 0. フレームとの隙間を埋める透明アクリルスペーサー板 (16 x 52 x 3.0mm)
    const hingeSpacerGeom = new THREE.BoxGeometry(16, 52, spacerT);
    this.activeGeometries.push(hingeSpacerGeom);
    const hingeSpacerMesh = new THREE.Mesh(hingeSpacerGeom, this.materials.acrylic);
    hingeSpacerMesh.position.set(frameX, y, frontZ + spacerT / 2);
    this.doorGroup.add(hingeSpacerMesh);

    // A. フレーム側固定ピース (非回転、doorGroupに追加、座板の上に密着)
    const fixedGeom = new THREE.BoxGeometry(18, 50, 1.5);
    this.activeGeometries.push(fixedGeom);
    const fixedMesh = new THREE.Mesh(fixedGeom, hingeMat);
    const fixedCenterX = isRightHinge ? (pivotX + 9) : (pivotX - 9);
    fixedMesh.position.set(fixedCenterX, y, baseZ + 0.75);
    fixedMesh.castShadow = true;
    this.doorGroup.add(fixedMesh);

    // 固定側皿プラスネジ 2箇所
    const frameScrewX = frameX;
    for (const dy of [-17.0, 8.5]) {
      this.addCountersunkPhillipsScrew(this.doorGroup, frameScrewX, y + dy, baseZ + 1.5, Math.PI / 4);
    }

    // B. ヒンジ軸ピン・ナックル (外径φ5mm x 長さ50mm, 回転軸doorPivotに追加)
    const pinGeom = new THREE.CylinderGeometry(2.5, 2.5, 50, 16);
    this.activeGeometries.push(pinGeom);
    const pinMesh = new THREE.Mesh(pinGeom, hingeMat);
    pinMesh.position.set(0, y, 0);
    doorPivot.add(pinMesh);

    // C. 扉側可動ピース (回転軸doorPivotに追加、パネル前面に密着)
    const movingGeom = new THREE.BoxGeometry(18, 50, 1.5);
    this.activeGeometries.push(movingGeom);
    const movingMesh = new THREE.Mesh(movingGeom, hingeMat);
    const movingLocalX = isRightHinge ? -9 : 9;
    movingMesh.position.set(movingLocalX, y, 0.75);
    movingMesh.castShadow = true;
    doorPivot.add(movingMesh);

    // 扉側皿プラスネジ 2箇所
    const screwLocalX = isRightHinge ? -11.25 : 11.25;
    for (const dy of [-8.5, 17.0]) {
      this.addCountersunkPhillipsScrew(doorPivot, screwLocalX, y + dy, 1.5, Math.PI / 6);
    }
  }

  /**
   * C-1249-4 ステンレス打掛の精密モデリング・配置
   */
  addLockC1249(frameX, y, frontZ, spacerT, pivotX, doorPivot, lockPivots, isRightHinge = false) {
    const lockMat = this.materials.handleMaterial;
    const baseZ = frontZ + spacerT;

    // 0. フレームとの隙間を埋める透明アクリルスペーサー板 (16 x 48 x 3.0mm)
    const lockSpacerGeom = new THREE.BoxGeometry(16, 48, spacerT);
    this.activeGeometries.push(lockSpacerGeom);
    const lockSpacerMesh = new THREE.Mesh(lockSpacerGeom, this.materials.acrylic);
    lockSpacerMesh.position.set(frameX, y, frontZ + spacerT / 2);
    this.doorGroup.add(lockSpacerMesh);

    // 1. フレーム側受具 (非回転、doorGroupに追加、座板の上に密着)
    const catchBaseGeom = new THREE.BoxGeometry(16, 46, 2.0);
    this.activeGeometries.push(catchBaseGeom);
    const catchBaseMesh = new THREE.Mesh(catchBaseGeom, lockMat);
    catchBaseMesh.position.set(frameX, y, baseZ + 1.0);
    this.doorGroup.add(catchBaseMesh);

    // 受具側 皿プラスネジ 2箇所
    for (const dy of [-15, 15]) {
      this.addCountersunkPhillipsScrew(this.doorGroup, frameX, y + dy, baseZ + 2.0, Math.PI / 4);
    }

    const hookGeom = new THREE.BoxGeometry(14, 16, 12);
    this.activeGeometries.push(hookGeom);
    const hookMesh = new THREE.Mesh(hookGeom, lockMat);
    hookMesh.position.set(frameX, y, baseZ + 2.0 + 6.0);
    this.doorGroup.add(hookMesh);

    // 2. 扉側本体 (doorPivotに追加、パネル表面に密着)
    const bodyWorldX = isRightHinge ? (-this.params.W / 2 + 29.0) : (this.params.W / 2 - 29.0);
    const bodyLocalX = bodyWorldX - pivotX;

    const bodyBaseGeom = new THREE.BoxGeometry(16, 46, 2.0);
    this.activeGeometries.push(bodyBaseGeom);
    const bodyBaseMesh = new THREE.Mesh(bodyBaseGeom, lockMat);
    bodyBaseMesh.position.set(bodyLocalX, y, 1.0);
    doorPivot.add(bodyBaseMesh);

    // 本体側 皿プラスネジ 2箇所
    for (const dy of [-15, 15]) {
      this.addCountersunkPhillipsScrew(doorPivot, bodyLocalX, y + dy, 2.0, Math.PI / 3);
    }

    // 3. アーム回転ピボット (支点ピンを中心にZ軸回転)
    const armPivot = new THREE.Group();
    armPivot.name = 'LockArmPivot';
    armPivot.position.set(bodyLocalX, y, 2.0);

    // 支点軸ピン
    const pinGeom = new THREE.CylinderGeometry(3, 3, 3, 16);
    pinGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(pinGeom);
    const pinMesh = new THREE.Mesh(pinGeom, lockMat);
    pinMesh.position.set(0, 0, 1.5);
    armPivot.add(pinMesh);

    // 掛金バー
    const armGeom = new THREE.BoxGeometry(38, 14, 2.5);
    this.activeGeometries.push(armGeom);
    const armMesh = new THREE.Mesh(armGeom, lockMat);
    const armCenterX = isRightHinge ? -19.0 : 19.0;
    armMesh.position.set(armCenterX, 0, 2.0 + 4.0);
    armPivot.add(armMesh);

    // アームつまみ
    const knobGeom = new THREE.CylinderGeometry(3.5, 3.5, 14, 16);
    knobGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(knobGeom);
    const knobMesh = new THREE.Mesh(knobGeom, lockMat);
    const knobX = isRightHinge ? -18.0 : 18.0;
    knobMesh.position.set(knobX, 0, 2.0 + 4.0 + 7.0);
    armPivot.add(knobMesh);

    doorPivot.add(armPivot);
    if (lockPivots) {
      lockPivots.push(armPivot);
    }
  }

  /**
   * TypeA 正面枠囲い用の扉部材・BOM一括記録
   * - 幅方向フレーム: AFSF-2020-4 (黒: AFS-2020-4-BK) × 4本
   * - 高さ方向フレーム: AFSF-2040-4 (黒: AFS-2040-4-BK) × 4本
   * - エンドキャップ: ECP-2020-4-GY (黒: ECP-2020-4) × 8個
   * - 透明アクリル押出板 3.0mm: (幅フレーム-64mm) × (高さフレーム+10mm) × 2枚
   * - スライド用黒マット地アクリル: (幅フレーム-22mm) × 14mm × 厚さ3mm × 4枚
   */
  buildFramedDoorPartsRecord() {
    const { W, H, frameColor } = this.params;
    const isSilver = (frameColor === 'silver');

    const openingW = Math.max(10, W - 40);
    const openingH = Math.max(10, H - 60);

    const doorFrameW = Math.max(10, Math.round(openingW / 2 + 12));
    const doorFrameH = Math.max(10, openingH - 42);

    const panelW = Math.max(10, doorFrameW - 64);
    const panelH = Math.max(10, doorFrameH + 10);

    // 1. 幅方向フレーム (上下各2本、計4本)
    const widthFrameCode = isSilver ? 'AFSF-2020-4' : 'AFS-2020-4-BK';
    const widthFramePartNumber = `${widthFrameCode}-${doorFrameW}`;
    this.recordPart(widthFramePartNumber, `${doorFrameW} mm`, 4, '正面枠囲い扉 幅方向フレーム (上下各2本・計4本)', 'frame', {
      partCode: widthFrameCode,
      lengthMm: doorFrameW,
      unitType: 'm'
    });

    // 2. 高さ方向フレーム (左右各2本、計4本)
    const heightFrameCode = isSilver ? 'AFSF-2040-4' : 'AFS-2040-4-BK';
    const heightFramePartNumber = `${heightFrameCode}-${doorFrameH}`;
    this.recordPart(heightFramePartNumber, `${doorFrameH} mm`, 4, '正面枠囲い扉 高さ方向フレーム (左右各2本・計4本)', 'frame', {
      partCode: heightFrameCode,
      lengthMm: doorFrameH,
      unitType: 'm'
    });

    // 3. エンドキャップ (幅フレーム両端 8箇所)
    const capCode = isSilver ? 'ECP-2020-4-GY' : 'ECP-2020-4';
    const capName = isSilver ? 'ECP-2020-4-GY (グレー)' : 'ECP-2020-4 (ブラック)';
    this.recordPart(capCode, '-', 8, `正面枠囲い扉 幅フレーム端部 (${capName})`, 'rail_cap', {
      partCode: capCode,
      unitType: 'piece'
    });

    // 4. 透明アクリル扉板 (押出板 3.0mm、2枚)
    this.recordPart('透明アクリル 3.0mm 扉板', `${panelW} x ${panelH} mm`, 2, '正面枠囲い扉 (透明押出板3.0mm)', 'panel', {
      panelCode: 'acrylic_extrusion_3_0',
      partCode: 'acrylic_extrusion_3_0',
      widthMm: panelW,
      heightMm: panelH,
      unitType: 'm2'
    });

    // 5. スライド用黒マット地アクリル板 (厚さ3mm、4枚)
    const slideLinerL = doorFrameW - 22;
    const slideLinerW = 14;
    this.recordPart('アクリル黒両面マット 3.0mm (スライド部材)', `${slideLinerL} x ${slideLinerW} mm`, 4, '正面枠囲い扉 スライド用部材 (厚さ3mm)', 'panel', {
      panelCode: 'acrylic_black_matte_3_0',
      partCode: 'acrylic_black_matte_3_0',
      widthMm: slideLinerL,
      heightMm: slideLinerW,
      unitType: 'm2'
    });

    // 6. 左扉スペーサーフレーム (AFS-2040, 長さ94mm, 1本)
    const spacerFrameCode = isSilver ? 'AFS-2040-4' : 'AFS-2040-4-BK';
    const spacerFramePartNumber = `${spacerFrameCode}-94`;
    this.recordPart(spacerFramePartNumber, '94 mm', 1, '正面枠囲い扉 左扉ラッチ高さ合わせ用スペーサーフレーム', 'frame', {
      partCode: spacerFrameCode,
      lengthMm: 94,
      unitType: 'm'
    });

    // 7. スペーサー用エンドキャップ (ECP-2040, 2個)
    const spacerCapCode = isSilver ? 'ECP-2040-4-GY' : 'ECP-2040-4';
    const spacerCapName = isSilver ? 'ECP-2040-4-GY (グレー)' : 'ECP-2040-4 (ブラック)';
    this.recordPart(spacerCapCode, '-', 2, `正面枠囲い扉 左扉スペーサー端部 (${spacerCapName})`, 'rail_cap', {
      partCode: spacerCapCode,
      unitType: 'piece'
    });

    // 8. スライドラッチ (タキゲン CP-294N, 2個)
    this.recordPart('タキゲン CP-294N スライドラッチ', '70 x 25 mm', 2, '正面枠囲い扉 ワンタッチスライドラッチ (左右各1個)', 'other', {
      partCode: 'CP-294N',
      unitType: 'piece'
    });

    // 9. ラッチ受金用アクリル丸板スペーサー (φ20mm t5mm, 4枚)
    this.recordPart('アクリル丸板 透明 φ20mm t5mm (穴加工済)', 'φ20 x t5 mm', 4, '正面枠囲い柱側 スライドラッチ受金高さ調整スペーサー (各2枚・計4枚)', 'other', {
      partCode: 'ACRYLIC-ROUND-20-5',
      unitType: 'piece'
    });
  }

  /**
   * 正面スライド扉・レール・金物部材の部品表（BOM）一括記録
   * - 扉の開閉アニメーション（setDoorState / buildDoors）で部材が二重計上されないようbuild()時のみ実行
   */
  buildDoorPartsRecord() {
    const { W, H, cageType, frontWindowH, hasDoorAntiFlex, frameColor } = this.params;

    // TypeA 正面枠囲い用の扉部材・BOM記録
    if (cageType === 'A_FRAMED') {
      this.buildFramedDoorPartsRecord();
      return;
    }

    if (cageType === 'A_FRONT') {
      const panelW = (W - 2.0) - 21.3;
      let openingBottomY = 40;
      const fwf = this.params.frontWideFrame || '2x';
      if (fwf === '3x') openingBottomY = 60;
      else if (fwf === '2x') openingBottomY = 40;
      else openingBottomY = 20;
      const openingH = Math.max(10, (H - 20) - openingBottomY);
      const panelH = openingH + 36; // 間口から上下18mmずつかぶり

      // 前開きアクリル扉 3.0mm (1枚)
      const isRightHinge = (this.params.doorHingeSide === 'right');
      const doorDesc = isRightHinge ? '正面 右ヒンジ・左打掛オープン扉' : '正面 左ヒンジ・右打掛オープン扉';
      this.recordPart('前開きアクリル扉 3.0mm (切欠き・穴加工済)', `${Math.round(panelW * 10) / 10} x ${Math.round(panelH)} mm`, 1, doorDesc, 'panel', {
        panelCode: 'acrylic_cast_3_0',
        partCode: 'acrylic_cast_3_0',
        widthMm: Math.round(panelW * 10) / 10,
        heightMm: Math.round(panelH),
        unitType: 'm2'
      });

      // 金物: TH-31 ステンレス蝶番 (2個)
      const hingeDesc = isRightHinge ? '前開き扉 右ヒンジ (2箇所)' : '前開き扉 左ヒンジ (2箇所)';
      this.recordPart('TH-31 ステンレス蝶番', '50 x 36 mm (SUS304)', 2, hingeDesc, 'rail_cap', {
        partCode: 'TH-31',
        lengthMm: null,
        unitType: 'piece'
      });

      // 金物: C-1249-4 ステンレス打掛 (2個)
      const lockDesc = isRightHinge ? '前開き扉 左打掛ロック (2箇所)' : '前開き扉 右打掛ロック (2箇所)';
      this.recordPart('C-1249-4 ステンレス打掛', '58 x 46 mm (SUS304)', 2, lockDesc, 'rail_cap', {
        partCode: 'C-1249-4',
        lengthMm: null,
        unitType: 'piece'
      });

      // ヒンジ下スペーサー板 (透明アクリル 3.0mm, 16 x 52 mm, 2枚)
      const hingeSpacerDesc = isRightHinge ? '前開き扉 右ヒンジ固定座 (フレーム隙間埋め用)' : '前開き扉 左ヒンジ固定座 (フレーム隙間埋め用)';
      this.recordPart('透明アクリル 3.0mm ヒンジ座板 (切削加工)', '16 x 52 mm', 2, hingeSpacerDesc, 'panel', {
        panelCode: 'acrylic_cast_3_0',
        partCode: 'acrylic_cast_3_0',
        widthMm: 16,
        heightMm: 52,
        unitType: 'm2'
      });

      // ロック受具下スペーサー板 (透明アクリル 3.0mm, 16 x 48 mm, 2枚)
      const lockSpacerDesc = isRightHinge ? '前開き扉 左打掛受具座 (フレーム隙間埋め用)' : '前開き扉 右打掛受具座 (フレーム隙間埋め用)';
      this.recordPart('透明アクリル 3.0mm ロック受座板 (切削加工)', '16 x 48 mm', 2, lockSpacerDesc, 'panel', {
        panelCode: 'acrylic_cast_3_0',
        partCode: 'acrylic_cast_3_0',
        widthMm: 16,
        heightMm: 48,
        unitType: 'm2'
      });
      return;
    }

    const railColorName = frameColor === 'black' ? 'ブラック' : 'グレー';

    const openingW = W - 40;            // 左右柱の内寸 (間口幅)
    let doorW = (openingW + 30) / 2;    // 重なり代 30mm 考慮: (W - 10) / 2
    if (hasDoorAntiFlex) {
      doorW -= 2;
    }

    let bottomY = 0;
    const topY = H - 20;
    if (cageType === 'A') {
      const frontWideFrame = this.params.frontWideFrame || '2x';
      if (frontWideFrame === '3x') {
        bottomY = 60;
      } else if (frontWideFrame === '2x') {
        bottomY = 40;
      } else {
        bottomY = 20;
      }
    } else {
      bottomY = 40 + frontWindowH;
    }
    const openingH = Math.max(10, topY - bottomY);
    const doorH = Math.max(10, openingH - 9);

    // 上下ガラスレール (frameカテゴリに合体)
    const railL = openingW;
    const railColorSuffix = frameColor === 'black' ? 'BK' : 'GY';
    const upperRailCode = `PGRU-03-4-${railColorSuffix}`;
    const lowerRailCode = `PGRL-03-4-${railColorSuffix}`;

    this.recordPart(upperRailCode, railL, 1, '正面開口 上部 (間口高12mm縮小)', 'frame', {
      partCode: upperRailCode,
      lengthMm: railL,
      unitType: 'm'
    });
    this.recordPart(lowerRailCode, railL, 1, '正面開口 下部 (間口高7mm縮小)', 'frame', {
      partCode: lowerRailCode,
      lengthMm: railL,
      unitType: 'm'
    });

    // 強力爬虫類向けたわみ防止縦レール（オプションON時）
    if (hasDoorAntiFlex) {
      const antiFlexRailL = Math.max(10, openingH - 25);
      this.recordPart(lowerRailCode, antiFlexRailL, 2, '正面スライド扉 左右端 (扉たわみ防止)', 'frame', {
        partCode: lowerRailCode,
        lengthMm: antiFlexRailL,
        unitType: 'm'
      });
    }

    // 扉本体（透明アクリル 3.0mm 固定）・段付きローレットノブ・プッシュ鍵（ノブ計2点、鍵計1点）
    this.recordPart('透明アクリル扉 3.0mm', `${Math.round(doorW)} x ${Math.round(doorH)} mm`, 2, '正面 引き違い (重なり30mm)', 'panel', {
      panelCode: 'acrylic_cast_3_0',
      partCode: 'acrylic_cast_3_0',
      widthMm: Math.round(doorW),
      heightMm: Math.round(doorH),
      unitType: 'm2'
    });
    this.recordPart('段付きローレットノブ (SUS303, RNSFS4)', '外径φ16 / ボスφ8 / 全長9.5mm', 2, '扉端から15mm・上下中央', 'other');
    this.recordPart('プッシュ式スライド扉鍵 (C-108)', '外径φ18.5mm / 全長30mm (キー付)', 1, '右スライド扉 下部 (端から15mm・下端から20mm)', 'other');
  }

  /**
   * 扉スライドアニメーションの毎フレーム更新
   * easeInOutCubic補間で滑らかなスライド動作を実現
   */
  updateDoorAnimation() {
    if (!this._doorAnim || !this._doorAnim.animating) return;

    const anim = this._doorAnim;
    const elapsed = performance.now() - anim.startTime;
    const t = Math.min(1.0, elapsed / anim.duration);

    // easeInOutCubic イージング
    const eased = t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // TypeA 前開き扉の2段階シークエンスアニメーション
    // 開く時: ロック部材が270度回転して解錠 → 扉スイングオープン
    // 閉める時: 扉が完全に閉まる → ロック部材が270度逆回転して施錠
    if (anim.isFrontOpen) {
      const isOpening = anim.targetRotY !== 0;

      if (isOpening) {
        // 開ける時: 前半 (0〜0.35) でロック270度回転、後半 (0.35〜1.0) で扉オープン
        const tLock = Math.min(1.0, Math.max(0, t / 0.35));
        const easedLock = tLock < 0.5 ? 4 * tLock * tLock * tLock : 1 - Math.pow(-2 * tLock + 2, 3) / 2;
        anim.currentLockRotZ = anim.startLockRotZ + (anim.targetLockRotZ - anim.startLockRotZ) * easedLock;

        const tDoor = Math.min(1.0, Math.max(0, (t - 0.35) / 0.65));
        const easedDoor = tDoor < 0.5 ? 4 * tDoor * tDoor * tDoor : 1 - Math.pow(-2 * tDoor + 2, 3) / 2;
        anim.currentRotY = anim.startRotY + (anim.targetRotY - anim.startRotY) * easedDoor;
      } else {
        // 閉める時: 前半 (0〜0.65) で扉が完全に閉まる、後半 (0.65〜1.0) でロック270度逆回転（施錠）
        const tDoor = Math.min(1.0, Math.max(0, t / 0.65));
        const easedDoor = tDoor < 0.5 ? 4 * tDoor * tDoor * tDoor : 1 - Math.pow(-2 * tDoor + 2, 3) / 2;
        anim.currentRotY = anim.startRotY + (anim.targetRotY - anim.startRotY) * easedDoor;

        const tLock = Math.min(1.0, Math.max(0, (t - 0.65) / 0.35));
        const easedLock = tLock < 0.5 ? 4 * tLock * tLock * tLock : 1 - Math.pow(-2 * tLock + 2, 3) / 2;
        anim.currentLockRotZ = anim.startLockRotZ + (anim.targetLockRotZ - anim.startLockRotZ) * easedLock;
      }

      if (anim.doorPivot) {
        anim.doorPivot.rotation.y = anim.currentRotY;
      }
      if (anim.lockPivots) {
        for (const lp of anim.lockPivots) {
          lp.rotation.z = anim.currentLockRotZ;
        }
      }

      if (t >= 1.0) {
        anim.animating = false;
      }
      return;
    }

    // TypeA 正面枠囲い扉の自動ラッチ（スラムラッチ）連動アニメーション
    if (anim.isFramed) {
      anim.currentLeftX = anim.startLeftX + (anim.targetLeftX - anim.startLeftX) * eased;
      anim.currentRightX = anim.startRightX + (anim.targetRightX - anim.startRightX) * eased;

      if (anim.leftDoor) {
        anim.leftDoor.position.x = anim.currentLeftX;
      }
      if (anim.rightDoor) {
        anim.rightDoor.position.x = anim.currentRightX;
      }

      const isLeftMoving = (anim.targetLeftX !== anim.startLeftX);
      const isRightMoving = (anim.targetRightX !== anim.startRightX);
      const maxTilt = 0.28; // チルト角 約16度

      // 左扉の自動ラッチ連動チルト
      if (isLeftMoving && anim.leftLatchKnob) {
        const isOpening = anim.targetLeftX > anim.baseLeftCenterX;
        let tilt = 0;
        if (isOpening) {
          // 開く時: 0.0〜0.18 で指でノブが倒れて爪が抜ける → 0.18〜0.35 で受金を乗り越え → 0.35〜0.48 でパチンと復帰
          if (t < 0.18) {
            const p = t / 0.18;
            tilt = maxTilt * (p * p * (3 - 2 * p));
          } else if (t < 0.35) {
            tilt = maxTilt;
          } else if (t < 0.48) {
            const p = (t - 0.35) / 0.13;
            tilt = maxTilt * (1 - (p * p * (3 - 2 * p)));
          } else {
            tilt = 0;
          }
        } else {
          // 閉める時: 0.0〜0.65 は通常スライド → 0.65〜0.82 で受金先端に当たり自動で倒れる → 0.82〜0.90 で穴に入り「カチャッ！」と元に戻って自動ロック！
          if (t < 0.65) {
            tilt = 0;
          } else if (t < 0.82) {
            const p = (t - 0.65) / 0.17;
            tilt = maxTilt * (p * p * (3 - 2 * p));
          } else if (t < 0.90) {
            const p = (t - 0.82) / 0.08;
            tilt = maxTilt * (1 - p * p);
          } else {
            tilt = 0;
          }
        }
        anim.leftLatchKnob.rotation.y = tilt; // 開く側（右 / +X）へ倒れる
      } else if (anim.leftLatchKnob) {
        anim.leftLatchKnob.rotation.y = 0;
      }

      // 右扉の自動ラッチ連動チルト（対称）
      if (isRightMoving && anim.rightLatchKnob) {
        const isOpening = anim.targetRightX < anim.baseRightCenterX;
        let tilt = 0;
        if (isOpening) {
          if (t < 0.18) {
            const p = t / 0.18;
            tilt = maxTilt * (p * p * (3 - 2 * p));
          } else if (t < 0.35) {
            tilt = maxTilt;
          } else if (t < 0.48) {
            const p = (t - 0.35) / 0.13;
            tilt = maxTilt * (1 - (p * p * (3 - 2 * p)));
          } else {
            tilt = 0;
          }
        } else {
          if (t < 0.65) {
            tilt = 0;
          } else if (t < 0.82) {
            const p = (t - 0.65) / 0.17;
            tilt = maxTilt * (p * p * (3 - 2 * p));
          } else if (t < 0.90) {
            const p = (t - 0.82) / 0.08;
            tilt = maxTilt * (1 - p * p);
          } else {
            tilt = 0;
          }
        }
        anim.rightLatchKnob.rotation.y = -tilt; // 開く側（左 / -X）へ倒れる
      } else if (anim.rightLatchKnob) {
        anim.rightLatchKnob.rotation.y = 0;
      }

      if (t >= 1.0) {
        anim.animating = false;
        if (anim.leftLatchKnob) anim.leftLatchKnob.rotation.y = 0;
        if (anim.rightLatchKnob) anim.rightLatchKnob.rotation.y = 0;
      }
      return;
    }

    // 現在位置を補間
    anim.currentLeftX = anim.startLeftX + (anim.targetLeftX - anim.startLeftX) * eased;
    anim.currentRightX = anim.startRightX + (anim.targetRightX - anim.startRightX) * eased;

    // 左扉と付属パーツのX位置を更新
    if (anim.leftDoor) {
      anim.leftDoor.position.x = anim.currentLeftX;
    }
    if (anim.leftKnobGroup) {
      anim.leftKnobGroup.position.x = anim.currentLeftX + anim.leftKnobOffsetX;
    }

    // 右扉と付属パーツのX位置を更新
    if (anim.rightDoor) {
      anim.rightDoor.position.x = anim.currentRightX;
    }
    if (anim.rightKnobGroup) {
      anim.rightKnobGroup.position.x = anim.currentRightX + anim.rightKnobOffsetX;
    }
    if (anim.lockGroup) {
      anim.lockGroup.position.x = anim.currentRightX + anim.lockOffsetX;
    }

    // アニメーション完了判定
    if (t >= 1.0) {
      anim.animating = false;
    }
  }

  /**
   * 段付きローレットノブ（品番 RNSFS4, SUS303）の精密生成・配置
   * - フランジ部: 外径 Φ16mm (半径 8mm) × 厚み 3.5mm
   * - ボス部: 外径 Φ8mm (半径 4mm) × 長さ 6mm
   * - 中心: M4めねじ穴 (Φ4mm凹み)
   */
  addKnobScrew(x, y, frontZ) {
    const knobGroup = new THREE.Group();
    knobGroup.position.set(x, y, frontZ);

    // 1. ボス部（扉接触部: 直径8mm x 長さ6mm）
    const bossGeom = new THREE.CylinderGeometry(4, 4, 6, 24);
    bossGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(bossGeom);
    const bossMesh = new THREE.Mesh(bossGeom, this.materials.handleMaterial);
    bossMesh.position.set(0, 0, 3); // Z = 0 〜 6mm
    bossMesh.castShadow = true;
    knobGroup.add(bossMesh);

    // 2. フランジ部（つまみ外周部: 直径16mm x 厚さ3.5mm）
    const flangeGeom = new THREE.CylinderGeometry(8, 8, 3.5, 32);
    flangeGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(flangeGeom);
    const flangeMesh = new THREE.Mesh(flangeGeom, this.materials.handleMaterial);
    flangeMesh.position.set(0, 0, 6 + 1.75); // Z = 6 〜 9.5mm
    flangeMesh.castShadow = true;
    knobGroup.add(flangeMesh);

    // 3. 中心 M4 めねじ穴（手前面からの凹み）
    const holeGeom = new THREE.CylinderGeometry(2, 2, 3, 16);
    holeGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(holeGeom);
    const holeMesh = new THREE.Mesh(holeGeom, this.materials.grommetMaterial);
    holeMesh.position.set(0, 0, 9.5 - 1.5 + 0.1);
    knobGroup.add(holeMesh);

    this.doorGroup.add(knobGroup);
    return knobGroup;
  }

  /**
   * プッシュ式スライド扉鍵（C-108）の精密生成・配置
   * - 台座フランジ: 外径 Φ18.5mm × 厚さ 2.5mm
   * - シリンダー本体: 外径 Φ15.5mm × 長さ 20.5mm
   * - 鍵穴および差し込みキー（写真 OPTスライド扉鍵.JPG の再現）
   */
  addDoorLock(x, y, frontZ) {
    const lockGroup = new THREE.Group();
    lockGroup.position.set(x, y, frontZ);

    // 1. 台座フランジリング (外径 Φ18.5mm x 厚さ 2.5mm)
    const baseGeom = new THREE.CylinderGeometry(9.25, 9.25, 2.5, 32);
    baseGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(baseGeom);
    const baseMesh = new THREE.Mesh(baseGeom, this.materials.handleMaterial);
    baseMesh.position.set(0, 0, 1.25);
    baseMesh.castShadow = true;
    lockGroup.add(baseMesh);

    // 2. シリンダー本体 (外径 Φ15.5mm x 長さ 20.5mm)
    const bodyGeom = new THREE.CylinderGeometry(7.75, 7.75, 20.5, 32);
    bodyGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(bodyGeom);
    const bodyMesh = new THREE.Mesh(bodyGeom, this.materials.handleMaterial);
    bodyMesh.position.set(0, 0, 2.5 + 10.25);
    bodyMesh.castShadow = true;
    lockGroup.add(bodyMesh);

    // 3. 前面シリンダーキャップ (内径 Φ11mm x 0.8mm)
    const capGeom = new THREE.CylinderGeometry(5.5, 5.5, 0.8, 32);
    capGeom.rotateX(Math.PI / 2);
    this.activeGeometries.push(capGeom);
    const capMesh = new THREE.Mesh(capGeom, this.materials.handleMaterial);
    capMesh.position.set(0, 0, 23 + 0.4);
    lockGroup.add(capMesh);

    // 4. 鍵穴スリット (幅1.4mm x 高さ6.5mm)
    const slitGeom = new THREE.BoxGeometry(1.4, 6.5, 1.2);
    this.activeGeometries.push(slitGeom);
    const slitMesh = new THREE.Mesh(slitGeom, this.materials.grommetMaterial);
    slitMesh.position.set(0, 0, 23.6);
    lockGroup.add(slitMesh);

    this.doorGroup.add(lockGroup);
    return lockGroup;
  }

  /**
   * No.1 化粧つまみネジの生成・配置
   * - 外径 Φ15mm x 頭部厚さ 4.5mm (大型化粧ねじ、ローレット外周)
   * - 座面ボス部: 外径 Φ8mm x 厚さ 1.5mm
   * - X軸方向（左右外側）に向けて配置
   * @param {number} x - 取付面X
   * @param {number} y - 中心Y
   * @param {number} z - 中心Z
   * @param {number} dirX - 突出方向 (-1: 左側面で-X方向, +1: 右側面で+X方向)
   */
  addThumbScrew(x, y, z, dirX) {
    const screwGroup = new THREE.Group();
    screwGroup.position.set(x, y, z);

    // 1. ボス座面 (直径8mm x 厚さ1.5mm)
    const bossGeom = new THREE.CylinderGeometry(4, 4, 1.5, 24);
    bossGeom.rotateZ(Math.PI / 2);
    this.activeGeometries.push(bossGeom);
    const bossMesh = new THREE.Mesh(bossGeom, this.materials.thumbScrewMaterial);
    bossMesh.position.set(dirX * 0.75, 0, 0);
    bossMesh.castShadow = true;
    screwGroup.add(bossMesh);

    // 2. 頭部フランジ (直径15mm x 厚さ4.5mm、ローレット外周)
    const headGeom = new THREE.CylinderGeometry(7.5, 7.5, 4.5, 24);
    headGeom.rotateZ(Math.PI / 2);
    this.activeGeometries.push(headGeom);
    const headMesh = new THREE.Mesh(headGeom, this.materials.thumbScrewMaterial);
    headMesh.position.set(dirX * (1.5 + 2.25), 0, 0);
    headMesh.castShadow = true;
    screwGroup.add(headMesh);

    // 3. φ6mm穴の表現（取付面直下に黒い薄い円盤を置いて穴を視覚表現）
    const holeGeom = new THREE.CylinderGeometry(3, 3, 0.2, 16);
    holeGeom.rotateZ(Math.PI / 2);
    this.activeGeometries.push(holeGeom);
    const holeMesh = new THREE.Mesh(holeGeom, this.materials.grommetMaterial);
    holeMesh.position.set(-dirX * 0.1, 0, 0);
    screwGroup.add(holeMesh);

    this.panelGroup.add(screwGroup);
    return screwGroup;
  }

  /**
   * 接地用ゴム足（TM-18: 栃木屋/タキゲン規格）の生成・配置
   * - 取り付け位置: 奥行きフレーム下面、前後端から約50mmの計4箇所
   * - 形状: 上面（フレーム密着部）φ18mm、底面（接地部）φ15mm、高さ10mmの円錐台
   */
  buildFeet() {
    const { W, D } = this.params;
    const footH = 11;
    const footY = -footH / 2; // Y = -5.5mm (上面 Y=0, 底面 Y=-11mm)

    // 4箇所のX・Z座標
    // 左右: 奥行きフレーム（2020）の中心 X = ±(W / 2 - 10)
    // 前後: 前後端から約50mmの位置 Z = ±(D / 2 - 50)
    const xOffsets = [-W / 2 + 10, W / 2 - 10];
    const zOffsets = [D / 2 - 50, -D / 2 + 50];

    // ゴム足の円錐台ジオメトリ: 径の小さいほう(φ15mm/半径7.5)が下側、径の大きいほう(φ18mm/半径9.0)が上側
    const footGeom = new THREE.CylinderGeometry(9.0, 7.5, footH, 32);
    this.activeGeometries.push(footGeom);

    // 座繰り穴（底面側φ8mm、深さ4mm、M4座金）
    const recessGeom = new THREE.CylinderGeometry(4.0, 4.0, 4.0, 24);
    this.activeGeometries.push(recessGeom);

    // M4座金（シルバー金具）
    const washerGeom = new THREE.CylinderGeometry(3.5, 3.5, 0.8, 24);
    this.activeGeometries.push(washerGeom);

    for (const x of xOffsets) {
      for (const z of zOffsets) {
        // ゴム脚本体
        const footMesh = new THREE.Mesh(footGeom, this.materials.grommetMaterial);
        footMesh.position.set(x, footY, z);
        footMesh.castShadow = true;
        footMesh.receiveShadow = true;
        this.feetGroup.add(footMesh);

        // ビス座繰り穴（底面からの凹み表現）
        const recessMesh = new THREE.Mesh(recessGeom, this.materials.railMaterial);
        recessMesh.position.set(x, -footH + 2.0, z);
        this.feetGroup.add(recessMesh);

        // 座金
        const washerMesh = new THREE.Mesh(washerGeom, this.materials.handleMaterial);
        washerMesh.position.set(x, -footH + 3.6, z);
        this.feetGroup.add(washerMesh);
      }
    }

    this.recordPart('ゴム脚 (黒)', '外径φ18(上)/φ15(下) x H11mm (M4用座金入)', 4, '床面 奥行きフレーム下面 (前後端から50mm・接地用)', 'other');
  }

  /**
   * 接地用キャスターの生成・配置
   * - 取り付け位置: 奥行きフレーム下面、前後端から7mm控えた位置からブラケット配置
   * - 形状: 取付プレートブラケット、旋回軸・フォーク金具、φ50mm車輪（取付高66mm）
   */
  buildCasters() {
    const { W, D } = this.params;
    const xOffsets = [-W / 2 + 10, W / 2 - 10];

    // ブラケット寸法: 長さ40mm, 幅20mm, 厚さ3mm
    // 前後端から7mm控えた位置からブラケットが始まる
    // 手前側: 前端が D/2 - 7 => 中心 Z = (D/2 - 7) - 20
    // 奥側: 後端が -D/2 + 7 => 中心 Z = -(D/2 - 7) + 20
    const zOffsets = [
      (D / 2 - 7) - 20,
      -(D / 2 - 7) + 20
    ];

    // 1. 取付ブラケットプレート (40 x 20 x 3 mm)
    const bracketGeom = new THREE.BoxGeometry(20, 3, 40);
    this.activeGeometries.push(bracketGeom);

    // 2. 旋回軸部 (外径φ20 x 高さ12mm)
    const stemGeom = new THREE.CylinderGeometry(10, 10, 12, 24);
    this.activeGeometries.push(stemGeom);

    // 3. フォークアーム部 (左右フォーク 2.5 x 28 x 22 mm)
    const forkLeftGeom = new THREE.BoxGeometry(2.5, 28, 22);
    this.activeGeometries.push(forkLeftGeom);
    const forkRightGeom = new THREE.BoxGeometry(2.5, 28, 22);
    this.activeGeometries.push(forkRightGeom);

    // 4. 車輪 (外径φ50mm x 幅20mm、双輪/単輪)
    const wheelGeom = new THREE.CylinderGeometry(25, 25, 20, 32);
    wheelGeom.rotateZ(Math.PI / 2);
    this.activeGeometries.push(wheelGeom);

    // 5. 車軸ピン
    const axleGeom = new THREE.CylinderGeometry(4, 4, 24, 16);
    axleGeom.rotateZ(Math.PI / 2);
    this.activeGeometries.push(axleGeom);

    for (const x of xOffsets) {
      for (const z of zOffsets) {
        const casterGroup = new THREE.Group();
        casterGroup.position.set(x, 0, z);

        // 取付ブラケット (Y = 0 〜 -3mm)
        const bracketMesh = new THREE.Mesh(bracketGeom, this.materials.casterBracket);
        bracketMesh.position.set(0, -1.5, 0);
        bracketMesh.castShadow = true;
        casterGroup.add(bracketMesh);

        // 旋回軸 (Y = -3 〜 -15mm)
        const stemMesh = new THREE.Mesh(stemGeom, this.materials.casterBracket);
        stemMesh.position.set(0, -9, 0);
        casterGroup.add(stemMesh);

        // フォーク（左アーム・右アーム）
        const forkLeft = new THREE.Mesh(forkLeftGeom, this.materials.casterBracket);
        forkLeft.position.set(-10, -27, 0);
        casterGroup.add(forkLeft);

        const forkRight = new THREE.Mesh(forkRightGeom, this.materials.casterBracket);
        forkRight.position.set(10, -27, 0);
        casterGroup.add(forkRight);

        // 車輪 (車軸中心 Y = -41mm, 車輪最下面 Y = -66mm)
        const wheelMesh = new THREE.Mesh(wheelGeom, this.materials.casterWheel);
        wheelMesh.position.set(0, -41, 0);
        wheelMesh.castShadow = true;
        wheelMesh.receiveShadow = true;
        casterGroup.add(wheelMesh);

        // 車軸ピン
        const axleMesh = new THREE.Mesh(axleGeom, this.materials.casterBracket);
        axleMesh.position.set(0, -41, 0);
        casterGroup.add(axleMesh);

        this.feetGroup.add(casterGroup);
      }
    }

    this.recordPart('自在キャスター', '車輪径φ50 / 取付高66mm', 4, '床面 奥行きフレーム下面 (端から7mm控え)', 'other');
  }

  /**
   * 止まり木用 2020グレーエンドキャップ（ECP-2020-4-GY）の生成・配置
   */
  addPerch2020GrayCap(x, y, z) {
    const w = 20, h = 20, r = 2;
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2 + r, -h / 2);
    shape.lineTo(w / 2 - r, -h / 2);
    shape.absarc(w / 2 - r, -h / 2 + r, r, -Math.PI / 2, 0, false);
    shape.lineTo(w / 2, h / 2 - r);
    shape.absarc(w / 2 - r, h / 2 - r, r, 0, Math.PI / 2, false);
    shape.lineTo(-w / 2 + r, h / 2);
    shape.absarc(-w / 2 + r, h / 2 - r, r, Math.PI / 2, Math.PI, false);
    shape.lineTo(-w / 2, -h / 2 + r);
    shape.absarc(-w / 2 + r, -h / 2 + r, r, Math.PI, Math.PI * 1.5, false);

    const extrudeSettings = {
      depth: 3,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.25,
      bevelThickness: 0.25
    };
    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.translate(0, 0, -1.5);
    this.activeGeometries.push(geom);

    const mesh = new THREE.Mesh(geom, this.materials.perchGrayCap);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = '止まり木・ECP-2020-4-GY';
    this.perchGroup.add(mesh);
    return mesh;
  }

  /**
   * 止まり木用 1530ブラックエンドキャップ（ECP-1530-6）の生成・配置
   * - 断面 15x30mm、厚み 3mm、角R1mm
   */
  addPerch1530BlackCap(x, y, z) {
    const halfX = 7.5;
    const halfZ = 15.0;
    const r = 1.0;
    const shape = new THREE.Shape();
    shape.moveTo(-halfX + r, -halfZ);
    shape.lineTo(halfX - r, -halfZ);
    shape.absarc(halfX - r, -halfZ + r, r, -Math.PI / 2, 0, false);
    shape.lineTo(halfX, halfZ - r);
    shape.absarc(halfX - r, halfZ - r, r, 0, Math.PI / 2, false);
    shape.lineTo(-halfX + r, halfZ);
    shape.absarc(-halfX + r, halfZ - r, r, Math.PI / 2, Math.PI, false);
    shape.lineTo(-halfX, -halfZ + r);
    shape.absarc(-halfX + r, -halfZ + r, r, Math.PI, Math.PI * 1.5, false);

    const extrudeSettings = {
      depth: 3,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.2,
      bevelThickness: 0.2
    };
    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    // XZ平面に配置するためX軸回転
    geom.rotateX(Math.PI / 2);
    geom.translate(0, -1.5, 0);
    this.activeGeometries.push(geom);

    const mesh = new THREE.Mesh(geom, this.materials.perchBlackCap);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.name = '止まり木・ECP-1530-6';
    this.perchGroup.add(mesh);
    return mesh;
  }

  /**
   * 天板固定用 M3x8 つまみネジ（白）の生成・配置
   */
  addPerchThumbScrew(x, topY, z) {
    const headD = 10;
    const headH = 5;
    const geom = new THREE.CylinderGeometry(headD / 2, headD / 2, headH, 24);
    geom.translate(0, headH / 2, 0);
    this.activeGeometries.push(geom);

    const mesh = new THREE.Mesh(geom, this.materials.perchWhiteScrew);
    // 天板パネルの上面（topY）の上に配置
    mesh.position.set(x, topY, z);
    mesh.castShadow = true;
    mesh.name = '止まり木・M3つまみネジ';
    this.perchGroup.add(mesh);
    return mesh;
  }

  /**
   * 止まり木オプション（天板吊り下げ式・後付け対応）の生成
   */
  buildPerch() {
    const { W, D, H } = this.params;

    // 1. 中央間距離 D_center (7mmピッチ整合: (W - 120) を7の倍数に切り捨て)
    const rawCenter = W - 120;
    const D_center = Math.floor(rawCenter / 7) * 7;

    // 2. 丸棒 ASTP-30 の長さ
    const astpL = Math.max(10, D_center - 15);

    // 3. 吊り下げフレーム AFS-1530-6 の長さ (ケージ高さの半分)
    const perchPillarL = Math.max(10, Math.round(H / 2));

    // 4. 高さ調整穴ピッチ (下端から15mmが1穴目、上部50mm余白を残し10mm単位)
    // 穴1: 15mm, 穴2: 15+pitch mm (中央・デフォルト配置位置), 穴3: 15+2*pitch mm
    const availableRange = Math.max(0, (perchPillarL - 50) - 15);
    const pitch = Math.max(10, Math.floor(availableRange / 20) * 10);
    const perchBarHFromBottom = 15 + pitch; // 中央穴に固定配置

    const perchMaterial = this.materials.perchAluminum;
    const boltMat = this.materials.handleMaterial;

    const halfDist = D_center / 2;
    const topFrameY = H - 20 - 10; // 天板下面(H-20)に接する2020フレーム中心Y = H - 30
    const topFrameL = 90; // AFSF-2020-4 固定長 90mm

    const rotZ = new THREE.Euler(0, 0, 0); // Z方向（奥行）

    // -------------------------------------------------------------
    // A. 天板固定フレーム AFSF-2020-4 (左右2本、長さ90mm、奥行方向中央配置)
    // 平らな面(溝なし面)が下向き(ケージ室内側)
    // -------------------------------------------------------------
    const xPositions = [-halfDist, halfDist];
    for (const x of xPositions) {
      // 2020_flat フレーム生成 (溝なし面: bottom)
      const frameGeom = create2020FlatGeometry(topFrameL, 'bottom');
      frameGeom.translate(0, 0, -topFrameL / 2);
      this.activeGeometries.push(frameGeom);

      const frameMesh = new THREE.Mesh(frameGeom, perchMaterial);
      frameMesh.position.set(x, topFrameY, 0);
      frameMesh.rotation.copy(rotZ);
      frameMesh.castShadow = true;
      frameMesh.receiveShadow = true;
      frameMesh.name = '止まり木・天板固定フレーム2020';
      this.perchGroup.add(frameMesh);

      // ECP-2020-4-GY (前後両端に各1個、計2個)
      this.addPerch2020GrayCap(x, topFrameY, topFrameL / 2);
      this.addPerch2020GrayCap(x, topFrameY, -topFrameL / 2);

      // M3x8 つまみネジ (各フレーム前後2箇所、計4個)
      const screwZOffsets = [25, -25];
      for (const sz of screwZOffsets) {
        this.addPerchThumbScrew(x, H - 20, sz);
      }
    }

    // -------------------------------------------------------------
    // B. 垂直吊り下げフレーム AFS-1530-6 (左右2本、長さ perchPillarL)
    // AFSF-2020-4の下面 (Y = H - 40) から下向きに伸びる
    // 断面: 幅30mm(Z方向), 厚み15mm(X方向)
    // -------------------------------------------------------------
    const pillarTopY = H - 40;
    const pillarCenterY = pillarTopY - perchPillarL / 2;
    const pillarBottomY = pillarTopY - perchPillarL;

    for (const x of xPositions) {
      const pillarGeom = create1530Geometry(perchPillarL);
      pillarGeom.translate(0, 0, -perchPillarL / 2);
      // create1530ShapeはXY平面でX:15mm, Y:30mm。Z方向にExtrude。
      // これを垂直下向き（Y軸方向）に配置するため、X軸で90度回転
      pillarGeom.rotateX(Math.PI / 2);
      this.activeGeometries.push(pillarGeom);

      const pillarMesh = new THREE.Mesh(pillarGeom, perchMaterial);
      pillarMesh.position.set(x, pillarCenterY, 0);
      pillarMesh.castShadow = true;
      pillarMesh.receiveShadow = true;
      pillarMesh.name = '止まり木・吊り下げフレーム1530';
      this.perchGroup.add(pillarMesh);

      // 下端エンドキャップ ECP-1530-6 (ブラック)
      this.addPerch1530BlackCap(x, pillarBottomY, 0);

      // 3箇所の穴位置の表現 (15mm, 15+pitch, 15+2*pitch)
      const holeHeights = [
        pillarBottomY + 15,
        pillarBottomY + 15 + pitch,
        pillarBottomY + 15 + 2 * pitch
      ];
      for (let i = 0; i < holeHeights.length; i++) {
        const hy = holeHeights[i];
        // 外側側面にφ6穴の視覚表現
        const dir = x > 0 ? 1 : -1;
        const holeGeom = new THREE.CylinderGeometry(3, 3, 0.4, 16);
        holeGeom.rotateZ(Math.PI / 2);
        this.activeGeometries.push(holeGeom);
        const holeMesh = new THREE.Mesh(holeGeom, this.materials.railMaterial);
        holeMesh.position.set(x + dir * 7.4, hy, 0);
        this.perchGroup.add(holeMesh);
      }
    }

    // -------------------------------------------------------------
    // C. 止まり木丸棒 ASTP-30 (φ30アルミ丸パイプ、長さ astpL)
    // 左右垂直フレームの内側面間に渡す
    // 配置高さ: 中央穴 (pillarBottomY + perchBarHFromBottom)
    // -------------------------------------------------------------
    const barCenterY = pillarBottomY + perchBarHFromBottom;
    const barGeom = new THREE.CylinderGeometry(15, 15, astpL, 32);
    barGeom.rotateZ(Math.PI / 2); // X軸方向に沿わせる
    this.activeGeometries.push(barGeom);

    const barMesh = new THREE.Mesh(barGeom, perchMaterial);
    barMesh.position.set(0, barCenterY, 0);
    barMesh.castShadow = true;
    barMesh.receiveShadow = true;
    barMesh.name = '止まり木・アルミ丸パイプASTP-30';
    this.perchGroup.add(barMesh);

    // M6 ボルト頭の表現 (左右フレームの外側)
    for (const x of xPositions) {
      const dir = x > 0 ? 1 : -1;
      const boltHeadGeom = new THREE.CylinderGeometry(5.0, 5.0, 3.5, 16);
      boltHeadGeom.rotateZ(Math.PI / 2);
      this.activeGeometries.push(boltHeadGeom);
      const boltHeadMesh = new THREE.Mesh(boltHeadGeom, boltMat);
      boltHeadMesh.position.set(x + dir * 9.2, barCenterY, 0);
      boltHeadMesh.castShadow = true;
      this.perchGroup.add(boltHeadMesh);
    }

    // -------------------------------------------------------------
    // D. 部材集計への登録 (原価・重量計算用)
    // -------------------------------------------------------------
    // 1. 天板固定フレーム AFSF-2020-4
    this.recordPart('AFSF-2020-4-90', 90, 2, '止まり木 天板固定フレーム (溝なし下面・シルバー)', 'frame');

    // 2. 垂直吊り下げフレーム AFS-1530-6
    this.recordPart(`AFS-1530-6-${perchPillarL}`, perchPillarL, 2, '止まり木 垂直吊り下げフレーム (高さ調整3穴加工・シルバー)', 'frame');

    // 3. アルミ丸パイプ ASTP-30
    this.recordPart(`ASTP-30-${astpL}`, astpL, 1, '止まり木 φ30アルミ丸パイプ (シルバー)', 'frame');

    // 4. エンドキャップ ECP-2020-4-GY
    this.recordPart('ECP-2020-4-GY', '20x20mm (グレー)', 4, '止まり木 天板固定フレーム両端用エンドキャップ', 'rail_cap');

    // 5. エンドキャップ ECP-1530-6
    this.recordPart('ECP-1530-6', '15x30mm (ブラック)', 2, '止まり木 吊り下げフレーム下端用エンドキャップ', 'rail_cap');

    // 6. M3x8 つまみネジ (白)
    this.recordPart('M3x8 つまみネジ (白)', 'M3 x L8mm', 4, '止まり木 天板パンチング固定用つまみネジ', 'other');

    // 7. M6 ボルト
    this.recordPart('M6 ボルト', 'M6 x L20mm', 2, '止まり木 φ30丸棒固定用ボルト', 'other');
  }

  /**
   * 床面防水コーキング（標準装備）の生成
   * - 床板と周囲フレーム（正面・背面・左・右）の入隅に幅5mm・薄グレーのシーリングを描画
   * - 床面中央補強フレームがある場合はその左右両側の境界にも描画
   */
  buildCaulking() {
    const { W, D, hasFloorReinforcement } = this.params;
    const caulkingMat = this.materials.caulkingMaterial;
    const w = 5; // コーキング幅 5mm
    const h = 3; // コーキング高さ 3mm

    // 三角柱押出しジオメトリ生成ヘルパー
    // 断面: (0,0) -> (w, 0) -> (0, h)
    // 押出し方向: Z軸 (長さ length)
    const createCaulkingBead = (length) => {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(w, 0);
      shape.lineTo(0, h);
      shape.closePath();
      const geom = new THREE.ExtrudeGeometry(shape, { depth: length, bevelEnabled: false });
      geom.translate(0, 0, -length / 2);
      this.activeGeometries.push(geom);
      return geom;
    };

    // 1. 背面側コーキング (X方向に長さ W - 40)
    // 入隅: Y=20, Z = -D/2 + 20。+Z方向に幅5mm, +Y方向に高さ3mm
    const backL = Math.max(10, W - 40);
    const backGeom = createCaulkingBead(backL);
    const backMesh = new THREE.Mesh(backGeom, caulkingMat);
    backMesh.rotation.y = -Math.PI / 2;
    backMesh.position.set(0, 20, -D / 2 + 20);
    this.caulkingGroup.add(backMesh);

    // 2. 正面側コーキング (X方向に長さ W - 40)
    // 入隅: Y=20, Z = D/2 - 20。-Z方向に幅5mm, +Y方向に高さ3mm
    const frontGeom = createCaulkingBead(backL);
    const frontMesh = new THREE.Mesh(frontGeom, caulkingMat);
    frontMesh.rotation.y = Math.PI / 2;
    frontMesh.position.set(0, 20, D / 2 - 20);
    this.caulkingGroup.add(frontMesh);

    // 3. 側面側コーキング (Z方向に長さ D - 50: 前後コーキング幅5mmを避けて綺麗に接続)
    const sideL = Math.max(10, D - 50);

    // 左面: 入隅 X = -W/2 + 20, Y=20。+X方向に幅5mm, +Y方向に高さ3mm
    const leftGeom = createCaulkingBead(sideL);
    const leftMesh = new THREE.Mesh(leftGeom, caulkingMat);
    leftMesh.position.set(-W / 2 + 20, 20, 0);
    this.caulkingGroup.add(leftMesh);

    // 右面: 入隅 X = W/2 - 20, Y=20。-X方向に幅5mm, +Y方向に高さ3mm
    const rightGeom = createCaulkingBead(sideL);
    const rightMesh = new THREE.Mesh(rightGeom, caulkingMat);
    rightMesh.rotation.y = Math.PI;
    rightMesh.position.set(W / 2 - 20, 20, 0);
    this.caulkingGroup.add(rightMesh);

    // 4. 床面中央補強フレームの境界 (左右両側)
    if (hasFloorReinforcement) {
      // 中央フレーム左側 (X = -10, -X方向に幅5mm)
      const centerLeftGeom = createCaulkingBead(sideL);
      const centerLeftMesh = new THREE.Mesh(centerLeftGeom, caulkingMat);
      centerLeftMesh.rotation.y = Math.PI;
      centerLeftMesh.position.set(-10, 20, 0);
      this.caulkingGroup.add(centerLeftMesh);

      // 中央フレーム右側 (X = +10, +X方向に幅5mm)
      const centerRightGeom = createCaulkingBead(sideL);
      const centerRightMesh = new THREE.Mesh(centerRightGeom, caulkingMat);
      centerRightMesh.position.set(10, 20, 0);
      this.caulkingGroup.add(centerRightMesh);
    }
  }

  /**
   * モレ対策ゴムパッキン（オプション）の生成
   * - 側面・背面に組み込む（中空ポリカ面を除くアクリル等の面に施工）
   * - 背面: 下側1本 + 左右立面2本 (3方施工、上側なし)
   * - 側面: 下側1本 + 前後立面2本 (3方施工、上側なし。2分割時は上下各3方)
   * - 色: グレー色 (型番 NSCP1H-S-6 はお客様非表示)
   */
  buildRubberPacking() {
    const { W, D, H, hasSideReinforcement, sideOpeningH } = this.params;
    const panelConfig = this.params.panelConfig || {};
    const packingMat = this.materials.rubberPackingMaterial;

    let totalLengthMm = 0;

    // パッキンストリップ（直方体メッシュ）生成ヘルパー
    const addPackingStrip = (sx, sy, sz, px, py, pz, lengthMm) => {
      const geom = new THREE.BoxGeometry(sx, sy, sz);
      this.activeGeometries.push(geom);
      const mesh = new THREE.Mesh(geom, packingMat);
      mesh.position.set(px, py, pz);
      this.rubberPackingGroup.add(mesh);
      totalLengthMm += lengthMm;
    };

    const stripT = 1.6; // パッキンの厚み (mm)
    const stripW = 3.0; // パッキンの幅 (mm)

    // 1. 背面パネルの3方施工 (中空ポリカ以外の場合)
    const backMatType = panelConfig.back || 'acrylic';
    if (backMatType !== 'polyca') {
      const backL = Math.max(10, W - 40);
      const backH = Math.max(10, H - 40);
      const backZ = -D / 2 + 20 + stripT / 2; // フレーム内壁のすぐ手前

      // (1) 背面・下辺 (長さ W - 40)
      addPackingStrip(backL, stripW, stripT, 0, 20 + stripW / 2, backZ, backL);

      // (2) 背面・左立辺 (長さ H - 40)
      addPackingStrip(stripW, backH, stripT, -W / 2 + 20 + stripW / 2, H / 2, backZ, backH);

      // (3) 背面・右立辺 (長さ H - 40)
      addPackingStrip(stripW, backH, stripT, W / 2 - 20 - stripW / 2, H / 2, backZ, backH);
    }

    // 2. 側面パネルの3方施工 (中空ポリカ以外の場合)
    const sideL = Math.max(10, D - 40);

    if (!hasSideReinforcement) {
      // 側面1枚仕様
      const sideMatType = panelConfig.side || 'acrylic';
      if (sideMatType !== 'polyca') {
        const sideH = Math.max(10, H - 40);

        // 左右2面分
        for (const sign of [-1, 1]) {
          const sideX = sign * (W / 2 - 20) - sign * (stripT / 2); // 左右フレーム内壁のすぐ内側

          // (1) 側面・下辺 (長さ D - 40)
          addPackingStrip(stripT, stripW, sideL, sideX, 20 + stripW / 2, 0, sideL);

          // (2) 側面・後立辺 (長さ H - 40)
          addPackingStrip(stripT, sideH, stripW, sideX, H / 2, -D / 2 + 20 + stripW / 2, sideH);

          // (3) 側面・前立辺 (長さ H - 40)
          addPackingStrip(stripT, sideH, stripW, sideX, H / 2, D / 2 - 20 - stripW / 2, sideH);
        }
      }
    } else {
      // 側面2分割仕様 (下側3方、上側3方)
      const sideLowerMat = panelConfig.sideLower || 'acrylic';
      const sideUpperMat = panelConfig.sideUpper || 'punching';

      const upperH = Math.max(10, sideOpeningH);
      const lowerH = Math.max(10, H - 60 - upperH);

      // 下側パネル3方施工
      if (sideLowerMat !== 'polyca') {
        for (const sign of [-1, 1]) {
          const sideX = sign * (W / 2 - 20) - sign * (stripT / 2);
          const lowerCenterY = 20 + lowerH / 2;

          // (1) 下側・下辺
          addPackingStrip(stripT, stripW, sideL, sideX, 20 + stripW / 2, 0, sideL);
          // (2) 下側・後立辺
          addPackingStrip(stripT, lowerH, stripW, sideX, lowerCenterY, -D / 2 + 20 + stripW / 2, lowerH);
          // (3) 下側・前立辺
          addPackingStrip(stripT, lowerH, stripW, sideX, lowerCenterY, D / 2 - 20 - stripW / 2, lowerH);
        }
      }

      // 上側パネル3方施工
      if (sideUpperMat !== 'polyca') {
        for (const sign of [-1, 1]) {
          const sideX = sign * (W / 2 - 20) - sign * (stripT / 2);
          const upperBaseY = 20 + lowerH + 20; // 側面補強フレーム上面
          const upperCenterY = upperBaseY + upperH / 2;

          // (1) 上側・下辺
          addPackingStrip(stripT, stripW, sideL, sideX, upperBaseY + stripW / 2, 0, sideL);
          // (2) 上側・後立辺
          addPackingStrip(stripT, upperH, stripW, sideX, upperCenterY, -D / 2 + 20 + stripW / 2, upperH);
          // (3) 上側・前立辺
          addPackingStrip(stripT, upperH, stripW, sideX, upperCenterY, D / 2 - 20 - stripW / 2, upperH);
        }
      }
    }

    // 3. 部材集計（BOM）への登録
    // ユーザー指定: 「1m単位での資材量で計算しましょう。」「型番はお客様に見えないようにしてください。」
    if (totalLengthMm > 0) {
      const billedM = Math.ceil(totalLengthMm / 1000);
      this.recordPart(
        'モレ対策ゴムパッキン (グレー)',
        `${billedM} m`,
        1,
        `側面・背面 隙間モレ抑制用 (実施工長: ${Math.round(totalLengthMm)}mm / 1m単位積算)`,
        'rail_cap',
        {
          partCode: 'NSCP1H-S-6',
          lengthMm: billedM * 1000,
          unitType: 'm'
        }
      );
    }
  }

  /**
   * ２室分けオプション（仕切り板・L字ブラケット・化粧つまみネジ）の生成
   */
  buildRoomDivider() {
    const { W, D, H, cageType, frontWideFrame, frontWindowH } = this.params;
    const panelConfig = this.params.panelConfig || {};
    const partitionMatType = panelConfig.partition || 'black_matte';

    // 1. 仕切りパネルの寸法
    // 750x450x300の場合: 418.0x276.5 (奥行 D - 32mm, 高さ H - 23.5mm)
    const panelD = Math.max(10, D - 32);
    const panelH = Math.max(10, H - 23.5);
    const panelT = 3.0; // アクリル・パネル厚み 3.0mm

    // パネルマテリアルの選択
    let partitionMat = this.materials.blackMatteAcrylic;
    let matCode = 'acrylic_black_matte_3_0';
    let matName = 'アクリル黒両面マット 3.0mm';
    if (partitionMatType === 'acrylic') {
      partitionMat = this.materials.acrylic;
      matCode = 'acrylic_extrusion_3_0';
      matName = '透明アクリル 3.0mm';
    } else if (partitionMatType === 'smoke_gray') {
      partitionMat = this.materials.smokeGrayAcrylic;
      matCode = 'acrylic_smoke_gray_3_0';
      matName = 'アクリル グレースモーク半透明 3.0mm';
    } else if (partitionMatType === 'punching') {
      const punchingTex = createPunchingTexture(panelD, panelH, false);
      this.activeTextures.push(punchingTex);
      partitionMat = this.materials.createPunchingMaterial(punchingTex);
      this.activeMaterials.push(partitionMat);
      matCode = 'pvc_punching_3_0';
      matName = '塩ビパンチングボード 透明 3.0mm';
    }

    // 2. パネル形状（C面18mmカット加工）
    // ユーザー厳密指定:
    // ・正面側下＝切り欠きあり (18x18mm C面)
    // ・正面側上＝切り欠きなし (直角角)
    // ・背面側下＝切り欠きあり (18x18mm C面)
    // ・背面側上＝切り欠きあり (18x18mm C面)
    // ・奥行方向位置: 正面フレーム外側より20mm内側がパネル端 => zFront = D/2 - 20
    // ・上下方向位置: 床面外側フレームより11.5mmがパネル下端 => yBottom = 11.5mm
    const zFront = D / 2 - 20;
    const zBack = zFront - panelD; // D/2 - 20 - (D - 32) = -D/2 + 12
    const yBottom = 11.5;
    const yTop = yBottom + panelH; // 11.5 + (H - 23.5) = H - 12.0mm
    const cSize = 18; // 18mmカット

    const shape = new THREE.Shape();
    // (Z, Y) 平面で正確にパスを作成
    // 1. 正面側下C面の始点 (Z = zFront, Y = yBottom + cSize)
    shape.moveTo(zFront, yBottom + cSize);
    // 2. 正面側上 (直角角・切り欠きなし): (Z = zFront, Y = yTop)
    shape.lineTo(zFront, yTop);
    // 3. 背面側上C面の始点: (Z = zBack + cSize, Y = yTop)
    shape.lineTo(zBack + cSize, yTop);
    // 4. 背面側上C面: (Z = zBack, Y = yTop - cSize)
    shape.lineTo(zBack, yTop - cSize);
    // 5. 背面側下C面の始点: (Z = zBack, Y = yBottom + cSize)
    shape.lineTo(zBack, yBottom + cSize);
    // 6. 背面側下C面: (Z = zBack + cSize, Y = yBottom)
    shape.lineTo(zBack + cSize, yBottom);
    // 7. 正面側下C面の始点: (Z = zFront - cSize, Y = yBottom)
    shape.lineTo(zFront - cSize, yBottom);
    // 8. 正面側下C面で閉じる: (Z = zFront, Y = yBottom + cSize)
    shape.lineTo(zFront, yBottom + cSize);

    const panelGeom = new THREE.ExtrudeGeometry(shape, { depth: panelT, bevelEnabled: false });
    // 回転の符号反転を防ぐため、頂点属性を直接ワールド座標系に正確にマッピング
    // X = 厚み方向 (中心0: -panelT/2 〜 +panelT/2)
    // Y = 高さ方向 (yBottom: 11.5mm 〜 yTop: H - 12.0mm)
    // Z = 奥行方向 (奥: zBack 〜 手前: zFront)
    const posAttr = panelGeom.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const xs = posAttr.getX(i);
      const ys = posAttr.getY(i);
      const ze = posAttr.getZ(i);
      posAttr.setXYZ(i, ze - panelT / 2, ys, xs);
    }
    posAttr.needsUpdate = true;

    // UV座標を [0, 1] 範囲（奥行きZ: zBack〜zFront, 高さY: yBottom〜yTop）に正確にマッピング
    const uvAttr = panelGeom.attributes.uv;
    if (uvAttr) {
      for (let i = 0; i < uvAttr.count; i++) {
        const curZ = posAttr.getZ(i);
        const curY = posAttr.getY(i);
        const u = (curZ - zBack) / panelD;
        const v = (curY - yBottom) / panelH;
        uvAttr.setXY(i, u, v);
      }
      uvAttr.needsUpdate = true;
    }

    panelGeom.computeVertexNormals();
    this.activeGeometries.push(panelGeom);

    const panelMesh = new THREE.Mesh(panelGeom, partitionMat);
    panelMesh.castShadow = true;
    panelMesh.receiveShadow = true;
    panelMesh.name = '２室分け仕切り板';
    this.dividerGroup.add(panelMesh);

    // 3. 部品集計（パネル）
    this.recordPart(
      `２室分け仕切り板 (${matName})`,
      `${panelD} x ${panelH}`,
      1,
      `２室分け仕切り板後付け仕様 (${matName})`,
      'panel',
      {
        panelCode: matCode,
        partCode: matCode,
        widthMm: panelD,
        heightMm: panelH
      }
    );

    // 4. L字ブラケット ABL-2015-4 の生成・配置
    // 実機写真に完全準拠：
    // - パネル左側 (-X側) に配置
    // - 面A (フレーム固定・真円穴): 正面フレーム室内側垂直面に密着 (+Z向きネジ締め)
    // - 面B (パネル固定・長穴): パネル側面に沿って奥 (-Z向き) へ伸び、横から白いM3つまみネジで固定
    // - ブラケット高さ: 正面フレームの上段溝の中心高さに合わせる
    let bracketCenterY = 30;
    if (cageType === 'A' || cageType === 'A_FRONT') {
      const wide = frontWideFrame || '2x';
      if (wide === '3x') bracketCenterY = 50; // 3倍幅 (上段溝 Y=50)
      else if (wide === '2x') bracketCenterY = 30; // 2倍幅 (上段溝 Y=30)
      else bracketCenterY = 10; // 標準 (溝 Y=10)
    } else {
      // Type C: スライド扉下フレーム (中桟 2020) の溝
      bracketCenterY = 20 + (frontWindowH || 50) + 10;
    }

    const bH = 18; // ブラケット上下高さ 18mm
    const bW = 18; // フレーム面幅 18mm (-X方向)
    const bL = 18; // パネル面奥行 18mm (-Z方向)
    const bT = 3.5; // アルミ板厚 3.5mm

    // 水平面 (XZ) でL字を作成し、Y方向に押し出し
    // 角は (X = -panelT/2, Z = zFront)
    const bracketShape = new THREE.Shape();
    bracketShape.moveTo(0, 0);
    bracketShape.lineTo(-bW, 0);
    bracketShape.lineTo(-bW, -bT);
    bracketShape.lineTo(-bT, -bT);
    bracketShape.lineTo(-bT, -bL);
    bracketShape.lineTo(0, -bL);
    bracketShape.closePath();

    const bGeom = new THREE.ExtrudeGeometry(bracketShape, { depth: bH, bevelEnabled: false });
    const bPos = bGeom.attributes.position;
    for (let i = 0; i < bPos.count; i++) {
      const bx = bPos.getX(i);
      const by = bPos.getY(i);
      const bz = bPos.getZ(i);
      bPos.setXYZ(i, -panelT / 2 + bx, bracketCenterY - bH / 2 + bz, zFront + by);
    }
    bPos.needsUpdate = true;
    bGeom.computeVertexNormals();
    this.activeGeometries.push(bGeom);

    const bracketMesh = new THREE.Mesh(bGeom, this.materials.perchAluminum);
    bracketMesh.castShadow = true;
    bracketMesh.name = '２室分け・ABL-2015-4';
    this.dividerGroup.add(bracketMesh);

    // 固定ネジの配置 (実機写真と100%同一の向き・形状)
    // 1) フレーム固定用 +ネジ (真円穴・トラス頭プラスネジ、室内側 -Z を向く)
    const screwHeadX = -panelT / 2 - bW / 2;
    const screwHeadY = bracketCenterY;
    const screwHeadZ = zFront - bT - 1.0;

    const screwHeadGeom = new THREE.CylinderGeometry(3.5, 3.5, 1.8, 16);
    screwHeadGeom.rotateX(Math.PI / 2);
    screwHeadGeom.translate(screwHeadX, screwHeadY, screwHeadZ);
    this.activeGeometries.push(screwHeadGeom);
    const screwHeadMesh = new THREE.Mesh(screwHeadGeom, this.materials.handleMaterial);
    screwHeadMesh.name = '２室分け・フレーム固定プラスネジ';
    this.dividerGroup.add(screwHeadMesh);

    // プラスネジの十字穴
    const crossGeom1 = new THREE.BoxGeometry(4.0, 0.8, 0.5);
    crossGeom1.translate(screwHeadX, screwHeadY, screwHeadZ - 0.7);
    this.activeGeometries.push(crossGeom1);
    const crossMesh1 = new THREE.Mesh(crossGeom1, this.materials.wireMesh);
    this.dividerGroup.add(crossMesh1);

    const crossGeom2 = new THREE.BoxGeometry(0.8, 4.0, 0.5);
    crossGeom2.translate(screwHeadX, screwHeadY, screwHeadZ - 0.7);
    this.activeGeometries.push(crossGeom2);
    const crossMesh2 = new THREE.Mesh(crossGeom2, this.materials.wireMesh);
    this.dividerGroup.add(crossMesh2);

    // 2) パネル固定用 M3化粧つまみネジ (白ノブ、ブラケット長穴から横向きにパネルへ締結)
    const knobX = -panelT / 2 - bT - 2.5;
    const knobY = bracketCenterY;
    const knobZ = zFront - bL / 2;

    const knobGeom = new THREE.CylinderGeometry(4.8, 4.8, 5, 18);
    knobGeom.rotateZ(Math.PI / 2);
    knobGeom.translate(knobX, knobY, knobZ);
    this.activeGeometries.push(knobGeom);
    const knobMesh = new THREE.Mesh(knobGeom, this.materials.perchWhiteScrew);
    knobMesh.name = '２室分け・M3つまみネジ(ブラケット固定)';
    this.dividerGroup.add(knobMesh);

    // 5. 天板のM3つまみネジ (白) 4本 (奥側2本、手前側2本で仕切り板を挟み込み)
    // 天板パネル上面位置: H - 20 + panelT = H - 17mm
    const topPanelY = H - 20 + panelT;
    const topKnobY = topPanelY + 2.0; // 頭部中心Y
    const topScrewPositions = [
      // 奥側 (Z = -D/2 + 50) 互い違いにパネルを挟む
      { x: -3.5, z: -D / 2 + 50 },
      { x: 3.5, z: -D / 2 + 65 },
      // 手前側 (Z = D/2 - 60) 互い違いにパネルを挟む
      { x: -3.5, z: D / 2 - 60 },
      { x: 3.5, z: D / 2 - 75 }
    ];

    for (const pos of topScrewPositions) {
      // つまみネジの頭部 (白ノブ)
      const topKnobGeom = new THREE.CylinderGeometry(4.5, 4.5, 4, 16);
      topKnobGeom.translate(pos.x, topKnobY, pos.z);
      this.activeGeometries.push(topKnobGeom);
      const topKnobMesh = new THREE.Mesh(topKnobGeom, this.materials.perchWhiteScrew);
      topKnobMesh.name = '２室分け・天板M3つまみネジ';
      this.dividerGroup.add(topKnobMesh);

      // つまみネジの軸 (M3シャフト・下方に貫通して仕切り板を挟み込む)
      const shaftGeom = new THREE.CylinderGeometry(1.5, 1.5, 7, 12);
      shaftGeom.translate(pos.x, topPanelY - 3.5, pos.z);
      this.activeGeometries.push(shaftGeom);
      const shaftMesh = new THREE.Mesh(shaftGeom, this.materials.handleMaterial);
      this.dividerGroup.add(shaftMesh);
    }

    // 6. 部品集計（ブラケット・ネジ）
    this.recordPart('ABL-2015-4', '20x15x15mm', 1, '２室分け L字ブラケット ABL-2015-4 (シルバー)', 'rail_cap', {
      partCode: 'ABL-2015-4',
      unitType: 'piece'
    });
    this.recordPart('M3 つまみネジ (白)', 'M3 x L8mm', 5, '２室分け固定・倒れ防止用つまみネジ', 'other');
    this.recordPart('M4 皿ネジ', 'M4 x L8mm', 1, '２室分けフレーム固定用皿ネジ', 'other');
  }

  /**
   * 部材リストへの登録
   * @param {string} name - 部材種別 / 型番
   * @param {string|number} size - サイズ
   * @param {number} count - 数量
   * @param {string} note - 備考
   * @param {'frame'|'rail_cap'|'panel'|'other'} category - 分類カテゴリ
   */
  recordPart(name, size, count, note, category = 'other', extra = {}) {
    const sizeStr = typeof size === 'number' ? `${Math.round(size)} mm` : size;
    const lengthMm = typeof size === 'number' ? Math.round(size) : (extra.lengthMm || null);

    // 基本型番の自動抽出 (末尾の長さ数値を除去: AFS-2020-4-710 -> AFS-2020-4)
    let autoPartCode = name;
    if (typeof size === 'number' && name.includes('-')) {
      const parts = name.split('-');
      if (!isNaN(parts[parts.length - 1])) {
        autoPartCode = parts.slice(0, -1).join('-');
      }
    }

    this.partsList.push({
      name,
      size: sizeStr,
      count,
      note,
      category,
      lengthMm,
      partCode: extra.partCode || autoPartCode,
      unitType: extra.unitType || (typeof size === 'number' ? 'm' : 'piece'),
      ...extra
    });
  }

  /**
   * 現在の部材集計サマリーを取得
   */
  getPartsSummary() {
    return this.partsList;
  }
}
