<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
	const { professionalExperiences, proofPoints, references } = data;
</script>

<main class="bg-background py-lg font-[375] px-app">
	<div class="mx-auto grid max-w-3xl gap-12">
		<header class="grid gap-y-6 sm:grid-cols-5 sm:items-center sm:gap-x-8 md:gap-y-4">
			<div class="aspect-square h-28 w-28 overflow-hidden rounded-full bg-surface-high">
				<img src="/img/about/andy-crop.jpeg" alt="A headshot of Andy Stewart" />
			</div>
			<div class="grid gap-5 sm:col-span-4 md:gap-3">
				<h1 class="text-4xl font-medium">
					Andy Stewart <span class="block opacity-60 xs:ml-2 xs:inline">Design + Code</span>
				</h1>
				<h2 class="text-xl">
					A product designer working to make technology feel more human through compelling brands and clear interfaces
				</h2>
				<!-- <p class="opacity-[0.65]">Seattle, WA</p> -->
			</div>
		</header>

		<section class="grid gap-6">
			<h3 class="text-sm font-[400]">About</h3>
			<div class="leading-normal md:text-lg">
				Hi, I'm Andy, a designer working at the intersection of brand and technology. For over a decade, I've helped
				companies turn ideas into experiences across a variety of media and touchpoints, from visual identities to
				websites. My work is defined by a love of aesthetics, technology, and delightful interactions, and an eye for
				recognizing and resolving challenging business problems.
			</div>
		</section>

		<div class="border-b border-light" />

		<section class="grid gap-8">
			{#each professionalExperiences as exp}
				<h3 class="text-sm font-[400]">{exp.category}</h3>
				{#each exp.positions as job}
					<div class="mb-2 grid gap-x-8 gap-y-2 sm:grid-cols-5">
						<div class="font-[400] slashed-zero opacity-[0.65]">
							{#if job.years.length > 1}
								{job.years[0]}-{job.years[1]}
							{:else}
								{job.years[0]}
							{/if}
						</div>
						<div class="grid gap-2 sm:col-span-4">
							<div>
								<h4 class="font-medium">
									{job.role} —
									{#if job.link}
										<a href={job.link}>{job.company} <span class="opacity-[0.65]">↗</span></a>
									{:else}
										{job.company}
									{/if}
								</h4>
								<p class="font-[400] opacity-[0.65]">{job.location}</p>
							</div>
							{#if job.summary && typeof job.summary === "object"}
								{#each job.summary as bullet}
									<p
										class="relative md:before:absolute md:before:-left-5 md:before:top-0 md:before:opacity-50 md:before:content-['↘']"
									>
										{bullet}
									</p>
								{/each}
							{:else if job.summary}
								<p>{job.summary}</p>
							{/if}
						</div>
					</div>
				{/each}
				<div class="border-b border-light" />
			{/each}
		</section>

		<section class="space-y-6">
			<h3 class="text-sm font-[400]">References</h3>
			{#each references as reference}
				<div class="space-y-2">
					<p class="relative before:absolute before:left-0 before:top-0 before:-translate-x-full before:content-['“']">
						{reference.quote}”
					</p>
					<p class=" opacity-[0.65]">{reference.author}, {reference.company}, {reference.title}</p>
				</div>
			{/each}
		</section>

		<div class="border-b border-light" />

		{#each proofPoints as list, index}
			<section class="grid gap-8">
				<h3 class="text-sm font-[400]">
					Select {list.category}
					{#if list.link}
						<a href={list.link} class="ml-2 opacity-[0.65]">See All</a>
					{/if}
				</h3>
				<ul class="grid grid-cols-2 gap-y-2 sm:grid-cols-3">
					{#each list.items as item}
						<li
							class="relative pl-5 text-foreground before:absolute before:left-0 before:top-0 before:text-foreground/60 before:content-['↘']"
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
	</div>
</main>
