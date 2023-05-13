<script>
	import Container from '@globals/layout/Container.svelte';
	import Image from '$lib/components/media/Image.svelte';
	import Video from '$lib/components/media/Video.svelte';
</script>

<main class="border-b bg-background border-light lg:grid lg:grid-cols-12">
	<div class="relative border-b border-light lg:col-span-5 xl:col-span-4">
		<Container py="md" pb="xl" class="grid gap-y-5 lg:sticky lg:top-20">
			<h1 class="text-3xl font-medium">
				GLY is a general contractor building resilient, future-ready communities in the Pacific
				Northwest
			</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem, corrupti rerum autem
				eligendi blanditiis perspiciatis consequatur consequuntur vitae qui nihil, vel facilis?
				Nihil, maiores vitae? Earum, officia! Minima, sequi!
			</p>
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
				src="https://res.cloudinary.com/andystewartdesign/image/upload/v1682114122/work/gly/GLY-Web-Mobile.jpg"
				alt="kjnj"
				class="rounded-lg"
			/>

			<Image
				src="https://res.cloudinary.com/andystewartdesign/image/upload/v1682114122/work/gly/GLY-Web-Mobile.jpg"
				alt="kjnj"
				class="rounded-lg"
			/>
			<Image
				src="https://res.cloudinary.com/andystewartdesign/image/upload/v1682114122/work/gly/GLY-Web-Mobile.jpg"
				alt="kjnj"
				class="rounded-lg"
			/>
			<Image
				src="https://res.cloudinary.com/andystewartdesign/image/upload/v1682114122/work/gly/GLY-Web-Mobile.jpg"
				alt="kjnj"
				class="rounded-lg"
			/>
		</Container>
	</div>
</main>
