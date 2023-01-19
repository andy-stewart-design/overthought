<script lang="ts">
	import HomeBg from '$lib/components/canvas/HomeBG.svelte';
	import Container from '$lib/components/global/layout/Container.svelte';
	import NavTop from '@lib/components/global/nav/NavTop.svelte';
</script>

<main>
	<HomeBg />
	<NavTop />
	<Container py="xl">
		<section class="relative max-w-4xl mx-auto">
			<h1 class="font-[450] text-4xl md:text-5xl !leading-[1.2] text-gray-400 text-foreground/70">
				<span class="text-foreground">Andy Stewart</span>
				designs future-focused visual systems — often for screens, sometimes not. He is currently the
				Digital Creative Director at
				<a href="https://turnstyle.studio/" target="_blank" rel="noreferrer" class="text-foreground"
					>Turnstyle</a
				>.
			</h1>
		</section>
	</Container>
</main>
