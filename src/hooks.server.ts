import { appTheme, type ThemeOptions } from '$lib/stores/theme';
import type { Handle } from '@sveltejs/kit';

type CookieTheme = ThemeOptions | 'undefined';

export const handle: Handle = async ({ event, resolve }) => {
	const savedTheme = event.cookies.get('siteTheme') as CookieTheme;
	const theme = savedTheme ? savedTheme : '';

	appTheme.set(theme as ThemeOptions);

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
	});

	return response;
};
