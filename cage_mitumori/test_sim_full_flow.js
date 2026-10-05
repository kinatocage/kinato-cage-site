// test_sim_full_flow.js - main.js同等の完全積算ロジックによる検算
import { CageModel } from './src/cage/CageModel.js';
import { MaterialFactory } from './src/cage/MaterialFactory.js';
import { materialsConfig } from './cost_materials_config.js';
import { getAcrylicExtrusionCost } from './acrylic_extrusion_price_config.js';
import { getFenpCost } from './fenp_price_config.js';
import { getPvcPunchingCost } from './pvc_punching_price_config.js';
import { getAcrylicBlackMatteCost } from './acrylic_black_matte_price_config.js';
import { getAcrylicSmokeGrayCost } from './acrylic_smoke_gray_price_config.js';
import { getAcrylicCastCost, getAcrylicCastRawBoardCost } from './acrylic_cast_price_config.js';

// DOMモック
if (typeof document === 'undefined') {
  global.document = {
    createElement: (tag) => {
      if (tag === 'canvas') {
        return {
          width: 256,
          height: 256,
          getContext: () => ({
            fillStyle: '',
            fillRect: () => {},
            beginPath: () => {},
            arc: () => {},
            fill: () => {},
            clearRect: () => {},
            createLinearGradient: () => ({ addColorStop: () => {} })
          }),
          addEventListener: () => {},
          removeEventListener: () => {}
        };
      }
      return {};
    }
  };
}

const materials = new MaterialFactory();

function getMaterialConfig(partCode) {
  if (!partCode) return null;
  if (materialsConfig.panels && materialsConfig.panels[partCode]) return materialsConfig.panels[partCode];
  if (materialsConfig.frames && materialsConfig.frames[partCode]) return materialsConfig.frames[partCode];
  if (materialsConfig.rails && materialsConfig.rails[partCode]) return materialsConfig.rails[partCode];
  if (materialsConfig.caps && materialsConfig.caps[partCode]) return materialsConfig.caps[partCode];
  if (materialsConfig.packings && materialsConfig.packings[partCode]) return materialsConfig.packings[partCode];
  if (materialsConfig.hardware && materialsConfig.hardware[partCode]) return materialsConfig.hardware[partCode];

  for (const group of [materialsConfig.panels, materialsConfig.frames, materialsConfig.rails, materialsConfig.caps, materialsConfig.packings, materialsConfig.hardware]) {
    if (!group) continue;
    for (const [key, val] of Object.entries(group)) {
      if (partCode === key || partCode.startsWith(key) || key.startsWith(partCode)) return val;
      if (val.name && (val.name === partCode || partCode.includes(val.name) || val.name.includes(partCode))) return val;
    }
  }
  return null;
}

function calculateEstimate(state) {
  const model = new CageModel(materials);
  model.update(state);
  const parts = model.partsList;

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
        const isVentCoverPart = part.panelCode === 'acrylic_extrusion_1_5' || (part.name && part.name.includes('換気量調整板'));
        if (!isVentCoverPart) {
          let singleCost = 0;
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
              const castCost = getAcrylicCastCost(wMm, hMm);
              singleCost = castCost != null ? castCost : (Math.round(config.pricePerM2 * areaM2) + 2366);
            } else {
              const rawCost = getAcrylicCastRawBoardCost(wMm, hMm);
              singleCost = rawCost != null ? rawCost : Math.round(config.pricePerM2 * areaM2);
            }
          } else {
            singleCost = Math.round(config.pricePerM2 * areaM2);
          }

          totalPanelCost += singleCost * part.count;
          if (config.baseCostPerPiece) totalPanelCost += config.baseCostPerPiece * part.count;
          if (config.baseCost) totalPanelCost += config.baseCost;
        }
        totalPanelWeight += config.weightPerM2 * areaM2 * part.count;
      }
    }
  }

  const optsConfig = materialsConfig.options || {};
  const laborConfig = optsConfig.labor || {};
  const itemConfig = optsConfig.items || {};

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

  const casterPrice = isCaster ? (itemConfig.caster?.price ?? 1500) : 0;
  const casterCost = isCaster ? (itemConfig.caster?.cost ?? 800) : 0;

  let ventCoverCost = 0;
  const ventCoverPrice = isSideVentCover ? (itemConfig.sideVentCover?.price ?? 500) : 0;

  // 床下パネルヒータ支え板
  let floorHeaterProcessingCost = 0;
  if (isFloorHeaterSupport) {
    const fhConfig = itemConfig.floorHeaterSupport || {};
    const holeUnit = fhConfig.holeCostPerPiece ?? 112;
    const diagUnit = fhConfig.diagonalCutCost ?? 239;
    const cornerUnit = fhConfig.cornerCutCost ?? 587;
    const screwUnit = fhConfig.screwCostPerPiece ?? 25;

    // 1枚構成: 穴10, 斜め4, 角落とし0, ネジ10
    // 2枚構成: 穴14, 斜め4, 角落とし2, ネジ14
    const holeCount = isFloorSplit ? 14 : 10;
    const diagCount = 4;
    const cornerCount = isFloorSplit ? 2 : 0;
    const screwCount = isFloorSplit ? 14 : 10;

    floorHeaterProcessingCost = (holeCount * holeUnit) + (diagCount * diagUnit) + (cornerCount * cornerUnit) + (screwCount * screwUnit);
  }

  const totalOptionPrice = casterPrice + ventCoverPrice;
  const totalOptionCost = casterCost + ventCoverCost;

  const pricingConfig = materialsConfig.pricing || {};
  const markupRate = typeof pricingConfig.markupRate === 'number' ? pricingConfig.markupRate : 1.4;
  const roundingUnit = typeof pricingConfig.roundingUnit === 'number' ? pricingConfig.roundingUnit : 100;

  const baseMaterialsCost = totalFrameCost + totalPanelCost + floorHeaterProcessingCost;
  const basePriceWithMarkup = Math.ceil((baseMaterialsCost * markupRate) / roundingUnit) * roundingUnit;

  const grandTotalCost = baseMaterialsCost + totalOptionCost;
  const grandTotalPrice = basePriceWithMarkup + totalOptionPrice + totalLaborFee;
  const grandTotalWeight = totalFrameWeight + totalPanelWeight;

  return {
    baseMaterialsCost,
    totalFrameCost,
    totalPanelCost,
    floorHeaterProcessingCost,
    grandTotalCost,
    grandTotalPrice,
    grandTotalWeight,
    totalLaborFee
  };
}

// 比較検算
console.log('================================================================================');
console.log('【全工程シミュレーション検算】床下パネルヒータ支え板 ON/OFF 差分検証');
console.log('================================================================================');

// 1. 540x400
const base540 = { W: 540, D: 400, H: 400, cageType: 'A', hasFloorReinforcement: false, hasFloorHeaterSupport: false, frameColor: 'silver', footType: 'rubber', frontWideFrame: '2x' };
const withHeater540 = { ...base540, hasFloorHeaterSupport: true };

const res540_off = calculateEstimate(base540);
const res540_on = calculateEstimate(withHeater540);

console.log('\n--- ケージ 540x400 (床補強なし・通常床面) ---');
console.log(`- オプションOFF時: 原価 ${res540_off.grandTotalCost} 円 / 販売価格 ${res540_off.grandTotalPrice} 円`);
console.log(`- オプションON 時: 原価 ${res540_on.grandTotalCost} 円 / 販売価格 ${res540_on.grandTotalPrice} 円`);
console.log(`- 原価差額:        +${res540_on.grandTotalCost - res540_off.grandTotalCost} 円 (材料費1,788円 + 加工費・ネジ2,052円 = 3,840円)`);
console.log(`- 販売価格差額:    +${res540_on.grandTotalPrice - res540_off.grandTotalPrice} 円 (原価マークアップ分 + 工賃1,000円)`);

// 2. 1050x400
const base1050 = { W: 1050, D: 400, H: 400, cageType: 'A', hasFloorReinforcement: true, hasFloorHeaterSupport: false, frameColor: 'silver', footType: 'rubber', frontWideFrame: '2x' };
const withHeater1050 = { ...base1050, hasFloorHeaterSupport: true };

const res1050_off = calculateEstimate(base1050);
const res1050_on = calculateEstimate(withHeater1050);

console.log('\n--- ケージ 1050x400 (床面中央補強あり・床面2分割) ---');
console.log(`- オプションOFF時: 原価 ${res1050_off.grandTotalCost} 円 / 販売価格 ${res1050_off.grandTotalPrice} 円`);
console.log(`- オプションON 時: 原価 ${res1050_on.grandTotalCost} 円 / 販売価格 ${res1050_on.grandTotalPrice} 円`);
console.log(`- 原価差額:        +${res1050_on.grandTotalCost - res1050_off.grandTotalCost} 円 (材料費3,566円 + 加工費・ネジ4,048円 = 7,614円)`);
console.log(`- 販売価格差額:    +${res1050_on.grandTotalPrice - res1050_off.grandTotalPrice} 円 (原価マークアップ分 + 工賃1,000円)`);
console.log('================================================================================');
