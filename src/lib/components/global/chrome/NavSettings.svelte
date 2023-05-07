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
	class="invisible absolute bottom-16 right-1/2 w-36 -translate-y-4 translate-x-1/2 rounded-md bg-white p-1 text-black opacity-0 shadow-lg transition-all duration-[400ms] ease-out-5 active:visible active:translate-y-0 active:opacity-100"
	class:active
	use:focusTrap={{ escapeCallback: closeOverlay }}
>
	<form method="POST" use:enhance={submitThemeUpdate} class="grid gap-1">
		<p class="px-2 pb-1 pt-1.5 text-xs font-medium text-gray-900/60">Site Theme</p>
		<button
			class="flex items-center gap-2 rounded px-2 py-1.5 text-left text-base font-medium group-data-[theme=system]/document:bg-gray-900 group-data-[theme=system]/document:text-gray-100"
			formaction="/?/setTheme&theme=system&redirect={$page.url.pathname}"
		>
			<svg width="16" height="16" viewBox="0 0 16 16">
				<path
					d="M4 14L12 14M8 10V14M2 2H14V10H2V2Z"
					stroke="currentColor"
					stroke-width="1.5"
					fill="none"
					stroke-linejoin="round"
				/>
			</svg>
			System
		</button>
		<button
			class="flex items-center gap-2 rounded px-2 py-1.5 text-left text-base font-medium group-data-[theme=light]/document:bg-gray-900 group-data-[theme=light]/document:text-gray-100"
			formaction="/?/setTheme&theme=light&redirect={$page.url.pathname}"
		>
			<svg width="16" height="16" viewBox="0 0 16 16">
				<path
					d="M11 8C11 9.65685 9.65685 11 8 11M11 8C11 6.34315 9.65685 5 8 5M11 8H16M8 11C6.34315 11 5 9.65685 5 8M8 11V16M5 8C5 6.34315 6.34315 5 8 5M5 8H0M8 5V0M10.1213 5.87868L13.6569 2.34315M10.1213 10.1213L13.6569 13.6569M2.34315 13.6569L5.87868 10.1213M2.34315 2.34315L5.87868 5.87868"
					stroke="currentColor"
					stroke-width="1.5"
					fill="none"
					stroke-linejoin="round"
				/>
			</svg>
			Light
		</button>
		<button
			class="flex items-center gap-2 rounded px-2 py-1.5 text-left text-base font-medium group-data-[theme=dark]/document:bg-gray-900 group-data-[theme=dark]/document:text-gray-100"
			formaction="/?/setTheme&theme=dark&redirect={$page.url.pathname}"
		>
			<svg width="16" height="16" viewBox="0 0 16 16">
				<path
					d="M14 8C13 9 10 10 8 8C6 6 7 3 8 2C4.5 2 2 4.76853 2 8C2 11.3137 4.68629 14 8 14C11.2315 14 14 11.5 14 8Z"
					stroke="currentColor"
					stroke-width="1.5"
					fill="none"
					stroke-linejoin="round"
				/>
			</svg>
			Dark
		</button>
	</form>
</div>
