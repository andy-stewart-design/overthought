<script lang="ts">
	// import HomeBg from '$lib/components/canvas/HomeBG.svelte';
	import FeedCard from '$lib/components/feed/FeedCard.svelte';
	import Container from '@globals/layout/Container.svelte';
	import Observer from '@globals/layout/Observer.svelte';
	import timeline from '@content/timeline.json';
	import Image from '$lib/components/media/Image.svelte';
</script>

<Observer let:observe>
	<main class="border-b bg-background border-light lg:grid lg:grid-cols-12">
		<!-- <HomeBg /> -->
		<div class="relative border-b border-light lg:col-span-5 xl:col-span-4">
			<Container py="md" class="grid gap-y-5 lg:sticky lg:top-20">
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
					I work at the intersection of brand and technology designing future-focused visual systems
					— often for screens, sometimes not. I'm currently the Digital Creative Director at
					Turnstyle, a small-yet-mighty creative studio in Seattle, where I help bring life to
					brands through strategic, thoughtful design.
				</p>
			</Container>
		</div>
		<div class="relative min-h-screen border-l border-r border-light lg:col-span-7 xl:col-span-8">
			{#each timeline.entries as entry, index}
				<FeedCard content={entry} {observe} {index} />
			{/each}
		</div>
	</main>
</Observer>
