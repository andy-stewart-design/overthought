<script lang="ts">
	import Image from '$lib/components/media/Image.svelte';
	import Container from '@globals/layout/Container.svelte';

	interface Project {
		client: string;
		summary: string;
		tags: string[];
		year: number;
		img: {
			src: string;
			alt: string;
		};
	}

	export let project: Project;
	export let grid = false;
</script>

<div
	class="relative before:absolute before:right-0 before:top-0 before:h-full before:border-light after:absolute after:left-0 after:top-0 after:w-full after:border-t after:border-light group-[.grid]:bg-blue-500 data-[grid=false]:last-of-type:before:border-0 data-[grid=true]:md:before:border-r data-[grid=false]:lg:before:border-r data-[grid=true]:md:[&:nth-of-type(2)]:before:border-0 data-[grid=true]:lg:[&:nth-of-type(2)]:before:border-r"
	data-grid={grid}
>
	<div class="relative bg-surface-mid">
		<Image class="aspect-[4/5] object-cover" src={project.img.src} alt={project.img.alt} />
		<Container py="md" pt="sm" class="absolute left-0 top-2">
			<ul class="flex gap-2 pt-2">
				{#each project.tags as tag}
					<li
						class="rounded-full bg-black/20 px-2.5 pb-1 pt-[3px] text-sm font-medium outline outline-gray-100/15 backdrop-blur"
					>
						{tag}
					</li>
				{/each}
			</ul>
		</Container>
	</div>
	<Container py="md" pb="lg" class="space-y-5">
		<h4 class="text-sm font-medium slashed-zero tabular-nums opacity-65">
			{project.year} <span class="mx-1">·</span> Coming Soon
		</h4>
		<h3 class="text-3xl">
			<span class="uppercase">{project.client}</span>{` ${project.summary}`}
		</h3>
	</Container>
</div>

<!-- <Image  
			class="absolute left-0 top-0 h-full w-full object-cover"
			src={'https://res.cloudinary.com/andystewartdesign/image/upload/v1683777476/work/gly/GLY-WorkCard-BG.jpg'}
			alt={project.img.alt}
		/>
		<div
			class="relative w-4/5 overflow-hidden rounded-3xl border-[10px] border-gray-100/40 shadow-2xl"
		>
			<Image
				class="rounded-lg"
				src="https://res.cloudinary.com/andystewartdesign/image/upload/v1683776795/work/gly/GLY-Home-Hero.jpg"
				alt="lknl"
			/>
		</div> -->
