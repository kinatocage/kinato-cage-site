// test_hazaiya_machining.js - はざいや全パネル統合発注リストの検算スクリプト
import { calculateHazaiyaPanelOrderList, formatHazaiyaPanelOrderClipboardText } from './src/hazaiya_machining_calculator.js';

console.log('=== [1] Type A スライド扉 + 床下ヒーター1枚構成 + 換気板 (W540 x D400 x H400) ===');
const mockState540 = {
  W: 540,
  D: 400,
  H: 400,
  cageType: 'A',
  hasFloorHeaterSupport: true,
  hasFloorReinforcement: false,
  hasSideVentCover: true,
  frontWideFrame: '2x',
  hasDoorAntiFlex: false
};

const mockParts540 = [
  { name: '正面スライド扉 (透明アクリル 3.0mm)', size: '265 x 331 mm', count: 2, category: 'panel', panelCode: 'acrylic_cast_3_0' },
  { name: '透明アクリル 3.0mm 底板', size: '510 x 370 mm', count: 1, category: 'panel', panelCode: 'acrylic_extrusion_3_0', note: '床面 (1枚)' },
  { name: '透明アクリル 3.0mm 側板', size: '370 x 370 mm', count: 2, category: 'panel', panelCode: 'acrylic_extrusion_3_0', note: '左右側面' },
  { name: '透明アクリル 3.0mm 背板', size: '510 x 370 mm', count: 1, category: 'panel', panelCode: 'acrylic_extrusion_3_0', note: '背面' },
  { name: '塩ビパンチングボード 透明 3.0mm 天板 (φ3.1-P7)', size: '510 x 370 mm', count: 1, category: 'panel', panelCode: 'pvc_punching_3_0', note: '天面 (全面・通気パネル)' },
  { name: '側面換気量調整板 (透明アクリル 1.5mm)', size: '398 x 170 mm', count: 4, category: 'panel', panelCode: 'acrylic_extrusion_1_5' },
  { name: '床下パネルヒータ支え板 (透明アクリル 2.0mm)', size: '538 x 398 mm', count: 1, category: 'panel', panelCode: 'acrylic_extrusion_2_0', note: '1枚構成' },
  { name: '床下パネルヒータ用 緩衝プラダン 4.0mm', size: '490 x 330 mm', count: 1, category: 'panel', panelCode: 'danplate_4_0', note: '床下パネルヒータ緩衝用' }
];

const list540 = calculateHazaiyaPanelOrderList(mockParts540, mockState540);
console.log(`抽出された発注パネル品目数: ${list540.length}`);
list540.forEach((p, i) => {
  const status = p.needsMachining ? '【★加工あり】' : '【切断のみ】';
  console.log(`[${i + 1}] ${p.title} ${status}: ${p.widthMm} x ${p.heightMm} mm x${p.quantity}枚`);
});

console.log('\n--- 統合クリップボードコピー形式テキスト ---');
console.log(formatHazaiyaPanelOrderClipboardText(list540, mockState540));
