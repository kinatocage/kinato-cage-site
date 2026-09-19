/**
 * 人気生体のおすすめサイズ・仕様設定ファイル (ルート直下)
 *
 * 【手作業での編集ガイド】
 * - id: 一意の識別キー
 * - name: 生体・仕様名（ボタンに表示）
 * - icon: 絵文字またはアイコン
 * - W, D, H: 推奨幅, 推奨奥行, 推奨高さ (mm)
 * - cageType: ケージタイプ ('A' または 'C')
 * - frameColor: フレームカラー ('silver' または 'black')
 * - frontWindowH: Type C時の前窓開口高さ (mm)
 * - frontWideFrame: Type A正面下側幅広フレーム ('none', '2x', '3x')
 * - hasSideReinforcement: 側面補強フレーム (側面2分割) の有無 (boolean)
 * - sideOpeningH: 側面下部開口高さ (mm)
 * - hasDoorAntiFlex: 正面スライド扉たわみ防止レール (boolean)
 * - hasSideVentCover: 側面換気量調整板 (boolean)
 * - hasFloorReinforcement: 床面中央補強フレーム (boolean)
 * - hasTopReinforcement: 天板中央補強フレーム (boolean)
 * - footType: 脚仕様 ('rubber' または 'caster')
 * - panelConfig: 各面パネル素材 (floor, back, side, sideUpper, sideLower, top, topLeft, topRight)
 * - tags: カード表示用スペックタグ配列
 * - desc: 生体ごとの簡単な説明・特徴
 */

export const creaturePresets = [
  {
    id: 'standard',
    name: '標準仕様',
    icon: '📐',
    W: 750,
    D: 450,
    H: 300,
    cageType: 'A',
    frameColor: 'silver',
    frontWideFrame: '2x',
    hasSideReinforcement: false,
    hasDoorAntiFlex: false,
    hasSideVentCover: false,
    hasFloorReinforcement: false,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'acrylic',
      back: 'acrylic',
      side: 'acrylic',
      sideUpper: 'punching',
      sideLower: 'acrylic',
      top: 'punching',
      topLeft: 'punching',
      topRight: 'punching'
    },
    tags: ['Type A', 'シルバー', '標準枠2倍幅'],
    desc: 'サイズやオプション変更してカスタマイズしてください。'
  },
  {
    id: 'leopard_gecko',
    name: 'レオパ向け',
    icon: '🦎',
    W: 540,
    D: 400,
    H: 200,
    cageType: 'A',
    frameColor: 'silver',
    frontWideFrame: '2x',
    hasSideReinforcement: false,
    hasDoorAntiFlex: false,
    hasSideVentCover: false,
    hasFloorReinforcement: false,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'acrylic',
      back: 'polyca',
      side: 'polyca',
      sideUpper: 'punching',
      sideLower: 'polyca',
      top: 'punching',
      topLeft: 'punching',
      topRight: 'punching'
    },
    tags: ['Type A', 'シルバー', '中空ポリカ(側・背)'],
    desc: '保温性ありのレオパちゃんにゆったりサイズ'
  },
  {
    id: 'ball_python',
    name: 'ボールパイソン向け',
    icon: '🐍',
    W: 750,
    D: 450,
    H: 300,
    cageType: 'A',
    frameColor: 'silver',
    frontWideFrame: '2x',
    hasSideReinforcement: false,
    hasDoorAntiFlex: false,
    hasSideVentCover: false,
    hasFloorReinforcement: false,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'acrylic',
      back: 'polyca',
      side: 'polyca',
      sideUpper: 'punching',
      sideLower: 'polyca',
      top: 'punching',
      topLeft: 'punching',
      topRight: 'punching'
    },
    tags: ['Type A', 'シルバー', '中空ポリカ(側・背)', 'ロータイプ'],
    desc: '保温性抜群のロータイプケージ'
  },
  {
    id: 'carpet_python',
    name: 'カーペットパイソン',
    icon: '🐍',
    W: 900,
    D: 450,
    H: 450,
    cageType: 'C',
    frameColor: 'black',
    frontWindowH: 50,
    frontWideFrame: 'none',
    hasDoorAntiFlex: true,
    hasSideReinforcement: false,
    hasSideVentCover: false,
    hasFloorReinforcement: true,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'black_matte',
      back: 'black_matte',
      side: 'black_matte',
      sideUpper: 'punching',
      sideLower: 'black_matte',
      top: 'punching',
      topLeft: 'punching',
      topRight: 'punching'
    },
    tags: ['Type C (前窓50)', 'ブラック', '黒アクリル(側・背)', 'たわみ防止レール'],
    desc: 'のびのび多彩なレイアウトを組める広々サイズ'
  },
  {
    id: 'tortoise',
    name: 'リクガメ',
    icon: '🐢',
    W: 900,
    D: 500,
    H: 500,
    cageType: 'C',
    frameColor: 'silver',
    frontWindowH: 120,
    frontWideFrame: 'none',
    hasDoorAntiFlex: true,
    hasSideReinforcement: false,
    hasSideVentCover: false,
    hasFloorReinforcement: true,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'acrylic',
      back: 'acrylic',
      side: 'acrylic',
      sideUpper: 'punching',
      sideLower: 'acrylic',
      top: 'mesh30',
      topLeft: 'mesh30',
      topRight: 'mesh30'
    },
    tags: ['Type C (前窓120)', 'シルバー', '天板金網30mm', 'たわみ防止レール'],
    desc: '熱源ライトを安心しておける天板金網仕様'
  },
  {
    id: 'bearded_dragon',
    name: 'フトアゴヒゲトカゲ',
    icon: '🦎',
    W: 800,
    D: 450,
    H: 450,
    cageType: 'C',
    frameColor: 'black',
    frontWindowH: 80,
    frontWideFrame: 'none',
    hasDoorAntiFlex: true,
    hasSideReinforcement: true,
    sideOpeningH: 200,
    hasSideVentCover: false,
    hasFloorReinforcement: true,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'black_matte',
      back: 'black_matte',
      side: 'black_matte',
      sideUpper: 'punching',
      sideLower: 'black_matte',
      top: 'mesh25',
      topLeft: 'mesh25',
      topRight: 'mesh25'
    },
    tags: ['Type C (前窓80)', 'ブラック', '天板金網25mm', '側面2分割', 'たわみ防止レール'],
    desc: '通気性も確保しつつ、熱源ライト乗せれる金網仕様'
  },
  {
    id: 'hedgehog',
    name: 'ハリネズミ',
    icon: '🦔',
    W: 750,
    D: 450,
    H: 300,
    cageType: 'A',
    frameColor: 'silver',
    frontWideFrame: '2x',
    hasSideReinforcement: true,
    sideOpeningH: 120,
    hasSideVentCover: true,
    hasDoorAntiFlex: false,
    hasFloorReinforcement: false,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'acrylic',
      back: 'polyca',
      side: 'polyca',
      sideUpper: 'punching',
      sideLower: 'polyca',
      top: 'punching',
      topLeft: 'punching',
      topRight: 'punching'
    },
    tags: ['Type A', 'シルバー', '中空ポリカ(側・背)', '側面2分割', '換気量調整板'],
    desc: '側面、背面中空ポリカ・側面2分割・換気量調整板仕様'
  },
  {
    id: 'hamster',
    name: 'ハムスター向け',
    icon: '🐹',
    W: 750,
    D: 450,
    H: 300,
    cageType: 'A',
    frameColor: 'silver',
    frontWideFrame: '3x',
    hasSideReinforcement: true,
    sideOpeningH: 120,
    hasSideVentCover: true,
    hasDoorAntiFlex: false,
    hasFloorReinforcement: false,
    hasTopReinforcement: false,
    footType: 'rubber',
    panelConfig: {
      front: 'acrylic',
      floor: 'acrylic',
      back: 'polyca',
      side: 'polyca',
      sideUpper: 'punching',
      sideLower: 'polyca',
      top: 'punching',
      topLeft: 'punching',
      topRight: 'punching'
    },
    tags: ['Type A', 'シルバー', '正面幅広3倍', '中空ポリカ', '換気量調整板'],
    desc: '正面幅広フレーム3倍＆中空ポリカ・換気量調整板仕様'
  }
];
