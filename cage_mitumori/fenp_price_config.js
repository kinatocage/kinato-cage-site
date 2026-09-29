/**
 * =================================================================
 * FENP（平織・溶接金網パネル）価格マスタ設定ファイル
 * =================================================================
 * 参照: ミスミ FENP 価格表（2023年4月時点基準単価）
 * 現在の仕入値段 = 表の基準単価 × FENP_COST_MULTIPLIER (1.6)
 *
 * ※手作業での価格改定や確認がしやすいよう、画像通りの基準単価（税別）を
 *   マトリクス形式でそのまま保持しています。
 */

// 資材高騰倍率（掲載価格に対する現在の仕入値段係数）
export const FENP_COST_MULTIPLIER = 1.6;

// B寸法区分（短辺 mm）: 横列（全8区分）
export const FENP_B_RANGES = [
  { min: 100, max: 400, label: '100〜400' },
  { min: 401, max: 500, label: '401〜500' },
  { min: 501, max: 600, label: '501〜600' },
  { min: 601, max: 700, label: '601〜700' },
  { min: 701, max: 800, label: '701〜800' },
  { min: 801, max: 900, label: '801〜900' },
  { min: 901, max: 1000, label: '901〜1000' },
  { min: 1001, max: 1100, label: '1001〜1100' }
];

// A寸法区分（長辺 mm）: 縦行（最大17区分）
export const FENP_A_RANGES = [
  { min: 100, max: 400, label: '100〜400' },
  { min: 401, max: 500, label: '401〜500' },
  { min: 501, max: 600, label: '501〜600' },
  { min: 601, max: 700, label: '601〜700' },
  { min: 701, max: 800, label: '701〜800' },
  { min: 801, max: 900, label: '801〜900' },
  { min: 901, max: 1000, label: '901〜1000' },
  { min: 1001, max: 1100, label: '1001〜1100' },
  { min: 1101, max: 1200, label: '1101〜1200' },
  { min: 1201, max: 1300, label: '1201〜1300' },
  { min: 1301, max: 1400, label: '1301〜1400' },
  { min: 1401, max: 1500, label: '1401〜1500' },
  { min: 1501, max: 1600, label: '1501〜1600' },
  { min: 1601, max: 1700, label: '1601〜1700' },
  { min: 1701, max: 1800, label: '1701〜1800' },
  { min: 1801, max: 1900, label: '1801〜1900' },
  { min: 1901, max: 2000, label: '1901〜2000' }
];

// 2023年4月時点の基準単価マトリクス [A行インデックス][B列インデックス] (単位: 円・税別)
export const FENP_BASE_PRICES = {
  // ピッチ 15mm (A寸法: 100〜1100mm の計8行)
  15: [
    /* 100〜400 */   [4970, null,  null,  null,  null,  null,  null,  null],
    /* 401〜500 */   [5240, 5290,  null,  null,  null,  null,  null,  null],
    /* 501〜600 */   [7730, 7850,  7920,  null,  null,  null,  null,  null],
    /* 601〜700 */   [7920, 7980,  8040,  8110,  null,  null,  null,  null],
    /* 701〜800 */   [8040, 8070,  8110,  8170,  8230,  null,  null,  null],
    /* 801〜900 */   [8730, 8790,  8860,  8930,  8990,  9060,  null,  null],
    /* 901〜1000 */  [8990, 9060,  9120,  9200,  9260,  9320,  9400,  null],
    /* 1001〜1100 */ [10440, 10500, 10540, 10570, 10610, 10640, 10680, 10710]
  ],

  // ピッチ 25mm (A寸法: 100〜2000mm の計17行)
  25: [
    /* 100〜400 */   [2760,  null,  null,  null,  null,  null,  null,  null],
    /* 401〜500 */   [3720,  3770,  null,  null,  null,  null,  null,  null],
    /* 501〜600 */   [5280,  5410,  5470,  null,  null,  null,  null,  null],
    /* 601〜700 */   [5470,  5530,  5600,  5660,  null,  null,  null,  null],
    /* 701〜800 */   [5600,  5630,  5660,  5720,  5790,  null,  null,  null],
    /* 801〜900 */   [5950,  6020,  6080,  6150,  6220,  6280,  null,  null],
    /* 901〜1000 */  [6220,  6280,  6350,  6420,  6480,  6550,  6620,  null],
    /* 1001〜1100 */ [7080,  7140,  7180,  7210,  7250,  7280,  7320,  7350],
    /* 1101〜1200 */ [9910,  10910, 11460, 12030, 12400, 12780, 13170, 13830],
    /* 1201〜1300 */ [10420, 11470, 12040, 12650, 13040, 13440, 13850, 14540],
    /* 1301〜1400 */ [10940, 12040, 12650, 13290, 13690, 14110, 14540, 15280],
    /* 1401〜1500 */ [11500, 12650, 13290, 13970, 14390, 14830, 15280, 16040],
    /* 1501〜1600 */ [12080, 13280, 13950, 14660, 15100, 15560, 16030, 16840],
    /* 1601〜1700 */ [12680, 13950, 14660, 15390, 15860, 16340, 16830, 17680],
    /* 1701〜1800 */ [13070, 14390, 15110, 15870, 16350, 16840, 17360, 18230],
    /* 1801〜1900 */ [13470, 14830, 15570, 16360, 16850, 17370, 17890, 18800],
    /* 1901〜2000 */ [13880, 15280, 16040, 16850, 17370, 17890, 18440, 19360]
  ],

  // ピッチ 30mm (A寸法: 100〜2000mm の計17行)
  30: [
    /* 100〜400 */   [2750,  null,  null,  null,  null,  null,  null,  null],
    /* 401〜500 */   [2770,  2800,  null,  null,  null,  null,  null,  null],
    /* 501〜600 */   [2800,  2820,  2860,  null,  null,  null,  null,  null],
    /* 601〜700 */   [2820,  2860,  2880,  2900,  null,  null,  null,  null],
    /* 701〜800 */   [2860,  2880,  2900,  2920,  2940,  null,  null,  null],
    /* 801〜900 */   [3100,  3150,  3190,  3230,  3280,  3150,  null,  null],
    /* 901〜1000 */  [3150,  3190,  3230,  3280,  3320,  3360,  3470,  null],
    /* 1001〜1100 */ [3370,  3410,  3450,  3500,  3530,  3560,  3590,  3650],
    /* 1101〜1200 */ [5060,  5830,  6990,  7350,  7500,  7580,  7740,  7900],
    /* 1201〜1300 */ [5580,  6420,  7710,  8100,  8260,  8350,  8520,  8690],
    /* 1301〜1400 */ [5860,  6740,  8100,  8510,  8680,  8780,  8960,  9150],
    /* 1401〜1500 */ [6040,  6950,  8350,  8770,  8950,  9040,  9230,  9420],
    /* 1501〜1600 */ [6230,  7160,  8600,  9030,  9220,  9310,  9500,  9700],
    /* 1601〜1700 */ [6420,  7380,  8860,  9310,  9500,  9610,  9810,  10010],
    /* 1701〜1800 */ [6620,  7610,  9140,  9600,  9800,  9900,  10100, 10310],
    /* 1801〜1900 */ [6810,  7840,  9420,  9890,  10090, 10200, 10410, 10620],
    /* 1901〜2000 */ [6950,  8000,  9610,  10090, 10300, 10410, 10620, 10840]
  ]
};

/**
 * 寸法値からインデックスを判定する補助関数
 * @param {number} val 寸法 (mm)
 * @param {Array<{min: number, max: number}>} ranges 区分配列
 * @returns {number} インデックス (見つからない場合は -1)
 */
function findRangeIndex(val, ranges) {
  for (let i = 0; i < ranges.length; i++) {
    if (val >= ranges[i].min && val <= ranges[i].max) {
      return i;
    }
  }
  // 100mm未満の場合は最小区分、上限超の場合は最大区分にクリップ
  if (val < ranges[0].min) return 0;
  if (val > ranges[ranges.length - 1].max) return ranges.length - 1;
  return -1;
}

/**
 * 金網のピッチと2辺の寸法から、2023年4月時点の基準単価（税別）を取得
 * @param {number|string} pitch ピッチ (15, 25, 30)
 * @param {number} dim1 寸法1 (mm)
 * @param {number} dim2 寸法2 (mm)
 * @returns {number|null} 基準単価（円・税別）
 */
export function getFenpBasePrice(pitch, dim1, dim2) {
  const p = parseInt(pitch, 10);
  const matrix = FENP_BASE_PRICES[p];
  if (!matrix) return null;

  // ミスミ仕様: 長辺をA、短辺をBとして判定 (A ≧ B)
  const aVal = Math.max(dim1, dim2);
  const bVal = Math.min(dim1, dim2);

  const aIndex = findRangeIndex(aVal, FENP_A_RANGES);
  const bIndex = findRangeIndex(bVal, FENP_B_RANGES);

  if (aIndex === -1 || bIndex === -1) return null;

  // P=15 は最大1100mm（インデックス7）まで
  if (aIndex >= matrix.length) {
    // 範囲外の場合は最大サイズの単価をフォールバックとして参照
    const lastRow = matrix[matrix.length - 1];
    return lastRow[Math.min(bIndex, lastRow.length - 1)] || null;
  }

  const row = matrix[aIndex];
  if (!row) return null;

  const price = row[bIndex];
  if (price != null) {
    return price;
  }

  // もし対角線上などで null の場合（B > A など）、可能なセルにフォールバック
  for (let b = bIndex; b >= 0; b--) {
    if (row[b] != null) return row[b];
  }
  return null;
}

/**
 * 金網のピッチと寸法から、現在の仕入原価（円）を算出
 * 計算式: 基準単価 × FENP_COST_MULTIPLIER (1.6)
 * @param {number|string} pitch ピッチ (15, 25, 30)
 * @param {number} dim1 寸法1 (mm)
 * @param {number} dim2 寸法2 (mm)
 * @returns {number|null} 仕入原価（円、1円単位四捨五入）
 */
export function getFenpCost(pitch, dim1, dim2) {
  const basePrice = getFenpBasePrice(pitch, dim1, dim2);
  if (basePrice == null) return null;
  return Math.round(basePrice * FENP_COST_MULTIPLIER);
}

/**
 * 金網仕様情報のサマリー取得（デバッグ・表示用）
 */
export function getFenpSpecInfo(pitch, dim1, dim2) {
  const p = parseInt(pitch, 10);
  const aVal = Math.max(dim1, dim2);
  const bVal = Math.min(dim1, dim2);
  const aIndex = findRangeIndex(aVal, FENP_A_RANGES);
  const bIndex = findRangeIndex(bVal, FENP_B_RANGES);
  const basePrice = getFenpBasePrice(p, dim1, dim2);
  const cost = getFenpCost(p, dim1, dim2);

  return {
    pitch: p,
    modelNumber: `FENP${p}-A${aVal}-B${bVal}`,
    aRange: FENP_A_RANGES[aIndex]?.label || '-',
    bRange: FENP_B_RANGES[bIndex]?.label || '-',
    basePrice,
    costMultiplier: FENP_COST_MULTIPLIER,
    cost
  };
}
