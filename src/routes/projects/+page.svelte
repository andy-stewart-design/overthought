<script lang="ts">
	import Container from '@globals/layout/Container.svelte';
	import WorkCard from '$lib/components/cards/WorkCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="bg-background max-w-[1800px] mx-auto">
	<Container as="header" py="lg" class="grid border-b uppercase tracking-tighter border-light">
		<h1 class="text-8xl md:text-9xl">Recent Work</h1>
	</Container>
	<div class="grid md:grid-cols-2">
		{#each data.projects.featured as project}
			<WorkCard {project} />
		{/each}
	</div>
	<div class="grid md:grid-cols-2 lg:grid-cols-3">
		{#each data.projects.rest as project}
			<WorkCard grid {project} />
		{/each}
	</div>
</main>
