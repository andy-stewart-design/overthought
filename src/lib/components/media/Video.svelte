<script lang="ts">
	export let cloud = false;
	export let lazy = false;
	export let src: string;
	export let width: string | number = '1920';
	export let height: string | number = '1080';
	export let autoplay = false;
	export let muted = false;
	export let loop = false;
	export let playsinline = false;
	export let poster: string | undefined = undefined;
	export { className as class };

	let className: string = '';
	let cloudName = 'v1676297405';
	let cloudSrc = `https://res.cloudinary.com/andystewartdesign/video/upload/f_auto,q_auto/${cloudName}${src}`;
	let props: { [key: string]: any } = { width, height, autoplay, loop, playsinline };
	if (poster) props = { poster, ...props };
</script>

{#if lazy}
	{#if cloud}
		<video class={className} {muted} {...props}>
			<source data-src={cloudSrc} type="video/mp4" />
			Sorry, your browser doesn't support embedded videos.
		</video>
	{:else}
		<video class={className} {autoplay} {muted} {loop} {playsinline} {width} {height}>
			<source {src} type="video/mp4" />
			Sorry, your browser doesn't support embedded videos.
		</video>
	{/if}
{:else if cloud}
	<video class={className} {muted} {...props}>
		<source src={cloudSrc} type="video/mp4" />
		Sorry, your browser doesn't support embedded videos.
	</video>
{:else}
	<video class={className} {muted} {...props}>
		<source {src} type="video/mp4" />
		Sorry, your browser doesn't support embedded videos.
	</video>
{/if}
