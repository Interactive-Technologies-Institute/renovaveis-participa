<script lang="ts">
	import { base } from '$app/paths';
	import { renewableAreas, type RenewableArea } from '$lib/data';
	import MapSidePanel from '@/components/map/map-side-panel.svelte';
	import Map from '@/components/map/map.svelte';
	import { Button } from '@/components/ui/button';

	let selectedArea: RenewableArea | null = $state(null);

	function handleAreaSelect(areaId: string) {
		const area = renewableAreas.find((a) => a.id === areaId);
		if (area) {
			selectedArea = area;
		}
	}
</script>

<section
	class="from-background/60 to-primary/10 relative overflow-hidden bg-gradient-to-br py-20 md:py-32"
>
	<div class="relative z-10 container">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="font-title text-4xl font-bold sm:text-5xl md:text-6xl">
				Espaço de diálogo sobre as Opções Estratégicas para as Áreas de Aceleração de Energias
				Renováveis em Portugal
			</h1>
			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:gap-6">
				<Button size="lg" href="{base}/participe/">Participe no Diálogo</Button>
				<Button variant="outline" size="lg" href="{base}/areas-aceleracao/">Explore as Áreas</Button
				>
			</div>
		</div>
	</div>
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<div
			class="absolute inset-0 opacity-60"
			style="background-image: url('https://library.shadcnblocks.com/images/block/patterns/square-alt-grid.svg'); mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);"
		></div>
	</div>
</section>

<section class="py-20 md:py-32">
	<div class="container">
		<div class="mx-auto mb-16 max-w-2xl text-center">
			<h2 class="font-title text-3xl font-bold sm:text-4xl">
				Áreas de Aceleração de Energias Renováveis
			</h2>
			<p class="text-muted-foreground mt-6 text-lg">
				Explore as áreas designadas para o desenvolvimento de projetos de energia renovável em
				Portugal. Clique nas áreas do mapa para obter mais informações sobre cada projeto.
			</p>
		</div>
		<div class="grid gap-8 lg:h-[40rem] lg:grid-cols-3 lg:gap-12">
			<div class="lg:col-span-1">
				<div class="bg-card overflow-hidden rounded-lg border lg:h-[40rem]">
					<MapSidePanel bind:selectedArea />
				</div>
			</div>
			<div class="order-first lg:order-last lg:col-span-2">
				<div class="bg-card h-[40rem] overflow-hidden rounded-lg border">
					<Map
						zoom={6}
						lat={39.3999}
						lng={-8.2245}
						selectedAreaId={selectedArea?.id}
						onAreaSelect={handleAreaSelect}
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-20 md:py-32">
	<div class="container">
		<div class="text-center">
			<div class="bg-muted/50 rounded-lg p-8">
				<h3 class="font-title mb-4 text-2xl font-bold">Participe no Espaço de Diálogo</h3>
				<p class="text-muted-foreground mx-auto mb-6 max-w-2xl">
					A sua opinião é importante para o desenvolvimento sustentável das energias renováveis em
					Portugal. Participe no espaço de diálogo e contribua para o futuro energético do país.
				</p>
				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button size="lg" href="{base}/participe/">Participar no Diálogo</Button>
					<Button variant="outline" size="lg" href="{base}/faq/">Ver FAQ</Button>
				</div>
			</div>
		</div>
	</div>
</section>
