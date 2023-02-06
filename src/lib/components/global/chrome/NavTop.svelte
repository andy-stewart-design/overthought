<script lang="ts">
	import { page } from '$app/stores';
	import andyLogo from '@svg/andy-logo.svg?raw';
	import ThemeToggle from './ThemeToggle.svelte';
	import Container from '@globals/layout/Container.svelte';
</script>

<Container class="absolute top-0 left-0 flex justify-between items-center w-screen z-50">
	<a href="/" class="relative w-11" class:pointer-events-none={$page.url.pathname === '/'}>
		{@html andyLogo}
	</a>
	<ThemeToggle />
</Container>
