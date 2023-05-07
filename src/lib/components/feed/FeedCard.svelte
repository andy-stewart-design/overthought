<script lang="ts">
	import Image from '../media/Image.svelte';
	import Video from '../media/Video.svelte';
	import type { Action } from 'svelte/action';
	import type { FeedPost } from '$lib/types/feed';

	export let content: FeedPost;
	export let index = 0;
	export let observe: Action = () => {};

	const date = new Date(content.date);
	const month = date.toLocaleString('default', { month: 'short' });
	const day = date.getDate();
</script>

<div
	class="grid min-h-[400px] w-full gap-7 border-b bg-background/70 py-12 transition-all duration-700 ease-out-3 border-light last-of-type:border-b-0 data-[hidden]:translate-y-12 data-[hidden]:opacity-0"
	use:observe
>
	<div class="flex items-baseline px-8">
		<h2 class="inline-block grow text-4xl font-semibold">{content.title}</h2>
		<span class="text-right text-sm font-medium opacity-60">{`${month} ${day}`}</span>
	</div>
	{#if content.img}
		<Image
			cloud
			class="object-cover object-top"
			src=""
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
			src=""
			poster=""
			posterSize={1200}
			width={`${content.video.width}` ?? 1920}
			height={`${content.video.height}` ?? 1080}
		/>
		<!-- <video class="object-cover object-top" muted controls>
			<source src={`${cloudSrc}${content.video.src}`} type="video/mp4" />
			Sorry, your browser doesn't support embedded videos.
		</video> -->
	{/if}
	<div class="grid gap-7 px-8">
		<p class="text-lg tracking-wide">
			{@html content.body}
		</p>
		{#if content.link || content.categories}
			<div class="flex items-baseline gap-2 border-t pt-7 border-light">
				{#if content.link}
					<a
						href={content.link.href}
						class="text-xl font-semibold"
						target={content.link.external ? '_blank' : '_self'}
						>{content.link.text}
						{#if content.link.external}
							<span class="pl-1">↗</span>
						{/if}
					</a>
				{/if}
				{#if content.categories}
					<div class="flex grow justify-end gap-2 text-right text-sm font-medium opacity-60">
						{#each content.categories as category, index}
							<span>{category}</span>
							{#if index < content.categories.length - 1}
								<span>·</span>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
