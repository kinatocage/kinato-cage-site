/**
 * =================================================================
 * 透明アクリル キャスト板 3.0mm (正面扉専用) 価格マスタ設定ファイル
 * =================================================================
 * 参照元: アクリルショップ はざいや (https://www.hazaiya.co.jp/estimate/board/3316)
 * 最終自動更新日時: 2026-09-29 21:59:20
 * 条件: 数量1枚単価（完全安全側・原価割れ防止）、直線カット込、税込価格
 * 追加加工費: 穴加工2か所 (135円+175円=310円) + 磨き仕上げ4辺 (514円×4=2056円) = 計2366円/枚
 */

// 正面扉専用 加工費（1枚あたり、単位: 円・税込）
export const ACRYLIC_CAST_PROCESSING = {
  holes: [135, 175],          // 穴加工2か所 (円)
  holeTotal: 310,             // 穴加工合計 (円)
  polishingPerEdge: 514,      // 磨き仕上げ単価 (円/辺)
  polishingEdges: 4,          // 磨き辺数 (四周4辺)
  polishingTotal: 2056,       // 磨き仕上げ合計 (円: 514円 × 4辺)
  totalProcessingPerPiece: 2366 // 扉1枚あたりの加工費合計 (円: 310 + 2056)
};

export const ACRYLIC_CAST_B_RANGES = [
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

export const ACRYLIC_CAST_A_RANGES = [
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

export const ACRYLIC_CAST_PRICES = [
  /* 10〜100     */ [287, null, null, null, null, null, null, null, null, null, null, null, null, null],
  /* 101〜150    */ [359, 481, null, null, null, null, null, null, null, null, null, null, null, null],
  /* 151〜200    */ [445, 588, 747, null, null, null, null, null, null, null, null, null, null, null],
  /* 201〜250    */ [516, 712, 891, 1088, null, null, null, null, null, null, null, null, null, null],
  /* 251〜300    */ [604, 819, 1052, 1267, 1501, null, null, null, null, null, null, null, null, null],
  /* 301〜350    */ [676, 945, 1195, 1465, 1716, 1988, null, null, null, null, null, null, null, null],
  /* 351〜400    */ [765, 1052, 1358, 1645, 1952, 2239, 2549, null, null, null, null, null, null, null],
  /* 401〜450    */ [837, 1179, 1501, 1845, 2167, 2513, 2835, 3184, null, null, null, null, null, null],
  /* 451〜500    */ [928, 1286, 1666, 2024, 2405, 2764, 3148, 3506, 3893, null, null, null, null, null],
  /* 501〜600    */ [1092, 1522, 1975, 2405, 2861, 3291, 3749, 4179, 4610, 5501, null, null, null, null],
  /* 601〜700    */ [1258, 1760, 2288, 2790, 3319, 3821, 4323, 4825, 5357, 6361, 7398, null, null, null],
  /* 701〜800    */ [1428, 2001, 2603, 3176, 3749, 4323, 4927, 5501, 6074, 7255, 8402, 9585, null, null],
  /* 801〜900    */ [1599, 2244, 2889, 3534, 4210, 4856, 5501, 6146, 6825, 8115, 9442, 10732, 12063, null],
  /* 901〜1000   */ [1743, 2459, 3207, 3924, 4641, 5357, 6108, 6825, 7542, 9012, 10446, 11920, 13354, 14832],
  /* 1001〜1100  */ [1917, 2705, 3494, 4282, 5105, 5893, 6681, 7470, 8295, 9872, 11490, 13067, 14689, 16266],
  /* 1101〜1200  */ [2060, 2920, 3814, 4675, 5535, 6395, 7292, 8152, 9012, 10773, 12493, 14259, 15979, 17749],
  /* 1201〜1300  */ [2238, 3169, 4101, 5033, 6002, 6933, 7865, 8797, 9770, 11633, 13542, 15405, 17319, 19183],
  /* 1301〜1400  */ [2381, 3384, 4425, 5428, 6432, 7435, 8480, 9483, 10487, 12538, 14545, 16602, 18609, 20671],
  /* 1401〜1500  */ [2561, 3636, 4712, 5787, 6903, 7978, 9053, 10128, 11248, 13399, 15599, 17749, 19954, 22105],
  /* 1501〜1600  */ [2705, 3851, 5039, 6186, 7333, 8480, 9671, 10818, 11965, 14309, 16602, 18951, 21244, 23598],
  /* 1601〜1700  */ [2889, 4107, 5326, 6544, 7808, 9026, 10245, 11463, 12732, 15169, 17661, 20098, 22595, 25032],
  /* 1701〜1800  */ [3032, 4322, 5658, 6948, 8238, 9528, 10868, 12158, 13449, 16084, 18664, 21304, 23885, 26531]
];

function findRangeIndex(val, ranges) {
  for (let i = 0; i < ranges.length; i++) {
    if (val >= ranges[i].min && val <= ranges[i].max) return i;
  }
  if (val < ranges[0].min) return 0;
  if (val > ranges[ranges.length - 1].max) return ranges.length - 1;
  return -1;
}

/**
 * 透明アクリル キャスト板 3.0mm (正面扉専用) の板単体仕入原価（税込、追加加工費除く）を取得
 * @param {number} dim1 寸法1 (mm)
 * @param {number} dim2 寸法2 (mm)
 * @returns {number|null} 板単体仕入原価（円・税込）
 */
export function getAcrylicCastRawBoardCost(dim1, dim2) {
  const aVal = Math.max(dim1, dim2);
  const bVal = Math.min(dim1, dim2);

  const aIndex = findRangeIndex(aVal, ACRYLIC_CAST_A_RANGES);
  const bIndex = findRangeIndex(bVal, ACRYLIC_CAST_B_RANGES);

  if (aIndex === -1 || bIndex === -1) return null;
  const row = ACRYLIC_CAST_PRICES[aIndex];
  if (!row) return null;

  const price = row[bIndex];
  if (price != null) return price;

  for (let b = bIndex; b >= 0; b--) {
    if (row[b] != null) return row[b];
  }
  return null;
}

/**
 * 透明アクリル キャスト板 3.0mm (正面扉専用) の加工込み仕入原価（税込、穴加工2箇所＋磨き4辺込み）を取得
 * @param {number} dim1 寸法1 (mm)
 * @param {number} dim2 寸法2 (mm)
 * @returns {number|null} 1枚あたりの加工込仕入原価（円・税込）
 */
export function getAcrylicCastCost(dim1, dim2) {
  const rawCost = getAcrylicCastRawBoardCost(dim1, dim2);
  if (rawCost == null) return null;
  return rawCost + ACRYLIC_CAST_PROCESSING.totalProcessingPerPiece;
}
