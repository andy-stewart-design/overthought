<script lang="ts">
	import Container from "@globals/layout/Container.svelte";
	import type { PageData } from "./$types";
	import Image from "$lib/components/media/Image.svelte";

	export let data: PageData;
</script>

<main class="bg-background">
	<Container class="mx-auto w-full max-w-app">
		<section id="home" class="grid gap-x-8 border-b py-lg border-light md:grid-cols-2 md:gap-y-12 md:py-xl">
			<div class="col-span-full mb-8 md:mb-0">
				<div class="inline-flex items-center gap-2 rounded-full border bg-surface-mid py-1 pl-2.5 pr-3 border-light">
					<span class="relative flex h-3 w-3">
						<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
						<span class="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
					</span>
					Open for work
				</div>
			</div>
			<h1 class="text-5xl font-medium xs:text-6xl md:text-5xl lg:text-6xl">Andy Stewart</h1>
			<h2 class="mb-8 text-5xl font-medium opacity-65 xs:text-6xl md:mb-0 md:text-5xl lg:text-6xl">
				Design <span class="font-light">+</span> Code
			</h2>
			<div />
			<div class="space-y-6">
				<p class="text-base text-foreground/80 xs:text-lg md:text-base lg:text-lg">
					Hi, I’m Andy. I’m a product designer with over a decade of experience helping to bring life to brands through
					compelling experiences and clear interfaces.
				</p>
				<p class="text-base text-foreground/80 xs:text-lg md:text-base lg:text-lg">
					I was most recently the Digital Creative Director at <a
						class="font-semibold text-foreground"
						href="https://turnstyle.studio/"
						target="_blank">Turnstyle</a
					>, a full-service creative studio in Seattle, where I worked end-to-end on projects as both a high-level
					creative leader and a hands-on contributor (often at the same time). I also taught design at the
					<a class="font-semibold text-foreground" href="https://www.svcseattle.com/" target="_blank"
						>School of Visual Concepts</a
					>.
				</p>
				<p class="text-base text-foreground/80 xs:text-lg md:text-base lg:text-lg">
					I'm currently available for hire. If you would like to discuss opportunities to collaborate or the types of
					roles I'm looking for, please
					<a class="font-semibold text-foreground" href="mailto:andy.stewart1170@gmail.com">reach out</a>.
				</p>
				<div class="flex flex-wrap gap-4 pt-8 text-lg font-medium">
					<a href="https://codepen.io/andystewartdesign" class="whitespace-nowrap leading-none"
						>LinkedIn <span class="opacity-65">↗</span></a
					>
					<a href="https://codepen.io/andystewartdesign" class="whitespace-nowrap leading-none"
						>Codepen <span class="opacity-65">↗</span></a
					>
					<a href="https://github.com/andy-stewart-design" class="whitespace-nowrap leading-none"
						>Github <span class="opacity-65">↗</span></a
					>
					<a href="/about" class="whitespace-nowrap leading-none">Twitter <span class="opacity-65">↗</span></a>
					<a href="/projects" class="whitespace-nowrap leading-none">Instagram <span class="opacity-65">↗</span></a>
				</div>
			</div>
		</section>

		<section
			id="work"
			class="grid gap-2 gap-y-12 border-b py-lg border-light sm:grid-cols-2 sm:gap-x-8 md:py-xl lg:grid-cols-3"
		>
			<h2 class="col-span-full text-5xl font-medium xs:text-6xl md:text-5xl lg:text-6xl">Projects</h2>
			{#each data.projects as project, index}
				<div class="flex flex-col gap-3 pt-4">
					{#if project.metadata.link?.external}
						<a href={project.metadata.link.external} target="_blank" class="group space-y-4">
							<Image
								cloud
								class="aspect-[4/5] w-full rounded-xl border border-white/20 bg-foreground/10 object-cover transition-opacity duration-500 ease-out-3 group-hover:opacity-60"
								src={project.metadata.img.src}
								alt={project.metadata.img.alt}
								imageWidths={[800, 1200]}
								sizes={[["769px", "50vh"], ["100vh"]]}
								loading={index >= 3 ? "lazy" : "eager"}
							/>
							<div class="flex items-baseline justify-between">
								<p class="text-2xl font-medium">{project.metadata.client} <span class="opacity-65">↗</span></p>
								<p class="text-sm font-medium slashed-zero">{project.metadata.year}</p>
							</div>
						</a>
					{:else}
						<div class="space-y-4">
							<Image
								cloud
								class="aspect-[4/5] w-full rounded-xl border border-white/20 bg-foreground/10 object-cover"
								src={project.metadata.img.src}
								alt={project.metadata.img.alt}
								imageWidths={[800, 1200]}
								sizes={[["769px", "50vh"], ["100vh"]]}
							/>
							<div class="flex items-baseline justify-between">
								<p class="text-2xl font-medium">{project.metadata.client}</p>
								<p class="text-sm font-medium slashed-zero">{project.metadata.year}</p>
							</div>
						</div>
					{/if}

					<p class="grow text-foreground/80">{project.metadata.summary}</p>
					<ul class="flex flex-wrap gap-1.5 pt-2">
						{#each project.metadata.tags as tag}
							<li class="overflow-hidden rounded-full border bg-surface-mid text-sm font-medium border-light">
								<span class="inline-block px-2.5 pb-1 pt-[3px]">{tag}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</section>

		<section
			id="work"
			class="mx-auto grid max-w-6xl gap-3 border-b py-lg border-light sm:grid-cols-2 md:gap-6 md:py-xl"
		>
			<h2 class="col-span-full mb-8 text-center text-3xl font-medium md:mb-4">Kind words from some kind people</h2>

			{#each data.recos as reco}
				<div class="space-y-4 rounded-xl border bg-surface-mid p-4 border-light">
					<div class="flex items-center gap-4">
						<Image
							cloud
							class="h-14 w-14 shrink-0 rounded-full border object-cover border-light"
							src={reco.avatar}
							alt={`Headshot of ${reco.name}`}
							imageWidths={240}
							sizes={[["56px"]]}
							loading="lazy"
						/>
						<div>
							<p class="pt-px text-lg font-medium">{reco.name}</p>
							<p class="text-sm font-medium opacity-65">{reco.title}, {reco.company}</p>
						</div>
					</div>
					<p>{reco.quote}</p>
				</div>
			{/each}
		</section>

		<section id="about" class="grid gap-8 py-lg md:grid-cols-2 md:gap-y-12 md:py-xl">
			<div>
				<Image
					cloud
					class="aspect-[4/3] h-full rounded-xl object-cover object-top opacity-90 md:aspect-square"
					src="/about/andy-headshot.jpg"
					imageWidths={[800, 1200]}
					alt="The designer Andy Stewart throwing playing cards into the air"
				/>
			</div>
			<div class="flex flex-col justify-center gap-6">
				<h1 class="text-5xl font-medium xs:text-6xl md:text-5xl lg:text-6xl">About Me</h1>
				<p class="text-base text-foreground/80 xs:text-lg md:text-base lg:text-lg">
					I'm a designer with a passion for bringing ideas to life, by any means necessary. In my work, I enjoy finding
					opportunities for creativity amidst the constraints of a given project and chasing ideas that push me to the
					edge of my abilities. I’m a designer first and foremost, but I’m also a self-taught developer with a
					background in journalism, and I’m passionate about helping to bridge the gaps between disciplines.
				</p>
				<p class="text-base text-foreground/80 xs:text-lg md:text-base lg:text-lg">
					When I'm not behind a computer, you may find me at a concert, on a run, making noises on a synthesizer, or
					mixing cocktails.
				</p>
				<p class="text-base text-foreground/80 xs:text-lg md:text-base lg:text-lg">
					Though I've spent the last 10 years in Seattle, I'm currently traveling and will soon be moving to New York
					City with my partner and our two cats. I'm currently available for hire. If you would like to discuss
					opportunities to collaborate or the types of roles I'm looking for, please
					<a class="font-semibold text-foreground" href="mailto:andy.stewart1170@gmail.com">reach out</a>.
				</p>
			</div>
		</section>
	</Container>
</main>
