<script>
	// TODO: Finish adding images
	// TODO: Image alt text
	// TODO: Update image sizes specification on components

	import Container from '@globals/layout/Container.svelte';
	import Image from '$lib/components/media/Image.svelte';
	import Video from '$lib/components/media/Video.svelte';
	import Button from '@globals/Button.svelte';
</script>

<main class="border-b bg-background border-light lg:grid lg:grid-cols-12">
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
				GLY is a general contractor building resilient, future-ready projects in the PNW
			</h1>
			<p>
				Rooted in the Pacific Northwest’s culture of innovation and creativity, GLY is one of the
				region's most respected locally-owned general contractors. We designed and built their new
				website from the ground up to elevate and celebrate their outcomes-minded approach to
				construction and provide them with a modern, dynamic platform to establish credibility,
				demonstrate leadership within the industry, and attract talent.
			</p>
			<div class="mt-3 border-t pt-5 font-medium border-light">
				<span class="opacity-65">Agency:</span> Turnstyle
			</div>
			<div class="border-t pt-5 font-medium border-light">
				<span class="opacity-65">Development:</span> R.J. LaCount
			</div>
			<div class="mt-4">
				<Button link href="https://www.gly.com/">View Live Site</Button>
			</div>
		</Container>
	</div>
	<div class="relative grid min-h-screen gap-y-8 lg:col-span-7 xl:col-span-8">
		<Container py="md" pb="xl" class="grid gap-y-5">
			<Video
				controls
				src="/work/gly/GLY-PageTransitions.mp4"
				poster="/work/gly/GLY-PageTransitions-Poster.jpg"
				class="rounded-lg"
			/>
			<Image
				cloud
				src="/work/gly/GLY-Web-Home.jpg"
				alt="kjnj"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				class="rounded-lg"
			/>
			<Image
				cloud
				src="/work/gly/GLY-Web-Mobile.jpg"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				alt="kjnj"
				class="rounded-lg"
			/>
			<Image
				cloud
				src="/work/gly/GLY-Web-Desktop.jpg"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				alt="kjnj"
				class="rounded-lg"
			/>
			<Video
				controls
				src="/work/gly/GLY-Web-VideoModal.mp4"
				poster="/work/gly/GLY-VideoModal-Poster.jpg"
				class="rounded-lg"
			/>
			<Image
				cloud
				src="/work/gly/GLY-Web-Nav.jpg"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				alt="kjnj"
				class="rounded-lg"
			/>
			<!-- <Image
				cloud
				src="/work/gly/GLY-Web-Mobile.jpg"
				imageWidths={[800, 1200, 1920]}
				sizes={[['769px', '50vh'], ['100vh']]}
				alt="kjnj"
				class="rounded-lg"
			/> -->
		</Container>
	</div>
</main>
