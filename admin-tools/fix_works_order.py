import time
import os
from microcms_api import MicroCMSClient
from dotenv import load_dotenv

load_dotenv()

def fix_works_order():
    print("--- 製作事例（works）の order フィールド一括更新を開始します ---")
    
    # 1. データの順序基準（更新日時が新しい順）に基づき全件取得
    # limit=100 (全70件程度なので十分)
    try:
        contents = MicroCMSClient.get_list("works", limit=100, orders="-updatedAt")
        print(f"取得した事例数: {len(contents)} 件")
    except Exception as e:
        print(f"データ取得中にエラーが発生しました: {e}")
        return

    if not contents:
        print("事例がありませんでした。")
        return

    # 2. 100 から順に採番し、PATCH リクエストを送信
    start_num = 100
    for i, content in enumerate(contents):
        content_id = content['id']
        new_order = start_num + i
        title = content.get('title', '無題')
        
        print(f"[{i+1}/{len(contents)}] Updating ID: {content_id} ({title}) -> order: {new_order}")
        
        payload = {
            "order": new_order
        }
        
        try:
            MicroCMSClient.update_content("works", content_id, payload)
            # API レート制限を考慮し、少し待機（1秒間に最大 10 リクエストの制限があるため）
            # ここでは安全のため 0.2s 待機
            time.sleep(0.2)
        except Exception as e:
            print(f"  ❌ 更新中にエラーが発生しました (ID: {content_id}): {e}")
            # 続行するか、ここで停止するか。今回は続行。
            continue

    print("--- 処理が完了しました ---")

if __name__ == "__main__":
    fix_works_order()
