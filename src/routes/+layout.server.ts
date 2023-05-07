import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url, locals }) => {
	const { theme } = locals;
	const { pathname } = url;

	return { theme, pathname };
};
