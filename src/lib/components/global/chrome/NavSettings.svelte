<script lang="ts">
	// import { Button } from 'neutral-ui';
	// import { appTheme } from '$lib/stores/theme';
	// import { fade } from 'svelte/transition';
	// import { cubicOut } from 'svelte/easing';
	import { focusTrap } from '$lib/actions/focusTrap';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';

	export let active: boolean;

	const closeOverlay = () => {
		active = false;
	};

	const submitThemeUpdate: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) document.documentElement.setAttribute('data-theme', theme);
	};
</script>

<div
	class="invisible absolute bottom-16 right-1/2 w-32 -translate-y-4 translate-x-1/2 rounded-md bg-white p-1 text-black opacity-0 shadow-lg transition-all duration-[400ms] ease-out-5 active:visible active:translate-y-0 active:opacity-100"
	class:active
	use:focusTrap={{ escapeCallback: closeOverlay }}
>
	<form method="POST" use:enhance={submitThemeUpdate} class="grid gap-1">
		<button
			class="rounded px-2 py-1 text-left text-base font-medium group-data-[theme=system]/document:bg-gray-900 group-data-[theme=system]/document:text-gray-100"
			formaction="/?/setTheme&theme=system&redirect={$page.url.pathname}">System</button
		>
		<button
			class="rounded px-2 py-1 text-left text-base font-medium group-data-[theme=light]/document:bg-gray-900 group-data-[theme=light]/document:text-gray-100"
			formaction="/?/setTheme&theme=light&redirect={$page.url.pathname}">Light</button
		>
		<button
			class="rounded px-2 py-1 text-left text-base font-medium group-data-[theme=dark]/document:bg-gray-900 group-data-[theme=dark]/document:text-gray-100"
			formaction="/?/setTheme&theme=dark&redirect={$page.url.pathname}">Dark</button
		>
	</form>
</div>
