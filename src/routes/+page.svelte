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
			title: 'Carbon Direct Website',
			body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laborum! Temporibus ipsum,
			voluptatum amet autem doloribus ducimus culpa soluta, sit consectetur voluptas est ab dicta
			qui voluptates nisi quibusdam delectus!`,
			date: `${month} ${day}`,
			img: {
				src: '/work/carbon-direct/CrabonDirect-DesktopScreens_wckacf.jpg',
				alt: 'This is alt text'
			},
			categories: ['Case Study', 'Web Design']
		},
		{
			title: 'GLY Page Transitions',
			body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laborum! Temporibus ipsum,
			voluptatum amet autem doloribus ducimus culpa soluta, sit consectetur voluptas est ab dicta
			qui voluptates nisi quibusdam delectus!`,
			date: `${month} ${day}`,
			video: {
				src: '/work/GLY/GLY-PageTransitions.mp4',
				poster: '/work/GLY/GLY-PageTransitions-Poster.jpg'
			},
			link: {
				text: 'See Project',
				href: '/'
			},
			categories: ['Case Study', 'Web Design']
		},
		{
			title: 'GLY Web Mobile',
			body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laborum! Temporibus ipsum,
			voluptatum amet autem doloribus ducimus culpa soluta, sit consectetur voluptas est ab dicta
			qui voluptates nisi quibusdam delectus!`,
			date: `${month} ${day}`,
			img: {
				src: '/work/GLY/GLY-Web-Mobile.jpg',
				alt: 'Mobile screenshots of the GLY website'
			},
			link: {
				text: 'See Project',
				href: '/'
			},
			categories: ['Case Study', 'Web Design']
		},
		{
			title: 'Get Some Ipsum',
			body: `I published my first Figma plugin—a simple, flexible lorem ipsum generator. It irons out some of the issues I have with other, similar plugins. Specifically, it has a bunch of custom logic to make sure that you end up with sentences that look more like proper sentences.`,
			date: `${month} ${day}`,
			img: {
				src: '/work/Figma/GetSomeIpsum-CoverArt.jpg',
				alt: 'Mobile screenshots of the GLY website'
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

<Observer let:observe>
	<main class="bg-background">
		<!-- <HomeBg /> -->
		<Container as="section" pt="none" pb="xl" class="min-h-screen max-w-[800px] mx-auto">
			<div class="border-l border-r border-light">
				<div
					class="sticky top-0 py-7 px-2 z-50 bg-surface-low/70 backdrop-blur-md border-b border-light"
				>
					<h1 class="font-medium text-sm text-center">Andy Stewart · Design + Technology</h1>
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
