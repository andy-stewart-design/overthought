<script lang="ts">
	import Image from '$lib/components/media/Image.svelte';
	import { tools, skills, introBullets } from '$lib/content/about';
	import Button from '@globals/Button.svelte';
	import Container from '@globals/layout/Container.svelte';
</script>

<main class="bg-background">
	<Container as="header" py="lg" class="grid border-b border-light lg:grid-cols-2 lg:gap-16">
		<h1 class="text-8xl uppercase md:text-9xl">About</h1>
		<div class="flex flex-row-reverse justify-end sm:justify-between">
			<h2 class="text-8xl uppercase md:text-9xl">Me</h2>
			<div class="pr-6 pt-3 md:pt-5">
				{#each introBullets as text}
					<h3 class="text-sm leading-[1.35] md:text-base md:leading-normal">
						<span class="mr-1">↙</span>
						{text}
					</h3>
				{/each}
			</div>
		</div>
	</Container>
	<div class="flex flex-col-reverse lg:grid lg:grid-cols-2">
		<div>
			<div class="sticky top-20 flex flex-col lg:h-[calc(100vh-4.5rem)]">
				<Image
					cloud
					class="aspect-[4/3] object-cover object-top opacity-90 lg:aspect-[none] lg:grow"
					src="/about/andy-headshot.jpg"
					imageWidths={[800, 1200]}
					alt="The designer Andy Stewart throwing playing cards into the air"
				/>
			</div>
		</div>
		<Container py="md" pb="lg">
			<div class="grid content-start gap-5 text-lg text-foreground/85">
				<p>
					Hi, I'm Andy, a designer working at the intersection of brand and technology. I'm
					currently the Digital Creative Director at Turnstyle, a small-yet-mighty creative studio
					in Seattle, where I help bring life to brands through strategic, thoughtful design.
				</p>
				<p>
					I believe that design works on the mind through the eyes. In the right context, with the
					right tone of voice, design has the ability to spark emotion, engage the imagination and
					even, at its best, inspire action.
				</p>
				<p>
					As a generalist both in training and predilection, my approach combines the craftsmanship
					of traditional graphic design practices with the dynamism of modern digital media. I have
					nearly a decade of experience in helping to realize even the most vague of ideas across a
					variety of touchpoints, from brand identities to digital experiences. My work is defined
					by a love of aesthetics, technology, and delightful experiences, and an eye for
					recognizing and resolving challenging business problems.
				</p>
				<div class="flex gap-4 pt-1">
					<Button link href="/about/cv">Full Resume</Button>
					<!-- <Button link href="/about/now">What I’m Up to Now</Button> -->
				</div>
				<div class="mt-3 grid gap-5 border-t pt-8 border-light">
					<h4 class="text-xs font-medium tracking-wide">Select Skills + Services</h4>
					<ul class="grid grid-cols-2 gap-y-2">
						{#each skills as skill}
							<li
								class="relative pl-5 text-foreground before:absolute before:left-0 before:top-0 before:text-foreground/75 before:content-['↘']"
							>
								{skill}
							</li>
						{/each}
					</ul>
				</div>
				<div class="mt-3 flex flex-col gap-5 border-t pt-8 border-light">
					<h4 class="text-xs font-medium tracking-wide">Select Tools</h4>
					<ul class="grid grid-cols-2 gap-y-2">
						{#each tools as tool}
							<li
								class="relative pl-5 text-foreground before:absolute before:left-0 before:top-0 before:text-foreground/75 before:content-['↘']"
							>
								{tool}
							</li>
						{/each}
					</ul>
					<div class="flex pt-1">
						<Button link href="/about/uses">Complete List</Button>
					</div>
				</div>
			</div>
		</Container>
	</div>
</main>
