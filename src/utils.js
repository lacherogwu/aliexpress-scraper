/**
 *
 * @param {string} html
 * @returns
 */
const getRunParamsObject = html => {
	const match = html.match(/window.runParams = ({"mods".*});/);
	if (!match) return;

	const [, runParams] = match;
	return JSON.parse(runParams);
};

/**
 *
 * @param {string} html
 * @returns {Array}
 */
export const getItems = html => {
	const content = getRunParamsObject(html)?.mods?.itemList?.content;
	if (!content) throw new Error('Could not find items');

	return content;
};
