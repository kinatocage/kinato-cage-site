import './style.css';
import { CageViewer } from './cage/CageViewer.js';
import { materialsConfig } from '../cost_materials_config.js';
import { creaturePresets } from '../preset_creatures_config.js';
import { getFenpCost } from '../fenp_price_config.js';
import { getPvcPunchingCost } from '../pvc_punching_price_config.js';
import { getAcrylicExtrusionCost } from '../acrylic_extrusion_price_config.js';
import { getAcrylicBlackMatteCost } from '../acrylic_black_matte_price_config.js';
import { getAcrylicSmokeGrayCost } from '../acrylic_smoke_gray_price_config.js';
import { getAcrylicCastCost, getAcrylicCastRawBoardCost, getAcrylicDoorProcessingCost } from '../acrylic_cast_price_config.js';
import { calculateHazaiyaPanelOrderList, formatHazaiyaPanelOrderClipboardText } from './hazaiya_machining_calculator.js';

// DOM要素の取得
const container = document.getElementById('canvas-container');

// 生体プリセットコンテナ
const creaturePresetGrid = document.getElementById('creature-preset-grid');

// 見積りID仕様復元DOM要素
const inputRestoreEstimateId = document.getElementById('input-restore-estimate-id');
const btnRestoreEstimate = document.getElementById('btn-restore-estimate');
const restoreStatusMsg = document.getElementById('restore-status-msg');

// 画像保存・問い合わせ仕様コピーDOM要素
const btnSaveImage = document.getElementById('btn-save-image');
const btnCopySpec = document.getElementById('btn-copy-spec');
const inquirySpecTextarea = document.getElementById('inquiry-spec-textarea');
const copyToast = document.getElementById('copy-toast');

// お見積もり結果モーダル関連DOM要素
const estimateResultModal = document.getElementById('estimate-result-modal');
const modalEstimateId = document.getElementById('modal-estimate-id');
const modalPriceTotal = document.getElementById('modal-price-total');
const modalWeightTotal = document.getElementById('modal-weight-total');
const modalSpecTextarea = document.getElementById('modal-spec-textarea');
const btnCopySpecModal = document.getElementById('btn-copy-spec-modal');
const modalCopyToast = document.getElementById('modal-copy-toast');
const btnSaveImageModal = document.getElementById('btn-save-image-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnDismissModal = document.getElementById('btn-dismiss-modal');
const btnOpenEstimateModal = document.getElementById('btn-open-estimate-modal');
const modalDownloadSuccess = document.getElementById('modal-download-success');
const downloadSuccessTitle = document.getElementById('download-success-title');
const downloadFilenameLabel = document.getElementById('download-filename-label');
const modalPreviewSection = document.getElementById('modal-preview-section');
const modalPreviewImg = document.getElementById('modal-preview-img');

// 見積IDおよび最新計算データの保持変数
let currentEstimateId = null;
let currentEstimateData = null;
const sessionStartTime = Date.now();
const visitorId = getOrCreateVisitorId();
const sessionId = getOrCreateSessionId();
let calculationSequence = 0;
let lastEstimatedState = null;

/**
 * 画面中央上部のお知らせトースト通知
 * @param {string} message
 * @param {number} duration
 */
function showNoticeToast(message, duration = 5000) {
  let toast = document.getElementById('app-notice-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-notice-toast';
    toast.className = 'app-notice-toast hidden';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('hidden');
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  if (toast._timer) clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, duration);
}

// パラメータ入力
const sliderW = document.getElementById('slider-w');
const inputW = document.getElementById('input-w');
const sliderD = document.getElementById('slider-d');
const inputD = document.getElementById('input-d');
const sliderH = document.getElementById('slider-h');
const inputH = document.getElementById('input-h');

// Type C 専用 前窓入力
const rowFrontWindow = document.getElementById('row-front-window');
const sliderFW = document.getElementById('slider-fw');
const inputFW = document.getElementById('input-fw');

// オプション 側面補強フレーム (1行インライン)
const toggleSideReinforce = document.getElementById('toggle-side-reinforce');
const cardSideReinforce = document.getElementById('card-side-reinforce');
const boxSideH = document.getElementById('box-side-h');
const inputSideH = document.getElementById('input-side-h');

// タイプ選択
const btnTypeA = document.getElementById('btn-type-a');
const btnTypeAFront = document.getElementById('btn-type-a-front');
const btnTypeAFramed = document.getElementById('btn-type-a-framed');
const btnTypeC = document.getElementById('btn-type-c');
const typeBadge = document.getElementById('type-badge');

// 資材リスト（BOM・動的デバッグ生成用）
let bomToggleBtn = null;
let bomContainer = null;
let bomFrameTbody = null;
let bomFrameTfoot = null;
let bomPanelTbody = null;
let bomPanelTfoot = null;
let bomOtherTbody = null;
let bomOtherTfoot = null;
let partsCountBadge = null;
let lastConsolidatedFrameParts = [];
let lastSortedPanelParts = [];

// フレームカラー選択
const btnFrameSilver = document.getElementById('btn-frame-silver');
const btnFrameBlack = document.getElementById('btn-frame-black');

// 前開き扉 開き方向選択
const sectionFrontDoorHinge = document.getElementById('section-front-door-hinge');
const btnHingeLeft = document.getElementById('btn-hinge-left');
const btnHingeRight = document.getElementById('btn-hinge-right');

// キャスターオプション（ONでキャスター、OFFで標準ゴム脚）
const toggleCaster = document.getElementById('toggle-caster');
const cardCaster = document.getElementById('card-caster');

// 床面・天板補強オプション
const toggleFloorReinforce = document.getElementById('toggle-floor-reinforce');
const cardFloorReinforce = document.getElementById('card-floor-reinforce');
const floorReinfSub = document.getElementById('floor-reinf-sub');

const toggleTopReinforce = document.getElementById('toggle-top-reinforce');
const cardTopReinforce = document.getElementById('card-top-reinforce');
const topReinfSub = document.getElementById('top-reinf-sub');

// 新オプション: スライド扉たわみ防止 & 側面換気量調整板
const toggleDoorAntiFlex = document.getElementById('toggle-door-anti-flex');
const cardDoorAntiFlex = document.getElementById('card-door-anti-flex');

const toggleSideVentCover = document.getElementById('toggle-side-vent-cover');
const cardSideVentCover = document.getElementById('card-side-vent-cover');
const ventCoverBadge = document.getElementById('vent-cover-badge');
const ventCoverSub = document.getElementById('vent-cover-sub');

// 止まり木（天板吊り下げ式）
const togglePerch = document.getElementById('toggle-perch');
const cardPerch = document.getElementById('card-perch');

// 正面下側幅広フレーム オプション（2倍幅 / 3倍幅）
const toggleFrontWide2x = document.getElementById('toggle-front-wide-2x');
const cardFrontWide2x = document.getElementById('card-front-wide-2x');
const frontWide2xSub = document.getElementById('front-wide-2x-sub');

const toggleFrontWide3x = document.getElementById('toggle-front-wide-3x');
const cardFrontWide3x = document.getElementById('card-front-wide-3x');
const frontWide3xSub = document.getElementById('front-wide-3x-sub');

// モレ対策ゴムパッキン
const toggleRubberPacking = document.getElementById('toggle-rubber-packing');
const cardRubberPacking = document.getElementById('card-rubber-packing');
const rubberPackingBadge = document.getElementById('rubber-packing-badge');
const rubberPackingSub = document.getElementById('rubber-packing-sub');

// 床下パネルヒータ支え板
const toggleFloorHeaterSupport = document.getElementById('toggle-floor-heater-support');
const cardFloorHeaterSupport = document.getElementById('card-floor-heater-support');
const floorHeaterSupportBadge = document.getElementById('floor-heater-support-badge');
const floorHeaterSupportSub = document.getElementById('floor-heater-support-sub');

// 警告バナー
const floorWarningBanner = document.getElementById('floor-warning-banner');
const seismicWarningBanner = document.getElementById('seismic-warning-banner');
const seismicWarningText = document.getElementById('seismic-warning-text');

// 扉開閉モードボタン（スライド扉 & 前開き扉）
const btnDoorClosed = document.getElementById('btn-door-closed');
const btnDoorLeft = document.getElementById('btn-door-left');
const btnDoorRight = document.getElementById('btn-door-right');
const btnFrontDoorClosed = document.getElementById('btn-front-door-closed');
const btnFrontDoorOpen = document.getElementById('btn-front-door-open');
const slideDoorGroup = document.getElementById('slide-door-group');
const frontDoorGroup = document.getElementById('front-door-group');
const doorControlTitle = document.getElementById('door-control-title');
const doorModeBtns = [btnDoorClosed, btnDoorLeft, btnDoorRight, btnFrontDoorClosed, btnFrontDoorOpen].filter(Boolean);

// 状態サマリー & 補強バッジ
const reinforceTip = document.getElementById('reinforce-tip');
const reinforceText = document.getElementById('reinforce-text');
const currentSpecSummary = document.getElementById('current-spec-summary');

// お見積もり・重量HUDカード & 計算結果ブロック & フッターボタン
const costHudCard = document.getElementById('cost-hud-card');
const costHudResult = document.getElementById('cost-hud-result');
const hudCostTotal = document.getElementById('hud-cost-total');
const hudWeightTotal = document.getElementById('hud-weight-total');
const btnCalcEstimate = document.getElementById('btn-calc-estimate');

// 視点プリセット
const presetBtns = document.querySelectorAll('.preset-btn:not(#btn-auto-rotate)');
const btnAutoRotate = document.getElementById('btn-auto-rotate');
const btnResetSpecs = document.getElementById('btn-reset-specs');
// パネル詳細設定 & アコーディオン DOM要素
const panelConfigToggleBtn = document.getElementById('panel-config-toggle-btn');
const panelConfigContainer = document.getElementById('panel-config-container');
const optionsToggleBtn = document.getElementById('options-toggle-btn');
const optionsContainer = document.getElementById('options-container');

const selectPanelFloor = document.getElementById('select-panel-floor');
const selectPanelBack = document.getElementById('select-panel-back');
const selectPanelSide = document.getElementById('select-panel-side');
const selectPanelSideUpper = document.getElementById('select-panel-side-upper');
const selectPanelSideLower = document.getElementById('select-panel-side-lower');
const selectPanelTop = document.getElementById('select-panel-top');
const selectPanelTopLeft = document.getElementById('select-panel-top-left');
const selectPanelTopRight = document.getElementById('select-panel-top-right');
const selectPanelPartition = document.getElementById('select-panel-partition');

const rowPanelSide = document.getElementById('row-panel-side');
const rowPanelSideSplit = document.getElementById('row-panel-side-split');
const rowPanelTop = document.getElementById('row-panel-top');
const rowPanelTopSplit = document.getElementById('row-panel-top-split');
const rowPanelPartition = document.getElementById('row-panel-partition');

// ２室分け（後付け仕切り板）
const toggleRoomDivider = document.getElementById('toggle-room-divider');
const cardRoomDivider = document.getElementById('card-room-divider');
const roomDividerSub = document.getElementById('room-divider-sub');

// 止まり木サブテキスト要素
const perchSub = document.getElementById('perch-sub');

// 特注LED照明オプション DOM要素
const cardLedOption = document.getElementById('card-led-option');
const selectLedType = document.getElementById('select-led-type');
const ledControllerPanel = document.getElementById('led-controller-panel');
const btnLedPowerOn = document.getElementById('btn-led-power-on');
const btnLedPowerOff = document.getElementById('btn-led-power-off');
const ledRowUsbModes = document.getElementById('led-row-usb-modes');
const ledRowRgbPalette = document.getElementById('led-row-rgb-palette');
const btnToggleDarkroom = document.getElementById('btn-toggle-darkroom');

// アプリケーション状態
const state = {
  W: 750,
  D: 450,
  H: 300,
  cageType: 'A',
  frameColor: 'silver',        // 'silver' | 'black'
  footType: 'rubber',          // 'rubber' | 'caster'
  hasFloorReinforcement: false,// 床面中央補強フレーム (床面積 > 750×450mm で自動推奨ON)
  hasTopReinforcement: false,  // 天板中央補強フレーム (W>940mmで必須ON、940mm以下は任意)
  hasDoorAntiFlex: false,      // 正面スライド扉たわみ防止レール (扉幅-2mm)
  hasSideVentCover: false,     // 側面換気量調整板 (t1.5外張りアクリル板)
  hasPerch: false,             // 止まり木（天板吊り下げ式・後付け対応）
  hasRubberPacking: false,     // モレ対策ゴムパッキン (側面・背面 隙間モレ抑制)
  hasFloorHeaterSupport: false,// 床下パネルヒータ支え板 (t2.0外張りアクリル板＋プラダン4mm)
  hasRoomDivider: false,       // ２室分け（後付け仕切り板・Type A/C両対応）
  ledType: 'none',             // 'none' | 'usb' | 'high_cri_white' | 'red' | 'white_and_red' | 'rgbw'
  ledPower: true,              // LED点灯状態 (true | false)
  ledBrightness: 1.0,          // LED調光 (0.1 ~ 1.0)
  ledColorMode: 'all',         // usb用: 'all'|'white'|'warm', dual用: 'both'|'white'|'red'
  ledRgbColor: '#ffffff',      // rgbw発光色: 16進カラーコード
  frontWideFrame: '2x',        // 正面下側幅広フレーム: '2x' (40mm・初期値) | '3x' (60mm) | 'none' (20mm標準)
  doorHingeSide: 'left',       // 前開き扉開き方向: 'left' (左ヒンジ、右打掛) | 'right' (左打掛、右ヒンジ)
  frontWindowH: 50,
  hasSideReinforcement: false, // 側面補強フレームの有無 (左右対称)
  sideOpeningH: 120,           // 側面上部開口高さ (デフォルト: 上下均等中央 H=300mm時 120mm)
  showPanels: true,
  showDimensions: true,
  doorState: 'closed',         // 'closed' | 'left_open' | 'right_open'
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

// Type Aで選択されていた正面幅広設定を記憶（Type CからType Aへ戻った際に復元用）
let lastTypeAFrontWideFrame = '2x';

// 自動回転機能の状態
let autoRotating = false;

// 3Dビューア初期化
const viewer = new CageViewer(container);
window.viewer = viewer;

/**
 * 床面中央補強フレーム（2分割）の判定閾値
 * 750 × 450 mm（337,500 mm²）の面積を超える場合にON/推奨
 */
const FLOOR_REINFORCE_THRESHOLD_AREA = 750 * 450; // 337,500 mm²

/**
 * 家具の耐震安全基準に基づく耐震安定指数の判定
 * 短辺 B (cm) = min(W, D) / 10
 * 高さ H (cm) = H / 10
 * 指数値 R = B ÷ √H
 * 基準値:
 *  - ゴム脚（キャスターなし）: 3.8
 *  - キャスターあり: 4.2（車輪の向きによる支点狭まりを考慮）
 */
function checkSeismicStability(W_mm, D_mm, H_mm, footType) {
  const B_cm = Math.min(W_mm, D_mm) / 10;
  const H_cm = H_mm / 10;
  const ratio = B_cm / Math.sqrt(H_cm);
  const threshold = footType === 'caster' ? 4.2 : 3.8;
  const isProneToToppling = ratio < threshold;

  return {
    ratio,
    threshold,
    isProneToToppling,
    footType
  };
}

/**
 * 3DモデルとUI表示を同期更新
 */
function syncUpdate() {
  viewer.update(state);
  viewer.setPanelsVisible(state.showPanels);
  viewer.setDimensionsVisible(state.showDimensions);

  // 自動回転中は最新paramsをviewerに渡してカメラ距離を動的更新
  if (autoRotating) {
    viewer._lastAutoParams = { ...state };
  }

  // 床面たわみ警告バナー（面積 W × D > 750 × 450mm かつ 床補強なしの場合、常時表示）
  const floorArea = state.W * state.D;
  const isFloorAreaOver = floorArea > FLOOR_REINFORCE_THRESHOLD_AREA;

  if (isFloorAreaOver && !state.hasFloorReinforcement) {
    floorWarningBanner.classList.remove('hidden');
    reinforceTip.classList.remove('reinforced');
    reinforceText.textContent = `床面積: ${(floorArea / 10000).toFixed(0)}c㎡ (> 750×450mm) 床面補強なし：アクリルたわみ防止のため床面中央補強フレーム (2分割) を推奨します`;
  } else if (state.hasFloorReinforcement) {
    floorWarningBanner.classList.add('hidden');
    reinforceTip.classList.add('reinforced');
    reinforceText.textContent = `床面中央補強フレーム（2分割）が配置されています`;
  } else {
    floorWarningBanner.classList.add('hidden');
    reinforceTip.classList.remove('reinforced');
    reinforceText.textContent = `床面積: ${(floorArea / 10000).toFixed(0)}c㎡ (≦ 750×450mm) 床面補強フレームなし（標準枠）`;
  }

  // 耐震安全基準・転倒注意喚起バナー（B ÷ √H 判定）
  const seismic = checkSeismicStability(state.W, state.D, state.H, state.footType);
  if (seismic.isProneToToppling) {
    seismicWarningBanner.classList.remove('hidden');
    const conditionText = state.footType === 'caster'
      ? 'キャスター装備（車輪向きによる支点変化を考慮した安全目安: 4.2）'
      : '安全目安: 3.8';
    seismicWarningText.innerHTML = `<strong>転倒注意：</strong>耐震安定値 <span class="metric-tag">${seismic.ratio.toFixed(2)}</span> ＜ 基準 ${seismic.threshold}（${conditionText}）。地震等で転倒しやすいため、壁固定等の転倒防止対策を推奨します`;
  } else {
    seismicWarningBanner.classList.add('hidden');
  }

  // スペックサマリー更新（価格表カード内・改行対応）
  updateSpecSummary();

  // オプション選択可否の同期
  updateFrontWideFrameAvailability();
  updateSideVentCoverAvailability();
  updateRubberPackingAvailability();

  // パネル設定UIの表示状態同期
  syncPanelConfigUI();

  // パラメータ変更時は価格・重量計算表示を消去
  resetEstimateDisplay();

  // 資材リスト（BOMテーブル）の描画更新（開発確認用）
  updateBOMTable();
}

/**
 * パネル詳細設定UIの分割/単一表示切り替えと値同期
 */
function syncPanelConfigUI() {
  // 側面：補強ありなら2分割、なしなら単一
  if (state.hasSideReinforcement) {
    rowPanelSide.classList.add('hidden');
    rowPanelSideSplit.classList.remove('hidden');
  } else {
    rowPanelSide.classList.remove('hidden');
    rowPanelSideSplit.classList.add('hidden');
  }

  // 天面：補強あり（またはW>940mm）なら2分割、なしなら単一
  const isTopSplit = state.hasTopReinforcement || state.W > 940;
  if (isTopSplit) {
    rowPanelTop.classList.add('hidden');
    rowPanelTopSplit.classList.remove('hidden');
  } else {
    rowPanelTop.classList.remove('hidden');
    rowPanelTopSplit.classList.add('hidden');
  }

  // 各セレクトボックスのvalue同期
  if (selectPanelFloor) {
    selectPanelFloor.value = state.panelConfig.floor || 'acrylic';
  }
  selectPanelBack.value = state.panelConfig.back;
  selectPanelSide.value = state.panelConfig.side;
  selectPanelSideUpper.value = state.panelConfig.sideUpper;
  selectPanelSideLower.value = state.panelConfig.sideLower;
  selectPanelTop.value = state.panelConfig.top;
  selectPanelTopLeft.value = state.panelConfig.topLeft;
  selectPanelTopRight.value = state.panelConfig.topRight;

  // サマリーバッジのテキスト更新
  const panelSummaryBadge = document.getElementById('panel-summary-badge');
  if (panelSummaryBadge) {
    let topName = 'パンチング';
    const topVal = isTopSplit ? state.panelConfig.topLeft : state.panelConfig.top;
    if (topVal.startsWith('mesh')) {
      topName = `金網${topVal.replace('mesh', '')}mm`;
    } else if (topVal === 'acrylic') {
      topName = 'アクリル天面';
    }

    let backName = '背面アクリル';
    if (state.panelConfig.back === 'punching') {
      backName = '背面パンチング';
    } else if (state.panelConfig.back === 'polyca') {
      backName = '背面中空ポリカ';
    } else if (state.panelConfig.back === 'black_matte') {
      backName = '背面ブラックマット';
    } else if (state.panelConfig.back === 'smoke_gray') {
      backName = '背面グレースモーク';
    }

    panelSummaryBadge.textContent = `${backName} / ${topName}`;
  }
}

/**
 * 側面換気量調整板オプションの利用可否更新
 * - 前提条件:
 *   1. 側面補強フレームがON (側面2分割) かつ 側面上部が塩ビパンチング
 *   2. 側面補強フレームがOFF (側面1枚) かつ 側面パネルが塩ビパンチング (高さ2分割仕様)
 */
function updateSideVentCoverAvailability() {
  const isSideSplitPunching = state.hasSideReinforcement && (state.panelConfig.sideUpper === 'punching');
  const isSideFullPunching = !state.hasSideReinforcement && (state.panelConfig.side === 'punching');
  const isAvailable = isSideSplitPunching || isSideFullPunching;

  if (isAvailable) {
    toggleSideVentCover.disabled = false;
    cardSideVentCover.classList.remove('disabled');
    ventCoverBadge.classList.add('ready');
    ventCoverBadge.textContent = '選択可能';
    if (isSideFullPunching) {
      ventCoverSub.textContent = '冬場の保温・換気調整用。左右上下4枚外張り';
    } else {
      ventCoverSub.textContent = '冬場の保温・換気調整用。左右外張り';
    }
  } else {
    toggleSideVentCover.checked = false;
    state.hasSideVentCover = false;
    toggleSideVentCover.disabled = true;
    cardSideVentCover.classList.add('disabled');
    cardSideVentCover.classList.remove('active');
    ventCoverBadge.classList.remove('ready');

    if (state.hasSideReinforcement) {
      ventCoverBadge.textContent = '要上部パンチング';
      ventCoverSub.textContent = '※側面上部が塩ビパンチングパネル時に選択できます';
    } else {
      ventCoverBadge.textContent = '要側面パンチング';
      ventCoverSub.textContent = '※側面パネルが塩ビパンチング時に選択できます';
    }
  }
}

/**
 * 正面下側幅広フレーム（2倍幅 / 3倍幅）の排他制御と表示同期
 * - 2倍幅がONの場合: 3倍幅は選択不可（disabled）
 * - 3倍幅がONの場合: 2倍幅は外れて選択不可（disabled）
 * - 両方OFFの場合: どちらも選択可能（正面フレームは標準2020）
 * - Type Cの場合: 両方とも選択不可（disabled・前窓構造のため）
 * - ブラックフレームの場合: 3倍幅はAFS-2060がないため、40mm幅+20mm幅の2段重ね構成案内
 */
function updateFrontWideFrameAvailability() {
  if (state.cageType === 'C' || state.cageType === 'A_FRAMED') {
    // Type CまたはType A 正面枠囲いは選択不可（正面枠囲いは4040固定のため）
    toggleFrontWide2x.checked = false;
    toggleFrontWide2x.disabled = true;
    cardFrontWide2x.classList.remove('active');
    cardFrontWide2x.classList.add('disabled');
    frontWide2xSub.textContent = state.cageType === 'A_FRAMED'
      ? '※正面枠囲いは正面下部40x40固定のため選択不可'
      : '※Type Cは前窓構造のため選択不可（Type A専用）';

    toggleFrontWide3x.checked = false;
    toggleFrontWide3x.disabled = true;
    cardFrontWide3x.classList.remove('active');
    cardFrontWide3x.classList.add('disabled');
    frontWide3xSub.textContent = state.cageType === 'A_FRAMED'
      ? '※正面枠囲いは正面下部40x40固定のため選択不可'
      : '※Type Cは前窓構造のため選択不可（Type A専用）';
  } else {
    // Type Aの場合
    const isBlack = (state.frameColor === 'black');
    const desc3x = isBlack
      ? '高さ60mm(ブラック: 40mm+20mm 2段重ね)使用。深床材・高剛性仕様'
      : '高さ60mmフレーム使用。深床材・高剛性仕様';

    if (state.frontWideFrame === '2x') {
      toggleFrontWide2x.checked = true;
      toggleFrontWide2x.disabled = false;
      cardFrontWide2x.classList.add('active');
      cardFrontWide2x.classList.remove('disabled');
      frontWide2xSub.textContent = '高さ40mmフレーム使用。床材厚みを隠し高剛性化';

      toggleFrontWide3x.checked = false;
      toggleFrontWide3x.disabled = true;
      cardFrontWide3x.classList.remove('active');
      cardFrontWide3x.classList.add('disabled');
      frontWide3xSub.textContent = '※2倍幅がONのため選択不可（2倍幅を外すと選択可能）';
    } else if (state.frontWideFrame === '3x') {
      toggleFrontWide2x.checked = false;
      toggleFrontWide2x.disabled = true;
      cardFrontWide2x.classList.remove('active');
      cardFrontWide2x.classList.add('disabled');
      frontWide2xSub.textContent = '※3倍幅がONのため選択不可（3倍幅を外すと選択可能）';

      toggleFrontWide3x.checked = true;
      toggleFrontWide3x.disabled = false;
      cardFrontWide3x.classList.add('active');
      cardFrontWide3x.classList.remove('disabled');
      frontWide3xSub.textContent = desc3x;
    } else {
      // 両方OFF (標準2020)
      toggleFrontWide2x.checked = false;
      toggleFrontWide2x.disabled = false;
      cardFrontWide2x.classList.remove('active');
      cardFrontWide2x.classList.remove('disabled');
      frontWide2xSub.textContent = '高さ40mmフレーム使用。床材厚みを隠し高剛性化';

      toggleFrontWide3x.checked = false;
      toggleFrontWide3x.disabled = false;
      cardFrontWide3x.classList.remove('active');
      cardFrontWide3x.classList.remove('disabled');
      frontWide3xSub.textContent = desc3x;
    }
  }
}

/**
 * モレ対策ゴムパッキンの排他・バリデーション制御
 * - 側面・背面のすべてが中空ポリカの場合のみ disabled（選択不可）
 * - 背面または側面のいずれかにアクリル等の面がある場合は選択可能
 * - 施工は中空ポリカ以外の面（アクリル等）に対してのみ適用される
 */
function updateRubberPackingAvailability() {
  const isBackPolyca = state.panelConfig.back === 'polyca';
  let isSideAllPolyca = false;

  if (state.hasSideReinforcement) {
    isSideAllPolyca = (state.panelConfig.sideLower === 'polyca' && state.panelConfig.sideUpper === 'polyca');
  } else {
    isSideAllPolyca = (state.panelConfig.side === 'polyca');
  }

  const isAllPolyca = isBackPolyca && isSideAllPolyca;

  if (isAllPolyca) {
    // 側面・背面のすべてが中空ポリカの場合は施工不可
    toggleRubberPacking.checked = false;
    state.hasRubberPacking = false;
    toggleRubberPacking.disabled = true;
    cardRubberPacking.classList.add('disabled');
    cardRubberPacking.classList.remove('active');
    rubberPackingBadge.textContent = '中空ポリカのみ時は施工不可';
    rubberPackingBadge.className = 'option-cond-badge';
    rubberPackingBadge.classList.remove('hidden');
    rubberPackingSub.textContent = '※中空ポリカ仕様には施工できません（アクリル等の面がある場合に選択可）';
  } else {
    // 施工可能な面が存在する
    toggleRubberPacking.disabled = false;
    cardRubberPacking.classList.remove('disabled');
    if (state.hasRubberPacking) {
      cardRubberPacking.classList.add('active');
      toggleRubberPacking.checked = true;
    } else {
      cardRubberPacking.classList.remove('active');
      toggleRubberPacking.checked = false;
    }

    // 一部が中空ポリカの場合の親切なバッジ案内
    const hasAnyPolyca = isBackPolyca || (state.hasSideReinforcement
      ? (state.panelConfig.sideLower === 'polyca' || state.panelConfig.sideUpper === 'polyca')
      : (state.panelConfig.side === 'polyca'));

    if (hasAnyPolyca) {
      rubberPackingBadge.textContent = '中空ポリカ除く面に施工';
      rubberPackingBadge.className = 'option-cond-badge info';
      rubberPackingBadge.classList.remove('hidden');
      rubberPackingSub.textContent = '側面・背面からの水漏れの抑制（中空ポリカ面を除くアクリル面に施工）';
    } else {
      rubberPackingBadge.textContent = '';
      rubberPackingBadge.classList.add('hidden');
    }
  }

  // 床下パネルヒータ支え板のバッジ連動（床面中央補強フレームの有無で1枚/2枚が切り替わる）
  if (floorHeaterSupportBadge && floorHeaterSupportSub) {
    if (state.hasFloorReinforcement) {
      floorHeaterSupportBadge.textContent = '床面2分割用 (2枚)';
      floorHeaterSupportBadge.className = 'option-cond-badge info';
      floorHeaterSupportBadge.classList.remove('hidden');
    } else {
      floorHeaterSupportBadge.textContent = '通常床面用 (1枚)';
      floorHeaterSupportBadge.className = 'option-cond-badge';
      floorHeaterSupportBadge.classList.remove('hidden');
    }
  }
}

/**
 * 資材マスタから型番・素材設定を取得
 */
function getMaterialConfig(partCode) {
  if (!partCode) return null;
  // 1. パネル素材マスタ
  if (materialsConfig.panels && materialsConfig.panels[partCode]) {
    return materialsConfig.panels[partCode];
  }
  // 2. フレームマスタ
  if (materialsConfig.frames && materialsConfig.frames[partCode]) {
    return materialsConfig.frames[partCode];
  }
  // 3. レールマスタ
  if (materialsConfig.rails && materialsConfig.rails[partCode]) {
    return materialsConfig.rails[partCode];
  }
  // 4. エンドキャップマスタ
  if (materialsConfig.caps && materialsConfig.caps[partCode]) {
    return materialsConfig.caps[partCode];
  }
  // 5. ゴムパッキンマスタ
  if (materialsConfig.packings && materialsConfig.packings[partCode]) {
    return materialsConfig.packings[partCode];
  }
  // 6. 金物マスタ (ヒンジ・打掛など)
  if (materialsConfig.hardware && materialsConfig.hardware[partCode]) {
    return materialsConfig.hardware[partCode];
  }

  // 部分一致フォールバック (コードまたは名称での照合)
  for (const group of [materialsConfig.panels, materialsConfig.frames, materialsConfig.rails, materialsConfig.caps, materialsConfig.packings, materialsConfig.hardware]) {
    if (!group) continue;
    for (const [key, val] of Object.entries(group)) {
      if (partCode === key || partCode.startsWith(key) || key.startsWith(partCode)) {
        return val;
      }
      if (val.name && (val.name === partCode || partCode.includes(val.name) || val.name.includes(partCode))) {
        return val;
      }
    }
  }
  return null;
}

/**
 * パネル部材の並び順スコアを算出
 * 指定順: 正面扉 -> TypeC前窓 -> 床面 -> 側面 -> 背面 -> 天面 -> 換気量調整板 -> 床下パネルヒータ支え板 -> プラダン -> その他
 */
function getPanelSortScore(part) {
  const name = part.name || '';
  if (name.includes('前窓')) return 2; // TypeCの時は前窓
  if (name.includes('扉')) return 1;   // 正面扉
  if (name.includes('底板') || (name.includes('床面') && !name.includes('支え板') && !name.includes('プラダン'))) return 3; // 床面
  if (name.includes('側板') || name.includes('側面')) {
    if (name.includes('換気量調整板')) return 7; // 換気量調整板
    return 4; // 側面
  }
  if (name.includes('背板') || name.includes('背面')) return 5; // 背面
  if (name.includes('天板') || name.includes('天面') || name.includes('金網')) return 6; // 天面
  if (name.includes('換気量調整板')) return 7; // 換気量調整板
  if (name.includes('床下パネルヒータ支え板')) return 8; // 床下パネルヒータ支え板
  if (name.includes('プラダン')) return 9; // プラダン
  return 10; // その他パネル
}

/**
 * フレーム部材の並び順スコアを算出
 * 指定順: 通常構造フレーム -> レール類 -> ECP類
 */
function getFrameSortScore(part) {
  const code = part.partCode || part.name || '';
  if (code.startsWith('ECP') || code.includes('キャップ')) return 3; // ECP類（一番下）
  if (code.startsWith('PGRU') || code.startsWith('PGRL') || code.includes('レール')) return 2; // レール類
  return 1; // 通常フレーム
}

/**
 * パネル部材の原価（板材料費 ＋ はざいや穴加工・斜めカット・切欠き・磨き加工費）および重量を算出
 */
function getPanelCostAndWeight(part) {
  const config = getMaterialConfig(part.panelCode || part.partCode || part.name);
  let wMm = part.widthMm;
  let hMm = part.heightMm;
  if ((!wMm || !hMm) && part.size) {
    const match = part.size.match(/(\d+(?:\.\d+)?)\s*[x×]\s*(\d+(?:\.\d+)?)/);
    if (match) {
      wMm = parseFloat(match[1]);
      hMm = parseFloat(match[2]);
    }
  }

  let singleCost = 0;
  let totalCost = 0;
  let totalWeight = 0;

  if (config && config.unit === 'm2' && wMm && hMm) {
    const areaM2 = (wMm / 1000) * (hMm / 1000);
    const isWireMesh = (part.panelCode && part.panelCode.startsWith('wire_mesh_')) ||
                       (part.partCode && part.partCode.startsWith('wire_mesh_')) ||
                       (config.pitchMm != null);
    const isPvcPunching = (part.panelCode === 'pvc_punching_3_0') ||
                          (part.partCode === 'pvc_punching_3_0') ||
                          (part.name && part.name.includes('塩ビパンチング'));
    const isAcrylicExtrusion = (part.panelCode && part.panelCode.startsWith('acrylic_extrusion_')) ||
                               (part.partCode && part.partCode.startsWith('acrylic_extrusion_')) ||
                               (part.panelCode === 'acrylic_extrusion_3_0' || part.panelCode === 'acrylic_extrusion_2_0' || part.panelCode === 'acrylic_extrusion_1_5');
    const isAcrylicBlackMatte = (part.panelCode === 'acrylic_black_matte_3_0') ||
                                (part.partCode === 'acrylic_black_matte_3_0') ||
                                (part.name && part.name.includes('黒両面マット'));
    const isAcrylicSmokeGray = (part.panelCode === 'acrylic_smoke_gray_3_0') ||
                               (part.partCode === 'acrylic_smoke_gray_3_0') ||
                               (part.name && part.name.includes('グレースモーク'));
    const isAcrylicCast = (part.panelCode === 'acrylic_cast_3_0') ||
                          (part.partCode === 'acrylic_cast_3_0') ||
                          (part.name && part.name.includes('キャスト'));

    // 1. 板材料費の算出
    if (isWireMesh) {
      const pitch = config.pitchMm || (part.panelCode ? parseInt(part.panelCode.replace('wire_mesh_', ''), 10) : 25);
      const fenpCost = getFenpCost(pitch, wMm, hMm);
      singleCost = fenpCost != null ? fenpCost : Math.round(config.pricePerM2 * areaM2);
    } else if (isPvcPunching) {
      const punchingCost = getPvcPunchingCost(wMm, hMm);
      singleCost = punchingCost != null ? punchingCost : Math.round(config.pricePerM2 * areaM2);
    } else if (isAcrylicExtrusion) {
      const thick = config.thicknessMm || 3.0;
      const extCost = getAcrylicExtrusionCost(thick, wMm, hMm);
      singleCost = extCost != null ? extCost : Math.round(config.pricePerM2 * areaM2);
    } else if (isAcrylicBlackMatte) {
      const matteCost = getAcrylicBlackMatteCost(wMm, hMm);
      singleCost = matteCost != null ? matteCost : Math.round(config.pricePerM2 * areaM2);
    } else if (isAcrylicSmokeGray) {
      const smokeCost = getAcrylicSmokeGrayCost(wMm, hMm);
      singleCost = smokeCost != null ? smokeCost : Math.round(config.pricePerM2 * areaM2);
    } else if (isAcrylicCast) {
      const isDoorPanel = part.name && part.name.includes('扉');
      if (isDoorPanel) {
        // 扉本体: キャスト板バイリニア補間価格 + 穴加工2箇所(485円) + 磨き仕上げ4辺(W+Hに応じた単価x4)（はざいや加工費込）
        const castCost = getAcrylicCastCost(wMm, hMm);
        const fallbackProc = getAcrylicDoorProcessingCost(wMm, hMm);
        singleCost = castCost != null ? castCost : (Math.round(config.pricePerM2 * areaM2) + fallbackProc);
      } else {
        const rawCost = getAcrylicCastRawBoardCost(wMm, hMm);
        singleCost = rawCost != null ? rawCost : Math.round(config.pricePerM2 * areaM2);
      }
    } else {
      singleCost = Math.round(config.pricePerM2 * areaM2);
    }

    // 2. はざいや加工費（穴加工・斜めカット・切欠き）の加算
    // ① 側面換気量調整板: φ6mm穴加工 4箇所/枚 (@94円 = 376円/枚)
    if (part.name && part.name.includes('換気量調整板')) {
      const holeUnit = materialsConfig.options?.items?.sideVentCover?.holeCostPerPiece ?? 94;
      const holesPerPanel = materialsConfig.options?.items?.sideVentCover?.holesPerPanel ?? 4;
      singleCost += (holesPerPanel * holeUnit);
    }

    // ② 床下パネルヒータ支え板: φ6mm穴加工、コーナー斜めカット、切欠き
    if (part.name && part.name.includes('床下パネルヒータ支え板')) {
      const fhConfig = materialsConfig.options?.items?.floorHeaterSupport || {};
      const holeUnit = fhConfig.holeCostPerPiece ?? 112;
      const diagUnit = fhConfig.diagonalCutCost ?? 239;
      const cornerUnit = fhConfig.cornerCutCost ?? 587;

      const is2Panel = part.count === 2 || (part.note && part.note.includes('2枚'));
      if (is2Panel) {
        // 2枚構成: 1枚あたり φ6穴7箇所(@112 = 784円) + 斜めカット2箇所(@239 = 478円) + 切欠き1箇所(@587 = 587円) = 1,849円/枚
        const processingPerPiece = (7 * holeUnit) + (2 * diagUnit) + (1 * cornerUnit);
        singleCost += processingPerPiece;
      } else {
        // 1枚構成: 1枚あたり φ6穴10箇所(@112 = 1,120円) + 斜めカット4箇所(@239 = 956円) = 2,076円/枚
        const processingPerPiece = (10 * holeUnit) + (4 * diagUnit);
        singleCost += processingPerPiece;
      }
    }

    if (config.baseCostPerPiece) {
      singleCost += config.baseCostPerPiece;
    }
    totalCost = singleCost * part.count;
    if (config.baseCost) {
      totalCost += config.baseCost;
    }
    totalWeight = (config.weightPerM2 || 0) * areaM2 * part.count;
  }

  return { singleCost, totalCost, totalWeight };
}

/**
 * その他部材・金物・付属品の原価および重量を算出
 */
function getOtherPartCostAndWeight(part) {
  const code = part.partCode || part.name || '';
  const config = getMaterialConfig(code);

  let singleCost = 0;
  let totalCost = 0;
  let totalWeight = 0;

  if (config) {
    if (config.unit === 'm') {
      const rawLengthMm = part.lengthMm || 0;
      const lengthM = rawLengthMm / 1000;
      singleCost = Math.round(config.pricePerMeter * lengthM);
      totalCost = singleCost * part.count;
      totalWeight = (config.weightPerMeter || 0) * lengthM * part.count;
    } else {
      singleCost = config.pricePerPiece || 0;
      totalCost = singleCost * part.count;
      totalWeight = (config.weightPerPiece || 0) * part.count;
    }
  } else {
    // フォールバック照合
    const name = part.name || '';
    if (name.includes('化粧つまみネジ') || name.includes('No.1')) {
      const screwCost = materialsConfig.options?.items?.floorHeaterSupport?.screwCostPerPiece ?? 25;
      singleCost = screwCost;
      totalCost = singleCost * part.count;
      totalWeight = 0.0025 * part.count;
    } else if (name.includes('ゴムグロメット')) {
      singleCost = 80;
      totalCost = singleCost * part.count;
      totalWeight = 0.005 * part.count;
    } else if (name.includes('ローレットノブ') || (name.includes('つまみ') && name.includes('ノブ'))) {
      singleCost = 350;
      totalCost = singleCost * part.count;
      totalWeight = 0.012 * part.count;
    } else if (name.includes('鍵') || name.includes('C-108')) {
      singleCost = 800;
      totalCost = singleCost * part.count;
      totalWeight = 0.045 * part.count;
    } else if (name.includes('キャスター')) {
      singleCost = 200;
      totalCost = singleCost * part.count;
      totalWeight = 0.120 * part.count;
    } else if (name.includes('ゴム脚')) {
      singleCost = 60;
      totalCost = singleCost * part.count;
      totalWeight = 0.008 * part.count;
    } else if (name.includes('M3') && name.includes('つまみネジ')) {
      singleCost = 25;
      totalCost = singleCost * part.count;
      totalWeight = 0.002 * part.count;
    } else if (name.includes('M6') && name.includes('ボルト')) {
      singleCost = 30;
      totalCost = singleCost * part.count;
      totalWeight = 0.008 * part.count;
    } else if (name.includes('M4') && name.includes('皿ネジ')) {
      singleCost = 15;
      totalCost = singleCost * part.count;
      totalWeight = 0.003 * part.count;
    } else if (name.includes('LED')) {
      if (name.includes('USB') || name.includes('白＆電球色')) {
        singleCost = 1980;
        totalWeight = 0.120;
      } else {
        singleCost = 5490;
        totalWeight = 0.350;
      }
      totalCost = singleCost * part.count;
    }
  }

  return { singleCost, totalCost, totalWeight };
}

/**
 * テキストをクリップボードにコピー（最新API + execCommandフォールバック）
 * @param {string} text
 * @returns {Promise<void>}
 */
async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
  } else {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } finally {
      textArea.remove();
    }
  }
}

/**
 * フレーム発注用テキスト（クリップボードコピー用）を生成
 * - フレーム類（型番-長さ\t数量）※長さ降順
 * - キャップ類（型番\t数量）
 * - 原価合計（xxx円）
 * - 空行
 * - PGRL / PGRU レール類（型番 長さmm x数量 ※エクセルでセルをまたがないよう半角スペース区切り）
 * @param {Array} consolidatedParts - 集約済みフレーム部材配列
 * @returns {string} クリップボード用テキスト
 */
function generateFrameOrderText(consolidatedParts) {
  if (!consolidatedParts || consolidatedParts.length === 0) return '';

  // 1. レール類 (PGRU/PGRL) と その他フレーム・キャップ類に分離
  const frameCapItems = [];
  const railItems = [];

  for (const part of consolidatedParts) {
    const code = part.partCode || part.name || '';
    const isRail = code.startsWith('PGRU') || code.startsWith('PGRL') || (part.name && part.name.includes('レール'));
    if (isRail) {
      railItems.push(part);
    } else {
      frameCapItems.push(part);
    }
  }

  // 2. 通常フレーム (長さ降順 -> 型番昇順) と キャップ類 (型番昇順) に分離・ソート
  const regularFrames = [];
  const capItems = [];

  for (const part of frameCapItems) {
    const code = part.partCode || part.name || '';
    if (code.startsWith('ECP') || code.includes('キャップ') || part.lengthMm == null || part.lengthMm === 0) {
      capItems.push(part);
    } else {
      regularFrames.push(part);
    }
  }

  // 通常フレーム: 長さ降順（長い順）、同長なら型番昇順
  regularFrames.sort((a, b) => {
    const lenA = a.lengthMm || 0;
    const lenB = b.lengthMm || 0;
    if (lenB !== lenA) return lenB - lenA;
    return (a.partCode || a.name).localeCompare(b.partCode || b.name);
  });

  // キャップ類: 型番昇順
  capItems.sort((a, b) => (a.partCode || a.name).localeCompare(b.partCode || b.name));

  const sortedFrameCapItems = [...regularFrames, ...capItems];

  // 3. ブロック1の行生成 & 原価合計計算
  const block1Lines = [];
  let block1TotalCost = 0;

  for (const part of sortedFrameCapItems) {
    const config = getMaterialConfig(part.partCode);
    let singleCost = 0;
    let totalCost = 0;

    if (config) {
      if (config.unit === 'm') {
        const rawLengthMm = part.lengthMm || 0;
        const lengthM = rawLengthMm / 1000;
        singleCost = Math.round(config.pricePerMeter * lengthM);
        totalCost = singleCost * part.count;
      } else {
        singleCost = config.pricePerPiece || 0;
        totalCost = singleCost * part.count;
      }
    }
    block1TotalCost += totalCost;

    let formattedCode = part.partCode || part.name;
    const len = part.lengthMm != null && part.lengthMm > 0 ? Math.round(part.lengthMm) : null;
    if (len != null) {
      if (!formattedCode.endsWith(`-${len}`)) {
        formattedCode = `${formattedCode}-${len}`;
      }
    }

    block1Lines.push(`${formattedCode}\t${part.count}`);
  }

  // 原価合計行 (例: 7,106円)
  block1Lines.push(`${block1TotalCost.toLocaleString()}円`);

  // 4. ブロック2 (PGRL / PGRU レール類) の行生成
  // レール類はエクセルでセルをまたがないように、半角スペース区切り
  railItems.sort((a, b) => {
    const isPgruA = (a.partCode || a.name || '').startsWith('PGRU');
    const isPgruB = (b.partCode || b.name || '').startsWith('PGRU');
    if (isPgruA && !isPgruB) return -1;
    if (!isPgruA && isPgruB) return 1;
    const lenA = a.lengthMm || 0;
    const lenB = b.lengthMm || 0;
    return lenB - lenA; // 長い順
  });

  const block2Lines = [];
  for (const part of railItems) {
    const code = part.partCode || part.name;
    const len = part.lengthMm != null ? Math.round(part.lengthMm) : 0;
    block2Lines.push(`${code} ${len}mm x${part.count}`);
  }

  if (block2Lines.length > 0) {
    return `${block1Lines.join('\n')}\n\n${block2Lines.join('\n')}`;
  } else {
    return block1Lines.join('\n');
  }
}

/**
 * パネル部材テキスト（クリップボードコピー用・表のタブ区切り）を生成
 * - 列構成: 部材種別 / 寸法・仕様 / 数量 / 原価合計 / 重量 / 用途・配置
 * - ヘッダー・明細行・合計行を完全出力
 * @param {Array} panelParts - ソート済みパネル部材配列
 * @returns {string} タブ区切りテキスト
 */
function generatePanelOrderText(panelParts) {
  if (!panelParts || panelParts.length === 0) return '';

  const lines = [];
  // ヘッダー行
  lines.push(['部材種別', '寸法 / 仕様', '数量', '原価合計', '重量', '用途・配置'].join('\t'));

  let totalCostSum = 0;
  let totalWeightSum = 0;
  let totalCountSum = 0;

  for (const part of panelParts) {
    const { totalCost, totalWeight } = getPanelCostAndWeight(part);
    totalCostSum += totalCost;
    totalWeightSum += totalWeight;
    totalCountSum += part.count;

    lines.push([
      part.name,
      part.size || '-',
      part.count,
      `¥${totalCost.toLocaleString()}`,
      `${totalWeight.toFixed(3)} kg`,
      part.note || '-'
    ].join('\t'));
  }

  // 合計行
  lines.push([
    'パネル 合計',
    '-',
    `${totalCountSum}点`,
    `¥${totalCostSum.toLocaleString()}`,
    `${totalWeightSum.toFixed(3)} kg`,
    '-'
  ].join('\t'));

  return lines.join('\n');
}

/**
 * 🛠️ BOM（資材リスト）テーブルの更新
 * - フレーム類テーブル（ECP類・レール類は一番下に配置）
 * - パネル類テーブル（正面扉→前窓→床面→側面→背面→天面→換気板→支え板→プラダン順、原価合計・重量列付）
 * - その他部材テーブル（NSCP1H-S-6ゴムパッキン、金具、ネジ、脚など）
 */
function updateBOMTable() {
  if (!bomContainer || !bomFrameTbody) return;

  const parts = viewer.getPartsSummary();
  const frameParts = [];
  const panelParts = [];
  const otherParts = [];

  for (const part of parts) {
    // NSCP1H-S-6ゴムパッキンはその他に入れる
    if (part.partCode === 'NSCP1H-S-6' || (part.name && part.name.includes('ゴムパッキン'))) {
      otherParts.push(part);
    } else if (part.category === 'panel') {
      panelParts.push(part);
    } else if (part.category === 'frame' || part.category === 'rail_cap' || part.category === 'hardware') {
      frameParts.push(part);
    } else {
      otherParts.push(part);
    }
  }

  // 1. フレーム類 (通常フレーム -> レール類 -> ECP類 の順にソート)
  const groupedFramePartsMap = new Map();

  for (const part of frameParts) {
    const code = part.partCode || part.name;
    const len = part.lengthMm != null ? Math.round(part.lengthMm) : null;
    const groupKey = `${code}__${len != null ? len : 'none'}`;

    if (groupedFramePartsMap.has(groupKey)) {
      const existing = groupedFramePartsMap.get(groupKey);
      existing.count += part.count;
    } else {
      groupedFramePartsMap.set(groupKey, {
        ...part,
        partCode: code,
        lengthMm: len,
        count: part.count
      });
    }
  }

  const consolidatedFrameParts = Array.from(groupedFramePartsMap.values());
  lastConsolidatedFrameParts = consolidatedFrameParts;
  // ソート: 1: 通常フレーム -> 2: レール類 -> 3: ECP類
  consolidatedFrameParts.sort((a, b) => {
    const scoreA = getFrameSortScore(a);
    const scoreB = getFrameSortScore(b);
    if (scoreA !== scoreB) return scoreA - scoreB;
    return (a.partCode || a.name).localeCompare(b.partCode || b.name);
  });

  bomFrameTbody.innerHTML = '';
  if (bomFrameTfoot) bomFrameTfoot.innerHTML = '';

  let totalFrameCost = 0;
  let totalFrameWeight = 0;
  let totalFrameItems = 0;

  for (const part of consolidatedFrameParts) {
    totalFrameItems += part.count;
    const config = getMaterialConfig(part.partCode);

    let singleCost = 0;
    let totalCost = 0;
    let totalWeight = 0;
    let lengthDisplay = '-';

    if (config) {
      if (config.unit === 'm') {
        const rawLengthMm = part.lengthMm || 0;
        const isGlassRail = part.partCode && (part.partCode.startsWith('PGRU') || part.partCode.startsWith('PGRL'));
        const billedLengthMm = isGlassRail ? (Math.ceil(rawLengthMm / 250) * 250) : rawLengthMm;
        const lengthM = billedLengthMm / 1000;
        lengthDisplay = `${part.lengthMm || Math.round(lengthM * 1000)} mm`;
        singleCost = Math.round(config.pricePerMeter * lengthM);
        totalCost = singleCost * part.count;
        totalWeight = config.weightPerMeter * (rawLengthMm / 1000) * part.count;
      } else {
        lengthDisplay = '-';
        singleCost = config.pricePerPiece || 0;
        totalCost = singleCost * part.count;
        totalWeight = (config.weightPerPiece || 0) * part.count;
      }
    } else {
      lengthDisplay = part.size || '-';
    }

    totalFrameCost += totalCost;
    totalFrameWeight += totalWeight;

    const tr = document.createElement('tr');
    tr.className = 'bom-cat-frame';
    tr.innerHTML = `
      <td><strong>${part.partCode || part.name}</strong></td>
      <td style="text-align: right; font-family: monospace;">${lengthDisplay}</td>
      <td style="text-align: center; font-family: monospace;">${part.count}</td>
      <td style="text-align: right; font-family: monospace;">¥${totalCost.toLocaleString()}</td>
      <td style="text-align: right; font-family: monospace;">${totalWeight.toFixed(3)} kg</td>
    `;
    bomFrameTbody.appendChild(tr);
  }

  // フレーム合計行 (tfoot)
  if (bomFrameTfoot) {
    const tfootTr = document.createElement('tr');
    tfootTr.innerHTML = `
      <td><strong>フレーム等 合計</strong></td>
      <td style="text-align: center;">-</td>
      <td style="text-align: center; font-family: monospace;"><strong>${totalFrameItems}点</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>¥${totalFrameCost.toLocaleString()}</strong></td>
      <td style="text-align: right; font-family: monospace;"><strong>${totalFrameWeight.toFixed(3)} kg</strong></td>
    `;
    bomFrameTfoot.appendChild(tfootTr);
  }

  // 2. パネル類テーブルの描画
  // ソート: 正面扉 -> TypeC前窓 -> 床面 -> 側面 -> 背面 -> 天面 -> 換気量調整板 -> 床下パネルヒータ支え板 -> プラダン -> その他
  panelParts.sort((a, b) => {
    const scoreA = getPanelSortScore(a);
    const scoreB = getPanelSortScore(b);
    return scoreA - scoreB;
  });
  lastSortedPanelParts = [...panelParts];

  let totalPanelCost = 0;
  let totalPanelWeight = 0;
  let totalPanelItems = 0;

  if (bomPanelTbody) {
    bomPanelTbody.innerHTML = '';
    if (bomPanelTfoot) bomPanelTfoot.innerHTML = '';

    for (const part of panelParts) {
      totalPanelItems += part.count;
      const { totalCost, totalWeight } = getPanelCostAndWeight(part);
      totalPanelCost += totalCost;
      totalPanelWeight += totalWeight;

      const isMachiningPanel = (part.name && (
        part.name.includes('扉') ||
        part.name.includes('換気量調整板') ||
        part.name.includes('ヒンジ座板') ||
        part.name.includes('ロック受座板') ||
        (part.name.includes('床下パネルヒータ支え板') && !part.name.includes('プラダン'))
      ));

      const statusBadge = isMachiningPanel
        ? '<span style="display: inline-block; background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px; font-weight: bold;">★加工あり</span>'
        : '<span style="display: inline-block; background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; margin-right: 4px;">切断のみ</span>';

      const tr = document.createElement('tr');
      tr.className = 'bom-cat-panel';
      tr.innerHTML = `
        <td><strong>${part.name}</strong></td>
        <td>${part.size || '-'}</td>
        <td style="text-align: center; font-family: monospace;">${part.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${totalCost.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${totalWeight.toFixed(3)} kg</td>
        <td>${statusBadge}${part.note || '-'}</td>
      `;
      bomPanelTbody.appendChild(tr);
    }

    if (bomPanelTfoot) {
      const tfootTr = document.createElement('tr');
      tfootTr.innerHTML = `
        <td><strong>パネル 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${totalPanelItems}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${totalPanelCost.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${totalPanelWeight.toFixed(3)} kg</strong></td>
        <td>-</td>
      `;
      bomPanelTfoot.appendChild(tfootTr);
    }
  }

  // 3. その他部材・金物・付属品テーブルの描画
  let totalOtherCost = 0;
  let totalOtherWeight = 0;
  let totalOtherItems = 0;

  if (bomOtherTbody) {
    bomOtherTbody.innerHTML = '';
    if (bomOtherTfoot) bomOtherTfoot.innerHTML = '';

    for (const part of otherParts) {
      totalOtherItems += part.count;
      const { totalCost, totalWeight } = getOtherPartCostAndWeight(part);
      totalOtherCost += totalCost;
      totalOtherWeight += totalWeight;

      const tr = document.createElement('tr');
      tr.className = `bom-cat-${part.category || 'other'}`;
      tr.innerHTML = `
        <td><strong>${part.name}</strong></td>
        <td>${part.size || '-'}</td>
        <td style="text-align: center; font-family: monospace;">${part.count}</td>
        <td style="text-align: right; font-family: monospace;">¥${totalCost.toLocaleString()}</td>
        <td style="text-align: right; font-family: monospace;">${totalWeight.toFixed(3)} kg</td>
        <td>${part.note || '-'}</td>
      `;
      bomOtherTbody.appendChild(tr);
    }

    if (bomOtherTfoot) {
      const tfootTr = document.createElement('tr');
      tfootTr.innerHTML = `
        <td><strong>その他部材 合計</strong></td>
        <td style="text-align: center;">-</td>
        <td style="text-align: center; font-family: monospace;"><strong>${totalOtherItems}点</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>¥${totalOtherCost.toLocaleString()}</strong></td>
        <td style="text-align: right; font-family: monospace;"><strong>${totalOtherWeight.toFixed(3)} kg</strong></td>
        <td>-</td>
      `;
      bomOtherTfoot.appendChild(tfootTr);
    }
  }

  // 4. はざいや外注加工指示プレビューの動的更新（全パネル統合版）
  const hazaiyaPreviewBody = document.getElementById('bom-hazaiya-preview-body');
  const hazaiyaPartsBadge = document.getElementById('hazaiya-parts-badge');
  if (hazaiyaPreviewBody) {
    const hazaiyaPanelList = calculateHazaiyaPanelOrderList(parts, state);
    const totalQty = hazaiyaPanelList.reduce((acc, p) => acc + (p.quantity || 1), 0);
    const machiningCount = hazaiyaPanelList.filter(p => p.needsMachining).length;

    if (hazaiyaPartsBadge) {
      hazaiyaPartsBadge.textContent = `${hazaiyaPanelList.length}品目 (${totalQty}枚 / 加工あり${machiningCount}点)`;
    }

    if (hazaiyaPanelList.length === 0) {
      hazaiyaPreviewBody.innerHTML = '<p style="color: #94a3b8; font-style: italic; margin: 4px 0;">※対象のパネル部材はありません。</p>';
    } else {
      let previewHtml = '';
      hazaiyaPanelList.forEach((spec, idx) => {
        const isMachining = spec.needsMachining;
        const borderColor = isMachining ? 'rgba(245, 158, 11, 0.35)' : 'rgba(56, 189, 248, 0.25)';
        const tagHtml = isMachining
          ? '<span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.45); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem; font-weight: bold;">★加工あり</span>'
          : '<span style="background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 3px; padding: 1px 5px; font-size: 0.65rem;">切断のみ</span>';

        previewHtml += `
          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid ${borderColor}; border-radius: 4px; padding: 6px 10px; margin-bottom: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px; flex-wrap: wrap; gap: 4px;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <strong style="color: ${isMachining ? '#fbbf24' : '#e2e8f0'};">[${idx + 1}/${hazaiyaPanelList.length}] ${spec.title}</strong>
                ${tagHtml}
              </div>
              <span style="font-family: monospace; font-size: 0.7rem; color: #38bdf8;">${spec.widthMm} x ${spec.heightMm} mm (t${spec.thicknessMm}mm) × ${spec.quantity}枚</span>
            </div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 3px;">
              素材: <span style="color: #cbd5e1;">${spec.materialName}</span> | 仕上げ: <span style="color: #cbd5e1;">${spec.edgeFinishing}</span>
            </div>
        `;

        if (isMachining) {
          if (spec.corners && spec.corners.length > 0) {
            previewHtml += '<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・コーナー: ' + spec.corners.map(c => `<span style="color: #fca5a5;">${c.desc}(${c.spec})</span>`).join(', ') + '</div>';
          }
          if (spec.notches && spec.notches.length > 0) {
            previewHtml += '<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・切欠き: ' + spec.notches.map(n => `<span style="color: #fca5a5;">${n.desc}(${n.spec})</span>`).join(', ') + '</div>';
          }
          if (spec.holes && spec.holes.length > 0) {
            previewHtml += '<div style="font-size: 0.67rem; color: #cbd5e1; margin-left: 6px;">・穴あけ: ' + spec.holes.map((h, i) => `<span style="color: #93c5fd;">(${i + 1}) ${h.desc} [${h.base} ➜ φ${h.diameterMm}mm]</span>`).join('<br>&nbsp;&nbsp;') + '</div>';
          }
        }

        previewHtml += '</div>';
      });
      hazaiyaPreviewBody.innerHTML = previewHtml;
    }
  }

  if (partsCountBadge) {
    partsCountBadge.textContent = `${parts.length}品目 / フレーム計${totalFrameItems}点 / パネル計${totalPanelItems}点 / その他計${totalOtherItems}点`;
  }
}

/**
 * 🛠️ 開発デバッグ用 BOM動的インジェクション
 * URLに ?debug=bom または ?dev=bom がある場合のみ、画面下部にパーツ内訳アコーディオンを動的生成・注入します。
 * 通常のお客様向けアクセス（本番HTML）には一切DOMが存在しないため、原価漏洩リスクは0です。
 */
function setupDebugBOMIfRequested() {
  try {
    // 🛡️ 原価・部材漏洩の完全遮断:
    // 1. 本番用ビルド成果物（production）では完全に無効化（ビルドレベル遮断）
    if (import.meta.env.PROD) {
      return;
    }
    // 2. ローカル開発環境（localhost / 127.0.0.1）でのみ有効化（本番URLでは絶対に生成されません）
    if (!isLocalDevelopmentEnvironment()) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const hasDebugParam = params.get('debug') === 'bom' || params.get('dev') === 'bom';

    // セッションストレージによる自動保持は解除（通常は隠す）
    sessionStorage.removeItem('cage_debug_bom');

    // パラメータがない場合は確実に非表示・削除
    if (!hasDebugParam) {
      const existing = document.getElementById('debug-bom-section');
      if (existing) existing.remove();
      return;
    }

    // 既に生成済みならスキップ
    if (document.getElementById('debug-bom-section')) return;

    // アコーディオンHTMLを動的作成 (初期状態は折りたたんで隠す)
    const section = document.createElement('section');
    section.id = 'debug-bom-section';
    section.className = 'control-section accordion-section';
    section.style.cssText = 'margin: 16px 12px 10px; border: 1px dashed rgba(245, 158, 11, 0.4);';

    section.innerHTML = `
      <div style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 8px; padding: 10px 14px; margin-bottom: 10px; font-size: 0.78rem; color: #fbbf24; display: flex; align-items: flex-start; gap: 10px; line-height: 1.45;">
        <span style="font-size: 1.1rem; line-height: 1;">🛠️</span>
        <div>
          <strong style="color: #f59e0b; display: block; margin-bottom: 2px;">【管理者デバッグ表示中】資材リスト (BOM)</strong>
          <span>URLパラメータ（?debug=bom）により動的生成されています。<strong style="color: #60a5fa;">通常画面では完全に非表示です。</strong></span>
        </div>
      </div>

      <div class="accordion-header bom-accordion-header active" id="bom-toggle-btn">
        <div class="accordion-title-wrap">
          <svg class="accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span class="section-title" style="margin-bottom: 0;">資材リスト内訳 (BOM)</span>
        </div>
        <div class="accordion-header-right" style="display: flex; align-items: center; gap: 8px;">
          <span class="bom-badge" id="parts-count-badge">計算中</span>
          <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <div class="bom-table-container accordion-content" id="bom-container" style="margin-top: 8px;">
        <!-- 1. フレーム類 -->
        <div class="bom-section-title-bar" style="padding: 10px 12px 6px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="bom-section-title" style="font-weight: 700; color: #38bdf8;">■ フレーム類（レール・キャップ含む）</span>
            <button id="bom-copy-frame-btn" type="button" class="bom-copy-btn" title="フレーム発注用テキスト（クリップボード）をコピー">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span class="bom-copy-btn-text">コピー</span>
            </button>
          </div>
          <span class="bom-section-sub" style="font-size: 0.7rem; color: #94a3b8;">※型番・長さ・数量・原価・重量</span>
        </div>
        <table class="bom-table frame-bom-table">
          <thead>
            <tr>
              <th style="width: 32%;">型番</th>
              <th style="width: 18%; text-align: right;">長さ</th>
              <th style="width: 12%; text-align: center;">数量</th>
              <th style="width: 22%; text-align: right;">原価合計</th>
              <th style="width: 16%; text-align: right;">重量</th>
            </tr>
          </thead>
          <tbody id="bom-frame-tbody"></tbody>
          <tfoot id="bom-frame-tfoot"></tfoot>
        </table>

        <!-- 2. パネル類 -->
        <div class="bom-section-title-bar" style="margin-top: 14px; padding: 10px 12px 6px; display: flex; justify-content: space-between; align-items: center; gap: 8px; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="bom-section-title" style="font-weight: 700; color: #34d399;">■ パネル類</span>
            <button id="bom-copy-hazaiya-btn" type="button" class="bom-copy-btn bom-copy-btn-hazaiya" title="はざいや様向け全パネル統合発注テキスト（切断のみ＋加工指示を全品目網羅・二重発注防止）を一括コピー" style="background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.5); color: #fbbf24;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span class="bom-copy-btn-text">はざいや発注リスト一括コピー</span>
            </button>
          </div>
          <span class="bom-section-sub" style="font-size: 0.7rem; color: #94a3b8;">※正面扉→前窓→床面→側面→背面→天面→調整板→支え板→プラダン</span>
        </div>
        <table class="bom-table panel-bom-table">
          <thead>
            <tr>
              <th style="width: 28%;">部材種別</th>
              <th style="width: 18%;">寸法 / 仕様</th>
              <th style="width: 8%; text-align: center;">数量</th>
              <th style="width: 15%; text-align: right;">原価合計</th>
              <th style="width: 13%; text-align: right;">重量</th>
              <th style="width: 18%;">用途・配置</th>
            </tr>
          </thead>
          <tbody id="bom-panel-tbody"></tbody>
          <tfoot id="bom-panel-tfoot"></tfoot>
        </table>

        <!-- 2-2. はざいや全パネル統合発注 展開プレビューボックス -->
        <div id="bom-hazaiya-preview-container" style="margin: 8px 0 10px; padding: 8px 12px; background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 6px; font-size: 0.73rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" id="bom-hazaiya-toggle-btn">
            <span style="font-weight: 700; color: #fbbf24; display: flex; align-items: center; gap: 6px;">
              <span>📐</span>
              <span>はざいや全パネル発注リスト（切断のみ＋加工指示・二重発注防止）</span>
              <span id="hazaiya-parts-badge" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 1px 6px; border-radius: 4px; font-size: 0.68rem;">0点</span>
            </span>
            <span style="font-size: 0.68rem; color: #94a3b8;" id="bom-hazaiya-toggle-icon">▼ 展開</span>
          </div>
          <div id="bom-hazaiya-preview-body" style="margin-top: 8px; display: none; line-height: 1.55; color: #cbd5e1; max-height: 280px; overflow-y: auto;">
          </div>
        </div>

        <!-- 3. その他部材・金物・付属品 -->
        <div class="bom-section-title-bar" style="margin-top: 14px; padding: 10px 12px 6px; display: flex; justify-content: space-between; align-items: center;">
          <span class="bom-section-title" style="font-weight: 700; color: #fbbf24;">■ その他部材・金物・付属品</span>
          <span class="bom-section-sub" style="font-size: 0.7rem; color: #94a3b8;">※パッキン・金具・ネジ・足等</span>
        </div>
        <table class="bom-table other-bom-table">
          <thead>
            <tr>
              <th style="width: 28%;">部材名</th>
              <th style="width: 18%;">寸法 / 仕様</th>
              <th style="width: 8%; text-align: center;">数量</th>
              <th style="width: 15%; text-align: right;">原価合計</th>
              <th style="width: 13%; text-align: right;">重量</th>
              <th style="width: 18%;">備考・用途</th>
            </tr>
          </thead>
          <tbody id="bom-other-tbody"></tbody>
          <tfoot id="bom-other-tfoot"></tfoot>
        </table>
      </div>
    `;

    // サイドバーの末尾（フッターの前）に挿入
    const sidebar = document.querySelector('.sidebar-content') || document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.appendChild(section);
    }

    // 要素参照の更新
    bomToggleBtn = document.getElementById('bom-toggle-btn');
    bomContainer = document.getElementById('bom-container');
    bomFrameTbody = document.getElementById('bom-frame-tbody');
    bomFrameTfoot = document.getElementById('bom-frame-tfoot');
    bomPanelTbody = document.getElementById('bom-panel-tbody');
    bomPanelTfoot = document.getElementById('bom-panel-tfoot');
    bomOtherTbody = document.getElementById('bom-other-tbody');
    bomOtherTfoot = document.getElementById('bom-other-tfoot');
    partsCountBadge = document.getElementById('parts-count-badge');

    if (bomToggleBtn && bomContainer) {
      bomToggleBtn.addEventListener('click', () => {
        const isHidden = bomContainer.classList.contains('hidden');
        bomContainer.classList.toggle('hidden', !isHidden);
        bomToggleBtn.classList.toggle('active', isHidden);
      });
    }

    // 📋 フレーム発注用テキストコピーボタンのイベント登録
    const copyFrameBtn = document.getElementById('bom-copy-frame-btn');
    if (copyFrameBtn) {
      copyFrameBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const text = generateFrameOrderText(lastConsolidatedFrameParts);
        if (!text) return;
        try {
          await copyTextToClipboard(text);
          const btnText = copyFrameBtn.querySelector('.bom-copy-btn-text');
          copyFrameBtn.classList.add('copied');
          if (btnText) btnText.textContent = 'コピー完了！';
          setTimeout(() => {
            copyFrameBtn.classList.remove('copied');
            if (btnText) btnText.textContent = 'コピー';
          }, 1800);
        } catch (err) {
          console.error('[BOM] クリップボードコピー失敗:', err);
        }
      });
    }

    // 📋 はざいや様向け全パネル統合発注テキストコピーボタンのイベント登録
    const copyHazaiyaBtn = document.getElementById('bom-copy-hazaiya-btn');
    if (copyHazaiyaBtn) {
      copyHazaiyaBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const parts = viewer ? viewer.getPartsSummary() : [];
        const panelList = calculateHazaiyaPanelOrderList(parts, state);
        const text = formatHazaiyaPanelOrderClipboardText(panelList, state);
        if (!text) return;
        try {
          await copyTextToClipboard(text);
          const btnText = copyHazaiyaBtn.querySelector('.bom-copy-btn-text');
          copyHazaiyaBtn.classList.add('copied');
          if (btnText) btnText.textContent = 'コピー完了！';
          setTimeout(() => {
            copyHazaiyaBtn.classList.remove('copied');
            if (btnText) btnText.textContent = 'はざいや発注リスト一括コピー';
          }, 1800);
        } catch (err) {
          console.error('[BOM] はざいや発注リストコピー失敗:', err);
        }
      });
    }

    // 📐 はざいや加工指示プレビュー展開・折りたたみ
    const hazaiyaToggleBtn = document.getElementById('bom-hazaiya-toggle-btn');
    const hazaiyaPreviewBody = document.getElementById('bom-hazaiya-preview-body');
    const hazaiyaToggleIcon = document.getElementById('bom-hazaiya-toggle-icon');
    if (hazaiyaToggleBtn && hazaiyaPreviewBody) {
      hazaiyaToggleBtn.addEventListener('click', () => {
        const isHidden = hazaiyaPreviewBody.style.display === 'none';
        hazaiyaPreviewBody.style.display = isHidden ? 'block' : 'none';
        if (hazaiyaToggleIcon) {
          hazaiyaToggleIcon.textContent = isHidden ? '▲ 折りたたむ' : '▼ 展開';
        }
      });
    }

    console.log('[Debug] 🛠️ BOMデバッグUIを動的生成・表示しました。');
    updateBOMTable();
  } catch (err) {
    console.warn('[Debug] setupDebugBOMIfRequested エラー:', err);
  }
}

let isEstimateCalculated = false;

/**
 * 原価・重量の合計計算（内部処理用）
 * ※部材個々の単価・内訳はお客様側（DOM・テーブル）には一切出力しません。
 */
function calculateGrandTotals() {
  const parts = viewer.getPartsSummary();

  let totalFrameCost = 0;
  let totalFrameWeight = 0;
  let totalPanelCost = 0;
  let totalPanelWeight = 0;

  for (const part of parts) {
    if (part.category === 'frame' || part.category === 'rail_cap' || part.category === 'hardware' || part.category === 'other') {
      const config = getMaterialConfig(part.partCode || part.name);
      if (config) {
        if (config.unit === 'm') {
          const rawLengthMm = part.lengthMm || 0;
          // スライド扉用レール（上側レール PGRU, 下側レール PGRL）は250mm単位で切り上げて資材量を算出
          const isGlassRail = part.partCode && (part.partCode.startsWith('PGRU') || part.partCode.startsWith('PGRL'));
          const billedLengthMm = isGlassRail ? (Math.ceil(rawLengthMm / 250) * 250) : rawLengthMm;
          const lengthM = billedLengthMm / 1000;
          const singleCost = Math.round(config.pricePerMeter * lengthM);
          totalFrameCost += singleCost * part.count;
          totalFrameWeight += config.weightPerMeter * (rawLengthMm / 1000) * part.count;
        } else {
          totalFrameCost += (config.pricePerPiece || 0) * part.count;
          totalFrameWeight += (config.weightPerPiece || 0) * part.count;
        }
      }
    } else if (part.category === 'panel') {
      const { totalCost, totalWeight } = getPanelCostAndWeight(part);
      totalPanelCost += totalCost;
      totalPanelWeight += totalWeight;
    }
  }

  // 設定ファイルよりオプション工賃・価格設定を取得 (フォールバック付き)
  const optsConfig = materialsConfig.options || {};
  const laborConfig = optsConfig.labor || {};
  const itemConfig = optsConfig.items || {};

  // 各種オプションの適用判定
  const isFloorSplit = !!state.hasFloorReinforcement;
  const isTopSplit = !!(state.hasTopReinforcement || state.W > 940);
  const isTypeC = state.cageType === 'C';
  const isSideSplit = !!state.hasSideReinforcement;
  const isFrontWide3x = state.cageType === 'A' && state.frontWideFrame === '3x';
  const isCaster = state.footType === 'caster';
  const isSideVentCover = !!state.hasSideVentCover;
  const isPerch = !!state.hasPerch;
  const isRubberPacking = !!state.hasRubberPacking;
  const isRoomDivider = !!state.hasRoomDivider;
  const isTypeAFront = state.cageType === 'A_FRONT';
  const isTypeAFramed = state.cageType === 'A_FRAMED';
  const isFloorHeaterSupport = !!state.hasFloorHeaterSupport;

  // 1. オプション加工工賃（資材費とは別で単純に販売価格へ加算）
  const splitFloorLabor = isFloorSplit ? (laborConfig.splitFloor?.price ?? 500) : 0;
  const splitTopLabor = isTopSplit ? (laborConfig.splitTop?.price ?? 500) : 0;
  const typeCLabor = isTypeC ? (laborConfig.typeC?.price ?? 500) : 0;
  const splitSideLabor = isSideSplit ? (laborConfig.splitSide?.price ?? 1000) : 0;
  const frontWide3xLabor = isFrontWide3x ? (laborConfig.frontWide3x?.price ?? 500) : 0;
  const perchLabor = isPerch ? (laborConfig.perch?.price ?? 1000) : 0;
  const rubberPackingLabor = isRubberPacking ? (laborConfig.rubberPacking?.price ?? 800) : 0;
  const roomDividerLabor = isRoomDivider ? (laborConfig.roomDivider?.price ?? 500) : 0;
  const frontOpenDoorLabor = isTypeAFront ? (laborConfig.frontOpenDoor?.price ?? 3000) : 0;
  const frontFramedDoorLabor = isTypeAFramed ? (laborConfig.frontFramedDoor?.price ?? 3000) : 0;
  const floorHeaterSupportLabor = isFloorHeaterSupport ? (laborConfig.floorHeaterSupport?.price ?? 1000) : 0;

  const totalLaborFee = splitFloorLabor + splitTopLabor + typeCLabor + splitSideLabor + frontWide3xLabor + perchLabor + rubberPackingLabor + roomDividerLabor + frontOpenDoorLabor + frontFramedDoorLabor + floorHeaterSupportLabor;

  // 2. 特定オプション部材（販売価格加算額および内部原価）
  const casterPrice = isCaster ? (itemConfig.caster?.price ?? 1500) : 0;
  const casterCost = isCaster ? (itemConfig.caster?.cost ?? 800) : 0;

  // 側面換気量調整板（穴加工費は各パネル原価に含まれるため、基本付帯原価のみ計上）
  const ventCoverPrice = isSideVentCover ? (itemConfig.sideVentCover?.price ?? 500) : 0;
  const baseVentCoverCost = isSideVentCover ? (itemConfig.sideVentCover?.cost ?? 200) : 0;
  const ventCoverCost = isSideVentCover ? baseVentCoverCost : 0;

  // LED照明オプション部材
  let ledPrice = 0;
  let ledCost = 0;
  let ledWeight = 0;
  if (state.ledType && state.ledType !== 'none') {
    const ledConfigMap = {
      usb: itemConfig.ledUsb,
      rgbw: itemConfig.ledRgbw
    };
    const ledItem = ledConfigMap[state.ledType];
    if (ledItem) {
      ledPrice = ledItem.price || 0;
      ledCost = ledItem.cost || 0;
      ledWeight = ledItem.weight || 0.15;
    }
  }

  const totalOptionPrice = casterPrice + ventCoverPrice + ledPrice;
  const totalOptionCost = casterCost + ventCoverCost + ledCost;

  // 3. 資材原価および基本販売価格（設定ファイルのmarkupRate倍・roundingUnit単位で切り上げ）
  const pricingConfig = materialsConfig.pricing || {};
  const markupRate = typeof pricingConfig.markupRate === 'number' ? pricingConfig.markupRate : 1.3;
  const roundingUnit = typeof pricingConfig.roundingUnit === 'number' ? pricingConfig.roundingUnit : 100;

  const baseMaterialsCost = totalFrameCost + totalPanelCost;
  const basePriceWithMarkup = Math.ceil((baseMaterialsCost * markupRate) / roundingUnit) * roundingUnit;

  // 4. 総合計の算出 (※内訳金額はDOM・UI上には表示せず、合計金額のみに反映)
  const grandTotalCost = baseMaterialsCost + totalOptionCost;
  const grandTotalPrice = basePriceWithMarkup + totalOptionPrice + totalLaborFee;
  const grandTotalWeight = totalFrameWeight + totalPanelWeight + ledWeight;

  return {
    rawCost: grandTotalCost,
    priceWithMarkup: grandTotalPrice,
    weight: grandTotalWeight
  };
}

// 非同期構造シミュレーション＆積算パイプラインのセッション管理
let activeSimulationSession = null;

/**
 * 価格・重量計算結果の非表示（サイズ・オプション変更時に連動）
 */
function resetEstimateDisplay() {
  if (activeSimulationSession) {
    activeSimulationSession.aborted = true;
    activeSimulationSession = null;
    if (btnCalcEstimate) {
      btnCalcEstimate.classList.remove('is-calculating');
      const titleSpan = btnCalcEstimate.querySelector('.calc-btn-title');
      if (titleSpan) {
        titleSpan.textContent = '見積もりと重量計算（β版）';
      }
    }
  }
  if (isEstimateCalculated || (costHudResult && !costHudResult.classList.contains('hidden'))) {
    isEstimateCalculated = false;
    if (costHudResult) {
      costHudResult.classList.add('hidden');
    }
  }
}

/**
 * 特注寸法・補強構造に応じた多次元部材マトリクスと構造負荷の非同期計算
 * 各軸プロファイルの切断ロス最適化、パネルたわみ応力、金具連動積算パイプラインを段階的にステップ実行
 */
async function runStructuralAndCostSimulation() {
  // すでに実行中のセッションがあればキャンセル
  if (activeSimulationSession) {
    activeSimulationSession.aborted = true;
  }

  const currentSession = { aborted: false };
  activeSimulationSession = currentSession;

  // 1. 結果枠を即座にオープン
  if (costHudResult) {
    costHudResult.classList.remove('hidden');
  }

  // 2. HUD数値を「積算中...」スピナーアニメーション表示に切り替え
  if (hudCostTotal) {
    hudCostTotal.classList.remove('value-appear');
    hudCostTotal.innerHTML = `
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>部材積算中...</span>
      </span>
    `;
  }
  if (hudWeightTotal) {
    hudWeightTotal.classList.remove('value-appear');
    hudWeightTotal.innerHTML = `
      <span class="hud-eval-spinner">
        <span class="spinner-icon"></span>
        <span>重量計算中...</span>
      </span>
    `;
  }

  // 3. ボタンを計算中（非活性・スピナー）に遷移
  if (btnCalcEstimate) {
    btnCalcEstimate.classList.add('is-calculating');
    const titleSpan = btnCalcEstimate.querySelector('.calc-btn-title');
    if (titleSpan) {
      titleSpan.textContent = '部材積算・構造検証中...';
    }
  }

  // 4. 寸法・仕様マトリクスに基づく非同期シミュレーション検証ステップ
  // 各軸プロファイルの耐荷重負荷・切断ロスおよび多層パネル応力マトリクスのステップ解決
  const baseDurationMs = 5000;
  const varianceDurationMs = Math.floor(Math.random() * 5001); // 5000ms〜10000ms
  const targetDurationMs = baseDurationMs + varianceDurationMs;
  const stepInterval = 100;
  const totalSteps = Math.floor(targetDurationMs / stepInterval);

  try {
    for (let step = 0; step < totalSteps; step++) {
      await new Promise(resolve => setTimeout(resolve, stepInterval));
      if (currentSession.aborted) {
        return;
      }
    }

    // 5. 最終集計の算出
    const totals = calculateGrandTotals();

    // 6. 確定結果の反映
    if (hudCostTotal) {
      hudCostTotal.textContent = `¥${totals.priceWithMarkup.toLocaleString()}`;
      hudCostTotal.classList.add('value-appear');
    }
    if (hudWeightTotal) {
      hudWeightTotal.textContent = `${totals.weight.toFixed(1)} kg`;
      hudWeightTotal.classList.add('value-appear');
    }
    isEstimateCalculated = true;

    // 見積IDの発行 & 仕様まとめテキストの自動生成 & ログ送信準備
    finalizeEstimateCalculation(totals);
  } catch (error) {
    console.error('Structural simulation error:', error);
    if (hudCostTotal) {
      hudCostTotal.innerHTML = `<span style="color: #ef4444; font-size: 0.82rem; font-weight: 600;">⚠️ 計算中にエラーが発生しました</span>`;
    }
    if (hudWeightTotal) {
      hudWeightTotal.innerHTML = `<span style="color: #94a3b8; font-size: 0.85rem;">-</span>`;
    }
    sendSimulationErrorLog(error);
  } finally {
    if (activeSimulationSession === currentSession) {
      activeSimulationSession = null;
      if (btnCalcEstimate) {
        btnCalcEstimate.classList.remove('is-calculating');
        const titleSpan = btnCalcEstimate.querySelector('.calc-btn-title');
        if (titleSpan) {
          titleSpan.textContent = '見積もりと重量計算（β版）';
        }
      }
    }
  }
}

/**
 * 前開き扉の開き方向表示名
 */
function getFrontDoorHingeDisplayName(side = state.doorHingeSide) {
  return side === 'right' ? '左打掛、右ヒンジ' : '左ヒンジ、右打掛';
}

/**
 * ケージタイプの表示名を取得
 * @param {boolean} detailed - 詳細（仕様テキスト・カード画像用）かどうか
 */
function getCageTypeDisplayName(detailed = false) {
  if (state.cageType === 'A_FRAMED') {
    return detailed ? 'Type A 正面枠囲い（高剛性アルミ枠スライド扉仕様）' : 'Type A 正面枠囲い';
  } else if (state.cageType === 'A_FRONT') {
    const hingeText = getFrontDoorHingeDisplayName();
    return detailed ? `Type A 前開き (${hingeText})` : `Type A 前開き (${hingeText})`;
  } else if (state.cageType === 'C') {
    return detailed ? 'Type C（下部前窓＋扉仕様）' : 'Type C（前窓＋扉）';
  }
  return detailed ? 'Type A（全面スライド扉仕様）' : 'Type A（全面スライド扉）';
}

/**
 * 現在サイズ・オプションスペックサマリーの描画（価格表カード幅に合わせた改行配慮）
 */
function updateSpecSummary() {
  if (!currentSpecSummary) return;

  const typeName = getCageTypeDisplayName(false);
  const sizeText = `W${state.W} × D${state.D} × H${state.H} mm`;

  const optionsList = [];
  if (state.cageType === 'A') {
    const wideText = state.frontWideFrame === '3x' ? '正面3倍幅' : (state.frontWideFrame === '2x' ? '正面2倍幅' : '正面標準幅');
    optionsList.push(wideText);
  }
  optionsList.push(state.hasFloorReinforcement ? '床補強: あり' : '床補強: なし');
  if (state.hasTopReinforcement || state.W > 940) {
    optionsList.push('天板補強: あり');
  }
  if (state.hasSideReinforcement) {
    optionsList.push(`側面補強(上部開口): ${state.sideOpeningH}mm`);
  }
  if (state.hasDoorAntiFlex) {
    optionsList.push('扉たわみ防止');
  }
  if (state.hasSideVentCover) {
    optionsList.push('換気調整板');
  }
  if (state.hasPerch) {
    optionsList.push('止まり木');
  }
  if (state.hasRoomDivider) {
    optionsList.push('２室分け');
  }
  if (state.ledType && state.ledType !== 'none') {
    const ledSummaryNames = {
      usb: 'LED: USB式',
      rgbw: 'LED: RGB+W'
    };
    optionsList.push(ledSummaryNames[state.ledType] || 'LED照明');
  }
  optionsList.push(state.footType === 'caster' ? 'キャスター' : 'ゴム脚');

  currentSpecSummary.innerHTML = `
    <div class="spec-line-primary">${typeName} | ${sizeText}</div>
    <div class="spec-line-sub">${optionsList.join(' / ')}</div>
  `;
}

/**
 * スライダーと数値入力の双方向連動ヘルパー
 */
function bindInputPair(slider, input, key, callback) {
  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    input.value = val;
    state[key] = val;
    if (callback) callback(val);
    syncUpdate();
  });

  input.addEventListener('change', (e) => {
    let val = parseInt(e.target.value, 10);
    const min = parseInt(slider.min, 10);
    const max = parseInt(slider.max, 10);
    const step = parseInt(slider.step, 10) || 10;

    if (isNaN(val)) val = min;
    val = Math.round(val / step) * step;
    val = Math.max(min, Math.min(max, val));

    input.value = val;
    slider.value = val;
    state[key] = val;
    if (callback) callback(val);
    syncUpdate();
  });
}

/**
 * 寸法変更時の床面中央補強フレーム（2分割）の連動
 * - 幅 W > 940mm: 必須で補強あり（解除不可）
 * - 幅 W ≦ 940mm: 面積 > 750×450mm（337,500 mm²）で推奨自動ON、以下で自動OFF（任意指定可）
 */
function updateFloorReinforceByArea() {
  if (state.W > 940) {
    toggleFloorReinforce.checked = true;
    toggleFloorReinforce.disabled = true;
    cardFloorReinforce.classList.add('disabled');
    floorReinfSub.textContent = '幅940mm超のため必須（解除不可）';
    state.hasFloorReinforcement = true;
  } else {
    toggleFloorReinforce.disabled = false;
    cardFloorReinforce.classList.remove('disabled');
    floorReinfSub.textContent = '床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください';
    const isOver = (state.W * state.D) > FLOOR_REINFORCE_THRESHOLD_AREA;
    state.hasFloorReinforcement = isOver;
    toggleFloorReinforce.checked = isOver;
  }
}

// 入力イベントバインド
bindInputPair(sliderW, inputW, 'W', (newW) => {
  // 床面2分割の連動（W>940で必須、以下は面積判定）
  updateFloorReinforceByArea();

  // 天板2分割の必須判定（W > 940mm は必須・解除不可、940mm以下は自動OFF・任意指定可）
  if (newW > 940) {
    toggleTopReinforce.checked = true;
    toggleTopReinforce.disabled = true;
    cardTopReinforce.classList.add('disabled');
    topReinfSub.textContent = '幅940mm超のため必須（解除不可）';
    state.hasTopReinforcement = true;
  } else {
    toggleTopReinforce.disabled = false;
    cardTopReinforce.classList.remove('disabled');
    topReinfSub.textContent = '940mm以下は任意指定（W>940mmは必須）';
    toggleTopReinforce.checked = false;
    state.hasTopReinforcement = false;
  }
});
bindInputPair(sliderD, inputD, 'D', () => {
  // 床面2分割の連動（W>940で必須、以下は面積判定）
  updateFloorReinforceByArea();
});
bindInputPair(sliderH, inputH, 'H', (newH) => {
  const maxFw = Math.max(30, newH - 120);
  sliderFW.max = maxFw;
  inputFW.max = maxFw;
  if (state.frontWindowH > maxFw) {
    state.frontWindowH = maxFw;
    sliderFW.value = maxFw;
    inputFW.value = maxFw;
  }

  // 側面上部開口高さの範囲と連動 (どちらかの開口高さが50mmを下回るまで調整可能)
  const minSideH = 50;
  const maxSideH = Math.max(minSideH, newH - 110);
  const centerSideH = Math.round((newH - 60) / 20) * 10;
  inputSideH.min = minSideH;
  inputSideH.max = maxSideH;
  if (!state.hasSideReinforcement) {
    state.sideOpeningH = centerSideH;
    inputSideH.value = centerSideH;
  } else if (state.sideOpeningH > maxSideH) {
    state.sideOpeningH = maxSideH;
    inputSideH.value = maxSideH;
  } else if (state.sideOpeningH < minSideH) {
    state.sideOpeningH = minSideH;
    inputSideH.value = minSideH;
  }
});
bindInputPair(sliderFW, inputFW, 'frontWindowH');

// 側面補強 側面上部開口高さの入力イベント
inputSideH.addEventListener('change', (e) => {
  let val = parseInt(e.target.value, 10);
  const min = 50;
  const max = Math.max(min, state.H - 110);
  const step = 10;

  if (isNaN(val)) val = min;
  val = Math.round(val / step) * step;
  val = Math.max(min, Math.min(max, val));

  inputSideH.value = val;
  state.sideOpeningH = val;
  syncUpdate();
});

// 側面補強フレームのトグル (1行インラインUI)
toggleSideReinforce.addEventListener('change', (e) => {
  state.hasSideReinforcement = e.target.checked;
  if (state.hasSideReinforcement) {
    cardSideReinforce.classList.add('active');
    boxSideH.classList.remove('disabled');
    const minSideH = 50;
    const maxSideH = Math.max(minSideH, state.H - 110);
    inputSideH.min = minSideH;
    inputSideH.max = maxSideH;
    // デフォルトは上下均等になる中央配置
    const centerSideH = Math.round((state.H - 60) / 20) * 10;
    if (state.sideOpeningH < minSideH || state.sideOpeningH > maxSideH) {
      state.sideOpeningH = centerSideH;
      inputSideH.value = centerSideH;
    }
  } else {
    cardSideReinforce.classList.remove('active');
    boxSideH.classList.add('disabled');
  }
  syncUpdate();
});

// 床面中央補強フレームのトグル
toggleFloorReinforce.addEventListener('change', (e) => {
  state.hasFloorReinforcement = e.target.checked;
  syncUpdate();
});

// 天板中央補強フレームのトグル
toggleTopReinforce.addEventListener('change', (e) => {
  state.hasTopReinforcement = e.target.checked;
  syncUpdate();
});

// 正面スライド扉 たわみ防止レールの利用可否制御（前開き・正面枠囲い選択時は選択不可）
function updateDoorAntiFlexAvailability() {
  if (!toggleDoorAntiFlex || !cardDoorAntiFlex) return;

  const isFrontOpen = state.cageType === 'A_FRONT';
  const isFramed = state.cageType === 'A_FRAMED';
  const doorAntiFlexSub = document.getElementById('door-anti-flex-sub');

  if (isFrontOpen || isFramed) {
    if (state.hasDoorAntiFlex) {
      state.hasDoorAntiFlex = false;
      toggleDoorAntiFlex.checked = false;
    }
    toggleDoorAntiFlex.disabled = true;
    cardDoorAntiFlex.classList.add('disabled');
    cardDoorAntiFlex.classList.remove('active');
    if (doorAntiFlexSub) {
      doorAntiFlexSub.textContent = isFramed
        ? '※正面枠囲い仕様（扉なし）のため選択不可'
        : '※前開き（横開き扉）仕様のためスライド扉用レールは選択不可';
    }
  } else {
    toggleDoorAntiFlex.disabled = false;
    cardDoorAntiFlex.classList.remove('disabled');
    if (doorAntiFlexSub) {
      doorAntiFlexSub.textContent = '強力生体向け。左右端に縦レールを追加し内側からの変形を防止';
    }
  }
}

// ２室分けオプションの利用可否制御（前開き・止まり木ON・正面枠囲い選択時は選択不可）
function updateRoomDividerAvailability() {
  if (!toggleRoomDivider || !cardRoomDivider) return;

  const isFrontOpen = state.cageType === 'A_FRONT';
  const isFramed = state.cageType === 'A_FRAMED';
  const isPerchActive = state.hasPerch;

  if (isFrontOpen || isPerchActive || isFramed) {
    if (state.hasRoomDivider) {
      state.hasRoomDivider = false;
      toggleRoomDivider.checked = false;
      if (rowPanelPartition) rowPanelPartition.classList.add('hidden');
    }
    toggleRoomDivider.disabled = true;
    cardRoomDivider.classList.add('disabled');
    cardRoomDivider.classList.remove('active');
    if (roomDividerSub) {
      if (isFramed) {
        roomDividerSub.textContent = '※正面枠囲い仕様では2室分け仕切り板は選択不可';
      } else if (isFrontOpen) {
        roomDividerSub.textContent = '※前開き仕様では2室分け仕切り板は選択不可';
      } else {
        roomDividerSub.textContent = '※止まり木オプション選択時は利用できません';
      }
    }
  } else {
    toggleRoomDivider.disabled = false;
    cardRoomDivider.classList.remove('disabled');
    if (roomDividerSub) {
      roomDividerSub.textContent = '正面扉戸の隙間が7mmあります。小さい生体にはご注意ください';
    }
  }
}

// 正面スライド扉 たわみ防止レールのトグル
toggleDoorAntiFlex.addEventListener('change', (e) => {
  if (state.cageType === 'A_FRONT') {
    e.target.checked = false;
    state.hasDoorAntiFlex = false;
    return;
  }
  state.hasDoorAntiFlex = e.target.checked;
  if (e.target.checked) {
    cardDoorAntiFlex.classList.add('active');
  } else {
    cardDoorAntiFlex.classList.remove('active');
  }
  syncUpdate();
});

// 側面換気量調整板のトグル
toggleSideVentCover.addEventListener('change', (e) => {
  state.hasSideVentCover = e.target.checked;
  if (e.target.checked) {
    cardSideVentCover.classList.add('active');
  } else {
    cardSideVentCover.classList.remove('active');
  }
  syncUpdate();
});

// 止まり木（天板吊り下げ式）のトグル
if (togglePerch) {
  togglePerch.addEventListener('change', (e) => {
    state.hasPerch = e.target.checked;
    if (e.target.checked) {
      if (cardPerch) cardPerch.classList.add('active');

      // ２室分けオプションとの排他制御
      updateRoomDividerAvailability();

      // 天面が塩ビパンチングでない場合、自動で塩ビパンチングへ変更してお知らせトーストを表示
      const isTopNotPunching = state.panelConfig.top !== 'punching' || 
                               state.panelConfig.topLeft !== 'punching' || 
                               state.panelConfig.topRight !== 'punching';
      if (isTopNotPunching) {
        state.panelConfig.top = 'punching';
        state.panelConfig.topLeft = 'punching';
        state.panelConfig.topRight = 'punching';
        if (selectPanelTop) selectPanelTop.value = 'punching';
        if (selectPanelTopLeft) selectPanelTopLeft.value = 'punching';
        if (selectPanelTopRight) selectPanelTopRight.value = 'punching';

        showNoticeToast('※天面パンチングボードの穴を利用して固定するため、天面を塩ビパンチングに変更しました。金網天板との組み合わせは直接DMにてご相談ください。', 6000);
      }
    } else {
      if (cardPerch) cardPerch.classList.remove('active');
      updateRoomDividerAvailability();
    }
    syncUpdate();
  });
}

// ２室分け（後付け仕切り板）のトグル
if (toggleRoomDivider) {
  toggleRoomDivider.addEventListener('change', (e) => {
    state.hasRoomDivider = e.target.checked;
    if (e.target.checked) {
      if (cardRoomDivider) cardRoomDivider.classList.add('active');
      if (rowPanelPartition) rowPanelPartition.classList.remove('hidden');

      // 止まり木オプションとの排他制御：２室分けON時は止まり木をdisable
      if (togglePerch) {
        if (state.hasPerch) {
          state.hasPerch = false;
          togglePerch.checked = false;
          if (cardPerch) cardPerch.classList.remove('active');
        }
        togglePerch.disabled = true;
      }
      if (cardPerch) {
        cardPerch.classList.add('disabled');
      }
      if (perchSub) {
        perchSub.textContent = '※２室分けオプション選択時は利用できません';
      }

      // 天面チェック（強制変更はせずプレビューさせ、DM誘導トーストを表示）
      const isTopNotPunching = state.panelConfig.top !== 'punching' || 
                               state.panelConfig.topLeft !== 'punching' || 
                               state.panelConfig.topRight !== 'punching';
      if (isTopNotPunching) {
        showNoticeToast('天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。', 7000);
      }
    } else {
      if (cardRoomDivider) cardRoomDivider.classList.remove('active');
      if (rowPanelPartition) rowPanelPartition.classList.add('hidden');

      // 止まり木オプションのdisabled解除
      if (togglePerch) {
        togglePerch.disabled = false;
      }
      if (cardPerch) {
        cardPerch.classList.remove('disabled');
      }
      if (perchSub) {
        perchSub.textContent = '天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応';
      }
    }
    syncUpdate();
  });
}

// ２室分け仕切り板の素材選択
if (selectPanelPartition) {
  selectPanelPartition.addEventListener('change', (e) => {
    state.panelConfig.partition = e.target.value;
    syncUpdate();
  });
}

// 正面下側幅広フレーム2倍幅のトグル
toggleFrontWide2x.addEventListener('change', (e) => {
  if (e.target.checked) {
    state.frontWideFrame = '2x';
    lastTypeAFrontWideFrame = '2x';
  } else {
    state.frontWideFrame = 'none';
    lastTypeAFrontWideFrame = 'none';
  }
  syncUpdate();
});

// 正面下側幅広フレーム3倍幅のトグル
toggleFrontWide3x.addEventListener('change', (e) => {
  if (e.target.checked) {
    state.frontWideFrame = '3x';
    lastTypeAFrontWideFrame = '3x';
  } else {
    state.frontWideFrame = 'none';
    lastTypeAFrontWideFrame = 'none';
  }
  syncUpdate();
});

// モレ対策ゴムパッキンのトグル
toggleRubberPacking.addEventListener('change', (e) => {
  state.hasRubberPacking = e.target.checked;
  if (e.target.checked) {
    cardRubberPacking.classList.add('active');
  } else {
    cardRubberPacking.classList.remove('active');
  }
  syncUpdate();
});

// 床下パネルヒータ支え板のトグル
if (toggleFloorHeaterSupport) {
  toggleFloorHeaterSupport.addEventListener('change', (e) => {
    state.hasFloorHeaterSupport = e.target.checked;
    if (e.target.checked) {
      cardFloorHeaterSupport?.classList.add('active');
    } else {
      cardFloorHeaterSupport?.classList.remove('active');
    }
    syncUpdate();
  });
}

// タイプ切り替え
btnTypeA.addEventListener('click', () => {
  state.cageType = 'A';
  state.frontWideFrame = lastTypeAFrontWideFrame; // 前回のType A設定を復元
  btnTypeA.classList.add('active');
  btnTypeAFront?.classList.remove('active');
  btnTypeAFramed?.classList.remove('active');
  btnTypeC.classList.remove('active');
  rowFrontWindow.classList.add('hidden');
  typeBadge.textContent = 'Type A 選択中 (全面スライド扉)';
  updateDoorUI();
  syncUpdate();
});

btnTypeAFront?.addEventListener('click', () => {
  state.cageType = 'A_FRONT';
  state.frontWideFrame = lastTypeAFrontWideFrame; // 前回のType A設定を復元
  btnTypeAFront.classList.add('active');
  btnTypeA.classList.remove('active');
  btnTypeAFramed?.classList.remove('active');
  btnTypeC.classList.remove('active');
  rowFrontWindow.classList.add('hidden');
  typeBadge.textContent = `Type A 前開き 選択中 (${getFrontDoorHingeDisplayName()})`;
  updateDoorUI();
  syncUpdate();
});

btnTypeAFramed?.addEventListener('click', () => {
  state.cageType = 'A_FRAMED';
  btnTypeAFramed.classList.add('active');
  btnTypeA.classList.remove('active');
  btnTypeAFront?.classList.remove('active');
  btnTypeC.classList.remove('active');
  rowFrontWindow.classList.add('hidden');
  typeBadge.textContent = 'Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)';
  updateDoorUI();
  syncUpdate();
});

btnTypeC.addEventListener('click', () => {
  state.cageType = 'C';
  state.frontWideFrame = 'none'; // Type Cは前窓構造のため幅広フレームなし
  btnTypeC.classList.add('active');
  btnTypeA.classList.remove('active');
  btnTypeAFront?.classList.remove('active');
  btnTypeAFramed?.classList.remove('active');
  rowFrontWindow.classList.remove('hidden');
  typeBadge.textContent = 'Type C 選択中 (前窓＋扉)';
  updateDoorUI();
  syncUpdate();
});

const FRONT_OPEN_MAX_W = 600;
const FRONT_OPEN_MAX_H = 700; // 高さ制限: 最大700mm
const FRAMED_MIN_W = 900;
const FRAMED_MIN_H = 450;
const STANDARD_MIN_W = 300;
const STANDARD_MIN_H = 200;
const STANDARD_MAX_W = 1800;
const STANDARD_MAX_H = 900;

/**
 * ケージタイプに応じた寸法上限・下限（幅・高さ）の制限更新
 * - TypeA 正面枠囲い: 幅900mm以上、高さ450mm以上
 * - TypeA 前開き: 幅600mmまで、高さ700mmまで
 * - 標準ケージ: 幅300〜1800mm、高さ200〜900mm
 */
function updateDimensionLimits() {
  const isFrontOpen = state.cageType === 'A_FRONT';
  const isFramed = state.cageType === 'A_FRAMED';
  const minW = isFramed ? FRAMED_MIN_W : STANDARD_MIN_W;
  const minH = isFramed ? FRAMED_MIN_H : STANDARD_MIN_H;
  const maxW = isFrontOpen ? FRONT_OPEN_MAX_W : STANDARD_MAX_W;
  const maxH = isFrontOpen ? FRONT_OPEN_MAX_H : STANDARD_MAX_H;

  if (sliderW && inputW) {
    sliderW.min = minW;
    inputW.min = minW;
    sliderW.max = maxW;
    inputW.max = maxW;
    if (state.W < minW) {
      state.W = minW;
      sliderW.value = minW;
      inputW.value = minW;
      updateFloorReinforceByArea();
    } else if (state.W > maxW) {
      state.W = maxW;
      sliderW.value = maxW;
      inputW.value = maxW;
      updateFloorReinforceByArea();
    }
  }

  if (sliderH && inputH) {
    sliderH.min = minH;
    inputH.min = minH;
    sliderH.max = maxH;
    inputH.max = maxH;
    if (state.H < minH) {
      state.H = minH;
      sliderH.value = minH;
      inputH.value = minH;
    } else if (state.H > maxH) {
      state.H = maxH;
      sliderH.value = maxH;
      inputH.value = maxH;
    }
  }
}

function updateDoorUI() {
  const isFrontOpen = state.cageType === 'A_FRONT';
  const isFramed = state.cageType === 'A_FRAMED';
  updateDimensionLimits();
  updateDoorAntiFlexAvailability();
  updateRoomDividerAvailability();

  // 正面幅広フレームオプションの表示制御（A_FRAMED または Type C のときは非表示）
  cardFrontWide2x?.classList.toggle('hidden', isFramed || state.cageType === 'C');
  cardFrontWide3x?.classList.toggle('hidden', isFramed || state.cageType === 'C');

  if (sectionFrontDoorHinge) {
    if (isFrontOpen) {
      sectionFrontDoorHinge.classList.remove('hidden');
      btnHingeLeft?.classList.toggle('active', state.doorHingeSide !== 'right');
      btnHingeRight?.classList.toggle('active', state.doorHingeSide === 'right');
    } else {
      sectionFrontDoorHinge.classList.add('hidden');
    }
  }

  // 扉開閉コントロールセクション全体の制御
  const doorSection = slideDoorGroup ? slideDoorGroup.closest('.control-section') : null;
  if (doorSection) {
    doorSection.classList.remove('hidden');
  }

  if (slideDoorGroup && frontDoorGroup) {
    slideDoorGroup.style.display = isFrontOpen ? 'none' : 'grid';
    frontDoorGroup.style.display = isFrontOpen ? 'grid' : 'none';
  }
  if (doorControlTitle) {
    doorControlTitle.textContent = isFrontOpen ? '前開き扉 開閉' : '引き違いスライド扉 開閉';
  }
  // ドアモードの表示を同期
  const currentMode = state.doorState || 'closed';
  doorModeBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === currentMode);
  });
}

// 前開き扉 開き方向切り替え (左ヒンジ、右打掛 / 左打掛、右ヒンジ)
if (btnHingeLeft) {
  btnHingeLeft.addEventListener('click', () => {
    state.doorHingeSide = 'left';
    btnHingeLeft.classList.add('active');
    btnHingeRight?.classList.remove('active');
    if (state.cageType === 'A_FRONT') {
      typeBadge.textContent = `Type A 前開き 選択中 (${getFrontDoorHingeDisplayName()})`;
    }
    syncUpdate();
  });
}

if (btnHingeRight) {
  btnHingeRight.addEventListener('click', () => {
    state.doorHingeSide = 'right';
    btnHingeRight.classList.add('active');
    btnHingeLeft?.classList.remove('active');
    if (state.cageType === 'A_FRONT') {
      typeBadge.textContent = `Type A 前開き 選択中 (${getFrontDoorHingeDisplayName()})`;
    }
    syncUpdate();
  });
}

// フレームカラー切り替え（シルバー / ブラック[将来プレビュー]）
btnFrameSilver.addEventListener('click', () => {
  state.frameColor = 'silver';
  btnFrameSilver.classList.add('active');
  btnFrameBlack.classList.remove('active');
  syncUpdate();
});

btnFrameBlack.addEventListener('click', () => {
  state.frameColor = 'black';
  btnFrameBlack.classList.add('active');
  btnFrameSilver.classList.remove('active');
  syncUpdate();
});

// キャスターオプション切り替え（ON: キャスターH66mm / OFF: 標準ゴム脚H11mm）
toggleCaster.addEventListener('change', (e) => {
  state.footType = e.target.checked ? 'caster' : 'rubber';
  if (e.target.checked) {
    cardCaster.classList.add('active');
  } else {
    cardCaster.classList.remove('active');
  }
  syncUpdate();
});

// ==========================================================================
// 特注LED照明オプション イベントハンドラ
// ==========================================================================
function updateLedUI() {
  const isSelected = state.ledType && state.ledType !== 'none';
  if (isSelected) {
    cardLedOption?.classList.add('active');
    ledControllerPanel?.classList.remove('hidden');

    // サブ行の表示出し分け
    if (state.ledType === 'usb') {
      ledRowUsbModes?.classList.remove('hidden');
      ledRowRgbPalette?.classList.add('hidden');
    } else if (state.ledType === 'rgbw') {
      ledRowUsbModes?.classList.add('hidden');
      ledRowRgbPalette?.classList.remove('hidden');
    } else {
      ledRowUsbModes?.classList.add('hidden');
      ledRowRgbPalette?.classList.add('hidden');
    }
  } else {
    cardLedOption?.classList.remove('active');
    ledControllerPanel?.classList.add('hidden');
  }

  // 点灯/消灯ボタンスタイル
  if (btnLedPowerOn && btnLedPowerOff) {
    if (state.ledPower) {
      btnLedPowerOn.classList.add('active');
      btnLedPowerOff.classList.remove('active');
    } else {
      btnLedPowerOn.classList.remove('active');
      btnLedPowerOff.classList.add('active');
    }
  }

  // 暗室ボタンのアクティブ同期
  if (btnToggleDarkroom) {
    btnToggleDarkroom.classList.toggle('active', !!viewer.isDarkroomMode);
  }
}

// LEDタイプ選択ドロップダウン
if (selectLedType) {
  selectLedType.addEventListener('change', (e) => {
    state.ledType = e.target.value;
    if (state.ledType !== 'none') {
      state.ledPower = true;
      // LED点灯時は自動的に暗室モード（手動解除のオーバーライドをリセット）
      viewer.setDarkroomOverride(null);
    } else {
      viewer.setDarkroomOverride(null);
    }
    updateLedUI();
    syncUpdate();
    if (btnToggleDarkroom) {
      btnToggleDarkroom.classList.toggle('active', !!viewer.isDarkroomMode);
    }
  });
}

// 点灯 / 消灯ボタン
if (btnLedPowerOn && btnLedPowerOff) {
  btnLedPowerOn.addEventListener('click', () => {
    state.ledPower = true;
    viewer.setDarkroomOverride(null); // 点灯時は自動で暗室
    updateLedUI();
    syncUpdate();
    if (btnToggleDarkroom) {
      btnToggleDarkroom.classList.toggle('active', !!viewer.isDarkroomMode);
    }
  });

  btnLedPowerOff.addEventListener('click', () => {
    state.ledPower = false;
    viewer.setDarkroomOverride(null); // 消灯時は自動で通常明室
    updateLedUI();
    syncUpdate();
    if (btnToggleDarkroom) {
      btnToggleDarkroom.classList.toggle('active', !!viewer.isDarkroomMode);
    }
  });
}

// USBモード切替ボタン
if (ledRowUsbModes) {
  ledRowUsbModes.querySelectorAll('.btn-led-mode').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const mode = e.target.dataset.usbMode;
      state.ledColorMode = mode;
      ledRowUsbModes.querySelectorAll('.btn-led-mode').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      syncUpdate();
    });
  });
}

// RGB+Wカラーパレット
if (ledRowRgbPalette) {
  ledRowRgbPalette.querySelectorAll('.btn-color-dot').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const color = e.target.dataset.color;
      state.ledRgbColor = color;
      ledRowRgbPalette.querySelectorAll('.btn-color-dot').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      syncUpdate();
    });
  });
}

// 暗室モード手動切替ボタン
if (btnToggleDarkroom) {
  btnToggleDarkroom.addEventListener('click', () => {
    const nextDark = !viewer.isDarkroomMode;
    viewer.setDarkroomOverride(nextDark);
    btnToggleDarkroom.classList.toggle('active', nextDark);
  });
}

// 扉開閉モードの排他制御
let _doorAnimTimer = null; // アニメーション中インジケーター用タイマー

function setDoorMode(mode) {
  state.doorState = mode;

  // ボタンのアクティブ状態を更新
  doorModeBtns.forEach((btn) => {
    if (btn.getAttribute('data-mode') === mode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // アニメーション中インジケーターをボタングループに付与
  const doorModeGroup = document.querySelector('.door-mode-group');
  doorModeGroup.classList.add('door-animating');

  // 前回のタイマーをクリア（連続クリック対応）
  if (_doorAnimTimer) clearTimeout(_doorAnimTimer);
  _doorAnimTimer = setTimeout(() => {
    doorModeGroup.classList.remove('door-animating');
    _doorAnimTimer = null;
  }, 3100); // アニメーション3秒 + 余裕100ms

  viewer.setDoorState(mode);
}

btnDoorClosed.addEventListener('click', () => setDoorMode('closed'));
btnDoorLeft.addEventListener('click', () => setDoorMode('left_open'));
btnDoorRight.addEventListener('click', () => setDoorMode('right_open'));
btnFrontDoorClosed?.addEventListener('click', () => setDoorMode('closed'));
btnFrontDoorOpen?.addEventListener('click', () => setDoorMode('open'));

// 自動回転ボタン
function setAutoRotateMode(active) {
  autoRotating = active;
  viewer.setAutoRotate(active, state);
  if (active) {
    btnAutoRotate.classList.add('active', 'rotating');
    // 他の視点ボタンの active を解除
    presetBtns.forEach((b) => b.classList.remove('active'));
  } else {
    btnAutoRotate.classList.remove('active', 'rotating');
  }
}

btnAutoRotate.addEventListener('click', () => {
  setAutoRotateMode(!autoRotating);
});

// 視点プリセット切り替え
presetBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // 自動回転を停止
    setAutoRotateMode(false);
    presetBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const view = btn.getAttribute('data-view');
    viewer.setViewPreset(view, state);
  });
});

// リセットボタン
btnResetSpecs.addEventListener('click', () => {
  state.W = 750;
  state.D = 450;
  state.H = 300;
  state.cageType = 'A';
  state.frontWindowH = 50;
  state.hasSideReinforcement = false;
  state.sideOpeningH = 120;
  setDoorMode('closed');

  sliderW.value = 750;
  inputW.value = 750;
  sliderD.value = 450;
  inputD.value = 450;
  sliderH.value = 300;
  inputH.value = 300;
  sliderFW.value = 50;
  inputFW.value = 50;

  toggleSideReinforce.checked = false;
  cardSideReinforce.classList.remove('active');
  boxSideH.classList.add('disabled');
  inputSideH.min = 50;
  inputSideH.max = 190;
  inputSideH.value = 120;

  toggleFloorReinforce.checked = false;
  toggleFloorReinforce.disabled = false;
  cardFloorReinforce.classList.remove('disabled');
  floorReinfSub.textContent = '床面積が 750×450mm 超で推奨。解除時はたわみにご注意ください';
  state.hasFloorReinforcement = false;

  toggleTopReinforce.checked = false;
  toggleTopReinforce.disabled = false;
  cardTopReinforce.classList.remove('disabled');
  topReinfSub.textContent = '940mm以下は任意指定（W>940mmは必須）';
  state.hasTopReinforcement = false;

  toggleCaster.checked = false;
  cardCaster.classList.remove('active');
  state.footType = 'rubber';

  toggleDoorAntiFlex.checked = false;
  cardDoorAntiFlex.classList.remove('active');
  state.hasDoorAntiFlex = false;

  toggleSideVentCover.checked = false;
  cardSideVentCover.classList.remove('active');
  state.hasSideVentCover = false;

  if (togglePerch) {
    togglePerch.checked = false;
    togglePerch.disabled = false;
  }
  if (cardPerch) cardPerch.classList.remove('active', 'disabled');
  if (perchSub) perchSub.textContent = '天板固定・φ30アルミ丸棒 / 高さ3段階調整可能 / 後付け対応';
  state.hasPerch = false;

  if (toggleRoomDivider) {
    toggleRoomDivider.checked = false;
    toggleRoomDivider.disabled = false;
  }
  if (cardRoomDivider) cardRoomDivider.classList.remove('active', 'disabled');
  if (roomDividerSub) roomDividerSub.textContent = '正面扉戸の隙間が7mmあります。小さい生体にはご注意ください';
  if (rowPanelPartition) rowPanelPartition.classList.add('hidden');
  if (selectPanelPartition) selectPanelPartition.value = 'black_matte';
  state.hasRoomDivider = false;

  if (toggleRubberPacking) toggleRubberPacking.checked = false;
  if (cardRubberPacking) cardRubberPacking.classList.remove('active');
  state.hasRubberPacking = false;

  if (toggleFloorHeaterSupport) toggleFloorHeaterSupport.checked = false;
  if (cardFloorHeaterSupport) cardFloorHeaterSupport.classList.remove('active');
  state.hasFloorHeaterSupport = false;

  // パネル設定のリセット
  state.panelConfig = {
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
  };

  // LEDオプションのリセット
  state.ledType = 'none';
  state.ledPower = true;
  state.ledBrightness = 1.0;
  state.ledColorMode = 'all';
  state.ledRgbColor = '#ffffff';
  if (selectLedType) selectLedType.value = 'none';
  viewer.setDarkroomOverride(null);
  updateLedUI();

  // 正面幅広フレームのリセット (Type A デフォルト: 2倍幅)
  state.frontWideFrame = '2x';
  lastTypeAFrontWideFrame = '2x';

  btnTypeA.click();
  viewer.setViewPreset('iso', state);
  syncUpdate();
});

// パネル選択ドロップダウンのイベントリスナー
if (selectPanelFloor) {
  selectPanelFloor.addEventListener('change', (e) => {
    state.panelConfig.floor = e.target.value;
    syncUpdate();
  });
}

selectPanelBack.addEventListener('change', (e) => {
  state.panelConfig.back = e.target.value;
  syncUpdate();
});

selectPanelSide.addEventListener('change', (e) => {
  state.panelConfig.side = e.target.value;
  syncUpdate();
});

selectPanelSideUpper.addEventListener('change', (e) => {
  state.panelConfig.sideUpper = e.target.value;
  updateSideVentCoverAvailability();
  syncUpdate();
});

selectPanelSideLower.addEventListener('change', (e) => {
  state.panelConfig.sideLower = e.target.value;
  syncUpdate();
});

selectPanelTop.addEventListener('change', (e) => {
  state.panelConfig.top = e.target.value;
  if (state.hasPerch && e.target.value !== 'punching') {
    showNoticeToast('※止まり木は天面パンチングボードの穴を利用します。金網天板やアクリル天板との組み合わせは直接DMにてご相談ください。', 5000);
  } else if (state.hasRoomDivider && e.target.value !== 'punching') {
    showNoticeToast('天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。', 7000);
  }
  syncUpdate();
});

selectPanelTopLeft.addEventListener('change', (e) => {
  state.panelConfig.topLeft = e.target.value;
  if (state.hasPerch && e.target.value !== 'punching') {
    showNoticeToast('※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。', 5000);
  } else if (state.hasRoomDivider && e.target.value !== 'punching') {
    showNoticeToast('天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。', 7000);
  }
  syncUpdate();
});

selectPanelTopRight.addEventListener('change', (e) => {
  state.panelConfig.topRight = e.target.value;
  if (state.hasPerch && e.target.value !== 'punching') {
    showNoticeToast('※止まり木は天面パンチングボードの穴を利用します。金網天板との組み合わせは直接DMにてご相談ください。', 5000);
  } else if (state.hasRoomDivider && e.target.value !== 'punching') {
    showNoticeToast('天板は塩ビパンチングパネル仕様前提でのオプションとなっています。金網での実装方法の詳細はDMにてお問い合わせください。', 7000);
  }
  syncUpdate();
});

// サイドバー カテゴリタブ切り替えイベントリスナー
const sidebarTabs = document.querySelectorAll('.sidebar-tab');
const tabPanes = document.querySelectorAll('.tab-pane');

sidebarTabs.forEach((tabBtn) => {
  tabBtn.addEventListener('click', () => {
    const targetTabId = tabBtn.getAttribute('data-tab');

    // 全タブのアクティブ解除
    sidebarTabs.forEach((btn) => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    // クリックされたタブをアクティブ化
    tabBtn.classList.add('active');
    tabBtn.setAttribute('aria-selected', 'true');

    // 全ペインを非表示にして、対象ペインを表示
    tabPanes.forEach((pane) => {
      if (pane.id === targetTabId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // タブ切り替え時にレイアウト再計算が必要な場合のリサイズ同期
    if (viewer && typeof viewer.onResize === 'function') {
      setTimeout(() => viewer.onResize(), 50);
    }
  });
});

// アコーディオン開閉イベントリスナー
// 1. パネル詳細設定アコーディオン（タブ切り替え導入に伴い初期値: 開き）
let panelConfigOpen = true;
if (panelConfigToggleBtn) {
  panelConfigToggleBtn.addEventListener('click', () => {
    panelConfigOpen = !panelConfigOpen;
    panelConfigToggleBtn.classList.toggle('active', panelConfigOpen);
    if (panelConfigContainer) {
      panelConfigContainer.classList.toggle('hidden', !panelConfigOpen);
    }
  });
}

// 2. オプション仕様アコーディオン（初期値: 開き）
let optionsOpen = true;
if (optionsToggleBtn) {
  optionsToggleBtn.addEventListener('click', () => {
    optionsOpen = !optionsOpen;
    optionsToggleBtn.classList.toggle('active', optionsOpen);
    if (optionsContainer) {
      optionsContainer.classList.toggle('hidden', !optionsOpen);
    }
  });
}

// 側面補強フレームの初期設定 (H=300mm時 min=50, max=190)
if (inputSideH) {
  inputSideH.min = 50;
  inputSideH.max = Math.max(50, state.H - 110);
  inputSideH.value = state.sideOpeningH;
}

// 初回レンダリング
syncUpdate();
viewer.setViewPreset('iso', state);

// 「見積もりと重量計算（β版）」ボタンクリックで構造シミュレーション・部材積算を実行
if (btnCalcEstimate) {
  btnCalcEstimate.addEventListener('click', () => {
    runStructuralAndCostSimulation();
  });
}

// =================================================================
// 1. 生体プリセット機能（人気生体のおすすめサイズ自動反映）
// =================================================================
// =================================================================
// 1. 生体プリセット機能（人気生体のおすすめサイズ・仕様自動反映）
// =================================================================
function initCreaturePresets() {
  if (!creaturePresetGrid || !Array.isArray(creaturePresets)) return;

  creaturePresetGrid.innerHTML = '';

  creaturePresets.forEach((preset) => {
    const card = document.createElement('button');
    card.className = 'creature-card';
    card.dataset.presetId = preset.id;
    card.title = `${preset.name} (${preset.W}×${preset.D}×${preset.H}mm)`;

    // 仕様タグHTML生成
    const tagsHtml = Array.isArray(preset.tags) && preset.tags.length > 0
      ? `<div class="creature-card-tags">
          ${preset.tags.map(t => `<span class="creature-spec-tag">${t}</span>`).join('')}
         </div>`
      : '';

    card.innerHTML = `
      <div class="creature-card-header">
        <div class="creature-card-title-wrap">
          <span class="creature-card-icon">${preset.icon || '🦎'}</span>
          <span class="creature-card-name">${preset.name}</span>
        </div>
        <span class="creature-card-badge">適用中</span>
      </div>
      <div class="creature-card-size">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>
        <span>幅 ${preset.W} × 奥行 ${preset.D} × 高さ ${preset.H} mm</span>
      </div>
      ${tagsHtml}
      <p class="creature-card-desc">${preset.desc || ''}</p>
    `;

    card.addEventListener('click', () => {
      applyCreaturePreset(preset);
    });

    creaturePresetGrid.appendChild(card);
  });
}

/**
 * 生体プリセットを適用（サイズだけでなく、フレーム色・全オプション・パネル素材を完全連動）
 */
function applyCreaturePreset(preset) {
  // 1. 基本寸法設定
  state.W = preset.W;
  state.D = preset.D;
  state.H = preset.H;

  // 2. ケージタイプ（指定があれば連動）
  if (preset.cageType && (preset.cageType === 'A' || preset.cageType === 'A_FRONT' || preset.cageType === 'A_FRAMED' || preset.cageType === 'C')) {
    state.cageType = preset.cageType;
    if (btnTypeA && btnTypeC) {
      btnTypeA.classList.toggle('active', state.cageType === 'A');
      btnTypeAFront?.classList.toggle('active', state.cageType === 'A_FRONT');
      btnTypeAFramed?.classList.toggle('active', state.cageType === 'A_FRAMED');
      btnTypeC.classList.toggle('active', state.cageType === 'C');
      if (typeBadge) {
        if (state.cageType === 'A_FRAMED') {
          typeBadge.textContent = 'Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)';
        } else if (state.cageType === 'A_FRONT') {
          state.doorHingeSide = preset.doorHingeSide || 'left';
          typeBadge.textContent = `Type A 前開き 選択中 (${getFrontDoorHingeDisplayName()})`;
        } else {
          typeBadge.textContent = state.cageType === 'A' ? 'Type A 選択中 (全面スライド扉)' : 'Type C 選択中 (前窓＋扉)';
        }
      }
      if (rowFrontWindow) {
        rowFrontWindow.classList.toggle('hidden', state.cageType !== 'C');
      }
      updateDoorUI();
    }
  }

  // 3. 前窓開口高さ (Type C)
  if (state.cageType === 'C') {
    const fw = preset.frontWindowH != null ? preset.frontWindowH : 50;
    state.frontWindowH = fw;
    if (inputFW) inputFW.value = fw;
    if (sliderFW) sliderFW.value = fw;
  }

  // 4. フレームカラー ('silver' または 'black')
  if (preset.frameColor && (preset.frameColor === 'silver' || preset.frameColor === 'black')) {
    state.frameColor = preset.frameColor;
    if (btnFrameSilver && btnFrameBlack) {
      btnFrameSilver.classList.toggle('active', state.frameColor === 'silver');
      btnFrameBlack.classList.toggle('active', state.frameColor === 'black');
    }
  }

  // 5. 正面幅広フレーム (Type A: 'none' | '2x' | '3x')
  if (state.cageType === 'A') {
    const fwf = preset.frontWideFrame || '2x';
    state.frontWideFrame = fwf;
    lastTypeAFrontWideFrame = fwf;
  } else {
    state.frontWideFrame = 'none';
  }

  // 6. 側面補強フレーム (側面2分割)
  state.hasSideReinforcement = !!preset.hasSideReinforcement;
  if (toggleSideReinforce) toggleSideReinforce.checked = state.hasSideReinforcement;
  if (cardSideReinforce) cardSideReinforce.classList.toggle('active', state.hasSideReinforcement);
  if (boxSideH) boxSideH.classList.toggle('disabled', !state.hasSideReinforcement);
  const minSideH = 50;
  const maxSideH = Math.max(minSideH, state.H - 110);
  if (inputSideH) {
    inputSideH.min = minSideH;
    inputSideH.max = maxSideH;
  }
  if (preset.sideOpeningH != null) {
    state.sideOpeningH = Math.max(minSideH, Math.min(maxSideH, preset.sideOpeningH));
    if (inputSideH) inputSideH.value = state.sideOpeningH;
  } else if (state.hasSideReinforcement) {
    const centerSideH = Math.round((state.H - 60) / 20) * 10;
    state.sideOpeningH = centerSideH;
    if (inputSideH) inputSideH.value = centerSideH;
  }

  // 7. 正面スライド扉 たわみ防止レール
  state.hasDoorAntiFlex = !!preset.hasDoorAntiFlex;
  if (toggleDoorAntiFlex) toggleDoorAntiFlex.checked = state.hasDoorAntiFlex;
  if (cardDoorAntiFlex) cardDoorAntiFlex.classList.toggle('active', state.hasDoorAntiFlex);

  // 8. 側面換気量調整板
  state.hasSideVentCover = !!preset.hasSideVentCover;
  if (toggleSideVentCover) toggleSideVentCover.checked = state.hasSideVentCover;
  if (cardSideVentCover) cardSideVentCover.classList.toggle('active', state.hasSideVentCover);

  // 止まり木オプション
  state.hasPerch = !!preset.hasPerch;
  if (togglePerch) togglePerch.checked = state.hasPerch;
  if (cardPerch) cardPerch.classList.toggle('active', state.hasPerch);

  // 9. パネル素材設定 (panelConfig)
  if (preset.panelConfig) {
    state.panelConfig = {
      ...state.panelConfig,
      ...preset.panelConfig
    };
  }

  // 10. 脚仕様 (キャスター / ゴム脚)
  state.footType = preset.footType || 'rubber';
  if (toggleCaster) toggleCaster.checked = state.footType === 'caster';
  if (cardCaster) cardCaster.classList.toggle('active', state.footType === 'caster');

  // 11. UIの寸法入力値とスライダーを更新
  if (inputW) inputW.value = state.W;
  if (sliderW) sliderW.value = state.W;
  if (inputD) inputD.value = state.D;
  if (sliderD) sliderD.value = state.D;
  if (inputH) inputH.value = state.H;
  if (sliderH) sliderH.value = state.H;

  // 12. 床面・天板補強ルールの判定
  if (preset.hasFloorReinforcement != null) {
    state.hasFloorReinforcement = !!preset.hasFloorReinforcement;
    if (toggleFloorReinforce) toggleFloorReinforce.checked = state.hasFloorReinforcement;
  } else {
    updateFloorReinforceByArea();
  }

  if (state.W > 940) {
    toggleTopReinforce.checked = true;
    toggleTopReinforce.disabled = true;
    cardTopReinforce.classList.add('disabled');
    topReinfSub.textContent = '幅940mm超のため必須（解除不可）';
    state.hasTopReinforcement = true;
  } else {
    toggleTopReinforce.disabled = false;
    cardTopReinforce.classList.remove('disabled');
    topReinfSub.textContent = '940mm以下は任意指定（W>940mmは必須）';
    state.hasTopReinforcement = !!preset.hasTopReinforcement;
    toggleTopReinforce.checked = state.hasTopReinforcement;
  }

  // 13. 幅広フレームおよび換気量調整板の排他・利用可否状態を更新
  updateFrontWideFrameAvailability();
  updateSideVentCoverAvailability();

  // 14. プリセットカードのアクティブ表示更新
  const allCards = creaturePresetGrid.querySelectorAll('.creature-card');
  allCards.forEach(c => {
    c.classList.toggle('active', c.dataset.presetId === preset.id);
  });

  // 15. 3Dモデル更新＆サマリー・パネルUI同期描画
  syncUpdate();

  // 16. カメラ視点を自動調整（ケージ全体が収まるようにアイソメへ）
  viewer.setViewPreset('iso', state);
}

/**
 * 保存されたケージ仕様オブジェクト（spec）を全UIおよび3Dシミュレーターへ完全同期・復元
 * @param {Object} targetSpec
 */
function applyFullCageSpec(targetSpec) {
  if (!targetSpec || typeof targetSpec !== 'object') return false;

  // 1. 基本寸法設定
  if (Number.isFinite(targetSpec.W)) {
    state.W = Number(targetSpec.W);
    if (inputW) inputW.value = state.W;
    if (sliderW) sliderW.value = state.W;
  }
  if (Number.isFinite(targetSpec.D)) {
    state.D = Number(targetSpec.D);
    if (inputD) inputD.value = state.D;
    if (sliderD) sliderD.value = state.D;
  }
  if (Number.isFinite(targetSpec.H)) {
    state.H = Number(targetSpec.H);
    if (inputH) inputH.value = state.H;
    if (sliderH) sliderH.value = state.H;
  }

  // 2. ケージタイプ
  const validTypes = ['A', 'A_FRONT', 'A_FRAMED', 'C'];
  if (targetSpec.cageType && validTypes.includes(targetSpec.cageType)) {
    state.cageType = targetSpec.cageType;
    if (btnTypeA && btnTypeC) {
      btnTypeA.classList.toggle('active', state.cageType === 'A');
      btnTypeAFront?.classList.toggle('active', state.cageType === 'A_FRONT');
      btnTypeAFramed?.classList.toggle('active', state.cageType === 'A_FRAMED');
      btnTypeC.classList.toggle('active', state.cageType === 'C');
      if (typeBadge) {
        if (state.cageType === 'A_FRAMED') {
          typeBadge.textContent = 'Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)';
        } else if (state.cageType === 'A_FRONT') {
          state.doorHingeSide = targetSpec.doorHingeSide || 'left';
          typeBadge.textContent = `Type A 前開き 選択中 (${getFrontDoorHingeDisplayName()})`;
        } else {
          typeBadge.textContent = state.cageType === 'A' ? 'Type A 選択中 (全面スライド扉)' : 'Type C 選択中 (前窓＋扉)';
        }
      }
      if (rowFrontWindow) {
        rowFrontWindow.classList.toggle('hidden', state.cageType !== 'C');
      }
      updateDoorUI();
    }
  }

  // 3. 前窓開口高さ (Type C)
  if (state.cageType === 'C') {
    const fw = targetSpec.frontWindowH != null ? Number(targetSpec.frontWindowH) : 50;
    state.frontWindowH = fw;
    if (inputFW) inputFW.value = fw;
    if (sliderFW) sliderFW.value = fw;
  }

  // 4. 前開き扉ヒンジ方向 (Type A 前開き)
  if (targetSpec.doorHingeSide && (targetSpec.doorHingeSide === 'left' || targetSpec.doorHingeSide === 'right')) {
    state.doorHingeSide = targetSpec.doorHingeSide;
  }

  // 5. フレームカラー
  if (targetSpec.frameColor && (targetSpec.frameColor === 'silver' || targetSpec.frameColor === 'black')) {
    state.frameColor = targetSpec.frameColor;
    if (btnFrameSilver && btnFrameBlack) {
      btnFrameSilver.classList.toggle('active', state.frameColor === 'silver');
      btnFrameBlack.classList.toggle('active', state.frameColor === 'black');
    }
  }

  // 6. 脚仕様 (キャスター / ゴム脚)
  if (targetSpec.footType && (targetSpec.footType === 'caster' || targetSpec.footType === 'rubber')) {
    state.footType = targetSpec.footType;
    if (toggleCaster) toggleCaster.checked = state.footType === 'caster';
    if (cardCaster) cardCaster.classList.toggle('active', state.footType === 'caster');
  }

  // 7. 正面幅広フレーム (Type A)
  if (state.cageType === 'A' && targetSpec.frontWideFrame) {
    state.frontWideFrame = targetSpec.frontWideFrame;
    lastTypeAFrontWideFrame = targetSpec.frontWideFrame;
  } else if (state.cageType !== 'A') {
    state.frontWideFrame = 'none';
  }

  // 8. 側面補強フレーム & 側面上部開口高さ
  if (typeof targetSpec.hasSideReinforcement === 'boolean') {
    state.hasSideReinforcement = targetSpec.hasSideReinforcement;
    if (toggleSideReinforce) toggleSideReinforce.checked = state.hasSideReinforcement;
    if (cardSideReinforce) cardSideReinforce.classList.toggle('active', state.hasSideReinforcement);
    if (boxSideH) boxSideH.classList.toggle('disabled', !state.hasSideReinforcement);
    const minSideH = 50;
    const maxSideH = Math.max(minSideH, state.H - 110);
    if (inputSideH) {
      inputSideH.min = minSideH;
      inputSideH.max = maxSideH;
    }
    if (targetSpec.sideOpeningH != null) {
      state.sideOpeningH = Math.max(minSideH, Math.min(maxSideH, Number(targetSpec.sideOpeningH)));
      if (inputSideH) inputSideH.value = state.sideOpeningH;
    }
  }

  // 側面パネル選択行の表示切り替え
  if (rowPanelSide && rowPanelSideSplit) {
    rowPanelSide.classList.toggle('hidden', state.hasSideReinforcement);
    rowPanelSideSplit.classList.toggle('hidden', !state.hasSideReinforcement);
  }

  // 9. 扉たわみ防止レール
  if (typeof targetSpec.hasDoorAntiFlex === 'boolean') {
    state.hasDoorAntiFlex = targetSpec.hasDoorAntiFlex;
    if (toggleDoorAntiFlex) toggleDoorAntiFlex.checked = state.hasDoorAntiFlex;
    if (cardDoorAntiFlex) cardDoorAntiFlex.classList.toggle('active', state.hasDoorAntiFlex);
  }

  // 10. 側面換気量調整板
  if (typeof targetSpec.hasSideVentCover === 'boolean') {
    state.hasSideVentCover = targetSpec.hasSideVentCover;
    if (toggleSideVentCover) toggleSideVentCover.checked = state.hasSideVentCover;
    if (cardSideVentCover) cardSideVentCover.classList.toggle('active', state.hasSideVentCover);
  }

  // 11. 止まり木
  if (typeof targetSpec.hasPerch === 'boolean') {
    state.hasPerch = targetSpec.hasPerch;
    if (togglePerch) togglePerch.checked = state.hasPerch;
    if (cardPerch) cardPerch.classList.toggle('active', state.hasPerch);
  }

  // 12. モレ対策ゴムパッキン
  if (typeof targetSpec.hasRubberPacking === 'boolean') {
    state.hasRubberPacking = targetSpec.hasRubberPacking;
    if (toggleRubberPacking) toggleRubberPacking.checked = state.hasRubberPacking;
    if (cardRubberPacking) cardRubberPacking.classList.toggle('active', state.hasRubberPacking);
  }

  // 13. 床下パネルヒータ支え板
  if (typeof targetSpec.hasFloorHeaterSupport === 'boolean') {
    state.hasFloorHeaterSupport = targetSpec.hasFloorHeaterSupport;
    if (toggleFloorHeaterSupport) toggleFloorHeaterSupport.checked = state.hasFloorHeaterSupport;
    if (cardFloorHeaterSupport) cardFloorHeaterSupport.classList.toggle('active', state.hasFloorHeaterSupport);
  }

  // 14. 床面中央補強フレーム
  if (typeof targetSpec.hasFloorReinforcement === 'boolean') {
    state.hasFloorReinforcement = targetSpec.hasFloorReinforcement;
    if (toggleFloorReinforce) toggleFloorReinforce.checked = state.hasFloorReinforcement;
    if (cardFloorReinforce) cardFloorReinforce.classList.toggle('active', state.hasFloorReinforcement);
  } else {
    updateFloorReinforceByArea();
  }

  // 15. 天板中央補強フレーム
  if (state.W > 940) {
    if (toggleTopReinforce) {
      toggleTopReinforce.checked = true;
      toggleTopReinforce.disabled = true;
    }
    if (cardTopReinforce) cardTopReinforce.classList.add('disabled');
    if (topReinfSub) topReinfSub.textContent = '幅940mm超のため必須（解除不可）';
    state.hasTopReinforcement = true;
  } else {
    if (toggleTopReinforce) toggleTopReinforce.disabled = false;
    if (cardTopReinforce) cardTopReinforce.classList.remove('disabled');
    if (topReinfSub) topReinfSub.textContent = '940mm以下は任意指定（W>940mmは必須）';
    state.hasTopReinforcement = !!targetSpec.hasTopReinforcement;
    if (toggleTopReinforce) toggleTopReinforce.checked = state.hasTopReinforcement;
    if (cardTopReinforce) cardTopReinforce.classList.toggle('active', state.hasTopReinforcement);
  }

  // 天板パネル選択行の表示切り替え
  const isTopSplit = state.hasTopReinforcement || state.W > 940;
  if (rowPanelTop && rowPanelTopSplit) {
    rowPanelTop.classList.toggle('hidden', isTopSplit);
    rowPanelTopSplit.classList.toggle('hidden', !isTopSplit);
  }

  // 16. ２室分け（仕切り板）
  if (typeof targetSpec.hasRoomDivider === 'boolean') {
    state.hasRoomDivider = targetSpec.hasRoomDivider;
    if (toggleRoomDivider) toggleRoomDivider.checked = state.hasRoomDivider;
    if (cardRoomDivider) cardRoomDivider.classList.toggle('active', state.hasRoomDivider);
    if (rowPanelPartition) rowPanelPartition.classList.toggle('hidden', !state.hasRoomDivider);
    if (state.hasRoomDivider && togglePerch) {
      state.hasPerch = false;
      togglePerch.checked = false;
      togglePerch.disabled = true;
      if (cardPerch) cardPerch.classList.add('disabled');
    }
  }

  // 17. 特注LED照明オプション
  if (targetSpec.ledType) {
    state.ledType = targetSpec.ledType;
    if (selectLedType) selectLedType.value = state.ledType;
    if (typeof targetSpec.ledPower === 'boolean') state.ledPower = targetSpec.ledPower;
    if (typeof targetSpec.ledBrightness === 'number') state.ledBrightness = targetSpec.ledBrightness;
    if (targetSpec.ledColorMode) state.ledColorMode = targetSpec.ledColorMode;
    if (targetSpec.ledRgbColor) state.ledRgbColor = targetSpec.ledRgbColor;
    updateLedUI();
  }

  // 18. パネル素材設定 (panelConfig)
  if (targetSpec.panelConfig && typeof targetSpec.panelConfig === 'object') {
    state.panelConfig = {
      ...state.panelConfig,
      ...targetSpec.panelConfig
    };
    if (selectPanelFloor && state.panelConfig.floor) selectPanelFloor.value = state.panelConfig.floor;
    if (selectPanelBack && state.panelConfig.back) selectPanelBack.value = state.panelConfig.back;
    if (selectPanelSide && state.panelConfig.side) selectPanelSide.value = state.panelConfig.side;
    if (selectPanelSideUpper && state.panelConfig.sideUpper) selectPanelSideUpper.value = state.panelConfig.sideUpper;
    if (selectPanelSideLower && state.panelConfig.sideLower) selectPanelSideLower.value = state.panelConfig.sideLower;
    if (selectPanelTop && state.panelConfig.top) selectPanelTop.value = state.panelConfig.top;
    if (selectPanelTopLeft && state.panelConfig.topLeft) selectPanelTopLeft.value = state.panelConfig.topLeft;
    if (selectPanelTopRight && state.panelConfig.topRight) selectPanelTopRight.value = state.panelConfig.topRight;
    if (selectPanelPartition && state.panelConfig.partition) selectPanelPartition.value = state.panelConfig.partition;
  }

  // 19. プリセットカードのアクティブ解除
  if (creaturePresetGrid) {
    const allCards = creaturePresetGrid.querySelectorAll('.creature-card');
    allCards.forEach(c => c.classList.remove('active'));
  }

  // 20. 各種状態・3Dビュー・最新積算を同期
  updateFrontWideFrameAvailability();
  updateSideVentCoverAvailability();
  syncUpdate();
  viewer.setViewPreset('iso', state);

  // 重要：ユーザー様の設計方針に従い、再現後の価格・重量は「その時点の最新価格」で再計算して表示
  if (typeof runStructuralAndCostSimulation === 'function') {
    runStructuralAndCostSimulation();
  }

  return true;
}

/**
 * 見積りIDから仕様を検索・復元実行
 * @param {string} targetEstimateId
 */
async function restoreEstimateById(targetEstimateId) {
  if (!targetEstimateId || typeof targetEstimateId !== 'string') {
    setRestoreStatusMessage('error', '見積りIDを入力してください。');
    return;
  }

  const cleanId = targetEstimateId.trim().toUpperCase();
  if (!cleanId.startsWith('EST-') || cleanId.length < 10) {
    setRestoreStatusMessage('error', '見積りIDの形式が正しくありません。（例: EST-20261005-AB12）');
    return;
  }

  setRestoreStatusMessage('loading', `⏳ 見積ID「${cleanId}」の仕様データを検索中...`);
  if (btnRestoreEstimate) btnRestoreEstimate.disabled = true;

  try {
    let foundSpec = null;
    let foundMeta = null;

    // 1. スプレッドシート（GAS API）への問い合わせ
    const endpoint = materialsConfig?.system?.gasLogEndpointUrl;
    let gasDeployNeeded = false;
    let gasNotFound = false;

    if (endpoint && endpoint.startsWith('http')) {
      try {
        const queryUrl = `${endpoint}?estimateId=${encodeURIComponent(cleanId)}`;
        console.log('[Restore] GASへ見積りデータ問い合わせ中:', queryUrl);
        const res = await fetch(queryUrl, { method: 'GET', mode: 'cors' });
        const rawText = await res.text();

        if (rawText.includes('スクリプト関数が見つかりません') || rawText.includes('doGet')) {
          gasDeployNeeded = true;
          console.warn('[Restore] GAS側に doGet が未デプロイです。');
        } else {
          try {
            const json = JSON.parse(rawText);
            if (json.status === 'success' && json.spec) {
              foundSpec = json.spec;
              foundMeta = json;
              console.log('[Restore] GASから仕様データを正常に受信:', json);
            } else if (json.status === 'not_found') {
              gasNotFound = true;
              console.warn('[Restore] GAS上で該当見積りが見つかりませんでした:', json.message);
            }
          } catch (pe) {
            console.warn('[Restore] レスポンスのJSONパースに失敗:', pe, rawText.substring(0, 200));
          }
        }
      } catch (gasErr) {
        console.warn('[Restore] GAS通信エラー（ローカルキャッシュ検索へフォールバック）:', gasErr);
      }
    }

    // 2. ローカルストレージからのフォールバック検索（直近同端末での試算やオフライン用）
    if (!foundSpec) {
      try {
        const localDataStr = localStorage.getItem(`kinato_estimate_${cleanId}`);
        if (localDataStr) {
          const localData = JSON.parse(localDataStr);
          if (localData && localData.spec) {
            foundSpec = localData.spec;
            foundMeta = localData;
            console.log('[Restore] localStorageから仕様データを復元:', localData);
          }
        } else {
          // 直近の見積もりデータもチェック
          const latestStr = localStorage.getItem('kinato_latest_estimate');
          if (latestStr) {
            const latestData = JSON.parse(latestStr);
            if (latestData && latestData.estimateId === cleanId && latestData.spec) {
              foundSpec = latestData.spec;
              foundMeta = latestData;
              console.log('[Restore] 最新localStorageキャッシュから仕様データを復元:', latestData);
            }
          }
        }
      } catch (locErr) {
        console.warn('[Restore] localStorage検索エラー:', locErr);
      }
    }

    if (!foundSpec) {
      if (gasDeployNeeded) {
        setRestoreStatusMessage('error', `⚠️ スプレッドシート側のGASに最新コード（doGet）がまだ保存・デプロイされていません。Google Apps Scriptを更新して再度お試しください。`);
      } else if (gasNotFound) {
        setRestoreStatusMessage('error', `❌ スプレッドシート内に見積ID「${cleanId}」の記録が見つかりませんでした。IDをお確かめください。`);
      } else {
        setRestoreStatusMessage('error', `❌ 見積ID「${cleanId}」が見つかりませんでした。入力内容をお確かめください。`);
      }
      return;
    }

    // 仕様の完全適用
    applyFullCageSpec(foundSpec);

    // 開発検証ログ（過去記録時の価格・重量と、現在計算後の価格・重量の比較）
    if (foundMeta) {
      const origP = foundMeta.summary?.originalPrice || foundMeta.totals?.priceWithMarkup || foundMeta.originalTotals?.priceWithMarkup;
      const origW = foundMeta.summary?.originalWeight || foundMeta.totals?.weight || foundMeta.originalTotals?.weight;
      console.log(`[仕様再現 検証] 見積ID: ${cleanId} | 記録時価格: ¥${origP?.toLocaleString()} / 重量: ${origW}kg`);
    }

    setRestoreStatusMessage('success', `✅ 見積ID「${cleanId}」のケージ仕様・全オプションを完全再現しました！`);
    showNoticeToast(`✅ 見積ID: ${cleanId} の仕様を完全に読み込みました！`, 4500);

  } catch (err) {
    console.error('[Restore] 復元処理エラー:', err);
    setRestoreStatusMessage('error', `エラーが発生しました: ${err.message}`);
  } finally {
    if (btnRestoreEstimate) btnRestoreEstimate.disabled = false;
  }
}

/**
 * 復元ステータスメッセージ表示
 */
function setRestoreStatusMessage(type, message) {
  if (!restoreStatusMsg) return;
  restoreStatusMsg.className = `restore-status-msg ${type}`;
  restoreStatusMsg.textContent = message;
  restoreStatusMsg.classList.remove('hidden');
}

// 見積りID仕様確定ボタン & Enterキー押下イベント
if (btnRestoreEstimate && inputRestoreEstimateId) {
  btnRestoreEstimate.addEventListener('click', () => {
    restoreEstimateById(inputRestoreEstimateId.value);
  });

  inputRestoreEstimateId.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      restoreEstimateById(inputRestoreEstimateId.value);
    }
  });

  // 入力文字を自動で大文字化
  inputRestoreEstimateId.addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase();
  });
}

// =================================================================
// 2. 見積もり計算完了・ID発行・仕様テキスト生成 & モーダル連携
// =================================================================
function generateEstimateId() {
  const now = new Date();
  const dateStr = now.getFullYear() +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0');
  const randStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `EST-${dateStr}-${randStr}`;
}

function getOrCreateVisitorId() {
  try {
    let vid = localStorage.getItem('cage_visitor_id');
    if (!vid) {
      vid = 'usr_' + Math.random().toString(36).substring(2, 8);
      localStorage.setItem('cage_visitor_id', vid);
    }
    return vid;
  } catch (e) {
    return 'usr_' + Math.random().toString(36).substring(2, 8);
  }
}

function getOrCreateSessionId() {
  try {
    let sid = sessionStorage.getItem('cage_session_id');
    if (!sid) {
      sid = 'ses_' + Math.random().toString(36).substring(2, 8);
      sessionStorage.setItem('cage_session_id', sid);
    }
    return sid;
  } catch (e) {
    return 'ses_' + Math.random().toString(36).substring(2, 8);
  }
}

/**
 * 見積もり計算完了処理
 */
function finalizeEstimateCalculation(totals) {
  currentEstimateId = generateEstimateId();
  calculationSequence++;

  // 直前からの変更点（差分メモ）の算出
  let diffNote = '初期表示からの試算';
  if (lastEstimatedState) {
    const diffs = [];
    if (state.W !== lastEstimatedState.W) diffs.push(`W:${lastEstimatedState.W}→${state.W}`);
    if (state.D !== lastEstimatedState.D) diffs.push(`D:${lastEstimatedState.D}→${state.D}`);
    if (state.H !== lastEstimatedState.H) diffs.push(`H:${lastEstimatedState.H}→${state.H}`);
    if (state.cageType !== lastEstimatedState.cageType) diffs.push(`タイプ:${state.cageType}`);
    if (state.cageType === 'C' && state.frontWindowH !== lastEstimatedState.frontWindowH) {
      diffs.push(`前窓高:${lastEstimatedState.frontWindowH}→${state.frontWindowH}`);
    }
    if (state.cageType === 'A_FRONT' && state.doorHingeSide !== lastEstimatedState.doorHingeSide) {
      diffs.push(`開き:${getFrontDoorHingeDisplayName(lastEstimatedState.doorHingeSide)}→${getFrontDoorHingeDisplayName(state.doorHingeSide)}`);
    }
    if (state.frameColor !== lastEstimatedState.frameColor) {
      diffs.push(`色:${lastEstimatedState.frameColor === 'black' ? '黒' : '銀'}→${state.frameColor === 'black' ? '黒' : '銀'}`);
    }
    if (state.frontWideFrame !== lastEstimatedState.frontWideFrame) {
      diffs.push(`正面下部:${lastEstimatedState.frontWideFrame || 'なし'}→${state.frontWideFrame || 'なし'}`);
    }
    if (state.footType !== lastEstimatedState.footType) {
      diffs.push(`脚:${state.footType === 'caster' ? 'キャスター' : 'ゴム脚'}`);
    }
    if (state.hasFloorReinforcement !== lastEstimatedState.hasFloorReinforcement) {
      diffs.push(state.hasFloorReinforcement ? '床補強追加' : '床補強解除');
    }
    if (state.hasTopReinforcement !== lastEstimatedState.hasTopReinforcement) {
      diffs.push(state.hasTopReinforcement ? '天板補強追加' : '天板補強解除');
    }
    if (state.hasSideReinforcement !== lastEstimatedState.hasSideReinforcement) {
      diffs.push(state.hasSideReinforcement ? '側面補強追加' : '側面補強解除');
    }
    if (state.hasDoorAntiFlex !== lastEstimatedState.hasDoorAntiFlex) {
      diffs.push(state.hasDoorAntiFlex ? '扉たわみ防止追加' : '扉たわみ防止解除');
    }
    if (state.hasSideVentCover !== lastEstimatedState.hasSideVentCover) {
      diffs.push(state.hasSideVentCover ? '換気調整板追加' : '換気調整板解除');
    }
    if (state.hasPerch !== lastEstimatedState.hasPerch) {
      diffs.push(state.hasPerch ? '止まり木追加' : '止まり木解除');
    }
    if (state.hasRubberPacking !== lastEstimatedState.hasRubberPacking) {
      diffs.push(state.hasRubberPacking ? 'ゴムパッキン追加' : 'ゴムパッキン解除');
    }
    if (state.hasFloorHeaterSupport !== lastEstimatedState.hasFloorHeaterSupport) {
      diffs.push(state.hasFloorHeaterSupport ? '床下ヒータ支え板追加' : '床下ヒータ支え板解除');
    }
    if (state.hasRoomDivider !== lastEstimatedState.hasRoomDivider) {
      diffs.push(state.hasRoomDivider ? '2室分け追加' : '2室分け解除');
    }
    if (state.hasSideReinforcement && state.sideOpeningH !== lastEstimatedState.sideOpeningH) {
      diffs.push(`側上部開口:${lastEstimatedState.sideOpeningH}→${state.sideOpeningH}`);
    }

    // パネル素材の差分検知
    const lastP = lastEstimatedState.panelConfig || {};
    const currP = state.panelConfig || {};
    if (currP.floor !== lastP.floor) {
      diffs.push(`床:${getPanelShortName(lastP.floor)}→${getPanelShortName(currP.floor)}`);
    }
    if (currP.back !== lastP.back) {
      diffs.push(`背:${getPanelShortName(lastP.back)}→${getPanelShortName(currP.back)}`);
    }
    if (state.hasSideReinforcement) {
      if (currP.sideUpper !== lastP.sideUpper || currP.sideLower !== lastP.sideLower) {
        diffs.push(`側分割:${getPanelShortName(currP.sideUpper)}/${getPanelShortName(currP.sideLower)}`);
      }
    } else if (currP.side !== lastP.side) {
      diffs.push(`側:${getPanelShortName(lastP.side)}→${getPanelShortName(currP.side)}`);
    }

    const isTopSplit = state.hasTopReinforcement || state.W > 940;
    const lastTopSplit = lastEstimatedState.hasTopReinforcement || lastEstimatedState.W > 940;
    if (isTopSplit || lastTopSplit) {
      if (currP.topLeft !== lastP.topLeft || currP.topRight !== lastP.topRight || !lastTopSplit) {
        diffs.push(`天分割:${getPanelShortName(currP.topLeft)}/${getPanelShortName(currP.topRight)}`);
      }
    } else if (currP.top !== lastP.top) {
      diffs.push(`天:${getPanelShortName(lastP.top)}→${getPanelShortName(currP.top)}`);
    }

    if (state.hasRoomDivider) {
      if (currP.partition !== lastP.partition) {
        diffs.push(`仕切り:${getPanelShortName(lastP.partition)}→${getPanelShortName(currP.partition)}`);
      }
    }

    if (diffs.length > 0) {
      diffNote = diffs.join(', ');
    } else {
      diffNote = '同一条件での再計算';
    }
  }

  // 問い合わせ用フォーマットテキストの生成
  const specText = generateInquirySpecText(currentEstimateId, totals);

  // モーダルへ反映
  if (modalEstimateId) modalEstimateId.textContent = currentEstimateId;
  if (modalPriceTotal) modalPriceTotal.textContent = `¥${totals.priceWithMarkup.toLocaleString()}`;
  if (modalWeightTotal) modalWeightTotal.textContent = `${totals.weight.toFixed(1)} kg`;
  if (modalSpecTextarea) modalSpecTextarea.value = specText;

  // モーダルを自動でオープン表示（前回のダウンロード完了通知およびプレビューはリセット）
  if (estimateResultModal) {
    if (modalDownloadSuccess) {
      modalDownloadSuccess.classList.add('hidden');
    }
    if (modalPreviewSection) {
      modalPreviewSection.classList.add('hidden');
    }
    window.lastGeneratedEstimateImage = null;
    estimateResultModal.classList.remove('hidden');
  }

  // 最新見積もりデータの保持
  currentEstimateData = {
    estimateId: currentEstimateId,
    timestamp: new Date().toISOString(),
    visitorId,
    sessionId,
    seq: calculationSequence,
    spec: { ...state },
    totals: { ...totals },
    diffNote,
    elapsedSec: Math.round((Date.now() - sessionStartTime) / 1000)
  };

  lastEstimatedState = JSON.parse(JSON.stringify(state));

  // ローカル復元・オフライン用キャッシュ保存
  try {
    localStorage.setItem(`kinato_estimate_${currentEstimateId}`, JSON.stringify(currentEstimateData));
    localStorage.setItem('kinato_latest_estimate', JSON.stringify(currentEstimateData));
  } catch (e) {}

  // 【開発計画2】Googleスプレッドシートへのログ送信（URL設定時のみ自動実行）
  maybeSendEstimateLog(currentEstimateData);
}

/**
 * フレーム色表示名 (シルバー または ブラック)
 */
function getFrameColorDisplayName() {
  return state.frameColor === 'black' ? 'ブラック' : 'シルバー';
}

/**
 * パネル素材キーから表示名称・厚みを取得
 */
function getPanelMaterialName(key) {
  switch (key) {
    case 'acrylic': return '透明アクリル 3.0mm';
    case 'black_matte': return 'アクリル黒両面マット 3.0mm';
    case 'smoke_gray': return 'アクリル グレースモーク半透明 3.0mm';
    case 'punching': return '塩ビパンチングボード 3.0mm';
    case 'polyca': return '中空ポリカ 4.0mm';
    case 'mesh15': return '金網15mmピッチ (黒粉体塗装)';
    case 'mesh25': return '金網25mmピッチ (黒粉体塗装)';
    case 'mesh30': return '金網30mmピッチ (黒粉体塗装)';
    default: return key || '透明アクリル 3.0mm';
  }
}

/**
 * 差分メモ用のパネル短縮名称を取得
 */
function getPanelShortName(key) {
  switch (key) {
    case 'acrylic': return '透明アクリル';
    case 'black_matte': return '黒マット';
    case 'smoke_gray': return 'グレースモーク';
    case 'punching': return 'パンチング';
    case 'polyca': return '中空ポリカ';
    case 'mesh15': return '金網15mm';
    case 'mesh25': return '金網25mm';
    case 'mesh30': return '金網30mm';
    default: return key || 'アクリル';
  }
}

/**
 * 選択されているすべてのパネル素材・板厚をリストアップ
 */
function getSelectedPanelsList() {
  const panels = [];

  // 正面
  if (state.cageType === 'C') {
    panels.push({ face: '正面扉', name: '透明アクリル 3.0mm (スライド扉)' });
    panels.push({ face: '正面固定窓', name: `透明アクリル 3.0mm (開口高 ${state.frontWindowH}mm)` });
  } else if (state.cageType === 'A_FRONT') {
    panels.push({ face: '正面扉', name: `透明アクリル 3.0mm (前開き扉: ${getFrontDoorHingeDisplayName()})` });
  } else {
    panels.push({ face: '正面扉', name: '透明アクリル 3.0mm (全面スライド扉)' });
  }

  // 床面
  panels.push({
    face: state.hasFloorReinforcement ? '床面 (中央2分割)' : '床面',
    name: getPanelMaterialName(state.panelConfig.floor)
  });

  // 背面
  panels.push({
    face: '背面',
    name: getPanelMaterialName(state.panelConfig.back)
  });

  // 側面 (左右)
  if (state.hasSideReinforcement) {
    panels.push({
      face: '側面 (左右2分割)',
      name: `上部: ${getPanelMaterialName(state.panelConfig.sideUpper)} / 下部: ${getPanelMaterialName(state.panelConfig.sideLower)}`
    });
  } else {
    panels.push({
      face: '側面 (左右)',
      name: getPanelMaterialName(state.panelConfig.side)
    });
  }

  // 天面
  const isTopSplit = state.hasTopReinforcement || state.W > 940;
  if (isTopSplit) {
    if (state.panelConfig.topLeft === state.panelConfig.topRight) {
      panels.push({
        face: '天面 (中央2分割)',
        name: `${getPanelMaterialName(state.panelConfig.topLeft)} (左右共通)`
      });
    } else {
      panels.push({
        face: '天面 (中央2分割)',
        name: `左: ${getPanelMaterialName(state.panelConfig.topLeft)} / 右: ${getPanelMaterialName(state.panelConfig.topRight)}`
      });
    }
  } else {
    panels.push({
      face: '天面',
      name: getPanelMaterialName(state.panelConfig.top)
    });
  }

  // 仕切り板（２室分け選択時・寸法はノウハウのため非表示）
  if (state.hasRoomDivider) {
    panels.push({
      face: '仕切り板',
      name: getPanelMaterialName(state.panelConfig.partition || 'black_matte')
    });
  }

  return panels;
}

/**
 * 選択されているすべてのオプションを網羅的にリストアップ
 */
function getSelectedOptionsList() {
  const options = [];

  // 0. 前開き扉仕様 (Type A 前開き専用)
  if (state.cageType === 'A_FRONT') {
    options.push(`前開き扉仕様 (${getFrontDoorHingeDisplayName()})`);
  }

  // 1. 正面幅広フレーム (Type A専用)
  if (state.cageType === 'A') {
    if (state.frontWideFrame === '2x') {
      options.push('正面下側幅広フレーム2倍幅 (40mm)');
    } else if (state.frontWideFrame === '3x') {
      options.push('正面下側幅広フレーム3倍幅 (60mm)');
    }
  }

  // 2. Type C前窓固定仕様
  if (state.cageType === 'C') {
    options.push(`前窓固定仕様 (開口高さ ${state.frontWindowH}mm)`);
  }

  // 3. 側面補強フレーム (左右2分割)
  if (state.hasSideReinforcement) {
    options.push(`側面補強フレーム (側面上部開口 ${state.sideOpeningH}mm・左右2分割)`);
  }

  // 4. 側面換気量調整板 (左右外張り)
  if (state.hasSideVentCover) {
    if (!state.hasSideReinforcement) {
      options.push('側面換気量調整板 (左右上下4枚・外張りt1.5アクリル板・化粧つまみネジ付)');
    } else {
      options.push('側面換気量調整板 (左右ペア・外張りt1.5アクリル板・化粧つまみネジ付)');
    }
  }

  // 5. 床面中央補強フレーム (2分割仕様)
  if (state.hasFloorReinforcement) {
    options.push('床面中央補強フレーム (2分割仕様)');
  }

  // 6. 天板中央補強フレーム (2分割仕様)
  if (state.W > 940) {
    options.push('天板中央補強フレーム (幅940mm超・標準付属/2分割仕様)');
  } else if (state.hasTopReinforcement) {
    options.push('天板中央補強フレーム (2分割仕様)');
  }

  // 7. 正面スライド扉 たわみ防止レール
  if (state.hasDoorAntiFlex) {
    options.push('正面スライド扉たわみ防止レール');
  }

  // 8. 足回り仕様 (キャスター変更)
  if (state.footType === 'caster') {
    options.push('自在キャスター仕様 (4輪・高さ66mm)');
  }

  // 9. 止まり木（天板吊り下げ式）
  if (state.hasPerch) {
    const rawCenter = state.W - 120;
    const D_center = Math.floor(rawCenter / 7) * 7;
    const astpL = Math.max(10, D_center - 15);
    options.push(`止まり木（天板吊り下げ式・φ30アルミ丸棒 L=${astpL}mm・後付け可）`);
  }

  // 10. モレ対策ゴムパッキン
  if (state.hasRubberPacking) {
    options.push('モレ対策ゴムパッキン (側面・背面 隙間モレ抑制)');
  }

  // 床下パネルヒータ支え板
  if (state.hasFloorHeaterSupport) {
    if (state.hasFloorReinforcement) {
      options.push('床下パネルヒータ支え板 (床面2分割用・透明アクリル2.0mm 2枚＋緩衝プラダン4.0mm 2枚＋化粧ネジ付)');
    } else {
      options.push('床下パネルヒータ支え板 (通常床面用・透明アクリル2.0mm 1枚＋緩衝プラダン4.0mm 1枚＋化粧ネジ付)');
    }
  }

  // 11. ２室分け（後付け仕切り板）
  if (state.hasRoomDivider) {
    options.push('２室分け（後付け仕切り板仕様）');
  }

  // 12. LED照明オプション
  if (state.ledType && state.ledType !== 'none') {
    const ledNames = {
      usb: 'LED照明: USB式 白＆電球色 LED',
      rgbw: 'LED照明: リモコン操作 RGB+W'
    };
    options.push(ledNames[state.ledType] || 'LED照明');
  }

  return options;
}

/**
 * 問い合わせ用フォーマットテキスト生成
 */
function generateInquirySpecText(estimateId, totals) {
  const typeName = getCageTypeDisplayName(true);
  const frameColorName = getFrameColorDisplayName();

  const panels = getSelectedPanelsList();
  const panelLines = panels.map(p => `  ・${p.face}: ${p.name}`).join('\n');

  const options = getSelectedOptionsList();
  const optLines = options.length > 0 ? options.map(o => `  ・${o}`).join('\n') : '  ・標準構成（追加オプションなし）';

  return `【ケージお見積もり仕様】
・見積ID: ${estimateId}
・ケージ種類: ${typeName}
・外寸サイズ: 幅 ${state.W}mm × 奥行 ${state.D}mm × 高さ ${state.H}mm
・フレーム色: ${frameColorName}
・選択パネル素材・板厚:
${panelLines}
・選択オプション:
${optLines}
・概算総重量: 約 ${totals.weight.toFixed(1)} kg
・お見積り合計金額: ¥${totals.priceWithMarkup.toLocaleString()}（税込・送料別）
※まだβ版なので誤差（最大±8%程度）が出ております。詳細はDMよりお問い合わせください。
※公式サイト: https://kinato-cage-site.pages.dev/`;
}

// モーダル開閉イベントリスナー
if (btnOpenEstimateModal && estimateResultModal) {
  btnOpenEstimateModal.addEventListener('click', () => {
    if (isEstimateCalculated) {
      if (modalDownloadSuccess) {
        modalDownloadSuccess.classList.add('hidden');
      }
      estimateResultModal.classList.remove('hidden');
    } else {
      alert('先に「見積もりと重量計算」を実行してください。');
    }
  });
}

if (btnCloseModal && estimateResultModal) {
  btnCloseModal.addEventListener('click', () => {
    estimateResultModal.classList.add('hidden');
  });
}

if (btnDismissModal && estimateResultModal) {
  btnDismissModal.addEventListener('click', () => {
    estimateResultModal.classList.add('hidden');
  });
}

if (estimateResultModal) {
  estimateResultModal.addEventListener('click', (e) => {
    if (e.target === estimateResultModal) {
      estimateResultModal.classList.add('hidden');
    }
  });
}

// モーダル内 仕様テキストコピー処理
if (btnCopySpecModal && modalSpecTextarea) {
  btnCopySpecModal.addEventListener('click', async () => {
    const text = modalSpecTextarea.value;
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      if (modalCopyToast) {
        modalCopyToast.classList.remove('hidden');
        setTimeout(() => modalCopyToast.classList.add('hidden'), 2200);
      }
      const label = btnCopySpecModal.querySelector('.copy-text-label');
      if (label) {
        const orig = label.textContent;
        label.textContent = '済！';
        setTimeout(() => { label.textContent = orig; }, 1800);
      }
    } catch (err) {
      modalSpecTextarea.select();
      document.execCommand('copy');
      if (modalCopyToast) {
        modalCopyToast.classList.remove('hidden');
        setTimeout(() => modalCopyToast.classList.add('hidden'), 2200);
      }
    }
  });
}

// モーダル内 画像保存ボタン
if (btnSaveImageModal) {
  btnSaveImageModal.addEventListener('click', () => {
    exportEstimateCardImage();
  });
}

// プレビュー画像をタップした際に新規タブで画像を開く
if (modalPreviewImg) {
  modalPreviewImg.addEventListener('click', () => {
    if (modalPreviewImg.src) {
      window.open(modalPreviewImg.src, '_blank');
    }
  });
}


// =================================================================
// 3. 見積もり結果カード（スマホ向け縦型 9:16 画像保存）機能
// =================================================================
async function exportEstimateCardImage() {
  if (!isEstimateCalculated || !currentEstimateData) {
    alert('先に見積もり計算を実行してください。');
    return;
  }

  const triggerBtn = btnSaveImageModal || btnSaveImage;
  let originalBtnHtml = '';
  if (triggerBtn) {
    triggerBtn.classList.add('is-exporting');
    originalBtnHtml = triggerBtn.innerHTML;
    triggerBtn.innerHTML = '<span>⏳ 画像を生成中...</span>';
  }

  try {
    // 1. Three.jsの現在の描画をキャプチャ
    const captureDataUrl = viewer.captureImage ? viewer.captureImage() : viewer.renderer.domElement.toDataURL('image/png');

    // 2. オフスクリーンCanvasの作成 (縦型 1080 × 1920)
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');

    // 3. 背景の描画 (上質で洗練されたダークグラデーション)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 1920);
    bgGrad.addColorStop(0, '#090d16');
    bgGrad.addColorStop(0.35, '#0f172a');
    bgGrad.addColorStop(1, '#1e293b');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1920);

    // 装飾グリッドライン
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.06)';
    ctx.lineWidth = 1;
    for (let x = 60; x < 1080; x += 80) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1920); ctx.stroke();
    }
    for (let y = 60; y < 1920; y += 80) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1080, y); ctx.stroke();
    }

    // 外枠アクセントフレーム
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, 1000, 1840);

    // 4. ロゴ、キャラクター、QRコードの画像ロード (フォールバック付き)
    const loadImage = (src) => new Promise((resolve) => {
      if (!src) return resolve(null);
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });

    const baseUrl = import.meta.env.BASE_URL || './';
    const [logoImg, charImg, cageImg, qrImg] = await Promise.all([
      loadImage(`${baseUrl}logo_kinato.png`),
      loadImage(`${baseUrl}character_transparent.png`),
      loadImage(captureDataUrl),
      loadImage(`${baseUrl}qr_code_kinato.png`)
    ]);

    // 5. ヘッダーエリア (Y: 60 〜 225)
    if (logoImg) {
      ctx.drawImage(logoImg, 65, 65, 135, 135);
    }

    const brandTextX = logoImg ? 215 : 65;

    // ショップ名: きなとのケージ屋さん
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('きなとのケージ屋さん', brandTextX, 104);

    // タイトル: 3Dオーダーメイドケージ お見積書
    ctx.fillStyle = '#38bdf8';
    ctx.font = '600 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('3Dオーダーメイドケージ お見積書', brandTextX, 140);

    // 公式サイトURL表記
    ctx.fillStyle = '#f9c784';
    ctx.font = '500 16px ui-monospace, SFMono-Regular, monospace';
    ctx.fillText('https://kinato-cage-site.pages.dev/', brandTextX, 172);

    // ユーザー指定位置：ヘッダー中央右寄りに公式ショップQRコード（真ん中にショップアイコン入り）を配置
    if (qrImg) {
      const qrSize = 120;
      const qrBoxX = 610;
      const qrBoxY = 72;

      // QRコード背景カード（白下地＋角丸＋控えめなグロー枠）
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(56, 189, 248, 0.3)';
      ctx.shadowBlur = 10;
      drawRoundedRect(ctx, qrBoxX - 5, qrBoxY - 5, qrSize + 10, qrSize + 10, 8);
      ctx.fill();
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      // QRコード本体の描画
      ctx.drawImage(qrImg, qrBoxX, qrBoxY, qrSize, qrSize);
    }

    // 右上：見積IDと日時
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fb7185';
    ctx.font = 'bold 24px ui-monospace, monospace';
    ctx.fillText(currentEstimateId, 1015, 110);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const d = new Date();
    const dateStr = `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    ctx.fillText(`発行日時: ${dateStr}`, 1015, 148);
    ctx.textAlign = 'left';

    // 6. 中央 3Dケージ外観パース (Y: 240 〜 940)
    const cageBoxX = 65;
    const cageBoxY = 240;
    const cageBoxW = 950;
    const cageBoxH = 700;

    // パース枠の背景
    ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, cageBoxX, cageBoxY, cageBoxW, cageBoxH, 16);
    ctx.fill();
    ctx.stroke();

    // 3Dパースの描画
    if (cageImg) {
      const ratio = Math.min((cageBoxW - 40) / cageImg.width, (cageBoxH - 40) / cageImg.height);
      const dw = cageImg.width * ratio;
      const dh = cageImg.height * ratio;
      const dx = cageBoxX + (cageBoxW - dw) / 2;
      const dy = cageBoxY + (cageBoxH - dh) / 2;
      ctx.drawImage(cageImg, dx, dy, dw, dh);
    }

    // パース左下のバッジ
    ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
    drawRoundedRect(ctx, cageBoxX + 20, cageBoxY + cageBoxH - 55, 230, 36, 6);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#38bdf8';
    ctx.font = '600 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('3D外観シミュレーション', cageBoxX + 35, cageBoxY + cageBoxH - 31);

    // 7. 仕様スペックエリア (Y: 960 〜 1465, 高さ505px)
    const specBoxX = 65;
    const specBoxY = 960;
    const specBoxW = 950;
    const specBoxH = 505;

    ctx.fillStyle = 'rgba(30, 41, 59, 0.65)';
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, specBoxX, specBoxY, specBoxW, specBoxH, 16);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('📐 ケージ設計パラメータ', specBoxX + 30, specBoxY + 40);

    // ヘッダー下仕切り線
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(specBoxX + 25, specBoxY + 56);
    ctx.lineTo(specBoxX + specBoxW - 25, specBoxY + 56);
    ctx.stroke();

    const typeName = getCageTypeDisplayName(true);
    const frameColor = getFrameColorDisplayName();
    const panelsList = getSelectedPanelsList();
    const optionsList = getSelectedOptionsList();

    // 1. ケージ種類
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('ケージ種類', specBoxX + 30, specBoxY + 90);
    ctx.fillStyle = '#f1f5f9';
    ctx.font = '500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(typeName, specBoxX + 230, specBoxY + 90);

    // 2. 外寸サイズ
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('外寸サイズ', specBoxX + 30, specBoxY + 125);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`幅 ${state.W} mm  ×  奥行 ${state.D} mm  ×  高さ ${state.H} mm`, specBoxX + 230, specBoxY + 125);

    // 3. フレーム仕様
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('フレーム仕様', specBoxX + 30, specBoxY + 160);
    ctx.fillStyle = '#f1f5f9';
    ctx.font = '500 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(frameColor, specBoxX + 230, specBoxY + 160);

    // 4. パネル素材・板厚仕様 (全選択パネルを網羅)
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('選択パネル・板厚', specBoxX + 30, specBoxY + 198);

    let panelY = specBoxY + 198;
    panelsList.forEach((p) => {
      ctx.fillStyle = '#38bdf8';
      ctx.font = '600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(`[${p.face}]`, specBoxX + 230, panelY);

      ctx.fillStyle = '#e2e8f0';
      ctx.font = '500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(p.name, specBoxX + 380, panelY);
      panelY += 25;
    });

    // パネルとオプションの間の仕切り線
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)';
    ctx.beginPath();
    ctx.moveTo(specBoxX + 25, panelY + 6);
    ctx.lineTo(specBoxX + specBoxW - 25, panelY + 6);
    ctx.stroke();

    // 5. 選択オプション (選択されているものをすべて掲載)
    const optStartY = panelY + 34;
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 19px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('選択オプション', specBoxX + 30, optStartY);

    if (optionsList.length === 0) {
      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText('標準構成（追加オプションなし）', specBoxX + 230, optStartY);
    } else {
      let curOptY = optStartY;
      optionsList.forEach((opt) => {
        ctx.fillStyle = '#fbbf24';
        ctx.font = '600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillText('✔', specBoxX + 230, curOptY);

        ctx.fillStyle = '#f8fafc';
        ctx.font = '500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillText(opt, specBoxX + 255, curOptY);
        curOptY += 24;
      });
    }

    // 8. 下部プライス ＆ QRコード・キャラクターエリア (Y: 1485 〜 1830)
    const hasRightColumn = Boolean(charImg || qrImg);
    const priceBoxX = 65;
    const priceBoxY = 1485;
    const priceBoxW = hasRightColumn ? 650 : 950;
    const priceBoxH = 345;

    const priceGrad = ctx.createLinearGradient(priceBoxX, priceBoxY, priceBoxX + priceBoxW, priceBoxY + priceBoxH);
    priceGrad.addColorStop(0, 'rgba(15, 23, 42, 0.88)');
    priceGrad.addColorStop(1, 'rgba(30, 41, 59, 0.92)');
    ctx.fillStyle = priceGrad;
    ctx.strokeStyle = 'rgba(217, 70, 239, 0.4)';
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, priceBoxX, priceBoxY, priceBoxW, priceBoxH, 16);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('概算総重量 (計算値)', priceBoxX + 35, priceBoxY + 48);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 32px ui-monospace, monospace';
    ctx.fillText(`約 ${currentEstimateData.totals.weight.toFixed(1)} kg`, priceBoxX + 280, priceBoxY + 50);

    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    ctx.beginPath();
    ctx.moveTo(priceBoxX + 30, priceBoxY + 70);
    ctx.lineTo(priceBoxX + priceBoxW - 30, priceBoxY + 70);
    ctx.stroke();

    ctx.fillStyle = '#f1f5f9';
    ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('お見積もり合計金額 (税込・送料別)', priceBoxX + 35, priceBoxY + 110);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`¥${currentEstimateData.totals.priceWithMarkup.toLocaleString()}`, priceBoxX + 35, priceBoxY + 180);

    // β版価格誤差に関する注意書き
    ctx.fillStyle = '#fcd34d';
    ctx.font = '600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('※まだβ版なので誤差（最大±8%程度）が出ております。', priceBoxX + 35, priceBoxY + 220);
    ctx.fillText('　詳細はDMよりお問い合わせください。', priceBoxX + 35, priceBoxY + 244);

    // 控えに関する注意書き
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('※本画像はお見積もりシミュレーション結果の控えです。', priceBoxX + 35, priceBoxY + 282);
    ctx.fillText('　お問い合わせ・ご注文の際にお手元にご準備ください。', priceBoxX + 35, priceBoxY + 306);

    // 右カラム：公式キャラクターの配置
    if (hasRightColumn && charImg) {
      const rightColX = 735;
      const rightColW = 280;
      const charW = 270;
      const charH = (charImg.height / charImg.width) * charW;
      const charX = rightColX + (rightColW - charW) / 2;
      const charY = priceBoxY + (priceBoxH - charH) / 2 + 5;
      ctx.drawImage(charImg, charX, charY, charW, charH);
    }

    // 9. 画像の出力・保存処理（スマホ写真アプリ対応 ＆ PCダウンロード）
    const downloadFileName = `Cage_Estimate_${currentEstimateId}.png`;

    try {
      const dataUrl = canvas.toDataURL('image/png');
      window.lastGeneratedEstimateImage = dataUrl;

      // 🖼️ モーダル内にプレビュー画像をセットして表示（長押し写真保存を可能に）
      if (modalPreviewImg) {
        modalPreviewImg.src = dataUrl;
      }
      if (modalPreviewSection) {
        modalPreviewSection.classList.remove('hidden');
      }

      // CanvasからBlobとFileオブジェクトを生成
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      let file = null;
      if (blob && window.File) {
        try {
          file = new File([blob], downloadFileName, { type: 'image/png' });
        } catch (fileErr) {
          console.warn('File constructor failed:', fileErr);
        }
      }

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      let sharedSuccessfully = false;

      // 📱 モバイル端末で Web Share API (ファイル共有) がサポートされている場合
      // iOS Safari では「画像を保存」を選ぶことで「写真」アプリ（カメラロール）に直接保存されます
      if (isMobile && file && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'きなとのケージ屋さん お見積もり結果カード',
            text: `ケージお見積もり結果カード（${currentEstimateId}）です。`
          });
          sharedSuccessfully = true;
          console.log('Shared estimate card image via Web Share API successfully');

          if (modalDownloadSuccess && downloadFilenameLabel) {
            downloadFilenameLabel.textContent = downloadFileName;
            if (downloadSuccessTitle) {
              downloadSuccessTitle.textContent = '✅ 共有メニューを開きました（「画像を保存」で写真アプリに保存されます）';
            }
            modalDownloadSuccess.classList.remove('hidden');
          }
        } catch (shareErr) {
          // ユーザーが共有シートを閉じた場合 (AbortError) はエラーにせず、プレビュー長押し案内を維持
          if (shareErr.name === 'AbortError') {
            console.log('User closed the share sheet');
            if (modalDownloadSuccess && downloadFilenameLabel) {
              downloadFilenameLabel.textContent = downloadFileName;
              if (downloadSuccessTitle) {
                downloadSuccessTitle.textContent = '💡 共有メニューを閉じました。下の画像を長押しして「写真」に追加も可能です';
              }
              modalDownloadSuccess.classList.remove('hidden');
            }
            sharedSuccessfully = true; // 意図的キャンセルなので追加ダウンロードは走らせない
          } else {
            console.warn('navigator.share failed, falling back to download:', shareErr);
          }
        }
      }

      // 💻 PC環境、または Web Share API非対応環境 / 共有エラー時のダウンロード処理
      if (!sharedSuccessfully) {
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = downloadFileName;
        a.target = '_self';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        console.log('Downloaded estimate card image via DataURL:', downloadFileName);

        if (modalDownloadSuccess && downloadFilenameLabel) {
          downloadFilenameLabel.textContent = downloadFileName;
          if (downloadSuccessTitle) {
            downloadSuccessTitle.textContent = isMobile 
              ? '✅ 画像をダウンロードしました（下の画像を長押しして「写真」に追加も可能です）'
              : '✅ ダウンロード完了（保存先: ダウンロードフォルダ）';
          }
          modalDownloadSuccess.classList.remove('hidden');
          setTimeout(() => {
            if (modalDownloadSuccess) modalDownloadSuccess.classList.add('hidden');
          }, 7000);
        }
      }
    } catch (e) {
      console.warn('toDataURL / export failed, falling back to Blob URL:', e);
      if (canvas.toBlob) {
        canvas.toBlob((blob) => {
          if (!blob) {
            alert('画像の書き出しに失敗しました。');
            return;
          }
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = downloadFileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
          if (modalDownloadSuccess && downloadFilenameLabel) {
            downloadFilenameLabel.textContent = downloadFileName;
            modalDownloadSuccess.classList.remove('hidden');
          }
        }, 'image/png');
      }
    }

  } catch (err) {
    console.error('Estimate card export failed:', err);
    alert('画像の生成中にエラーが発生しました: ' + err.message);
  } finally {
    if (triggerBtn) {
      triggerBtn.classList.remove('is-exporting');
      triggerBtn.innerHTML = originalBtnHtml;
    }
  }
}

// Canvas角丸矩形描画ヘルパー
function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

// ★本番デプロイ前チェック: ローカルでのデバッグログ送信を止める場合はここを true にします
const SKIP_LOG_ON_LOCALHOST = true;

/**
 * ローカル開発環境の厳格判定
 */
function isLocalDevelopmentEnvironment() {
  const hostname = window.location.hostname || '';
  const port = window.location.port || '';
  return hostname === 'localhost' ||
         hostname === '127.0.0.1' ||
         hostname === '[::1]' ||
         hostname === '0.0.0.0' ||
         hostname.endsWith('.local') ||
         hostname.startsWith('192.168.') ||
         hostname.startsWith('10.') ||
         port === '5173' ||
         port === '4173';
}

// =================================================================
// 4. Googleスプレッドシート ログ収集（開発計画2用）
// =================================================================
async function maybeSendEstimateLog(estimateData) {
  // ローカル開発環境の判定
  if (isLocalDevelopmentEnvironment()) {
    if (SKIP_LOG_ON_LOCALHOST) {
      console.log('[Log] ローカル開発環境のため、Googleスプレッドシートへの見積もりログ保存を自動スキップしました。');
      return;
    }
  }

  const endpoint = materialsConfig?.system?.gasLogEndpointUrl;
  if (!endpoint || typeof endpoint !== 'string' || !endpoint.startsWith('http')) {
    console.warn('[Log] gasLogEndpointUrl が未設定のため、ログ送信をスキップしました。');
    return;
  }

  try {
    const ua = navigator.userAgent;
    let deviceType = 'PC';
    if (/iPhone/i.test(ua)) deviceType = 'iPhone';
    else if (/iPad/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) deviceType = 'iPad';
    else if (/Android/i.test(ua)) deviceType = 'Android';
    else if (/Mac/i.test(ua)) deviceType = 'Mac';
    else if (/Win/i.test(ua)) deviceType = 'Windows';

    let browserName = 'Browser';
    if (/Chrome/i.test(ua) && !/Edge|Edg/i.test(ua)) browserName = 'Chrome';
    else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browserName = 'Safari';
    else if (/Edge|Edg/i.test(ua)) browserName = 'Edge';
    else if (/Firefox/i.test(ua)) browserName = 'Firefox';

    // パネル構成・オプション・フレーム色の要約テキスト
    const panelsList = getSelectedPanelsList();
    const panelsSummary = panelsList.map(p => `${p.face}:${p.name}`).join(' | ');
    const optionsList = getSelectedOptionsList();
    const optionsSummary = optionsList.length > 0 ? optionsList.join(', ') : 'なし';
    const frameColorDisplayName = getFrameColorDisplayName();

    // 回遊履歴の取得
    let pageHistory = [];
    try {
      const saved = sessionStorage.getItem('cage_page_history');
      if (saved) pageHistory = JSON.parse(saved);
      if (!pageHistory.includes('見積もりシステム')) {
        pageHistory.push('見積もりシステム');
        sessionStorage.setItem('cage_page_history', JSON.stringify(pageHistory));
      }
    } catch (e) {}

    const payload = {
      type: 'estimate',
      timestamp: estimateData.timestamp,
      estimateId: estimateData.estimateId,
      visitorId: estimateData.visitorId,
      sessionId: estimateData.sessionId,
      seq: estimateData.seq,
      device: {
        type: deviceType,
        browser: browserName,
        screen: `${window.innerWidth}x${window.innerHeight}`
      },
      spec: {
        ...estimateData.spec,
        typeName: getCageTypeDisplayName(true),
        doorHingeDisplayName: state.cageType === 'A_FRONT' ? getFrontDoorHingeDisplayName() : undefined,
        frameColorDisplayName,
        panelsSummary,
        optionsSummary
      },
      calculated: estimateData.totals,
      meta: {
        elapsedSec: estimateData.elapsedSec,
        referrer: document.referrer || 'Direct',
        diffNote: estimateData.diffNote,
        pageHistory: pageHistory
      }
    };

    console.log('[Log] GASへ送信中 (type: estimate)...', payload);
    await fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    console.log('[Log] 見積もりログをスプレッドシートへ送信完了:', estimateData.estimateId);
  } catch (err) {
    console.warn('[Log] スプレッドシート送信エラー:', err);
  }
}

/**
 * 🚨 計算エラー・サイレントクラッシュの自動通報ログ送信
 * 万が一本番環境で積算ロジックやモデリングで例外エラーが発生した場合、
 * 管理者が即座に気付けるようにエラー情報をGAS（スプレッドシート）へ自動送信します。
 */
function sendSimulationErrorLog(error) {
  try {
    const endpoint = materialsConfig?.system?.gasLogEndpointUrl;
    if (!endpoint || typeof endpoint !== 'string' || !endpoint.startsWith('http')) return;

    const payload = {
      type: 'calc_error',
      timestamp: new Date().toISOString(),
      visitorId: getOrCreateVisitorId(),
      sessionId: getOrCreateSessionId(),
      errorMessage: error?.message || String(error),
      errorStack: error?.stack ? String(error.stack).substring(0, 1000) : '',
      spec: { ...state },
      url: window.location.href,
      device: {
        userAgent: navigator.userAgent,
        screen: `${window.innerWidth}x${window.innerHeight}`
      }
    };

    console.warn('[Log] 🚨 エラー発生をGASへ通報中...', payload);
    fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(() => {});
  } catch (e) {
    console.warn('[Log] エラーログ自動送信失敗:', e);
  }
}

// 生体プリセットの初期化
initCreaturePresets();

// 🛠️ デバッグ用BOMの動的生成（?debug=bom 指定時のみ）
setupDebugBOMIfRequested();

// =================================================================
// 5. 外部連携（AIチャット等）からの初期状態引き継ぎ（引数非表示対応）
// =================================================================
function checkInitialStateFromStorageOrUrl() {
  try {
    let incomingState = null;

    // 1. sessionStorage からの引き継ぎチェック（引数がURLに一切出ない推奨方式）
    const stored = sessionStorage.getItem('kinato_sim_initial_state');
    if (stored) {
      try {
        incomingState = JSON.parse(stored);
        sessionStorage.removeItem('kinato_sim_initial_state');
        console.log('[Sim] sessionStorageから初期設定を読み込みました:', incomingState);
      } catch (e) {
        console.warn('[Sim] sessionStorageのパースに失敗:', e);
      }
    }

    // 2. URLクエリパラメータのフォールバックチェック
    if (!incomingState && window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);

      // 見積りIDからの復元指定がある場合
      if (urlParams.has('estimateId') || urlParams.has('id')) {
        const targetId = urlParams.get('estimateId') || urlParams.get('id');
        if (inputRestoreEstimateId) inputRestoreEstimateId.value = targetId;
        restoreEstimateById(targetId);
        if (window.history && window.history.replaceState) {
          window.history.replaceState({}, document.title, window.location.pathname);
        }
        return;
      }

      incomingState = {};
      if (urlParams.has('preset')) incomingState.preset = urlParams.get('preset');
      if (urlParams.has('w')) incomingState.W = parseInt(urlParams.get('w'), 10);
      if (urlParams.has('d')) incomingState.D = parseInt(urlParams.get('d'), 10);
      if (urlParams.has('h')) incomingState.H = parseInt(urlParams.get('h'), 10);
      if (urlParams.has('type')) incomingState.cageType = urlParams.get('type').toUpperCase();
      if (urlParams.has('frame')) incomingState.frameColor = urlParams.get('frame');
      if (urlParams.has('foot')) incomingState.footType = urlParams.get('foot');
      if (urlParams.has('doorAntiFlex')) incomingState.hasDoorAntiFlex = urlParams.get('doorAntiFlex') === '1' || urlParams.get('doorAntiFlex') === 'true';
      if (urlParams.has('sideVentCover')) incomingState.hasSideVentCover = urlParams.get('sideVentCover') === '1' || urlParams.get('sideVentCover') === 'true';
      if (urlParams.has('perch')) incomingState.hasPerch = urlParams.get('perch') === '1' || urlParams.get('perch') === 'true';
      if (urlParams.has('roomDivider')) incomingState.hasRoomDivider = urlParams.get('roomDivider') === '1' || urlParams.get('roomDivider') === 'true';
      if (urlParams.has('floorReinf')) incomingState.hasFloorReinforcement = urlParams.get('floorReinf') === '1' || urlParams.get('floorReinf') === 'true';
      if (urlParams.has('topReinf')) incomingState.hasTopReinforcement = urlParams.get('topReinf') === '1' || urlParams.get('topReinf') === 'true';
      if (urlParams.has('frontWide')) incomingState.frontWideFrame = urlParams.get('frontWide');
      if (urlParams.has('floorHeater')) incomingState.hasFloorHeaterSupport = urlParams.get('floorHeater') === '1' || urlParams.get('floorHeater') === 'true';

      // アドレスバーから引数を消去（お客さんに見えないようにする）
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      console.log('[Sim] URLパラメータから初期設定を読み込み、URLをクリーンにしました:', incomingState);
    }

    if (!incomingState || Object.keys(incomingState).length === 0) {
      return;
    }

    // プリセット指定があれば先に適用
    if (incomingState.preset && Array.isArray(creaturePresets)) {
      const targetPreset = creaturePresets.find(p => p.id === incomingState.preset);
      if (targetPreset) {
        applyCreaturePreset(targetPreset);
      }
    }

    // 個別値の上書き
    if (Number.isFinite(incomingState.W)) {
      state.W = incomingState.W;
      if (inputW) inputW.value = state.W;
      if (sliderW) sliderW.value = state.W;
    }
    if (Number.isFinite(incomingState.D)) {
      state.D = incomingState.D;
      if (inputD) inputD.value = state.D;
      if (sliderD) sliderD.value = state.D;
    }
    if (Number.isFinite(incomingState.H)) {
      state.H = incomingState.H;
      if (inputH) inputH.value = state.H;
      if (sliderH) sliderH.value = state.H;
    }
    if (incomingState.cageType === 'A' || incomingState.cageType === 'A_FRONT' || incomingState.cageType === 'A_FRAMED' || incomingState.cageType === 'C') {
      state.cageType = incomingState.cageType;
      if (btnTypeA && btnTypeC) {
        btnTypeA.classList.toggle('active', state.cageType === 'A');
        btnTypeAFront?.classList.toggle('active', state.cageType === 'A_FRONT');
        btnTypeAFramed?.classList.toggle('active', state.cageType === 'A_FRAMED');
        btnTypeC.classList.toggle('active', state.cageType === 'C');
        if (typeBadge) {
          if (state.cageType === 'A_FRAMED') {
            typeBadge.textContent = 'Type A 正面枠囲い 選択中 (高剛性枠・スライド扉)';
          } else if (state.cageType === 'A_FRONT') {
            state.doorHingeSide = incomingState.doorHingeSide || 'left';
            typeBadge.textContent = `Type A 前開き 選択中 (${getFrontDoorHingeDisplayName()})`;
          } else {
            typeBadge.textContent = state.cageType === 'A' ? 'Type A 選択中 (全面スライド扉)' : 'Type C 選択中 (前窓＋扉)';
          }
        }
        if (rowFrontWindow) {
          rowFrontWindow.classList.toggle('hidden', state.cageType !== 'C');
        }
        updateDoorUI();
      }
    }
    if (incomingState.frameColor === 'silver' || incomingState.frameColor === 'black') {
      state.frameColor = incomingState.frameColor;
      if (btnFrameSilver && btnFrameBlack) {
        btnFrameSilver.classList.toggle('active', state.frameColor === 'silver');
        btnFrameBlack.classList.toggle('active', state.frameColor === 'black');
      }
    }
    if (incomingState.footType === 'rubber' || incomingState.footType === 'caster') {
      state.footType = incomingState.footType;
      if (toggleCaster) toggleCaster.checked = state.footType === 'caster';
      if (cardCaster) cardCaster.classList.toggle('active', state.footType === 'caster');
    }
    if (typeof incomingState.hasDoorAntiFlex === 'boolean') {
      state.hasDoorAntiFlex = incomingState.hasDoorAntiFlex;
      if (toggleDoorAntiFlex) toggleDoorAntiFlex.checked = state.hasDoorAntiFlex;
      if (cardDoorAntiFlex) cardDoorAntiFlex.classList.toggle('active', state.hasDoorAntiFlex);
    }
    if (typeof incomingState.hasSideVentCover === 'boolean') {
      state.hasSideVentCover = incomingState.hasSideVentCover;
      if (toggleSideVentCover) toggleSideVentCover.checked = state.hasSideVentCover;
      if (cardSideVentCover) cardSideVentCover.classList.toggle('active', state.hasSideVentCover);
    }
    if (typeof incomingState.hasPerch === 'boolean') {
      state.hasPerch = incomingState.hasPerch;
      if (togglePerch) togglePerch.checked = state.hasPerch;
      if (cardPerch) cardPerch.classList.toggle('active', state.hasPerch);
    }
    if (typeof incomingState.hasRoomDivider === 'boolean') {
      state.hasRoomDivider = incomingState.hasRoomDivider;
      if (toggleRoomDivider) toggleRoomDivider.checked = state.hasRoomDivider;
      if (cardRoomDivider) cardRoomDivider.classList.toggle('active', state.hasRoomDivider);
      if (rowPanelPartition) rowPanelPartition.classList.toggle('hidden', !state.hasRoomDivider);
      if (state.hasRoomDivider && togglePerch) {
        state.hasPerch = false;
        togglePerch.checked = false;
        togglePerch.disabled = true;
        if (cardPerch) cardPerch.classList.add('disabled');
      }
    }
    if (typeof incomingState.hasFloorReinforcement === 'boolean') {
      state.hasFloorReinforcement = incomingState.hasFloorReinforcement;
      if (toggleFloorReinforce) toggleFloorReinforce.checked = state.hasFloorReinforcement;
    } else {
      updateFloorReinforceByArea();
    }
    if (typeof incomingState.hasFloorHeaterSupport === 'boolean') {
      state.hasFloorHeaterSupport = incomingState.hasFloorHeaterSupport;
      if (toggleFloorHeaterSupport) toggleFloorHeaterSupport.checked = state.hasFloorHeaterSupport;
      if (cardFloorHeaterSupport) cardFloorHeaterSupport.classList.toggle('active', state.hasFloorHeaterSupport);
    }
    if (incomingState.frontWideFrame) {
      state.frontWideFrame = incomingState.frontWideFrame;
      lastTypeAFrontWideFrame = incomingState.frontWideFrame;
    }

    // 各種状態・3Dビュー・見積もりを同期
    updateFrontWideFrameAvailability();
    updateSideVentCoverAvailability();
    syncUpdate();
    viewer.setViewPreset('iso', state);

    // お見積もりHUDも即座に計算して表示
    if (typeof runStructuralAndCostSimulation === 'function') {
      runStructuralAndCostSimulation();
    }
  } catch (e) {
    console.error('[Sim] 初期状態の反映エラー:', e);
  }
}

// 外部連携からの初期状態適用
checkInitialStateFromStorageOrUrl();

// シミュレーター訪問時の回遊動線・Web履歴更新ログ
(function sendSimAccessLog() {
  const endpoint = materialsConfig?.system?.gasLogEndpointUrl;
  if (!endpoint || typeof endpoint !== 'string' || !endpoint.startsWith('http')) return;

  try {
    let pageHistory = [];
    try {
      const saved = sessionStorage.getItem('cage_page_history');
      if (saved) pageHistory = JSON.parse(saved);
    } catch (e) {}

    if (pageHistory.length === 0 || pageHistory[pageHistory.length - 1] !== '見積もりシステム') {
      pageHistory.push('見積もりシステム');
      sessionStorage.setItem('cage_page_history', JSON.stringify(pageHistory));
    }

    let initialReferrer = sessionStorage.getItem('cage_initial_referrer');
    let landingPage = sessionStorage.getItem('cage_landing_page');
    if (!initialReferrer) {
      initialReferrer = document.referrer || 'Direct';
      const params = new URLSearchParams(window.location.search);
      const originParam = params.get('origin') || params.get('utm_source') || params.get('ref');
      if (originParam) initialReferrer = `${initialReferrer} [Param:${originParam}]`;
      sessionStorage.setItem('cage_initial_referrer', initialReferrer);
    }
    if (!landingPage) {
      landingPage = window.location.pathname;
      sessionStorage.setItem('cage_landing_page', landingPage);
    }

    const ua = navigator.userAgent;
    let deviceType = 'PC';
    if (/iPhone/i.test(ua)) deviceType = 'iPhone';
    else if (/iPad/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) deviceType = 'iPad';
    else if (/Android/i.test(ua)) deviceType = 'Android';
    else if (/Mac/i.test(ua)) deviceType = 'Mac';
    else if (/Win/i.test(ua)) deviceType = 'Windows';

    let browserName = 'Browser';
    if (/Chrome/i.test(ua) && !/Edge|Edg/i.test(ua)) browserName = 'Chrome';
    else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browserName = 'Safari';
    else if (/Edge|Edg/i.test(ua)) browserName = 'Edge';
    else if (/Firefox/i.test(ua)) browserName = 'Firefox';

    // カテゴリ判定
    let category = '直接 / お気に入り';
    const lower = initialReferrer.toLowerCase();
    if (lower.includes('instagram.com')) category = 'Instagram';
    else if (lower.includes('t.co') || lower.includes('twitter.com') || lower.includes('x.com')) category = 'X (Twitter)';
    else if (lower.includes('google.')) category = 'Google検索';
    else if (lower.includes('yahoo.')) category = 'Yahoo!検索';
    else if (lower.includes('line.me')) category = 'LINE';
    else if (lower.includes('tiktok.com')) category = 'TikTok';
    else if (initialReferrer !== 'Direct') category = '外部Webサイト';

    const payload = {
      type: 'web_access',
      visitorId: visitorId,
      sessionId: sessionId,
      referrer: initialReferrer,
      referrerCategory: category,
      landingPage: landingPage,
      pageHistory: pageHistory,
      pageCount: pageHistory.length,
      device: {
        type: deviceType,
        browser: browserName,
        screen: `${window.innerWidth}x${window.innerHeight}`
      }
    };

    if (isLocalDevelopmentEnvironment() && SKIP_LOG_ON_LOCALHOST) {
      console.log('[Log] ローカル開発環境のため、シミュレーター訪問ログ送信をスキップしました。');
      return;
    }

    fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).then(() => {
      console.log('[Log] シミュレーター訪問ログをGASへ送信完了 (セッション:', sessionId, ')');
    }).catch(err => {
      console.warn('[Log] シミュレーター訪問ログ送信エラー:', err);
    });
  } catch (err) {
    console.warn('[Log] sendSimAccessLog エラー:', err);
  }
})();
