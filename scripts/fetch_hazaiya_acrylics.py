# -*- coding: utf-8 -*-
"""
はざいや アクリル板（透明押出1.5/2.0/3.0mm、黒両面マット3.0mm、グレースモーク3.0mm）
価格自動収集＆各専用設定ファイル生成スクリプト
"""

import urllib.request
import json
import re
import time
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

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

def fetch_matrix_for_item(opener, csrf, product_id, thickness, item_name):
    print(f"\n--- [{item_name}] (ID: {product_id}, t={thickness}mm) 収集開始 ---")
    url_calc = f"https://www.hazaiya.co.jp/estimate/{product_id}/calculate-price-summary"
    matrix = []
    total = sum(1 for a in A_RANGES for b in B_RANGES if a['query'] >= b['query'])
    done = 0

    for a_idx, a_item in enumerate(A_RANGES):
        row = []
        for b_idx, b_item in enumerate(B_RANGES):
            if b_item['query'] > a_item['query']:
                row.append(None)
                continue

            data = {
                'width': b_item['query'],
                'height': a_item['query'],
                'thickness': thickness,
                'quantity': 1,
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
                done += 1
                if done % 40 == 0 or done == total:
                    print(f"  進捗: {done}/{total} ({done/total*100:.1f}%) | A={a_item['query']} x B={b_item['query']} => ¥{price:,}")
            except Exception as e:
                print(f"  エラー A={a_item['query']}, B={b_item['query']}: {e}")
                row.append(None)

            time.sleep(0.08)

        matrix.append(row)

    return matrix

def generate_extrusion_file(output_path, matrices):
    now_str = time.strftime('%Y-%m-%d %H:%M:%S')
    lines = [
        "/**",
        " * =================================================================",
        " * 透明アクリル押出板 (1.5mm / 2.0mm / 3.0mm) 価格マスタ設定ファイル",
        " * =================================================================",
        " * 参照元: アクリルショップ はざいや (https://www.hazaiya.co.jp/estimate/board/3303)",
        f" * 最終自動更新日時: {now_str}",
        " * 条件: 数量1枚単価（完全安全側・原価割れ防止）、直線カット込、税込価格",
        " */",
        "",
        "// B寸法区分（短辺 mm）: 横列",
        "export const ACRYLIC_EXTRUSION_B_RANGES = " + json.dumps([{'min': b['min'], 'max': b['max'], 'label': b['label']} for b in B_RANGES], ensure_ascii=False, indent=2) + ";",
        "",
        "// A寸法区分（長辺 mm）: 縦行",
        "export const ACRYLIC_EXTRUSION_A_RANGES = " + json.dumps([{'min': a['min'], 'max': a['max'], 'label': a['label']} for a in A_RANGES], ensure_ascii=False, indent=2) + ";",
        "",
        "// はざいや実仕入価格マトリクス（厚み別 [A行][B列]、単位: 円・税込）",
        "export const ACRYLIC_EXTRUSION_PRICES = {"
    ]

    for thick_key in ['1.5', '2.0', '3.0']:
        mat = matrices[thick_key]
        lines.append(f"  '{thick_key}': [")
        for i, a_item in enumerate(A_RANGES):
            row = mat[i]
            row_strs = [str(val) if val is not None else "null" for val in row]
            line_str = "    /* " + f"{a_item['label']}".ljust(10) + " */ [" + ", ".join(row_strs) + "]"
            if i < len(A_RANGES) - 1:
                line_str += ","
            lines.append(line_str)
        lines.append("  ]" + ("," if thick_key != '3.0' else ""))

    lines.append("};")
    lines.append("""
function findRangeIndex(val, ranges) {
  for (let i = 0; i < ranges.length; i++) {
    if (val >= ranges[i].min && val <= ranges[i].max) return i;
  }
  if (val < ranges[0].min) return 0;
  if (val > ranges[ranges.length - 1].max) return ranges.length - 1;
  return -1;
}

/**
 * 透明アクリル押出板の仕入原価（税込）を取得
 * @param {number|string} thickness 板厚 (1.5, 2.0, 3.0)
 * @param {number} dim1 寸法1 (mm)
 * @param {number} dim2 寸法2 (mm)
 * @returns {number|null} 仕入原価（円・税込）
 */
export function getAcrylicExtrusionCost(thickness, dim1, dim2) {
  const tKey = parseFloat(thickness).toFixed(1);
  const matrix = ACRYLIC_EXTRUSION_PRICES[tKey] || ACRYLIC_EXTRUSION_PRICES['3.0'];
  if (!matrix) return null;

  const aVal = Math.max(dim1, dim2);
  const bVal = Math.min(dim1, dim2);

  const aIndex = findRangeIndex(aVal, ACRYLIC_EXTRUSION_A_RANGES);
  const bIndex = findRangeIndex(bVal, ACRYLIC_EXTRUSION_B_RANGES);

  if (aIndex === -1 || bIndex === -1) return null;
  const row = matrix[aIndex];
  if (!row) return null;

  const price = row[bIndex];
  if (price != null) return price;

  for (let b = bIndex; b >= 0; b--) {
    if (row[b] != null) return row[b];
  }
  return null;
}
""")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))

def generate_single_material_file(output_path, matrix, name_ja, url_source, export_prefix, func_name):
    now_str = time.strftime('%Y-%m-%d %H:%M:%S')
    lines = [
        "/**",
        " * =================================================================",
        f" * {name_ja} 価格マスタ設定ファイル",
        " * =================================================================",
        f" * 参照元: アクリルショップ はざいや ({url_source})",
        f" * 最終自動更新日時: {now_str}",
        " * 条件: 数量1枚単価（完全安全側・原価割れ防止）、直線カット込、税込価格",
        " */",
        "",
        f"export const {export_prefix}_B_RANGES = " + json.dumps([{'min': b['min'], 'max': b['max'], 'label': b['label']} for b in B_RANGES], ensure_ascii=False, indent=2) + ";",
        "",
        f"export const {export_prefix}_A_RANGES = " + json.dumps([{'min': a['min'], 'max': a['max'], 'label': a['label']} for a in A_RANGES], ensure_ascii=False, indent=2) + ";",
        "",
        f"export const {export_prefix}_PRICES = ["
    ]

    for i, a_item in enumerate(A_RANGES):
        row = matrix[i]
        row_strs = [str(val) if val is not None else "null" for val in row]
        line_str = "  /* " + f"{a_item['label']}".ljust(10) + " */ [" + ", ".join(row_strs) + "]"
        if i < len(A_RANGES) - 1:
            line_str += ","
        lines.append(line_str)

    lines.append("];")
    lines.append(f"""
function findRangeIndex(val, ranges) {{
  for (let i = 0; i < ranges.length; i++) {{
    if (val >= ranges[i].min && val <= ranges[i].max) return i;
  }}
  if (val < ranges[0].min) return 0;
  if (val > ranges[ranges.length - 1].max) return ranges.length - 1;
  return -1;
}}

/**
 * {name_ja} の仕入原価（税込）を取得
 * @param {{number}} dim1 寸法1 (mm)
 * @param {{number}} dim2 寸法2 (mm)
 * @returns {{number|null}} 仕入原価（円・税込）
 */
export function {func_name}(dim1, dim2) {{
  const aVal = Math.max(dim1, dim2);
  const bVal = Math.min(dim1, dim2);

  const aIndex = findRangeIndex(aVal, {export_prefix}_A_RANGES);
  const bIndex = findRangeIndex(bVal, {export_prefix}_B_RANGES);

  if (aIndex === -1 || bIndex === -1) return null;
  const row = {export_prefix}_PRICES[aIndex];
  if (!row) return null;

  const price = row[bIndex];
  if (price != null) return price;

  for (let b = bIndex; b >= 0; b--) {{
    if (row[b] != null) return row[b];
  }}
  return null;
}}
""")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))

def main():
    print("=== はざいや アクリル各種板 価格自動収集開始 ===")
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor())

    # CSRF
    req_page = urllib.request.Request('https://www.hazaiya.co.jp/estimate/board/3303', headers={'User-Agent': 'Mozilla/5.0'})
    res_page = opener.open(req_page)
    csrf = re.search(r'name=["\']eccube-csrf-token["\']\s+content=["\']([^"\']+)["\']', res_page.read().decode('utf-8')).group(1)
    print(f"CSRF取得成功: {csrf[:15]}...")

    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'cage_mitumori'))

    # 1. 透明アクリル押出板 (1.5mm, 2.0mm, 3.0mm)
    extrusion_matrices = {}
    for thick, key in [(1.5, '1.5'), (2.0, '2.0'), (3.0, '3.0')]:
        mat = fetch_matrix_for_item(opener, csrf, 3303, thick, f"透明アクリル {key}mm")
        extrusion_matrices[key] = mat

    ext_path = os.path.join(base_dir, 'acrylic_extrusion_price_config.js')
    generate_extrusion_file(ext_path, extrusion_matrices)
    print(f"\n[完了] 透明アクリル設定ファイル出力: {ext_path}")

    # 2. アクリル黒両面マット 3.0mm (ID: 3468)
    mat_black = fetch_matrix_for_item(opener, csrf, 3468, 3.0, "黒両面マット 3.0mm")
    black_path = os.path.join(base_dir, 'acrylic_black_matte_price_config.js')
    generate_single_material_file(
        black_path, mat_black,
        "アクリル黒両面マット 3.0mm",
        "https://www.hazaiya.co.jp/estimate/board/3468",
        "ACRYLIC_BLACK_MATTE",
        "getAcrylicBlackMatteCost"
    )
    print(f"\n[完了] 黒両面マット設定ファイル出力: {black_path}")

    # 3. アクリル グレースモーク半透明 3.0mm (ID: 3356)
    mat_smoke = fetch_matrix_for_item(opener, csrf, 3356, 3.0, "グレースモーク 3.0mm")
    smoke_path = os.path.join(base_dir, 'acrylic_smoke_gray_price_config.js')
    generate_single_material_file(
        smoke_path, mat_smoke,
        "アクリル グレースモーク半透明 3.0mm (コモグラス 530K)",
        "https://www.hazaiya.co.jp/estimate/board/3356",
        "ACRYLIC_SMOKE_GRAY",
        "getAcrylicSmokeGrayCost"
    )
    print(f"\n[完了] グレースモーク設定ファイル出力: {smoke_path}")

    print("\n=== 全アクリル板の価格マスタ生成が完了しました！ ===")

if __name__ == '__main__':
    main()
