import { createClient } from 'microcms-js-sdk';

// 「client」という名前で統一します
export const client = createClient({
    serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

export type Work = {
    id: string;
    title: string;
    species: string | string[];
    size: string;
    features?: string;
    images?: { url: string }[];
    content: string;
};

// ...（既存の client や Work の定義はそのままで）

// 作品一覧を取得するための関数を追加します
export const getWorks = async (queries?: any) => {
    return await client.get({ endpoint: "works", queries });
};