<script lang="ts">
	type PaddingValue = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' | 'hero';
	type ElementOptions = 'div' | 'section' | 'main' | 'article' | 'header';

	export let as: ElementOptions = 'div';
	export let py: PaddingValue | null = 'sm';
	export let pt: PaddingValue | null = null;
	export let pb: PaddingValue | null = null;
	export let pxNone: boolean = false;

	let isPaddingEqual = true;
	if (pt || pb) isPaddingEqual = false;

	if (!isPaddingEqual && !pt) pt = py;
	else if (!isPaddingEqual && !pb) pb = py;

	if (!isPaddingEqual) py = null;
</script>

<svelte:element
	this={as}
	class={`${$$props.class} py-`}
	class:pad-x={!pxNone}
	class:py-0={isPaddingEqual && py === 'none'}
	class:py-2={isPaddingEqual && py === 'xs'}
	class:py-4={isPaddingEqual && py === 'sm'}
	class:py-10={isPaddingEqual && py === 'md'}
	class:py-20={isPaddingEqual && py === 'lg'}
	class:py-30={isPaddingEqual && py === 'xl'}
	class:py-64={isPaddingEqual && py === 'hero'}
	class:pt-0={pt === 'none'}
	class:pt-2={pt === 'xs'}
	class:pt-4={pt === 'sm'}
	class:pt-10={pt === 'md'}
	class:pt-20={pt === 'lg'}
	class:pt-30={pt === 'xl'}
	class:pt-64={pt === 'hero'}
	class:pb-0={pb === 'none'}
	class:pb-2={pb === 'xs'}
	class:pb-4={pb === 'sm'}
	class:pb-10={pb === 'md'}
	class:pb-20={pb === 'lg'}
	class:pb-30={pb === 'xl'}
	class:pb-64={pb === 'hero'}
>
	<slot />
</svelte:element>

<style lang="postcss">
	.pad-x {
		@apply px-2 md:px-8;
	}
</style>
