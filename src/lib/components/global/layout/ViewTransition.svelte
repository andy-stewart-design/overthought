<script lang="ts">
	import { afterNavigate, beforeNavigate, disableScrollHandling } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { footerVisibility } from '../chrome/Footer.svelte';

	export let pathname: string;

	beforeNavigate(() => ($footerVisibility = 0));
	afterNavigate(() => disableScrollHandling());
</script>

<div class="grid">
	{#key pathname}
		<div
			in:fade={{ duration: 300, delay: 600, easing: sineOut }}
			out:fade={{ duration: 300, easing: sineOut }}
			on:outroend={() => window.scrollTo(0, 0)}
			class="relative col-span-full row-span-full"
		>
			<slot />
		</div>
	{/key}
</div>
