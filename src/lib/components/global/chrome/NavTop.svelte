<script lang="ts">
	import { page } from '$app/stores';
	import andyLogo from '@svg/andy-logo.svg?raw';
	import ThemeToggle from './ThemeToggle.svelte';
	import Container from '@globals/layout/Container.svelte';
</script>

<Container class="absolute left-0 top-0 z-50 flex w-screen items-center justify-between">
	<a href="/" class="relative w-11" class:pointer-events-none={$page.url.pathname === '/'}>
		<p class="sr-only">Andy's logo</p>
		{@html andyLogo}
	</a>
	<!-- <ThemeToggle /> -->
</Container>
