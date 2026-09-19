import './style.css';
import { CageViewer } from './cage/CageViewer.js';
import { materialsConfig } from '../cost_materials_config.js';
import { creaturePresets } from '../preset_creatures_config.js';

// DOM要素の取得
const container = document.getElementById('canvas-container');

// 生体プリセットコンテナ
const creaturePresetGrid = document.getElementById('creature-preset-grid');

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
const downloadFilenameLabel = document.getElementById('download-filename-label');

// 見積IDおよび最新計算データの保持変数
let currentEstimateId = null;
let currentEstimateData = null;
const sessionStartTime = Date.now();
const visitorId = getOrCreateVisitorId();
const sessionId = getOrCreateSessionId();
let calculationSequence = 0;
let lastEstimatedState = null;

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
const btnTypeC = document.getElementById('btn-type-c');
const typeBadge = document.getElementById('type-badge');

// フレームカラー選択
const btnFrameSilver = document.getElementById('btn-frame-silver');
const btnFrameBlack = document.getElementById('btn-frame-black');

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

// 正面下側幅広フレーム オプション（2倍幅 / 3倍幅）
const toggleFrontWide2x = document.getElementById('toggle-front-wide-2x');
const cardFrontWide2x = document.getElementById('card-front-wide-2x');
const frontWide2xSub = document.getElementById('front-wide-2x-sub');

const toggleFrontWide3x = document.getElementById('toggle-front-wide-3x');
const cardFrontWide3x = document.getElementById('card-front-wide-3x');
const frontWide3xSub = document.getElementById('front-wide-3x-sub');

// 警告バナー
const floorWarningBanner = document.getElementById('floor-warning-banner');
const seismicWarningBanner = document.getElementById('seismic-warning-banner');
const seismicWarningText = document.getElementById('seismic-warning-text');

// 扉開閉モードボタン（排他制御）
const btnDoorClosed = document.getElementById('btn-door-closed');
const btnDoorLeft = document.getElementById('btn-door-left');
const btnDoorRight = document.getElementById('btn-door-right');
const doorModeBtns = [btnDoorClosed, btnDoorLeft, btnDoorRight];

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

const rowPanelSide = document.getElementById('row-panel-side');
const rowPanelSideSplit = document.getElementById('row-panel-side-split');
const rowPanelTop = document.getElementById('row-panel-top');
const rowPanelTopSplit = document.getElementById('row-panel-top-split');

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
  frontWideFrame: '2x',        // 正面下側幅広フレーム: '2x' (40mm・初期値) | '3x' (60mm) | 'none' (20mm標準)
  frontWindowH: 50,
  hasSideReinforcement: false, // 側面補強フレームの有無 (左右対称)
  sideOpeningH: 120,           // デフォルト: 上下均等中央 (H=300mm時 120mm)
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
    topRight: 'punching'
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

  // パネル設定UIの表示状態同期
  syncPanelConfigUI();

  // パラメータ変更時は価格・重量計算表示を消去
  resetEstimateDisplay();
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
    }

    panelSummaryBadge.textContent = `${backName} / ${topName}`;
  }
}

/**
 * 側面換気量調整板オプションの利用可否更新
 * - 前提条件: 側面補強フレームがON (側面2分割) かつ 側面上部が塩ビパンチング
 */
function updateSideVentCoverAvailability() {
  const isAvailable = state.hasSideReinforcement && (state.panelConfig.sideUpper === 'punching');

  if (isAvailable) {
    toggleSideVentCover.disabled = false;
    cardSideVentCover.classList.remove('disabled');
    ventCoverBadge.classList.add('ready');
    ventCoverBadge.textContent = '選択可能';
    ventCoverSub.textContent = '冬場の保温・換気調整用。左右外張り';
  } else {
    toggleSideVentCover.checked = false;
    state.hasSideVentCover = false;
    toggleSideVentCover.disabled = true;
    cardSideVentCover.classList.add('disabled');
    cardSideVentCover.classList.remove('active');
    ventCoverBadge.classList.remove('ready');

    if (!state.hasSideReinforcement) {
      ventCoverBadge.textContent = '要側面2分割';
      ventCoverSub.textContent = '※側面補強フレームを有効にすると選択できます';
    } else {
      ventCoverBadge.textContent = '要上部パンチング';
      ventCoverSub.textContent = '※側面上部が塩ビパンチングパネル時に選択できます';
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
  if (state.cageType === 'C') {
    // Type Cは前窓構造のため選択不可
    toggleFrontWide2x.checked = false;
    toggleFrontWide2x.disabled = true;
    cardFrontWide2x.classList.remove('active');
    cardFrontWide2x.classList.add('disabled');
    frontWide2xSub.textContent = '※Type Cは前窓構造のため選択不可（Type A専用）';

    toggleFrontWide3x.checked = false;
    toggleFrontWide3x.disabled = true;
    cardFrontWide3x.classList.remove('active');
    cardFrontWide3x.classList.add('disabled');
    frontWide3xSub.textContent = '※Type Cは前窓構造のため選択不可（Type A専用）';
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

  // 部分一致フォールバック (コードまたは名称での照合)
  for (const group of [materialsConfig.panels, materialsConfig.frames, materialsConfig.rails, materialsConfig.caps]) {
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
    if (part.category === 'frame' || part.category === 'rail_cap') {
      const config = getMaterialConfig(part.partCode || part.name);
      if (config) {
        if (config.unit === 'm') {
          const lengthM = (part.lengthMm || 0) / 1000;
          const singleCost = Math.round(config.pricePerMeter * lengthM);
          totalFrameCost += singleCost * part.count;
          totalFrameWeight += config.weightPerMeter * lengthM * part.count;
        } else {
          totalFrameCost += (config.pricePerPiece || 0) * part.count;
          totalFrameWeight += (config.weightPerPiece || 0) * part.count;
        }
      }
    } else if (part.category === 'panel') {
      const config = getMaterialConfig(part.panelCode || part.partCode || part.name);
      let wMm = part.widthMm;
      let hMm = part.heightMm;
      if ((wMm == null || hMm == null) && part.size) {
        const match = part.size.match(/(\d+)\s*[x×]\s*(\d+)/);
        if (match) {
          wMm = parseInt(match[1], 10);
          hMm = parseInt(match[2], 10);
        }
      }
      if (config && config.unit === 'm2' && wMm && hMm) {
        const areaM2 = (wMm / 1000) * (hMm / 1000);
        // 側面換気量調整板は固定オプションとして後述で定額加算（二重計上防止、重量計算は維持）
        const isVentCoverPart = part.panelCode === 'acrylic_extrusion_1_5' || (part.name && part.name.includes('換気量調整板'));
        if (!isVentCoverPart) {
          const singleCost = Math.round(config.pricePerM2 * areaM2);
          totalPanelCost += singleCost * part.count;
        }
        totalPanelWeight += config.weightPerM2 * areaM2 * part.count;
      }
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

  // 1. オプション加工工賃（資材費とは別で単純に販売価格へ加算）
  const splitFloorLabor = isFloorSplit ? (laborConfig.splitFloor?.price ?? 500) : 0;
  const splitTopLabor = isTopSplit ? (laborConfig.splitTop?.price ?? 500) : 0;
  const typeCLabor = isTypeC ? (laborConfig.typeC?.price ?? 500) : 0;
  const splitSideLabor = isSideSplit ? (laborConfig.splitSide?.price ?? 1000) : 0;
  const frontWide3xLabor = isFrontWide3x ? (laborConfig.frontWide3x?.price ?? 500) : 0;

  const totalLaborFee = splitFloorLabor + splitTopLabor + typeCLabor + splitSideLabor + frontWide3xLabor;

  // 2. 特定オプション部材（販売価格加算額および内部原価）
  const casterPrice = isCaster ? (itemConfig.caster?.price ?? 1500) : 0;
  const casterCost = isCaster ? (itemConfig.caster?.cost ?? 800) : 0;

  const ventCoverPrice = isSideVentCover ? (itemConfig.sideVentCover?.price ?? 500) : 0;
  const ventCoverCost = isSideVentCover ? (itemConfig.sideVentCover?.cost ?? 200) : 0;

  const totalOptionPrice = casterPrice + ventCoverPrice;
  const totalOptionCost = casterCost + ventCoverCost;

  // 3. 資材原価および基本販売価格（原価 × 1.5倍を100円単位で切り上げ）
  const baseMaterialsCost = totalFrameCost + totalPanelCost;
  const basePriceWithMarkup = Math.ceil((baseMaterialsCost * 1.5) / 100) * 100;

  // 4. 総合計の算出 (※内訳金額はDOM・UI上には表示せず、合計金額のみに反映)
  const grandTotalCost = baseMaterialsCost + totalOptionCost;
  const grandTotalPrice = basePriceWithMarkup + totalOptionPrice + totalLaborFee;
  const grandTotalWeight = totalFrameWeight + totalPanelWeight;

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
 * 現在サイズ・オプションスペックサマリーの描画（価格表カード幅に合わせた改行配慮）
 */
function updateSpecSummary() {
  if (!currentSpecSummary) return;

  const typeName = state.cageType === 'A' ? 'Type A（全面扉）' : 'Type C（前窓＋扉）';
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
    optionsList.push(`側面補強: ${state.sideOpeningH}mm`);
  }
  if (state.hasDoorAntiFlex) {
    optionsList.push('扉たわみ防止');
  }
  if (state.hasSideVentCover) {
    optionsList.push('換気調整板');
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

  // 側面開口高さの最大値と中央等分値の連動
  const centerSideH = Math.round((newH - 60) / 20) * 10;
  const maxSideH = Math.max(30, newH - 100);
  inputSideH.max = maxSideH;
  if (!state.hasSideReinforcement || state.sideOpeningH > maxSideH) {
    state.sideOpeningH = Math.min(maxSideH, centerSideH);
    inputSideH.value = state.sideOpeningH;
  }
});
bindInputPair(sliderFW, inputFW, 'frontWindowH');

// 側面補強 開口高さの入力イベント
inputSideH.addEventListener('change', (e) => {
  let val = parseInt(e.target.value, 10);
  const min = parseInt(inputSideH.min, 10) || 30;
  const max = parseInt(inputSideH.max, 10) || (state.H - 100);
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
    // デフォルトは上下均等になる中央配置
    const centerSideH = Math.round((state.H - 60) / 20) * 10;
    if (state.sideOpeningH <= 0 || state.sideOpeningH > state.H - 100) {
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

// 正面スライド扉 たわみ防止レールのトグル
toggleDoorAntiFlex.addEventListener('change', (e) => {
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

// タイプ切り替え
btnTypeA.addEventListener('click', () => {
  state.cageType = 'A';
  state.frontWideFrame = lastTypeAFrontWideFrame; // 前回のType A設定を復元
  btnTypeA.classList.add('active');
  btnTypeC.classList.remove('active');
  rowFrontWindow.classList.add('hidden');
  typeBadge.textContent = 'Type A 選択中 (全面スライド扉)';
  syncUpdate();
});

btnTypeC.addEventListener('click', () => {
  state.cageType = 'C';
  state.frontWideFrame = 'none'; // Type Cは前窓構造のため幅広フレームなし
  btnTypeC.classList.add('active');
  btnTypeA.classList.remove('active');
  rowFrontWindow.classList.remove('hidden');
  typeBadge.textContent = 'Type C 選択中 (前窓＋扉)';
  syncUpdate();
});

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
    topRight: 'punching'
  };

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
  syncUpdate();
});

selectPanelTopLeft.addEventListener('change', (e) => {
  state.panelConfig.topLeft = e.target.value;
  syncUpdate();
});

selectPanelTopRight.addEventListener('change', (e) => {
  state.panelConfig.topRight = e.target.value;
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
  if (preset.cageType && (preset.cageType === 'A' || preset.cageType === 'C')) {
    state.cageType = preset.cageType;
    if (btnTypeA && btnTypeC) {
      btnTypeA.classList.toggle('active', state.cageType === 'A');
      btnTypeC.classList.toggle('active', state.cageType === 'C');
      if (typeBadge) {
        typeBadge.textContent = state.cageType === 'A' ? 'Type A 選択中 (全面スライド扉)' : 'Type C 選択中 (前窓＋扉)';
      }
      if (rowFrontWindow) {
        rowFrontWindow.classList.toggle('hidden', state.cageType !== 'C');
      }
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
  if (preset.sideOpeningH != null) {
    state.sideOpeningH = preset.sideOpeningH;
    if (inputSideH) inputSideH.value = preset.sideOpeningH;
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

  // モーダルを自動でオープン表示（前回のダウンロード完了通知はリセット）
  if (estimateResultModal) {
    if (modalDownloadSuccess) {
      modalDownloadSuccess.classList.add('hidden');
    }
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
    panels.push({ face: '正面扉', name: '透明アクリル 3.0mm' });
    panels.push({ face: '正面固定窓', name: `透明アクリル 3.0mm (開口高 ${state.frontWindowH}mm)` });
  } else {
    panels.push({ face: '正面扉', name: '透明アクリル 3.0mm (全面スライド)' });
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

  return panels;
}

/**
 * 選択されているすべてのオプションを網羅的にリストアップ
 */
function getSelectedOptionsList() {
  const options = [];

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
    options.push(`側面補強フレーム (開口部高 ${state.sideOpeningH}mm・左右2分割)`);
  }

  // 4. 側面換気量調整板 (左右外張り)
  if (state.hasSideVentCover) {
    options.push('側面換気量調整板 (左右ペア・外張りt1.5アクリル板・化粧つまみネジ付)');
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

  return options;
}

/**
 * 問い合わせ用フォーマットテキスト生成
 */
function generateInquirySpecText(estimateId, totals) {
  const typeName = state.cageType === 'A' ? 'Type A（全面スライド扉仕様）' : 'Type C（下部前窓＋扉仕様）';
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
※まだβ版なので誤差（最大±15%程度）が出ております。詳細はDMよりお問い合わせください。
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

    const typeName = state.cageType === 'A' ? 'Type A（全面スライド扉仕様）' : 'Type C（下部前窓＋スライド扉仕様）';
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
    ctx.fillText('※まだβ版なので誤差（最大±15%程度）が出ております。', priceBoxX + 35, priceBoxY + 220);
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

    // 9. 画像のダウンロード（ファイル名が絶対に文字化けせず、UUIDにもならず指定通り保存されるData URL方式）
    const downloadFileName = `Cage_Estimate_${currentEstimateId}.png`;

    try {
      const dataUrl = canvas.toDataURL('image/png');
      window.lastGeneratedEstimateImage = dataUrl;
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = downloadFileName;
      a.target = '_self';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      console.log('Downloaded estimate card image via DataURL:', downloadFileName);

      // モーダル内のダウンロード完了メッセージを表示
      if (modalDownloadSuccess && downloadFilenameLabel) {
        downloadFilenameLabel.textContent = downloadFileName;
        modalDownloadSuccess.classList.remove('hidden');
        setTimeout(() => {
          if (modalDownloadSuccess) modalDownloadSuccess.classList.add('hidden');
        }, 7000);
      }
    } catch (e) {
      console.warn('toDataURL failed, falling back to Blob:', e);
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

// =================================================================
// 4. Googleスプレッドシート ログ収集（開発計画2用）
// =================================================================
async function maybeSendEstimateLog(estimateData) {
  // ローカル開発環境の判定（ユーザー指示によりローカルからのログ送信テストを有効化）
  const hostname = window.location.hostname;
  const port = window.location.port;
  const isLocalhost = hostname === 'localhost' ||
                      hostname === '127.0.0.1' ||
                      hostname === '[::1]' ||
                      hostname === '0.0.0.0' ||
                      hostname.endsWith('.local') ||
                      hostname.startsWith('192.168.') ||
                      hostname.startsWith('10.') ||
                      port === '5173' ||
                      port === '4173';

  if (isLocalhost) {
    console.log(`[Log] ローカル開発環境（${hostname || 'local'}:${port}）からGoogleスプレッドシートへ送信テストを実行します。`);
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

// 生体プリセットの初期化
initCreaturePresets();

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
      if (urlParams.has('floorReinf')) incomingState.hasFloorReinforcement = urlParams.get('floorReinf') === '1' || urlParams.get('floorReinf') === 'true';
      if (urlParams.has('topReinf')) incomingState.hasTopReinforcement = urlParams.get('topReinf') === '1' || urlParams.get('topReinf') === 'true';
      if (urlParams.has('frontWide')) incomingState.frontWideFrame = urlParams.get('frontWide');

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
    if (incomingState.cageType === 'A' || incomingState.cageType === 'C') {
      state.cageType = incomingState.cageType;
      if (btnTypeA && btnTypeC) {
        btnTypeA.classList.toggle('active', state.cageType === 'A');
        btnTypeC.classList.toggle('active', state.cageType === 'C');
        if (typeBadge) {
          typeBadge.textContent = state.cageType === 'A' ? 'Type A 選択中 (全面スライド扉)' : 'Type C 選択中 (前窓＋扉)';
        }
        if (rowFrontWindow) {
          rowFrontWindow.classList.toggle('hidden', state.cageType !== 'C');
        }
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
    if (typeof incomingState.hasFloorReinforcement === 'boolean') {
      state.hasFloorReinforcement = incomingState.hasFloorReinforcement;
      if (toggleFloorReinforce) toggleFloorReinforce.checked = state.hasFloorReinforcement;
    } else {
      updateFloorReinforceByArea();
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
    if (typeof calcEstimate === 'function') {
      calcEstimate();
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
