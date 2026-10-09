// test_floor_heater_verification.js - 床下パネルヒータ支え板のBOM・原価・加工費 検算スクリプト
import { CageModel } from './src/cage/CageModel.js';
import { MaterialFactory } from './src/cage/MaterialFactory.js';
import { materialsConfig } from './cost_materials_config.js';
import { getAcrylicExtrusionCost } from './acrylic_extrusion_price_config.js';

// Node.js 環境用モック
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

function verifyFloorHeater(label, params) {
  console.log(`\n================================================================================`);
  console.log(`【検算】${label} (W=${params.W} x D=${params.D} x H=${params.H})`);
  console.log(`================================================================================`);

  const model = new CageModel(materials);
  model.update(params);
  const parts = model.partsList;

  // 1. 床下パネルヒータ関連パーツの抽出
  const heaterParts = parts.filter(p => 
    p.name.includes('床下パネルヒータ') || 
    (p.name.includes('化粧つまみネジ') && p.note.includes('床下パネルヒータ'))
  );

  console.log(`--- [1] 抽出されたBOMパーツ ---`);
  heaterParts.forEach(p => {
    console.log(`- ${p.name} | 寸法: ${p.size} | 数量: ${p.count} | 備考: ${p.note}`);
  });

  // 2. 材料費の算出
  const acrylicPart = heaterParts.find(p => p.name.includes('透明アクリル 2.0mm'));
  const danplatePart = heaterParts.find(p => p.name.includes('プラダン 4.0mm'));
  const screwPart = heaterParts.find(p => p.name.includes('化粧つまみネジ'));

  let acrylicSingleCost = 0;
  let danplateSingleCost = 0;

  if (acrylicPart) {
    const match = acrylicPart.size.match(/(\d+)\s*[x×]\s*(\d+)/);
    if (match) {
      const w = parseInt(match[1], 10);
      const d = parseInt(match[2], 10);
      acrylicSingleCost = getAcrylicExtrusionCost(2.0, w, d) || 0;
    }
  }

  if (danplatePart) {
    const match = danplatePart.size.match(/(\d+)\s*[x×]\s*(\d+)/);
    if (match) {
      const w = parseInt(match[1], 10);
      const d = parseInt(match[2], 10);
      const areaM2 = (w / 1000) * (d / 1000);
      const danplatePricePerM2 = materialsConfig.panels.danplate_4_0.pricePerM2;
      danplateSingleCost = Math.round(danplatePricePerM2 * areaM2);
    }
  }

  const acrylicTotalCost = acrylicSingleCost * (acrylicPart?.count || 0);
  const danplateTotalCost = danplateSingleCost * (danplatePart?.count || 0);

  // 3. 加工費・ネジ原価の算出
  const fhConfig = materialsConfig.options.items.floorHeaterSupport;
  const isFloorSplit = !!params.hasFloorReinforcement;
  const holeCount = isFloorSplit ? 14 : 10;
  const diagCount = 4;
  const cornerCount = isFloorSplit ? 2 : 0;
  const screwCount = screwPart?.count || (isFloorSplit ? 14 : 10);

  const holeCost = holeCount * fhConfig.holeCostPerPiece;
  const diagCost = diagCount * fhConfig.diagonalCutCost;
  const cornerCost = cornerCount * fhConfig.cornerCutCost;
  const screwCost = screwCount * fhConfig.screwCostPerPiece;
  const processingTotalCost = holeCost + diagCost + cornerCost + screwCost;

  // 4. 床下パネルヒータ支え板全体の部材原価・工賃・販売加算額
  const totalRawCost = acrylicTotalCost + danplateTotalCost + processingTotalCost;
  const markupRate = materialsConfig.pricing.markupRate; // 1.3
  const laborPrice = materialsConfig.options.labor.floorHeaterSupport.price; // 1000
  const standaloneMarkupPrice = Math.ceil((totalRawCost * markupRate) / 100) * 100;
  const standaloneOptionSellingPrice = standaloneMarkupPrice + laborPrice;

  console.log(`\n--- [2] 内訳原価・加工費詳細 ---`);
  console.log(`- アクリル2.0mm材料原価: ${acrylicTotalCost} 円 (${acrylicSingleCost}円 × ${acrylicPart?.count}枚)`);
  console.log(`- プラダン4.0mm材料原価: ${danplateTotalCost} 円 (${danplateSingleCost}円 × ${danplatePart?.count}枚 / @${materialsConfig.panels.danplate_4_0.pricePerM2}円/㎡)`);
  console.log(`- 丸穴加工費 (φ6mm):     ${holeCost} 円 (@${fhConfig.holeCostPerPiece}円 × ${holeCount}穴)`);
  console.log(`- 角斜めカット費:        ${diagCost} 円 (@${fhConfig.diagonalCutCost}円 × ${diagCount}箇所)`);
  console.log(`- 角落とし費 (切欠き):   ${cornerCost} 円 (@${fhConfig.cornerCutCost}円 × ${cornerCount}箇所)`);
  console.log(`- 化粧つまみネジ原価:    ${screwCost} 円 (@${fhConfig.screwCostPerPiece}円 × ${screwCount}個)`);
  console.log(`--------------------------------------------------------------------------------`);
  console.log(`  加工費＋ネジ代小計:    ${processingTotalCost} 円`);
  console.log(`  オプション部材原価計:  ${totalRawCost} 円 (材料費 + 加工費 + ネジ代)`);
  console.log(`  マークアップ後価格:    ${standaloneMarkupPrice} 円 (原価 × 1.3、100円単位切上)`);
  console.log(`  固定オプション工賃:    +${laborPrice} 円`);
  console.log(`  単体販売加算目安:      ${standaloneOptionSellingPrice} 円`);

  // 5. ネジ座標の確認
  const screws = [];
  model.panelGroup.traverse(child => {
    if (child.isGroup && child.children.length === 3 && child.position.y === -2) {
      screws.push(child.position);
    }
  });
  console.log(`\n--- [3] ネジの配置座標一覧 (計 ${screws.length} 個) ---`);
  screws.forEach((pos, i) => {
    console.log(`  ネジ #${i+1}: X=${pos.x.toFixed(1)} mm, Y=${pos.y.toFixed(1)} mm, Z=${pos.z.toFixed(1)} mm`);
  });
}

// 1. 540x400 ケージ（床面補強なし・通常床面）
verifyFloorHeater('ケージ 540x400 (床補強なし・1枚構成)', {
  W: 540,
  D: 400,
  H: 400,
  cageType: 'A',
  hasFloorReinforcement: false,
  hasFloorHeaterSupport: true,
  frameColor: 'silver',
  footType: 'rubber'
});

// 2. 1050x400 ケージ（床面補強あり・床面2分割）
verifyFloorHeater('ケージ 1050x400 (床補強あり・2枚構成)', {
  W: 1050,
  D: 400,
  H: 400,
  cageType: 'A',
  hasFloorReinforcement: true,
  hasFloorHeaterSupport: true,
  frameColor: 'silver',
  footType: 'rubber'
});
