<script lang="ts">
	import Container from '@globals/layout/Container.svelte';

	const activities = [
		{
			headline: 'Learning Three.js',
			summary:
				"After using it for a project a couple of years ago, I have wanted to properly learn to use Three.js, the most popular and full-featured library for implementing 3D experiences on the web. I'm most excited about getting into shaders and combining it with generative design techniques."
		},
		{
			headline: 'Making Music',
			summary:
				'I bought an OP-1 synthesizer and a license for Ableton Live a few months ago. I have played music on and off throughout my life, but now having the ability to quickly loop and layer sounds has changed the way I think about exploring musical ideas.'
		},
		{
			headline: 'Shaking and Stirring',
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'
		},
		{
			headline: 'Planning a Trip Abroad',
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'
		}
	];
</script>

<main class="bg-background">
	<Container pt="xl" pb="md" class="grid gap-6">
		<div class="flex justify-between items-end">
			<h1 class="text-8xl md:text-9xl">Now</h1>
			<h6 class="font-[450] text-sm pb-[13px]">updated: 01/30/2023</h6>
		</div>
		<p class="text-xl text-foreground/85 max-w-xl">
			A short list of things I'm currently working on, learning, and doing. If it hasn't been
			updated in a while, let me know.
		</p>
	</Container>
	<Container pb="xl" class="grid grid-cols-2 gap-8">
		{#each activities as activity}
			<div class="grid gap-4 content-start border border-light rounded-xl p-6">
				<h2 class="font-medium text-xl">{activity.headline}</h2>
				<p class="text-foreground/85">
					{activity.summary}
				</p>
			</div>
		{/each}
	</Container>
</main>
