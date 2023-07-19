<script lang="ts">
	import "$lib/styles/app.postcss";
	import NavTop from "@globals/chrome/NavTop.svelte";
	import Footer from "@globals/chrome/Footer.svelte";
	import NavBottom from "@globals/chrome/NavBottom.svelte";
	import ViewTransition from "@globals/layout/ViewTransition.svelte";
	import type { LayoutServerData } from "./$types";
	import { page } from "$app/stores";

	export let data: LayoutServerData;
	const fallbackTitle = "Andy Stewart | Design + Code";
	const fallbackDescription =
		"I’m Andy Stewart, a designer working at the intersection of brand and technology. Currently slinging pixels at Turnstyle in Seattle, WA.";
	const fallbackOGImage = "og-default.jpg";
</script>

<svelte:head>
	<title>{$page.data.meta?.title ?? fallbackTitle}</title>
	<meta name="description" content={$page.data.meta?.description ?? fallbackDescription} />
	<meta property="og:image" content={`/social/${$page.data.meta?.ogImage ?? fallbackOGImage}`} />
</svelte:head>

<NavTop theme={data.theme} />
<NavBottom />
<ViewTransition pathname={data.pathname}>
	<div class="relative z-10">
		<slot />
	</div>
	<Footer />
</ViewTransition>
