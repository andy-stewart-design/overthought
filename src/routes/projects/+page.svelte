<script lang="ts">
	import Container from '@globals/layout/Container.svelte';
	import WorkCard from '$lib/components/cards/WorkCard.svelte';

	const featuredProjects = [
		{
			client: 'Teague',
			summary: 'is a design consultancy turning human aspiration into products and experiences',
			tags: ['Web Design', 'Digital Strategy'],
			year: 2023,
			img: {
				src: 'https://res.cloudinary.com/andystewartdesign/image/upload/v1683815683/work/teague/Teague-WorkCard.jpg',
				alt: 'lorem ipsum'
			},
			link: {
				text: 'View Site',
				href: 'https://teague.com/'
			}
		},
		{
			client: 'GLY',
			summary:
				'is a general contractor building resilient, future-ready communities in the Pacific Northwest',
			tags: ['Web Design', 'Digital Strategy'],
			year: 2021,
			img: {
				src: 'https://res.cloudinary.com/andystewartdesign/image/upload/v1683813831/work/gly/GLY-WorkCard.jpg',
				alt: 'lorem ipsum'
			},
			link: {
				text: 'View Site',
				href: 'https://www.gly.com/'
			}
		}
	];

	const projects = [
		{
			client: 'Squiggler',
			summary: 'is a free generative design tool for creating custom SVG waves and squiggles',
			tags: ['Development', 'UI Design'],
			year: 2022,
			img: {
				src: 'https://res.cloudinary.com/andystewartdesign/image/upload/v1683813270/work/development/Squiggler-WorkCard.jpg',
				alt: 'lorem ipsum'
			},
			link: {
				text: 'View App',
				href: 'https://www.squiggler.app/'
			}
		},
		{
			client: 'AllStock + Get Some Ipsum',
			summary: 'are Figma plugins helping to streamline design workflows',
			tags: ['Figma Plugin', 'Development'],
			year: 2023,
			img: {
				src: 'https://res.cloudinary.com/andystewartdesign/image/upload/v1683642100/work/figma/AllStock-WorkCard.jpg',
				alt: 'lorem ipsum'
			},
			link: {
				text: 'View Plugin',
				href: 'https://www.figma.com/community/plugin/1235675201027690011/AllStock'
			}
		},
		{
			client: 'Carbon Direct',
			summary: 'is working to make climate science actionable at scale',
			tags: ['Identity', 'Web Design', 'Creative Coding'],
			year: 2022,
			img: {
				src: 'https://res.cloudinary.com/andystewartdesign/image/upload/v1683810818/work/carbon-direct/CarbonDirect-WorkCard.jpg',
				alt: 'lorem ipsum'
			}
		}
		// {
		// 	client: 'Cipher News',
		// 	summary: 'is a climate-focused publication exploring the transition to net-zero',
		// 	tags: ['Product Design', 'User Experience'],
		// 	year: 2023,
		// 	img: {
		// 		src: 'https://assets.website-files.com/635ed3243ea9359a5f0b5a90/6457e0369a2c3a84a24de580_thumbnail.jpg',
		// 		alt: 'lorem ipsum'
		// 	}
		// }
	];
</script>

<main class="bg-background">
	<Container as="header" py="lg" class="grid border-b uppercase tracking-tighter border-light">
		<h1 class="text-8xl md:text-9xl">Recent Work</h1>
	</Container>
	<div class="grid md:grid-cols-2">
		{#each featuredProjects as project}
			<WorkCard {project} />
		{/each}
	</div>
	<div class="grid md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<WorkCard grid {project} />
		{/each}
	</div>
</main>
