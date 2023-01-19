<script lang="ts">
	import { appTheme, setTheme } from '$lib/stores/theme';
	import contrast from '@svg/contrast.svg?raw';
</script>

<button class="w-10 p-2" on:click={() => setTheme($appTheme === 'dark' ? 'light' : 'dark')}
	>{@html contrast}</button
>
