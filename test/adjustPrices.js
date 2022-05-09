import { writeFile, readFile } from 'fs/promises';

/**
 *
 * @param {string} fileName
 * @returns {Promise<Array>}
 */
export const parseFile = async fileName => {
	const file = await readFile(fileName, 'utf-8');
	return JSON.parse(file);
};

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const fileName = 'test/products/computer-office.json';
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

await writeFile(fileName, JSON.stringify(json));
