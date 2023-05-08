<script lang="ts">
	// TODO: set up for SVGs
	import { setCloudSrc } from '$lib/utils/cloudinary';
	import { setSizes } from '$lib/utils/images';

	type ImageLoading = 'eager' | 'lazy';

	export let src: string;
	export let cloud = false;
	export let imageWidths: number | number[] = 1200;
	export let sizes: string | ((string | number)[] | string)[] = '100vw';
	export let alt: string;
	export let width = '1080';
	export let height = '1080';
	export let loading: ImageLoading = 'eager';
	export { classname as class };

	let classname: string = '';
	let defaultSize: number;
	if (typeof imageWidths !== 'number' && imageWidths.length) defaultSize = imageWidths.slice(-1)[0];
</script>

{#if cloud}
	{#if typeof imageWidths !== 'number'}
		<img
			src={setCloudSrc(src, defaultSize)}
			srcset={setCloudSrc(src, imageWidths)}
			sizes={setSizes(sizes)}
			class={classname}
			{width}
			{height}
			{alt}
			{loading}
		/>
	{:else}
		<img src={setCloudSrc(src, imageWidths)} class={classname} {width} {height} {alt} {loading} />
	{/if}
{:else}
	<img {src} class={classname} {width} {height} {alt} {loading} />
{/if}
