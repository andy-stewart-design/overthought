<script lang="ts">
	import Container from '$lib/components/global/layout/Container.svelte';

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="h-screen" />
	<div class="sticky bottom-0 -z-10 h-0">
		<div class="absolute bottom-0 h-screen w-full bg-surface-mid">
			<Container class="flex h-full flex-col justify-center" pb="sm">
				<div class="flex grow items-center">
					<p class="grow text-center text-5xl">Thanks for stopping by</p>
				</div>
				<div class="flex justify-between pb-3">
					<p>©{year}</p>
					<a href="mailto:andy.stewart1170@gmail.com">Contact</a>
				</div>
			</Container>
		</div>
	</div>
</footer>
