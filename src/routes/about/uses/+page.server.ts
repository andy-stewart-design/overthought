import { toolData, type ToolSet } from '@content/about/uses';
import type { PageServerLoad } from './$types';

export const csr = false;

export const load: PageServerLoad = async () => {
	const categories = Object.keys(toolData);
	const tools: ToolSet[][] = Object.values(toolData);
	return { categories, tools };
};
