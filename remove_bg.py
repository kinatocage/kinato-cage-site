import sys
from PIL import Image
import colorsys

def apply_chromakey(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
    except Exception as e:
        print(f"Error opening image: {e}")
        return

    data = img.get_flattened_data() if hasattr(img, 'get_flattened_data') else img.getdata()
    
    new_data = []
    # ユーザーが提供したグリーンバック画像のパス
    for item in data:
        r, g, b, a = item
        # RGBをHSVに変換
        h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
        
        # 緑色に近いかを色相(h)、彩度(s)、明度(v)で判定
        # 緑はHが0.18〜0.45(およそ65度〜160度)の範囲、適度に明るく鮮やかなもの
        if 0.18 < h < 0.45 and s > 0.2 and v > 0.15:
            # 完全に透過
            new_data.append((255, 255, 255, 0))
        else:
            # フリンジ（エッジに緑色が被る現象）を低減
            if 0.15 < h < 0.5:
                # 緑が強い場合は、RとBの平均値程度に抑える
                g_new = int(min(g, (r + b) / 2))
                new_data.append((r, g_new, b, a))
            else:
                new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved chromakeyed image to {output_path}")

if len(sys.argv) > 1:
    img_path = sys.argv[1]
else:
    img_path = r"c:\Users\owner\OneDrive\Desktop\Web\public\assets\characters\Gemini_Generated_Image_rhw0c8rhw0c8rhw0.png"

apply_chromakey(img_path, img_path)
