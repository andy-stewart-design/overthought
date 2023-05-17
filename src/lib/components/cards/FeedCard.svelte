<script lang="ts">
	import Image from '../media/Image.svelte';
	import Video from '../media/Video.svelte';
	import type { Action } from 'svelte/action';
	import type { FeedPost } from '$lib/types/feed';
	import Container from '@globals/layout/Container.svelte';

	export let content: FeedPost;
	export let index = 0;
	export let observe: Action = () => {};

	const date = new Date(content.date);
	const month = date.toLocaleString('default', { month: 'short' });
	const day = date.getDate();
</script>

<div
	class="border-b bg-background/70 transition-all duration-700 ease-out-3 border-light last-of-type:border-b-0 data-[hidden]:translate-y-12 data-[hidden]:opacity-0"
	use:observe
>
	<Container py="md">
		<div class="flex flex-col gap-3 sm:flex-row sm:items-baseline">
			<h2 class="inline-block grow text-4xl font-medium">{content.title}</h2>
			<span class="text-sm font-medium opacity-65 sm:text-right">{`${month} ${day}`}</span>
		</div>
	</Container>
	{#if content.img}
		<Image
			cloud
			class="object-cover object-top"
			src={content.img.src}
			imageWidths={1600}
			alt={content.img.alt}
			width={`${content.img.width}` ?? 1920}
			height={`${content.img.height}` ?? 1080}
			loading={index > 3 ? 'lazy' : 'eager'}
		/>
	{:else if content.video}
		<Video
			muted
			loop
			playsinline
			controls
			src={content.video.src}
			poster={content.video.poster}
			posterSize={1200}
			width={`${content.video.width}` ?? 1920}
			height={`${content.video.height}` ?? 1080}
		/>
	{/if}
	<Container py="md" class="grid gap-7">
		<p class="tracking-wide md:text-lg">
			{@html content.body}
		</p>
		<div class="flex items-baseline gap-2 border-t pt-7 border-light">
			{#if content.link}
				<a
					href={content.link.href}
					class="text-xl font-semibold"
					target={content.link.external ? '_blank' : ''}
				>
					{content.link.text}
					{#if content.link.external}
						<span class="pl-1">↗</span>
					{:else}
						<span class="pl-1">→</span>
					{/if}
				</a>
			{/if}
			{#if content.categories}
				<div class="flex grow justify-end gap-2 text-right text-sm font-medium opacity-65">
					{#each content.categories as category, index}
						<span>{category}</span>
						{#if index < content.categories.length - 1}
							<span>·</span>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</Container>
</div>
