<script lang="ts">
	import { page } from '$app/stores';
	import andyLogo from '@svg/andy-logo.svg?raw';
	import contrast from '@svg/contrast.svg?raw';
	import system from '@svg/theme-system.svg?raw';
	import light from '@svg/theme-light.svg?raw';
	import dark from '@svg/theme-dark.svg?raw';
	import Container from '@globals/layout/Container.svelte';
	import { footerVisibility } from './Footer.svelte';
	import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from 'neutral-ui';

	export let theme: string;

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

	let internalTheme = theme;
	let options = [
		{ name: 'system', icon: system },
		{ name: 'light', icon: light },
		{ name: 'dark', icon: dark }
	];
</script>

<div
	class="sticky left-0 top-0 z-50 border-b bg-background/50 backdrop-blur-md transition-transform duration-300 ease-out-3 border-light"
	style:transform={$footerVisibility > 0.5 ? 'translate(0, -110%)' : 'translate(0, 0)'}
>
	<Container class="flex h-20 w-screen items-center justify-between" py="none">
		<a href="/" class="relative w-11" class:pointer-events-none={$page.url.pathname === '/'}>
			<p class="sr-only">Andy's logo</p>
			{@html andyLogo}
		</a>

		<div class="-mr-3 flex items-center">
			<a
				href="mailto:andy.stewart1170@gmail.com"
				class="rounded-full bg-transparent p-3 transition-colors can-hover:hover:bg-foreground/10"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 3H18V16H2V3Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linejoin="round"
					/>
					<path
						d="M10 8L3 3H17L10 8Z"
						fill="currentColor"
						stroke="currentColor"
						stroke-width="2"
						stroke-linejoin="round"
					/>
				</svg>
			</a>

			<Listbox bind:value={internalTheme} on:change={() => setTheme(internalTheme)}>
				<ListboxButton
					class="rounded-full bg-transparent p-3 font-medium capitalize transition-colors can-hover:hover:bg-foreground/10"
				>
					<p class="sr-only">Theme select</p>
					{@html contrast}
				</ListboxButton>
				<ListboxOptions
					class="absolute right-0 mt-1 w-32 origin-top-right scale-50 rounded border border-foreground/10 bg-surface-mid py-1 opacity-0 shadow-lg transition-none ease-out-5 focus:outline-0 data-[state=open]:scale-100 data-[state=open]:opacity-100 data-[state=open]:transition-all data-[state=open]:duration-500 data-[state=open]:ease-out-5"
				>
					{#each options as option}
						<ListboxOption
							value={option.name}
							class="group flex items-center gap-2 px-4 py-2 text-sm font-medium capitalize data-[active=true]:bg-foreground/10 data-[active=true]:data-[selected=true]:bg-foreground data-[selected=true]:bg-foreground data-[active=true]:data-[selected=true]:text-background data-[selected=true]:text-background"
						>
							{@html option.icon}
							{option.name}
						</ListboxOption>
					{/each}
				</ListboxOptions>
			</Listbox>
		</div>
	</Container>
</div>
