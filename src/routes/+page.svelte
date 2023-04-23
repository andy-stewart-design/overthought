<script lang="ts">
	import HomeBg from '$lib/components/canvas/HomeBG.svelte';
	import FeedCard from '$lib/components/feed/FeedCard.svelte';
	import Container from '@globals/layout/Container.svelte';
	import Observer from '@globals/layout/Observer.svelte';
	import type { FeedPost } from '$lib/types/feed';

	const date = new Date();

	const month = date.toLocaleString('default', { month: 'short' });
	const day = date.getDate();

	const posts: FeedPost[] = [
		{
			title: 'Carbon Direct Navigation',
			body: `For the team modal on Carbon Direct's sites, we wanted to leverage the best parts of single- and multi-page apps. When a team member's card is clicked, we intercept the navigation, update the URL bar, and open a modal displaying their profile without reloading the page. When the modal is closed, the previous URL is restored and, because we never left the page, we're able to seamlessly return the user to the exact spot they left off.`,
			date: `${month} ${day}`,
			video: {
				src: '/work/carbon-direct/CarbonDirect-Mobile.mp4',
				poster: '/work/carbon-direct/CarbonDirect-Mobile-Poster.jpg',
				width: 1920,
				height: 1080
			},
			categories: ['Case Study', 'Web Design']
		},
		{
			title: 'GLY Page Transitions',
			body: `I've personally trended towards simpler, quicker page transitions recently, but the ones on GLY's site are one of the features that people comment on most. I think it's the quick pop of color you get as the page animates off combined with the fact that the entrance animations happen relatively quickly.`,
			date: `${month} ${day}`,
			video: {
				src: '/work/gly/GLY-PageTransitions.mp4',
				poster: '/work/gly/GLY-PageTransitions-Poster.jpg',
				width: 1920,
				height: 1080
			},

			categories: ['Case Study', 'Web Design']
		},
		{
			title: 'GLY Web Mobile',
			body: `There's always a handful of modules where the responsive design approach isn't immediately obvious. Take the "Constructive Optimism" component for example—you have a circle centered inside a div that in turn has text centered inside of it. Part of what makes it visually interesting is having two sides of the circle cropped off the screen at all times. It took a bit of wrangling to make sure that we were always cropping either the top and bottom or left and right, depending on the screen size.`,
			date: `${month} ${day}`,
			img: {
				src: '/work/gly/GLY-Web-Mobile.jpg',
				alt: 'Mobile screenshots of the GLY website',
				width: 1920,
				height: 1080
			},
			categories: ['Case Study', 'Web Design']
		},
		{
			title: 'Get Some Ipsum',
			body: `This is my first Figma plugin—a simple, flexible lorem ipsum generator. It smoothes out some of the issues I have with other, similar plugins. Specifically, it runs through a bunch of custom logic before outputting the result to make sure that you end up with ipsum that look more like proper sentences (insofar as a dead language can look like English).`,
			date: `${month} ${day}`,
			img: {
				src: '/work/figma/GetSomeIpsum-CoverArt.jpg',
				alt: 'Mobile screenshots of the GLY website',
				width: 1920,
				height: 960
			},
			link: {
				text: 'Check it out',
				href: 'https://www.figma.com/community/plugin/1225446981019698507/Get-Some-Ipsum',
				external: true
			},
			categories: ['Figma', 'Development']
		}
	];
</script>

<Observer let:observe let:activeTitle>
	<main class="grid grid-cols-12 gap-x-8 border-b bg-background border-light">
		<!-- <HomeBg /> -->
		<div class="col-span-4">
			<Container class="sticky top-0 min-h-screen" pt="xl">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt magni, cumque
					quisquam in dolorem facere dignissimos earum, vel labore officia? Veniam maiores eligendi
					sunt possimus consequuntur illum magnam tempora?
				</p>
			</Container>
		</div>
		<Container as="section" pt="none" pb="none" pxNone class="col-span-8 min-h-screen">
			<div class="border-l border-r border-light">
				<div
					class="sticky top-0 z-50 flex h-20 items-center border-b bg-background/70 px-2 py-7 backdrop-blur-md border-light"
				>
					<h1 class="grow text-center text-sm font-medium">{activeTitle}</h1>
				</div>
				{#each new Array(10) as _, index}
					<FeedCard content={posts[index % posts.length]} {observe} {index} />
				{/each}
			</div>
			<!-- <div class="relative max-w-4xl mx-auto">
				<h1 class="font-[450] text-4xl md:text-5xl !leading-[1.2] text-foreground/70">
					<span class="text-foreground">Andy Stewart</span>
					designs future-focused visual systems — often for screens, sometimes not. He is currently the
					Digital Creative Director at
					<a href="https://turnstyle.studio/" target="_blank" rel="noreferrer" class="text-foreground"
					>Turnstyle</a
					>.
				</h1>
			</div> -->
		</Container>
	</main>
</Observer>
