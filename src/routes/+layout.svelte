<script lang="ts">
	import Footer from '@/components/footer.svelte';
	import Header from '@/components/header.svelte';
	import { ScrollArea } from '@/components/ui/scroll-area';
	import '../app.css';

	let { children } = $props();
</script>

<ScrollArea class="h-screen w-full">
	<Header />
	<main class="min-h-[calc(100vh-4rem)]">
		{@render children()}
	</main>
	<Footer />
</ScrollArea>
