<script lang="ts">
	import Container from '@globals/layout/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { professionalExperiences, proofPoints } = data;
</script>

<Container as="main" py="xl" class="font-[375] bg-background">
	<Container as="div" py="md" class="grid gap-12 max-w-3xl mx-auto">
		<header class="grid gap-y-4 sm:grid-cols-5 sm:gap-x-8 sm:items-center">
			<div class="w-28 h-28 aspect-square bg-surface-high rounded-full overflow-hidden">
				<img src="/img/about/andy-crop.jpeg" alt="A headshot of Andy Stewart" />
			</div>
			<div class="sm:col-span-4 grid gap-2">
				<h1 class="font-medium text-3xl">Andy Stewart</h1>
				<h2>Strategy, design + frontend development with an eye for detail</h2>
				<p class="opacity-[0.65]">Seattle, WA</p>
			</div>
		</header>

		<section class="grid gap-6">
			<h3 class="font-[400] text-sm">About</h3>
			<div class="text-lg leading-normal">
				Hi, I'm Andy, a designer working at the intersection of brand and technology. I have a
				decade of experience in helping brands realize even the most vague of ideas across a variety
				of touchpoints, from identities to digital experiences. My work is defined by a love of
				aesthetics, technology, and delightful experiences, and an eye for recognizing and resolving
				challenging business problems.
			</div>
		</section>

		<div class="border-b border-light" />

		<section class="grid gap-8">
			{#each professionalExperiences as exp}
				<h3 class="font-[400] text-sm">{exp.category}</h3>
				{#each exp.positions as job}
					<div class="grid sm:grid-cols-5 gap-y-2 gap-x-8 mb-2">
						<div class="font-[400] opacity-[0.65] slashed-zero">
							{#if job.years.length > 1}
								{job.years[0]}-{job.years[1]}
							{:else}
								{job.years[0]}
							{/if}
						</div>
						<div class="grid gap-2 sm:col-span-4">
							<h4 class="font-medium">
								{job.role} —
								{#if job.link}
									<a href={job.link}>{job.company} <span class="opacity-[0.65]">↗</span></a>
								{:else}
									{job.company}
								{/if}
							</h4>
							<p class="font-[400] opacity-[0.65]">{job.location}</p>
							{#if job.summary}
								<p>{job.summary}</p>
							{/if}
						</div>
					</div>
				{/each}
				<div class="border-b border-light" />
			{/each}
		</section>

		{#each proofPoints as list, index}
			<section class="grid gap-8">
				<h3 class="font-[400] text-sm">
					Select {list.category}
					{#if list.link}
						<a href={list.link} class="ml-2 opacity-[0.65]">See All</a>
					{/if}
				</h3>
				<ul class="grid grid-cols-2 sm:grid-cols-3 gap-y-2">
					{#each list.items as item}
						<li
							class="relative text-foreground pl-5 before:absolute before:top-0 before:left-0 before:content-['↘'] before:text-foreground/60"
						>
							{item}
						</li>
					{/each}
				</ul>
			</section>
			{#if index !== proofPoints.length - 1}
				<div class="border-b border-light" />
			{/if}
		{/each}
	</Container>
</Container>
