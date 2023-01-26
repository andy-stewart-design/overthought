import { tools, skills } from '$lib/content/about';

interface WorkExperience {
	role: string;
	company: string;
	link?: string;
	years: string | string[];
	location: string;
	summary?: string;
}

interface ProfessionalExperiences {
	category: string;
	positions: WorkExperience[];
}

interface ProofPoint {
	category: string;
	link?: string;
	items: string[];
}

export const jobs: ProfessionalExperiences = {
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

export const teaching: ProfessionalExperiences = {
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
				"I've been involved with SVC for almost as long as I've been in Seattle, and began teaching classes there on visual and UI design in 2018. I enjoy working closely with students, helping them internalize concepts through a mix of lecture, discussion, hands-on assignments, and critiques."
		},
		{
			role: 'Silkscreen Instructor',
			company: 'The Vera Project',
			link: 'https://www.svcseattle.com/',
			years: ['2016', '2018'],
			location: 'Seattle, WA',
			summary:
				'My first foray into teaching was actually through screen printing. I loved being able to show people, especially those of use used to staring at screens all day, how to roll up their sleeves and sling ink around.'
		}
	]
};

export const education: ProfessionalExperiences = {
	category: 'Education',
	positions: [
		{
			role: 'Graphic Design',
			company: 'The Portfolio Center',
			link: 'https://miamiadschool.com/locations/atlanta/',
			years: ['2011', '2013'],
			location: 'Atlanta, GA'
		},
		{
			role: 'B.A. English + Comm. Studies',
			company: 'Furman University',
			link: 'https://www.furman.edu/',
			years: ['2006', '2010'],
			location: 'Greenville, SC'
		}
	]
};

export const proofPoints: ProofPoint[] = [
	{ category: 'Skills', items: skills },
	{ category: 'Tools', link: '/about/uses', items: tools }
];
