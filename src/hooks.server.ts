import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	let theme = 'system';

	// const newTheme = event.url.searchParams.get('theme');
	// if (newTheme) theme = newTheme;
	const cookieTheme = event.cookies.get('colorTheme');
	if (cookieTheme) theme = cookieTheme;
	event.locals.theme = cookieTheme ?? theme;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%datatheme%', theme)
	});

	return response;
};
