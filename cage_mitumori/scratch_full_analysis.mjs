import { CageModel } from './src/cage/CageModel.js';
import { MaterialFactory } from './src/cage/MaterialFactory.js';
import { materialsConfig } from './cost_materials_config.js';
import { getAcrylicExtrusionCost } from './acrylic_extrusion_price_config.js';
import { getAcrylicCastCost, getAcrylicCastRawBoardCost, getAcrylicDoorProcessingCost } from './acrylic_cast_price_config.js';
import { getPvcPunchingCost } from './pvc_punching_price_config.js';
import fs from 'fs';

// Node.js 環境用モック
if (typeof document === 'undefined') {
  global.document = {
    createElement: (tag) => {
      if (tag === 'canvas') {
        return {
          width: 256, height: 256,
          getContext: () => ({
            fillStyle: '', fillRect: () => {}, beginPath: () => {}, arc: () => {}, fill: () => {}, clearRect: () => {},
            createLinearGradient: () => ({ addColorStop: () => {} })
          }),
          addEventListener: () => {}, removeEventListener: () => {}
        };
      }
      return {};
    }
  };
}

const materials = new MaterialFactory();
const rawHazaiyaData = JSON.parse(fs.readFileSync('../scratch/hazaiya_compare_results.json', 'utf-8'));

function getPartCost(part) {
  const code = part.partCode || part.name || '';
  let config = materialsConfig.hardware?.[code] || materialsConfig.packings?.[code] || materialsConfig.caps?.[code] || materialsConfig.frames?.[code];

  if (!config) {
    for (const group of [materialsConfig.frames, materialsConfig.hardware, materialsConfig.packings, materialsConfig.caps]) {
      if (!group) continue;
      for (const [key, val] of Object.entries(group)) {
        if (code === key || code.startsWith(key) || key.startsWith(code) || (val.name && val.name === code)) {
          config = val;
          break;
        }
      }
      if (config) break;
    }
  }

  let singleCost = 0;
  let totalCost = 0;
  if (config) {
    if (config.unit === 'm' && part.lengthMm) {
      singleCost = Math.round(config.pricePerMeter * (part.lengthMm / 1000));
      totalCost = singleCost * part.count;
    } else if (config.pricePerPiece) {
      singleCost = config.pricePerPiece;
      totalCost = singleCost * part.count;
    }
  } else {
    // レールや特定金具
    const name = part.name || '';
    if (name.includes('ガラスレール') || name.includes('上レール') || name.includes('下レール')) {
      const pricePerMeter = name.includes('上') ? 566 : 495;
      singleCost = Math.round(pricePerMeter * ((part.lengthMm || 0) / 1000));
      totalCost = singleCost * part.count;
    } else if (name.includes('鍵') || name.includes('C-108')) {
      singleCost = 800; totalCost = singleCost * part.count;
    } else if (name.includes('ツマミ') || name.includes('ノブ') || name.includes('RNSFS4')) {
      singleCost = 350; totalCost = singleCost * part.count;
    } else if (name.includes('ゴム脚')) {
      singleCost = 60; totalCost = singleCost * part.count;
    }
  }
  return { singleCost, totalCost };
}

const targetCages = [
  { label: '750x450x300', W: 750, D: 450, H: 300, topType: 'acrylic' },
  { label: '1200x450x450 (天面パンチング)', W: 1200, D: 450, H: 450, topType: 'punching' },
  { label: '1200x450x450 (天面アクリル)', W: 1200, D: 450, H: 450, topType: 'acrylic' },
  { label: '1800x600x600 (天面パンチング)', W: 1800, D: 600, H: 600, topType: 'punching' },
  { label: '1800x600x600 (天面アクリル)', W: 1800, D: 600, H: 600, topType: 'acrylic' },
];

const summary = [];

for (const c of targetCages) {
  const model = new CageModel(materials);
  model.update({
    W: c.W, D: c.D, H: c.H,
    cageType: 'A',
    frameColor: 'silver',
    frontWideFrame: 'none',
    hasFloorReinforcement: c.W > 940,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'acrylic',
      back: 'acrylic',
      side: 'acrylic',
      top: c.topType
    }
  });

  const parts = model.partsList;
  let frameTotal = 0;
  let otherTotal = 0;

  for (const p of parts) {
    if (p.category === 'frame' || p.category === 'rail_cap') {
      frameTotal += getPartCost(p).totalCost;
    } else if (p.category !== 'panel') {
      otherTotal += getPartCost(p).totalCost;
    }
  }

  // パネル比較
  // rawHazaiyaData から該当データを引く
  const cageKey = c.label.split(' ')[0];
  const relevantRows = rawHazaiyaData.filter(r => {
    if (r.cage !== cageKey) return false;
    if (r.part.includes('天板')) {
      if (c.topType === 'punching' && !r.part.includes('パンチング')) return false;
      if (c.topType === 'acrylic' && r.part.includes('パンチング')) return false;
    }
    return true;
  });

  let currPanelTotal = 0;
  let hzMatTotal = 0;      // はざいや最新「板材代（material）」＋ 扉加工費
  let hzTotalWithCut = 0;  // はざいや最新「カット込合計（total）」＋ 扉加工費

  const panelDetails = [];

  for (const r of relevantRows) {
    const isDoor = r.part.includes('扉');
    const doorProc = isDoor ? (r.door_proc || 0) : 0;

    const currUnit = isDoor ? (r.curr_unit + doorProc) : r.curr_unit;
    const currSub = currUnit * r.qty;
    currPanelTotal += currSub;

    // 最新はざいや 板材代ベース
    const hzMatUnit = isDoor ? (r.hz.material + doorProc) : r.hz.material;
    const hzMatSub = hzMatUnit * r.qty;
    hzMatTotal += hzMatSub;

    // 最新はざいや カット代込合計ベース
    const hzCutUnit = isDoor ? (r.hz.total + doorProc) : r.hz.total;
    const hzCutSub = hzCutUnit * r.qty;
    hzTotalWithCut += hzCutSub;

    panelDetails.push({
      part: r.part,
      size: `${r.w}x${r.h}mm`,
      qty: r.qty,
      currUnit, currSub,
      hzMatUnit, hzMatSub,
      hzCutUnit, hzCutSub
    });
  }

  // マークアップ計算（markupRate: 1.3, 端数100円切り上げ）
  const markupRate = 1.3;
  const roundingUnit = 100;

  // 1. 現行
  const currBaseCost = frameTotal + currPanelTotal;
  const currGrandCost = currBaseCost + otherTotal;
  const currPrice = Math.ceil((currBaseCost * markupRate) / roundingUnit) * roundingUnit;

  // 2. 最新はざいや（板材代ベース）
  const hzMatBaseCost = frameTotal + hzMatTotal;
  const hzMatGrandCost = hzMatBaseCost + otherTotal;
  const hzMatPrice = Math.ceil((hzMatBaseCost * markupRate) / roundingUnit) * roundingUnit;

  // 3. 最新はざいや（1枚カット代込ベース）
  const hzCutBaseCost = frameTotal + hzTotalWithCut;
  const hzCutGrandCost = hzCutBaseCost + otherTotal;
  const hzCutPrice = Math.ceil((hzCutBaseCost * markupRate) / roundingUnit) * roundingUnit;

  summary.push({
    cage: c.label,
    frameTotal,
    otherTotal,
    curr: { panelCost: currPanelTotal, grandCost: currGrandCost, price: currPrice },
    hzMat: { panelCost: hzMatTotal, grandCost: hzMatGrandCost, price: hzMatPrice },
    hzCut: { panelCost: hzTotalWithCut, grandCost: hzCutGrandCost, price: hzCutPrice },
    diffMat: {
      panelDiff: hzMatTotal - currPanelTotal,
      grandDiff: hzMatGrandCost - currGrandCost,
      priceDiff: hzMatPrice - currPrice
    },
    diffCut: {
      panelDiff: hzTotalWithCut - currPanelTotal,
      grandDiff: hzCutGrandCost - currGrandCost,
      priceDiff: hzCutPrice - currPrice
    },
    panelDetails
  });
}

fs.writeFileSync('./scratch/analysis_summary.json', JSON.stringify(summary, null, 2), 'utf-8');
console.log('分析完了！ scratch/analysis_summary.json に保存しました');
