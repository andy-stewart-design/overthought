import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	let testTheme = 'system';

	const newTheme = event.url.searchParams.get('theme');
	const cookieTheme = event.cookies.get('colorTheme');

	if (newTheme) testTheme = newTheme;
	else if (cookieTheme) testTheme = cookieTheme;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${testTheme}"`)
	});

	return response;
};
