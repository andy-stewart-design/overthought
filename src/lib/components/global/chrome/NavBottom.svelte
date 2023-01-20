<script lang="ts">
	import { page } from '$app/stores';

	interface NavLinks {
		href: string;
		text: string;
	}

	const links: NavLinks[] = [
		{ href: '/', text: 'Home' },
		// { href: '/work', text: 'Work' },
		// { href: '/feed', text: 'Feed' },
		// { href: '/posts', text: 'Posts' },
		{ href: '/about', text: 'About' }
	];

	function getActivePath(path: string) {
		const slug = path.split('/').slice(0, 2).join('/');
		if (slug) return slug;
		else console.error('Could not find the active pathname');
	}

	$: activePath = getActivePath($page.url.pathname);
</script>

<nav
	class="fixed bottom-8 left-1/2 -translate-x-1/2 p-1.5 bg-surface-low/50 backdrop-blur rounded-full z-40 shadow-xl before:border before:border-1 before:border-foreground/15 before:absolute before:-top-px before:-left-px before:-right-px before:-bottom-px before:rounded-full"
>
	<ul class="flex gap-1">
		{#each links as link}
			<li class="group relative">
				<div
					class="absolute top-0 left-0 w-full h-full bg-foreground rounded-full opacity-0 transition-opacity ease-out group-hover:opacity-10 active:opacity-100 group-hover:active:opacity-100"
					class:active={activePath === link.href}
					aria-hidden="true"
				/>
				<a
					class="relative block font-medium select-none py-3 px-5 sm:px-6 transition-colors active:text-background"
					class:active={activePath === link.href}
					class:pointer-events-none={$page.url.pathname === link.href}
					href={link.href}
					data-sveltekit-preload-data="hover">{link.text}</a
				>
			</li>
		{/each}
	</ul>
</nav>
