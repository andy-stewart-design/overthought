import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type ThemeOptions = 'light' | 'dark' | 'system';

let cookieTheme: ThemeOptions | null = null;
let fallbackTheme: ThemeOptions = 'light';

if (browser) {
	const cookiesRaw = document.cookie;
	if (cookiesRaw) {
		const cookies: any = document.cookie
			.split(';')
			.map((v) => v.split('='))
			.reduce((acc, v) => {
				// @ts-expect-error
				acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
				return acc;
			}, {});
		cookieTheme = cookies.siteTheme as ThemeOptions;
	}
	const prefersDark =
		window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	fallbackTheme = prefersDark ? 'dark' : 'light';
}

const theme = cookieTheme ? cookieTheme : fallbackTheme;

export const appTheme = writable<ThemeOptions>(theme);
