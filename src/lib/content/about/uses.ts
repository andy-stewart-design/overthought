import abletonLogo from "@svg/uses/abletonlive.svg?raw";
import appleIcon from "@svg/uses/apple.svg?raw";
import beyerdynamicIcon from "@svg/uses/beyerdynamic.svg?raw";
import githubIcon from "@svg/uses/github.svg?raw";
import sonosLogo from "@svg/uses/sonos.svg?raw";
import sonyLogo from "@svg/uses/sony.svg?raw";
import teLogo from "@svg/uses/teenageengineering.svg?raw";
import vercelLogo from "@svg/uses/vercel.svg?raw";

export interface Tool {
	name: string;
	descr: string;
	category: string;
	link?: string;
}

export interface ToolSet {
	brand: string;
	logo: string;
	inlineLogo?: boolean;
	link?: string;
	tools: Tool[];
}

export const toolData: { [key: string]: ToolSet[] } = {
	design: [
		{
			brand: "Figma",
			logo: "figma.svg",
			link: "https://www.figma.com/",
			tools: [
				{
					name: "Figma",
					category: "Digital Design",
					descr:
						"Like a lot of the industry, Figma has become my most used, and loved, tool for day-to-day design work—so much so that I spent the better part of the past two years running workshops to help my team at Turnstyle adopt it as our primary digital design program.",
				},
			],
		},
		{
			brand: "Adobe",
			logo: "adobecc.svg",
			link: "https://www.adobe.com/creativecloud.html",
			tools: [
				{
					name: "Adobe Creative Cloud",
					category: "App Suite",
					descr: `I've been entrenched in Adobe’s ecosystem for over a decade—my first version of Photoshop was CS5—but I’m increasingly keen to explore alternatives like <a href='https://affinity.serif.com/en-us/'>Affinity’s</a> suite of apps, <a href="https://www.pixelmator.com/pro/">Pixelmator Pro</a>, and the browser-based motion tool <a href='https://www.fable.app/'>Fable</a>.`,
				},
				{
					name: "Illustrator",
					category: "Vector Drawing",
					descr:
						"I have increasingly moved some of my vector work to Figma, which I think is especially good for things like icon design, but for work that is more nuanced or exploratory, I still prefer a dedicated vector drawing program.",
				},
				{
					name: "Photoshop",
					category: "Photo Editing",
					descr:
						"I tend to use photoshop mostly for production-grade raster image editing. I’ll often fake a photo effect or use unprocessed images while exploring a concept in Figma or Illustrator and then pull them into Photoshop when I’m ready to move to the next level of fidelity.",
				},
				{
					name: "After Effects",
					category: "Motion Design",
					descr:
						'Motion design is one area where Adobe still seems to have a firm grip on the market, despite the obvious cruft that AE has developed after so many years. If you’re interested in learning motion design in the context of After Effects, I highly suggest the <a href="">Motion 4</a> plugin, which smooths out some of the apps sharper edges. Fable app—which is angling to be the Figma of motion design—is also worth a look.',
				},
			],
		},
		{
			brand: "Pika",
			logo: "pika.svg",
			link: "https://superhighfives.com/pika",
			tools: [
				{
					name: "Pika",
					category: "Productivity",
					descr: "A simple, system-wide color picker that I use for accessibility testing and color sampling.",
				},
			],
		},
		{
			brand: "CleanShot",
			logo: "cleanshot.png",
			link: "https://cleanshot.com/",
			tools: [
				{
					name: "CleanShot X",
					category: "Productivity",
					descr: "The only tool that I ever want to use for taking screenshots and and screen recordings.",
				},
			],
		},
	],
	development: [
		{
			brand: "VS Code",
			logo: "vscode.svg",
			link: "https://code.visualstudio.com/",
			tools: [
				{
					name: "VS Code",
					category: "Editor",
					descr:
						"No surprise here. Even though I technically used Atom when learning development, the overwhelming majority of my time building websites has been spent inside of VS Code. I use Night Owl by Sarah Drasner for my theme and Jetbrains Mono for my font.",
				},
			],
		},
		{
			brand: "React",
			logo: "react.svg",
			link: "https://react.dev/",
			tools: [
				{
					name: "React",
					category: "Frontend Framework",
					descr:
						"As the biggest name in the world of frontend frameworks, everyone who builds for the web has an opinion about React. Mine is that it’s still a good choice, especially for projects with more than a base level of complexity. That said, I'm particularly interested to see which way the current wave of angst over React Server Components will break.",
				},
			],
		},
		{
			brand: "Svelte",
			logo: "svelte.svg",
			link: "https://svelte.dev/",
			tools: [
				{
					name: "Svelte",
					category: "Frontend Framework",
					descr:
						"Because it’s more lightweight and opinionated than React, Svelte is my go-to tool for hacking together quick proof-of-concepts. That said, I don't want to make it sound like a glorified scratchpad. This site is built with Svelte (and Sveltekit), and I believe it’s a powerful and functional choice for modern web projects.",
				},
				{
					name: "Sveltekit",
					category: "Fullstack Framework",
					descr:
						"I learned Svelte in the context of Sveltekit and, as such, I sometimes lost track of where one ended and the other began. Now, though, I can see that whereas Svelte mostly enables me do things on the front end more quickly and elegantly, Sveltekit has helped me become more confident working with servers, fetching data, and other traditionally-backend tasks.",
				},
			],
		},
		{
			brand: "Tailwind",
			logo: "tailwindcss.svg",
			link: "https://tailwindcss.com/",
			tools: [
				{
					name: "Tailwind",
					category: "CSS Framework",
					descr:
						"The speed and flexibility of working with Tailwind has made it an invaluable part of my toolkit over the past few years. I also appreciate how closely it’s syntax (mostly) maps to standard CSS. That said, with all of recent leaps forward in CSS, I have considered trying out a new CSS workflow on upcoming projects.",
				},
			],
		},
		{
			brand: "Typescript",
			logo: "typescript.svg",
			link: "https://www.typescriptlang.org/",
			tools: [
				{
					name: "Typescript",
					category: "Javascript Superset",
					descr:
						"I was hesitant about switching to Typescript, and I have lost hours of my life troubleshooting issues, but its myriad benefits make up for the occasional headaches. As a side effect, it has also deepened my understanding of Javascript, which was unexpected but appreciated.",
				},
			],
		},
		{
			brand: "Vercel",
			logo: vercelLogo,
			inlineLogo: true,
			link: "https://vercel.com/",
			tools: [
				{
					name: "Vercel",
					category: "Serverless Hosting",
					descr:
						"I use Vercel to host most of my personal projects (including this site). Netlify is also a great option for serverless hosting, but the fact that Vercel actively funds the development of Svelte and Sveltekit swayed me to their side.",
				},
			],
		},
		{
			brand: "The Browser Company",
			logo: "arc.svg",
			link: "https://arc.net/",
			tools: [
				{
					name: "Arc",
					category: "Browser",
					descr:
						"I’ve avoided using Chrome proper for several years now. I first switched to Firefox, then Brave, and have more recently landed on Arc. Despite it’s beta status, the team at the Browser Company have put a lot of love and attention into it, and I’ve found it mostly a joy to use.",
				},
			],
		},
		{
			brand: "Github",
			logo: githubIcon,
			inlineLogo: true,
			link: "https://github.com/",
			tools: [
				{
					name: "Github Desktop",
					category: "Git Interface",
					descr:
						"I’m a designer first and foremost, so I’m wont to reach for a GUI rather than interfacing with the command line directly. I switched to Github Desktop after a long period of trying and failing to integrate git into my workflow and I never looked back.",
				},
			],
		},
		{
			brand: "Warp",
			logo: "warp.svg",
			link: "https://www.warp.dev/",
			tools: [
				{
					name: "Warp",
					category: "Terminal",
					descr:
						"Despite my stated bias for visual interfaces, I do still use the command line. Warp provides a surprisingly smooth user experience with quality of life features like autocomplete and multi-cursor editing. It feels like what the terminal should have always been.",
				},
			],
		},
	],
	hardware: [
		{
			brand: "Apple",
			logo: appleIcon,
			inlineLogo: true,
			link: "https://www.apple.com/",
			tools: [
				{
					name: "Apple Macbook Pro (M2 2022)",
					category: "Computer",
					descr:
						'I tend to hang on to hardware for as long as possible, which is why, until recently, my personal computer was a 2015 Macbook Pro. In January 2023, I upgraded to one of the new 16" M2 Macbooks, which definitely lives up to the hype—and unlike my previous work computer, thankfully doesn’t have a touchbar.',
				},
				{
					name: "iPhone 14 Pro",
					category: "Smart Phone",
					descr:
						"Continuing with the trend of outated-but-still-functioning tech: until Q4 2022, I still rocked an iPhone 6s. Once they officially dropped support for it with the release of IOS 16, though, I finally upgraded to a 14 Pro.",
				},
				{
					name: "iPad Pro",
					category: "Tablet",
					descr:
						"I bought an iPad pro when I was working as an independent designer and doing a larger quantity of illustration in my day-to-day work. Now, honestly, I use it mostly for reading or quickly sketching out an idea, but I'm open to suggestions for how to integrate into my workflow.",
				},
				{
					name: "AirPods Pro",
					category: "Wireless Earbuds",
					descr:
						"I was initially skeptical that I needed another device for listening to music, but I got the Pros as a gift and, to be honest, I use them nearly everyday. The sound quality is solid for such a small in-ear device and they’re infinitely more convenient than my other headphones.",
				},
			],
		},
		{
			brand: "Sony",
			logo: sonyLogo,
			inlineLogo: true,
			link: "https://www.sony.com/ug/homepage",
			tools: [
				{
					name: "Sony WH-1000XM3",
					category: "Headphones",
					descr:
						"These are my get-shit-done headphones. The sound quality is great, especially for bluetooth headphones, and their ability to almost completely neutralize surrounding noise is essential to focusing in an open office.",
				},
			],
		},
		{
			brand: "Sonos",
			logo: sonosLogo,
			inlineLogo: true,
			link: "https://www.sonos.com/en-us/home",
			tools: [
				{
					name: "Sonos Move + Five",
					category: "Speaker System",
					descr:
						"I have nothing but good things to say about my Sonos speakers. The sound is excellent, the setup is easy, and the portability of the Move makes the system especially flexible. My home office is much better for having them.",
				},
			],
		},
	],
	["music making"]: [
		{
			brand: "Teenage Engineering",
			logo: teLogo,
			inlineLogo: true,
			link: "https://teenage.engineering/",
			tools: [
				{
					name: "Teenage Engineering OP-1",

					category: "Synthesizer",
					descr:
						"I’ve made music on and off throughout my life. Most recently, the OP-1 has been my gateway drug back into recording and producing. It’s a weird little device—especially in how it eschews certain priniciples that we think of as integral to user-friendly design—but it is such a joy to play.",
				},
				{
					name: "OB-4",
					category: "Speaker",
					descr:
						'I didn’t intend to also invest in Teenage Engineering’s speaker, but when the <a href="https://minirigs.co.uk/">Minirig</a> that I ordered got lost in the mail at the same time that they put the OB-4 on sale, I ended up pulling the trigger on it. I have to say, I don’t regret it.',
				},
			],
		},
		{
			brand: "Ableton",
			logo: abletonLogo,
			inlineLogo: true,
			link: "https://www.ableton.com/",
			tools: [
				{
					name: "Ableton Live",
					category: "DAW",
					descr:
						"I have never worked with a digital audio workstation before, so this is me taking a step outside of my comfort zone. I chose in part Ableton because I like that it’s workflow can be loop-based, similar to that of the OP-1.",
				},
			],
		},
		{
			brand: "Beyerdynamic",
			logo: beyerdynamicIcon,
			inlineLogo: true,
			link: "https://global.beyerdynamic.com/",
			tools: [
				{
					name: "Beyerdynamic DT 700 Pro X",
					category: "Headphones",
					descr:
						"I wanted a better pair of headphones specifically for playing and writing music. I quickly got way out of my depth wading through the different options and chose these based mostly on some comparison videos on Youtube. They’ve been awesome, though, and I haven’t had any issues with them not being loud enough when plugging straight into a computer or instrument.",
				},
			],
		},
	],
};
