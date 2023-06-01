<script lang="ts">
	// import { clsx } from 'neutral-ui/utils';
	type Sizes = "sm" | "lg";

	export let link = false;
	export let external = false;
	export let size: Sizes = "sm";
	export let href: string;
</script>

{#if link}
	{#if external}
		<a {href} class="group inline-block" target="_blank">
			<div
				class={"inline-block rounded border text-base font-medium text-foreground transition-colors duration-200 ease-out border-light group-hover:border-foreground " +
					(size === "sm" && "px-2.5 py-1")}
			>
				<span class="block pb-px"><slot /></span>
			</div>
		</a>
	{:else}
		<a {href} data-sveltekit-preload-data="hover" class="group inline-block">
			<div
				class={"inline-block rounded border text-base font-medium text-foreground transition-colors duration-200 ease-out border-light group-hover:border-foreground " +
					(size === "sm" && "px-2.5 py-1")}
			>
				<span class="block pb-px"><slot /></span>
			</div>
		</a>
	{/if}
{/if}
