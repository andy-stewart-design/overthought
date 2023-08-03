<script lang="ts">
	type PaddingValue = "xs" | "sm" | "md" | "lg" | "xl" | "none" | "hero";
	type ElementOptions = "div" | "section" | "main" | "article" | "header";

	export { className as class };

	let className: string | undefined = "";
	if (className === "") className = undefined;

	export let as: ElementOptions = "div";
	export let py: PaddingValue | null = "sm";
	export let pt: PaddingValue | null = null;
	export let pb: PaddingValue | null = null;
	export let pxNone: boolean = false;

	let isPaddingEqual = true;
	if (pt || pb) isPaddingEqual = false;

	if (!isPaddingEqual && !pt) pt = py;
	else if (!isPaddingEqual && !pb) pb = py;

	if (!isPaddingEqual) py = null;
</script>

<svelte:element this={as} class={className} class:pad-x={!pxNone}>
	<slot />
</svelte:element>

<style lang="postcss">
	.pad-x {
		@apply px-2 md:px-8;
	}
</style>
