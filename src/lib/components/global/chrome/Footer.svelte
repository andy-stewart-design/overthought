<script context="module">
	export const footerVisibility = writable(0);
</script>

<script lang="ts">
	import { browser } from "$app/environment";
	import Container from "$lib/components/global/layout/Container.svelte";
	import { writable } from "svelte/store";

	let ref: HTMLElement;
	let footerOpacity = 0;

	export let offsetTop = 0;
	export let offsetBot = 0;

	const threshold = new Array(51).fill(undefined).map((_, index) => index / 50);

	const observerOptions: IntersectionObserverInit = {
		rootMargin: `${offsetTop}px 0px ${offsetBot}px 0px`,
		threshold,
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
	<div class="h-[80vh]" />
	<div class="sticky bottom-0 h-0">
		<div class="absolute bottom-0 h-[80vh] w-full bg-surface-mid">
			<Container class="flex h-full flex-col justify-center" pb="sm">
				<div class="flex grow items-center justify-center">
					<button
						on:click={() => {
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							});
						}}
						class="group flex items-center gap-4 md:gap-8 portrait:flex-col landscape:flex-row"
					>
						<div
							class="flex h-32 w-32 items-center justify-center rounded-full border transition-colors duration-300 ease-out-3 border-light can-hover:group-hover:bg-foreground can-hover:group-hover:text-background"
						>
							<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
								<path d="M40 16V64" stroke="currentColor" fill="none" stroke-width="6" />
								<path d="M16 40L40 16L64 40" stroke="currentColor" fill="none" stroke-width="6" />
							</svg>
						</div>
						<div class="space-y-1">
							<p class="text-4xl md:text-5xl portrait:text-center landscape:text-left">
								Thanks for scrolling<span class="portrait:hidden landscape:inline">.</span>
							</p>
							<p class="text-4xl md:text-5xl portrait:text-center landscape:text-left">
								Head back to top<span class="portrait:hidden landscape:inline">.</span>
							</p>
						</div>
					</button>
				</div>
				<div class="flex justify-between pb-3">
					<p>©{year}</p>
					<a href="mailto:andy.stewart1170@gmail.com">Contact</a>
				</div>
			</Container>
		</div>
	</div>
</footer>
