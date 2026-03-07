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

export type TypeData = {
    id: string;
    title: string;
    description: string;
    mainImage?: { url: string };
    pinnedWorks?: Work[];
};

export type OptionData = {
    id: string;
    title: string;
    description?: string;
    price?: number | string; // 価格
    applicableTypes?: TypeData[]; // 対応するType（空なら共通）
    image?: { url: string };
};

export type Work = {
    id: string;
    title: string;
    species: string | string[];
    size: string;
    features?: string;
    images?: { url: string }[];
    content: string;
    customerComment?: string;
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