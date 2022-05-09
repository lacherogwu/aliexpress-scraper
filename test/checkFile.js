import fs from 'fs/promises';

const file = await fs.readFile('all-products.json', 'utf-8');
/** @type {Array} */
const json = JSON.parse(file);

console.log(json.length);
const filtered = [];
const ids = [];
json.forEach((item, i) => {
	if (ids.includes(item.productId)) return;
	ids.push(item.productId);
	filtered.push(item);
});
console.log(filtered.length);

// let priceMap = {};
// filtered.forEach(item => {
// 	if (!priceMap[item.price]) {
// 		priceMap[item.price] = 1;
// 	} else {
// 		priceMap[item.price]++;
// 	}
// });

// const sorted = Object.entries(priceMap).sort((a, b) => +a[0] - +b[0]);
// priceMap = {};
// sorted.forEach(([key, value]) => {
// 	priceMap[key] = value;
// });
// console.log(priceMap);

const fileName = 'products/garden-supplies.json';
await fs.writeFile(fileName, JSON.stringify(filtered));
