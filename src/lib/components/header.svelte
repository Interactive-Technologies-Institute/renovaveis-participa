<script lang="ts">
	import { base } from '$app/paths';
	import Graph from '$lib/components/icons/graph.svelte';
	import { Button } from '@/components/ui/button';
	import MainNav from './nav/main-nav.svelte';
	import MobileNav from './nav/mobile-nav.svelte';
</script>

<header class="bg-background sticky top-0 z-50 w-full border-b">
	<div class="container flex h-16 items-center gap-4">
		<div class="mr-auto">
			<a href="{base}/" class="flex items-center gap-2">
				<div class="bg-primary flex h-8 w-8 items-center justify-center rounded-md">
					<Graph height={20} width={20} class="text-primary-foreground" />
				</div>
				<span class="font-title text-lg font-bold">RenováveisParticipa</span>
			</a>
		</div>
		<MainNav class="hidden lg:flex" />
		<MobileNav class="flex lg:hidden" />
		<Button href="{base}/participe">PARTICIPE!</Button>
	</div>
</header>
