<script lang="ts">
	import { page } from '$app/stores';
	import andyLogo from '@svg/andy-logo.svg?raw';
	import ThemeToggle from './ThemeToggle.svelte';
	import Container from '@globals/layout/Container.svelte';
	import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from 'neutral-ui';

	export let theme: string;
	let themeInternal = theme;

	function getCookie(name: string) {
		const allCookies = document.cookie.split('; ');
		const cookie = allCookies.filter((c) => c.includes(name));
		if (cookie.length === 1) return cookie[0].split('=')[1];
		return null;
	}

	function setCookie(cName: string, cValue: string, expDays: number) {
		let date = new Date();
		date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
		const expires = 'expires=' + date.toUTCString();
		document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/';
	}

	const setTheme = (theme: string) => {
		document.documentElement.setAttribute('data-theme', theme);
		console.log('Before:', getCookie('colorTheme'));
		setCookie('colorTheme', theme, 365);
		console.log('After:', getCookie('colorTheme'));
		themeInternal = theme;
	};
	let listboxValue = theme;
	let options = ['system', 'light', 'dark'];
</script>

<Container
	class="sticky left-0 top-0 z-50 flex h-20 w-screen items-center justify-between border-b bg-background/50 backdrop-blur-md border-light"
	py="none"
>
	<a href="/" class="relative w-11" class:pointer-events-none={$page.url.pathname === '/'}>
		<p class="sr-only">Andy's logo</p>
		{@html andyLogo}
	</a>

	<Listbox bind:value={listboxValue} on:change={() => setTheme(listboxValue)}>
		<ListboxButton class="capitalize">{listboxValue ?? ''}</ListboxButton>
		<ListboxOptions
			class="absolute right-0 mt-2 w-32 border border-black/5 bg-surface-mid py-1 shadow-lg focus:outline-0"
		>
			{#each options as option, i}
				<ListboxOption
					value={option}
					class="group flex items-center gap-2 px-4 py-2 text-sm capitalize hover:bg-black/10 data-[active=true]:bg-black data-[active=true]:text-white"
				>
					<span class="opacity-0 group-data-[selected=true]:opacity-100">
						<svg viewBox="0 0 16 16" width="12" height="12">
							<path d="M2 9 L6 13 L14 5" stroke="currentColor" fill="none" stroke-width="1.5" />
						</svg>
					</span>
					{option}
				</ListboxOption>
			{/each}
		</ListboxOptions>
	</Listbox>
	<!-- <ThemeToggle /> -->
</Container>
