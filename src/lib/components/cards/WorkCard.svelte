<script lang="ts">
	import Image from "$lib/components/media/Image.svelte";
	import Button from "@globals/Button.svelte";

	interface Project {
		client: string;
		summary: string;
		tags: string[];
		year: number;
		status: string;
		img: {
			src: string;
			alt: string;
		};
		link?: {
			text: string;
			href: string;
			external: boolean;
		};
	}

	export let project: Project;
	export let grid = false;
</script>

<div
	class="relative before:absolute before:right-0 before:top-0 before:h-full before:border-light after:absolute after:left-0 after:top-0 after:w-full after:border-t after:border-light data-[grid=false]:last-of-type:before:border-0 data-[grid=false]:md:before:border-r data-[grid=true]:md:before:border-r data-[grid=true]:md:[&:nth-of-type(2)]:before:border-0 data-[grid=true]:lg:[&:nth-of-type(2)]:before:border-r"
	data-grid={grid}
>
	<div class="group relative bg-surface-mid">
		<Image
			cloud
			class={"aspect-[4/5] object-cover"}
			src={project.img.src}
			alt={project.img.alt}
			imageWidths={[800, 1200]}
			sizes={[["769px", "50vh"], ["100vh"]]}
		/>
		{#if project.link?.external}
			<div class="absolute bottom-4 left-0 px-app md:bottom-8">
				<a
					href={project.link.href}
					class="flex items-center gap-3 rounded border border-gray-100/15 bg-black/30 px-5 py-4 font-medium backdrop-blur transition-all hover:bg-white/60 hover:text-black focus-visible:opacity-100 can-hover:opacity-0 can-hover:hover:border-gray-100/60 can-hover:group-hover:opacity-100 cannot-hover:hidden"
				>
					<svg width="16" height="16" viewBox="0 0 16 16">
						<path
							d="M13 12V3H4M12.5 3.5L3 13"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linejoin="round"
							fill="none"
						/>
					</svg>
					{project.link.text}
				</a>
			</div>
		{:else if project.link}
			<a
				href={`/projects/${project.link.href}`}
				class="group absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/50 text-xl font-medium opacity-0 backdrop-blur transition-opacity focus-within:opacity-100 hover:opacity-100 focus:outline-none cannot-hover:hidden"
			>
				<span class="rounded border border-gray-100 px-5 py-4 font-medium">View Project</span>
			</a>
		{/if}
		<div class="pointer-events-none absolute left-0 top-2 pb-md pt-sm px-app">
			<ul class="flex flex-wrap gap-1 pt-2">
				{#each project.tags as tag}
					<li
						class="overflow-hidden rounded-full border border-gray-100/15 text-sm font-medium text-gray-100 backdrop-blur"
					>
						<span class="inline-block bg-black/30 px-2.5 pb-1 pt-[3px]">{tag}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="grid gap-5 pb-lg pt-md px-app">
		<h4 class="text-sm font-medium slashed-zero tabular-nums opacity-65">
			{project.year} <span class="mx-1">·</span>
			{project.status}
		</h4>
		{#if project.link && !project.link.external}
			<a href={`/projects/${project.link.href}`} class="block transition-opacity hover:opacity-60">
				<h3 class="text-3xl">
					<span class="uppercase">{project.client}</span>{` ${project.summary}`}
				</h3>
			</a>
		{:else}
			<h3 class="text-3xl">
				<span class="uppercase">{project.client}</span>{` ${project.summary}`}
			</h3>
		{/if}
		{#if project.link}
			<div class="mt-2 flex gap-6 can-hover:hidden">
				{#if project.link}
					<Button link href={`/projects/${project.link.href}`}>View Project</Button>
				{/if}
				{#if project.link.external}
					<a href={project.link.href} class="flex items-center gap-1.5 font-medium">
						{project.link.text}
						<svg width="16" height="16" viewBox="0 0 16 16">
							<path d="M12 12V4H4M11.5 4.5L3 13" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round" />
						</svg>
					</a>
				{/if}
			</div>
		{/if}
	</div>
</div>
