/**
 * hazaiya_machining_calculator.js
 * はざいや様向け パネル一括発注リスト（全パネル網羅・加工指示統合版）自動算出モジュール
 * 
 * 基準定義:
 * - A辺=左辺, B辺=上辺, C辺=右辺, D辺=下辺
 * - 角A=左上, 角B=右上, 角C=左下, 角D=右下
 * 
 * 二重発注防止のため、加工が必要なパネル（正面扉、換気板、支え板等）と
 * 加工が不要なパネル（底板、側板、背板、天板等）を1つの統合発注リストとして出力します。
 */

/**
 * パネル素材コードから、はざいや様の発注URLおよび正式素材名称を取得
 */
export function getHazaiyaMaterialInfo(panelCode, partName = '') {
  const code = panelCode || '';
  const name = partName || '';

  if (code === 'acrylic_cast_3_0' || name.includes('キャスト')) {
    return {
      materialName: '透明アクリル キャスト板 3.0mm (または コモグラス押出)',
      hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate/board/3316',
      hazaiyaExtrusionUrl: 'https://www.hazaiya.co.jp/estimate/board/3302',
      thicknessMm: 3.0,
      isHazaiyaOrder: true
    };
  }
  if (code === 'acrylic_extrusion_3_0' || (name.includes('透明アクリル 3.0mm') && !name.includes('キャスト'))) {
    return {
      materialName: '透明アクリル 押出板 3.0mm',
      hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate/board/3303',
      thicknessMm: 3.0,
      isHazaiyaOrder: true
    };
  }
  if (code === 'acrylic_extrusion_2_0' || name.includes('2.0mm')) {
    return {
      materialName: '透明アクリル 押出板 2.0mm',
      hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate/board/3303',
      thicknessMm: 2.0,
      isHazaiyaOrder: true
    };
  }
  if (code === 'acrylic_extrusion_1_5' || name.includes('1.5mm')) {
    return {
      materialName: '透明アクリル 押出板 1.5mm',
      hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate/board/3303',
      thicknessMm: 1.5,
      isHazaiyaOrder: true
    };
  }
  if (code === 'pvc_punching_3_0' || name.includes('塩ビパンチング')) {
    return {
      materialName: '塩ビ透明パンチングボード (φ3.1-P7, 3.0mm厚)',
      hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate/board/4018',
      thicknessMm: 3.0,
      isHazaiyaOrder: true
    };
  }
  if (code === 'acrylic_black_matte_3_0' || name.includes('黒両面マット')) {
    return {
      materialName: 'アクリル黒両面マット 3.0mm',
      hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate/board/3468',
      thicknessMm: 3.0,
      isHazaiyaOrder: true
    };
  }
  if (code === 'acrylic_smoke_gray_3_0' || name.includes('グレースモーク')) {
    return {
      materialName: 'アクリル グレースモーク半透明 3.0mm (コモグラス 530K)',
      hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate/board/3356',
      thicknessMm: 3.0,
      isHazaiyaOrder: true
    };
  }
  if (code === 'danplate_4_0' || name.includes('プラダン')) {
    return {
      materialName: '緩衝プラダン 4.0mm (市販品・別手配)',
      hazaiyaUrl: '※ホームセンター等にて市販品を手配（直線カットのみ）',
      thicknessMm: 4.0,
      isHazaiyaOrder: false
    };
  }
  if (code === 'polyca_4_0' || name.includes('中空ポリカ')) {
    return {
      materialName: 'ツインカーボ（中空ポリカーボネート） 4.0mm',
      hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate/board/3303', // 代替
      thicknessMm: 4.0,
      isHazaiyaOrder: true
    };
  }

  return {
    materialName: name || 'アクリル板',
    hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate',
    thicknessMm: 3.0,
    isHazaiyaOrder: true
  };
}

/**
 * ケージ部材リストおよび設定状態から、はざいや発注用の全パネル統合リストを算出
 * （加工が必要なパネルには加工寸法・座標、加工不要なパネルには直線カットのみを付与）
 * @param {Array} parts BOM部材リスト
 * @param {Object} state ケージ設定パラメータ
 * @returns {Array<Object>} 全パネル発注オブジェクトの配列
 */
export function calculateHazaiyaPanelOrderList(parts, state) {
  if (!parts || !Array.isArray(parts)) return [];

  const W = Number(state.W || 540);
  const D = Number(state.D || 400);
  const H = Number(state.H || 400);
  const cageType = state.cageType || 'A';
  const hasDoorAntiFlex = !!state.hasDoorAntiFlex;
  const frontWideFrame = state.frontWideFrame || '2x';
  const frontWindowH = Number(state.frontWindowH || 100);

  // パネルカテゴリの部材のみを抽出
  const panelParts = parts.filter(p => p.category === 'panel');
  const resultList = [];

  for (const part of panelParts) {
    const name = part.name || '';
    const matInfo = getHazaiyaMaterialInfo(part.panelCode || part.partCode, name);

    // 寸法の解析
    let wMm = part.widthMm;
    let hMm = part.heightMm;
    if ((!wMm || !hMm) && part.size) {
      const match = part.size.match(/([\d.]+)\s*[x×]\s*([\d.]+)/);
      if (match) {
        wMm = parseFloat(match[1]);
        hMm = parseFloat(match[2]);
      }
    }
    wMm = Math.round((wMm || 0) * 10) / 10;
    hMm = Math.round((hMm || 0) * 10) / 10;

    // ---------------------------------------------------------------
    // 1. 正面扉（スライド扉） - 加工あり
    // ---------------------------------------------------------------
    if ((cageType === 'A' || cageType === 'C') && (name.includes('スライド扉') || (name.includes('扉') && !name.includes('前開き')))) {
      const halfH = Math.round((hMm / 2) * 10) / 10;
      const isCast = state.frontDoorMaterial === 'cast';

      resultList.push({
        key: 'front_slide_doors',
        title: `${name}（2枚構成・同一加工）`,
        materialName: isCast ? '透明アクリル キャスト板 3.0mm' : 'アクリル押出-コモグラス 3.0mm',
        doorMaterialType: isCast ? 'cast' : 'extrusion',
        hazaiyaUrl: isCast ? 'https://www.hazaiya.co.jp/estimate/board/3316' : 'https://www.hazaiya.co.jp/estimate/board/3302',
        hazaiyaExtrusionUrl: 'https://www.hazaiya.co.jp/estimate/board/3302',
        hazaiyaCastUrl: 'https://www.hazaiya.co.jp/estimate/board/3316',
        widthMm: wMm,
        heightMm: hMm,
        thicknessMm: 3.0,
        quantity: part.count || 2,
        needsMachining: true,
        edgeFinishing: 'ABCD全4辺「磨き仕上げ」',
        holes: [
          {
            desc: '引き手ノブ穴 (段付きローレットノブ用)',
            corner: 'C',
            x: 15.0,
            y: halfH,
            base: `A辺(左)より15.0mm / D辺(下)より${halfH.toFixed(1)}mm (高さ寸法の1/2)`,
            diameterMm: 4.1,
            taperMm: 0
          },
          {
            desc: 'プッシュ式スライド錠穴 (C-108用)',
            corner: 'D',
            x: 15.5,
            y: 25.0,
            base: '角D(右下)より左方向へ15.5mm / 上方向へ25.0mm',
            diameterMm: 10.5,
            taperMm: 0
          }
        ],
        corners: [],
        notches: [],
        notes: '【★加工あり】2枚同一仕様で発注（1枚を裏返して使用）。はざいや加工数量割引適用'
      });
      continue;
    }

    // ---------------------------------------------------------------
    // 2. 正面扉（前開き扉） - 加工あり
    // ---------------------------------------------------------------
    if (name.includes('前開き') && name.includes('扉')) {
      const isRightHinge = (state.doorHingeSide === 'right');
      const lowerFeatureY = Math.round((hMm * 1 / 4) * 10) / 10;
      const upperFeatureY = Math.round((hMm * 3 / 4) * 10) / 10;

      resultList.push({
        key: 'front_open_door',
        title: `${name}（${isRightHinge ? '右ヒンジ左打掛' : '左ヒンジ右打掛'}）`,
        materialName: matInfo.materialName,
        hazaiyaUrl: matInfo.hazaiyaUrl,
        widthMm: wMm,
        heightMm: hMm,
        thicknessMm: 3.0,
        quantity: 1,
        needsMachining: true,
        edgeFinishing: 'ABCD全4辺「磨き仕上げ」',
        corners: [
          { desc: '4隅角丸', spec: '角A, 角B, 角C, 角D すべて R10 (10.0mm角丸)' }
        ],
        notches: [
          {
            desc: isRightHinge ? 'A辺(左・打掛受側) 切欠き2箇所' : 'C辺(右・打掛受側) 切欠き2箇所',
            spec: `下側(D辺より${lowerFeatureY}mm中心) & 上側(D辺より${upperFeatureY}mm中心): 各 幅19.0mm x 高さ52.0mm`
          }
        ],
        holes: [
          {
            desc: 'TH-31蝶番固定用穴 (4箇所)',
            base: `${isRightHinge ? 'C辺(右)' : 'A辺(左)'}端より11.25mm / 各ヒンジ中心より dy=-8.5mm, +17.0mm`,
            diameterMm: 3.5,
            taperMm: 0
          },
          {
            desc: 'C-1249-4打掛固定用穴 (4箇所)',
            base: `${isRightHinge ? 'A辺(左)' : 'C辺(右)'}端より9.7mm / 各打掛中心より dy=-15.0mm, +15.0mm`,
            diameterMm: 3.5,
            taperMm: 0
          }
        ],
        notes: '【★加工あり】4隅R10角丸 / 切欠き2箇所 / 蝶番・打掛固定穴計8箇所'
      });
      continue;
    }

    // ---------------------------------------------------------------
    // 3. 前開き扉スペーサー座板（ヒンジ座板・ロック受座板） - 加工あり
    // ---------------------------------------------------------------
    if (name.includes('ヒンジ座板')) {
      resultList.push({
        key: 'hinge_spacer',
        title: name,
        materialName: matInfo.materialName,
        hazaiyaUrl: matInfo.hazaiyaUrl,
        widthMm: wMm || 16.0,
        heightMm: hMm || 52.0,
        thicknessMm: 3.0,
        quantity: part.count || 2,
        needsMachining: true,
        edgeFinishing: '仕上げなし（ノコカット）',
        holes: [
          { desc: '蝶番フレーム固定穴', base: '幅中心(8mm) / 上下中心より dy=-17.0mm, +8.5mm', diameterMm: 3.5, taperMm: 0 }
        ],
        corners: [],
        notches: [],
        notes: '【★加工あり】前開き扉蝶番フレーム取付スペーサー（フレーム溝固定用・2枚）'
      });
      continue;
    }

    if (name.includes('ロック受座板')) {
      resultList.push({
        key: 'lock_spacer',
        title: name,
        materialName: matInfo.materialName,
        hazaiyaUrl: matInfo.hazaiyaUrl,
        widthMm: wMm || 16.0,
        heightMm: hMm || 48.0,
        thicknessMm: 3.0,
        quantity: part.count || 2,
        needsMachining: true,
        edgeFinishing: '仕上げなし（ノコカット）',
        holes: [
          { desc: '打掛受具フレーム固定穴', base: '幅中心(8mm) / 上下中心より dy=-15.0mm, +15.0mm', diameterMm: 3.5, taperMm: 0 }
        ],
        corners: [],
        notches: [],
        notes: '【★加工あり】前開き扉打掛受具フレーム取付スペーサー（フレーム溝固定用・2枚）'
      });
      continue;
    }

    // ---------------------------------------------------------------
    // 4. 側面換気量調整板 - 加工あり
    // ---------------------------------------------------------------
    if (name.includes('側面換気量調整板') || name.includes('換気量調整板')) {
      let ventW = wMm;
      let ventH = hMm;
      // 横（奥行き方向・長手）が縦（高さ方向・短手）より小さくなっている場合は確実にスワップして正規化
      if (ventW < ventH) {
        const tmp = ventW;
        ventW = ventH;
        ventH = tmp;
      }
      resultList.push({
        key: 'side_vent_cover',
        title: name,
        materialName: matInfo.materialName,
        hazaiyaUrl: matInfo.hazaiyaUrl,
        widthMm: ventW,
        heightMm: ventH,
        thicknessMm: 1.5,
        quantity: part.count || 2,
        needsMachining: true,
        edgeFinishing: '仕上げなし（ノコカット）',
        holes: [
          { desc: '角A側', base: 'A辺(左)より9.0mm / B辺(上)より40.0mm', diameterMm: 6.0, taperMm: 0 },
          { desc: '角B側', base: 'C辺(右)より9.0mm / B辺(上)より40.0mm', diameterMm: 6.0, taperMm: 0 },
          { desc: '角C側', base: 'A辺(左)より9.0mm / D辺(下)より40.0mm', diameterMm: 6.0, taperMm: 0 },
          { desc: '角D側', base: 'C辺(右)より9.0mm / D辺(下)より40.0mm', diameterMm: 6.0, taperMm: 0 },
        ],
        corners: [],
        notches: [],
        notes: `【★加工あり】1枚あたりφ6.0mm丸穴4箇所 (計${(part.count || 2) * 4}穴) / No.1化粧つまみネジ固定用`
      });
      continue;
    }

    // ---------------------------------------------------------------
    // 5. 床下パネルヒータ支え板 - 加工あり
    // ---------------------------------------------------------------
    if (name.includes('床下パネルヒータ支え板') && !name.includes('プラダン')) {
      const is2Panel = part.count === 2 || (part.note && part.note.includes('2枚'));

      if (is2Panel) {
        const notchLength = Math.max(10, hMm - 180);
        resultList.push({
          key: 'floor_heater_support_2',
          title: `${name}（2枚構成・床補強あり）`,
          materialName: matInfo.materialName,
          hazaiyaUrl: matInfo.hazaiyaUrl,
          widthMm: wMm,
          heightMm: hMm,
          thicknessMm: 2.0,
          quantity: 2,
          needsMachining: true,
          edgeFinishing: '仕上げなし（ノコカット）',
          corners: [
            { desc: '外側角A(左上)斜めカット', corner: 'A', type: 'bevel', sizeX: 80.0, sizeY: 80.0, spec: '80.0 x 80.0 mm 斜めカット' },
            { desc: '外側角C(左下)斜めカット', corner: 'C', type: 'bevel', sizeX: 80.0, sizeY: 80.0, spec: '80.0 x 80.0 mm 斜めカット' },
          ],
          notches: [
            { desc: '角D(右下)配線逃がし切欠き', corner: 'D', type: 'corner_notch', sizeX: 20.0, sizeY: notchLength, spec: `幅20.0mm x 長さ${notchLength.toFixed(1)}mm 角落とし` }
          ],
          holes: [
            { desc: '角A斜め脇 奥', corner: 'A', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'B辺(上)より9.0mm / A辺(左)より90.0mm' },
            { desc: '角A斜め脇 左', corner: 'A', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'A辺(左)より9.0mm / B辺(上)より90.0mm' },
            { desc: '角C斜め脇 手前', corner: 'C', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'D辺(下)より9.0mm / A辺(左)より90.0mm' },
            { desc: '角C斜め脇 左', corner: 'C', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'A辺(左)より9.0mm / D辺(下)より90.0mm' },
            { desc: '中央フレーム溝部', corner: 'B', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'C辺(右)より9.0mm / B辺(上)より90.0mm' },
            { desc: '奥フレーム固定', corner: 'B', x: 80.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'B辺(上)より9.0mm / C辺(右)より80.0mm' },
            { desc: '手前フレーム固定', corner: 'D', x: 80.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'D辺(下)より9.0mm / C辺(右)より80.0mm' },
          ],
          notes: '【★加工あり】2枚互い違い(180度反転)配置。1枚あたりφ6.0mm丸穴7箇所・斜めカット2箇所・切欠き1箇所'
        });
      } else {
        const halfW = Math.round(wMm / 2 * 10) / 10;
        resultList.push({
          key: 'floor_heater_support_1',
          title: `${name}（1枚構成・通常床面）`,
          materialName: matInfo.materialName,
          hazaiyaUrl: matInfo.hazaiyaUrl,
          widthMm: wMm,
          heightMm: hMm,
          thicknessMm: 2.0,
          quantity: 1,
          needsMachining: true,
          edgeFinishing: '仕上げなし（ノコカット）',
          corners: [
            { desc: '角A(左上)斜めカット', corner: 'A', type: 'bevel', sizeX: 80.0, sizeY: 80.0, spec: '80.0 x 80.0 mm 斜めカット' },
            { desc: '角B(右上)斜めカット', corner: 'B', type: 'bevel', sizeX: 80.0, sizeY: 80.0, spec: '80.0 x 80.0 mm 斜めカット' },
            { desc: '角C(左下)斜めカット', corner: 'C', type: 'bevel', sizeX: 80.0, sizeY: 80.0, spec: '80.0 x 80.0 mm 斜めカット' },
            { desc: '角D(右下)斜めカット', corner: 'D', type: 'bevel', sizeX: 80.0, sizeY: 80.0, spec: '80.0 x 80.0 mm 斜めカット' },
          ],
          notches: [],
          holes: [
            // 奥・手前の長辺中央 (X = W/2, Y = 9mm)
            { desc: '奥フレーム長辺中央', corner: 'A', x: halfW, y: 9.0, diameterMm: 6.0, taperMm: 0, base: `B辺(上)より9.0mm / 角A(左)より${halfW}mm (中央)` },
            { desc: '手前フレーム長辺中央', corner: 'C', x: halfW, y: 9.0, diameterMm: 6.0, taperMm: 0, base: `D辺(下)より9.0mm / 角C(左)より${halfW}mm (中央)` },
            // 角A斜め脇 (2箇所)
            { desc: '角A斜め脇 奥', corner: 'A', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'B辺(上)より9.0mm / A辺(左)より90.0mm' },
            { desc: '角A斜め脇 左', corner: 'A', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'A辺(左)より9.0mm / B辺(上)より90.0mm' },
            // 角B斜め脇 (2箇所)
            { desc: '角B斜め脇 奥', corner: 'B', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'B辺(上)より9.0mm / C辺(右)より90.0mm' },
            { desc: '角B斜め脇 右', corner: 'B', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'C辺(右)より9.0mm / B辺(上)より90.0mm' },
            // 角C斜め脇 (2箇所)
            { desc: '角C斜め脇 手前', corner: 'C', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'D辺(下)より9.0mm / A辺(左)より90.0mm' },
            { desc: '角C斜め脇 左', corner: 'C', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'A辺(左)より9.0mm / D辺(下)より90.0mm' },
            // 角D斜め脇 (2箇所)
            { desc: '角D斜め脇 手前', corner: 'D', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'D辺(下)より9.0mm / C辺(右)より90.0mm' },
            { desc: '角D斜め脇 右', corner: 'D', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'C辺(右)より9.0mm / D辺(下)より90.0mm' },
          ],
          notes: '【★加工あり】4隅80x80mm斜めカット / φ6.0mm丸穴10箇所 (端から9mm溝位置)'
        });
      }
      continue;
    }

    // ---------------------------------------------------------------
    // 6. 加工が不要な一般パネル（底板、側板、背板、天板、プラダン等） - 切断のみ
    // ---------------------------------------------------------------
    resultList.push({
      key: `standard_panel_${resultList.length}`,
      title: name,
      materialName: matInfo.materialName,
      hazaiyaUrl: matInfo.hazaiyaUrl,
      widthMm: wMm,
      heightMm: hMm,
      thicknessMm: matInfo.thicknessMm,
      quantity: part.count || 1,
      needsMachining: false,
      edgeFinishing: '仕上げなし（ノコカット）',
      holes: [],
      corners: [],
      notches: [],
      notes: `${part.note || '直線カットのみ'} / 【切断のみ (加工なし)】`
    });
  }

  return resultList;
}

/**
 * はざいや様向け全パネル発注リストをクリップボードコピー用の日本語テキストに変換
 * @param {Array<Object>} panelList calculateHazaiyaPanelOrderList の戻り値
 * @param {Object} state ケージ設定パラメータ
 * @returns {string} フォーマット済みテキスト
 */
export function formatHazaiyaPanelOrderClipboardText(panelList, state = {}) {
  if (!panelList || panelList.length === 0) {
    return '【はざいや発注リスト】対象のパネル部材はありません。';
  }

  const lines = [];
  const totalQuantity = panelList.reduce((acc, p) => acc + (p.quantity || 1), 0);
  const machiningCount = panelList.filter(p => p.needsMachining).length;

  lines.push('================================================================');
  lines.push('【アクリルショップ はざいや様向け パネル一括発注リスト（全パネル網羅版）】');
  if (state.W && state.D && state.H) {
    lines.push(`対象ケージ: W${state.W} x D${state.D} x H${state.H} mm (Type ${state.cageType || 'A'})`);
  }
  lines.push(`発注品目数: ${panelList.length} 品目 (合計枚数: ${totalQuantity} 枚 / うち加工あり: ${machiningCount} 品目)`);
  lines.push('※ 2重発注防止のため、本リストを上から順に1回だけカートへ追加してください。');
  lines.push('※ 基準: A辺=左辺, B辺=上辺, C辺=右辺, D辺=下辺 / 角A=左上, 角B=右上, 角C=左下, 角D=右下');
  lines.push('================================================================\n');

  panelList.forEach((item, idx) => {
    const statusTag = item.needsMachining ? '【★加工あり】' : '【切断のみ (加工なし)】';
    lines.push(`■ [${idx + 1}/${panelList.length}] ${item.title}  ${statusTag}`);
    lines.push(`・素材: ${item.materialName}`);
    lines.push(`・発注URL: ${item.hazaiyaUrl}`);
    lines.push(`・仕上がり寸法: ヨコ ${item.widthMm} mm x タテ ${item.heightMm} mm (厚み ${item.thicknessMm} mm)`);
    lines.push(`・発注数量: ${item.quantity} 枚`);
    lines.push(`・切断面仕上げ: ${item.edgeFinishing}`);

    if (item.needsMachining) {
      if (item.corners && item.corners.length > 0) {
        lines.push('・コーナー加工:');
        item.corners.forEach(c => {
          const specText = c.spec || (c.sizeX && c.sizeY ? `${c.sizeX} x ${c.sizeY} mm 斜めカット` : '指定あり');
          lines.push(`   - ${c.desc}: ${specText}`);
        });
      }

      if (item.notches && item.notches.length > 0) {
        lines.push('・切欠き加工:');
        item.notches.forEach(n => {
          const specText = n.spec || (n.sizeX && n.sizeY ? `幅${n.sizeX}mm x 長さ${n.sizeY}mm` : '指定あり');
          lines.push(`   - ${n.desc}: ${specText}`);
        });
      }

      if (item.holes && item.holes.length > 0) {
        lines.push('・穴あけ加工:');
        item.holes.forEach((h, hIdx) => {
          const baseText = h.base || (h.corner ? `角${h.corner}基準 (X:${h.x}mm, Y:${h.y}mm)` : '図面指定');
          lines.push(`   (${hIdx + 1}) [${h.desc}] 基準: ${baseText} ➜ 直径 φ${h.diameterMm} mm (テーパー深さ ${h.taperMm || 0} mm)`);
        });
      }
    }

    if (item.notes) {
      lines.push(`・備考: ${item.notes}`);
    }
    lines.push('----------------------------------------------------------------\n');
  });

  return lines.join('\n');
}

/**
 * 既存の後方互換用エイリアス
 */
export const calculateHazaiyaMachiningSpecs = calculateHazaiyaPanelOrderList;
export const formatHazaiyaMachiningClipboardText = formatHazaiyaPanelOrderClipboardText;
