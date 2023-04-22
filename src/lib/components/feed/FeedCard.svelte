<script lang="ts">
	import type { Action } from 'svelte/action';
	import Image from '../media/Image.svelte';
	import type { FeedPost } from '$lib/types/feed';
	import Video from '../media/Video.svelte';

	export let content: FeedPost;
	export let index = 0;
	export let observe: Action = () => {};
</script>

<div
	class="grid gap-7 w-full min-h-[400px] bg-surface-low/70 border-b border-light data-[hidden]:opacity-0 data-[hidden]:translate-y-12 transition-all duration-700 ease-out-3 py-12"
	use:observe
>
	<div class="flex items-baseline px-8">
		<h2 class="grow inline-block font-semibold text-3xl">{content.title}</h2>
		<span class="font-medium text-sm opacity-60 text-right">{content.date}</span>
	</div>
	{#if content.img}
		<Image
			cloud
			class="object-cover object-top"
			src={content.img.src}
			imageWidths={1600}
			alt={content.img.alt}
			loading={index > 3 ? 'lazy' : 'eager'}
		/>
	{:else if content.video}
		<Video
			cloud
			muted
			controls
			src={content.video.src}
			poster={content.video.poster}
			posterSize={1200}
		/>
	{/if}
	<div class="grid gap-7 px-8">
		<p class="text-lg">
			{@html content.body}
		</p>
		{#if content.link || content.categories}
			<div class="flex gap-2 items-baseline border-t border-light pt-7">
				{#if content.link}
					<a
						href={content.link.href}
						class="font-semibold text-xl"
						target={content.link.external ? '_blank' : '_self'}
						>{content.link.text}
						{#if content.link.external}
							<span class="pl-1">↗</span>
						{/if}
					</a>
				{/if}
				{#if content.categories}
					<div class="grow flex gap-2 justify-end">
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
