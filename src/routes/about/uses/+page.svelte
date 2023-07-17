<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
	const { categories, tools } = data;
</script>

<main class="bg-background py-xl">
	<section class="mx-auto flex max-w-screen-3xl flex-col gap-12">
		<div class="mx-auto flex w-full max-w-3xl flex-col gap-4 border-b pb-10 border-light">
			<h3 class="text-xs font-medium">Uses</h3>
			<h2 class="text-lg">
				Curious about how I do my work? This list is a living document of the hardware, software, and services I use
				every day. I’ll keep it updated as my workflow and equipment changes.
			</h2>
		</div>
		{#each tools as brand, index}
			<div class="mx-auto flex w-full max-w-3xl flex-col gap-6">
				<div class="flex gap-6 text-xs font-medium slashed-zero">
					<div class="w-16 shrink-0 text-foreground opacity-40" aria-hidden="true">
						0{index + 1}
					</div>
					<h3 class="capitalize">{categories[index]}</h3>
				</div>
				{#each brand as toolset}
					<div class="flex flex-col items-start gap-6 xs:flex-row">
						<a class="group w-16 shrink-0 text-foreground" href={toolset.link}>
							<div
								class="relative overflow-hidden rounded-xl border-b-2 border-foreground/20 bg-white p-3 transition-transform duration-500 ease-out-3 group-hover:-translate-y-1.5 group-data-[theme=dark]/document:bg-surface-mid group-data-[theme=system]/document:bg-white dark:group-data-[theme=system]/document:bg-surface-mid"
							>
								<div
									class="absolute left-0 top-0 h-full w-full rounded-xl border border-white bg-gradient-to-b from-black to-transparent opacity-5 transition-opacity group-hover:opacity-0 group-data-[theme=dark]/document:from-white group-data-[theme=system]/document:from-black group-data-[theme=dark]/document:group-hover:opacity-20 dark:group-data-[theme=system]/document:from-white dark:group-data-[theme=system]/document:group-hover:opacity-20"
								/>
								{#if toolset.inlineLogo}
									{@html toolset.logo}
								{:else}
									<img class="relative" src={`/img/uses/${toolset.logo}`} alt={`${toolset.brand} logo`} />
								{/if}
							</div>
						</a>
						<div class="flex grow flex-col gap-6 pt-1">
							{#each toolset.tools as tool}
								<div class="flex flex-col gap-2 border-b pb-6 border-light">
									<div class="flex items-center gap-3">
										<h2 class="text-xl font-medium">{tool.name}</h2>
										<span class="rounded border px-1 py-0.5 text-xs font-medium text-foreground/60 border-light">
											{tool.category}
										</span>
									</div>
									<p class="opacity-75">{@html tool.descr}</p>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</section>
</main>
