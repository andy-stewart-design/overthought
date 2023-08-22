<script lang="ts">
	import { beforeNavigate } from "$app/navigation";
	import { fade } from "svelte/transition";
	import { sineOut } from "svelte/easing";
	import { footerVisibility } from "../chrome/Footer.svelte";

	export let pathname: string;

	beforeNavigate(() => {
		$footerVisibility = 0;
	});
</script>

<div class="grid">
	{#key pathname}
		<div in:fade={{ duration: 300, delay: 100, easing: sineOut }} class="relative col-span-full row-span-full">
			<slot />
		</div>
	{/key}
</div>
