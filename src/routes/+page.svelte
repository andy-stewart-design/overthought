<script lang="ts">
	import { appTheme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	type ThemeOptions = 'dark' | 'light';

	function setTheme(newTheme: ThemeOptions) {
		$appTheme = newTheme;
		document.documentElement.dataset.theme = $appTheme;
		document.cookie = `siteTheme=${$appTheme};max-age=31536000;path="/"`;
	}

	onMount(() => {
		let cookieTheme: ThemeOptions | null = null;
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
		if (!cookieTheme) document.cookie = `siteTheme=${$appTheme};max-age=31536000;path="/"`;
	});
</script>

<main>
	<button on:click={() => setTheme($appTheme === 'dark' ? 'light' : 'dark')}>{$appTheme}</button>
	<h1>Color Tokens</h1>
	<ul>
		<li>foreground</li>
		<li>surface</li>
		<li>background</li>
	</ul>
	<ul>
		<li>primary</li>
		<li>accents (01-05)</li>
		<li>background</li>
	</ul>
</main>
