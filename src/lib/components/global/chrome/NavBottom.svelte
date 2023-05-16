<script lang="ts">
	import { page } from '$app/stores';
	import { footerVisibility } from './Footer.svelte';
	// import { Button } from 'neutral-ui';
	// import NavSettings from './NavSettings.svelte';

	interface NavLinks {
		href: string;
		text: string;
	}

	const links: NavLinks[] = [
		{ href: '/', text: 'Feed' },
		{ href: '/projects', text: 'Work' },
		// { href: '/feed', text: 'Feed' },
		// { href: '/posts', text: 'Posts' },
		{ href: '/about', text: 'About' }
	];

	// let isSettingsActive = false;

	function getActivePath(path: string) {
		const slug = path.split('/').slice(0, 2).join('/');
		if (slug) return slug;
		else console.error('Could not find the active pathname');
	}

	$: activePath = getActivePath($page.url.pathname);
</script>

<nav
	class="before:border-1 fixed bottom-8 left-1/2 z-40 -translate-x-1/2 rounded-full bg-surface-high/50 p-1.5 shadow-xl backdrop-blur transition-transform duration-300 ease-out-3 before:absolute before:-bottom-px before:-left-px before:-right-px before:-top-px before:rounded-full before:border before:border-light"
	style:transform={$footerVisibility > 0.5 ? 'translate(-50%, 200%)' : 'translate(-50%, 0)'}
>
	<ul class="flex items-center gap-1">
		{#each links as link}
			<li class="group relative">
				<div
					class="absolute left-0 top-0 h-full w-full rounded-full bg-foreground/90 opacity-0 transition-opacity ease-out group-hover:opacity-10 active:opacity-100 group-hover:active:opacity-100"
					class:active={activePath === link.href}
					aria-hidden="true"
				/>
				<a
					class="relative block select-none px-5 py-3 font-medium transition-colors active:text-background"
					class:active={activePath === link.href}
					class:pointer-events-none={$page.url.pathname === link.href}
					href={link.href}
					data-sveltekit-preload-data="hover">{link.text}</a
				>
			</li>
		{/each}
		<!-- <li class="relative border-l pl-1 border-light">
			<Button
				class="group relative p-3"
				label="More settings"
				on:click={() => (isSettingsActive = !isSettingsActive)}
			>
				<div
					class="absolute left-0 top-0 h-full w-full rounded-full bg-foreground/90 opacity-0 transition-opacity ease-out group-hover:opacity-10 active:opacity-100 group-hover:active:opacity-100"
					class:active={isSettingsActive}
					aria-hidden="true"
				/>
				<svg viewBox="0 0 24 24" width="24" height="24" class="relative">
					<g
						class="fill-foreground transition-colors ease-out active:fill-background"
						class:active={isSettingsActive}
					>
						<circle cx="4" cy="12" r="2" />
						<circle cx="12" cy="12" r="2" />
						<circle cx="20" cy="12" r="2" />
					</g>
				</svg>
			</Button>
			<NavSettings bind:active={isSettingsActive} />
		</li> -->
	</ul>
</nav>
