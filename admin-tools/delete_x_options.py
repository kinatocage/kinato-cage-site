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

def delete_x_price_options():
    try:
        # ターゲットファイルの読み込み
        target_file = "x_targets.json"
        if not os.path.exists(target_file):
            print(f"Error: {target_file} not found.")
            return

        with open(target_file, "r", encoding="utf-8") as f:
            targets = json.load(f)

        print(f"Deleting {len(targets)} options...")
        success_count = 0
        error_count = 0

        for t in targets:
            content_id = t["id"]
            name = t.get("name", "Unknown")
            print(f"Deleting: {name} (ID: {content_id})...", end="", flush=True)
            
            url = f"{BASE_URL}/options/{content_id}"
            try:
                res = requests.delete(url, headers=HEADERS, timeout=30)
                res.raise_for_status()
                print(" ✅ Deleted")
                success_count += 1
            except Exception as e:
                print(f" ❌ Error: {e}")
                error_count += 1

        print(f"\n--- Deletion Summary ---")
        print(f"Success: {success_count} 件")
        print(f"Error: {error_count} 件")
    except Exception as e:
        print(f"Fatal Error: {e}")

if __name__ == "__main__":
    delete_x_price_options()
