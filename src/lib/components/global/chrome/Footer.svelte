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

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
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
			<Container class="relative flex h-full flex-col pb-md pt-md md:grid md:grid-cols-3 md:pt-xl">
				<div class="md:flex md:items-end">
					<button
						on:click={handleClick}
						class="flex h-32 w-32 items-center justify-center rounded-full border transition-colors duration-300 ease-out-3 border-light can-hover:hover:bg-foreground can-hover:hover:text-background"
					>
						<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
							<path d="M40 16V64" stroke="currentColor" fill="none" stroke-width="6" />
							<path d="M16 40L40 16L64 40" stroke="currentColor" fill="none" stroke-width="6" />
						</svg>
					</button>
				</div>
				<div class="md:pt-none flex grow flex-col justify-between pt-sm md:col-span-2">
					<div class="space-y-12">
						<p class="max-w-3xl text-4xl leading-snug text-foreground md:text-5xl md:leading-[1.2]">
							Thank you for scrolling! <span class="text-foreground/60">Want to chat?</span>
							<a href="mailto:andy.stewart1170@gmail.com" class="transition-opacity hover:opacity-60">Reach out</a>.
							<span class="text-foreground/60">Tired of being at the bottom?</span>
							<button on:click={handleClick} class="transition-opacity hover:opacity-60">Head back up</button>.
						</p>
						<div class="space-y-4">
							<p class="text-sm font-medium opacity-65">Follow Me</p>
							<div class="space-x-3 text-lg font-medium">
								<a href="https://codepen.io/andyandyandyoh">Codepen</a>
								<a href="https://github.com/andy-stewart-design">Github</a>
								<a href="https://twitter.com/spinbutton">Twitter</a>
								<a href="https://www.instagram.com/andystewartdesign/">Instagram</a>
							</div>
						</div>
					</div>
					<p class="text-sm font-medium">© Andy Stewart Design {year}</p>
				</div>
				<!-- <div class="flex grow items-center justify-center">
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
				</div> -->
			</Container>
		</div>
	</div>
</footer>
