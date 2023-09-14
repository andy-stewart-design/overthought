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
				<h1 class="text-center font-medium md:text-lg">Vulcan Real Estate</h1>
				<h2 class="text-center text-5xl font-medium xs:text-6xl md:text-8xl">A New Foundation</h2>
			</Container>
		</header>

		<div class="mt-sm bg-foreground/10 sm:mt-0">
			<Image
				cloud
				src="/work/vulcan-real-estate/VRE-Hero.jpg"
				alt="Cipher news hero collage"
				imageWidths={[800, 1200, 1600, 1920]}
				class="h-[480px] w-screen object-cover object-top md:h-[800px]"
			/>
		</div>

		<Container as="section" class="grid gap-8 pt-lg md:grid-cols-2 md:pb-lg">
			<div class="space-y-2 text-lg font-medium lg:text-xl">
				<p class="!my-2 !mt-0"><span class="opacity-65">Scope:</span> Visual Identity, UI/UX</p>
				<p class="!my-2"><span class="opacity-65">Role:</span> Design Director, Lead Designer</p>
				<p class="!my-2"><span class="opacity-65">Year:</span> Q2 2022-Q2 2023</p>
				<p class="!my-2"><span class="opacity-65">Agency:</span> Turnstyle</p>
			</div>
			<div class="space-y-6">
				<p class="!mt-0">
					A brainchild of Microsoft co-founder Paul Allen and the engine behind Seattle's vibrant South Lake Union
					neighborhood, Vulcan Real Estate is one of the Pacific Northwest’s most respected developers. After Allen’s
					passing, the team at Vulcan saw a need to reposition themselves in the market and reimagine their vision for
					the future.
				</p>
				<p>
					Alongside our partners at Stoke Strategy and Metric Media, we helped breathe new life into Vulcan’s brand with
					a revitalized mission/strategy, visual identity, website, and microsite.
				</p>
				<div class="!mb-12 !mt-8 flex justify-start md:!mb-0">
					<a
						href="https://vulcanrealestate.com/"
						target="_blank"
						class="rounded border border-foreground/25 px-3.5 pb-2.5 pt-2 text-base font-medium text-foreground transition-colors duration-200 ease-out hover:border-foreground"
					>
						View Live ↗
					</a>
				</div>
			</div>
		</Container>

		<Container as="section" class="mx-auto w-full max-w-[1600px] space-y-4 py-4">
			<Video
				src="/work/vulcan-real-estate/VRE-Home-Desktop.mp4"
				poster="/work/vulcan-real-estate/VRE-Home-Desktop-Poster.jpg"
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
			<h3>Establishing the Identity</h3>
			<p>
				Vulcan Real Estate wanted to reintroduce themselves to the world in a big way — to step boldly forward into the
				future, but without abandoning their past. The new logo references the formal language of their legacy mark, but
				pushes them in a new, more modern and iconic direction. In it’s angularity, the mark creates an implied
				dimensionality, emphasizing their focus on physical infrastructure. Its downward directionality represents their
				practice of grounding their strategy in research, data, and analysis. More obviously, it serves as an abstract
				monogram.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/vulcan-real-estate/VRE-Logo-Slow.mp4"
					poster="/work/teague/Teague-Work-Hover-Poster.jpg"
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
					src="/work/vulcan-real-estate/VRE-Logo-Comparison-Neu.png"
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
					src="/work/vulcan-real-estate/VRE-Logo-Animation.mp4"
					poster="/work/vulcan-real-estate/VRE-Logo-Animation-Poster.jpg"
					autoplay={true}
					loop
					playsinline
					muted
					width="1920"
					height="1080"
				/>
			</div>

			<p>
				Building on the formal language of the new logo, we developed a comprehensive visual language for Vulcan that
				balances the precision of geometric shapes with a vibrant and optimistic color palette.
			</p>

			<div class="mx-auto w-full max-w-6xl py-4">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-Moodboard.jpg"
					alt="Side-by-side comparison of new and old logos"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="768"
					loading="lazy"
				/>
			</div>

			<div class="mx-auto grid w-full max-w-6xl gap-14 py-4 md:grid-cols-2 md:gap-8">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-WaterBottle.jpg"
					alt="Side-by-side comparison of new and old logos"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="768"
					loading="lazy"
				/>
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-BusinessCards.jpg"
					alt="Side-by-side comparison of new and old logos"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="768"
					loading="lazy"
				/>
			</div>

			<!-- <p>
				We put a lot of time and effort into creating a system that was both functional and expressive. While we were
				intent on fixing the user experience and interaction issues from the previous design direction, we also wanted
				to be careful not to neutralize Teague's brand or make the site feel generic.
			</p> -->

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-Guidelines.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Discovery and User Experience</h3>

			<p>
				With any web project, our primary goal is to understand why we were hired in the first place. We worked closely
				with the team at Vulcan to articulate their needs, wants, and dreams for the site using a variety of tactics:
			</p>

			<ul>
				<li>
					<span class="font-bold">Stakeholder surveys/interviews:</span> we spoke with members of the client teams to better
					understand their goals and motivations for the project as well as their frustrations with their current site.
				</li>
				<li>
					<span class="font-bold">Affinity Mapping:</span> we analyzed and organized the feedback received from stakeholder
					interviews and surveys to identify common themes.
				</li>
				<li>
					<span class="font-bold">Card sorting:</span> as an exercise with the client team, we identified and ranked key
					audiences and purposes for the new site.
				</li>
				<li>
					<span class="font-bold">Information Architecture:</span> based on finding from discovery and our own analysis of
					their current site, we rearchitected their website from first principles.
				</li>
				<li>
					<span class="font-bold">Low-Fidelity Prototyping:</span> we tested our stuctural recommendations with the client
					in a low-commitment form to identify holes and correct bad assumptions.
				</li>
			</ul>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-CardSorting.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">
					Card sorting results identifying primary audiences and outcomes for the website
				</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>From Identity to Design System</h3>

			<p>
				With any greenfield digital project, a big part of the initial visual design work is figuring out how to
				translate a generalized set of identity guidelines into a purpose-built, composable, scalable design system.
				Once we honed in on a design direction, we established a modular set of tokens and components in Figma to set us
				up for success as moved into extending the design system to the site at large.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-Components.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">An overview of various modules from the design system</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/vulcan-real-estate/VRE-ComponentAPI.mp4"
					poster="/work/vulcan-real-estate/VRE-ComponentAPI-Poster.jpg"
					autoplay={true}
					loop
					playsinline
					muted
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Video walkthrough of a Figma component API</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-Home-Desktop-Collage.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Overview of various modules from the Vulcan design system</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-Components-Responsive.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Responsive studies for the Content Slider module</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Starting with Why</h3>

			<p>
				Based on our branding and discovery work, we identified etablishing trust and credibility as one of the primary
				functions of the site. One surefire way to do that is with a large portfolio of successful project work. But
				that’s table stakes — a lot of developers have nice-looking portfolios.
			</p>

			<p>
				In order to give Vulcan's work context and meaning, we decided to increase the emphasis on the mission and
				purpose behind their work. We helped them identify four ways in which their projects create impact — prosperity,
				sustainability, urban vitality, and inclusion — and added a dedicated section to the site to showcase the ways
				in which these values influence and infuse their work.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/vulcan-real-estate/VRE-Purpose-Min.mp4"
					poster="/work/vulcan-real-estate/VRE-Purpose-Poster.jpg"
					autoplay={true}
					loop
					playsinline
					muted
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Purpose index page introducing Vulcan's four values</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-Purpose-Template.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">
					Variations of the purpose template for inclusion, sustainability, and urban vitality
				</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Art for Everyone</h3>

			<p>
				In addition to the main Vulcan Real Estate site, we also built a microsite celebrating Vulcan's commitment to
				public art. The Virtual Artwalk collects every installation, mural, and other various artworks that Vulcan has
				commissioned for one of it's buildings over the last two decades into a explorable digital exprience.
			</p>

			<p>
				There are two ways to explore the artworks: gallery view and map view. Because of engineering/resource
				constraints, we needed to build the views as separate pages. However, we were able to use one of my favorite
				techniques for making websites feel more app-like: intercepting routes. When a user clicks to view an artwork,
				we update the address in the url bar. Instead of doing a full-page refresh, though, we load the content for that
				page in a modal. This has the benefit of making the experience feel more seemless, but also allows for direct
				linking to individual artworks.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Video
					src="/work/vulcan-real-estate/VRE-Artwalk.mp4"
					poster="/work/vulcan-real-estate/VRE-Artwalk-Poster.jpg"
					autoplay={true}
					loop
					playsinline
					muted
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Intercepting routes on the Vulcan Virtual Artwalk microsite</h5>
			</div>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-Artwalk-Map.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
					loading="lazy"
				/>
				<h5 class="text-center text-sm opacity-75">Map view of the Vulcan Virtual Artwalk</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pb-xl pt-md md:pb-hero">
			<h3>Reflections and Learnings</h3>

			<p>
				I love projects like this, where I am able to be involved from end-to-end and can help develop holistic
				solutions to wide-ranging. This one in particular allowed me to flex my full range of skills and experiences:
				identity design, UX/UI, prototyping, motion, front-end development, icon design, QA testing, project management,
				presentation, and more.
			</p>

			<p>
				One thing I'm constantly trying to improve with projects as big as this one, though, is how to make the process
				more efficient. In a perfect world, we would be able to parallelize work so that phases that are not dependent
				of each other could be worked on at the same time without issue. People are messy, though, and timeline don't
				always hold. I'm excited to think more about tools and processes that could be put in place to help stakeholders
				on all sides of the project stay engaged and on track.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/vulcan-real-estate/VRE-Mobile-Collage.jpg"
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

	p,
	ul {
		@apply mx-auto max-w-3xl text-foreground text-opacity-85 lg:text-xl;
	}

	p {
		@apply my-6;
	}

	ul {
		@apply space-y-6;
	}

	li {
		@apply relative pl-5 before:absolute before:left-0 before:top-0 before:font-medium before:text-foreground before:text-opacity-100 before:content-['→'] lg:pl-7;
	}
</style>
