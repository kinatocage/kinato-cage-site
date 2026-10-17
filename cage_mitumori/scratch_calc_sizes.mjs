import { CageModel } from './src/cage/CageModel.js';
import { MaterialFactory } from './src/cage/MaterialFactory.js';
import { materialsConfig } from './cost_materials_config.js';
import { getAcrylicExtrusionCost } from './acrylic_extrusion_price_config.js';
import { getAcrylicBlackMatteCost } from './acrylic_black_matte_price_config.js';
import { getAcrylicSmokeGrayCost } from './acrylic_smoke_gray_price_config.js';
import { getAcrylicCastCost, getAcrylicCastRawBoardCost } from './acrylic_cast_price_config.js';
import { getPvcPunchingCost } from './pvc_punching_price_config.js';
import { getFenpCost } from './fenp_price_config.js';

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

function getPanelCostAndWeight(part) {
  let config = materialsConfig.panels?.[part.panelCode || part.partCode];
  let wMm = part.widthMm || part.wMm;
  let hMm = part.heightMm || part.hMm;

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

  const code = part.panelCode || part.partCode;
  if (config && wMm && hMm) {
    const areaM2 = (wMm / 1000) * (hMm / 1000);
    if (code && code.startsWith('wire_mesh_')) {
      const pitch = parseInt(code.replace('wire_mesh_', ''), 10) || 25;
      const fenpCost = getFenpCost(pitch, wMm, hMm);
      singleCost = fenpCost != null ? fenpCost : Math.round(config.pricePerM2 * areaM2);
    } else if (code === 'acrylic_extrusion_2_0') {
      singleCost = getAcrylicExtrusionCost(2.0, wMm, hMm);
    } else if (code === 'acrylic_extrusion_3_0') {
      singleCost = getAcrylicExtrusionCost(3.0, wMm, hMm);
    } else if (code === 'acrylic_extrusion_1_5') {
      singleCost = getAcrylicExtrusionCost(1.5, wMm, hMm);
    } else if (code === 'acrylic_black_matte_3_0') {
      const matteCost = getAcrylicBlackMatteCost(wMm, hMm);
      singleCost = matteCost != null ? matteCost : Math.round(config.pricePerM2 * areaM2);
    } else if (code === 'acrylic_smoke_gray_3_0') {
      const smokeCost = getAcrylicSmokeGrayCost(wMm, hMm);
      singleCost = smokeCost != null ? smokeCost : Math.round(config.pricePerM2 * areaM2);
    } else if (code === 'acrylic_cast_3_0') {
      const isDoor = part.name && part.name.includes('扉');
      singleCost = isDoor ? getAcrylicCastCost(wMm, hMm) : getAcrylicCastRawBoardCost(wMm, hMm);
    } else if (code === 'pvc_punching_3_0') {
      singleCost = getPvcPunchingCost(wMm, hMm);
    } else if (code === 'danplate_4_0' || code === 'polyca_4_0') {
      singleCost = Math.round(config.pricePerM2 * areaM2);
    } else {
      singleCost = Math.round(config.pricePerM2 * areaM2);
    }

    totalCost = singleCost * part.count;
    totalWeight = (config.weightPerM2 || 0) * areaM2 * part.count;
  }
  return { singleCost, totalCost, totalWeight, wMm, hMm };
}

const sizes = [
  { name: '750x450x300', W: 750, D: 450, H: 300 },
  { name: '1200x450x450', W: 1200, D: 450, H: 450 },
  { name: '1800x600x600', W: 1800, D: 600, H: 600 },
];

for (const s of sizes) {
  const model = new CageModel(materials);
  model.update({
    W: s.W,
    D: s.D,
    H: s.H,
    cageType: 'A',
    frameColor: 'silver',
    frontWideFrame: 'none',
    hasSideReinforcement: false,
    hasSideVentCover: false,
    hasDoorAntiFlex: false,
    hasFloorReinforcement: s.W > 940,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'acrylic',
      back: 'acrylic',
      side: 'acrylic',
      top: 'acrylic'
    }
  });

  const parts = model.partsList;
  const panelParts = parts.filter(p => p.category === 'panel');

  console.log(`\n==================================================`);
  console.log(`【ケージサイズ: ${s.name}】(W${s.W} x D${s.D} x H${s.H})`);
  let panelTotal = 0;
  for (const p of panelParts) {
    const cost = getPanelCostAndWeight(p);
    panelTotal += cost.totalCost;
    console.log(`  - ${p.name.padEnd(16)}: ${p.size.padEnd(14)} (${cost.wMm}x${cost.hMm}mm) x ${p.count}枚 | 単価: ¥${cost.singleCost?.toLocaleString()} | 小計: ¥${cost.totalCost?.toLocaleString()}`);
  }
  console.log(`  パネル合計仕入れ原価: ¥${panelTotal.toLocaleString()}`);
}
