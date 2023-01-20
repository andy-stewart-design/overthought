<script lang="ts">
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { cubicIn, sineOut } from 'svelte/easing';

	export let pathname: string;

	afterNavigate(() => disableScrollHandling());
</script>

{#key pathname}
	<div
		in:fly={{ duration: 300, delay: 600, y: 40, opacity: 0, easing: sineOut }}
		out:fly={{ duration: 300, y: -40, opacity: 0, easing: cubicIn }}
		on:outroend={() => window.scrollTo(0, 0)}
		class="relative row-span-full	col-span-full"
	>
		<slot />
	</div>
{/key}
