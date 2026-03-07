import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    // 必ず PUBLIC_ が付いた名前を使います
    serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

// クライアントの作成
export const microcmsClient = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});

// worksエンドポイントの型定義
export type Work = {
    id: string;
    title: string;
    species: string | string[]; // セレクトフィールド
    size: string;
    features?: string;
    images?: MicroCMSImage[];
    content?: string;
} & MicroCMSDate;

// 事例一覧を取得する関数
export const getWorks = async (queries?: MicroCMSQueries) => {
    return await microcmsClient.getList<Work>({
        endpoint: "works",
        queries,
    });
};
