<script lang="ts">
	import { page } from '$app/stores';
	import andyLogo from '@svg/andy-logo.svg?raw';
	import contrast from '@svg/contrast.svg?raw';
	import system from '@svg/theme-system.svg?raw';
	import light from '@svg/theme-light.svg?raw';
	import dark from '@svg/theme-dark.svg?raw';
	import Container from '@globals/layout/Container.svelte';
	import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from 'neutral-ui';

	export let theme: string;

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
		setCookie('colorTheme', theme, 365);
	};

	let listboxValue = theme;
	let options = [
		{ name: 'system', icon: system },
		{ name: 'light', icon: light },
		{ name: 'dark', icon: dark }
	];
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
		<ListboxButton class="font-medium capitalize">{@html contrast}</ListboxButton>
		<ListboxOptions
			class="absolute right-0 mt-1 w-32 origin-top-right scale-50 rounded border border-foreground/10 bg-surface-mid py-1 opacity-0 shadow-lg transition-all duration-300 ease-out-5 focus:outline-0 data-[state=open]:scale-100 data-[state=open]:opacity-100"
		>
			{#each options as option}
				<ListboxOption
					value={option.name}
					class="group flex items-center gap-2 px-4 py-2 text-sm font-medium capitalize hover:bg-black/10 data-[active=true]:bg-foreground/20 data-[selected=true]:!bg-foreground data-[selected=true]:!text-background"
				>
					{@html option.icon}
					{option.name}
				</ListboxOption>
			{/each}
		</ListboxOptions>
	</Listbox>
</Container>
