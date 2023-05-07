<script lang="ts">
	import '$lib/styles/app.postcss';
	import NavTop from '@globals/chrome/NavTop.svelte';
	import Footer from '@globals/chrome/Footer.svelte';
	import NavBottom from '@globals/chrome/NavBottom.svelte';
	import ViewTransition from '@globals/layout/ViewTransition.svelte';
	import type { LayoutServerData } from './$types';
	import Container from '@globals/layout/Container.svelte';

	export let data: LayoutServerData;
</script>

<NavTop theme={data.theme} />
<NavBottom />
<ViewTransition pathname={data.pathname}>
	<slot />
	<Footer />
</ViewTransition>
<!-- <Container
	py="none"
	class="pointer-events-none fixed left-0 top-0 z-50 grid h-screen w-screen select-none grid-cols-6 gap-x-8 lg:grid-cols-12"
>
	{#each new Array(12) as _}
		<div class="h-full bg-cyan-500/20" />
	{/each}
</Container> -->
