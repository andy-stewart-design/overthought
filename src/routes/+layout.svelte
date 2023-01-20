<script>
	import '$lib/styles/app.postcss';
	import NavTop from '@globals/chrome/NavTop.svelte';
	import Footer from '@globals/chrome/Footer.svelte';
	import NavBottom from '@globals/chrome/NavBottom.svelte';
</script>

<NavTop />
<NavBottom />
<slot />
<Footer />
