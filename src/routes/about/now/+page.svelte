<script lang="ts">
	import Container from '@globals/layout/Container.svelte';

	const activities = [
		{
			headline: 'Learning Three.js',
			summary:
				"After using it for a project a couple of years ago, I’ve wanted to properly learn how to use Three.js—the most popular and full-featured library for implementing 3D experiences on the web. I'm most excited about getting into shaders and combining it with generative design techniques.",
			image: '/img/now/three.webp'
		},
		{
			headline: 'Making Music',
			summary:
				'I bought an OP-1 synthesizer and a license for Ableton Live a few months ago. I have played music on and off throughout my life, but now having the ability to quickly loop and layer sounds has been equal parts exciting and humbling, as are all new ventures.',
			image: '/img/now/op1.webp'
		},
		{
			headline: 'Shaking and Stirring',
			summary:
				'For most of my adult life, I have been a beer person surrounded by beer people. Recently, though, I’ve been spending more time in the world of cocktails—both when I’m out with friends and, more interestingly, when I’m at home and can explore and appreciate what goes into and shapes a drink. Shoutout to <a href="https://cocktailswithsuderman.substack.com/">Peter Suderman.</a>',
			image: '/img/now/three.webp'
		},
		{
			headline: 'Planning a Trip Abroad',
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
			image: '/img/now/three.webp'
		}
	];
</script>

<Container as="main" py="xl" class="grid gap-8 bg-background">
	<header class="grid gap-16 bg-background">
		<div class="flex justify-between items-end">
			<h1 class="text-8xl md:text-9xl">Currently</h1>
			<h6 class="font-[450] text-sm pb-[13px]">updated: 02/02/2023</h6>
		</div>
		<p class="text-xl text-foreground/85 max-w-xl">
			A short list of things I'm currently working on, learning, and doing. If it hasn't been
			updated in a while, let me know.
		</p>
	</header>
	<section class="grid grid-cols-2 gap-8">
		{#each activities as activity}
			<div class="grid gap-4 content-start border border-light rounded-2xl p-6">
				<img class="w-full mb-2" src={activity.image} alt="" width="1920" height="1080" />
				<h2 class="font-medium text-2xl">{activity.headline}</h2>
				<p class="text-foreground/85">
					{@html activity.summary}
				</p>
			</div>
		{/each}
	</section>
</Container>
