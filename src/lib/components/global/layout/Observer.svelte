<script lang="ts">
	import { browser } from '$app/environment';
	import type { Action } from 'svelte/action';

	export let offsetTop = -88;
	export let offsetBot = -88;

	const observerOptions: IntersectionObserverInit = {
		rootMargin: `${offsetTop}px 0px ${offsetBot}px 0px`,
		threshold: [0]
	};

	let elements: HTMLElement[] = [];

	$: rootMarginHeight = browser ? window.innerHeight + offsetBot : 0;

	const observerCallback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			const el = entry.target as HTMLElement;
			if (!entry.isIntersecting && entry.boundingClientRect.y > rootMarginHeight) {
				el.dataset.hidden = 'true';
			} else {
				delete el.dataset.hidden;
			}
		});
	};

	const observe: Action<HTMLElement> = (el) => {
		elements = elements.concat(el);
	};

	$: observer = browser && new IntersectionObserver(observerCallback, observerOptions);
	$: browser &&
		elements.length > 0 &&
		elements.forEach((el) => {
			observer && observer.observe(el);
		});
</script>

<slot {observe} />
