<script lang="ts">
	import HomeBg from '$lib/components/canvas/HomeBG.svelte';
	import Container from '@globals/layout/Container.svelte';
</script>

<main class="bg-background">
	<HomeBg />
	<Container py="xl" class="min-h-screen" as="section">
		<div class="relative max-w-4xl mx-auto">
			<h1 class="font-[450] text-4xl md:text-5xl !leading-[1.2] text-foreground/70">
				<span class="text-foreground">Andy Stewart</span>
				designs future-focused visual systems — often for screens, sometimes not. He is currently the
				Digital Creative Director at
				<a href="https://turnstyle.studio/" target="_blank" rel="noreferrer" class="text-foreground"
					>Turnstyle</a
				>.
			</h1>
		</div>
	</Container>
</main>
