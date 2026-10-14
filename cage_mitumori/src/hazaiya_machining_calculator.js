/**
 * hazaiya_machining_calculator.js
 * はざいや様向け パネル一括発注リスト（全パネル網羅・加工指示統合版）＆ ミスミ金網自動連携モジュール
 * 
 * 基準定義:
 * - A辺=左辺, B辺=上辺, C辺=右辺, D辺=下辺
 * - 角A=左上, 角B=右上, 角C=左下, 角D=右下
 * 
 * 二重発注防止のため、加工が必要なパネル（正面扉、換気板、支え板等）と
 * 加工が不要なパネル（底板、側板、背板、天板等）をはざいや様向けリストとしてまとめ、
 * 仕入れ先が異なる金網（ミスミ様）は別セクションとして発注URL・数量・発注金額を出力します。
 */

import { materialsConfig } from '../cost_materials_config.js';
import { getFenpCost } from '../fenp_price_config.js';
import { getPvcPunchingCost } from '../pvc_punching_price_config.js';
import { getAcrylicExtrusionCost } from '../acrylic_extrusion_price_config.js';
import { getAcrylicBlackMatteCost } from '../acrylic_black_matte_price_config.js';
import { getAcrylicSmokeGrayCost } from '../acrylic_smoke_gray_price_config.js';
import { getAcrylicCastCost, getAcrylicCastRawBoardCost } from '../acrylic_cast_price_config.js';

/**
 * パネル素材コードから、はざいや様の発注URLおよび正式素材名称を取得
 */
export function getHazaiyaMaterialInfo(panelCode, partName = '') {
  const code = panelCode || '';
  const name = partName || '';

  // 金網（ミスミ仕入れ・別手配）
  if (code.startsWith('wire_mesh_') || name.includes('金網')) {
    const pMatch = code.match(/wire_mesh_(\d+)/) || name.match(/金網\s*(\d+)mm/);
    const pitch = pMatch ? parseInt(pMatch[1], 10) : 25;
    return {
      materialName: `金網 ${pitch}mmピッチ (黒粉体塗装 / 線径φ3.2, SS400)`,
      hazaiyaUrl: '',
      thicknessMm: 3.2,
      isHazaiyaOrder: false,
      isWireMesh: true,
      pitch: pitch
    };
  }

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
      hazaiyaUrl: 'https://www.hazaiya.co.jp/estimate/board/3303',
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
 * 金網（ミスミ仕入れ）の型番・発注URL・寸法・数量・金額情報を抽出
 */
export function getWireMeshMisumiInfo(part) {
  const code = part.panelCode || part.partCode || '';
  const name = part.name || '';
  let pitch = 25;
  const pMatch = code.match(/wire_mesh_(\d+)/) || name.match(/金網\s*(\d+)mm/);
  if (pMatch) {
    pitch = parseInt(pMatch[1], 10);
  }

  let wMm = part.widthMm;
  let hMm = part.heightMm;
  if ((!wMm || !hMm) && part.size) {
    const match = part.size.match(/([\d.]+)\s*[x×]\s*([\d.]+)/);
    if (match) {
      wMm = parseFloat(match[1]);
      hMm = parseFloat(match[2]);
    }
  }
  wMm = Math.round(wMm || 0);
  hMm = Math.round(hMm || 0);

  let modelNumber = '';
  const modelMatch = name.match(/FENP\d+-A\d+-B\d+/);
  if (modelMatch) {
    modelNumber = modelMatch[0];
  } else {
    modelNumber = `FENP${pitch}-A${wMm}-B${hMm}`;
  }

  const misumiUrl = `https://jp.misumi-ec.com/vona2/result/?Keyword=${modelNumber}`;
  const cost = getFenpCost(pitch, wMm, hMm) || 0;
  const count = part.count || 1;
  const totalCost = cost * count;

  return {
    pitch,
    widthMm: wMm,
    heightMm: hMm,
    modelNumber,
    misumiUrl,
    quantity: count,
    cost,
    totalCost
  };
}

/**
 * パネル部材の原価を計算（はざいや加工費込）
 */
function calculatePanelCost(part, wMm, hMm) {
  const code = part.panelCode || part.partCode || '';
  const config = materialsConfig?.panels?.[code] || {};
  const areaM2 = (wMm / 1000) * (hMm / 1000);
  let singleCost = 0;

  if (code.startsWith('wire_mesh_') || (part.name && part.name.includes('金網'))) {
    const pMatch = code.match(/wire_mesh_(\d+)/) || (part.name && part.name.match(/金網\s*(\d+)mm/));
    const pitch = pMatch ? parseInt(pMatch[1], 10) : 25;
    const fenpCost = getFenpCost(pitch, wMm, hMm);
    singleCost = fenpCost != null ? fenpCost : Math.round((config.pricePerM2 || 25627) * areaM2);
  } else if (code === 'acrylic_extrusion_2_0') {
    singleCost = getAcrylicExtrusionCost(2.0, wMm, hMm) || Math.round((config.pricePerM2 || 4000) * areaM2);
  } else if (code === 'acrylic_extrusion_3_0') {
    singleCost = getAcrylicExtrusionCost(3.0, wMm, hMm) || Math.round((config.pricePerM2 || 5000) * areaM2);
  } else if (code === 'acrylic_extrusion_1_5') {
    singleCost = getAcrylicExtrusionCost(1.5, wMm, hMm) || Math.round((config.pricePerM2 || 3500) * areaM2);
  } else if (code === 'acrylic_black_matte_3_0') {
    singleCost = getAcrylicBlackMatteCost(wMm, hMm) || Math.round((config.pricePerM2 || 6000) * areaM2);
  } else if (code === 'acrylic_smoke_gray_3_0') {
    singleCost = getAcrylicSmokeGrayCost(wMm, hMm) || Math.round((config.pricePerM2 || 6500) * areaM2);
  } else if (code === 'acrylic_cast_3_0') {
    const isDoor = part.name && part.name.includes('扉');
    singleCost = isDoor ? (getAcrylicCastCost(wMm, hMm) || 3800) : (getAcrylicCastRawBoardCost(wMm, hMm) || 2800);
  } else if (code === 'pvc_punching_3_0') {
    singleCost = getPvcPunchingCost(wMm, hMm) || Math.round((config.pricePerM2 || 12000) * areaM2);
  } else {
    singleCost = Math.round((config.pricePerM2 || 5000) * areaM2);
  }

  // 加工費加算
  if (part.name && part.name.includes('換気量調整板')) {
    const holeUnit = materialsConfig?.options?.items?.sideVentCover?.holeCostPerPiece ?? 94;
    const holesPerPanel = materialsConfig?.options?.items?.sideVentCover?.holesPerPanel ?? 4;
    singleCost += (holesPerPanel * holeUnit);
  }
  if (part.name && part.name.includes('床下パネルヒータ支え板')) {
    const fhConfig = materialsConfig?.options?.items?.floorHeaterSupport || {};
    const holeUnit = fhConfig.holeCostPerPiece ?? 112;
    const diagUnit = fhConfig.diagonalCutCost ?? 239;
    const cornerUnit = fhConfig.cornerCutCost ?? 587;
    const is2Panel = part.count === 2 || (part.note && part.note.includes('2枚'));
    if (is2Panel) {
      singleCost += (7 * holeUnit) + (2 * diagUnit) + (1 * cornerUnit);
    } else {
      singleCost += (10 * holeUnit) + (4 * diagUnit);
    }
  }

  const count = part.count || 1;
  const totalCost = singleCost * count;
  return { singleCost, totalCost };
}

/**
 * ケージ部材リストおよび設定状態から、はざいや発注用の全パネル統合リストを算出
 * （金網はミスミ仕入れのため分離し、wireMeshListとして保持）
 * @param {Array} parts BOM部材リスト
 * @param {Object} state ケージ設定パラメータ
 * @returns {Array<Object>} 全パネル発注オブジェクトの配列（拡張プロパティ付）
 */
export function calculateHazaiyaPanelOrderList(parts, state = {}) {
  if (!parts || !Array.isArray(parts)) return [];

  const cageType = state.cageType || 'A';
  const hasDoorAntiFlex = !!state.hasDoorAntiFlex;
  const frontWideFrame = state.frontWideFrame || '2x';
  const frontWindowH = Number(state.frontWindowH || 100);

  // パネルカテゴリの部材のみを抽出
  const panelParts = parts.filter(p => p.category === 'panel');
  const resultList = [];
  const wireMeshList = [];

  let hazaiyaCostSum = 0;
  let misumiCostSum = 0;

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

    // 金額の算出
    const { singleCost, totalCost } = calculatePanelCost(part, wMm, hMm);

    // ---------------------------------------------------------------
    // 0. 金網（ミスミ仕入れ・別手配）
    // ---------------------------------------------------------------
    if (matInfo.isWireMesh || (part.panelCode && part.panelCode.startsWith('wire_mesh_')) || name.includes('金網')) {
      const meshInfo = getWireMeshMisumiInfo(part);
      misumiCostSum += (meshInfo.totalCost || totalCost);
      wireMeshList.push({
        key: `wire_mesh_${wireMeshList.length}`,
        title: `金網 ${meshInfo.pitch}mmピッチ（黒粉体塗装）`,
        materialName: matInfo.materialName,
        modelNumber: meshInfo.modelNumber,
        misumiUrl: meshInfo.misumiUrl,
        widthMm: meshInfo.widthMm,
        heightMm: meshInfo.heightMm,
        pitch: meshInfo.pitch,
        quantity: meshInfo.quantity,
        cost: meshInfo.cost,
        totalCost: meshInfo.totalCost,
        isWireMesh: true,
        notes: 'ミスミ様手配品 (線径φ3.2, SS400ポリエチレン樹脂粉体黒塗装)'
      });
      continue;
    }

    // はざいや対象品の原価加算（プラダン市販品を除く）
    if (matInfo.isHazaiyaOrder) {
      hazaiyaCostSum += totalCost;
    }

    // ---------------------------------------------------------------
    // 1. 正面扉（スライド扉） - 加工あり
    // ---------------------------------------------------------------
    if ((cageType === 'A' || cageType === 'C' || cageType === 'A_FRAMED' || cageType === 'C_FRAMED') &&
        (name.includes('スライド扉') || (name.includes('扉') && !name.includes('前開き')))) {
      const halfH = Math.round((hMm / 2) * 10) / 10;
      const isCast = state.frontDoorMaterial === 'cast' || name.includes('キャスト');

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
        cost: singleCost,
        totalCost: totalCost,
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
        thicknessMm: matInfo.thicknessMm,
        quantity: part.count || 1,
        cost: singleCost,
        totalCost: totalCost,
        needsMachining: true,
        edgeFinishing: 'ABCD全4辺「磨き仕上げ」',
        holes: [
          // ヒンジ側 (2箇所)
          {
            desc: 'ヒンジ上側固定穴 (M4皿ビス用)',
            corner: isRightHinge ? 'B' : 'A',
            x: 10.0,
            y: upperFeatureY,
            base: `${isRightHinge ? 'C辺(右)' : 'A辺(左)'}より10.0mm / D辺(下)より${upperFeatureY}mm`,
            diameterMm: 4.5,
            taperMm: 1.5
          },
          {
            desc: 'ヒンジ下側固定穴 (M4皿ビス用)',
            corner: isRightHinge ? 'D' : 'C',
            x: 10.0,
            y: lowerFeatureY,
            base: `${isRightHinge ? 'C辺(右)' : 'A辺(左)'}より10.0mm / D辺(下)より${lowerFeatureY}mm`,
            diameterMm: 4.5,
            taperMm: 1.5
          },
          // ロック受座側 (2箇所)
          {
            desc: '打掛受座上側穴 (M4皿ビス用)',
            corner: isRightHinge ? 'A' : 'B',
            x: 10.0,
            y: upperFeatureY,
            base: `${isRightHinge ? 'A辺(左)' : 'C辺(右)'}より10.0mm / D辺(下)より${upperFeatureY}mm`,
            diameterMm: 4.5,
            taperMm: 1.5
          },
          {
            desc: '打掛受座下側穴 (M4皿ビス用)',
            corner: isRightHinge ? 'C' : 'D',
            x: 10.0,
            y: lowerFeatureY,
            base: `${isRightHinge ? 'A辺(左)' : 'C辺(右)'}より10.0mm / D辺(下)より${lowerFeatureY}mm`,
            diameterMm: 4.5,
            taperMm: 1.5
          }
        ],
        corners: [],
        notches: [],
        notes: `【★加工あり】前開き扉用 φ4.5皿穴4箇所加工 (${isRightHinge ? '右側' : '左側'}ヒンジ)`
      });
      continue;
    }

    // ---------------------------------------------------------------
    // 3. 側面換気量調整板 - 加工あり
    // ---------------------------------------------------------------
    if (name.includes('換気量調整板')) {
      const holeOffsetA = 12.0;
      const holeOffsetC = Math.round((wMm - 12.0) * 10) / 10;
      const holeOffsetTop = 15.0;
      const holeOffsetBottom = Math.round((hMm - 15.0) * 10) / 10;

      resultList.push({
        key: `side_vent_cover_${resultList.length}`,
        title: name,
        materialName: matInfo.materialName,
        hazaiyaUrl: matInfo.hazaiyaUrl,
        widthMm: wMm,
        heightMm: hMm,
        thicknessMm: matInfo.thicknessMm,
        quantity: part.count || 2,
        cost: singleCost,
        totalCost: totalCost,
        needsMachining: true,
        edgeFinishing: '仕上げなし（ノコカット）',
        holes: [
          { desc: '固定穴 左上', corner: 'A', x: holeOffsetA, y: holeOffsetTop, diameterMm: 6.0, taperMm: 0, base: `A辺(左)より${holeOffsetA}mm / B辺(上)より${holeOffsetTop}mm` },
          { desc: '固定穴 右上', corner: 'B', x: 12.0, y: holeOffsetTop, diameterMm: 6.0, taperMm: 0, base: `C辺(右)より12.0mm / B辺(上)より${holeOffsetTop}mm` },
          { desc: '固定穴 左下', corner: 'C', x: holeOffsetA, y: 15.0, diameterMm: 6.0, taperMm: 0, base: `A辺(左)より${holeOffsetA}mm / D辺(下)より15.0mm` },
          { desc: '固定穴 右下', corner: 'D', x: 12.0, y: 15.0, diameterMm: 6.0, taperMm: 0, base: `C辺(右)より12.0mm / D辺(下)より15.0mm` },
        ],
        corners: [],
        notches: [],
        notes: '【★加工あり】化粧つまみネジ固定用 φ6.0mm丸穴4箇所加工'
      });
      continue;
    }

    // ---------------------------------------------------------------
    // 4. 前開き扉ヒンジ座板・ロック受座板 - 加工あり
    // ---------------------------------------------------------------
    if (name.includes('ヒンジ座板') || name.includes('ロック受座板')) {
      const isHinge = name.includes('ヒンジ');
      resultList.push({
        key: isHinge ? 'hinge_spacer' : 'lock_spacer',
        title: name,
        materialName: matInfo.materialName,
        hazaiyaUrl: matInfo.hazaiyaUrl,
        widthMm: wMm,
        heightMm: hMm,
        thicknessMm: matInfo.thicknessMm,
        quantity: part.count || 1,
        cost: singleCost,
        totalCost: totalCost,
        needsMachining: true,
        edgeFinishing: '全周カンナ・仕上げ',
        holes: [
          { desc: 'フレーム固定穴 上', corner: 'A', x: 10.0, y: 15.0, diameterMm: 4.5, taperMm: 0, base: '上端より15mm / 中心線' },
          { desc: 'フレーム固定穴 下', corner: 'C', x: 10.0, y: 15.0, diameterMm: 4.5, taperMm: 0, base: '下端より15mm / 中心線' }
        ],
        corners: [],
        notches: [],
        notes: '【★加工あり】前開き扉用アクリルスペーサー座板（φ4.5mm穴2箇所）'
      });
      continue;
    }

    // ---------------------------------------------------------------
    // 5. 床下パネルヒータ支え板 - 加工あり
    // ---------------------------------------------------------------
    if (name.includes('床下パネルヒータ支え板') && !name.includes('プラダン')) {
      const is2Panel = (part.count === 2 || (part.note && part.note.includes('2枚')));

      if (is2Panel) {
        resultList.push({
          key: 'floor_heater_support_2p',
          title: `${name}（2枚構成・左右対称配置）`,
          materialName: matInfo.materialName,
          hazaiyaUrl: matInfo.hazaiyaUrl,
          widthMm: wMm,
          heightMm: hMm,
          thicknessMm: matInfo.thicknessMm,
          quantity: 2,
          cost: singleCost,
          totalCost: totalCost,
          needsMachining: true,
          edgeFinishing: '仕上げなし（ノコカット）',
          corners: [
            { desc: '外側奥角A', corner: 'A', spec: '80 x 80 mm 斜めカット', sizeX: 80, sizeY: 80 },
            { desc: '外側手前角C', corner: 'C', spec: '80 x 80 mm 斜めカット', sizeX: 80, sizeY: 80 }
          ],
          notches: [
            { desc: '中央支柱逃げ切欠き', base: '中央側辺の中央部', spec: '幅40mm x 深さ20mm', sizeX: 40, sizeY: 20 }
          ],
          holes: [
            { desc: '角A斜め脇 奥', corner: 'A', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'B辺(上)より9.0mm / A辺(左)より90.0mm' },
            { desc: '角A斜め脇 外側', corner: 'A', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'A辺(左)より9.0mm / B辺(上)より90.0mm' },
            { desc: '角C斜め脇 手前', corner: 'C', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'D辺(下)より9.0mm / A辺(左)より90.0mm' },
            { desc: '角C斜め脇 外側', corner: 'C', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'A辺(左)より9.0mm / D辺(下)より90.0mm' },
            { desc: '中央辺 奥側固定', corner: 'B', x: 9.0, y: 40.0, diameterMm: 6.0, taperMm: 0, base: 'C辺(右)より9.0mm / B辺(上)より40.0mm' },
            { desc: '中央辺 手前側固定', corner: 'D', x: 9.0, y: 40.0, diameterMm: 6.0, taperMm: 0, base: 'C辺(右)より9.0mm / D辺(下)より40.0mm' },
            { desc: '外側辺 中央固定', corner: 'A', x: 9.0, y: Math.round(hMm / 2), diameterMm: 6.0, taperMm: 0, base: `A辺(左)より9.0mm / 中央(高さ${Math.round(hMm / 2)}mm)` },
          ],
          notes: '【★加工あり】2隅80x80mm斜めカット / 中央切欠き40x20mm / φ6.0mm丸穴7箇所'
        });
      } else {
        resultList.push({
          key: 'floor_heater_support_1p',
          title: `${name}（1枚全面構成）`,
          materialName: matInfo.materialName,
          hazaiyaUrl: matInfo.hazaiyaUrl,
          widthMm: wMm,
          heightMm: hMm,
          thicknessMm: matInfo.thicknessMm,
          quantity: 1,
          cost: singleCost,
          totalCost: totalCost,
          needsMachining: true,
          edgeFinishing: '仕上げなし（ノコカット）',
          corners: [
            { desc: '左奥角A', corner: 'A', spec: '80 x 80 mm 斜めカット', sizeX: 80, sizeY: 80 },
            { desc: '右奥角B', corner: 'B', spec: '80 x 80 mm 斜めカット', sizeX: 80, sizeY: 80 },
            { desc: '左手前角C', corner: 'C', spec: '80 x 80 mm 斜めカット', sizeX: 80, sizeY: 80 },
            { desc: '右手前角D', corner: 'D', spec: '80 x 80 mm 斜めカット', sizeX: 80, sizeY: 80 }
          ],
          notches: [],
          holes: [
            { desc: '角A斜め脇 奥', corner: 'A', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'B辺(上)より9.0mm / A辺(左)より90.0mm' },
            { desc: '角A斜め脇 左', corner: 'A', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'A辺(左)より9.0mm / B辺(上)より90.0mm' },
            { desc: '角B斜め脇 奥', corner: 'B', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'B辺(上)より9.0mm / C辺(右)より90.0mm' },
            { desc: '角B斜め脇 右', corner: 'B', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'C辺(右)より9.0mm / B辺(上)より90.0mm' },
            { desc: '角C斜め脇 手前', corner: 'C', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'D辺(下)より9.0mm / A辺(左)より90.0mm' },
            { desc: '角C斜め脇 左', corner: 'C', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'A辺(左)より9.0mm / D辺(下)より90.0mm' },
            { desc: '角D斜め脇 手前', corner: 'D', x: 90.0, y: 9.0, diameterMm: 6.0, taperMm: 0, base: 'D辺(下)より9.0mm / C辺(右)より90.0mm' },
            { desc: '角D斜め脇 右', corner: 'D', x: 9.0, y: 90.0, diameterMm: 6.0, taperMm: 0, base: 'C辺(右)より9.0mm / D辺(下)より90.0mm' },
          ],
          notes: '【★加工あり】4隅80x80mm斜めカット / φ6.0mm丸穴10箇所 (端から9mm溝位置)'
        });
      }
      continue;
    }

    // ---------------------------------------------------------------
    // 6. 加工が不要な一般パネル（底板、側板、背板、前窓、天板、プラダン等） - 切断のみ
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
      cost: singleCost,
      totalCost: totalCost,
      needsMachining: false,
      edgeFinishing: '仕上げなし（ノコカット）',
      holes: [],
      corners: [],
      notches: [],
      notes: `${part.note || '直線カットのみ'} / 【切断のみ (加工なし)】`
    });
  }

  // 配列に発注金額合計および金網リストプロパティを付与（後方互換性100%維持）
  resultList.hazaiyaTotalCost = hazaiyaCostSum;
  resultList.misumiTotalCost = misumiCostSum;
  resultList.wireMeshList = wireMeshList;
  resultList.hazaiyaList = [...resultList];

  return resultList;
}

/**
 * はざいや様向け全パネル発注リストおよびミスミ金網発注情報をクリップボードコピー用の日本語テキストに変換
 * @param {Array<Object>} panelList calculateHazaiyaPanelOrderList の戻り値
 * @param {Object} state ケージ設定パラメータ
 * @param {Object} options オプション設定（合計金額の指定など）
 * @returns {string} フォーマット済みテキスト
 */
export function formatHazaiyaPanelOrderClipboardText(panelList, state = {}, options = {}) {
  if (!panelList || (panelList.length === 0 && (!panelList.wireMeshList || panelList.wireMeshList.length === 0))) {
    return '【パネル発注リスト】対象のパネル部材はありません。';
  }

  const hazaiyaList = (panelList.hazaiyaList) ? panelList.hazaiyaList : panelList.filter(p => !p.isWireMesh);
  const wireMeshList = (panelList.wireMeshList) ? panelList.wireMeshList : (options.wireMeshList || []);

  const hazaiyaTotalCost = options.hazaiyaTotalCost != null ? options.hazaiyaTotalCost : panelList.hazaiyaTotalCost;
  const misumiTotalCost = options.misumiTotalCost != null ? options.misumiTotalCost : panelList.misumiTotalCost;

  const lines = [];

  // -----------------------------------------------------------------
  // 1. はざいや様向け パネル発注リスト
  // -----------------------------------------------------------------
  const totalHazaiyaQty = hazaiyaList.reduce((acc, p) => acc + (p.quantity || 1), 0);
  const machiningCount = hazaiyaList.filter(p => p.needsMachining).length;

  lines.push('================================================================');
  lines.push('【アクリルショップ はざいや様向け パネル一括発注リスト】');
  if (state.W && state.D && state.H) {
    lines.push(`対象ケージ: W${state.W} x D${state.D} x H${state.H} mm (Type ${state.cageType || 'A'})`);
  }
  lines.push(`発注品目数: ${hazaiyaList.length} 品目 (合計枚数: ${totalHazaiyaQty} 枚 / うち加工あり: ${machiningCount} 品目)`);
  lines.push('※ 2重発注防止のため、本リストを上から順に1回だけカートへ追加してください。');
  lines.push('※ 基準: A辺=左辺, B辺=上辺, C辺=右辺, D辺=下辺 / 角A=左上, 角B=右上, 角C=左下, 角D=右下');
  lines.push('================================================================\n');

  hazaiyaList.forEach((item, idx) => {
    const statusTag = item.needsMachining ? '【★加工あり】' : '【切断のみ (加工なし)】';
    lines.push(`■ [${idx + 1}/${hazaiyaList.length}] ${item.title}  ${statusTag}`);
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

  // -----------------------------------------------------------------
  // 2. はざいや発注金額（合計）
  // -----------------------------------------------------------------
  lines.push('================================================================');
  lines.push('【はざいや発注金額（合計）】');
  if (hazaiyaTotalCost != null) {
    lines.push(`¥${hazaiyaTotalCost.toLocaleString()}（税込・加工費込）`);
  } else {
    lines.push('※シミュレーター画面のパネル小計をご参照ください。');
  }
  lines.push('================================================================\n');

  // -----------------------------------------------------------------
  // 3. ミスミ金網発注リスト（金網部材がある場合）
  // -----------------------------------------------------------------
  if (wireMeshList && wireMeshList.length > 0) {
    const totalMeshQty = wireMeshList.reduce((acc, p) => acc + (p.quantity || 1), 0);
    lines.push('================================================================');
    lines.push('【ミスミ様向け 天面金網発注リスト（別仕入れ先）】');
    lines.push('※ 金網は仕入れ先が異なるため、ミスミ様へ別途手配してください。');
    lines.push('※ 金網の数量はURLに含まれませんので、必ず発注数量をご確認ください。');
    lines.push(`発注品目数: ${wireMeshList.length} 品目 (合計枚数: ${totalMeshQty} 枚)`);
    lines.push('================================================================\n');

    wireMeshList.forEach((mesh, idx) => {
      lines.push(`■ [${idx + 1}/${wireMeshList.length}] ${mesh.title}`);
      lines.push(`・型番: ${mesh.modelNumber}`);
      lines.push(`・発注URL: ${mesh.misumiUrl}`);
      lines.push(`・寸法: ヨコ ${mesh.widthMm} mm x タテ ${mesh.heightMm} mm (線径φ3.2, SS400黒塗装)`);
      lines.push(`・発注数量: ${mesh.quantity} 枚`);
      if (mesh.totalCost != null) {
        lines.push(`・概算原価: ¥${mesh.totalCost.toLocaleString()}（税込）`);
      }
      lines.push('----------------------------------------------------------------\n');
    });

    lines.push('================================================================');
    lines.push('【ミスミ発注金額（金網合計）】');
    if (misumiTotalCost != null) {
      lines.push(`¥${misumiTotalCost.toLocaleString()}（税込）`);
    } else {
      lines.push('※シミュレーター画面の金網小計をご参照ください。');
    }
    lines.push('================================================================\n');
  }

  return lines.join('\n');
}

/**
 * 既存の後方互換用エイリアス
 */
export const calculateHazaiyaMachiningSpecs = calculateHazaiyaPanelOrderList;
export const formatHazaiyaMachiningClipboardText = formatHazaiyaPanelOrderClipboardText;
