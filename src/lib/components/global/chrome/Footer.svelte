<script lang="ts">
	import Container from '$lib/components/global/layout/Container.svelte';

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="h-[75vh]" />
	<!-- <Container class="flex flex-col justify-center h-full" pb="sm">
			<div class="grow flex items-center">
				<p class="grow text-5xl text-center">Thanks for stopping by</p>
			</div>
			<div class="flex justify-between pb-3">
				<p>©{year}</p>
				<p>Contact</p>
			</div>
		</Container> -->
	<div class="sticky bottom-0 h-0 bg-blue-400 -z-10">
		<div class="absolute bottom-0 bg-surface-high dark:bg-surface-low h-[75vh] w-full">
			<Container class="flex flex-col justify-center h-full" pb="sm">
				<div class="grow flex items-center">
					<p class="grow text-5xl text-center">Thanks for stopping by</p>
				</div>
				<div class="flex justify-between pb-3">
					<p>©{year}</p>
					<p>Contact</p>
				</div>
			</Container>
		</div>
	</div>
</footer>
