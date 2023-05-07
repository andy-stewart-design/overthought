<script lang="ts">
	import { browser } from '$app/environment';
	import type { Action } from 'svelte/action';

	export let offsetTop = -120;
	export let offsetBot = -88;

	const observerOptions: IntersectionObserverInit = {
		rootMargin: `${offsetTop}px 0px ${offsetBot}px 0px`,
		threshold: [0, 0.6]
	};

	let elements: HTMLElement[] = [];

	$: rootMarginHeight = browser ? window.innerHeight + offsetBot : 0;

	let activeTitle = '';

	const observerCallback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			const el = entry.target as HTMLElement;
			if (!entry.isIntersecting && entry.boundingClientRect.y > rootMarginHeight) {
				el.dataset.hidden = 'true';
			} else {
				// console.log(el.querySelector('h2')?.innerHTML, entry.intersectionRatio);
				delete el.dataset.hidden;
				if (entry.intersectionRatio >= 0.6) {
					activeTitle = el.querySelector('h2')?.innerHTML ?? '';
				}
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

<slot {observe} {activeTitle} />
