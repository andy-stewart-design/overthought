<script lang="ts">
	import '$lib/styles/app.postcss';
	import NavTop from '@globals/chrome/NavTop.svelte';
	import Footer from '@globals/chrome/Footer.svelte';
	import NavBottom from '@globals/chrome/NavBottom.svelte';
	import ViewTransition from '@globals/layout/ViewTransition.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<NavTop theme={data.theme} />
<NavBottom />
<ViewTransition pathname={data.pathname}>
	<slot />
	<Footer />
</ViewTransition>
