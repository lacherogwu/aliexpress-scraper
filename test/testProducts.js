import fs from 'fs/promises';
import open from 'open';

const fileName = 'products/garden-supplies.json';
const file = await fs.readFile(fileName, 'utf-8');
/** @type {Array} */
const json = JSON.parse(file);

for (let i = 0; i < 25; i++) {
	const { reference } = json[i];
	open(reference);
}
