const endpoint = 'https://script.google.com/macros/s/AKfycbwWv5VmeJGCnvvD0U3WTJBkT3ZnrFIj1qUHXXMlF2TA3vn2hSu9J1zp-9fc4PY_whjp/exec';

// 1. Web履歴ログのテスト送信
const webPayload = {
  type: 'web_access',
  visitorId: 'usr_test_verification',
  sessionId: 'ses_test_verification',
  referrer: 'https://www.instagram.com/',
  referrerCategory: 'Instagram',
  landingPage: '/',
  pageHistory: ['トップ', 'コンセプト', '見積もりシステム'],
  pageCount: 3,
  device: {
    type: 'PC',
    browser: 'Chrome',
    screen: '1920x1080'
  }
};

// 2. 見積もり詳細ログのテスト送信
const estimatePayload = {
  type: 'estimate',
  timestamp: new Date().toISOString(),
  estimateId: 'EST-TEST-VERIFY1',
  visitorId: 'usr_test_verification',
  sessionId: 'ses_test_verification',
  seq: 1,
  device: {
    type: 'PC',
    browser: 'Chrome',
    screen: '1920x1080'
  },
  spec: {
    cageType: 'A',
    frameColor: 'black',
    frameColorDisplayName: 'ブラック',
    W: 900,
    D: 450,
    H: 450,
    panelsSummary: '床:透明アクリル | 背:中空ポリカ | 側:パンチング | 天:金網25mm',
    optionsSummary: '自在キャスター, 換気量調整板'
  },
  calculated: {
    priceWithMarkup: 32000,
    rawCost: 19500,
    weight: 8.8
  },
  meta: {
    elapsedSec: 42,
    referrer: 'https://www.instagram.com/',
    pageHistory: ['トップ', 'コンセプト', '見積もりシステム'],
    diffNote: '初回テスト試算'
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
  await sendTest(webPayload, 'Web履歴ログ');
  await sendTest(estimatePayload, '見積もりシステムログ');
  console.log('\n=== すべてのテスト送信が完了しました ===');
}

runAll();
