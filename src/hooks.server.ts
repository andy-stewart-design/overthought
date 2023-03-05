import { appTheme, type ThemeOption } from '$lib/stores/theme';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// get the stored theme cookie, if it exists
	const savedTheme = event.cookies.get('siteTheme') as ThemeOption | undefined;
	// if there isn't a theme cookie, set theme to system
	const theme = savedTheme !== undefined ? savedTheme : 'system';
	// set the theme store in $lib/stores/theme.ts
	appTheme.set(theme);
	// set the data-theme property in the html
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
	});

	return response;
};
