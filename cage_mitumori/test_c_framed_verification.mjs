// test_c_framed_verification.mjs - Type C 正面枠囲い (C_FRAMED) の包括的検証スクリプト
import { CageModel } from './src/cage/CageModel.js';
import { MaterialFactory } from './src/cage/MaterialFactory.js';
import { materialsConfig } from './cost_materials_config.js';

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

console.log('================================================================');
console.log('【Type C 正面枠囲い (C_FRAMED) 検証テスト】');
console.log('================================================================\n');

// テスト条件: 幅900mm x 奥行450mm x 高さ600mm, 前窓高さ100mm, シルバーフレーム
const testParams = {
  W: 900,
  D: 450,
  H: 600,
  cageType: 'C_FRAMED',
  frontWindowH: 100,
  frameColor: 'silver',
  doorState: 'closed',
  panelConfig: {
    floor: 'acrylic',
    back: 'acrylic',
    side: 'acrylic',
    top: 'punching'
  }
};

const model = new CageModel(materials);
model.update(testParams);
const parts = model.partsList;

console.log(`[テスト条件] W=${testParams.W}, D=${testParams.D}, H=${testParams.H}, 前窓H=${testParams.frontWindowH}`);
console.log(`総部品点数: ${parts.length} 種類`);

// 部品リストの分類表示
console.log('\n--- 1. フレーム部品 (Frame Members) ---');
const frameParts = parts.filter(p => p.category === 'frame');
frameParts.forEach(p => {
  console.log(`- ${p.name.padEnd(45)} | コード: ${(p.partCode || '-').padEnd(16)} | サイズ: ${(p.size || '-').padEnd(10)} | 数量: ${p.count}`);
});

console.log('\n--- 2. パネル部品 (Panels) ---');
const panelParts = parts.filter(p => p.category === 'panel');
panelParts.forEach(p => {
  console.log(`- ${p.name.padEnd(45)} | コード: ${(p.panelCode || p.partCode || '-').padEnd(25)} | サイズ: ${(p.size || '-').padEnd(16)} | 数量: ${p.count}`);
});

console.log('\n--- 3. 枠囲い扉および金物部品 (Door Hardware & Caps) ---');
const otherParts = parts.filter(p => p.category === 'rail_cap' || p.category === 'hardware' || p.category === 'other');
otherParts.forEach(p => {
  console.log(`- ${p.name.padEnd(45)} | コード: ${(p.partCode || '-').padEnd(20)} | サイズ: ${(p.size || '-').padEnd(16)} | 数量: ${p.count}`);
});

// 検証アサーション
console.log('\n--- 4. 仕様整合性チェック ---');
let allPassed = true;

function check(label, condition, detail) {
  if (condition) {
    console.log(`  [OK] ${label} (${detail})`);
  } else {
    console.error(`  [NG] ${label} - 期待値と異なります (${detail})`);
    allPassed = false;
  }
}

// 1. 床・正面2040 (横向き)
const floorFront = frameParts.find(p => p.note && p.note.includes('床面 正面 2040横向き'));
check('床正面2040横向きフレーム', !!floorFront && floorFront.size === '860 mm', `サイズ: ${floorFront?.size}, 期待値: 860 mm`);

// 2. 正面中桟2040 (横向き)
const midBar = frameParts.find(p => p.note && p.note.includes('正面中桟 2040横向き'));
check('前窓上正面中桟2040横向きフレーム', !!midBar && midBar.size === '860 mm', `サイズ: ${midBar?.size}, 期待値: 860 mm`);

// 3. 正面上部2040 (天面手前横向き)
const topFront = frameParts.find(p => p.note && p.note.includes('正面上部 2040横向き'));
check('天面手前2040横向きフレーム', !!topFront && topFront.size === '860 mm', `サイズ: ${topFront?.size}, 期待値: 860 mm`);

// 4. 手前柱2040
const pillars2040 = frameParts.find(p => p.note && p.note.includes('柱・正面枠囲い (2040・奥行40mm)'));
check('手前柱2040 (2本)', !!pillars2040 && pillars2040.count === 2 && (pillars2040.size === 560 || pillars2040.size === '560 mm'), `本数: ${pillars2040?.count}, 長さ: ${pillars2040?.size}, 期待値: 560 mm`);

// 5. 前窓アクリル板: 幅 W-30 = 870mm, 高さ frontWindowH+10 = 110mm
const frontWindowPanel = panelParts.find(p => p.name.includes('前窓'));
check('前窓アクリル板寸法', !!frontWindowPanel && frontWindowPanel.size === '870 x 110 mm', `寸法: ${frontWindowPanel?.size}, 期待値: 870 x 110 mm`);

// 6. 枠囲い扉の開口高さ: openingH = H - 60 - frontWindowH = 600 - 60 - 100 = 440mm
//    doorFrameH = openingH - 42 = 398mm
//    doorFrameW = Math.round((900-40)/2 + 12) = 442mm
const doorHeightFrame = frameParts.find(p => p.note && p.note.includes('正面枠囲い扉 高さ方向フレーム'));
check('扉高さ方向フレーム (AFSF-2040)', !!doorHeightFrame && doorHeightFrame.size === '398 mm', `サイズ: ${doorHeightFrame?.size}, 期待値: 398 mm`);

const doorWidthFrame = frameParts.find(p => p.note && p.note.includes('正面枠囲い扉 幅方向フレーム'));
check('扉幅方向フレーム (AFSF-2020)', !!doorWidthFrame && doorWidthFrame.size === '442 mm', `サイズ: ${doorWidthFrame?.size}, 期待値: 442 mm`);

// 7. 扉アクリル板: panelW = doorFrameW - 64 = 378mm, panelH = doorFrameH + 10 = 408mm
const doorPanels = panelParts.find(p => p.note && p.note.includes('正面枠囲い扉 (透明押出板3.0mm)'));
check('扉アクリル板寸法', !!doorPanels && doorPanels.size === '378 x 408 mm', `寸法: ${doorPanels?.size}, 期待値: 378 x 408 mm`);

// 8. ラッチ・受金スペーサー・左扉スペーサー
const latches = otherParts.find(p => p.name.includes('タキゲン CP-294N'));
check('スライドラッチ (2個)', !!latches && latches.count === 2, `数量: ${latches?.count}`);

const strikerSpacers = otherParts.find(p => p.name.includes('アクリル丸板'));
check('受金高さ調整丸板スペーサー (4枚)', !!strikerSpacers && strikerSpacers.count === 4, `数量: ${strikerSpacers?.count}`);

const leftSpacer = frameParts.find(p => p.note && p.note.includes('左扉ラッチ高さ合わせ用スペーサーフレーム'));
check('左扉ラッチスペーサーフレーム (94mm)', !!leftSpacer && leftSpacer.size === '94 mm', `サイズ: ${leftSpacer?.size}`);

// 9. 床・側面・天面パネルの枠囲い補正 (D=450 => D-50 = 400mm)
const floorPanel = panelParts.find(p => p.note && p.note.includes('床面 (1枚)'));
check('底面パネル奥行き (D-50)', !!floorPanel && floorPanel.size === '870 x 400 mm', `サイズ: ${floorPanel?.size}`);

const sidePanels = panelParts.find(p => p.note && p.note.includes('左右側面'));
check('側面パネル奥行き (D-50)', !!sidePanels && sidePanels.size === '400 x 570 mm', `サイズ: ${sidePanels?.size}`);

if (allPassed) {
  console.log('\n>>> 全てのチェックをクリアしました！新仕様「Type C 正面枠囲い」は完璧に動作しています。 <<<');
} else {
  console.error('\n>>> エラーが発生しています。上記を確認してください。 <<<');
  process.exit(1);
}
