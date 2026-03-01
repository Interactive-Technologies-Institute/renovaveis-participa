<script lang="ts">
	import { Button } from '@/components/ui/button';
	import Logo from './logo.svelte';
	import MainNav from './nav/main-nav.svelte';
	import MobileNav from './nav/mobile-nav.svelte';
</script>

<header class="bg-background sticky top-0 z-50 w-full border-b">
	<div class="container flex h-16 items-center gap-4">
		<Logo class="mr-auto h-10 w-auto" />
		<MainNav class="hidden lg:flex" />
		<Button href="https://renovaveisparticipa.eu.consider.it/">PARTICIPE!</Button>
		<MobileNav class="flex lg:hidden" />
	</div>
</header>
