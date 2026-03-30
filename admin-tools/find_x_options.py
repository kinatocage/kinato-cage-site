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

def find_x_price_options():
    try:
        url = f"{BASE_URL}/options?limit=100"
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        contents = response.json().get("contents", [])
        
        target_options = []
        for opt in contents:
            price = str(opt.get("price", ""))
            # 「×」が一致、または含まれているものを抽出
            if price == "×" or "×" in price:
                target_options.append({
                    "id": opt["id"],
                    "name": opt.get("name"),
                    "price": price,
                    "category": opt.get("category")
                })
        
        # カレントディレクトリに保存
        output_path = "x_targets.json"
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(target_options, f, ensure_ascii=False, indent=2)
        
        print(f"Total found: {len(target_options)}")
        print(f"Results saved to {os.path.abspath(output_path)}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    find_x_price_options()
