<script context="module">
	export const footerVisibility = writable(0);
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import Container from '$lib/components/global/layout/Container.svelte';
	import { writable } from 'svelte/store';

	let ref: HTMLElement;
	let footerOpacity = 0;

	export let offsetTop = 0;
	export let offsetBot = 0;

	const threshold = new Array(51).fill(undefined).map((_, index) => index / 50);

	const observerOptions: IntersectionObserverInit = {
		rootMargin: `${offsetTop}px 0px ${offsetBot}px 0px`,
		threshold
	};

	const observerCallback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				footerOpacity = entry.intersectionRatio > 0.95 ? 1 : entry.intersectionRatio;
				$footerVisibility = entry.intersectionRatio > 0.95 ? 1 : entry.intersectionRatio;
			} else {
				$footerVisibility = 0;
			}
		});
	};

	$: observer = browser && new IntersectionObserver(observerCallback, observerOptions);
	$: browser && ref && observer && observer.observe(ref);

	const year = new Date().getFullYear();
</script>

<footer bind:this={ref} class="relative z-0" style:opacity={footerOpacity}>
	<div class="h-screen" />
	<div class="sticky bottom-0 h-0">
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
