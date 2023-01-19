import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type ThemeOption = 'light' | 'dark' | 'system';

let cookieTheme: ThemeOption | null = null;
let fallbackTheme: ThemeOption = 'light';

if (browser) {
	const cookiesRaw = document.cookie;
	if (cookiesRaw) {
		const cookies: any = document.cookie
			.split(';')
			.map((v) => v.split('='))
			.reduce((acc, v) => {
				acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
				return acc;
			}, {} as { [key: string]: string });
		cookieTheme = cookies.siteTheme as ThemeOption;
	}
	const prefersDark =
		window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	fallbackTheme = prefersDark ? 'dark' : 'light';
}

const theme = cookieTheme ? cookieTheme : fallbackTheme;

export const appTheme = writable<ThemeOption>(theme);

export function setTheme(newTheme: ThemeOption) {
	appTheme.set(newTheme);
	const unsubscribe = appTheme.subscribe((theme) => {
		document.documentElement.dataset.theme = theme;
		document.cookie = `siteTheme=${theme};max-age=31536000;path="/";SameSite=Strict;Secure`;
	});
	unsubscribe();
}
