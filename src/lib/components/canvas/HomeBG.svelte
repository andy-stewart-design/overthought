<script lang="ts">
	import { onMount } from 'svelte';

	let loaded = false;
	let is_vertical = false;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let window_width: number | null,
		window_height: number | null,
		canvas_width: number,
		canvas_height: number,
		grid_block: number,
		raf_reference: number;
	let amount = 10;
	let inc = 0;
	let time = Date.now();
	let hue = 200;
	let hue_direction = 1;

	function setCanvas() {
		if (!canvas) return;
		window_width = window.innerWidth;
		window_height = window.innerHeight;
		canvas.style.width = window_width + 'px';
		canvas.style.height = window_height + 'px';
		canvas.width = window_width;
		canvas.height = window_height;
		is_vertical = window_height / window_width >= 1;
	}

	function animate() {
		if (!ctx) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < amount; i++) {
			const sinVal = Math.sin(inc + i / 2.5);
			const block_size = is_vertical ? canvas_height : canvas_width;
			const inline_size = is_vertical ? canvas_width : canvas_height;

			const pos_block = (block_size / (amount - 1)) * i;
			const offset_inline = sinVal * (inline_size / 2);
			const radius_offset = is_vertical ? 1 : 1.5;

			let pos_inline = inline_size / 2 + offset_inline;
			let pos_x = is_vertical ? pos_inline : pos_block;
			let pos_y = is_vertical ? pos_block : pos_inline;
			let opacity = 1.0 - Math.abs(sinVal) / 1.5;
			let radius = (grid_block / radius_offset) * (1 - Math.abs(sinVal) / 2);
			ctx.fillStyle = `hsl(${hue + i * 6} 100% 50% / ${opacity})`;
			ctx.beginPath();
			ctx.ellipse(pos_x, pos_y, radius, radius, 0, 0, 2 * Math.PI);
			ctx.fill();

			pos_inline = inline_size / 2 - offset_inline;
			pos_x = is_vertical ? pos_inline : pos_block;
			pos_y = is_vertical ? pos_block : pos_inline;
			opacity = Math.abs(sinVal) / 2 + 0.25;
			radius = (grid_block / radius_offset) * (Math.abs(sinVal) / 2 + 0.25);
			ctx.beginPath();
			ctx.ellipse(pos_x, pos_y, radius, radius, 0, 0, 2 * Math.PI);
			ctx.fill();
		}
		const currentTime = Date.now();
		const deltaTime = currentTime - time;
		time = currentTime;
		inc += 0.002 * deltaTime;
		if (hue < 200 || hue > 320) hue_direction = hue_direction * -1;
		hue = hue + 0.2 * hue_direction;
		raf_reference = requestAnimationFrame(animate);
	}

	function init() {
		raf_reference && cancelAnimationFrame(raf_reference);
		setCanvas();
		ctx = canvas.getContext('2d');
		canvas_width = canvas.width;
		canvas_height = canvas.height;
		grid_block = canvas_width / amount;
		animate();
	}

	onMount(() => {
		init();
		window.addEventListener('resize', init);
		loaded = true;

		return () => cancelAnimationFrame(raf_reference);
	});
</script>

<div class="absolute w-screen h-screen overflow-hidden" aria-hidden="true">
	<div class="relative w-full h-full">
		<div
			class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-700/5 to-transparent"
		/>
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
