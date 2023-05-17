<script lang="ts">
	import { setCloudSrc } from '$lib/utils/cloudinary';
	import play from '@svg/play.svg?raw';
	import pause from '@svg/pause.svg?raw';

	// export let cloud = false;
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

	$: controlsIcon = paused ? play : pause;
</script>

<div class="group relative">
	<video
		class={className}
		bind:paused
		{muted}
		{autoplay}
		{width}
		{height}
		{loop}
		{playsinline}
		poster={poster && setCloudSrc(poster, posterSize)}
	>
		<source src={cloudSrc} type="video/mp4" />
		<track kind="captions" />
		Sorry, your browser doesn't support embedded videos.
	</video>
	{#if controls}
		<button
			on:click={() => (paused = !paused)}
			class="absolute bottom-0 left-0 right-0 top-0 flex items-end justify-start p-6 opacity-0 transition-opacity duration-500 ease-out-3 group-hover:opacity-100"
			class:opacity-100={paused}
		>
			<p class="sr-only">Video controls</p>
			<div
				class="relative flex h-14 w-14 items-center justify-center rounded-full border bg-white/80 text-black shadow-xl transition-transform duration-500 ease-out-3 border-light group-hover:scale-125 md:h-16 md:w-16"
			>
				<span class="block w-8" class:ml-1={paused}>
					{@html controlsIcon}
				</span>
			</div>
		</button>
	{/if}
</div>
