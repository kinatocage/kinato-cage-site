import { CageModel } from './src/cage/CageModel.js';
import { MaterialFactory } from './src/cage/MaterialFactory.js';
import { materialsConfig } from './cost_materials_config.js';
import { getAcrylicExtrusionCost } from './acrylic_extrusion_price_config.js';
import { getPvcPunchingCost } from './pvc_punching_price_config.js';
import { getAcrylicCastCost, getAcrylicCastRawBoardCost } from './acrylic_cast_price_config.js';

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

function getPanelSortScore(part) {
  const name = part.name || '';
  if (name.includes('前窓')) return 2;
  if (name.includes('扉')) return 1;
  if (name.includes('底板') || (name.includes('床面') && !name.includes('支え板') && !name.includes('プラダン'))) return 3;
  if (name.includes('側板') || name.includes('側面')) {
    if (name.includes('換気量調整板')) return 7;
    return 4;
  }
  if (name.includes('背板') || name.includes('背面')) return 5;
  if (name.includes('天板') || name.includes('天面') || name.includes('金網')) return 6;
  if (name.includes('換気量調整板')) return 7;
  if (name.includes('床下パネルヒータ支え板')) return 8;
  if (name.includes('プラダン')) return 9;
  return 10;
}

function getFrameSortScore(part) {
  const code = part.partCode || part.name || '';
  if (code.startsWith('ECP') || code.includes('キャップ')) return 3;
  if (code.startsWith('PGRU') || code.startsWith('PGRL') || code.includes('レール')) return 2;
  return 1;
}

function getPanelCostAndWeight(part) {
  const config = materialsConfig.panels[part.panelCode || part.partCode];
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

  const code = part.panelCode || part.partCode;
  if (config && wMm && hMm) {
    const areaM2 = (wMm / 1000) * (hMm / 1000);
    // 1. 板材料費の算出
    if (code === 'acrylic_extrusion_2_0') {
      singleCost = getAcrylicExtrusionCost(2.0, wMm, hMm);
    } else if (code === 'acrylic_extrusion_3_0') {
      singleCost = getAcrylicExtrusionCost(3.0, wMm, hMm);
    } else if (code === 'acrylic_extrusion_1_5') {
      singleCost = getAcrylicExtrusionCost(1.5, wMm, hMm);
    } else if (code === 'acrylic_cast_3_0') {
      const isDoor = part.name && part.name.includes('扉');
      singleCost = isDoor ? getAcrylicCastCost(wMm, hMm) : getAcrylicCastRawBoardCost(wMm, hMm);
    } else if (code === 'pvc_punching_3_0') {
      singleCost = getPvcPunchingCost(wMm, hMm);
    } else if (code === 'danplate_4_0') {
      singleCost = Math.round(config.pricePerM2 * areaM2);
    } else {
      singleCost = Math.round(config.pricePerM2 * areaM2);
    }

    // 2. はざいや加工費（穴加工・斜めカット・切欠き）の加算
    if (part.name && part.name.includes('換気量調整板')) {
      const holeUnit = materialsConfig.options?.items?.sideVentCover?.holeCostPerPiece ?? 94;
      const holesPerPanel = materialsConfig.options?.items?.sideVentCover?.holesPerPanel ?? 4;
      singleCost += (holesPerPanel * holeUnit);
    }

    if (part.name && part.name.includes('床下パネルヒータ支え板')) {
      const fhConfig = materialsConfig.options?.items?.floorHeaterSupport || {};
      const holeUnit = fhConfig.holeCostPerPiece ?? 112;
      const diagUnit = fhConfig.diagonalCutCost ?? 239;
      const cornerUnit = fhConfig.cornerCutCost ?? 587;

      const is2Panel = part.count === 2 || (part.note && part.note.includes('2枚'));
      if (is2Panel) {
        // 2枚構成: φ6穴7箇所(@112 = 784円) + 斜めカット2箇所(@239 = 478円) + 切欠き1箇所(@587 = 587円) = 1,849円/枚
        singleCost += (7 * holeUnit) + (2 * diagUnit) + (1 * cornerUnit);
      } else {
        // 1枚構成: φ6穴10箇所(@112 = 1,120円) + 斜めカット4箇所(@239 = 956円) = 2,076円/枚
        singleCost += (10 * holeUnit) + (4 * diagUnit);
      }
    }

    totalCost = singleCost * part.count;
    totalWeight = (config.weightPerM2 || 0) * areaM2 * part.count;
  }
  return { singleCost, totalCost, totalWeight };
}

function getOtherPartCostAndWeight(part) {
  const code = part.partCode || part.name || '';
  let config = materialsConfig.hardware?.[code] || materialsConfig.packings?.[code] || materialsConfig.caps?.[code];

  if (!config) {
    for (const group of [materialsConfig.hardware, materialsConfig.packings, materialsConfig.caps]) {
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
    const name = part.name || '';
    if (name.includes('化粧つまみネジ') || name.includes('No.1')) {
      singleCost = materialsConfig.options?.items?.floorHeaterSupport?.screwCostPerPiece ?? 25;
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
    }
  }

  return { singleCost, totalCost, totalWeight };
}

function printBOM(label, params) {
  console.log(`\n======================================================================`);
  console.log(`【${label}】BOM (3セクション分割・新並び順・原価重量付)`);
  console.log(`======================================================================`);

  const model = new CageModel(materials);
  model.update(params);
  const parts = model.partsList;

  const frameParts = [];
  const panelParts = [];
  const otherParts = [];

  for (const p of parts) {
    if (p.partCode === 'NSCP1H-S-6' || (p.name && p.name.includes('ゴムパッキン'))) {
      otherParts.push(p);
    } else if (p.category === 'panel') {
      panelParts.push(p);
    } else if (p.category === 'frame' || p.category === 'rail_cap' || p.category === 'hardware') {
      frameParts.push(p);
    } else {
      otherParts.push(p);
    }
  }

  // フレームソート: 通常 -> レール -> ECP
  frameParts.sort((a, b) => {
    const sA = getFrameSortScore(a);
    const sB = getFrameSortScore(b);
    if (sA !== sB) return sA - sB;
    return (a.partCode || a.name).localeCompare(b.partCode || b.name);
  });

  // パネルソート: 扉 -> 前窓 -> 床 -> 側 -> 背 -> 天 -> 換気板 -> 支え板 -> プラダン
  panelParts.sort((a, b) => {
    return getPanelSortScore(a) - getPanelSortScore(b);
  });

  console.log('\n■ 1. フレーム類（レール・キャップ含む）');
  console.log('| 型番・品名 | 長さ | 数量 | 備考 |');
  console.log('|:---|:---:|:---:|:---|');
  frameParts.forEach(p => {
    console.log(`| ${p.partCode || p.name} | ${p.size || p.lengthMm || '-'} | ${p.count} | ${p.note || '-'} |`);
  });

  console.log('\n■ 2. パネル類');
  console.log('| 部材種別 | 寸法 / 仕様 | 数量 | 原価合計 | 重量 | 用途・配置 |');
  console.log('|:---|:---|:---:|:---:|:---:|:---|');
  let panelCostSum = 0;
  let panelWeightSum = 0;
  panelParts.forEach(p => {
    const { totalCost, totalWeight } = getPanelCostAndWeight(p);
    panelCostSum += totalCost;
    panelWeightSum += totalWeight;
    console.log(`| ${p.name} | ${p.size || '-'} | ${p.count} | ¥${totalCost.toLocaleString()} | ${totalWeight.toFixed(3)} kg | ${p.note || '-'} |`);
  });
  console.log(`| **パネル 合計** | - | **${panelParts.reduce((acc, c) => acc + c.count, 0)}点** | **¥${panelCostSum.toLocaleString()}** | **${panelWeightSum.toFixed(3)} kg** | - |`);

  console.log('\n■ 3. その他部材・金物・付属品');
  console.log('| 部材名 | 寸法 / 仕様 | 数量 | 原価合計 | 重量 | 備考・用途 |');
  console.log('|:---|:---|:---:|:---:|:---:|:---|');
  let otherCostSum = 0;
  let otherWeightSum = 0;
  otherParts.forEach(p => {
    const { totalCost, totalWeight } = getOtherPartCostAndWeight(p);
    otherCostSum += totalCost;
    otherWeightSum += totalWeight;
    console.log(`| ${p.name} | ${p.size || '-'} | ${p.count} | ¥${totalCost.toLocaleString()} | ${totalWeight.toFixed(3)} kg | ${p.note || '-'} |`);
  });
  console.log(`| **その他部材 合計** | - | **${otherParts.reduce((acc, c) => acc + c.count, 0)}点** | **¥${otherCostSum.toLocaleString()}** | **${otherWeightSum.toFixed(3)} kg** | - |`);
}

printBOM('540x400 (床補強なし・床下支え板 1枚構成)', {
  W: 540,
  D: 400,
  H: 400,
  cageType: 'A',
  hasFloorReinforcement: false,
  hasTopReinforcement: false,
  hasSideReinforcement: false,
  hasFloorHeaterSupport: true,
  frameColor: 'silver',
  footType: 'rubber',
  frontWideFrame: '2x'
});

printBOM('1050x400 (床補強あり・床下支え板 2枚構成)', {
  W: 1050,
  D: 400,
  H: 400,
  cageType: 'A',
  hasFloorReinforcement: true,
  hasTopReinforcement: true,
  hasSideReinforcement: false,
  hasFloorHeaterSupport: true,
  frameColor: 'silver',
  footType: 'rubber',
  frontWideFrame: '2x'
});
