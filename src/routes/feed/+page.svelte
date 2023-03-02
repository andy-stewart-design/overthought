<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicOut, quadIn } from 'svelte/easing';
	import { Button } from 'neutral-ui';
	import Container from '@globals/layout/Container.svelte';
	import { focusTrap } from '$lib/actions/focusTrap';
	import type { PageData } from './$types';

	export let data: PageData;
	const { projects } = data;

	let isOverlayActive = false;
	let activeIndex = 0;
	$: activeProject = projects.filter((p) => p.index === activeIndex)[0];

	const closeOverlay = () => {
		isOverlayActive = false;
	};
	const incActiveImage = () => {
		if (activeIndex < projects.length - 1) activeIndex += 1;
		else activeIndex = 0;
	};
	const decActiveImage = () => {
		if (activeIndex > 0) activeIndex -= 1;
		else activeIndex = projects.length - 1;
	};
</script>

<main class="bg-background">
	<Container as="header" pt="hero" pb="lg" class="grid lg:grid-cols-2 lg:gap-10">
		<h1 class="text-8xl md:text-9xl">Feed</h1>
	</Container>
	<Container
		as="section"
		pb="xl"
		class="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-6"
	>
		{#each projects as project (project.id)}
			<Button
				on:click={() => {
					if (project.index) activeIndex = project.index;
					isOverlayActive = true;
				}}
				label={`${project.client} | ${project.title}`}
			>
				<div class="bg-surface-low rounded-2xl overflow-hidden shadow-lg">
					{#if project.mediaType === 'IMAGE'}
						<img
							class="aspect-square"
							src={project.src.feed}
							srcset={project.srcSet.feed}
							sizes="(max-width: 1024) 50vw, (max-width: 1536) 33vw, 25vw"
							alt={project.alt}
							width="1080"
							height="1080"
						/>
					{:else if project.mediaType === 'VIDEO'}
						<video
							class="aspect-square"
							width="1080"
							height="1080"
							poster={project.poster.feed}
							autoplay
							muted
							loop
							playsinline
						>
							<source src={project.src.feed} type="video/mp4" />
							Sorry, your browser doesn't support embedded videos.
						</video>
					{/if}
				</div>
			</Button>
		{/each}
	</Container>
</main>

{#if isOverlayActive && activeProject}
	<div
		class="fixed top-0 left-0 flex flex-col w-screen h-screen bg-background/70 backdrop-blur-lg z-50"
		in:fade={{ duration: 400, easing: cubicOut }}
		out:fade={{ duration: 400, easing: cubicOut, delay: 300 }}
		use:focusTrap={{
			escapeCallback: closeOverlay,
			arrowLeftCallback: decActiveImage,
			arrowRightCallback: incActiveImage
		}}
	>
		<Container as="div" py="md" class="flex">
			<div class="grow flex gap-2">
				<Button on:click={decActiveImage}>Prev</Button>
				<Button on:click={incActiveImage}>Next</Button>
			</div>
			<Button
				on:click={() => {
					isOverlayActive = false;
				}}>Close</Button
			>
		</Container>
		<Container as="div" pt="none" pb="none" class="grow">
			<div
				class="relative w-full h-full"
				in:scale={{ start: 1.2, duration: 600, delay: 300, easing: cubicOut }}
				out:scale={{ start: 1.2, duration: 300, easing: quadIn }}
			>
				{#key activeIndex}
					<div
						in:fade|local={{ duration: 300, easing: cubicOut }}
						out:fade|local={{ duration: 300, easing: cubicOut }}
					>
						{#if activeProject.mediaType === 'IMAGE'}
							{#if activeProject.srcSet && activeProject.srcSet.overlay}
								<img
									class="absolute top-0 left-0 w-full h-full object-contain z-10"
									src={activeProject.src.overlay}
									srcset={activeProject.srcSet.overlay}
									sizes="100vw"
									alt={activeProject.alt}
								/>
							{/if}
						{:else if activeProject.mediaType === 'VIDEO'}
							<video
								class="absolute top-0 left-0 w-full h-full object-contain z-10"
								width="1080"
								height="1080"
								poster={activeProject.poster.overlay}
								autoplay
								muted
								loop
								playsinline
							>
								<source src={activeProject.src.overlay} type="video/mp4" />
								Sorry, your browser doesn't support embedded videos.
							</video>
						{/if}
					</div>
				{/key}
			</div>
		</Container>
		<Container as="div" py="md">
			<ul
				class="flex justify-center gap-6"
				in:fade={{ duration: 400, easing: cubicOut, delay: 500 }}
				out:fade={{ duration: 400, easing: cubicOut }}
			>
				<li>{activeProject.client}</li>
				<li class="capitalize">{activeProject.projectType}</li>
				<li>{activeProject.date.split('-').shift()}</li>
			</ul>
		</Container>
	</div>
{/if}
