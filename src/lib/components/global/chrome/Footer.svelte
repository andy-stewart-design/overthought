<script lang="ts">
	import Container from '$lib/components/global/layout/Container.svelte';

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="h-[75vh]" />
	<div class="sticky bottom-0 -z-10 h-0">
		<div class="absolute bottom-0 h-[75vh] w-full bg-surface-high dark:bg-surface-low">
			<Container class="flex h-full flex-col justify-center" pb="sm">
				<div class="flex grow items-center">
					<p class="grow text-center text-5xl text-white">Thanks for stopping by</p>
				</div>
				<div class="flex justify-between pb-3">
					<p>©{year}</p>
					<p>Contact</p>
				</div>
			</Container>
		</div>
	</div>
</footer>
