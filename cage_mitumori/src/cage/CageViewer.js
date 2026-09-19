import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { MaterialFactory } from './MaterialFactory.js';
import { CageModel } from './CageModel.js';
import { DimensionLines } from './DimensionLines.js';

/**
 * 3Dケージビューアマネージャ
 */
export class CageViewer {
  constructor(container) {
    this.container = container;
    this.width = container.clientWidth;
    this.height = container.clientHeight;

    // 1. シーン (背景はCSSスタジオグラデーションを透過表示)
    this.scene = new THREE.Scene();
    this.scene.background = null;

    // 2. カメラ（添付画像の左斜め前方・迫力ある構図）
    this.camera = new THREE.PerspectiveCamera(40, this.width / this.height, 1, 8000);
    this.camera.position.set(-1130, 740, 1070);

    // 自動回転モード関連
    this.isAutoRotating = false;
    this._autoRotateAngle = 0;      // 現在の回転角度 (ラジアン)
    this._autoRotateSpeed = 0.003;  // 1フレームあたりの回転速度
    this._lastAutoParams = null;    // 最後のsyncUpdate時のparams

    // 3. レンダラー (透過背景を有効化・画像保存用バッファ保持)
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.container.appendChild(this.renderer.domElement);

    // 室内スタジオ環境マップの生成と適用（金属部材の白銀アルマイト反射・黒色化防止）
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();
    const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = envTexture;

    // 4. オービットコントロール
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(-60, 100, -15);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.maxPolarAngle = Math.PI - 0.05;
    this.controls.minDistance = 200;
    this.controls.maxDistance = 4000;

    // 5. ライティング
    this.setupLighting();

    // 6. 床グリッド
    this.setupFloorGrid();

    // 7. マテリアル・モデル・寸法線
    this.materials = new MaterialFactory();
    this.cageModel = new CageModel(this.materials);
    this.scene.add(this.cageModel.root);

    this.dimensions = new DimensionLines();
    this.scene.add(this.dimensions.group);

    // リサイズ監視
    window.addEventListener('resize', () => this.onResize());

    // アニメーションループ開始
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setupLighting() {
    // 環境光（過剰な白色化・平坦化を防止し、金属の陰影とハイライトのメリハリを生む）
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e2430, 0.38);
    hemiLight.position.set(0, 1000, 0);
    this.scene.add(hemiLight);

    // メイン指向性ライト（金属光沢のハイライト・ソフトシャドウ生成）
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.35);
    dirLight1.position.set(1000, 1600, 1200);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 2048;
    dirLight1.shadow.mapSize.height = 2048;
    dirLight1.shadow.camera.near = 100;
    dirLight1.shadow.camera.far = 4000;
    const d = 1000;
    dirLight1.shadow.camera.left = -d;
    dirLight1.shadow.camera.right = d;
    dirLight1.shadow.camera.top = d;
    dirLight1.shadow.camera.bottom = -d;
    dirLight1.shadow.bias = -0.0005;
    dirLight1.shadow.radius = 3.5; // 影を自然にソフトにぼかす
    this.scene.add(dirLight1);

    const dirLightTop = new THREE.DirectionalLight(0xffffff, 0.65);
    dirLightTop.position.set(0, 1200, 0);
    this.scene.add(dirLightTop);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight2.position.set(-1000, 1000, -1200);
    this.scene.add(dirLight2);

    const dirLightBottom = new THREE.DirectionalLight(0x2a3240, 0.25);
    dirLightBottom.position.set(0, -1000, 0);
    this.scene.add(dirLightBottom);
  }

  setupFloorGrid() {
    // シルバーとブラックのフレーム両方が映えるスタジオ用グリッド
    this.gridHelper = new THREE.GridHelper(2400, 24, 0x5a657b, 0x2e3543);
    this.gridHelper.position.y = -10.0;
    this.scene.add(this.gridHelper);

    const planeGeo = new THREE.PlaneGeometry(3000, 3000);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    this.floor = new THREE.Mesh(planeGeo, planeMat);
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.position.y = -10.1;
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);
  }

  /**
   * フレームカラーの変更（シルバー / ブラック）
   */
  setFrameColor(colorType) {
    this.materials.setFrameColor(colorType);
  }

  update(params) {
    // 接地レベルの動的同期（ゴム脚: -11mm、キャスター: -66mm）
    const groundY = params.footType === 'caster' ? -66.0 : -11.0;
    if (this.gridHelper) this.gridHelper.position.y = groundY;
    if (this.floor) this.floor.position.y = groundY - 0.1;

    this.cageModel.update(params);
    this.dimensions.update(params);

    const centerY = params.H / 2;
    this.controls.target.set(0, centerY, 0);
  }

  setDimensionsVisible(visible) {
    this.dimensions.setVisible(visible);
  }

  setPanelsVisible(visible) {
    this.cageModel.panelGroup.visible = visible;
    this.cageModel.doorGroup.visible = visible;
  }

  /**
   * 扉の開閉状態の設定（アニメーション付き）
   * @param {'closed' | 'left_open' | 'right_open'} doorState
   */
  setDoorState(doorState) {
    this.cageModel.params.doorState = doorState;
    this.cageModel.buildDoors();
    // buildDoors()内で_doorAnimが従前位置から目標位置へのアニメーションが設定される
  }

  setViewPreset(preset, params) {
    const H = params.H || 300;
    const W = params.W || 750;
    const D = params.D || 450;
    const targetY = H / 2;
    const dist = Math.max(W, D, H) * 2.2;

    this.controls.target.set(0, targetY, 0);

    switch (preset) {
      case 'front':
        this.controls.target.set(0, targetY, 0);
        this.camera.position.set(0, targetY, dist);
        break;
      case 'iso':
      default: {
        // 画像の構図: 左斜め上前方から見下ろし（正面・左側面・天板が見える）
        // X: 負方向（左）、Y: 上、Z: 正方向（正面）
        const maxDim = Math.max(W, D, H);
        const isoDist = maxDim * 1.5;
        this.controls.target.set(0, H * 0.45, 0);
        this.camera.position.set(
          -isoDist * 0.82,   // 左寄り
          H * 1.05 + isoDist * 0.55, // 見下ろし高さ
          isoDist * 0.82     // 正面寄り
        );
        break;
      }
      case 'top':
        this.controls.target.set(0, targetY, 0);
        this.camera.position.set(0, targetY + dist * 1.3, 1);
        break;
      case 'side':
        this.controls.target.set(0, targetY, 0);
        this.camera.position.set(dist, targetY, 0);
        break;
      case 'bottom':
        this.controls.target.set(0, targetY, 0);
        this.camera.position.set(dist * 0.4, -dist * 0.7, dist * 0.6);
        break;
    }
    this.controls.update();
  }

  onResize() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  /**
   * 自動回転モードの開始/停止
   * @param {boolean} active
   * @param {object} params - 現在のケージパラメータ（初期角度計算用）
   */
  setAutoRotate(active, params) {
    this.isAutoRotating = active;
    if (active) {
      // 現在のカメラ位置から水平角・仰角を球面座標として取得
      const target = this.controls.target;
      const dx = this.camera.position.x - target.x;
      const dy = this.camera.position.y - target.y;
      const dz = this.camera.position.z - target.z;
      const r = Math.sqrt(dx * dx + dy * dy + dz * dz);

      this._autoRotateAngle = Math.atan2(dz, dx);
      // phi: 仰角 (0=真横, π/2=真上)。現在の位置から算出
      this._autoRotatePhi = Math.asin(Math.max(-1, Math.min(1, dy / r)));
      // ユーザーが上下ドラッグで調整できるtargetYオフセット
      this._autoTargetYOffset = 0;
      // ホイールで調整できる距離スケール（1.0=デフォルト距離）
      this._autoRadiusScale = 1.0;

      this._lastAutoParams = params ? { ...params } : null;
      // OrbitControlsのダンピングを一時停止（自分でカメラを動かすため）
      this.controls.enableDamping = false;
      this.controls.enabled = false; // OrbitControls無効化

      // ポインタードラッグイベントを登録
      this._setupAutoRotateDrag();
    } else {
      this.controls.enabled = true;
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.08;
      // ドラッグイベントを解除
      this._teardownAutoRotateDrag();
    }
  }

  /**
   * 自動回転中のドラッグ操作セットアップ
   * - 左ドラッグ上下: 仰角 (phi) を変更
   * - 右ドラッグ上下 / 中ボタンドラッグ上下: ターゲットY (上下パン) を変更
   */
  _setupAutoRotateDrag() {
    const el = this.renderer.domElement;

    this._dragState = { active: false, button: -1, lastY: 0 };

    this._onPointerDown = (e) => {
      this._dragState.active = true;
      this._dragState.button = e.button;
      this._dragState.lastY = e.clientY;
      e.preventDefault();
    };

    this._onPointerMove = (e) => {
      if (!this._dragState.active) return;
      const deltaY = e.clientY - this._dragState.lastY;
      this._dragState.lastY = e.clientY;

      const sensitivity = 0.005;
      if (this._dragState.button === 0) {
        // 左ドラッグ: 仰角(phi)を調整
        this._autoRotatePhi -= deltaY * sensitivity;
        this._autoRotatePhi = Math.max(-0.05, Math.min(Math.PI / 2 - 0.05, this._autoRotatePhi));
      } else if (this._dragState.button === 2) {
        // 右ドラッグ: ターゲットY位置を上下にパン
        const H = (this._lastAutoParams && this._lastAutoParams.H) || 300;
        this._autoTargetYOffset -= deltaY * 0.5;
        const limit = H * 0.8;
        this._autoTargetYOffset = Math.max(-limit, Math.min(limit, this._autoTargetYOffset));
      }
    };

    this._onPointerUp = () => {
      this._dragState.active = false;
      this._dragState.button = -1;
    };

    // ホイールで拡大縮小（半径スケールを変更）
    this._onWheel = (e) => {
      e.preventDefault();
      const zoomSpeed = 0.001;
      this._autoRadiusScale *= (1 + e.deltaY * zoomSpeed);
      // 0.3倍〜3倍の範囲でクランプ
      this._autoRadiusScale = Math.max(0.3, Math.min(3.0, this._autoRadiusScale));
    };

    el.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);
    el.addEventListener('wheel', this._onWheel, { passive: false });
    // 右クリックメニュー抑制
    this._onContextMenu = (e) => e.preventDefault();
    el.addEventListener('contextmenu', this._onContextMenu);
  }

  /**
   * 自動回転中のドラッグイベント解除
   */
  _teardownAutoRotateDrag() {
    const el = this.renderer.domElement;
    if (this._onPointerDown) el.removeEventListener('pointerdown', this._onPointerDown);
    if (this._onPointerMove) window.removeEventListener('pointermove', this._onPointerMove);
    if (this._onPointerUp) window.removeEventListener('pointerup', this._onPointerUp);
    if (this._onWheel) el.removeEventListener('wheel', this._onWheel);
    if (this._onContextMenu) el.removeEventListener('contextmenu', this._onContextMenu);
    this._onPointerDown = null;
    this._onPointerMove = null;
    this._onPointerUp = null;
    this._onWheel = null;
    this._onContextMenu = null;
  }

  /**
   * 自動回転時のカメラ半径をケージサイズから計算
   * @param {object} params
   */
  _calcAutoRotateCamera(params) {
    const W = (params && params.W) || 750;
    const D = (params && params.D) || 450;
    const H = (params && params.H) || 300;
    // ケージを確実に収めるための距離 (近め)
    const radius = Math.max(W, D, H) * 1.45;
    const targetY = H * 0.5;
    return { radius, targetY };
  }

  animate() {
    requestAnimationFrame(this.animate);

    // 扉スライドアニメーションの毎フレーム更新
    this.cageModel.updateDoorAnimation();

    if (this.isAutoRotating && this._lastAutoParams) {
      // 水平角を自動進行
      this._autoRotateAngle += this._autoRotateSpeed;

      const { radius: baseRadius, targetY } = this._calcAutoRotateCamera(this._lastAutoParams);
      const radius = baseRadius * (this._autoRadiusScale || 1.0);

      // 球面座標 → デカルト座標
      const phi = this._autoRotatePhi;
      const cosP = Math.cos(phi);
      const x = Math.cos(this._autoRotateAngle) * radius * cosP;
      const z = Math.sin(this._autoRotateAngle) * radius * cosP;
      const y = (targetY + (this._autoTargetYOffset || 0)) + radius * Math.sin(phi);

      const tY = targetY + (this._autoTargetYOffset || 0);

      this.camera.position.set(x, y, z);
      this.camera.lookAt(0, tY, 0);
    } else {
      this.controls.update();
    }

    this.renderer.render(this.scene, this.camera);
  }

  getPartsSummary() {
    return this.cageModel.getPartsSummary();
  }

  /**
   * 現在の3Dケージ描画内容を高解像度画像（DataURL）としてキャプチャ
   */
  captureImage() {
    this.renderer.render(this.scene, this.camera);
    return this.renderer.domElement.toDataURL('image/png');
  }
}

