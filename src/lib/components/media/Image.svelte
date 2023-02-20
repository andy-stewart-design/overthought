<script lang="ts">
	// TODO: set up for SVGs
	import { setSrc } from '$lib/utils/sanity';
	import { setCloudSrc } from '$lib/utils/cloudinary';

	type ImageLoading = 'eager' | 'lazy';

	export let sanity = false;
	export let cloud = false;
	export let src: string;
	export let sizes: number | number[] = 1200;
	export let alt: string;
	export let width = '1080';
	export let height = '1080';
	export let loading: ImageLoading = 'eager';
	export { classname as class };

	let classname: string = '';
	let defaultSize: number;
	if (typeof sizes !== 'number' && sizes.length) defaultSize = sizes.slice(-1)[0];
</script>

{#if sanity}
	{#if typeof sizes !== 'number'}
		<img
			src={setSrc(src, defaultSize)}
			srcset={setSrc(src, sizes)}
			class={classname}
			{width}
			{height}
			{alt}
			{loading}
		/>
	{:else}
		<img src={setSrc(src, sizes)} class={classname} {width} {height} {alt} {loading} />
	{/if}
{:else if cloud}
	{#if typeof sizes !== 'number'}
		<img
			src={setCloudSrc(src, defaultSize)}
			srcset={setCloudSrc(src, sizes)}
			class={classname}
			{width}
			{height}
			{alt}
			{loading}
		/>
	{:else}
		<img src={setCloudSrc(src, sizes)} class={classname} {width} {height} {alt} {loading} />
	{/if}
{:else}
	<img {src} class={classname} {width} {height} {alt} {loading} />
{/if}
