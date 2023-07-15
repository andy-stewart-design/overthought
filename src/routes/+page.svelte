<script lang="ts">
	import FeedCard from "$lib/components/cards/FeedCard.svelte";
	import Observer from "@globals/layout/Observer.svelte";
	import Image from "$lib/components/media/Image.svelte";
	import timeline from "@content/timeline.json";
</script>

<Observer let:observe>
	<main class="border-b bg-background border-light">
		<div class="mx-auto max-w-screen-3xl lg:grid lg:grid-cols-12">
			<div class="relative border-b border-light lg:col-span-5 lg:border-b-0 xl:col-span-4">
				<div class="grid gap-y-5 pb-md pt-md px-app lg:sticky lg:top-20 lg:pb-xl">
					<div class="flex items-center gap-4">
						<Image
							cloud
							src="/about/andy-headshot-square.jpg"
							alt="Headshot"
							class="h-14 w-14 rounded-full bg-surface-mid"
						/>
						<div class="flex flex-col items-start justify-start gap-1">
							<h2 class="text-2xl font-semibold leading-none">Andy Stewart</h2>
							<h3 class="text-base font-medium opacity-65">Design + Code</h3>
						</div>
					</div>
					<p class="text-foreground/90 md:text-lg lg:text-base">
						Hi, I'm Andy. I'm a product designer working at the intersection of brand and technology to develop
						future-focused visual systems — often for screens, sometimes not.
					</p>
					<p class="text-foreground/90 md:text-lg lg:text-base">
						I was most recently the Digital Creative Director at <a
							class="font-bold text-foreground"
							href="https://turnstyle.studio/"
							target="_blank">Turnstyle</a
						>, a full-service creative studio in Seattle, where I helped bring life to brands through strategic,
						thoughtful design.
					</p>
					<p class="text-foreground/90 md:text-lg lg:text-base">
						I'm currently available for hire. If you would like to discuss opportunities to collaborate or the types of
						roles I'm looking for, please
						<a class="font-bold text-foreground" href="mailto:andy.stewart1170@gmail.com">reach out</a>.
					</p>
				</div>
			</div>
			<div class="relative min-h-screen border-light lg:col-span-7 lg:border-l xl:col-span-8">
				{#each timeline.entries as entry, index}
					<FeedCard content={entry} {observe} {index} />
				{/each}
			</div>
		</div>
	</main>
</Observer>
