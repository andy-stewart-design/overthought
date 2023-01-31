<script lang="ts">
	import { onMount } from 'svelte';

	let loaded = false;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let windowWidth: number | null,
		windowHeight: number | null,
		canvasWidth: number,
		canvasHeight: number,
		gridX: number,
		raf: number;
	let amount = 10;
	let inc = 0;
	let time = Date.now();
	let hue = 200;
	let hueDirection = 1;

	function setCanvas() {
		if (!canvas) return;
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		canvas.style.width = windowWidth + 'px';
		canvas.style.height = windowHeight + 'px';
		canvas.width = windowWidth;
		canvas.height = windowHeight;
	}

	function animate() {
		if (!ctx) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < amount; i++) {
			const posX = (canvasWidth / (amount - 1)) * i;
			const sinVal = Math.sin(inc + i / 2.5);
			const offsetY = sinVal * (canvasHeight / 2);
			let opacity = 1.0 - Math.abs(sinVal) / 1.5;
			let radius = (gridX / 1.5) * (1 - Math.abs(sinVal) / 2);
			ctx.fillStyle = `hsl(${hue + i * 6} 100% 50% / ${opacity})`;
			ctx.beginPath();
			ctx.ellipse(posX, canvasHeight / 2 + offsetY, radius, radius, 0, 0, 2 * Math.PI);
			ctx.fill();
			opacity = Math.abs(sinVal) / 2 + 0.25;
			radius = (gridX / 1.5) * (Math.abs(sinVal) / 2 + 0.25);
			ctx.beginPath();
			ctx.ellipse(posX, canvasHeight / 2 - offsetY, radius, radius, 0, 0, 2 * Math.PI);
			ctx.fill();
		}
		const currentTime = Date.now();
		const deltaTime = currentTime - time;
		time = currentTime;
		inc += 0.002 * deltaTime;
		if (hue < 200 || hue > 320) hueDirection = hueDirection * -1;
		hue = hue + 0.2 * hueDirection;
		raf = requestAnimationFrame(animate);
	}

	function init() {
		raf && cancelAnimationFrame(raf);
		setCanvas();
		ctx = canvas.getContext('2d');
		canvasWidth = canvas.width;
		canvasHeight = canvas.height;
		gridX = canvasWidth / amount;
		animate();
	}

	onMount(() => {
		init();
		window.addEventListener('resize', init);
		loaded = true;

		return () => cancelAnimationFrame(raf);
	});
</script>

<div class="absolute w-screen h-screen overflow-hidden" aria-hidden="true">
	<div class="relative w-full h-full">
		<canvas
			bind:this={canvas}
			class="absolute top-0 left-0 opacity-0 active:opacity-100 transition-opacity duration-1000"
			class:active={loaded}
		/>
		<div class="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-md" />
		<div
			class="absolute top-0 left-0 w-full h-full mix-blend-overlay hidden invisible dark:block dark:visible"
			style:background-image="url('texture/grain-dark.png')"
		/>
		<div
			class="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-75 dark:hidden dark:invisible"
			style:background-image="url('texture/grain.png')"
		/>
	</div>
</div>
