<script lang="ts">
	import { Button } from 'neutral-ui';
	import { appTheme, setTheme } from '$lib/stores/theme';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { focusTrap } from '$lib/actions/focusTrap';

	export let active: boolean;

	const closeOverlay = () => {
		active = false;
	};
</script>

<div
	class="invisible opacity-0 absolute bottom-16 right-1/2 translate-x-1/2 -translate-y-4 w-64 p-4 bg-white text-black rounded-xl shadow-lg transition-all duration-[400ms] ease-out-expo active:visible active:opacity-100 active:translate-y-0"
	class:active
	use:focusTrap={{ escapeCallback: closeOverlay }}
>
	<div class="grid gap-2">
		<div class="text-xs">Theme</div>
		<Button
			on:click={() => setTheme($appTheme === 'dark' ? 'light' : 'dark')}
			label="Set color theme"
			class="flex items-center gap-2"
		>
			<div class="w-8 h-8 bg-black/20 rounded-full" />
			<div class="grid">
				{#key $appTheme}
					<span
						transition:fade={{ duration: 200, easing: cubicOut }}
						class="block row-span-full col-span-full capitalize">{$appTheme}</span
					>
				{/key}
			</div>
		</Button>
	</div>
</div>
