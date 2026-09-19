/**
 * 人気生体のおすすめサイズ設定ファイル (ルート直下)
 *
 * 【手作業での編集ガイド】
 * - id: 一意の識別キー
 * - name: 生体名（ボタンに表示）
 * - icon: 絵文字またはアイコン
 * - W: 推奨幅 (mm)
 * - D: 推奨奥行 (mm)
 * - H: 推奨高さ (mm)
 * - desc: 生体ごとの簡単な説明・特徴
 * - cageType: 推奨ケージタイプ ('A' または 'C')
 *
 * ※このファイルの内容を編集・追加すると、シミュレーター画面のボタンが自動的に更新されます。
 */

export const creaturePresets = [
  {
    id: 'bearded_dragon',
    name: 'フトアゴヒゲトカゲ',
    icon: '🦎',
    W: 900,
    D: 450,
    H: 450,
    desc: '標準ゆったりサイズ（活動スペース確保）',
    cageType: 'A'
  },
  {
    id: 'ball_python',
    name: 'ボールパイソン',
    icon: '🐍',
    W: 600,
    D: 450,
    H: 300,
    desc: '保温・保湿重視のロータイプケージ',
    cageType: 'A'
  },
  {
    id: 'leopard_gecko',
    name: 'ヒョウモントカゲモドキ',
    icon: '🦎',
    W: 450,
    D: 300,
    H: 300,
    desc: '省スペースで扱いやすい標準サイズ',
    cageType: 'A'
  },
  {
    id: 'tortoise',
    name: 'ヘルマンリクガメ / ロシアリクガメ',
    icon: '🐢',
    W: 1200,
    D: 600,
    H: 450,
    desc: '十分な運動量と床材深さを確保するワイド設計',
    cageType: 'A'
  },
  {
    id: 'corn_snake',
    name: 'コーンスネーク',
    icon: '🐍',
    W: 600,
    D: 300,
    H: 350,
    desc: '細身のヘビに適したコンパクトスリムケージ',
    cageType: 'A'
  },
  {
    id: 'uromastyx',
    name: 'トゲオアガマ',
    icon: '🦎',
    W: 900,
    D: 450,
    H: 400,
    desc: '高温バスキング対応のワイドケージ',
    cageType: 'A'
  }
];
