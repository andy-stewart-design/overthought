<script>
	import { page } from "$app/stores";
	import WorkCard from "$lib/components/cards/WorkCard.svelte";
</script>

<main class="min-h-screen bg-background">
	<div class="space-y-6 pb-xl pt-lg text-center px-app">
		<h1 class="text-8xl uppercase tracking-tighter md:text-9xl">Whoops</h1>
		<h2 class="mx-auto max-w-md text-center text-xl sm:max-w-2xl sm:text-3xl">
			{$page.error?.message} Why don't you <a href="/" data-sveltekit-preload-code>head home</a>, or check out one of
			these instead?
		</h2>
	</div>
	{#if $page.error?.projects}
		<div class="mx-auto grid max-w-screen-3xl md:grid-cols-2 lg:grid-cols-3">
			{#each $page.error.projects as project}
				<WorkCard {project} />
			{/each}
		</div>
	{/if}
</main>
