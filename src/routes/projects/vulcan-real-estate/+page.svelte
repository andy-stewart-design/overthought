<script>
	// TODO: Finish adding images
	// TODO: Image alt text
	// TODO: Update image sizes specification on components

	import Container from '@globals/layout/Container.svelte';
	import Image from '$lib/components/media/Image.svelte';
	import Video from '$lib/components/media/Video.svelte';
	import Button from '@globals/Button.svelte';
</script>

<main class="border-b bg-background border-light lg:grid lg:grid-cols-12 max-w-[1800px] mx-auto">
	<div class="relative border-b border-light lg:col-span-5 lg:border-b-0 xl:col-span-4">
		<Container py="none" class="grid gap-y-5 !pb-10 !pt-10 lg:sticky lg:top-20 lg:!pb-30">
			<ul class="flex gap-2 text-sm font-medium">
				<li class="group list-inside list-['·'] first-of-type:list-none">
					<span class="pl-2 group-first-of-type:p-0">Web Design</span>
				</li>
				<li class="group list-inside list-['·'] first-of-type:list-none">
					<span class="pl-2 group-first-of-type:p-0">Digital Strategy</span>
				</li>
			</ul>
			<h1 class="text-3xl font-semibold">
				Vulcan Real Estate develops imaginative spaces that propel human progress
			</h1>
			<p>
				A brainchild of Microsoft co-founder Paul Allen and the engine behind Seattle's vibrant
				South Lake Union neighborhood, Vulcan Real Estate is one of the Pacific Northwest’s most
				respected developers. After Allen’s passing, the team at Vulcan saw a need to reposition
				themselves in the market and reimagine their vision for the future. Alongside our partners
				at Stoke Strategy and Metric Media, we helped breathe new life into Vulcan’s brand with a
				revitalized strategy, visual identity, and website.
			</p>
			<div class="mt-3 grid grid-cols-[72px_1fr] border-t pt-5 font-medium border-light">
				<span class="opacity-65">Scope:</span>
				<ul class="flex flex-wrap gap-x-2">
					<li class="group after:content-['·'] last-of-type:after:content-none">
						<span class="pr-2 group-last-of-type:p-0">Visual Identity</span>
					</li>
					<li class="group after:content-['·'] last-of-type:after:content-none">
						<span class="pr-2 group-last-of-type:p-0">Web Design</span>
					</li>
					<li class="group after:content-['·'] last-of-type:after:content-none">
						<span class="pr-2 group-last-of-type:p-0">UI/UX</span>
					</li>
					<li class="group after:content-['·'] last-of-type:after:content-none">
						<span class="pr-2 group-last-of-type:p-0">Prototyping</span>
					</li>
					<li class="group after:content-['·'] last-of-type:after:content-none">
						<span class="pr-2 group-last-of-type:p-0">Art Direction</span>
					</li>
				</ul>
			</div>
			<div class="grid grid-cols-[72px_1fr] border-t pt-5 font-medium border-light">
				<span class="opacity-65">Agency:</span>
				<div>
					<a href="https://turnstyle.studio/" target="_blank">
						Turnstyle <span class="font-normal">↗</span>
					</a>
				</div>
			</div>
			<div class="grid grid-cols-[72px_1fr] border-t pt-5 font-medium border-light">
				<span class="opacity-65">Dev:</span>
				<div>
					<a href="https://www.metricmedia.com/" target="_blank">
						Metric Media <span class="font-normal">↗</span>
					</a>
				</div>
			</div>
			<div class="mt-4">
				<Button link href="https://vulcanrealestate.com/">View Live Site</Button>
			</div>
		</Container>
	</div>
	<div class="relative grid min-h-screen gap-y-8 lg:col-span-7 xl:col-span-8">
		<Container py="md" pb="xl" class="grid gap-y-5">
			<Image
				cloud
				src="/work/vulcan-real-estate/VRE-Logo-Primary.png"
				alt="kjnj"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				class="rounded-lg"
			/>
			<Image
				cloud
				src="/work/vulcan-real-estate/VRE-Logo-Comparison.png"
				alt="kjnj"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				class="rounded-lg"
			/>
			<Video
				src="/work/vulcan-real-estate/VRE-Logo-Animation.mp4"
				poster="/work/vulcan-real-estate/VRE-Logo-Animation-Poster.jpg"
				class="rounded-lg"
				autoplay
				loop
				muted
				playsinline
			/>
			<Image
				cloud
				src="/work/vulcan-real-estate/VRE-WaterBottle.jpg"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				alt="kjnj"
				class="rounded-lg"
				loading="lazy"
			/>
			<Image
				cloud
				src="/work/vulcan-real-estate/VRE-BusinessCards.jpg"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				alt="kjnj"
				class="rounded-lg"
				loading="lazy"
			/>
			<Image
				cloud
				src="/work/vulcan-real-estate/VRE-Guidelines.jpg"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				alt="kjnj"
				class="rounded-lg"
				loading="lazy"
			/>
			<Video
				src="/work/vulcan-real-estate/VRE-Home-Desktop.mp4"
				poster="/work/vulcan-real-estate/VRE-Home-Desktop-Poster.jpg"
				class="rounded-lg"
				controls
				loop
				muted
				playsinline
			/>
			<Image
				cloud
				src="/work/vulcan-real-estate/VRE-Mobile-Collage.jpg"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				alt="kjnj"
				class="rounded-lg"
				loading="lazy"
			/>
			<Image
				cloud
				src="/work/vulcan-real-estate/VRE-Home-Desktop-Collage.jpg"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				alt="kjnj"
				class="rounded-lg"
				loading="lazy"
			/>
		</Container>
	</div>
</main>
