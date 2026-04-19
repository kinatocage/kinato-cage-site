import streamlit as st
import pandas as pd
from PIL import Image
from pillow_heif import register_heif_opener
register_heif_opener()
from microcms_api import MicroCMSClient
import time
import os
import io
import re
from dotenv import load_dotenv

load_dotenv()
# PUBLIC_プレフィックスをもつAstro用環境変数にも対応できるようにする
MICROCMS_SERVICE_DOMAIN = os.getenv("MICROCMS_SERVICE_DOMAIN") or os.getenv("PUBLIC_MICROCMS_SERVICE_DOMAIN")
MICROCMS_API_KEY = os.getenv("MICROCMS_API_KEY") or os.getenv("PUBLIC_MICROCMS_API_KEY")

def calc_textarea_height(text, min_height=100, max_height=800):
    """テキストの行数に合わせて、テキストエリアの高さを(px)で算出する。"""
    if not text:
        return min_height
    # 改行コードで分割（末尾の改行も一文字と数える）
    lines = str(text).count('\n') + 1
    # 1行あたり約24px、上下パディングなどの補正
    # ※ フォントサイズやブラウザの計算により多少前後するため余裕を持たせる
    calculated = lines * 24 + 48
    return min(max_height, max(min_height, calculated))

st.set_page_config(page_title="きなとのケージ屋さん - コンテンツ管理", layout="wide", initial_sidebar_state="expanded")

# カスタムCSSの適用 (業務利用を想定したコンパクトでクリーンなUI設計)
st.markdown("""
    <style>
    /* 全体的な余白を詰めて1画面に収まりやすくする */
    .block-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    /* ボタンのスタイリング (ホバー時のわかりやすさを向上) */
    .stButton>button {
        border-radius: 6px;
        transition: all 0.2s ease;
        border: 1px solid rgba(128, 128, 128, 0.4);
    }
    .stButton>button:hover {
        border-color: #4CAF50;
        color: #4CAF50;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    /* 入力欄の角丸 */
    .stTextInput>div>div>input, .stTextArea>div>div>textarea, .stSelectbox>div>div>select {
        border-radius: 4px;
    }
    /* プレビュー画像に影をつける */
    img {
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }
    /* フォームコンテナの余白を適切に */
    [data-testid="stForm"] {
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid rgba(128, 128, 128, 0.2);
    }
    /* 画像プレビュー用スタイル改善 */
    .img-container {
        position: relative;
        width: 100%;
        max-width: 200px;
        height: 150px;
        background-color: #1e1e1e;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 0.5rem auto;
        border: 1px solid rgba(128,128,128,0.2);
    }
    .preview-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: transform 0.2s ease;
    }
    .img-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4px;
        width: 100%;
        margin-top: 5px;
    }

    /* テキストエリアのオートリサイズ設定（モダンブラウザ用・ progressive enhancement） */
    textarea {
        field-sizing: content;
        min-height: 100px;
        transition: height 0.1s ease-out;
    }
    </style>

    <script>
    // JavaScriptによるフォールバック：入力時に高さを調整するスクリプトを注入
    // ※ Streamlitのiframe構成により、メインのdocumentに影響を与える
    function applyAutoResize() {
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(el => {
            if (el.dataset.autoResized === 'true') return;
            
            const resize = () => {
                el.style.height = 'auto';
                el.style.height = (el.scrollHeight + 4) + 'px';
            };
            
            el.addEventListener('input', resize);
            el.dataset.autoResized = 'true';
            
            // 初回適用
            setTimeout(resize, 0);
        });
    }

    // 要素が動的に追加された際にも適用するためのオブザーバー
    const observer = new MutationObserver(() => {
        applyAutoResize();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // 初期実行
    applyAutoResize();
    </script>
""", unsafe_allow_html=True)

# 環境変数が設定されていない場合の警告
if not MICROCMS_SERVICE_DOMAIN or not MICROCMS_API_KEY:
    st.error("【エラー】`.env` ファイルに APIキー設定が見つかりません。")
    st.stop()

# セッションステートの初期化
if "types" not in st.session_state:
    st.session_state.types = []
if "options" not in st.session_state:
    st.session_state.options = []
if "works" not in st.session_state:
    st.session_state.works = []
if "seitai" not in st.session_state:
    st.session_state.seitai = []
# 画像の編集状態を管理 (回転角度など)
if "image_edits" not in st.session_state:
    st.session_state.image_edits = {}
# フォームリセット用のキー
if "uploader_key" not in st.session_state:
    st.session_state.uploader_key = str(time.time())

def refresh_data():
    """全データを再取得する"""
    with st.spinner("データを取得中..."):
        try:
            st.session_state.types = MicroCMSClient.get_list("types", orders="order")
            st.session_state.options = MicroCMSClient.get_list("options", orders="order")
            st.session_state.works = MicroCMSClient.get_list("works", orders="-updatedAt")
            st.session_state.seitai = MicroCMSClient.get_list("seitai", orders="-order")
        except Exception as e:
            st.error(f"データ取得に失敗しました: {e}")

# 初回ロード
if not st.session_state.types:
    refresh_data()

st.sidebar.title("🛠 管理メニュー")
mode = st.sidebar.radio("操作モード", ["新規登録", "既存データの編集"])
target_model = st.sidebar.selectbox("対象コンテンツ", ["Cage Types", "オプション紹介", "オプション一括編集", "製作事例", "生体マスタ"])

if st.sidebar.button("↻ データを再読み込み"):
    refresh_data()
    st.rerun()

st.title(f"{target_model} - {mode}")

# ==========================================
# 共通関数群
# ==========================================
def upload_images(uploaded_files):
    """複数画像をアップロードし、URLのリストを返す。大容量画像はリサイズ・圧縮して送信する。"""
    images_payload = []
    import time
    if uploaded_files:
        st.info(f"送信開始: {len(uploaded_files)} 枚の画像を処理中...")
        for file in uploaded_files:
            try:
                start_time = time.time()
                # Pillowで開いてリサイズ&圧縮
                img = Image.open(io.BytesIO(file.getvalue()))
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # 最大幅1200pxに縮小（アスペクト比維持）
                img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
                
                output = io.BytesIO()
                img.save(output, format="JPEG", quality=85)
                compressed_bytes = output.getvalue()
                
                # 拡張子とMIMEタイプをJPEGに変更して送信
                filename = os.path.splitext(file.name)[0] + ".jpg"
                
                st.write(f"⏳ {filename} をアップロード中...")
                res = MicroCMSClient.upload_media(compressed_bytes, filename, "image/jpeg")
                
                end_time = time.time()
                st.write(f"✅ {filename} 完了 ({end_time - start_time:.2f}秒)")
                images_payload.append(res)
            except Exception as e:
                import traceback
                error_msg = str(traceback.format_exc())
                st.error(f"❌ '{file.name}' の処理でエラーが発生しました。\n\n【詳細】\n{error_msg}")
                return None
    return images_payload

def to_textarea_text(html_text):
    """HTMLを取得し、テキストエリア用のプレーンテキストに変換する"""
    if html_text is None: return ""
    if not isinstance(html_text, str): return str(html_text)
    
    # <br>, <br /> を \n に変換
    text = re.sub(r'<br\s*/?>', '\n', html_text)
    # 最初と最後の <p>, </p> を除去（非最短一致で慎重に除去）
    # ※ 複数の <p> がある場合は残るが、外側の一つだけを対象とする
    if text.startswith('<p>') and text.endswith('</p>'):
        text = text[3:-4]
    
    return text

def to_microcms_html(plain_text):
    """テキストエリアの文字列を MicroCMS 用の HTML に変換する"""
    if not plain_text: return ""
    # \n を <br /> に変換
    html = plain_text.replace('\n', '<br />')
    return html

def clean_text(text):
    """プレーンテキスト項目用：タグを完全に除去しつつ改行を保持する"""
    if text is None: return ""
    if not isinstance(text, str): return str(text)
    # <br> を改行に変換
    text = re.sub(r'<br\s*/?>', '\n', text)
    # それ以外のタグを全て除去
    text = re.sub(r'<[^>]*?>', '', text)
    return text

# ==========================================
# フォーム1: Cage Types
# ==========================================
def render_types_form(is_edit=False):
    target_id = None
    default_title = ""
    default_desc = ""
    
    # 編集モード時のレイアウト分岐用
    form_col = st.container()

    if is_edit:
        if not st.session_state.types:
            st.warning("登録されているTypeがありません。")
            return
            
        st.write("---")
        # 左側にリスト、右側にフォームの2カラム構成
        list_col, form_col = st.columns([1, 2])
        
        with list_col:
            st.subheader("📋 編集するTypeを選択")
            # 表示用に長い文字を省略する関数
            def truncate_text(text, max_len=15):
                return text if len(text) <= max_len else text[:max_len] + "..."
                
            type_options = {t["id"]: t for t in st.session_state.types}
            # keyをidにして、表示名をtruncateする
            display_options = {t["id"]: truncate_text(t["title"]) for t in st.session_state.types}
            
            # 選択を保持するためのセッションステート
            if "selected_type_id" not in st.session_state:
                st.session_state.selected_type_id = list(type_options.keys())[0] if type_options else None
                
            selected_id = st.radio(
                "対象Type", 
                options=list(type_options.keys()), 
                format_func=lambda x: display_options[x],
                key="type_selector",
                label_visibility="collapsed"
            )
            
            t_data = type_options[selected_id]
            target_id = t_data["id"]
            default_title = t_data.get("title", "")
            default_desc = clean_text(t_data.get("description", ""))
            
    # 左側リスト(is_edit時のみ)と右側フォームの表示制御
    if is_edit:
        with form_col:
            st.subheader("📝 現在の登録内容")
            if t_data.get("image") and len(t_data["image"]) > 0:
                img_cols = st.columns(min(len(t_data["image"]), 4))
                for idx, img_obj in enumerate(t_data["image"]):
                    img_url = img_obj["url"] if isinstance(img_obj, dict) else str(img_obj)
                    # キャッシュ対策としてURLにタイムスタンプを付与
                    display_url = f"{img_url}?t={int(time.time())}"
                    img_id = f"type_{target_id}_{idx}"
                    
                    if img_id not in st.session_state.image_edits:
                        st.session_state.image_edits[img_id] = {"rotate": 0, "delete": False}
                    
                    edit_state = st.session_state.image_edits[img_id]
                    
                    with img_cols[idx % 4]:
                        rotate_angle = edit_state["rotate"]
                        opacity = 0.3 if edit_state["delete"] else 1.0
                        
                        st.markdown(f"""
                            <div style="opacity: {opacity}; width: 100%;">
                                <div class="img-container">
                                    <img src="{display_url}" class="preview-img" style="transform: rotate({rotate_angle}deg);">
                                </div>
                            </div>
                        """, unsafe_allow_html=True)
                        
                        st.markdown('<div class="img-controls">', unsafe_allow_html=True)
                        col_btn1, col_btn2 = st.columns([1, 1])
                        with col_btn1:
                            if st.button(f"🔄 90°", key=f"rot_{img_id}", use_container_width=True):
                                st.session_state.image_edits[img_id]["rotate"] = (edit_state["rotate"] + 90) % 360
                                st.rerun()
                        with col_btn2:
                            is_deleted = st.checkbox("🗑️ 削除", value=edit_state["delete"], key=f"del_{img_id}")
                            st.session_state.image_edits[img_id]["delete"] = is_deleted
                            if is_deleted != edit_state["delete"]:
                                st.rerun()
                        st.markdown('</div>', unsafe_allow_html=True)
                        st.caption(f"画像 {idx+1}")

    # 新規・編集共通: form_col配下にフォームを配置（新規の場合はstそのまま）
    container = form_col if is_edit else st
    
    with container.form("types_form"):
        st.subheader("📝 基本情報")
        title = st.text_input("Type名 (title) *必須", value=default_title)
        description = st.text_area("特徴説明 (description) *必須", value=default_desc, height=calc_textarea_height(default_desc))
        
        st.write("---")
        st.subheader("📸 画像・参照設定")
        uploaded_files = st.file_uploader("メイン画像 (image) ※追加アップロード分（既存の画像は保持されます）", accept_multiple_files=True, type=["png", "jpg", "jpeg", "webp", "heic", "HEIC"], key=f"type_img_{st.session_state.uploader_key}")
        
        # プレビュー表示
        if uploaded_files:
            st.write("🖼️ **選択した画像のプレビュー**")
            cols = st.columns(min(len(uploaded_files), 4)) # 最大4列まで
            for idx, file in enumerate(uploaded_files):
                with cols[idx % 4]:
                    st.image(file, width=200, caption=file.name)
        
        # 製作事例の参照選択
        st.write("---")
        st.subheader("🔗 関連付け")
        works_list = {w["title"]: w["id"] for w in st.session_state.works}
        
        # 編集時、現在のpinnedWorksをデフォルト選択状態にする
        default_works = []
        if is_edit and "pinnedWorks" in t_data:
            default_works = [w["title"] for w in t_data["pinnedWorks"] if w["title"] in works_list]
            
        selected_works = st.multiselect("おすすめ事例 (pinnedWorks)", list(works_list.keys()), default=default_works)
        
        st.write("---")
        submit = st.form_submit_button("保存する 💾")
        
        if submit:
            if not title or not description:
                st.error("Type名と特徴説明は必須です。")
                return
                
            payload = {
                "title": title,
                "description": clean_text(description),
                "pinnedWorks": [works_list[w] for w in selected_works]
            }
            
            # 既存編集時は画像処理を高度化
            if is_edit:
                processed_existing_images = []
                if "image" in t_data and isinstance(t_data["image"], list):
                    for idx, img_obj in enumerate(t_data["image"]):
                        img_id = f"type_{target_id}_{idx}"
                        edit_state = st.session_state.image_edits.get(img_id, {"rotate": 0, "delete": False})
                        
                        if edit_state["delete"]: continue
                            
                        # URLの取得
                        img_url = img_obj["url"] if isinstance(img_obj, dict) else str(img_obj)
                        
                        if edit_state["rotate"] != 0:
                            with st.spinner(f"画像 {idx+1} を回転処理中..."):
                                try:
                                    import requests
                                    response = requests.get(img_url)
                                    img = Image.open(io.BytesIO(response.content))
                                    processed_img = img.rotate(-edit_state["rotate"], expand=True)
                                    output = io.BytesIO()
                                    processed_img.save(output, format="JPEG", quality=85)
                                    processed_bytes = output.getvalue()
                                    new_img_res = MicroCMSClient.upload_media(processed_bytes, f"rotated_{idx}.jpg", "image/jpeg")
                                    processed_existing_images.append(new_img_res["url"])
                                except Exception as e:
                                    st.error(f"画像 {idx+1} の回転処理に失敗しました: {e}")
                                    processed_existing_images.append(img_url)
                        else:
                            processed_existing_images.append(img_url)

                # 新規アップロード分
                new_images_urls = []
                if uploaded_files:
                    images_res = upload_images(uploaded_files)
                    if images_res is not None:
                        new_images_urls = [img["url"] for img in images_res]
                
                payload["image"] = processed_existing_images + new_images_urls
            else:
                # 新規作成時
                if uploaded_files:
                    images_res = upload_images(uploaded_files)
                    if images_res is not None:
                        payload["image"] = [img["url"] for img in images_res]
            
            with st.spinner("保存中..."):
                try:
                    if is_edit:
                        MicroCMSClient.update_content("types", target_id, payload)
                        st.success("更新しました！")
                        # 保存成功後に画像編集状態をクリア
                        st.session_state.image_edits = {}
                    else:
                        MicroCMSClient.create_content("types", payload)
                        st.success("新規作成しました！")
                    
                    st.session_state.uploader_key = str(time.time())
                    refresh_data()
                    time.sleep(1)
                    st.rerun()
                except Exception as e:
                    import requests
                    if isinstance(e, requests.exceptions.HTTPError):
                        try:
                            error_detail = e.response.json().get("message", e.response.text)
                        except:
                            error_detail = e.response.text
                        st.error(f"保存に失敗しました (APIエラー): {error_detail}")
                    else:
                        st.error(f"保存に失敗しました: {e}")

# ==========================================
# フォーム2: オプション紹介
# ==========================================
def render_options_form(is_edit=False):
    target_id = None
    default_name = ""
    default_cat = ""
    default_price = ""
    default_details = ""
    default_order = 0
    
    form_col = st.container()
    
    if is_edit:
        if not st.session_state.options:
            st.warning("登録されているオプションがありません。")
            return
            
        st.write("---")
        list_col, form_col = st.columns([1, 2])
        
        with list_col:
            st.subheader("📋 編集するオプションを選択")
            def truncate_text(text, max_len=15):
                return text if len(text) <= max_len else text[:max_len] + "..."
                
            opt_options = {o["id"]: o for o in st.session_state.options}
            display_options = {o["id"]: truncate_text(o.get("name", "名称未設定")) for o in st.session_state.options}
            
            selected_id = st.radio(
                "対象オプション", 
                options=list(opt_options.keys()), 
                format_func=lambda x: display_options[x],
                key="opt_selector",
                label_visibility="collapsed"
            )
            
            o_data = opt_options[selected_id]
            target_id = o_data["id"]
            default_name = o_data.get("name", "")
            default_cat = o_data.get("category", "")
            default_price = str(o_data.get("price", ""))
            default_details = to_textarea_text(o_data.get("details", ""))
            default_order = o_data.get("order", 0)
            
    # 左側リスト(is_edit時のみ)と右側フォームの表示制御
    if is_edit:
        with form_col:
            st.subheader("📝 現在の登録内容")
            if o_data.get("images") and len(o_data["images"]) > 0:
                img_cols = st.columns(min(len(o_data["images"]), 4))
                for idx, img_obj in enumerate(o_data["images"]):
                    img_url = img_obj["url"] if isinstance(img_obj, dict) else str(img_obj)
                    # キャッシュ対策としてURLにタイムスタンプを付与
                    display_url = f"{img_url}?t={int(time.time())}"
                    img_id = f"opt_{target_id}_{idx}"
                    
                    if img_id not in st.session_state.image_edits:
                        st.session_state.image_edits[img_id] = {"rotate": 0, "delete": False}
                    
                    edit_state = st.session_state.image_edits[img_id]
                    
                    with img_cols[idx % 4]:
                        rotate_angle = edit_state["rotate"]
                        opacity = 0.3 if edit_state["delete"] else 1.0
                        
                        st.markdown(f"""
                            <div style="opacity: {opacity}; width: 100%;">
                                <div class="img-container">
                                    <img src="{display_url}" class="preview-img" style="transform: rotate({rotate_angle}deg);">
                                </div>
                            </div>
                        """, unsafe_allow_html=True)
                        
                        st.markdown('<div class="img-controls">', unsafe_allow_html=True)
                        col_btn1, col_btn2 = st.columns([1, 1])
                        with col_btn1:
                            if st.button(f"🔄 90°", key=f"rot_{img_id}", use_container_width=True):
                                st.session_state.image_edits[img_id]["rotate"] = (edit_state["rotate"] + 90) % 360
                                st.rerun()
                        with col_btn2:
                            is_deleted = st.checkbox("🗑️ 削除", value=edit_state["delete"], key=f"del_{img_id}")
                            st.session_state.image_edits[img_id]["delete"] = is_deleted
                            if is_deleted != edit_state["delete"]:
                                st.rerun()
                        st.markdown('</div>', unsafe_allow_html=True)
                        st.caption(f"画像 {idx+1}")

    # 新規・編集共通
    container = form_col if is_edit else st

    with container.form("options_form"):
        st.subheader("📝 基本情報")
        col1, col2 = st.columns(2)
        with col1:
            name = st.text_input("オプション名 (name) *必須", value=default_name)
            category = st.text_input("カテゴリ (category)", value=default_cat)
        with col2:
            price_input = st.text_input("価格 (price) ※空欄の場合は「サイズにより変動」", value=default_price)
            order_input = st.number_input("並び順 (order) ※数字が小さいほど上に表示", value=default_order if is_edit else 0, step=1)
            
        details = st.text_area("詳細解説 (details)", value=default_details, height=calc_textarea_height(default_details))
        
        st.write("---")
        st.subheader("📸 画像設定")
        uploaded_files = st.file_uploader("写真 (images) ※追加アップロード分（既存の画像は保持されます）", accept_multiple_files=True, type=["png", "jpg", "jpeg", "webp", "heic", "HEIC"], key=f"opt_img_{st.session_state.uploader_key}")
        
        # プレビュー表示
        if uploaded_files:
            st.write("🖼️ **選択した画像のプレビュー**")
            cols = st.columns(min(len(uploaded_files), 4)) # 最大4列
            for idx, file in enumerate(uploaded_files):
                with cols[idx % 4]:
                    st.image(file, width=200, caption=file.name)
        
        st.write("---")
        st.subheader("🎯 対象Type (applicableTypes)")
        st.caption("※対象となるケージTypeにチェックを入れてください。何も選択しない場合は全ケージ共通の手数料やオプション等として扱われます。")
        
        types_list = {t["title"]: t["id"] for t in st.session_state.types}
        default_types_titles = []
        if is_edit and "applicableTypes" in o_data:
            default_types_titles = [t["title"] for t in o_data["applicableTypes"] if t["title"] in types_list]
            
        # チェックボックスで選択できるように改善
        selected_types = []
        # 型の数に応じてカラムを分ける (例: 3列)
        cols_checkbox = st.columns(3)
        for i, type_title in enumerate(types_list.keys()):
            with cols_checkbox[i % 3]:
                is_checked = type_title in default_types_titles
                if st.checkbox(type_title, value=is_checked, key=f"cb_{type_title}"):
                    selected_types.append(type_title)
        
        st.write("---")
        submit = st.form_submit_button("保存する 💾")
        
        if submit:
            if not name:
                st.error("オプション名は必須です。")
                return
                
            
            new_app_types = [types_list[t] for t in selected_types]
            
            payload = {
                "name": name,
                "category": category,
                "details": to_microcms_html(details),
                "order": order_input,
                "applicableTypes": new_app_types
            }
            # 空欄対応
            if price_input.strip() == "":
                payload["price"] = "" # 空文字を送信して「見積もり」にする
            else:
                payload["price"] = price_input
            
            # 既存編集時は画像処理を高度化
            if is_edit:
                processed_existing_images = []
                if "images" in o_data and isinstance(o_data["images"], list):
                    for idx, img_obj in enumerate(o_data["images"]):
                        img_id = f"opt_{target_id}_{idx}"
                        edit_state = st.session_state.image_edits.get(img_id, {"rotate": 0, "delete": False})
                        
                        if edit_state["delete"]: continue
                        
                        img_url = img_obj["url"] if isinstance(img_obj, dict) else str(img_obj)
                        
                        if edit_state["rotate"] != 0:
                            with st.spinner(f"画像 {idx+1} を回転処理中..."):
                                try:
                                    import requests
                                    response = requests.get(img_url)
                                    img = Image.open(io.BytesIO(response.content))
                                    processed_img = img.rotate(-edit_state["rotate"], expand=True)
                                    output = io.BytesIO()
                                    processed_img.save(output, format="JPEG", quality=85)
                                    processed_bytes = output.getvalue()
                                    new_img_res = MicroCMSClient.upload_media(processed_bytes, f"rotated_{idx}.jpg", "image/jpeg")
                                    processed_existing_images.append(new_img_res["url"])
                                except Exception as e:
                                    st.error(f"画像 {idx+1} の回転処理に失敗しました: {e}")
                                    processed_existing_images.append(img_url)
                        else:
                            processed_existing_images.append(img_url)

                # 新規アップロード分
                new_images_urls = []
                if uploaded_files:
                    images_res = upload_images(uploaded_files)
                    if images_res is not None:
                        new_images_urls = [img["url"] for img in images_res]
                
                payload["images"] = processed_existing_images + new_images_urls
            else:
                # 新規作成時
                if uploaded_files:
                    images_res = upload_images(uploaded_files)
                    if images_res is not None:
                        payload["images"] = [img["url"] for img in images_res]
                    
            with st.spinner("保存中..."):
                try:
                    if is_edit:
                        MicroCMSClient.update_content("options", target_id, payload)
                        st.success("更新しました！")
                        # 保存成功後に画像編集状態をクリア
                        st.session_state.image_edits = {}
                    else:
                        MicroCMSClient.create_content("options", payload)
                        st.success("新規作成しました！")
                        
                    st.session_state.uploader_key = str(time.time())
                    refresh_data()
                    time.sleep(1)
                    st.rerun()
                except Exception as e:
                    import requests
                    if isinstance(e, requests.exceptions.HTTPError):
                        try:
                            error_detail = e.response.json().get("message", e.response.text)
                        except:
                            error_detail = e.response.text
                        st.error(f"保存に失敗しました (APIエラー): {error_detail}")
                    else:
                        st.error(f"保存に失敗しました: {e}")

# ==========================================
# フォーム3: 製作事例
# ==========================================
def render_works_form(is_edit=False):
    target_id = None
    default_title = ""
    default_seitai = []
    default_size = ""
    default_content = ""
    default_comment = ""
    
    form_col = st.container()
    
    if is_edit:
        if not st.session_state.works:
            st.warning("登録されている製作事例がありません。")
            return
            
        st.write("---")
        list_col, form_col = st.columns([1, 2])
        
        with list_col:
            st.subheader("📋 編集する事例を選択")
            def truncate_text(text, max_len=15):
                return text if len(text) <= max_len else text[:max_len] + "..."
                
            work_options = {w["id"]: w for w in st.session_state.works}
            
            def get_display_name(w):
                # 更新日時をパース
                from datetime import datetime
                try:
                    dt = datetime.fromisoformat(w.get("updatedAt").replace("Z", "+00:00"))
                    date_str = dt.strftime("%m/%d %H:%M")
                except:
                    date_str = "??/??"
                
                title = w.get("title", "無題")
                short_id = w["id"][-4:]
                return f"[{date_str}] {truncate_text(title, 20)} ({short_id})"

            display_options = {w["id"]: get_display_name(w) for w in st.session_state.works}
            
            selected_id = st.radio(
                "対象事例", 
                options=list(work_options.keys()), 
                format_func=lambda x: display_options[x],
                key="work_selector",
                label_visibility="collapsed"
            )
            
            w_data = work_options[selected_id]
            target_id = w_data["id"]
            default_title = w_data.get("title", "")
            
            # seitainame は microCMS の参照フィールド
            seitai_list = {s["name"]: s["id"] for s in st.session_state.seitai}
            
            # 現在の選択状態を取得
            current_seitai = w_data.get("seitainame", [])
            if isinstance(current_seitai, list):
                default_seitai = [s["name"] for s in current_seitai if isinstance(s, dict) and s.get("name") in seitai_list]
            elif isinstance(current_seitai, dict):
                default_seitai = [current_seitai.get("name")] if current_seitai.get("name") in seitai_list else []
            
            # features はこれまで通りテキスト
            def format_tags(val):
                if isinstance(val, list):
                    return ",".join(val)
                return str(val) if val is not None else ""
                
            default_size = w_data.get("size", "")
            default_content = to_textarea_text(w_data.get("content", ""))
            default_comment = clean_text(w_data.get("customerComment", ""))
            default_order = w_data.get("order", 0)
            
    # 左側リスト(is_edit時のみ)と右側フォームの表示制御
    if is_edit:
        with form_col:
            st.subheader("📝 現在の登録内容")
            if w_data.get("images") and len(w_data["images"]) > 0:
                img_cols = st.columns(min(len(w_data["images"]), 4))
                for idx, img_obj in enumerate(w_data["images"]):
                    img_url = img_obj["url"]
                    # キャッシュ対策としてURLにタイムスタンプを付与
                    display_url = f"{img_url}?t={int(time.time())}"
                    img_id = f"{target_id}_{idx}"
                    
                    if img_id not in st.session_state.image_edits:
                        st.session_state.image_edits[img_id] = {"rotate": 0, "delete": False}
                    
                    edit_state = st.session_state.image_edits[img_id]
                    
                    with img_cols[idx % 4]:
                        # 回転を適用して表示
                        rotate_angle = edit_state["rotate"]
                        opacity = 0.3 if edit_state["delete"] else 1.0
                        
                        st.markdown(f"""
                            <div style="opacity: {opacity}; width: 100%;">
                                <div class="img-container">
                                    <img src="{display_url}" class="preview-img" style="transform: rotate({rotate_angle}deg);">
                                </div>
                            </div>
                        """, unsafe_allow_html=True)
                        
                        st.markdown('<div class="img-controls">', unsafe_allow_html=True)
                        col_btn1, col_btn2 = st.columns([1, 1])
                        with col_btn1:
                            if st.button(f"🔄 90°", key=f"rot_{img_id}", use_container_width=True):
                                st.session_state.image_edits[img_id]["rotate"] = (edit_state["rotate"] + 90) % 360
                                st.rerun()
                        with col_btn2:
                            is_deleted = st.checkbox("🗑️ 削除", value=edit_state["delete"], key=f"del_{img_id}")
                            st.session_state.image_edits[img_id]["delete"] = is_deleted
                            if is_deleted != edit_state["delete"]:
                                st.rerun()
                        st.markdown('</div>', unsafe_allow_html=True)
                        
                        st.caption(f"画像 {idx+1}")

    # 新規・編集共通
    container = form_col if is_edit else st

    with container.form("works_form"):
        st.subheader("📝 基本情報")
        title = st.text_input("タイトル (title) *必須", value=default_title)
        
        # 生体マスタから選択肢を取得（order の降順でソート）
        sorted_seitai_list = sorted(
            st.session_state.seitai, 
            key=lambda x: x.get("order", 0) if x.get("order") is not None else 0, 
            reverse=True
        )
        seitai_options = {s["name"]: s["id"] for s in sorted_seitai_list}
        
        selected_seitai_names = st.multiselect(
            "飼育生体 (seitainame) *必須", 
            options=list(seitai_options.keys()), 
            default=default_seitai,
            key=f"seitai_ms_{target_id if is_edit else 'new'}"
        )
        
        types_list = {t["title"]: t["id"] for t in st.session_state.types}
        # 編集時のcageType初期値処理
        default_c_idx = 0
        if is_edit and "cageType" in w_data and w_data["cageType"]:
            # リスト（複数参照）の場合と単一オブジェクトの場合の両方に対応
            target_cage = w_data["cageType"]
            if isinstance(target_cage, list) and len(target_cage) > 0:
                target_cage = target_cage[0]
            
            if isinstance(target_cage, dict):
                t_title = target_cage.get("title")
                if t_title in types_list.keys():
                    default_c_idx = list(types_list.keys()).index(t_title)
        
        cagetype_selection = st.selectbox("ベースケージType (cageType)", list(types_list.keys()), index=default_c_idx)
        
        # 不要な古い入力欄があった場合は削除
        # species_input = st.text_input("飼育生体 (species) ※カンマ区切りで複数指定", value=default_species, help="例: レオパ, 爬虫類")
        
        size = st.text_input("サイズ (size)", value=default_size, help="例: W900×D450×H450")
        order_input = st.number_input("並び順 (order)", value=default_order if is_edit else 0, step=1)
        
        content = st.text_area("詳細・本文 (content)", value=default_content, height=calc_textarea_height(default_content))
        customerComment = st.text_area("お客様の声 (customerComment)", value=default_comment, height=calc_textarea_height(default_comment))
        
        st.write("---")
        st.subheader("📸 画像設定")
        uploaded_files = st.file_uploader("事例写真 (images) ※追加アップロード分（既存の画像は保持されます）", accept_multiple_files=True, type=["png", "jpg", "jpeg", "webp", "heic", "HEIC"], key=f"work_img_{st.session_state.uploader_key}")
        
        # プレビュー表示（3列折り返し）
        if uploaded_files:
            st.write("🖼️ **選択した画像のプレビュー**")
            for i in range(0, len(uploaded_files), 3):
                cols = st.columns(3)
                for j, file in enumerate(uploaded_files[i:min(i+3, len(uploaded_files))]):
                    with cols[j]:
                        st.image(file, width=200, caption=file.name)
        
        st.write("---")
        submit = st.form_submit_button("保存する 💾")
        
        if submit:
            if not title:
                st.error("タイトルは必須です。")
                return
            if not cagetype_selection:
                st.error("ベースケージTypeを選択してください（必須）。")
                return
            if not selected_seitai_names:
                st.error("飼育生体は必須です。")
                return
            
            # カンマ区切りテキストをリストに変換し、空白を除去    
            
            # ペイロードの組み立て（新規作成用）
            full_payload = {
                "title": title,
                "cageType": [types_list.get(cagetype_selection)] if cagetype_selection else [],
                "seitainame": [seitai_options[name] for name in selected_seitai_names],
                "size": size,
                "content": to_microcms_html(content),
                "customerComment": clean_text(customerComment),
                "order": order_input
            }
            
            if uploaded_files:
                images_res = upload_images(uploaded_files)
                if images_res is not None:
                    full_payload["images"] = [img["url"] for img in images_res]
            
            # 既存編集時は「変更があった差分のみ」を抽出して送信する（負荷軽減・タイムアウト対策）
            final_payload = {}
            if is_edit:
                # 文字列項目
                for key in ["title", "size", "content", "customerComment"]:
                    if full_payload[key] != w_data.get(key, ""):
                        final_payload[key] = full_payload[key]
                
                # 数値項目 (order)
                if full_payload["order"] != w_data.get("order", 0):
                    final_payload["order"] = full_payload["order"]
                
                # リスト/特殊項目
                new_seitai_ids = [seitai_options[name] for name in selected_seitai_names]
                current_seitai_ids = [s["id"] for s in w_data.get("seitainame", []) if isinstance(s, dict)]
                if set(new_seitai_ids) != set(current_seitai_ids):
                    final_payload["seitainame"] = new_seitai_ids
                
                # cageType (参照フィールド)
                current_ctype_id = w_data.get("cageType", {}).get("id") if isinstance(w_data.get("cageType"), dict) else None
                if not current_ctype_id and isinstance(w_data.get("cageType"), list) and len(w_data["cageType"]) > 0:
                     current_ctype_id = w_data["cageType"][0].get("id")
                
                new_ctype_id = types_list.get(cagetype_selection)
                if new_ctype_id != current_ctype_id:
                     final_payload["cageType"] = [new_ctype_id] if new_ctype_id else []

                # 画像 (images) の高度な処理（回転・削除・追記）
                processed_existing_images = []
                if "images" in w_data:
                    for idx, img_obj in enumerate(w_data["images"]):
                        img_id = f"{target_id}_{idx}"
                        edit_state = st.session_state.image_edits.get(img_id, {"rotate": 0, "delete": False})
                        
                        if edit_state["delete"]:
                            continue
                            
                        if edit_state["rotate"] != 0:
                            # 回転が必要な場合はダウンロードして処理
                            with st.spinner(f"画像 {idx+1} を回転処理中..."):
                                try:
                                    import requests
                                    response = requests.get(img_obj["url"])
                                    img = Image.open(io.BytesIO(response.content))
                                    # 反時計回りに指定するため、マイナスをつけるか、360から引く
                                    # PIL の rotate は反時計回り。ユーザー指定の「右回転(時計回り)」に合わせるため
                                    # 90度右回転 = 270度反時計回り
                                    processed_img = img.rotate(-edit_state["rotate"], expand=True)
                                    
                                    # 圧縮してバイト列に
                                    output = io.BytesIO()
                                    processed_img.save(output, format="JPEG", quality=85)
                                    processed_bytes = output.getvalue()
                                    
                                    # 再アップロード
                                    new_img_res = MicroCMSClient.upload_media(processed_bytes, f"rotated_{idx}.jpg", "image/jpeg")
                                    processed_existing_images.append(new_img_res["url"])
                                except Exception as e:
                                    st.error(f"画像 {idx+1} の回転処理に失敗しました: {e}")
                                    processed_existing_images.append(img_obj["url"])
                        else:
                            # 変更なし
                            # 安全に URL を抽出してリストに統一
                            if isinstance(img_obj, dict) and "url" in img_obj:
                                processed_existing_images.append(img_obj["url"])
                            elif isinstance(img_obj, str):
                                processed_existing_images.append(img_obj)

                # 新規アップロード分を処理
                new_images_urls = []
                if uploaded_files:
                    images_res = upload_images(uploaded_files)
                    if images_res is not None:
                        new_images_urls = [img["url"] for img in images_res]
                
                # 最終的な画像リスト（既存残り + 新規追加）
                # 全ての要素が URL 文字列であることを保証する
                final_urls = processed_existing_images + new_images_urls

                # 変更があった場合のみペイロードに含める
                # 既存の画像URLリスト（生データから取得）
                current_urls = []
                for img in w_data.get("images", []):
                    if isinstance(img, dict) and "url" in img:
                        current_urls.append(img["url"])
                    elif isinstance(img, str):
                        current_urls.append(img)
                
                if final_urls != current_urls:
                    final_payload["images"] = final_urls
                
                # もし何も変更がない場合は、最低限IDだけでも送る（またはスキップ可能。ここでは安全のためtitle等を含める検討も）
                if not final_payload:
                    st.info("💡 変更箇所がないため、保存をスキップしました。")
                    return
            else:
                final_payload = full_payload
            
            # デバッグ用: 送信内容を確認
            with st.expander("🔍 送信データの詳細 (デバッグ用)"):
                st.json(final_payload)
                    
            with st.spinner("保存中..."):
                try:
                    start_save = time.time()
                    if is_edit:
                        st.write(f"🔄 差分更新中 (ID: {target_id})...")
                        MicroCMSClient.update_content("works", target_id, final_payload)
                        st.success(f"✅ 更新完了 ({time.time() - start_save:.2f}秒)")
                        # 保存成功後に画像編集状態をクリア
                        st.session_state.image_edits = {}
                    else:
                        st.write("🆕 新規データの作成中...")
                        MicroCMSClient.create_content("works", final_payload)
                        st.success(f"✅ 作成完了 ({time.time() - start_save:.2f}秒)")
                    
                    st.session_state.uploader_key = str(time.time())
                    refresh_data()
                    time.sleep(1)
                    st.rerun()
                except Exception as e:
                    import requests
                    if isinstance(e, requests.exceptions.Timeout):
                        st.error("⌛ 接続タイムアウト: microCMS サーバー側での保存処理が 60 秒以内に終わりませんでした。")
                        st.info("💡 ヒント: 画像単体のアップロードには成功していますが、その後の『ひも付け保存』で時間がかかっています。ブラウザをリロードして、microCMS側で反映されていないか確認してみてください。")
                    elif isinstance(e, requests.exceptions.HTTPError):
                        try:
                            error_detail = e.response.json().get("message", e.response.text)
                        except:
                            error_detail = e.response.text
                        st.error(f"保存に失敗しました (APIエラー): {error_detail}")
                    else:
                        st.error(f"保存に失敗しました: {e}")

# ==========================================
# フォーム4: 生体マスタ
# ==========================================
def render_seitai_form(is_edit=False):
    target_id = None
    default_name = ""
    default_order = 0
    
    form_col = st.container()
    
    if is_edit:
        if not st.session_state.seitai:
            st.warning("登録されている生体がありません。")
            return
            
        st.write("---")
        list_col, form_col = st.columns([1, 2])
        
        with list_col:
            st.subheader("📋 編集する生体を選択")
            
            # orderの降順でソート（未設定の場合は0として扱う）
            sorted_seitai = sorted(
                st.session_state.seitai, 
                key=lambda x: x.get("order", 0) if x.get("order") is not None else 0, 
                reverse=True
            )
            
            s_options = {s["id"]: s for s in sorted_seitai}
            display_options = {s["id"]: s.get("name", "名称未設定") for s in sorted_seitai}
            
            selected_id = st.radio(
                "対象生体", 
                options=list(s_options.keys()), 
                format_func=lambda x: display_options[x],
                key="seitai_selector",
                label_visibility="collapsed"
            )
            
            s_data = s_options[selected_id]
            target_id = s_data["id"]
            default_name = s_data.get("name", "")
            default_order = s_data.get("order", 0)
            
    # 左側リスト(is_edit時のみ)と右側フォームの表示制御
    container = form_col if is_edit else st

    with container.form("seitai_form"):
        st.subheader("📝 生体情報")
        name = st.text_input("生体名 (name) *必須", value=default_name)
        order_input = st.number_input("並び順 (order)", value=default_order if is_edit else 0, step=1)
        
        st.write("---")
        submit = st.form_submit_button("保存する 💾")
        
        if submit:
            if not name:
                st.error("生体名は必須です。")
                return
                
            payload = {
                "name": name,
                "order": order_input
            }
            
            with st.spinner("保存中..."):
                try:
                    if is_edit:
                        MicroCMSClient.update_content("seitai", target_id, payload)
                        st.success("更新しました！")
                    else:
                        MicroCMSClient.create_content("seitai", payload)
                        st.success("新規作成しました！")
                        
                    refresh_data()
                    time.sleep(1)
                    st.rerun()
                except Exception as e:
                    st.error(f"保存に失敗しました: {e}")

# ==========================================
# フォーム5: オプション一括編集
# ==========================================
def render_options_bulk_edit():
    st.subheader("🛠 オプション一括編集")
    
    if not st.session_state.options:
        st.warning("登録されているオプションがありません。")
        return

    # DataFrame用のデータ生成
    df_data = []
    types_list = st.session_state.types
    
    for opt in st.session_state.options:
        # 最初の画像のURLを取得
        img_url = None
        if opt.get("images") and len(opt["images"]) > 0:
            first_img = opt["images"][0]
            if isinstance(first_img, dict) and "url" in first_img:
                img_url = first_img["url"]
            elif isinstance(first_img, str):
                img_url = first_img
                
        row = {
            "削除": False,
            "id": opt["id"],
            "画像": img_url,
            "タイトル": opt.get("name", ""),
            "並び順": opt.get("order", 0),
            "価格": opt.get("price", ""),
        }
        
        # 適用ケージタイプ
        app_list = opt.get("applicableTypes") or []
        app_types = [t["id"] for t in app_list if isinstance(t, dict)]
            
        for ctype in types_list:
            row[ctype["title"]] = ctype["id"] in app_types
            
        df_data.append(row)

    df = pd.DataFrame(df_data)
    
    # DataFrameをorderの昇順でソートしておく（見やすさのため）
    df = df.sort_values("並び順")
    
    # 編集用カラム設定
    column_config = {
        "削除": st.column_config.CheckboxColumn("削除", default=False),
        "id": None, # 非表示
        "画像": st.column_config.ImageColumn("画像", help="登録されている最初の画像"),
        "タイトル": st.column_config.TextColumn("タイトル (*必須)", required=True),
        "並び順": st.column_config.NumberColumn("並び順", step=1),
        "価格": st.column_config.TextColumn("価格"),
    }
    
    # チェックボックス用のカラム設定を生成
    for ctype in types_list:
        column_config[ctype["title"]] = st.column_config.CheckboxColumn(ctype["title"])
        
    st.info("💡 タイトル、並び順、価格、および対象のケージTypeを表から直接編集できます。編集後に下部の「一括保存」ボタンを押してください。")
    
    edited_df = st.data_editor(
        df,
        column_config=column_config,
        disabled=["画像"], # 画像は表示のみ
        hide_index=True,
        use_container_width=True,
        num_rows="fixed" # ここでは行の追加削除はサポートしない
    )
    
    # 保存処理
    if st.button("💾 一括保存する", type="primary"):
        changed_options = []
        deleted_ids = []
        
        for i, row in edited_df.iterrows():
            opt_id = row["id"]
            
            # 削除チェック
            if row["削除"]:
                deleted_ids.append(opt_id)
                continue

            orig_opt = next((o for o in st.session_state.options if o["id"] == opt_id), None)
            if not orig_opt: continue
            
            # 適用タイプの比較準備
            new_app_types = []
            for ctype in types_list:
                if bool(row[ctype["title"]]): # numpy boolからpython boolへ
                    new_app_types.append(ctype["id"])
            
            orig_app_list = orig_opt.get("applicableTypes") or []
            orig_app_types = [t["id"] for t in orig_app_list if isinstance(t, dict)]
            
            new_title = row["タイトル"]
            orig_title = orig_opt.get("name", "")
            
            # order と price の取得（NoneやNaN対策）
            new_order = int(row["並び順"]) if pd.notna(row["並び順"]) else 0
            orig_order = orig_opt.get("order", 0)
            
            new_price = row["価格"] if pd.notna(row["価格"]) else ""
            orig_price = orig_opt.get("price", "")
            if orig_price is None: orig_price = ""
            
            # 差分比較とペイロードの構築
            payload = {}
            if new_title != orig_title:
                payload["name"] = new_title
            if new_order != orig_order:
                payload["order"] = new_order
            if str(new_price) != str(orig_price):
                payload["price"] = str(new_price)
                
            if set(new_app_types) != set(orig_app_types):
                payload["applicableTypes"] = new_app_types
                
            if payload:
                changed_options.append({
                    "id": opt_id,
                    "payload": payload
                })
                
        if len(changed_options) == 0 and len(deleted_ids) == 0:
            st.info("変更されたオプションはありませんでした。")
        else:
            status_text = []
            if changed_options: status_text.append(f"{len(changed_options)}件の更新")
            if deleted_ids: status_text.append(f"{len(deleted_ids)}件の削除")
            
            with st.spinner(f"{'と'.join(status_text)}を実行しています..."):
                try:
                    # 削除の実行
                    for d_id in deleted_ids:
                        MicroCMSClient.delete_content("options", d_id)
                    
                    # 更新の実行
                    for chg in changed_options:
                        current_chg = chg
                        MicroCMSClient.update_content("options", chg["id"], chg["payload"])
                    
                    st.success(f"🎉 {'と'.join(status_text)}が完了しました！")
                    refresh_data()
                    time.sleep(1)
                    st.rerun()
                except Exception as e:
                    import requests
                    error_msg = f"処理に失敗しました: {e}"
                    if isinstance(e, requests.exceptions.HTTPError):
                        try:
                            error_detail = e.response.json().get("message", e.response.text)
                            error_msg = f"APIエラー: {error_detail}"
                        except:
                            pass
                    st.error(error_msg)

# ==========================================
# 画面描画
# ==========================================
is_edit_mode = mode == "既存データの編集"

if target_model == "Cage Types":
    render_types_form(is_edit_mode)
elif target_model == "オプション紹介":
    render_options_form(is_edit_mode)
elif target_model == "オプション一括編集":
    render_options_bulk_edit()
elif target_model == "製作事例":
    render_works_form(is_edit_mode)
elif target_model == "生体マスタ":
    render_seitai_form(is_edit_mode)

st.write("---")
st.caption("Powered by Streamlit & microCMS API")
