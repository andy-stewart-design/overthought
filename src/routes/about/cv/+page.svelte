<script lang="ts">
	import Container from '@globals/layout/Container.svelte';

	interface WorkExperience {
		role: string;
		company: string;
		link?: string;
		years: string | string[];
		location: string;
		summary: string;
	}

	interface ProfessionalExperiences {
		category: string;
		positions: WorkExperience[];
	}

	const jobs: ProfessionalExperiences = {
		category: 'Work Experience',
		positions: [
			{
				role: 'Digital Design Director',
				company: 'Turnstyle',
				link: 'https://turnstyle.studio/',
				years: ['2020', 'Now'],
				location: 'Seattle, WA',
				summary:
					'I am currently the lead designer for digital projects at Turnstyle, a full-service creative agency in Seattle. I guide projects and teams from kickoff to launch and am involved in every step of the process—from scoping and project definition, to user experience design and information architecture, to user interface design and development.'
			},
			{
				role: 'Senior Designer',
				company: 'Turnstyle',
				link: 'https://turnstyle.studio/',
				years: ['2018', '2020'],
				location: 'Seattle, WA',
				summary:
					'Although I worked on a wide variety of projects as a Senior Designer at Turnstyle—including identity, packaging, print, and environmental design—it was also the time when I began to focus on and hone my craft as a digital designer. After working with leadership to evolve our process and approach to digital projects, I eventually took over the Digital Design Director role.'
			},
			{
				role: 'Independent Creative',
				company: 'Andy Stewart Design, LLC',
				years: ['2015', '2018'],
				location: 'Seattle, WA',
				summary:
					'As a one-man design shop, I worked with companies, design agencies, and individuals to translate their ideas, values, and dreams into clear strategies and effective visuals. On the side, I also taught silkscreen and letterpress printing.'
			},
			{
				role: 'Designer',
				company: 'Intentional Futures',
				link: 'https://www.intentionalfutures.com/',
				years: ['2014', '2015'],
				location: 'Seattle, WA',
				summary:
					'Intentional Futures is a strategy & design studio exploring big questions about what the future could hold. I developed design solutions for a variety of complex projects in technology, global health, and education.'
			},
			{
				role: 'Designer',
				company: 'Tether',
				link: 'https://tether.com/',
				years: ['2013', '2014'],
				location: 'Seattle, WA',
				summary:
					'I moved from Atlanta to Seattle to work for Tether, a multidisciplinary design agency lead by Stanley Hainsworth. It was my first job out of design school and provided me with a wide variety of creative opportunities, from identity and packaging to trade shows and installations.'
			},
			{
				role: 'Design Fellow',
				company: 'Son&Sons',
				link: 'https://sonandsons.com/',
				years: ['2013'],
				location: 'Atlanta, GA',
				summary:
					'Son&Sons is a brand design firm based in Atlanta, GA. I worked with the team to develop a brand position and comprehensive visual identity for the Buckminster Fuller Institute. This was my first real-world design project, completed while I was a student at the Portfolio Center.'
			}
		]
	};

	const teaching = {
		category: 'Teaching',
		positions: [
			{
				role: 'Figma Guru',
				company: 'Turnstyle',
				link: 'https://turnstyle.studio/',
				years: ['2020', 'Now'],
				location: 'Seattle, WA',
				summary:
					"Over the past couple of years, I've lead the charge for our team to adopt Figma for all digital projects. As part of this effort, I facillitated regular workshops with our team—some of whom were familiar with Sketch, but some of whom were still designing sites in Illustrator—to talk about Figma and responsive design more broadly."
			},
			{
				role: 'Design Instructor',
				company: 'School of Visual Concepts',
				link: 'https://www.svcseattle.com/',
				years: ['2018', '2022'],
				location: 'Seattle, WA',
				summary:
					"I've been involved with SVC for almost as long as I've been in Seattle, and began teaching classes there on visual and UI design in 2018."
			},
			{
				role: 'Silkscreen Instructor',
				company: 'The Vera Project',
				link: 'https://www.svcseattle.com/',
				years: ['2016', '2018'],
				location: 'Seattle, WA',
				summary:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis. Voluptatem ratione tempora eum, distinctio deleniti debitis.'
			}
		]
	};
	const professionalExperiences = [jobs, teaching];

	// const proExp = [
	// 	{
	// 		category: 'work',
	// 		role: 'Senior Designer',
	// 		company: 'Turnstyle',
	// 		link: 'https://turnstyle.studio/',
	// 		years: ['2018', '2020'],
	// 		location: 'Seattle, WA',
	// 		summary:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis. Voluptatem ratione tempora eum, distinctio deleniti debitis.'
	// 	},
	// 	{
	// 		category: 'work',
	// 		role: 'Independent Creative',
	// 		company: 'Andy Stewart Design, LLC',
	// 		years: ['2015', '2018'],
	// 		location: 'Seattle, WA',
	// 		summary:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis. Voluptatem ratione tempora eum, distinctio deleniti debitis.'
	// 	},
	// 	{
	// 		category: 'work',
	// 		role: 'Digital Design Director',
	// 		company: 'Turnstyle',
	// 		link: 'https://turnstyle.studio/',
	// 		years: ['2020', 'Now'],
	// 		location: 'Seattle, WA',
	// 		summary:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis. Voluptatem ratione tempora eum, distinctio deleniti debitis.'
	// 	},

	// 	{
	// 		category: 'work',
	// 		role: 'Designer',
	// 		company: 'Tether',
	// 		link: 'https://tether.com/',
	// 		years: ['2013', '2014'],
	// 		location: 'Seattle, WA',
	// 		summary:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis. Voluptatem ratione tempora eum, distinctio deleniti debitis.'
	// 	},
	// 	{
	// 		category: 'work',
	// 		role: 'Design Fellow',
	// 		company: 'Son&Sons',
	// 		link: 'https://sonandsons.com/',
	// 		years: ['2013', '2013'],
	// 		location: 'Atlanta, GA',
	// 		summary:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis. Voluptatem ratione tempora eum, distinctio deleniti debitis.'
	// 	},
	// 	{
	// 		category: 'work',
	// 		role: 'Designer',
	// 		company: 'Intentional Futures',
	// 		link: 'https://www.intentionalfutures.com/',
	// 		years: ['2014', '2015'],
	// 		location: 'Seattle, WA',
	// 		summary:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis. Voluptatem ratione tempora eum, distinctio deleniti debitis.'
	// 	},
	// 	{
	// 		category: 'teaching',
	// 		role: 'Figma Guru',
	// 		company: 'Turnstyle',
	// 		link: 'https://turnstyle.studio/',
	// 		years: ['2020', 'Now'],
	// 		location: 'Seattle, WA',
	// 		summary:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis. Voluptatem ratione tempora eum, distinctio deleniti debitis.'
	// 	},
	// 	{
	// 		category: 'teaching',
	// 		role: 'Design Instructor',
	// 		company: 'School of Visual Concepts',
	// 		link: 'https://www.svcseattle.com/',
	// 		years: ['2018', '2022'],
	// 		location: 'Seattle, WA',
	// 		summary:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis. Voluptatem ratione tempora eum, distinctio deleniti debitis.'
	// 	}
	// ];

	// const orderedJobs = proExp.sort((a, b) => {
	// 	if (parseInt(a.years[0]) === parseInt(b.years[0])) {
	// 		return parseInt(b.years[1]) - parseInt(a.years[1]);
	// 	}
	// 	return parseInt(b.years[0]) - parseInt(a.years[0]);
	// });

	// const categorizedJobs = orderedJobs.reduce(
	// 	(acc: { [key: string | number]: any[] }, experience: any) => {
	// 		const key = experience.category;
	// 		if (!acc[key]) {
	// 			acc[key] = [];
	// 		}
	// 		acc[key].push(experience);
	// 		return acc;
	// 	},
	// 	{}
	// );
</script>

<Container py="xl" class="bg-background">
	<main class="grid gap-12 font-[375] max-w-3xl mx-auto">
		<header class="flex gap-8 items-center">
			<div class="w-28 h-28 bg-surface-high rounded-full" />
			<div class="grid gap-1">
				<h1 class="font-medium text-2xl">Andy Stewart</h1>
				<h2>Strategy, Design + Frontend Development with an Eye for Detail</h2>
				<p class="opacity-60">Seattle, WA</p>
			</div>
		</header>
		<section class="grid gap-8">
			<h3 class="font-[400] text-sm">About</h3>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officiis omnis.
				Voluptatem ratione tempora eum, distinctio deleniti debitis.
			</div>
		</section>
		<section class="grid gap-8">
			{#each professionalExperiences as exp}
				<h3 class="font-[400] text-sm">{exp.category}</h3>
				{#each exp.positions as job}
					<div class="grid grid-cols-4 mb-2">
						<div class="opacity-60">
							{#if job.years.length > 1}
								{job.years[0]}-{job.years[1]}
							{:else}
								{job.years[0]}
							{/if}
						</div>
						<div class="grid gap-2 col-span-3">
							<h4 class="font-medium">
								{job.role} —
								{#if job.link}
									<a href={job.link}>{job.company} <span class="opacity-60">↗</span></a>
								{:else}
									{job.company}
								{/if}
							</h4>
							<p class="opacity-60">{job.location}</p>
							<p>{job.summary}</p>
						</div>
					</div>
				{/each}
			{/each}
		</section>
	</main>
</Container>
