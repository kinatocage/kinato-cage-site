import re
import time
from microcms_api import MicroCMSClient
from dotenv import load_dotenv

load_dotenv()

def to_textarea_text(html_text):
    if html_text is None: return ""
    if not isinstance(html_text, str): return str(html_text)
    text = re.sub(r'<br\s*/?>', '\n', html_text)
    if text.startswith('<p>') and text.endswith('</p>'):
        text = text[3:-4]
    return text

def to_microcms_html(plain_text):
    if plain_text is None: return ""
    return plain_text.replace('\n', '<br />')

def clean_text(text):
    if text is None: return ""
    if not isinstance(text, str): return str(text)
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'<[^>]*?>', '', text)
    return text

def migrate_endpoint(endpoint, html_fields=[], text_fields=[]):
    print(f"--- Migrating {endpoint} ---")
    contents = MicroCMSClient.get_list(endpoint, limit=100)
    print(f"Found {len(contents)} items.")
    
    for item in contents:
        content_id = item['id']
        payload = {}
        
        for field in html_fields:
            old_val = item.get(field, "")
            # 一旦テキストエリア形式（\nベース）に落としてから、再度 <br /> 形式（pなし）に変換
            new_val = to_microcms_html(to_textarea_text(old_val))
            if old_val != new_val:
                payload[field] = new_val
                
        for field in text_fields:
            old_val = item.get(field, "")
            new_val = clean_text(old_val)
            if old_val != new_val:
                payload[field] = new_val
        
        if payload:
            print(f"Updating {content_id}: {list(payload.keys())}")
            try:
                MicroCMSClient.update_content(endpoint, content_id, payload)
                time.sleep(0.2)
            except Exception as e:
                print(f"  ❌ Error updating {content_id}: {e}")
        else:
            # print(f"Skipping {content_id} (no change)")
            pass

def run_migration():
    # 1. Works
    migrate_endpoint("works", html_fields=["content"], text_fields=["customerComment"])
    
    # 2. Types
    migrate_endpoint("types", text_fields=["description"])
    
    # 3. Options
    migrate_endpoint("options", html_fields=["details"])
    
    print("--- Migration completed ---")

if __name__ == "__main__":
    run_migration()
