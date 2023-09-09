<script>
	import Image from "$lib/components/media/Image.svelte";
	import Video from "$lib/components/media/Video.svelte";
	import Container from "@globals/layout/Container.svelte";
	import { onMount } from "svelte";

	let images = [
		"/work/cipher/Cipher-ArticleTemplate-Hero-01.jpg",
		"/work/cipher/Cipher-ArticleTemplate-Hero-02.jpg",
		"/work/cipher/Cipher-ArticleTemplate-Hero-03.jpg",
	];

	let activeIndex = 0;

	function incrementActiveIndex() {
		setInterval(() => {
			if (activeIndex === images.length - 1) activeIndex = 0;
			else activeIndex++;
		}, 1000);
	}

	onMount(() => incrementActiveIndex());
</script>

<article class="bg-background">
	<div class="mx-auto max-w-app">
		<header>
			<Container class="space-y-4 pb-md pt-xl sm:pb-lg md:space-y-6 md:pb-lg md:pt-hero">
				<h1 class="text-center font-medium md:text-lg">Carbon Direct</h1>
				<h2 class="text-center text-5xl font-medium xs:text-6xl md:text-8xl">Built for Scale</h2>
			</Container>
		</header>

		<div class="mt-sm bg-foreground/10 sm:mt-0">
			<Image
				cloud
				src="/work/carbon-direct/CarbonDirect-Hero-Screens.jpg"
				alt="Cipher news hero collage"
				imageWidths={[800, 1200, 1600, 1920]}
				class="h-[480px] w-screen object-cover object-top md:h-[800px]"
			/>
		</div>

		<Container as="section" class="grid gap-8 pb-lg pt-lg md:grid-cols-2">
			<div class="space-y-2 text-lg font-medium lg:text-xl">
				<p class="!my-2 !mt-0"><span class="opacity-65">Scope:</span> Identity, Design System, UI/UX</p>
				<p class="!my-2"><span class="opacity-65">Role:</span> Lead Designer, Creative Developer</p>
				<p class="!my-2"><span class="opacity-65">Year:</span> 2022</p>
				<p class="!my-2"><span class="opacity-65">Agency:</span> Turnstyle</p>
			</div>
			<div class="space-y-6">
				<p class="!mt-0">
					Carbon Direct is a purpose-driven carbon management firm enabling organizations to reduce, remove, and utilize
					their emissions. No longer a scrappy startup, they needed a new brand and digital presence that better
					communicated the scale and capabilities of their company and matched their approach to business — intelligent,
					dynamic, and distinctive.
				</p>
				<p>
					Working closely with the team at Carbon Direct, we rebuilt their brand from the ground up to cement their
					standing at the forefront of a vital new industry. From initial UX and identity explorations to prototyping
					and development, I engaged with this project from end-to-end to make sure that what we proposed matched what
					we delivered.
				</p>
				<!-- <div class="!mb-12 !mt-8 flex justify-start md:!mb-0">
					<a
						href="https://vulcanrealestate.com/"
						target="_blank"
						class="rounded border border-foreground/25 px-3.5 pb-2.5 pt-2 text-base font-medium text-foreground transition-colors duration-200 ease-out hover:border-foreground"
					>
						View Live ↗
					</a>
				</div> -->
			</div>
		</Container>

		<Container as="section" class="mx-auto w-full max-w-[1600px] space-y-4 py-4">
			<Video
				src="/work/carbon-direct/CarbonDirect-Mobile-Prototypes.mp4"
				poster="/work/carbon-direct/CarbonDirect-Mobile-Prototypes-Poster.jpg"
				autoplay={true}
				loop
				playsinline
				muted
				width="1920"
				height="1080"
			/>
			<h5 class="text-center text-sm opacity-75">Homepage of the redesigned Vulcan Real Estate website</h5>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Evolving the Mark</h3>
			<p>
				We began by defining a general visual identity direction that could serve as the foundation for the rest of our
				work. After several rounds of exploration, we realized that the team at Carbon Direct preferred to maintain some
				connection to their previous identity rather than completely wiping the slate clean.
			</p>
			<p>
				With that in mind, we evolved Carbon Direct’s logo to be more simple, memorable, and functional while still
				staying true to their founding story—highlighting multiple paths to decarbonization and emphasizing the
				necessity of carbon removal in our fight against climate change. The new colorway, a vibrant blue-to-green
				gradient, symbolizes the optimisim and pursuit of progress that is central to Carbon Direct’s work.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-LogoOnBG.jpg"
					alt="New Carbon Direct Logo on top of a desaturated image"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-Logo-BeforeAfter-Neue.png"
					alt="Side-by-side comparison of new and old logos"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="768"
					loading="lazy"
				/>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/carbon-direct/CarbonDirect-LogoAnimation.mp4"
					poster="/work/carbon-direct/CarbonDirect-LogoAnimation-Poster.jpg"
					autoplay={true}
					loop
					playsinline
					muted
					width="1920"
					height="1080"
				/>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-BusinessCards.jpg"
					alt="Business cards"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="768"
					loading="lazy"
				/>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Designing for Scale</h3>

			<p>
				Unlike our approach to the logo, our visual identity work was more revolution than evolution. One interesting
				aspect of this project is that the product team at Carbon Direct planned to use our identity guidelines as the
				foundation for their work. From color and accessibility to typography and iconography, we needed to make sure
				that the system we developed was robust, flexible, and scalable enough to meet their team’s needs.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-ColorPalette.png"
					alt="Primary color palette"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Primary color palette</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-Typography.jpg"
					alt="We selected a variable font family to balance flexibility and performance"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">
					We selected a variable font family to balance flexibility and performance
				</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-Icons-All.jpg"
					alt="Two types of icons: illustrative and interface"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Two types of icons: expressive and functional</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-Imagery.jpg"
					alt="Pattern and image treatments"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Explorations of pattern, typography, and layout</h5>
			</div>

			<p id="ally">
				One benefit of a comprehensive design system is built-in accessibility. We developed a relatively large color
				palette to prevent designers from needing to deviate from the established system. But more options means more
				opportunities for error. I tested every combination of color and typography tokens to clearly establish which
				color combinations do and do not meet WCAG standards.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-Accessibility.jpg"
					alt="A subset of color token contrast tests"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">A subset of color token contrast tests</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Establishing a Design System</h3>

			<p>
				Far and away the most significant deliverable from our scope of work was their new website. In order to
				establish a foundation that other designers could leverage and build upon, we established a consistent set of
				standards, patterns, and components in Figma and collaborated with our engineering team to ensure cohesion
				between our design and dev environments.
			</p>

			<p>
				As a note, this project was completed over a year ago. Since then, Figma’s capabilities—and my own knowledge and
				skills—have developed significantly. In terms of implementation, I would certainly approach this project
				differently today. But what I wouldn't change is my dedication to creating a functional, usable design system.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-ComponentBento.jpg"
					alt="A sample of our Figma components, organized neatly"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">A sample of our Figma components, organized neatly</h5>
			</div>

			<p>
				One of my favorite things about Figma is the ability to implement microinteractions like hover states in a way
				that is still flexible and maintainable. Small details like this can help turn what is effectively a static
				prototype into something that feels much more real. It also leaves less room for ambiguity when it comes to
				development.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/carbon-direct/CarbonDirect-ButtonComponent.mp4"
					poster="/work/carbon-direct/CarbonDirect-ButtonComponent-Poster.jpg"
					autoplay={true}
					loop
					playsinline
					muted
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">A walkthrough of button hover states in Figma</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-Component-Specs.jpg"
					alt="Additional component specs and microinteractions"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Additional component specs and microinteractions</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-Desktop-Collage.jpg"
					alt="An overview of various modules from the site"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">An overview of various modules from the site</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-ResponsiveStudies.jpg"
					alt="Responsive studies for the team modal"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Responsive studies for the team modal</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Creative Coding</h3>

			<p>
				The homepage hero experience—which has now, sadly, been sunsetted—was one of my favorite parts of the site and
				combined generative art, SVG animation, and scroll-based storytelling. Because of the somewhat unconventional
				nature of the design, the path to approval was long and required a lot of work on my end to prove the
				feasability of the concept. I started in Figma to get preliminary approval, but eventually moved into After
				Effects to create a higher fidelity version of our design vision.
			</p>

			<p>
				Once approved, I worked closely with our in-house developer <a
					href="https://www.linkedin.com/in/christinehager/"
					target="_blank">Christine Hager</a
				>
				on implementation. My primary contributions to the codebase were a
				<a href="https://flow-field-speed-test.vercel.app/" target="_blank">canvas-based generative animation</a>
				and a <a href="https://codepen.io/andystewartdesign/full/qBorgaR" target="_blank">hand-rolled SVG animation</a>,
				which we then combined together with some more bells and whistles into the final experience.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/carbon-direct/CarbonDirect-CreativeCoding.mp4"
					poster="/work/carbon-direct/CarbonDirect-CreativeCoding-Poster.jpg"
					autoplay={true}
					loop
					playsinline
					muted
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Initial implementations of the canvas and SVG animations</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/carbon-direct/CarbonDirect-HomeScroll.mp4"
					poster="/work/carbon-direct/CarbonDirect-HomeScroll-Poster.jpg"
					autoplay={true}
					loop
					playsinline
					muted
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Final implementation of the homepage scrolling experience</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pb-xl pt-md md:pb-hero">
			<h3>Reflections and Learnings</h3>

			<p>
				To be honest, one of the most challenging aspects of this project wasn’t the work itself. At one point, process
				and interpersonal conflicts between members of the teams threatened to derail the project entirely. I’m grateful
				to everyone involved for being willing to sit down, discuss their issues and frustrations openly and honestly, a
				work together to find a path forward.
			</p>
			<p>
				On the more technical side, I'm excited about all of the work being done to make the web a more powerful,
				flexible, and expressive platform. Specifically related to our work on this project, I'm excited that the
				<a href="https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas" target="_blank"
					>Offscreen Canvas API</a
				> is now stable across across all browsers. This allows us to move the heavy lifting for canvas-based animations
				off the main thread, which would have helped with some of the performance issues we had to resolve when developing
				the home hero experience.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/carbon-direct/CarbonDirect-Desktop-Pages.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
			</div>
		</Container>
	</div>
</article>

<style lang="postcss">
	h3 {
		@apply mx-auto max-w-3xl text-3xl font-medium lg:text-4xl;
	}

	p {
		@apply mx-auto max-w-3xl text-foreground text-opacity-85 lg:text-xl;
	}

	p {
		@apply my-6;
	}

	p a {
		@apply font-bold text-foreground text-opacity-90;
	}
</style>
