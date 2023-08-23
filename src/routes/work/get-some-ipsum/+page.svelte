<script>
	import Image from "$lib/components/media/Image.svelte";
	import Video from "$lib/components/media/Video.svelte";
	import Container from "@globals/layout/Container.svelte";
</script>

<article class="border-b bg-background border-light">
	<header>
		<Container class="space-y-6 pb-lg pt-lg text-center md:pt-xl">
			<h1 class="font-medium">Figma Plugin</h1>
			<h2 class="text-5xl font-medium xs:text-6xl md:text-7xl">Get Some Ipsum</h2>
		</Container>
	</header>

	<Container as="section" class="space-y-6">
		<div class="mx-auto w-full max-w-6xl space-y-4">
			<Video
				src="/work/get-some-ipsum/GetSomeIpsum-Walkthrough.mp4"
				poster="/work/get-some-ipsum/GetSomeIpsum-Walkthrough-Poster.jpg"
				autoplay
				controls={false}
				loop
				muted
				playsinline
			/>
		</div>
	</Container>

	<Container as="section" class="space-y-6 pb-xl pt-md md:pb-hero md:pt-lg">
		<div class="mx-auto mb-12 grid max-w-3xl gap-4 text-lg font-medium md:grid-cols-2 lg:text-xl">
			<h4 class="flex flex-col gap-2 border p-6 text-center border-light md:p-8">
				<span class="text-sm opacity-65">Role</span> UI/UX · Development
			</h4>
			<h4 class="flex flex-col gap-2 border p-6 text-center border-light md:p-8">
				<span class="text-sm opacity-65">Time</span> 1-2 Weeks
			</h4>
		</div>

		<p>
			<a href="https://www.figma.com/community/plugin/1225446981019698507/Get-Some-Ipsum" target="_blank"
				>Get Some Ipsum</a
			> is a simple, flexible lorem ipsum plugin for Figma that I designed and coded from scratch. Some of my primary goals
			and motivations for the project included:
		</p>

		<ul>
			<li>
				Providing additional functionality above and beyond what other, similar plugins offer. For example, options that
				make the generated text more suitable for headlines
			</li>
			<li>
				Fixing some of the annoying bugs that I’ve run into using other plugins. For example, getting one word sentences
				in the text output
			</li>
			<li>
				Additionally, it served as a good introduction to designing and building plugins for Figma because it’s entirely
				self-contained and doesn’t rely on external APIs.
			</li>
		</ul>

		<p>
			To wrap my head around all the steps required to get from launching the plugin to generating text, I put together
			the following user flow:
		</p>

		<div class="mx-auto w-full max-w-6xl space-y-4 pb-4 pt-6">
			<Image
				cloud
				src="/work/get-some-ipsum/GetSomeIpsum-UserFlow.png"
				alt="A simple user flow visualizing primary decision points"
				imageWidths={[800, 1200, 1600, 1920]}
				class="w-full"
				width="2400"
				height="1080"
			/>
			<h5 class="font-sm text-center opacity-50">A simple user flow visualizing primary decision points</h5>
		</div>

		<p>
			When the user launches the plugin, if no text is currently selected on the page, they will be shown a prompt
			asking you to select at least one text frame. The prompt includes a <a
				href="https://codepen.io/andystewartdesign/pen/gOZppOp"
				target="_blank">hand-coded SVG animation</a
			> to draw attention to and reinforce the prompt.
		</p>

		<div class="mx-auto w-full max-w-6xl space-y-4 pb-4 pt-6">
			<div class="grid grid-cols-2">
				<Image
					cloud
					src="/work/get-some-ipsum/GetSomeIpsum-SelectPrompt.png"
					alt="A prompt that is displayed when the plugin is open and the user has not selected any text frames"
					imageWidths={[800, 1200, 1600, 1920]}
					class="w-full"
					width="960"
					height="1080"
				/>
				<div class="grid place-items-center bg-gradient-to-br from-purple-800 to-fuchsia-700 p-6">
					<div class="w-full max-w-[200px] text-white opacity-75">
						<svg viewBox="0 0 260 260" fill="none">
							<path class="animate-cursor" d="M192 192L212 252L222.833 222.833L252 212L192 192Z" fill="currentColor" />
							<rect
								class="animate-selection"
								x="9"
								y="9"
								width="200"
								height="200"
								stroke="currentColor"
								stroke-width="4"
								stroke-miterlimit="2.61313"
								stroke-dasharray="8 8"
							/>
						</svg>
					</div>
				</div>
			</div>
			<h5 class="font-sm text-center opacity-50">Animated prompt to make sure the user has selected a text frame</h5>
		</div>

		<p>
			Once the user selects at least one text layer, they are able to choose between two generation modes: <strong
				>Auto</strong
			>
			and <strong>Custom</strong>. Depending on the resize setting of the frame(s), <strong>Auto Mode</strong> will intelligently
			generate text based on either the current amount of text in the frame or the total size of the text frame. To ensure
			that the generated ipsum looks as much like proper sentences as possible, the plugin uses custom logic to construct
			the text based on a predefined set of requirements.
		</p>

		<div class="mx-auto w-full max-w-6xl space-y-4 pb-4 pt-6">
			<Image
				cloud
				src="/work/get-some-ipsum/GetSomeIpsum-ModeAuto.jpg"
				alt="Auto mode intelligently generates text based on the selected frame(s)"
				imageWidths={[800, 1200, 1600, 1920]}
				class="w-full"
				width="2400"
				height="1080"
			/>
			<h5 class="font-sm text-center opacity-50">
				Auto Mode intelligently generates text based on the selected frame(s)
			</h5>
		</div>

		<p>
			<strong>Custom Mode</strong>, on the other hand, allows users to generate a specific amount of text based on a
			desired number of characters, words, or paragraphs. To improve the user experience of this flow, I included
			sensible defaults for each output type (2 paragraphs, 25 words, or 150 characters), which are automatically
			applied based on the current selection as long as the user has not yet modified the number input.
		</p>

		<div class="mx-auto w-full max-w-6xl space-y-4 pb-4 pt-6">
			<Image
				cloud
				src="/work/get-some-ipsum/GetSomeIpsum-ModeCustom.jpg"
				alt="Custom mode allows for complete control over the generated text"
				imageWidths={[800, 1200, 1600, 1920]}
				class="w-full"
				width="2400"
				height="1080"
			/>
			<h5 class="font-sm text-center opacity-50">Custom mode allows for complete control over the generated text</h5>
		</div>

		<p>
			In either mode, you can choose whether you want to include periods in the generated text, and if you want the
			generated text to be set in title case — two options that are intended to make the plugin easier to use for
			headlines. Once the text is successfully generated, the user receives a toast message confirming the total number
			of updated text layers.
		</p>

		<div class="mx-auto w-full max-w-6xl space-y-4 pb-4 pt-6">
			<Image
				cloud
				src="/work/get-some-ipsum/GetSomeIpsum-ToastSuccess.jpg"
				alt="Toast message indicating the number of textboxes modified"
				imageWidths={[800, 1200, 1600, 1920]}
				class="w-full"
				width="2400"
				height="1080"
			/>
			<h5 class="font-sm text-center opacity-50">Toast message indicating the number of textboxes modified</h5>
		</div>

		<p>
			To be respectful of and responsive to users' needs and preferences, the plugin is fully keyboard accessible,
			including focus states, and features built-in support for both dark and light mode.
		</p>

		<div class="mx-auto w-full max-w-6xl space-y-4 pb-4 pt-6">
			<Image
				cloud
				src="/work/get-some-ipsum/GetSomeIpsum-Themes.png"
				alt="Side-by-side comparison of light and dark themes"
				imageWidths={[800, 1200, 1600, 1920]}
				class="w-full"
				width="2400"
				height="1080"
			/>
			<h5 class="font-sm text-center opacity-50">Side-by-side comparison of light and dark themes</h5>
		</div>

		<p>
			This was my first Figma plugin, which I built from the ground up using Svelte as my front end framework for
			templating and state management and Tailwind as my CSS framework for managing styles. It's real, and you can check
			it out <a href="https://www.figma.com/community/plugin/1225446981019698507/Get-Some-Ipsum"
				>here in the Figma community</a
			>, or wherever you get your plugins (a.k.a. the Resources panel at the top of your Figma file)
		</p>
	</Container>
</article>

<style lang="postcss">
	p,
	ul {
		@apply mx-auto max-w-3xl text-foreground text-opacity-80 lg:text-xl;
	}

	p a,
	p strong {
		@apply font-bold text-foreground text-opacity-90;
	}

	ul {
		@apply space-y-5;
	}

	li {
		@apply relative pl-5 before:absolute before:left-0 before:top-0 before:font-medium before:text-foreground before:text-opacity-100 before:content-['→'] lg:pl-7;
	}
</style>
