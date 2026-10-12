// test_wide_frames.mjs
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

function testCase(name, params) {
  console.log(`\n========================================`);
  console.log(`【テスト】 ${name}`);
  console.log(`========================================`);
  const model = new CageModel(materials);
  model.update({
    W: params.width,
    D: params.depth,
    H: params.height,
    cageType: params.cageType || 'A',
    frontWideFrame: params.frontWideFrame || 'none',
    hasBottomWideFrame: !!params.hasBottomWideFrame,
    hasTopWideFrame: !!params.hasTopWideFrame,
    panelConfig: params.panelConfig || {
      front: 'acrylic',
      floor: 'acrylic',
      back: 'acrylic',
      side: 'acrylic',
      top: 'acrylic'
    }
  });
  const parts = model.getPartsSummary();
  
  // 部材カテゴリ別集計
  const frames2040 = parts.filter(p => p.name.includes('2040'));
  const frames2020 = parts.filter(p => p.name.includes('2020') && p.category === 'フレーム');
  const caps2040 = parts.filter(p => p.name.includes('2040') && p.category === '樹脂パーツ');
  const caps2020 = parts.filter(p => p.name.includes('2020') && p.category === '樹脂パーツ');
  const panels = parts.filter(p => p.category === 'パネル');
  const doors = parts.filter(p => p.category === '扉');

  console.log('--- 全パーツリスト ---');
  parts.forEach(p => console.log(`  [${p.category}] ${p.name} | ${p.size} | ${p.count} | ${p.note || ''}`));

  return { parts, frames2040, frames2020, caps2040, caps2020, panels, doors };
}

// 1. 標準 Type A
testCase('1. 標準 Type A (W600 D450 H450)', {
  width: 600, depth: 450, height: 450,
  cageType: 'A',
  hasBottomWideFrame: false,
  hasTopWideFrame: false
});

// 2. 下側幅広フレーム ON
testCase('2. 下側幅広 ON (W600 D450 H450)', {
  width: 600, depth: 450, height: 450,
  cageType: 'A',
  hasBottomWideFrame: true,
  hasTopWideFrame: false
});

// 3. 上側幅広フレーム ON
testCase('3. 上側幅広 ON (W600 D450 H450)', {
  width: 600, depth: 450, height: 450,
  cageType: 'A',
  hasBottomWideFrame: false,
  hasTopWideFrame: true
});

// 4. 上下両方幅広フレーム ON
testCase('4. 上下両方幅広 ON (W600 D450 H450)', {
  width: 600, depth: 450, height: 450,
  cageType: 'A',
  hasBottomWideFrame: true,
  hasTopWideFrame: true
});

// 5. 正面3倍幅 + 下側幅広 ON
testCase('5. 正面3倍幅 + 下側幅広 ON (W600 D450 H450)', {
  width: 600, depth: 450, height: 450,
  cageType: 'A',
  frontWideFrame: '3x',
  hasBottomWideFrame: true,
  hasTopWideFrame: false
});

// 6. A_FRAMED 標準
testCase('6. A_FRAMED 標準 (W600 D450 H450)', {
  width: 600, depth: 450, height: 450,
  cageType: 'A_FRAMED',
  hasBottomWideFrame: false,
  hasTopWideFrame: false
});

// 7. A_FRAMED 上下幅広 ON
testCase('7. A_FRAMED 上下幅広 ON (W600 D450 H450)', {
  width: 600, depth: 450, height: 450,
  cageType: 'A_FRAMED',
  hasBottomWideFrame: true,
  hasTopWideFrame: true
});

// 8. Type C 標準 (frontWindowH = 50)
testCase('8. Type C 標準 (W600 D450 H450, 前窓50mm)', {
  width: 600, depth: 450, height: 450,
  cageType: 'C',
  frontWindowH: 50,
  hasBottomWideFrame: false,
  hasTopWideFrame: false
});

// 9. Type C 下側幅広 ON (frontWindowH = 50)
testCase('9. Type C 下側幅広 ON (W600 D450 H450, 前窓50mm)', {
  width: 600, depth: 450, height: 450,
  cageType: 'C',
  frontWindowH: 50,
  hasBottomWideFrame: true,
  hasTopWideFrame: false
});

// 10. Type C 上下幅広 ON (frontWindowH = 50)
testCase('10. Type C 上下幅広 ON (W600 D450 H450, 前窓50mm)', {
  width: 600, depth: 450, height: 450,
  cageType: 'C',
  frontWindowH: 50,
  hasBottomWideFrame: true,
  hasTopWideFrame: true
});

// 11. C_FRAMED 上下幅広 ON (frontWindowH = 50)
testCase('11. C_FRAMED 上下幅広 ON (W600 D450 H450, 前窓50mm)', {
  width: 600, depth: 450, height: 450,
  cageType: 'C_FRAMED',
  frontWindowH: 50,
  hasBottomWideFrame: true,
  hasTopWideFrame: true
});

