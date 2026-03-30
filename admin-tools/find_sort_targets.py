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

def find_target_options():
    url = f"{BASE_URL}/options?limit=100"
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    contents = response.json().get("contents", [])
    
    haiban_targets = []
    info_targets = []
    
    for opt in contents:
        price = str(opt.get("price") or "")
        name = str(opt.get("name") or "")
        
        if "廃版" in price:
            haiban_targets.append({"id": opt["id"], "name": name, "price": price, "order": opt.get("order")})
        
        if "〇情報　" in name:
            info_targets.append({"id": opt["id"], "name": name, "price": price, "order": opt.get("order")})
            
    return {"haiban": haiban_targets, "info": info_targets}

if __name__ == "__main__":
    targets = find_target_options()
    with open("sort_targets.json", "w", encoding="utf-8") as f:
        json.dump(targets, f, ensure_ascii=False, indent=2)
    
    print(f"廃版ターゲット: {len(targets['haiban'])} 件")
    print(f"〇情報ターゲット: {len(targets['info'])} 件")
