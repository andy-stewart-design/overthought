<script lang="ts">
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';

	export let pathname: string;

	afterNavigate(() => disableScrollHandling());
</script>

{#key pathname}
	<div
		in:fade={{ duration: 300, delay: 600, easing: sineOut }}
		out:fade={{ duration: 300, easing: sineOut }}
		on:outroend={() => window.scrollTo(0, 0)}
		class="relative row-span-full	col-span-full"
	>
		<slot />
	</div>
{/key}
