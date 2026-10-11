const endpoint = 'https://script.google.com/macros/s/AKfycbwWv5VmeJGCnvvD0U3WTJBkT3ZnrFIj1qUHXXMlF2TA3vn2hSu9J1zp-9fc4PY_whjp/exec';

// 1. Web閲覧履歴ログ（離脱時1行追記方式・全10列）のテスト送信
const pageViewPayload = {
  type: 'page_view',
  visitorId: 'usr_test_verification',
  path: '/sim/',
  title: '3Dケージ見積もりシミュレーター',
  duration: 45,
  referrer: 'https://www.google.com/search?q=爬虫類ケージ',
  referrerCategory: 'Google検索',
  landingPage: '/',
  screen: '1920x1080',
  deviceType: 'Windows (Chrome)'
};

// 2. 見積もり詳細ログのテスト送信
const estimatePayload = {
  type: 'estimate',
  timestamp: new Date().toISOString(),
  estimateId: 'EST-TEST-VERIFY2',
  visitorId: 'usr_test_verification',
  sessionId: 'ses_test_verification',
  seq: 1,
  device: {
    type: 'Windows',
    browser: 'Chrome',
    screen: '1920x1080'
  },
  spec: {
    cageType: 'A',
    typeName: 'Type A（全面扉）',
    frameColor: 'black',
    frameColorDisplayName: 'ブラック',
    W: 800,
    D: 400,
    H: 450,
    panelsSummary: '標準仕様（側面2分割: 5mmピッチ検証）',
    optionsSummary: 'なし'
  },
  calculated: {
    priceWithMarkup: 38500,
    rawCost: 22000,
    weight: 9.2
  },
  meta: {
    elapsedSec: 35,
    referrer: 'https://www.google.com/',
    pageHistory: ['/', '/sim/'],
    diffNote: '最新デプロイ動作検証'
  }
};

async function sendTest(payload, name) {
  console.log(`\n--- [${name}] 送信テスト開始 ---`);
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    console.log(`HTTPステータス: ${res.status}`);
    const text = await res.text();
    console.log(`レスポンス結果:`, text);
  } catch (err) {
    console.error(`送信エラー:`, err);
  }
}

async function runAll() {
  await sendTest(pageViewPayload, 'Web閲覧履歴ログ（10列新仕様）');
  await sendTest(estimatePayload, '見積もりシステムログ（24列正規仕様）');
  console.log('\n=== すべてのテスト送信が完了しました ===');
}

runAll();
