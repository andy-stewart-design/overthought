<script lang="ts">
	import WorkCard from "$lib/components/cards/WorkCard.svelte";
	import type { PageServerData } from "./$types";

	// export let data: PageServerData;
</script>

<main class="bg-background">
	<!-- <header class="mx-auto grid max-w-screen-3xl border-b pb-lg pt-hero uppercase tracking-tighter border-light px-app">
		<h1 class="text-8xl md:text-9xl">Recent Work</h1>
	</header>
	<div class="mx-auto grid max-w-screen-3xl md:grid-cols-2">
		{#each data.projects.featured as project}
			<WorkCard {project} />
			<div>
				<a href={`/projects/${project.link?.internal}`}>
					<p>{project.client}</p>
				</a>
			</div>
		{/each}
	</div>
	<div class="mx-auto grid max-w-screen-3xl md:grid-cols-2 lg:grid-cols-3">
		{#each data.projects.rest as project}
			<WorkCard grid {project} />
		{/each}
	</div> -->
</main>
