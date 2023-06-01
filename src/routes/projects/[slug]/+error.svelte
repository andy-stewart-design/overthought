<script>
	import { page } from "$app/stores";
</script>

<main class="flex min-h-screen flex-col items-center gap-4 pt-lg px-app">
	<h1 class="text-8xl uppercase tracking-tighter md:text-9xl">Sorry</h1>
	<h2 class="max-w-2xl text-center text-3xl">
		{$page.error?.message} Why don't you <a href="/" data-sveltekit-preload-code>head home</a>, or check out one of
		these instead?
	</h2>
</main>
