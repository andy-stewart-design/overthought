<script lang="ts">
	import '$lib/styles/app.postcss';
	import NavTop from '@globals/chrome/NavTop.svelte';
	import Footer from '@globals/chrome/Footer.svelte';
	import NavBottom from '@globals/chrome/NavBottom.svelte';
	import ViewTransition from '@globals/layout/ViewTransition.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<NavBottom />
<ViewTransition pathname={data.pathname}>
	<NavTop />
	<slot />
	<Footer />
</ViewTransition>
