<script lang="ts">
	import HomeBg from '$lib/components/canvas/HomeBG.svelte';
	import FeedCard from '$lib/components/feed/FeedCard.svelte';
	import Container from '@globals/layout/Container.svelte';
	import Observer from '@globals/layout/Observer.svelte';
	import timeline from '@content/timeline.json';
	import Image from '$lib/components/media/Image.svelte';
</script>

<!-- <Observer let:observe> -->
<main class="grid grid-cols-12 border-b bg-background border-light">
	<!-- <HomeBg /> -->
	<div class="relative col-span-4">
		<Container class="sticky top-20 grid gap-y-5 py-12" py="none">
			<div class="flex gap-5">
				<Image
					cloud
					src="/about/andy-headshot-square.jpg"
					alt="Headshot"
					class="h-18 w-18 rounded-full bg-surface-mid"
				/>
				<div class="grid gap-1.5">
					<h2 class="inline-block grow text-4xl font-semibold">Andy Stewart</h2>
					<h3 class="text-sm font-medium uppercase tracking-widest opacity-70">
						Design + Technology
					</h3>
				</div>
			</div>
			<p>
				I work at the intersection of brand and technology designing future-focused visual systems —
				often for screens, sometimes not. I'm currently the Digital Creative Director at Turnstyle,
				a small-yet-mighty creative studio in Seattle, where I help bring life to brands through
				strategic, thoughtful design.
			</p>
		</Container>
	</div>
	<div class="relative col-span-8 min-h-screen border-l border-r border-light">
		<Container as="section" pxNone pt="none" pb="none" class="">
			{#each timeline.entries as entry, index}
				<FeedCard content={entry} {index} />
			{/each}
		</Container>
	</div>
</main>
<!-- </Observer> -->
