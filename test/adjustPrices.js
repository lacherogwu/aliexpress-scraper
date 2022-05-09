import { parseFile, randomNumber } from '../src/utils.js';
import { writeFile } from 'fs/promises';

const fileName = 'products/kitchen-dining-bar.json';
const json = await parseFile(fileName);

console.log(json.filter(item => item.price < 1).length);
console.log(json.length);

json.forEach(item => {
	if (item.price < 1) {
		item.price = randomNumber(1, 15);
	}
});

console.log(json.filter(item => item.price < 1).length);
console.log(json.length);

// await writeFile(fileName, JSON.stringify(json));
