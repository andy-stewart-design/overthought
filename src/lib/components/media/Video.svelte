<script lang="ts">
	import { setCloudSrc } from '$lib/utils/cloudinary';
	import play from '@svg/play.svg?raw';
	import pause from '@svg/pause.svg?raw';

	export let cloud = false;
	export let src: string;
	export let width: string | number = '1920';
	export let height: string | number = '1080';
	export let autoplay = false;
	export let controls = false;
	export let muted = false;
	export let loop = false;
	export let playsinline = false;
	export let poster: string | undefined = undefined;
	export let posterSize = 1200;
	export { className as class };

	let paused = true;
	let className: string = '';
	let cloudName = 'v1676297405';
	let cloudSrc = `https://res.cloudinary.com/andystewartdesign/video/upload/f_auto,q_auto/${cloudName}${src}`;
	let props: { [key: string]: any } = { width, height, autoplay, loop, playsinline };
	if (poster) props = { poster: setCloudSrc(poster, posterSize), ...props };

	$: controlsIcon = paused ? play : pause;
</script>

<div class="group relative">
	{#if cloud}
		<video bind:paused class={className} {muted} {...props}>
			<source src={cloudSrc} type="video/mp4" />
			Sorry, your browser doesn't support embedded videos.
		</video>
	{:else}
		<video class={className} {muted} {...props}>
			<source {src} type="video/mp4" />
			Sorry, your browser doesn't support embedded videos.
		</video>
	{/if}
	{#if controls}
		<button
			on:click={() => (paused = !paused)}
			class="absolute bottom-0 left-0 right-0 top-0 flex items-end justify-start p-6 opacity-0 transition-opacity duration-500 ease-out-3 group-hover:opacity-100"
			class:opacity-100={paused}
		>
			<div
				class="relative w-16 rounded-full border bg-black/75 p-4 transition-transform duration-500 ease-out-3 border-light group-hover:scale-125"
			>
				{@html controlsIcon}
			</div>
		</button>
	{/if}
</div>
