import os
import requests
import json
from dotenv import load_dotenv

load_dotenv("C:/Users/owner/OneDrive/Desktop/Web/admin-tools/.env")

MICROCMS_SERVICE_DOMAIN = os.getenv("MICROCMS_SERVICE_DOMAIN") or os.getenv("PUBLIC_MICROCMS_SERVICE_DOMAIN")
MICROCMS_API_KEY = os.getenv("MICROCMS_API_KEY") or os.getenv("PUBLIC_MICROCMS_API_KEY")
BASE_URL = f"https://{MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1"
HEADERS = {
    "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
    "Content-Type": "application/json"
}

def update_orders():
    # ターゲットファイルの読み込み
    try:
        with open("sort_targets.json", "r", encoding="utf-8") as f:
            targets = json.load(f)
    except Exception as e:
        print(f"Error loading targets: {e}")
        return

    haiban_list = targets.get("haiban", [])
    info_list = targets.get("info", [])

    # 重複を除去しつつ、廃版を優先する
    haiban_ids = {t["id"] for t in haiban_list}
    unique_info_list = [t for t in info_list if t["id"] not in haiban_ids]

    print(f"更新開始: 廃版 {len(haiban_list)} 件, 〇情報 {len(unique_info_list)} 件")

    success_count = 0
    error_count = 0

    # 廃版の更新 (300番台)
    for i, t in enumerate(haiban_list):
        new_order = 300 + i
        print(f"Updating Haiban: {t['name']} -> order: {new_order}...", end="", flush=True)
        try:
            res = requests.patch(f"{BASE_URL}/options/{t['id']}", headers=HEADERS, json={"order": new_order}, timeout=30)
            res.raise_for_status()
            print(" ✅")
            success_count += 1
        except Exception as e:
            print(f" ❌ {e}")
            error_count += 1

    # 〇情報の更新 (200番台)
    for i, t in enumerate(unique_info_list):
        new_order = 200 + i
        print(f"Updating Info: {t['name']} -> order: {new_order}...", end="", flush=True)
        try:
            res = requests.patch(f"{BASE_URL}/options/{t['id']}", headers=HEADERS, json={"order": new_order}, timeout=30)
            res.raise_for_status()
            print(" ✅")
            success_count += 1
        except Exception as e:
            print(f" ❌ {e}")
            error_count += 1

    print(f"\n--- 更新結果 ---")
    print(f"成功: {success_count} 件")
    print(f"失敗: {error_count} 件")

if __name__ == "__main__":
    update_orders()
