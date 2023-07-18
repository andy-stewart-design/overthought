import { tools, skills } from "$lib/content/about";

interface WorkExperience {
	role: string;
	company: string;
	link?: string;
	years: string | string[];
	location: string;
	summary?: string | string[];
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
	category: "Work Experience",
	positions: [
		{
			role: "Digital Design Director",
			company: "Turnstyle",
			link: "https://turnstyle.studio/",
			years: ["2020", "2023"],
			location: "Seattle, WA — Hybrid",
			summary: [
				"Led digital design efforts and presentations, and worked cross-functionally throughout the project lifecycle, including scoping, strategy, UX/IA, interface design, and development.",
				"Communicated design intent and brought notional ideas to life by developing prototypes at varying levels of fidelity using Figma, After Effects, and/or HTML/CSS/JS.",
				"Ensured quality and fidelity of implementation by collaborating closely with development to contribute production-ready code and conduct quality assurance testing.",
				"Continuously improved and evolved our design process by vetting new tools and tech.",
				"Helped coworkers level up their digital design skills—with a specific focus on Figma and responsive web design—by conducting regular internal workshops.",
			],
		},
		{
			role: "Senior Designer",
			company: "Turnstyle",
			link: "https://turnstyle.studio/",
			years: ["2018", "2020"],
			location: "Seattle, WA — On-site",
			summary: [
				"Led and/or contributed to a wide variety of projects including identity, packaging, print, and digital design for clients including Microsoft, Teague, Vulcan, and the Port of Seattle.",
				"Audited and overhauled our digital design process from first principles in collaboration with studio leadership.",
			],
		},
		{
			role: "Independent Creative",
			company: "Andy Stewart Design, LLC",
			years: ["2015", "2018"],
			location: "Seattle, WA — On-site",
			summary: [
				"As a one-man design shop, I translated ambiguous ideas, values, and dreams into clear strategies and effective design solutions by working directly with clients and collaboratively with other studios.",
				"Managed all steps of a project, from business development through final delivery.",
			],
		},
		{
			role: "Designer",
			company: "Intentional Futures",
			link: "https://www.intentionalfutures.com/",
			years: ["2014", "2015"],
			location: "Seattle, WA — On-site",
		},
		{
			role: "Designer",
			company: "Tether",
			link: "https://tether.com/",
			years: ["2013", "2014"],
			location: "Seattle, WA — On-site",
		},
		{
			role: "Design Fellow",
			company: "Son&Sons",
			link: "https://sonandsons.com/",
			years: ["2013"],
			location: "Atlanta, GA — On-site",
		},
	],
};

export const teaching: ProfessionalExperiences = {
	category: "Teaching",
	positions: [
		{
			role: "Figma Onboarding",
			company: "Turnstyle",
			link: "https://turnstyle.studio/",
			years: ["2020", "2023"],
			location: "Seattle, WA",
			summary:
				"Over the past couple of years, I've lead the charge for our team to adopt Figma for all digital projects. As part of this effort, I facillitated regular workshops with our team—some of whom were familiar with Sketch, but some of whom were still designing sites in Illustrator—to talk about Figma and responsive design more broadly.",
		},
		{
			role: "Design Instructor",
			company: "School of Visual Concepts",
			link: "https://www.svcseattle.com/",
			years: ["2018", "2022"],
			location: "Seattle, WA",
			summary:
				"I've been involved with SVC for almost as long as I've been in Seattle, and began teaching classes there on visual and UI design in 2018. I enjoy working closely with students, helping them internalize concepts through a mix of lecture, discussion, hands-on assignments, and critiques.",
		},
		{
			role: "Silkscreen Instructor",
			company: "The Vera Project",
			link: "https://www.svcseattle.com/",
			years: ["2016", "2018"],
			location: "Seattle, WA",
			summary:
				"My first foray into teaching was actually through screen printing. I loved being able to show people, especially those of use used to staring at screens all day, how to roll up their sleeves and sling ink around.",
		},
	],
};

export const education: ProfessionalExperiences = {
	category: "Education",
	positions: [
		{
			role: "Graphic Design",
			company: "The Portfolio Center",
			link: "https://miamiadschool.com/locations/atlanta/",
			years: ["2011", "2013"],
			location: "Atlanta, GA",
		},
		{
			role: "B.A. English + Comm. Studies",
			company: "Furman University",
			link: "https://www.furman.edu/",
			years: ["2006", "2010"],
			location: "Greenville, SC",
		},
	],
};

export const proofPoints: ProofPoint[] = [
	{ category: "Skills", items: skills },
	{ category: "Tools", link: "/about/uses", items: tools },
];
