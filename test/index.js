import fs from 'fs/promises';
import { getItemsByCategory } from '../src/api.js';

const parseObject = object => {
	const { productId, prices } = object;
	let { image, title } = object;

	image = image.imgUrl;
	title = title.displayTitle;
	const price = prices.salePrice.minPrice;
	const reference = `https://www.aliexpress.com/item/${productId}.html`;

	return {
		productId,
		image,
		title,
		price,
		reference,
	};
};

const memoryProducts = [];
const getAllProducts = async () => {
	for (let i = 1; i < 5000; i++) {
		try {
			const items = await getItemsByCategory({
				category: 'kitchen-dining-bar',
				page: i,
				minPrice: 1,
				maxPrice: 2000,
			});
			const parsedItems = items.map(parseObject);
			memoryProducts.push(...parsedItems);

			console.log(`[UPDATE] page: ${i}, items: ${memoryProducts.length}`);
			await fs.writeFile('test/all-products.json', JSON.stringify(memoryProducts));
		} catch (err) {
			console.log(err);
		}
	}
};
getAllProducts();
