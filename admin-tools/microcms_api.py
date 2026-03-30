import os
import requests
from dotenv import load_dotenv

# 環境変数の読み込み
load_dotenv()

MICROCMS_SERVICE_DOMAIN = os.getenv("MICROCMS_SERVICE_DOMAIN") or os.getenv("PUBLIC_MICROCMS_SERVICE_DOMAIN")
MICROCMS_API_KEY = os.getenv("MICROCMS_API_KEY") or os.getenv("PUBLIC_MICROCMS_API_KEY")
BASE_URL = f"https://{MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1"

# ヘッダー設定
HEADERS = {
    "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
    "Content-Type": "application/json"
}
# 画像アップロード用のヘッダー（Content-Typeはrequestsが自動設定するため除外）
MEDIA_HEADERS = {
    "X-MICROCMS-API-KEY": MICROCMS_API_KEY
}

class MicroCMSClient:
    """microCMSとの通信を担うクライアントクラス"""

    @staticmethod
    def upload_media(file_bytes, filename, mime_type):
        """複数画像をアップロードし、URLのリストを返す。"""
        import time
        # ファイル名の重複を避けるためタイムスタンプを付与
        name, ext = os.path.splitext(filename)
        unique_filename = f"{name}_{int(time.time()*1000)}{ext}"
        
        url = f"https://{MICROCMS_SERVICE_DOMAIN}.microcms-management.io/api/v1/media"
        # filesパラメーターを使ってMultipart-FormDataで送信
        files = {
            "file": (unique_filename, file_bytes, mime_type)
        }
        # タイムアウトを長めに設定 (30秒)
        response = requests.post(url, headers=MEDIA_HEADERS, files=files, timeout=30)
        response.raise_for_status()
        return response.json()

    @staticmethod
    def get_list(endpoint, limit=100, orders="-updatedAt"):
        """指定したエンドポイントのリストを取得する"""
        url = f"{BASE_URL}/{endpoint}?limit={limit}&orders={orders}"
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        return response.json().get("contents", [])

    @staticmethod
    def get_detail(endpoint, content_id):
        """コンテンツ詳細を取得する"""
        url = f"{BASE_URL}/{endpoint}/{content_id}"
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        return response.json()

    @staticmethod
    def create_content(endpoint, payload):
        """新規コンテンツを作成する(POST)"""
        url = f"{BASE_URL}/{endpoint}"
        # タイムアウトを 60 秒に設定
        response = requests.post(url, headers=HEADERS, json=payload, timeout=60)
        response.raise_for_status()
        return response.json()

    @staticmethod
    def update_content(endpoint, content_id, payload):
        """既存コンテンツを更新する(PATCH)"""
        url = f"{BASE_URL}/{endpoint}/{content_id}"
        # タイムアウトを 60 秒に設定
        response = requests.patch(url, headers=HEADERS, json=payload, timeout=60)
        response.raise_for_status()
        return response.json()

    @staticmethod
    def delete_content(endpoint, content_id):
        """既存コンテンツを削除する(DELETE)"""
        url = f"{BASE_URL}/{endpoint}/{content_id}"
        # タイムアウトを 60 秒に設定
        response = requests.delete(url, headers=HEADERS, timeout=60)
        response.raise_for_status()
        return True
