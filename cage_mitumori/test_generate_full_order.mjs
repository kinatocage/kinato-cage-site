import { CageModel } from './src/cage/CageModel.js';
import { MaterialFactory } from './src/cage/MaterialFactory.js';
import { calculateHazaiyaPanelOrderList } from './src/hazaiya_machining_calculator.js';
import fs from 'fs';

// Node.js用モック
if (typeof document === 'undefined') {
  global.document = {
    createElement: () => ({
      width: 256, height: 256,
      getContext: () => ({
        fillStyle: '', fillRect: () => {}, beginPath: () => {}, arc: () => {}, fill: () => {}, clearRect: () => {}, createLinearGradient: () => ({ addColorStop: () => {} })
      }),
      addEventListener: () => {}, removeEventListener: () => {}
    })
  };
}

const materials = new MaterialFactory();
const model = new CageModel(materials);

const state = {
  W: 540,
  D: 400,
  H: 400,
  cageType: 'A',
  frameColor: 'silver',
  footType: 'rubber',
  frontWideFrame: '2x',
  hasSideVentCover: true,
  hasFloorHeaterSupport: true,
  hasFloorReinforcement: false,
  frontDoorMaterial: 'cast',
  panelConfig: {
    front: 'acrylic',
    floor: 'acrylic',
    back: 'acrylic',
    side: 'punching',
    top: 'punching'
  }
};

model.update(state);
const parts = model.partsList;
const hazaiyaList = calculateHazaiyaPanelOrderList(parts, state);

console.log('生成されたはざいや発注品目数: ' + hazaiyaList.length + '品目');
hazaiyaList.forEach((item, idx) => {
  console.log('[' + (idx + 1) + '] ' + item.title + ' | ' + item.widthMm + 'x' + item.heightMm + 'mm x' + item.quantity + '枚 | 加工: ' + (item.needsMachining ? 'あり' : 'なし') + ' | URL: ' + item.hazaiyaUrl);
});

fs.writeFileSync('C:/Users/owner/OneDrive/Desktop/hazaiya-order-tool/full_order_data.json', JSON.stringify(hazaiyaList, null, 2), 'utf8');
console.log('full_order_data.json に保存しました！');
