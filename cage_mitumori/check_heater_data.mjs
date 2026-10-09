import fs from 'fs';
const data = JSON.parse(fs.readFileSync('C:/Users/owner/OneDrive/Desktop/hazaiya-order-tool/full_order_data.json', 'utf8'));
const heater = data.find(p => p.key === 'floor_heater_support_1');
console.log(JSON.stringify(heater, null, 2));
