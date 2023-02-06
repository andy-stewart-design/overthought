<script lang="ts">
	import { clsx } from 'neutral-ui/utils';
	type Sizes = 'sm' | 'lg';

	export let link = false;
	export let size: Sizes = 'sm';
	export let href: string;
</script>

{#if link}
	<a {href} data-sveltekit-preload-data="hover" class="group">
		<div
			class={clsx(
				'text-base text-foreground border border-light rounded transition-colors duration-200 ease-out group-hover:border-foreground',
				size === 'sm' && 'py-1 px-2.5'
			)}
		>
			<span class="block pb-px"><slot /></span>
		</div>
	</a>
{/if}
