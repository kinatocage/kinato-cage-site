import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .envファイルの読み込み
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const DOMAIN = process.env.PUBLIC_MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.PUBLIC_MICROCMS_API_KEY;

if (!DOMAIN || !API_KEY) {
    console.error("Error: .env に PUBLIC_MICROCMS_SERVICE_DOMAIN または PUBLIC_MICROCMS_API_KEY が設定されていません。");
    process.exit(1);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchFromMicroCMS(endpoint, limit = 100) {
    const res = await fetch(`https://${DOMAIN}.microcms.io/api/v1/${endpoint}?limit=${limit}`, {
        headers: {
            'X-MICROCMS-API-KEY': API_KEY,
        },
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
    }
    const data = await res.json();
    return data.contents;
}

async function updateOption(id, dataToUpdate) {
    const res = await fetch(`https://${DOMAIN}.microcms.io/api/v1/options/${id}`, {
        method: 'PATCH',
        headers: {
            'X-MICROCMS-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToUpdate),
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to update option ${id}: ${res.status} ${errorText}`);
    }
    return await res.json();
}

/**
 * HTMLからプレーンテキストを抽出する。改行などを保持する。
 */
function cleanHtml(htmlStr) {
    if (!htmlStr) return '';
    // <br> や <br/>, </p>, </div>等を改行に置換
    let text = htmlStr.replace(/<br\s*\/?>/gi, '\n');
    text = text.replace(/<\/p>/gi, '\n');
    text = text.replace(/<\/div>/gi, '\n');
    text = text.replace(/<li>/gi, '・');
    text = text.replace(/<\/li>/gi, '\n');

    // 全てのHTMLタグを除去
    text = text.replace(/<[^>]+>/g, '');

    // 複数の連続する改行を、最大2つの改行に整理する（見やすさのため）
    text = text.replace(/\n{3,}/g, '\n\n');

    // 前後の空白を削除
    return text.trim();
}

async function main() {
    const isDryRun = process.argv.includes('--dry-run');
    console.log(`Starting update process. Dry Run: ${isDryRun}`);

    try {
        // 1. 全TypeのIDを取得
        console.log("Fetching all types...");
        const types = await fetchFromMicroCMS('types', 50);
        const allTypeIds = types.map(t => t.id);
        console.log(`Found ${allTypeIds.length} types:`, allTypeIds);

        // 2. 全Optionを取得
        console.log("Fetching all options...");
        const options = await fetchFromMicroCMS('options', 100);
        console.log(`Found ${options.length} options. Starting update loop...`);

        let successCount = 0;
        let errorCount = 0;

        // 3. 各Optionを更新
        for (const option of options) {
            console.log(`\nProcessing Option: ${option.name} (ID: ${option.id})`);

            const currentDetails = option.details || '';
            const cleanedDetails = cleanHtml(currentDetails);

            const currentTypeIds = option.applicableTypes?.map(t => typeof t === 'string' ? t : t.id) || [];

            // 変更があるか確認
            const detailsChanged = currentDetails !== cleanedDetails;
            const typesChanged = currentTypeIds.length !== allTypeIds.length || !allTypeIds.every(id => currentTypeIds.includes(id));

            if (!detailsChanged && !typesChanged) {
                console.log("  -> No changes needed. Skipping.");
                continue;
            }

            const updateData = {};
            if (typesChanged) {
                console.log("  -> applicableTypes will be updated to all types.");
                updateData.applicableTypes = allTypeIds;
            }
            if (detailsChanged) {
                console.log("  -> details will be cleaned of HTML tags.");
                // 干渉しないようにプレビュー表示
                if (isDryRun) {
                    console.log("     [Original details]:", currentDetails.substring(0, 100).replace(/\n/g, '\\n') + "...");
                    console.log("     [Cleaned details]:", cleanedDetails.substring(0, 100).replace(/\n/g, '\\n') + "...");
                }
                updateData.details = cleanedDetails;
            }

            if (isDryRun) {
                console.log("  [DRY RUN] Would send patch for ID:", option.id);
            } else {
                try {
                    await updateOption(option.id, updateData);
                    console.log(`  -> Successfully updated ID: ${option.id}`);
                    successCount++;
                } catch (updateErr) {
                    console.error(`  -> Failed to update ID: ${option.id}`, updateErr);
                    errorCount++;
                }

                // MicroCMSのAPI制限を考慮してスリープ
                await sleep(500);
            }
        }

        console.log(`\nUpdate process finished. Success: ${successCount}, Errors: ${errorCount}`);

    } catch (e) {
        console.error("Critical Error during process:", e);
    }
}

main();
