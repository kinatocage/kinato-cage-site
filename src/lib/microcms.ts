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