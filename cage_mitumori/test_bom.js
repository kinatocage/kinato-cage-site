// test_bom.js - 資材リスト（BOM）抽出＆検証スクリプト
import { creaturePresets } from './preset_creatures_config.js';
import { CageModel } from './src/cage/CageModel.js';
import { MaterialFactory } from './src/cage/MaterialFactory.js';
import * as THREE from 'three';

// Node.js 環境用 document / canvas モック
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
            createLinearGradient: () => ({
              addColorStop: () => {}
            })
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


function formatBOM(title, parts) {
  let out = `\n================================================================================\n`;
  out += `【${title}】資材リスト (BOM)\n`;
  out += `================================================================================\n`;
  out += `${'カテゴリ'.padEnd(10)} | ${'部材名'.padEnd(36)} | ${'寸法 / 規格'.padEnd(20)} | ${'数量'.padStart(4)} | 備考\n`;
  out += `--------------------------------------------------------------------------------\n`;

  let totalCount = 0;
  for (const p of parts) {
    const cat = (p.category || '-').padEnd(10);
    const name = (p.name || '-').padEnd(34);
    const size = (p.size || '-').toString().padEnd(20);
    const count = p.count.toString().padStart(4);
    const note = p.note || '';
    out += `${cat} | ${name} | ${size} | ${count} | ${note}\n`;
    totalCount += p.count;
  }
  out += `--------------------------------------------------------------------------------\n`;
  out += `部材品目数: ${parts.length} 点 / 総部材点数: ${totalCount} 個\n`;
  return out;
}

// 1. フクロモモンガプリセットの検証
const sugarGliderPreset = creaturePresets.find(p => p.id === 'sugar_glider');
console.log('フクロモモンガ プリセット定義:\n', JSON.stringify(sugarGliderPreset, null, 2));

const sugarGliderModel = new CageModel(materials);
sugarGliderModel.update({
  W: sugarGliderPreset.W,
  D: sugarGliderPreset.D,
  H: sugarGliderPreset.H,
  cageType: sugarGliderPreset.cageType,
  frameColor: sugarGliderPreset.frameColor,
  frontWideFrame: sugarGliderPreset.frontWideFrame,
  hasSideReinforcement: sugarGliderPreset.hasSideReinforcement,
  hasSideVentCover: sugarGliderPreset.hasSideVentCover,
  hasDoorAntiFlex: sugarGliderPreset.hasDoorAntiFlex,
  hasFloorReinforcement: sugarGliderPreset.hasFloorReinforcement,
  hasTopReinforcement: sugarGliderPreset.hasTopReinforcement,
  footType: sugarGliderPreset.footType,
  panelConfig: sugarGliderPreset.panelConfig
});

const sugarGliderParts = sugarGliderModel.getPartsSummary();
console.log(formatBOM('フクロモモンガ推奨仕様 (W350 x D350 x H500 / 前開き / 側面全面パンチング / 換気量調整板)', sugarGliderParts));

// 2. ユーザー例示（間口310mm: H=350mm）での寸法検証
const sampleH350Model = new CageModel(materials);
sampleH350Model.update({
  W: 350,
  D: 350,
  H: 350,
  cageType: 'A',
  frameColor: 'silver',
  frontWideFrame: 'none',
  hasSideReinforcement: false,
  hasSideVentCover: true,
  panelConfig: {
    front: 'acrylic',
    floor: 'acrylic',
    back: 'acrylic',
    side: 'punching',
    top: 'punching'
  }
});
const sampleH350Parts = sampleH350Model.getPartsSummary();
const ventCoverH350 = sampleH350Parts.filter(p => p.name.includes('換気量調整板') || p.name.includes('化粧つまみネジ') || p.name.includes('パンチング'));
console.log(formatBOM('ユーザー例示仕様 (W350 x D350 x H350 / 間口310mm / 側面全面パンチング / 換気量調整板)', ventCoverH350));

// 3. 従来仕様（ハリネズミ: 側面2分割上部パンチング120mm）の寸法検証
const hedgehogPreset = creaturePresets.find(p => p.id === 'hedgehog');
const hedgehogModel = new CageModel(materials);
hedgehogModel.update({
  W: hedgehogPreset.W,
  D: hedgehogPreset.D,
  H: hedgehogPreset.H,
  cageType: hedgehogPreset.cageType,
  frameColor: hedgehogPreset.frameColor,
  frontWideFrame: hedgehogPreset.frontWideFrame,
  hasSideReinforcement: hedgehogPreset.hasSideReinforcement,
  sideOpeningH: hedgehogPreset.sideOpeningH,
  hasSideVentCover: hedgehogPreset.hasSideVentCover,
  hasDoorAntiFlex: hedgehogPreset.hasDoorAntiFlex,
  hasFloorReinforcement: hedgehogPreset.hasFloorReinforcement,
  hasTopReinforcement: hedgehogPreset.hasTopReinforcement,
  footType: hedgehogPreset.footType,
  panelConfig: hedgehogPreset.panelConfig
});
const hedgehogParts = hedgehogModel.getPartsSummary();
const ventCoverHedgehog = hedgehogParts.filter(p => p.name.includes('換気量調整板') || p.name.includes('化粧つまみネジ') || p.name.includes('パンチング'));
console.log(formatBOM('従来仕様 (ハリネズミ: W750 x D450 x H300 / 側面2分割・上部開口120mm / 換気量調整板)', ventCoverHedgehog));

// 4. 右ヒンジ仕様（doorHingeSide: 'right'）の検証
const rightDoorModel = new CageModel(materials);
rightDoorModel.update({
  W: 350,
  D: 350,
  H: 500,
  cageType: 'A_FRONT',
  doorHingeSide: 'right',
  panelConfig: {
    front: 'acrylic',
    floor: 'acrylic',
    back: 'acrylic',
    side: 'punching',
    top: 'punching'
  }
});
const rightDoorParts = rightDoorModel.getPartsSummary();
const rightDoorHingeLock = rightDoorParts.filter(p => p.note && (p.note.includes('ヒンジ') || p.note.includes('打掛')));
console.log(formatBOM('前開き扉 右ヒンジ・左打掛 仕様 (W350 x D350 x H500)', rightDoorHingeLock));

// 5. スライド扉レールの250mm単位計算の検証
import { materialsConfig } from './cost_materials_config.js';
console.log('\n================================================================================');
console.log('【スライド扉レール 250mm単位 原価計算検証】');
console.log('================================================================================');
const pgru = materialsConfig.rails['PGRU-03-4-GY'];
const pgrl = materialsConfig.rails['PGRL-03-4-GY'];
[310, 500, 710, 750, 760, 1000].forEach(len => {
  const billedMm = Math.ceil(len / 250) * 250;
  const pgruCost = (billedMm / 1000) * pgru.pricePerMeter;
  const pgrlCost = (billedMm / 1000) * pgrl.pricePerMeter;
  console.log(`開口幅=${len}mm -> 課金長=${billedMm}mm | 上レール(PGRU, ${pgru.pricePerMeter}円/m): ${pgruCost.toFixed(1)}円 | 下レール(PGRL, ${pgrl.pricePerMeter}円/m): ${pgrlCost.toFixed(1)}円`);
});

// 6. 前開きの場合のログ出力シミュレーション
console.log('\n================================================================================');
console.log('【前開きの場合のログ出力シミュレーション（GAS送信ペイロード＆CSV形式）】');
console.log('================================================================================');

const dummyEstimateData = {
  estimateId: 'EST-20260926-7788',
  timestamp: '2026-09-26T22:37:19.000Z',
  visitorId: 'vis_test123',
  sessionId: 'ses_test456',
  seq: 1,
  device: {
    type: 'PC',
    browser: 'Chrome',
    screen: '1920x1080'
  },
  spec: {
    W: 350,
    D: 350,
    H: 500,
    cageType: 'A_FRONT',
    doorHingeSide: 'left',
    doorHingeDisplayName: '左ヒンジ、右打掛',
    frameColor: 'silver',
    frameColorDisplayName: 'シルバー',
    panelsSummary: '正面扉:透明アクリル 3.0mm (前開き扉: 左ヒンジ、右打掛) | 床面:透明アクリル 3.0mm | 背面:透明アクリル 3.0mm | 側面 (左右):塩ビパンチングボード 3.0mm | 天面:塩ビパンチングボード 3.0mm',
    optionsSummary: '前開き扉仕様 (左ヒンジ、右打掛), 側面換気量調整板 (左右上下4枚・外張りt1.5アクリル板・化粧つまみネジ付)'
  },
  calculated: {
    priceWithMarkup: 42800,
    costTotal: 18500,
    weight: 4.8
  },
  meta: {
    elapsedSec: 45,
    referrer: 'https://kinato-cage-site.pages.dev/',
    diffNote: '初期表示からの試算'
  }
};

console.log('■ Googleスプレッドシート（GAS）送信 JSON ペイロード:');
console.log(JSON.stringify(dummyEstimateData, null, 2));

console.log('\n■ 問い合わせ用フォーマットテキスト:');
console.log(`【ケージお見積もり仕様】
・見積ID: ${dummyEstimateData.estimateId}
・ケージ種類: Type A 前開き (${dummyEstimateData.spec.doorHingeDisplayName})
・外寸サイズ: 幅 ${dummyEstimateData.spec.W}mm × 奥行 ${dummyEstimateData.spec.D}mm × 高さ ${dummyEstimateData.spec.H}mm
・フレーム色: ${dummyEstimateData.spec.frameColorDisplayName}
・選択パネル素材・板厚:
  ・正面扉: 透明アクリル 3.0mm (前開き扉: ${dummyEstimateData.spec.doorHingeDisplayName})
  ・床面: 透明アクリル 3.0mm
  ・背面: 透明アクリル 3.0mm
  ・側面 (左右): 塩ビパンチングボード 3.0mm
  ・天面: 塩ビパンチングボード 3.0mm
・選択オプション:
  ・前開き扉仕様 (${dummyEstimateData.spec.doorHingeDisplayName})
  ・側面換気量調整板 (左右上下4枚・外張りt1.5アクリル板・化粧つまみネジ付)
・概算総重量: 約 ${dummyEstimateData.calculated.weight} kg
・お見積り合計金額: ¥${dummyEstimateData.calculated.priceWithMarkup.toLocaleString()}（税込・送料別）`);


