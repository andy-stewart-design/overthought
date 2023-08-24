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
			<Container class="md: space-y-6 pb-lg pt-xl md:pb-lg md:pt-hero">
				<h1 class="text-center font-medium md:text-lg">Teague</h1>
				<h2 class="text-center text-5xl font-medium xs:text-6xl md:text-8xl">Design Refined</h2>
			</Container>
		</header>

		<div class="bg-foreground/10">
			<Image
				cloud
				src="/work/teague/Teague-ProjectPage-02.jpg"
				alt="Cipher news hero collage"
				imageWidths={[800, 1200, 1600, 1920]}
				class="h-[480px] w-screen object-cover object-top md:h-[800px]"
			/>
		</div>

		<Container as="section" class="grid gap-8  pt-lg md:grid-cols-2 md:pb-lg">
			<div class="space-y-2 text-lg font-medium lg:text-xl">
				<p class="!my-2 !mt-0"><span class="opacity-65">Scope:</span> Design System, Web Design</p>
				<p class="!my-2"><span class="opacity-65">Role:</span> Lead Designer</p>
				<p class="!my-2"><span class="opacity-65">Year:</span> Q1-2 2023</p>
				<p class="!my-2"><span class="opacity-65">Agency:</span> Turnstyle</p>
			</div>
			<div class="space-y-6">
				<p class="!mt-0">
					Teague is a design and innovation company that combines technological expertise with a deep understanding of
					human behavior. Back in 2019, as one of my first big projects at Turnstyle, we worked with their team to
					design and build a bespoke digital experience to promote their philosophy, portfolio, and approach.
				</p>
				<p>
					By 2023, the site was starting to show it's age. Working closely with team at Teague, we set out to evolve and
					streamline the design system and CMS we built years prior to remove cruft and make it more flexible, scalable,
					and future-proof.
				</p>
			</div>
		</Container>

		<Container as="section" class="mx-auto w-full max-w-[1600px] space-y-4 py-4">
			<Video
				src="/work/teague/Teague-Home-Scroll.mp4"
				poster="/work/teague/Teague-Home-Scroll-Poster.jpg"
				autoplay={true}
				loop
				controls
				playsinline
				muted
				width="1920"
				height="1080"
			/>
			<h5 class="text-center text-sm opacity-75">Home hero for the redesigned Teague website</h5>
		</Container>

		<Container as="section" class="space-y-6 pb-sm pt-md">
			<h3>Defining the Problem</h3>

			<p>
				Collaborating with our development team, we worked to uncover the scope and scale of the problem through a
				series of excercises and audits:
			</p>

			<ul>
				<li>
					<span class="font-bold">Stakeholder interviews</span> to identify specific pain points authors have when using
					the CMS.
				</li>
				<li>
					<span class="font-bold">UX/UI/accessibility audit</span> to identify opportunities to streamline the front-end
					design system and user experience
				</li>
				<li>
					<span class="font-bold">CMS Audit</span> to identify opportunities to simplify and supercharge the back-end author
					experience.
				</li>
			</ul>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-SiteAudit.jpg"
					alt="Increasing resiliency of the system by automating tasks when possible"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="2400"
					height="1200"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">
					A snapshot of the CMS/site audit, completed by developer R.J. LaCount
				</h5>
			</div>

			<p>
				In the course of our research, we discovered a few, specific issues that were the primary causes of the team's
				problems:
			</p>

			<ul>
				<li>
					<span class="font-bold">Technical Debt:</span> After years of wear and tear and several rounds of piecemeal updates,
					Teague's website had become bloated and difficult to manage, particularly from an author experience standpoint.
				</li>
				<li>
					<span class="font-bold">Design Debt:</span> Shortcomings and oversights in the original design system made adding
					new pages to and reorganizing modules on the site unnecessarily difficult.
				</li>
				<li>
					<span class="font-bold">Obsolescence:</span> The site's Content Management System was showing its age. Rebuilding
					the CMS from the ground up would allow us to take advantage of new technology to greatly improve the experience
					of maintaining the website.
				</li>
			</ul>

			<p>
				These issues warranted two distinct strategies for the font- and back-ends of the site. Whereas the problems
				with the front-end of the site warranted a more evolutionary approach, the back-end of the site would need to be
				rebuilt from the ground up.
			</p>
			<!-- <div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-CompetitiveAudit.jpg"
					alt="Site map detailing unique pages and templates for the site"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-sm text-center opacity-75">Competitive analysis assessing common patterns and conventions</h5>
			</div> -->
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Redefining the Author Experience</h3>

			<p>
				One of the primary drivers for this project — and an underappreciated part of building maintainable websites in
				general — was the need for a more efficient, intuitive author experience. Rather than pulling in a bloated,
				off-the-shelf solution, we leveraged Craft CMS as the foundation for a highly-customized CMS capable of
				mirroring the design and performance integrity of the site's front-end.
			</p>

			<p>Each CMS is unique, but there are some principles that we apply to all of the systems we build.</p>

			<h4>Do It for Me</h4>

			<p>
				Don’t force users to act like computers. Instead, increase the resiliency of your system by looking for ways to
				automate repetitive or nuanced tasks.
			</p>

			<p>
				For example, we made the decision that the footer should always the same color as the module before it. In
				practice, that means the footer will be one of three colors — white, light gray, or black — and that its color
				will change from page to page.
			</p>

			<p>
				In the original build of the site, we made this a manual task, which meant that the footer was, more often than
				not, the wrong color. The task was too nuanced for most authors to remember. In the new build, we automated this
				process so that if the color of the last module on a page is changed in the CMS, the footer color will
				automatically update as well.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-CMS-Footer.jpg"
					alt="Increasing resiliency of the system by automating tasks when possible"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
			</div>

			<h4>Rightsize Complexity</h4>

			<p>
				Don't make it do everything — focus on making your CMS to be clear and approachable rather than comprehensive.
				Just because you can give authors the ability to do something doesn't mean you should.
			</p>

			<p>
				Instead, manage complexity by establishing a baseline for the level of nuance and flexibility a client wants,
				and use testing and research to determine if additional options/functionality are actually useful and desired.
				Alternatively, you can keep the primary interface of a module tidy by moving niche/power-user features into a
				secondary tab.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-CMS-RightsizeComplexity.jpg"
					alt="Increasing resiliency of the system by automating tasks when possible"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
			</div>

			<h4>Consolidate Views</h4>

			<p>
				Don't subject your users to the paradox of choice. Instead, look for ways to reduce the total number of
				available modules by grouping views together based on content/functionality rather than layout.
			</p>

			<p>
				Effecticely managing complexity in a project means establishing a baseline for the level of nuance and
				flexibility a client wants, and using research and testing to determine if additional options/functionality are
				actually useful and desired.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-CMS-ConsolidateViews.jpg"
					alt="Increasing resiliency of the system by automating tasks when possible"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Refining the Design System</h3>
			<p>
				We used Teague's logo mark — a stack of four staggered, magenta speed lines — as the starting point for our
				design system. As simple as it may be, the asymmetry, sense of motion, and vibrancy inherent to the logo became
				the foundation of many of our design decisions — from styling and layout to animation and interactivity.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/teague/Teague-Work-Hover.mp4"
					poster="/work/teague/Teague-Work-Hover-Poster.jpg"
					autoplay={true}
					loop
					controls
					playsinline
					muted
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Loading animation and hover style inspired by Teague's logo mark</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-FigmaComponents.jpg"
					alt="A snapshot of some of our components in Figma"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">A snapshot of some of our Figma components</h5>
			</div>

			<p>
				We put a lot of time and effort into creating a system that was both functional and expressive. While we were
				intent on fixing the user experience and interaction issues from the previous design direction, we also wanted
				to be careful not to neutralize Teague's brand or make the site feel generic.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-Modules-01.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Balancing scalability and expressiveness in the design system</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/teague/Teague-Desktop-Screens.mp4"
					poster="/work/teague/Teague-Desktop-Screens-Poster.jpg"
					autoplay={true}
					loop
					controls
					playsinline
					muted
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">A selection of expressive layouts inspired by Teague's logo mark</h5>
			</div>

			<p>
				In addition to designing a comprehensive set of workhorse modules, we looked for a few places where we could
				amplify and reinforces Teague's brand voice. In some instances, we even built display options into modules to
				allow them to be more simple or more expressive.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-Modules-02.jpg"
					alt="Card component variants"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="768"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">
					Display options for a module ranging from more functional to more expressive
				</h5>
			</div>

			<p>
				And of course, everything on the site needed to work responsively to provide a compelling experience regardless
				of where and how it is viewed.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-Responsiveness.jpg"
					alt="Card component variants"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Responsive studies for the insights hero module</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/teague/Teague-Mobile.mp4"
					poster="/work/teague/Teague-Mobile-Poster.jpg"
					controls
					autoplay
					playsinline
					muted
					loop
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Mobile interactions</h5>
			</div>

			<p>
				I'm passionate about bridging the gap between design and development through my work and collaborating closely
				with engineering teams to define a shared language and process. As I build out a design system in Figma, I work
				closely with development to make sure our systems are tightly aligned.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-DesignTokens.jpg"
					alt="Card component variants"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Design tokens in Figma and Tailwind CSS</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pb-xl pt-md md:pb-hero md:pt-lg">
			<h3>Reflections and Learnings</h3>
			<p>
				This was an exciting project for me because it allowed me to revisit a past project and iterate on a system I
				had built years prior. I found it rewarding to have the opportunity to dive deep on our clients' pain points,
				analyze how our past design decisions contributed to those frustrations, and iterate on solutions without
				tearing down the system and starting over.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/teague/Teague-AboutPage.jpg"
					alt="Card component variants"
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
					src="/work/teague/Teague-DesktopCollage.jpg"
					alt="Card component variants"
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

	p,
	ul,
	h4 {
		@apply mx-auto max-w-3xl lg:text-xl;
	}

	h4 {
		@apply text-2xl font-semibold;
	}

	p {
		@apply my-6;
	}

	ul {
		@apply space-y-6;
	}

	li {
		@apply ml-4 list-['→'] pl-3;
	}
</style>
