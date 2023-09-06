<script>
	import Image from "$lib/components/media/Image.svelte";
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
				<h1 class="text-center font-medium">Cipher News</h1>
				<h2
					class="text-center text-5xl font-medium leading-[1.1] xs:text-6xl xs:leading-[1.1] md:text-8xl md:leading-[1.1]"
				>
					Designing the News
				</h2>
			</Container>
		</header>

		<div class="bg-foreground/10">
			<Image
				cloud
				src="/work/cipher/Cipher-Illustration-03.jpg"
				alt="Cipher news hero collage"
				imageWidths={[800, 1200, 1600, 1920]}
				class="h-[480px] w-screen object-cover md:h-[800px]"
			/>
		</div>

		<!-- <Container as="section" class="pt-lg">
			<h6 class="rounded-md border bg-foreground/15 px-4 py-6 text-center font-medium border-light md:text-lg">
				Please note, this site is in development and is not yet live
			</h6>
		</Container> -->

		<Container as="section" class="grid gap-8 pt-lg md:grid-cols-2 md:pb-lg">
			<div class="space-y-2 text-lg font-medium lg:text-xl">
				<h4><span class="opacity-65">Scope:</span> Product Design, Design System</h4>
				<h4><span class="opacity-65">Role:</span> Design Director, Lead Designer</h4>
				<h4><span class="opacity-65">Year:</span> Q1-2 2023</h4>
			</div>
			<div class="space-y-6">
				<p>
					Cipher is a publication covering climate change and the global transition to net-zero. As an offshoot of
					Breakthrough Energy—a network of investment vehicles, philanthropic programs, and policy advocacy activities
					focused on accelerating this transition—the Cipher team prioritizes, above all, being a high-quality and
					credible source of information in a rapidly-evolving ecosystem.
				</p>
				<p>
					Based on our work establishing their brand and visual identity guidelines, the Cipher team wanted to
					collaborate with us to expand their visual identity to a web-native design system and build a bespoke digital
					experience for their content.
				</p>
				<div class="!mb-12 !mt-8 flex justify-start md:!mb-0">
					<a
						href="https://teague.com/"
						target="_blank"
						class="rounded border border-foreground/25 px-3.5 pb-2.5 pt-2 text-base font-medium text-foreground transition-colors duration-200 ease-out hover:border-foreground"
					>
						View Live ↗
					</a>
				</div>
			</div>
		</Container>

		<Container as="section" class="grid gap-4">
			<Image
				cloud
				src="/work/cipher/Cipher-Hero.jpg"
				alt="Home screen for the redesigned Cipher website"
				imageWidths={[800, 1200, 1600, 1920]}
				class="w-full"
				width="1920"
				height="1080"
			/>
			<h5 class="text-center text-sm opacity-75">Home screen for the redesigned Cipher website</h5>
		</Container>

		<Container as="section" class="space-y-6 pb-sm pt-md">
			<h3>Strategy + User Experience</h3>

			<p>
				Based on the dynamic, content-heavy nature of the product, the bulk of our early work centered around defining a
				model for the site’s user experience. Working closely with the Cipher and Breakthrough Energy teams, our primary
				goals for this phase of the project included: codifying the site's information architecture and navigational
				model; developing a structure for organizing and categorizing their content; and to understanding the breadth of
				modules/patterns required for the site.
			</p>

			<!-- <div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-SiteMap.png"
					alt="Site map detailing unique pages and templates for the site"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="2400"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Site map detailing unique pages and templates for the site</h5>
			</div> -->

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-CompetitiveAudit.jpg"
					alt="Site map detailing unique pages and templates for the site"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Competitive analysis assessing common patterns and conventions</h5>
			</div>

			<p class="font-bold">Specific deliverables from this phase included:</p>
			<ul>
				<li>
					<span class="font-bold">Stakeholder Interviews:</span> We spoke with members of the client teams to better understand
					their goals and motivations for the project. This provided us with a solid foundation on which to begin to build
					and test our assumptions.
				</li>
				<li>
					<span class="font-bold">Competitive Analysis:</span> we dove deep on the product design of other news organizations—both
					within and outside of the climate space—to familiarize ourselves with the competitive landscape and seek out inspiration
					and opportunity.
				</li>
				<li>
					<span class="font-bold">Site Map:</span> based on our initial conversations and interviews with the teams, we built
					a site map to visualize the high-level structure and organization of pages and help us define the scope of work
					for the site.
				</li>
				<li>
					<span class="font-bold">Low-Fidelity Prototype:</span> we developed wireframes for all pages and templates on the
					site to begin to tease out necessary design patterns and approaches.
				</li>
			</ul>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-Wireframes.jpg"
					alt="Wireframes for various pages and modules on the site"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Wireframes for various pages and modules on the site</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Navigation</h3>

			<p>
				Early in the process, we focused on defining the site’s navigational model — a feature which would also help us
				better understand how stories should be categorized across the site. We tested three options with the team,
				which each took a distinct approach to promoting categories and guiding users through the content.
			</p>

			<ul>
				<li>
					<span class="font-bold">Curated:</span> this direction requires Cipher to identify a finite number of categories
					that would be elevated above all others. This is by far the most opinionated approach, but has the benefits of
					giving users clear entry points into the content and also sends a signal about Cipher’s areas of focus.
				</li>
				<li>
					<span class="font-bold">Segmented:</span> this direction is less heavy-handed than the first, but does create distinction
					and hierarchy between two types of categories: topic and content type. Especially with regard to topics, though,
					it still takes a less-is-more approach.
				</li>
				<li>
					<span class="font-bold">Flat:</span> this direction is the most open-ended in terms of organization and hierarchy,
					combining topic and content type together and being less restrictive in terms of the number categories displayed.
					Based on our research, this was the most common approach among other news outlets.
				</li>
			</ul>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-Navigation-Wires.jpg"
					alt="Original brand identity guidelines for Cipher, designed in 2021"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Three distinct approaches for the site's primary navigation</h5>
			</div>

			<p>
				Based on testing and conversations with the client teams, we determined that the third direction would be the
				most maintainable and meaningful. Cipher’s stories are cross-cutting, and trying to organize them into separate,
				distinct categories had the effect of creating arbitrary and often false dichotomies.
			</p>

			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-Navigation-Final.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Final navigation design at small and large breakpoints</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Design System</h3>
			<p>
				Rather than rotely translating their existing brand to a new medium, we used the development of the Cipher News
				design system as a way to push and evolve their visual identity. Leveraging Figma's native features, we
				established a set of reusable styles and components able to adapt to their context in a layout as well as the
				state of the application as a whole.
			</p>
			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-IdentityGuidelines.jpg"
					alt="Original brand identity guidelines for Cipher, designed in 2021"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Original brand identity guidelines for Cipher, designed in 2021</h5>
			</div>
			<p>
				Putting the time and effort in up front to define a high-level system for the site was critical to the success
				of the project. It set us up to move more quickly and design with a higher degree of consistency and fidelity
				than would otherwise have been possible. It allowed us to prioritize accessibility, ensuring that all colors
				meet WCAG AA guidelines. And it ensured that all designs implemented based on our established patterns and
				practices would satisfy our stated goals and requirements and align with our development approach.
			</p>
			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-TypographyTokens-01.jpg"
					alt="Primitive typographic design tokens"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Primitive typographic design tokens</h5>
			</div>
			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-DesignSystem-CardVariants.jpg"
					alt="Card component variants"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="2400"
					height="1770"
				/>
				<h5 class="text-center text-sm opacity-75">Card component variants</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Home Screen: Balancing Priorities</h3>
			<p>
				Operating with a relatively small team of journalists, Cipher prioritizes the quality and depth of their content
				over the quantity of articles they publish—producing several feature-length articles per week, not per day. That
				said, they also recognize the need to consistently publish new, compelling content everyday to keep readers
				coming back.
			</p>
			<p>
				With those two competing priorities in mind, we created a special type of post: the Quick Post, or what I like
				to think of as "tweeting to the homepage." Quick Posts (also known by their external name, “Quick Reads and Hot
				Takes”) are short-form content that provide commentary and context on articles from other news organizations.
				They enabled us to feature frequently updated content at the top of the homepage without stealing the spotlight
				from Cipher's longer-form articles.
			</p>
			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-QuickPosts-01.jpg"
					alt="Quick Post Module at small and large breakpoints"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Final homepage Quick Post module at small and large breakpoints</h5>
			</div>
			<p>
				For Cipher correspondents, Quick Posts provide a relatively low-effort way to publish frequently without
				disrupting their larger journalistic efforts. For Cipher readers, they provide a new way to stay up-to-date with
				what the Cipher team is reading and thinking about and create incentive to regularly return to the site.
			</p>
			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-QuickPosts-02.jpg"
					alt="Quick Posts landing page and post template"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Quick Posts landing page and post template</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Article Template: a Workhorse Design Solution</h3>
			<p>
				Being a news publication, the article template forms the foundation for the vast majority of the pages on the
				Cipher website. As such, we prioritized understanding and anticipating the needs of authors to produce a
				template that is robust and flexible, capable of accommodating articles of any category or content structure.
			</p>
			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-ArticleTemplate-01.jpg"
					alt="Article template in light and dark mode"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Article template in light and dark mode</h5>
			</div>
			<p class="font-bold">Our specific goals for the article template included:</p>
			<ul>
				<li>Balancing the consistency of the overall experience with the varying needs of journalists and stories</li>
				<li>Differentiating between articles authored by Cipher correspondents and outside contributors</li>
				<li>Increasing site engagement by exposing readers to related content and categories</li>
				<li>Promoting the Cipher newsletter and offering a low-friction way for readers to subscribe</li>
			</ul>
			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<div class="relative">
					<Image
						cloud
						src={images[activeIndex === 0 ? 2 : activeIndex === 1 ? 0 : 1]}
						alt=""
						imageWidths={[800, 1200, 1600, 1920]}
						class="absolute left-0 top-0 h-0 w-0"
					/>
					<Image
						cloud
						src={images[activeIndex === 0 ? 1 : activeIndex === 1 ? 2 : 0]}
						alt=""
						imageWidths={[800, 1200, 1600, 1920]}
						class="absolute left-0 top-0 h-0 w-0"
					/>
					<Image
						cloud
						src={images[activeIndex]}
						alt="Hero layout variants for the article template"
						imageWidths={[800, 1200, 1600, 1920]}
						class="w-full"
						width="1920"
						height="1080"
					/>
				</div>
				<h5 class="text-center text-sm opacity-75">Hero layout variants for the article template</h5>
			</div>
			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-ArticleTemplate-02.jpg"
					alt="Hero and footer from the article template"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Hero and footer from the article template</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pt-md">
			<h3>Feature Prototyping: Validating Concepts</h3>
			<p>
				In addition to producing a prototype of the site as a whole, we dove deep on a set of features that we believed
				might cause roadblocks in development. To validate our ideas and clarify the user and/or author experience, we
				produced a set of high-fidelity prototypes—using a combination of Figma, live code, and After Effects—that
				offered specific recommendations for implementation and helped bridge the divide between design and development.
			</p>
			<p>
				For example, on the About section of the site we leaned more heavily into a duotone photo style from the Cipher
				brand guidelines. On the Team page specifically, the Cipher team liked the idea transitioning from duotone to
				full-color photos of each team member on hover. Rather than requiring site authors to manually create the
				duotones and upload multiple versions of each photo, we developed a way to programmatically manipulate the
				photos using CSS blend modes.
			</p>
			<p>
				This approach has the benefit of simultaneously aligning to Cipher's brand standards, simplifying the author
				experience of the CMS, and reducing the number of images on the site, thus speeding up the user experience.
			</p>
			<div class="mx-auto w-full max-w-6xl space-y-4 py-4">
				<Image
					cloud
					src="/work/cipher/Cipher-Prototye-01.jpg"
					alt="Implementation of hover state prototype"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="1920"
					height="1080"
				/>
				<h5 class="text-center text-sm opacity-75">Implementation of hover state prototype</h5>
			</div>
		</Container>

		<Container as="section" class="space-y-6 pb-xl pt-md md:pb-hero md:pt-lg">
			<h3>Reflections and Learnings</h3>
			<p>
				We wrapped up design on the Cipher site a week or two before the release of Figma variables, meaning that our
				approach to developing and scaling the design system for the site would be much different today than it was in
				early 2023.
			</p>
			<p>
				One concrete example: dark mode. Implementing multiple themes in a system without relying on an external plugin
				was much more difficult than it needed to be, requiring us to maintain separate component instances for each
				theme. Now, with the ability to alias variables natively in Figma, this process becomes significantly simpler.
				Creating a semantic layer of variables on top of a system’s primitive variables that are able to update based on
				the state of the application means less components and, therefore, less design debt.
			</p>
			<p>
				I'm excited to be able to leverage Figma variables in the future to create design systems that are complex
				enough to solve the problems of modern application development while also being simpler, more resilient, and
				more approachable than they were previously.
			</p>
		</Container>
	</div>
</article>

<style lang="postcss">
	h3 {
		@apply mx-auto max-w-3xl text-3xl font-medium lg:text-4xl;
	}

	p,
	ul {
		@apply mx-auto max-w-3xl lg:text-xl;
	}

	ul {
		@apply space-y-6;
	}

	li {
		@apply ml-4 list-['→'] pl-3;
	}
</style>
