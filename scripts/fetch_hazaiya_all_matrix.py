# -*- coding: utf-8 -*-
"""
はざいや価格マトリクス 全数自動調査スクリプト
- 対象:
  1. アクリル透明キャスト板 3.0mm (ID: 3316)
  2. アクリル透明押出板 3.0mm (ID: 3303)
  3. 塩ビ透明パンチング 3.0mm (ID: 4018)
- ヒューマンライクなランダム待機（0.6〜1.4秒、定期的に2〜3秒）
- 素材単体価格 (materialPrice) と カット込税込合計 (totalPriceIncludedTax) を完全全数取得
"""

import urllib.request
import json
import re
import time
import random
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

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

def fetch_full_matrix(opener, csrf, product_id, item_name, thickness=3.0):
    print(f"\n=======================================================", flush=True)
    print(f"【{item_name}】(ID: {product_id}, t={thickness}mm) 全数調査開始", flush=True)
    print(f"=======================================================", flush=True)
    url_calc = f"https://www.hazaiya.co.jp/estimate/{product_id}/calculate-price-summary"

    mat_total = []
    mat_material = []
    mat_craft = []

    total_cells = sum(1 for a in A_RANGES for b in B_RANGES if a['query'] >= b['query'])
    done = 0

    for a_idx, a_item in enumerate(A_RANGES):
        row_total = []
        row_mat = []
        row_craft = []

        for b_idx, b_item in enumerate(B_RANGES):
            if b_item['query'] > a_item['query']:
                row_total.append(None)
                row_mat.append(None)
                row_craft.append(None)
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
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, text/javascript, */*; q=0.01',
                    'X-Requested-With': 'XMLHttpRequest',
                    'ECCUBE-CSRF-TOKEN': csrf
                }
            )

            success = False
            for retry in range(3):
                try:
                    res = json.loads(opener.open(req).read().decode('utf-8'))
                    tot = res.get('totalPriceIncludedTax')
                    mat = res.get('materialPrice')
                    craft = res.get('craftFee')
                    row_total.append(tot)
                    row_mat.append(mat)
                    row_craft.append(craft)
                    done += 1
                    success = True
                    break
                except Exception as e:
                    print(f"  [WARN] リトライ {retry+1}/3 (A={a_item['query']}, B={b_item['query']}): {e}", flush=True)
                    time.sleep(2.0)

            if not success:
                row_total.append(None)
                row_mat.append(None)
                row_craft.append(None)

            # ヒューマンライクな待機（ランダム0.5〜1.2秒）
            wait_time = random.uniform(0.5, 1.2)
            # 25回ごとに少し長めの休憩（2.0〜3.0秒）
            if done % 25 == 0:
                wait_time += random.uniform(1.5, 2.5)
                print(f"  >>> 進捗: {done}/{total_cells} ({done/total_cells*100:.1f}%) | 直近: A={a_item['query']} x B={b_item['query']} => 素材: {row_mat[-1]:,}円 / 税込計: {row_total[-1]:,}円", flush=True)

            time.sleep(wait_time)

        mat_total.append(row_total)
        mat_material.append(row_mat)
        mat_craft.append(row_craft)

    print(f"【{item_name}】全 {done} セル収集完了！")
    return {
        'totalPriceIncludedTax': mat_total,
        'materialPrice': mat_material,
        'craftFee': mat_craft
    }

def main():
    print("=== はざいや価格全数調査（ヒューマンライク・レート制限対策版）開始 ===", flush=True)
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor())

    # CSRF取得
    req_page = urllib.request.Request(
        'https://www.hazaiya.co.jp/estimate/board/3303',
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    )
    res_page = opener.open(req_page).read().decode('utf-8')
    csrf = re.search(r'name=["\']eccube-csrf-token["\']\s+content=["\']([^"\']+)["\']', res_page).group(1)
    print(f"CSRFトークン取得成功: {csrf[:15]}...", flush=True)

    output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'scratch'))
    os.makedirs(output_dir, exist_ok=True)

    targets = [
        # 1. 透明アクリル キャスト板 3.0mm (ID: 3316) - ユーザー検証用最優先
        {'id': 3316, 'name': 'アクリル透明キャスト 3.0mm', 'file': 'hazaiya_cast_3_0_full.json'},
        # 2. 透明アクリル 押出板 3.0mm (ID: 3303)
        {'id': 3303, 'name': 'アクリル透明押出 3.0mm', 'file': 'hazaiya_extrusion_3_0_full.json'},
        # 3. 塩ビ透明パンチング 3.0mm (ID: 4018)
        {'id': 4018, 'name': '塩ビ透明パンチング 3.0mm', 'file': 'hazaiya_pvc_punching_3_0_full.json'}
    ]

    for t in targets:
        result = fetch_full_matrix(opener, csrf, t['id'], t['name'], thickness=3.0)
        out_path = os.path.join(output_dir, t['file'])
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump({
                'productId': t['id'],
                'name': t['name'],
                'updatedAt': time.strftime('%Y-%m-%d %H:%M:%S'),
                'aRanges': A_RANGES,
                'bRanges': B_RANGES,
                'matrices': result
            }, f, ensure_ascii=False, indent=2)
        print(f"保存完了: {out_path}")
        time.sleep(3.0) # 品目間のインターバル

    print("\n=== 全品目の全数調査が完了しました ===")

if __name__ == '__main__':
    main()
