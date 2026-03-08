import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .envファイルの読み込み
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const DOMAIN = process.env.PUBLIC_MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.PUBLIC_MICROCMS_API_KEY;
// マネジメントAPIと共通の場合と分ける場合に対応
const MANAGEMENT_API_KEY = process.env.MICROCMS_MANAGEMENT_API_KEY || API_KEY;

if (!DOMAIN || !API_KEY) {
    console.error("Error: .env に PUBLIC_MICROCMS_SERVICE_DOMAIN または PUBLIC_MICROCMS_API_KEY が設定されていません。");
    process.exit(1);
}

const THEME_URL_BASE = 'https://ameblo.jp/kinatocage/theme';
const THEME_ID = '10110834286';

const STATE_FILE = path.resolve(__dirname, 'migration_state.json');

// --- ユーティリティ関数 ---

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function loadState() {
    if (fs.existsSync(STATE_FILE)) {
        return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
    }
    return { completed: [], errors: [] };
}

function saveState(state) {
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

// --- スクレイピング処理 ---

async function getArticleUrls(page = 1) {
    const url = `${THEME_URL_BASE}${page > 1 ? page : ''}-${THEME_ID}.html`;
    console.log(`Fetching list page: ${url}`);
    const res = await fetch(url);
    if (!res.ok) {
        if (res.status === 404) return [];
        throw new Error(`Failed to fetch list page: ${res.statusText}`);
    }
    const html = await res.text();
    const $ = cheerio.load(html);

    const urls = [];

    $('[data-uranus-component="entryItemTitle"] a').each((i, el) => {
        const href = $(el).attr('href');
        if (href) {
            urls.push(href.startsWith('/') ? `https://ameblo.jp${href}` : href);
        }
    });

    // フォールバック
    if (urls.length === 0) {
        $('h2 a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && href.includes('entry-')) {
                urls.push(href.startsWith('/') ? `https://ameblo.jp${href}` : href);
            }
        });
    }

    return urls;
}

async function scrapeArticle(url) {
    console.log(`Fetching article: ${url}`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch article: ${res.statusText}`);

    const html = await res.text();
    const $ = cheerio.load(html);

    // タイトル取得
    let title = $('[data-uranus-component="entryItemTitle"]').text().trim();
    if (!title) title = $('.skin-entryTitle').text().trim();

    // 本文取得
    let bodyHtml = $('[data-uranus-component="entryBody"]').html();
    if (!bodyHtml) bodyHtml = $('#entryBody').html();
    if (!bodyHtml) bodyHtml = "";

    // タイトルから "OPT 『xxx』" を抽出
    let name = title;
    const match = title.match(/OPT\s*『(.+?)』/);
    if (match && match[1]) {
        name = match[1].trim();
    }

    // 画像URL抽出
    const imageUrls = [];
    const $body = cheerio.load(bodyHtml);
    $body('img').each((i, el) => {
        let src = $body(el).attr('src');
        if (src && !src.includes('emoji.ameba.jp') && !src.includes('stat100.ameba.jp/blog/') && src.startsWith('http')) {
            imageUrls.push(src);
        }
    });

    return { name, details: bodyHtml.trim(), imageUrls };
}

// --- microCMS API処理 ---

async function getAllTypeIds() {
    console.log(`Fetching all type IDs from microCMS...`);
    const res = await fetch(`https://${DOMAIN}.microcms.io/api/v1/types?limit=50`, {
        headers: {
            'X-MICROCMS-API-KEY': API_KEY
        }
    });
    if (!res.ok) throw new Error(`Failed to fetch types: ${res.statusText}`);
    const data = await res.json();
    return data.contents.map(item => item.id);
}

async function uploadImage(url) {
    console.log(`Downloading image: ${url}`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to download image: ${res.statusText}`);

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const ext = url.split('.').pop().split('?')[0].toLowerCase();
    let filename = path.basename(url).split('?')[0];
    if (!filename || filename === "") filename = "image.jpg";

    const mimeType = ext === 'png' ? 'image/png' : ext === 'gif' ? 'image/gif' : 'image/jpeg';

    const blob = new Blob([buffer], { type: mimeType });
    const formData = new FormData();
    formData.append('file', blob, filename);

    console.log(`Uploading to microCMS Management API...`);
    const mgmtRes = await fetch(`https://${DOMAIN}.microcms-management.io/api/v1/media`, {
        method: 'POST',
        headers: {
            'X-MICROCMS-API-KEY': MANAGEMENT_API_KEY,
        },
        body: formData,
    });

    if (!mgmtRes.ok) {
        const errorText = await mgmtRes.text();
        throw new Error(`Failed to upload image to microCMS: ${mgmtRes.status} ${errorText}`);
    }

    const result = await mgmtRes.json();
    console.log("Mgmt API response:", JSON.stringify(result));
    const microcmsUrl = result.url;
    console.log(`Uploaded successfully: ${microcmsUrl}`);

    return { url: microcmsUrl };
}

async function createOptionArticle(optionData) {
    console.log(`Creating option in microCMS: ${optionData.name}`);
    const createRes = await fetch(`https://${DOMAIN}.microcms.io/api/v1/options`, {
        method: 'POST',
        headers: {
            'X-MICROCMS-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(optionData),
    });

    if (!createRes.ok) {
        const errorText = await createRes.text();
        throw new Error(`Failed to create option in microCMS: ${createRes.status} ${errorText}`);
    }

    const result = await createRes.json();
    return result.id;
}

// --- メイン処理 ---

async function main() {
    const isDryRun = process.argv.includes('--dry-run');
    console.log(`Starting migration... Dry Run: ${isDryRun}`);

    const state = loadState();

    // 0. 全TypeIDの取得
    let typeIds = [];
    try {
        typeIds = await getAllTypeIds();
        console.log(`Loaded ${typeIds.length} type IDs to use for applicableTypes.`);
    } catch (e) {
        console.warn("Could not load type IDs, sending empty applicableTypes instead. ", e.message);
    }

    // 1. URL収集
    let allUrls = [];
    let page = 1;
    const maxPages = 12; // テーマページは12ページ程度

    while (page <= maxPages) {
        const urls = await getArticleUrls(page);
        if (urls.length === 0) {
            console.log(`No more articles found on page ${page}.`);
            break;
        }
        allUrls.push(...urls);
        page++;
        await sleep(1000);
    }

    // 重複排除とテスト用制限
    allUrls = [...new Set(allUrls)];
    console.log(`Total URLs to process: ${allUrls.length}`);

    // 2. 記事の処理
    for (const url of allUrls) {
        if (state.completed.includes(url)) {
            console.log(`Skipping already completed article: ${url}`);
            continue;
        }

        try {
            const { name, details, imageUrls } = await scrapeArticle(url);

            if (!name) {
                console.warn(`WARNING: Title is empty for ${url}. Skipping.`);
                continue;
            }

            console.log(`\n--- Article ---`);
            console.log(`URL  : ${url}`);
            console.log(`Name : ${name}`);
            console.log(`Images: ${imageUrls.length}`);

            if (isDryRun) {
                await sleep(1000);
                continue;
            }

            // 画像アップロード
            const uploadedImages = [];
            for (const imgUrl of imageUrls) {
                try {
                    const uploadedImage = await uploadImage(imgUrl);
                    uploadedImages.push(uploadedImage.url); // 文字列配列として追加
                    await sleep(1000); // 制限回避
                } catch (imgErr) {
                    console.error(`Failed to handle image ${imgUrl}:`, imgErr);
                }
            }

            // 記事登録
            const dataToPost = {
                name: name,
                details: details,
                images: uploadedImages,
                applicableTypes: typeIds.slice(0, 10)
            };

            const optionId = await createOptionArticle(dataToPost);
            console.log(`Successfully migrated -> microCMS ID: ${optionId}`);

            state.completed.push(url);
            saveState(state);

        } catch (error) {
            console.error(`Error processing article ${url}:`, error);
            if (!state.errors.find(e => e.url === url)) {
                state.errors.push({ url, error: error.message });
                saveState(state);
            }
        }

        await sleep(2000); // 記事間のウェイト
    }

    console.log("Migration finished.");
}

main().catch(console.error);
