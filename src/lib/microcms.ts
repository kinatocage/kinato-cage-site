import { createClient } from 'microcms-js-sdk';

// どちらの環境（ローカル/Cloudflare）でも値を読み取れるようにします
const serviceDomain = import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN || process.env.PUBLIC_MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY || process.env.PUBLIC_MICROCMS_API_KEY;

// 万が一、変数が読み込めていない場合にビルドログへ警告を出す（デバッグ用）
if (!serviceDomain || !apiKey) {
    console.error("--- 警告: 環境変数が読み込めていません！ ---");
    console.error("SERVICE_DOMAIN:", serviceDomain ? "OK" : "MISSING");
    console.error("API_KEY:", apiKey ? "OK" : "MISSING");
}

export const client = createClient({
    serviceDomain: serviceDomain || '',
    apiKey: apiKey || '',
});

/**
 * @typedef {Object} TypeData
 * @description ケージの基本タイプ（種類）を定義するスキーマ
 */
export type TypeData = {
    /** タイプの一意な識別子（例: "acrylic-standard"） */
    id: string;
    /** 一般公開用タイトル（例: "アクリルケージ スタンダード"） */
    title: string;
    /** タイプの詳細説明文。SEOや概要として利用する。 */
    description: string;
    /** メイン画像（複数画像フィールド）。未設定の場合はプレースホルダー画像(`acrylic_cage`等)を使用する。 */
    image?: { url: string }[];
    /** このタイプを代表する、またはおすすめの製作事例リスト。 */
    pinnedWorks?: Work[];
};

/**
 * @typedef {Object} OptionData
 * @description 各ケージに対し追加可能なオプションパーツを定義するスキーマ
 */
export type OptionData = {
    /** オプションの一意な識別子 */
    id: string;
    /** オプションの表示名（例: "スライド扉鍵"） */
    name: string;
    /** 機能や効果の詳細解説（リッチエディタまたはテキスト） */
    details?: string;
    /** 追加料金。空文字または未設定の場合は「サイズにより変動（お見積もり）」として扱う。 */
    price?: string;
    /** 特定のカテゴリ名（例: "基本オプション"、"快適拡張"など） */
    category?: string;
    /** このオプションを選択できるケージの配列。空配列の場合は「全ケージ共通」 */
    applicableTypes?: TypeData[];
    /** オプションの参考画像（複数画像対応） */
    images?: { url: string }[];
};

/**
 * @typedef {Object} Work
 * @description 納品済みの製作事例（ポートフォリオ）データを定義するスキーマ
 */
export type Work = {
    /** 事例の一意な識別子 */
    id: string;
    /** 事例のタイトル（例: "フトアゴヒゲトカゲ用 木製ケージ"） */
    title: string;
    /** 飼育対象の生体名。単一または複数設定可能。 */
    species: string | string[];
    /** ケージの寸法（例: "W900×D450×H450"） */
    size: string;
    /** ケージの主な特徴やアピールポイント（フリーテキスト） */
    features?: string;
    /** 製作事例のギャラリー画像リスト */
    images?: { url: string }[];
    /** 事例の詳細本文（リッチエディタによるHTMLコンテンツ） */
    content: string;
    /** 納品後のお客様からのフィードバック・感想文 */
    customerComment?: string;
    /** ベースとなったケージタイプの情報 */
    cageType?: TypeData;
};

export const getWorks = async (queries?: any) => {
    return await client.get({ endpoint: "works", queries });
};

export const getTypes = async (queries?: any) => {
    return await client.get({ endpoint: "types", queries });
};

export const getOptions = async (queries?: any) => {
    return await client.get({ endpoint: "options", queries });
};