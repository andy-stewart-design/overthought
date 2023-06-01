<script lang="ts">
	// TODO: Update image sizes specs

	import Image from "$lib/components/media/Image.svelte";
	import Video from "$lib/components/media/Video.svelte";
	import Button from "@globals/Button.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>

<main class="border-b bg-background border-light">
	<div class="mx-auto max-w-screen-3xl lg:grid lg:grid-cols-12">
		<div class="relative border-b border-light lg:col-span-5 lg:border-b-0 xl:col-span-4">
			<div class="grid gap-y-5 pb-md pt-md px-app lg:sticky lg:top-20 lg:pb-xl">
				<a href="/projects" class="font-medium transition-opacity hover:opacity-60">← All Projects</a>
				<h1 class="text-3xl font-semibold">
					{data.client}
					{data.headline}
				</h1>
				<p>
					{data.description}
				</p>
				<div class="mt-3 grid grid-cols-[72px_1fr] border-t pt-5 font-medium border-light">
					<span class="opacity-65">Scope:</span>
					<ul class="flex flex-wrap gap-x-2">
						{#if data.scope}
							{#each data.scope as service}
								<li class="group after:content-['·'] last-of-type:after:content-none">
									<span class="pr-2 group-last-of-type:p-0">{service}</span>
								</li>
							{/each}
						{/if}
					</ul>
				</div>
				{#if data.partners}
					{#each data.partners as partner}
						<div class="grid grid-cols-[72px_1fr] border-t pt-5 font-medium border-light">
							<span class="capitalize opacity-65">{partner.type}:</span>
							<div>
								{#if partner.href}
									<a href={partner.href} target="_blank" class="transition-opacity hover:opacity-60">
										{partner.name} <span class="font-normal">↗</span>
									</a>
								{:else}
									{partner.name}
								{/if}
							</div>
						</div>
					{/each}
				{/if}
				{#if data.liveLink}
					<div class="mt-4">
						<Button link href={data.liveLink}>View Live Site</Button>
					</div>
				{/if}
			</div>
		</div>
		<div class="relative grid min-h-screen gap-y-8 lg:col-span-7 xl:col-span-8">
			<div class="grid gap-y-5 pb-xl pt-md px-app">
				{#each data.media as media}
					{#if media.type === "image"}
						<Image
							cloud
							src={media.src}
							alt={media.alt ?? ""}
							imageWidths={[800, 1200, 1920]}
							sizes={[["769px", "50vh"], ["100vh"]]}
							class="rounded-lg"
						/>
					{:else if media.type === "video"}
						<Video
							src={media.src}
							poster={media.poster}
							class="rounded-lg"
							autoplay={media.autoplay}
							controls={!media.autoplay}
							loop
							muted
							playsinline
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</main>
