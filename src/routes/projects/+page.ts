import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const featured = projects.filter((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);

	return {
		projects: {
			featured,
			rest
		}
	};
};

const projects = [
	{
		client: 'Teague',
		summary: 'is a design consultancy turning human aspiration into products and experiences',
		tags: ['Web Design', 'Digital Strategy'],
		year: 2023,
		status: 'Case Study Coming Soon',
		img: {
			src: '/work/teague/Teague-WorkCard.jpg',
			alt: 'lorem ipsum'
		},
		external: {
			text: 'View Site',
			href: 'https://teague.com/'
		},
		featured: true
	},
	{
		client: 'GLY',
		summary:
			'is a general contractor building resilient, future-ready communities in the Pacific Northwest',
		tags: ['Web Design', 'Digital Strategy'],
		year: 2022,
		status: 'Case Study Coming Soon',
		img: {
			src: '/work/gly/GLY-WorkCard.jpg',
			alt: 'lorem ipsum'
		},
		// link: 'gly',
		external: {
			text: 'View Site',
			href: 'https://www.gly.com/'
		},
		featured: true
	},
	{
		client: 'Squiggler',
		summary: 'is a generative design tool for creating SVG waves and squiggles',
		tags: ['Development', 'UI Design'],
		year: 2022,
		status: 'Case Study Coming Soon',
		img: {
			src: '/work/development/Squiggler-WorkCard.jpg',
			alt: 'lorem ipsum'
		},
		external: {
			text: 'View App',
			href: 'https://www.squiggler.app/'
		},
		featured: false
	},
	{
		client: 'AllStock',
		summary: 'is a Figma plugin that simplifies browsing free image libraries',
		tags: ['Figma Plugin', 'Development'],
		year: 2023,
		status: 'Case Study Coming Soon',
		img: {
			src: '/work/figma/AllStock-WorkCard.jpg',
			alt: 'lorem ipsum'
		},
		external: {
			text: 'View Plugin',
			href: 'https://www.figma.com/community/plugin/1235675201027690011/AllStock'
		},
		featured: false
	},
	{
		client: 'Carbon Direct',
		summary: 'is working to make climate science more actionable at scale',
		tags: ['Identity', 'Web Design', 'Creative Coding'],
		year: 2022,
		status: 'Case Study Coming Soon',
		img: {
			src: '/work/carbon-direct/CarbonDirect-WorkCard.jpg',
			alt: 'lorem ipsum'
		},
		featured: false
	},
	{
		client: 'Cipher News',
		summary: 'is a climate-focused publication covering the transition to net-zero',
		tags: ['Product Design', 'User Experience'],
		year: 2023,
		status: 'Work in Progress',
		img: {
			src: '/work/cipher/Cipher-WorkCard.jpg',
			alt: 'lorem ipsum'
		},
		featured: false
	},
	{
		client: 'Vulcan Real Estate',
		summary: 'is working to ensure positive outcomes for all',
		tags: ['Identity', 'Web Design'],
		year: 2023,
		status: 'Work in Progress',
		img: {
			src: '/work/vulcan-real-estate/VRE-WorkCard.jpg',
			alt: 'lorem ipsum'
		},
		featured: false
	},
	{
		client: 'Get Some Ipsum',
		summary: 'is a Figma plugin for generating better placeholder text',
		tags: ['Figma Plugin', 'Development'],
		year: 2023,
		status: 'Case Study Coming Soon',
		img: {
			src: '/work/figma/GetSomeIpsum-WorkCard.jpg',
			alt: 'lorem ipsum'
		},
		external: {
			text: 'View Plugin',
			href: 'https://www.figma.com/community/plugin/1225446981019698507/Get-Some-Ipsum'
		},
		featured: false
	}
];
