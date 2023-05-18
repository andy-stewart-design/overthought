<script lang="ts">
	// import HomeBg from '$lib/components/canvas/HomeBG.svelte';
	import FeedCard from '$lib/components/cards/FeedCard.svelte';
	import Container from '@globals/layout/Container.svelte';
	import Observer from '@globals/layout/Observer.svelte';
	import Image from '$lib/components/media/Image.svelte';
	import timeline from '@content/timeline.json';
</script>

<Observer let:observe>
	<main class="border-b bg-background border-light lg:grid lg:grid-cols-12">
		<!-- <HomeBg /> -->
		<div class="relative border-b border-light lg:col-span-5 lg:border-b-0 xl:col-span-4">
			<Container py="md" pb="xl" class="grid gap-y-5 !pb-10 !pt-10 lg:sticky lg:top-20 lg:!pb-30">
				<div class="flex items-center gap-4">
					<Image
						cloud
						src="/about/andy-headshot-square.jpg"
						alt="Headshot"
						class="h-14 w-14 rounded-full bg-surface-mid"
					/>
					<div class="flex flex-col items-start justify-start gap-1">
						<h2 class="text-2xl font-semibold leading-none">Andy Stewart</h2>
						<h3 class="text-sm font-medium opacity-65">Design + Technology</h3>
					</div>
				</div>
				<p class="md:text-lg lg:text-base">
					Hi, I'm Andy. I'm a designer working at the intersection of brand and technology to
					develop future-focused visual systems — often for screens, sometimes not. I'm currently
					the Digital Creative Director at Turnstyle, a small-yet-mighty creative studio in Seattle,
					where I help bring life to brands through strategic, thoughtful design.
				</p>
			</Container>
		</div>
		<div class="relative min-h-screen border-light lg:col-span-7 lg:border-l xl:col-span-8">
			{#each timeline.entries as entry, index}
				<FeedCard content={entry} {observe} {index} />
			{/each}
		</div>
	</main>
</Observer>
