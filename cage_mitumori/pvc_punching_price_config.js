/**
 * =================================================================
 * 塩ビ透明パンチングボード (φ3.1-P7, 3.0mm厚) 価格マスタ設定ファイル
 * =================================================================
 * 参照元: アクリルショップ はざいや (https://www.hazaiya.co.jp/estimate/board/4018)
 * 最終自動更新日時: 2026-09-29 21:09:06
 * 条件: 数量1枚単価（完全安全側・原価割れ防止）、直線カット込、税込価格
 */

// B寸法区分（短辺 mm）: 横列
export const PVC_PUNCHING_B_RANGES = [
  {
    "min": 10,
    "max": 100,
    "label": "10〜100"
  },
  {
    "min": 101,
    "max": 150,
    "label": "101〜150"
  },
  {
    "min": 151,
    "max": 200,
    "label": "151〜200"
  },
  {
    "min": 201,
    "max": 250,
    "label": "201〜250"
  },
  {
    "min": 251,
    "max": 300,
    "label": "251〜300"
  },
  {
    "min": 301,
    "max": 350,
    "label": "301〜350"
  },
  {
    "min": 351,
    "max": 400,
    "label": "351〜400"
  },
  {
    "min": 401,
    "max": 450,
    "label": "401〜450"
  },
  {
    "min": 451,
    "max": 500,
    "label": "451〜500"
  },
  {
    "min": 501,
    "max": 600,
    "label": "501〜600"
  },
  {
    "min": 601,
    "max": 700,
    "label": "601〜700"
  },
  {
    "min": 701,
    "max": 800,
    "label": "701〜800"
  },
  {
    "min": 801,
    "max": 900,
    "label": "801〜900"
  },
  {
    "min": 901,
    "max": 1000,
    "label": "901〜1000"
  }
];

// A寸法区分（長辺 mm）: 縦行
export const PVC_PUNCHING_A_RANGES = [
  {
    "min": 10,
    "max": 100,
    "label": "10〜100"
  },
  {
    "min": 101,
    "max": 150,
    "label": "101〜150"
  },
  {
    "min": 151,
    "max": 200,
    "label": "151〜200"
  },
  {
    "min": 201,
    "max": 250,
    "label": "201〜250"
  },
  {
    "min": 251,
    "max": 300,
    "label": "251〜300"
  },
  {
    "min": 301,
    "max": 350,
    "label": "301〜350"
  },
  {
    "min": 351,
    "max": 400,
    "label": "351〜400"
  },
  {
    "min": 401,
    "max": 450,
    "label": "401〜450"
  },
  {
    "min": 451,
    "max": 500,
    "label": "451〜500"
  },
  {
    "min": 501,
    "max": 600,
    "label": "501〜600"
  },
  {
    "min": 601,
    "max": 700,
    "label": "601〜700"
  },
  {
    "min": 701,
    "max": 800,
    "label": "701〜800"
  },
  {
    "min": 801,
    "max": 900,
    "label": "801〜900"
  },
  {
    "min": 901,
    "max": 1000,
    "label": "901〜1000"
  },
  {
    "min": 1001,
    "max": 1100,
    "label": "1001〜1100"
  },
  {
    "min": 1101,
    "max": 1200,
    "label": "1101〜1200"
  },
  {
    "min": 1201,
    "max": 1300,
    "label": "1201〜1300"
  },
  {
    "min": 1301,
    "max": 1400,
    "label": "1301〜1400"
  },
  {
    "min": 1401,
    "max": 1500,
    "label": "1401〜1500"
  },
  {
    "min": 1501,
    "max": 1600,
    "label": "1501〜1600"
  },
  {
    "min": 1601,
    "max": 1700,
    "label": "1601〜1700"
  },
  {
    "min": 1701,
    "max": 1800,
    "label": "1701〜1800"
  }
];

// はざいや実仕入価格マトリクス [A行インデックス][B列インデックス] (単位: 円・税込)
export const PVC_PUNCHING_PRICES = [
  /* 10〜100     */ [345, null, null, null, null, null, null, null, null, null, null, null, null, null],
  /* 101〜150    */ [446, 611, null, null, null, null, null, null, null, null, null, null, null, null],
  /* 151〜200    */ [560, 762, 979, null, null, null, null, null, null, null, null, null, null, null],
  /* 201〜250    */ [661, 929, 1180, 1450, null, null, null, null, null, null, null, null, null, null],
  /* 251〜300    */ [778, 1079, 1399, 1701, 2022, null, null, null, null, null, null, null, null, null],
  /* 301〜350    */ [878, 1248, 1600, 1972, 2324, 2697, null, null, null, null, null, null, null, null],
  /* 351〜400    */ [997, 1399, 1821, 2223, 2646, 3049, 3474, null, null, null, null, null, null, null],
  /* 401〜450    */ [1097, 1569, 2022, 2496, 2948, 3424, 3877, 4355, null, null, null, null, null, null],
  /* 451〜500    */ [1217, 1720, 2244, 2747, 3273, 3776, 4305, 4808, 5339, null, null, null, null, null],
  /* 501〜600    */ [1439, 2043, 2669, 3273, 3903, 4506, 5138, 5741, 6345, 7583, null, null, null, null],
  /* 601〜700    */ [1663, 2368, 3098, 3802, 4534, 5238, 5943, 6647, 7382, 8790, 10233, null, null, null],
  /* 701〜800    */ [1891, 2695, 3528, 4333, 5138, 5943, 6778, 7583, 8388, 10032, 11641, 13288, null, null],
  /* 801〜900    */ [2120, 3025, 3931, 4836, 5772, 6678, 7583, 8489, 9428, 11239, 13087, 14897, 16749, null],
  /* 901〜1000   */ [2321, 3327, 4364, 5370, 6376, 7382, 8422, 9428, 10434, 12483, 14495, 16548, 18560, 20617],
  /* 1001〜1100  */ [2553, 3660, 4766, 5873, 7014, 8120, 9227, 10333, 11477, 13690, 15944, 18158, 20416, 22629],
  /* 1101〜1200  */ [2754, 3962, 5203, 6410, 7617, 8824, 10069, 11276, 12483, 14938, 17353, 19812, 22227, 24691],
  /* 1201〜1300  */ [2990, 4297, 5605, 6913, 8258, 9566, 10873, 12181, 13530, 16146, 18806, 21422, 24087, 26703],
  /* 1301〜1400  */ [3191, 4599, 6045, 7453, 8861, 10270, 11719, 13128, 14536, 17398, 20215, 23081, 25898, 28770],
  /* 1401〜1500  */ [3429, 4938, 6447, 7956, 9506, 11015, 12524, 14033, 15587, 18605, 21673, 24691, 27764, 30782],
  /* 1501〜1600  */ [3630, 5240, 6890, 8500, 10110, 11719, 13374, 14983, 16593, 19862, 23081, 26356, 29575, 32854],
  /* 1601〜1700  */ [3872, 5583, 7293, 9003, 10758, 12468, 14179, 15889, 17649, 21069, 24545, 27965, 31446, 34866],
  /* 1701〜1800  */ [4074, 5884, 7740, 9551, 11362, 13173, 15033, 16844, 18655, 22332, 25953, 29635, 33256, 36944]
];

/**
 * 寸法値からインデックスを判定する補助関数
 * @param {number} val 寸法 (mm)
 * @param {Array<{min: number, max: number}>} ranges 区分配列
 * @returns {number} インデックス
 */
function findRangeIndex(val, ranges) {
  for (let i = 0; i < ranges.length; i++) {
    if (val >= ranges[i].min && val <= ranges[i].max) {
      return i;
    }
  }
  if (val < ranges[0].min) return 0;
  if (val > ranges[ranges.length - 1].max) return ranges.length - 1;
  return -1;
}

/**
 * 塩ビパンチングの2辺の寸法から、仕入原価（税込）を取得
 * @param {number} dim1 寸法1 (mm)
 * @param {number} dim2 寸法2 (mm)
 * @returns {number|null} 仕入原価（円・税込）
 */
export function getPvcPunchingCost(dim1, dim2) {
  const aVal = Math.max(dim1, dim2);
  const bVal = Math.min(dim1, dim2);

  const aIndex = findRangeIndex(aVal, PVC_PUNCHING_A_RANGES);
  const bIndex = findRangeIndex(bVal, PVC_PUNCHING_B_RANGES);

  if (aIndex === -1 || bIndex === -1) return null;

  const row = PVC_PUNCHING_PRICES[aIndex];
  if (!row) return null;

  const price = row[bIndex];
  if (price != null) {
    return price;
  }

  // 万が一対角線上でnullの場合、直近の有効セルを参照
  for (let b = bIndex; b >= 0; b--) {
    if (row[b] != null) return row[b];
  }
  return null;
}

/**
 * 仕様情報のサマリー取得（デバッグ・表示用）
 */
export function getPvcPunchingSpecInfo(dim1, dim2) {
  const aVal = Math.max(dim1, dim2);
  const bVal = Math.min(dim1, dim2);
  const aIndex = findRangeIndex(aVal, PVC_PUNCHING_A_RANGES);
  const bIndex = findRangeIndex(bVal, PVC_PUNCHING_B_RANGES);
  const cost = getPvcPunchingCost(dim1, dim2);

  return {
    material: '塩ビパンチングボード 透明 3.0mm',
    aVal,
    bVal,
    aRange: PVC_PUNCHING_A_RANGES[aIndex]?.label || '-',
    bRange: PVC_PUNCHING_B_RANGES[bIndex]?.label || '-',
    cost
  };
}
