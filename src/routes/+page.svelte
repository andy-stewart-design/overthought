<script lang="ts">
	import Container from "@globals/layout/Container.svelte";
	import type { PageData } from "./$types";
	import Image from "$lib/components/media/Image.svelte";

	export let data: PageData;
</script>

<Container class="min-h-screen bg-background">
	<section class="grid grid-cols-2 gap-x-8 gap-y-12 pt-xl">
		<h1 class="text-6xl font-medium">Andy Stewart</h1>
		<h2 class="text-6xl font-medium opacity-65">Design + Code</h2>
		<div />
		<div class="space-y-6">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis magnam possimus asperiores, exercitationem
				maxime molestias corrupti ducimus odit tenetur voluptatem excepturi. Veritatis corrupti ipsum laudantium, beatae
				quis numquam iste reprehenderit.
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis magnam possimus asperiores, exercitationem
				maxime molestias corrupti ducimus odit tenetur voluptatem excepturi. Veritatis corrupti ipsum laudantium, beatae
				quis numquam iste reprehenderit.
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis magnam possimus asperiores, exercitationem
				maxime molestias corrupti ducimus odit tenetur voluptatem excepturi. Veritatis corrupti ipsum laudantium, beatae
				quis numquam iste reprehenderit.
			</p>
			<div class="flex flex-wrap gap-4 pt-1 text-lg font-medium">
				<a href="https://codepen.io/andystewartdesign" class="whitespace-nowrap leading-none"
					>LinkedIn <span class="opacity-65">↗</span></a
				>
				<a href="https://codepen.io/andystewartdesign" class="whitespace-nowrap leading-none"
					>Codepen <span class="opacity-65">↗</span></a
				>
				<a href="https://github.com/andy-stewart-design" class="whitespace-nowrap leading-none"
					>Github <span class="opacity-65">↗</span></a
				>
				<a href="https://twitter.com/spinbutton" class="whitespace-nowrap leading-none"
					>Twitter <span class="opacity-65">↗</span></a
				>
				<a href="https://www.instagram.com/andystewartdesign/" class="whitespace-nowrap leading-none"
					>Instagram <span class="opacity-65">↗</span></a
				>
			</div>
		</div>
	</section>
	<section class="grid grid-cols-3 gap-2 gap-y-12 pt-xl md:gap-x-8">
		<h1 class="col-span-full text-6xl font-medium">Projects</h1>
		{#each data.projects as project}
			<div class="space-y-2">
				<Image
					cloud
					class="aspect-[4/5] rounded-xl border border-white/20 object-cover"
					src={project.metadata.img.src}
					alt={project.metadata.img.alt}
					imageWidths={[800, 1200]}
					sizes={[["769px", "50vh"], ["100vh"]]}
				/>
				<div class="space-y-3 pt-4">
					<div class="flex items-baseline justify-between">
						{#if project.metadata.link?.external}
							<a href={project.metadata.link.external} target="_blank">
								<p class="text-2xl font-medium">{project.metadata.client} <span class="opacity-65">↗</span></p>
							</a>
						{:else}
							<p class="text-2xl font-medium">{project.metadata.client}</p>
						{/if}
						<p class="text-sm font-medium slashed-zero">{project.metadata.year}</p>
					</div>
					<p class="">{project.metadata.summary}</p>
					<div class="flex gap-4">
						{#each project.metadata.tags as tag}
							<p class="text-sm font-medium slashed-zero">{tag}</p>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</section>
</Container>
