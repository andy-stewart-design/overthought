<script lang="ts">
	type Loading = 'lazy' | 'eager' | null | undefined;

	export let src: string;
	export let alt: string;
	export let width: string = '1920';
	export let height: string = '1080';
	export let loading: Loading = 'lazy';

	const props = { src, width, height, loading };
</script>

<img {...props} {alt} />
