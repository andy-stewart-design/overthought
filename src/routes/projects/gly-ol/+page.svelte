<script>
	// TODO: Finish adding images
	// TODO: Image alt text
	// TODO: Update image sizes specification on components

	import Container from "@globals/layout/Container.svelte";
	import Image from "$lib/components/media/Image.svelte";
	import Video from "$lib/components/media/Video.svelte";
	import Button from "@globals/Button.svelte";
</script>

<main class="border-b bg-background border-light">
	<div class="mx-auto max-w-screen-3xl lg:grid lg:grid-cols-12">
		<div class="relative border-b border-light lg:col-span-5 lg:border-b-0 xl:col-span-4">
			<div class="grid gap-y-5 pb-md pt-md px-app lg:sticky lg:top-20 lg:pb-xl">
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
					Rooted in the Pacific Northwest’s culture of innovation and creativity, GLY is one of the region's most
					respected locally-owned general contractors. We designed and built their new website from the ground up to
					elevate and celebrate their outcomes-minded approach to construction and provide them with a modern, dynamic
					platform to establish credibility, demonstrate leadership within their industry, and attract talent.
				</p>
				<div class="mt-3 grid grid-cols-[72px_1fr] border-t pt-5 font-medium border-light">
					<span class="opacity-65">Scope:</span>
					<!-- Responsive Design · UI/UX · Prototyping · Art Direction -->
					<ul class="flex flex-wrap gap-x-2">
						<li class="group after:content-['·'] last-of-type:after:content-none">
							<span class="pr-2 group-last-of-type:p-0">Responsive Design</span>
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
						<a href="https://rjlacount.com/" target="_blank">
							R.J. LaCount <span class="font-normal">↗</span>
						</a>
					</div>
				</div>
				<div class="mt-4">
					<Button link href="https://www.gly.com/">View Live Site</Button>
				</div>
			</div>
		</div>
		<div class="relative grid min-h-screen gap-y-8 lg:col-span-7 xl:col-span-8">
			<div class="grid gap-y-5 pb-xl pt-md px-app">
				<Video
					controls
					src="/work/gly/GLY-PageTransitions.mp4"
					poster="/work/gly/GLY-PageTransitions-Poster.jpg"
					class="w-full rounded-lg"
				/>
				<Image
					cloud
					src="/work/gly/GLY-Web-Home.jpg"
					alt="kjnj"
					imageWidths={[800, 1200, 1920]}
					sizes={[["769px", "50vh"], ["100vh"]]}
					class="w-full rounded-lg"
				/>
				<Image
					cloud
					src="/work/gly/GLY-Web-Mobile.jpg"
					imageWidths={[800, 1200, 1920]}
					sizes={[["769px", "50vh"], ["100vh"]]}
					alt="kjnj"
					class="w-full rounded-lg"
				/>
				<Image
					cloud
					src="/work/gly/GLY-Web-Desktop.jpg"
					imageWidths={[800, 1200, 1920]}
					sizes={[["769px", "50vh"], ["100vh"]]}
					alt="kjnj"
					class="w-full rounded-lg"
				/>
				<Video
					controls
					src="/work/gly/GLY-Web-VideoModal.mp4"
					poster="/work/gly/GLY-VideoModal-Poster.jpg"
					class="w-full rounded-lg"
				/>
				<Image
					cloud
					src="/work/gly/GLY-Web-Nav.jpg"
					imageWidths={[800, 1200, 1920]}
					sizes={[["769px", "50vh"], ["100vh"]]}
					alt="kjnj"
					class="w-full rounded-lg"
				/>
			</div>
		</div>
	</div>
</main>
