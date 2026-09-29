# -*- coding: utf-8 -*-
"""
はざいや 塩ビ透明パンチングボード (t=3.0mm) 価格自動収集＆設定ファイル生成スクリプト
URL: https://www.hazaiya.co.jp/estimate/board/4018
"""

import urllib.request
import json
import re
import time
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 1. 区間定義（上限値で試算することで、区間内での原価割れを100%防止）
B_RANGES = [
    {'min': 10,  'max': 100,  'query': 100,  'label': '10〜100'},
    {'min': 101, 'max': 150,  'query': 150,  'label': '101〜150'},
    {'min': 151, 'max': 200,  'query': 200,  'label': '151〜200'},
    {'min': 201, 'max': 250,  'query': 250,  'label': '201〜250'},
    {'min': 251, 'max': 300,  'query': 300,  'label': '251〜300'},
    {'min': 301, 'max': 350,  'query': 350,  'label': '301〜350'},
    {'min': 351, 'max': 400,  'query': 400,  'label': '351〜400'},
    {'min': 401, 'max': 450,  'query': 450,  'label': '401〜450'},
    {'min': 451, 'max': 500,  'query': 500,  'label': '451〜500'},
    {'min': 501, 'max': 600,  'query': 600,  'label': '501〜600'},
    {'min': 601, 'max': 700,  'query': 700,  'label': '601〜700'},
    {'min': 701, 'max': 800,  'query': 800,  'label': '701〜800'},
    {'min': 801, 'max': 900,  'query': 900,  'label': '801〜900'},
    {'min': 901, 'max': 1000, 'query': 1000, 'label': '901〜1000'},
]

A_RANGES = [
    {'min': 10,   'max': 100,  'query': 100,  'label': '10〜100'},
    {'min': 101,  'max': 150,  'query': 150,  'label': '101〜150'},
    {'min': 151,  'max': 200,  'query': 200,  'label': '151〜200'},
    {'min': 201,  'max': 250,  'query': 250,  'label': '201〜250'},
    {'min': 251,  'max': 300,  'query': 300,  'label': '251〜300'},
    {'min': 301,  'max': 350,  'query': 350,  'label': '301〜350'},
    {'min': 351,  'max': 400,  'query': 400,  'label': '351〜400'},
    {'min': 401,  'max': 450,  'query': 450,  'label': '401〜450'},
    {'min': 451,  'max': 500,  'query': 500,  'label': '451〜500'},
    {'min': 501,  'max': 600,  'query': 600,  'label': '501〜600'},
    {'min': 601,  'max': 700,  'query': 700,  'label': '601〜700'},
    {'min': 701,  'max': 800,  'query': 800,  'label': '701〜800'},
    {'min': 801,  'max': 900,  'query': 900,  'label': '801〜900'},
    {'min': 901,  'max': 1000, 'query': 1000, 'label': '901〜1000'},
    {'min': 1001, 'max': 1100, 'query': 1100, 'label': '1001〜1100'},
    {'min': 1101, 'max': 1200, 'query': 1200, 'label': '1101〜1200'},
    {'min': 1201, 'max': 1300, 'query': 1300, 'label': '1201〜1300'},
    {'min': 1301, 'max': 1400, 'query': 1400, 'label': '1301〜1400'},
    {'min': 1401, 'max': 1500, 'query': 1500, 'label': '1401〜1500'},
    {'min': 1501, 'max': 1600, 'query': 1600, 'label': '1501〜1600'},
    {'min': 1601, 'max': 1700, 'query': 1700, 'label': '1601〜1700'},
    {'min': 1701, 'max': 1800, 'query': 1800, 'label': '1701〜1800'},
]

def main():
    print("=== はざいや 塩ビ透明パンチング(t=3mm) 価格自動収集開始 ===")
    url_page = 'https://www.hazaiya.co.jp/estimate/board/4018'
    url_calc = 'https://www.hazaiya.co.jp/estimate/4018/calculate-price-summary'

    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor())

    # CSRF取得
    print("1. CSRFトークン・セッション取得中...")
    req_page = urllib.request.Request(url_page, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    res_page = opener.open(req_page)
    html = res_page.read().decode('utf-8')
    csrf = re.search(r'name=["\']eccube-csrf-token["\']\s+content=["\']([^"\']+)["\']', html).group(1)
    print(f"   CSRFトークン取得成功: {csrf[:15]}...")

    matrix = []
    total_cells = 0
    calculated_cells = 0

    for a_idx, a_item in enumerate(A_RANGES):
        for b_idx, b_item in enumerate(B_RANGES):
            if a_item['query'] >= b_item['query']:
                total_cells += 1

    print(f"2. 価格マトリクス試算開始 (全 {total_cells} パターン、A ≧ B)...")

    start_time = time.time()
    
    for a_idx, a_item in enumerate(A_RANGES):
        row = []
        for b_idx, b_item in enumerate(B_RANGES):
            if b_item['query'] > a_item['query']:
                # B > A は null
                row.append(None)
                continue

            data = {
                'width': b_item['query'],
                'height': a_item['query'],
                'thickness': 3,
                'quantity': 1,  # 案A: 1枚単価（完全安全側）
                'edge_trimming': False,
                'cutting_pattern': 1,
                'additional_machining': 0
            }

            req = urllib.request.Request(
                url_calc,
                data=json.dumps(data).encode('utf-8'),
                headers={
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'ECCUBE-CSRF-TOKEN': csrf
                }
            )

            try:
                res = json.loads(opener.open(req).read().decode('utf-8'))
                price = res.get('totalPriceIncludedTax')
                row.append(price)
                calculated_cells += 1
                if calculated_cells % 15 == 0 or calculated_cells == total_cells:
                    print(f"   進捗: {calculated_cells}/{total_cells} ({calculated_cells/total_cells*100:.1f}%) | A={a_item['query']} x B={b_item['query']} => ¥{price:,}")
            except Exception as e:
                print(f"   エラー A={a_item['query']}, B={b_item['query']}: {e}")
                row.append(None)

            # サーバー負荷軽減スリープ (0.1秒)
            time.sleep(0.1)

        matrix.append(row)

    elapsed = time.time() - start_time
    print(f"\n3. 全試算完了 (所要時間: {elapsed:.1f} 秒)")

    # 4. JS設定ファイルの書き出し
    output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'cage_mitumori', 'pvc_punching_price_config.js'))
    
    generate_js_config(output_path, matrix)
    print(f"4. 設定ファイルを書き出しました: {output_path}")

def generate_js_config(output_path, matrix):
    now_str = time.strftime('%Y-%m-%d %H:%M:%S')
    lines = []
    lines.append("/**")
    lines.append(" * =================================================================")
    lines.append(" * 塩ビ透明パンチングボード (φ3.1-P7, 3.0mm厚) 価格マスタ設定ファイル")
    lines.append(" * =================================================================")
    lines.append(" * 参照元: アクリルショップ はざいや (https://www.hazaiya.co.jp/estimate/board/4018)")
    lines.append(f" * 最終自動更新日時: {now_str}")
    lines.append(" * 条件: 数量1枚単価（完全安全側・原価割れ防止）、直線カット込、税込価格")
    lines.append(" */")
    lines.append("")
    lines.append("// B寸法区分（短辺 mm）: 横列")
    lines.append("export const PVC_PUNCHING_B_RANGES = " + json.dumps(
        [{'min': b['min'], 'max': b['max'], 'label': b['label']} for b in B_RANGES],
        ensure_ascii=False, indent=2
    ) + ";")
    lines.append("")
    lines.append("// A寸法区分（長辺 mm）: 縦行")
    lines.append("export const PVC_PUNCHING_A_RANGES = " + json.dumps(
        [{'min': a['min'], 'max': a['max'], 'label': a['label']} for a in A_RANGES],
        ensure_ascii=False, indent=2
    ) + ";")
    lines.append("")
    lines.append("// はざいや実仕入価格マトリクス [A行インデックス][B列インデックス] (単位: 円・税込)")
    lines.append("export const PVC_PUNCHING_PRICES = [")

    for i, a_item in enumerate(A_RANGES):
        row = matrix[i]
        row_strs = [str(val) if val is not None else "null" for val in row]
        row_line = "  /* " + f"{a_item['label']}".ljust(10) + " */ [" + ", ".join(row_strs) + "]"
        if i < len(A_RANGES) - 1:
            row_line += ","
        lines.append(row_line)

    lines.append("];")
    lines.append("")
    lines.append("""/**
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
""")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))

if __name__ == '__main__':
    main()
