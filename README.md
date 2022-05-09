# Aliexpress Scraper

## Methods

- Find items by category

## How to use?

```js
import { getItemsByCategory } from 'aliexpress-scraper';

const items = await getItemsByCategory({
	category: 'kitchen-dining-bar',
	page: 1,
	minPrice: 1,
	maxPrice: 2000,
});
```

This is an experimental library built for personal uses, it's not going to be maintained, and it is very limited and simplified library
