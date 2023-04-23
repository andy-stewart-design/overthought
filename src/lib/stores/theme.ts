// import { browser } from '$app/environment';
// import { writable } from 'svelte/store';

// export type ThemeOption = 'light' | 'dark' | 'system';

// let theme: ThemeOption = 'system';

// if (browser) {
// 	const cookiesRaw = document.cookie;
// 	if (cookiesRaw) {
// 		const cookies = document.cookie
// 			.split(';')
// 			.map((v) => v.split('='))
// 			.reduce((acc, v) => {
// 				acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
// 				return acc;
// 			}, {} as { [key: string]: string });

// 		theme = cookies.colorTheme as ThemeOption;
// 	}
// }

// export const appTheme = writable<ThemeOption>(theme);
