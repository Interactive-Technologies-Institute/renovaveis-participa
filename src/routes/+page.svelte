<script lang="ts">
	import { base } from '$app/paths';
	import AceleracaoDeProjetosRenovaveisIcon from '$lib/components/icons/aceleracao-de-projetos-renovaveis.svelte';
	import CidadaoIcon from '$lib/components/icons/cidadao.svelte';
	import CriteriosAmbientaisETerritoriaisIcon from '$lib/components/icons/criterios-ambientais-e-territoriais.svelte';
	import EntidadesAmbientaisIcon from '$lib/components/icons/entidades-ambientais.svelte';
	import MonitorizacaoContinuaIcon from '$lib/components/icons/monitorizacao-continua.svelte';
	import MunicipiosIcon from '$lib/components/icons/municipios.svelte';
	import ParticipacaoPublicaIcon from '$lib/components/icons/participacao-publica.svelte';
	import PromotoresIcon from '$lib/components/icons/promotores.svelte';
	import { renewableAreas, type RenewableArea } from '$lib/data';
	import MapSidePanel from '@/components/map/map-side-panel.svelte';
	import Map from '@/components/map/map.svelte';
	import { Button } from '@/components/ui/button';
	import * as Card from '@/components/ui/card';

	let selectedArea: RenewableArea | null = $state(null);
	let flippedCards = $state<Set<string>>(new Set());

	function handleAreaSelect(areaId: string) {
		const area = renewableAreas.find((a) => a.id === areaId);
		if (area) {
			selectedArea = area;
		}
	}

	function toggleCard(cardId: string) {
		const newFlipped = new Set(flippedCards);
		if (newFlipped.has(cardId)) {
			newFlipped.delete(cardId);
		} else {
			newFlipped.add(cardId);
		}
		flippedCards = newFlipped;
	}
</script>

<section
	class="from-background/60 to-primary/10 relative overflow-hidden bg-gradient-to-br py-20 md:py-32"
>
	<div class="relative z-10 container">
		<div class="mx-auto max-w-4xl text-center">
			<h1 class="font-title text-4xl font-bold sm:text-5xl md:text-6xl">
				Zonas de Aceleração da Implantação de Energias Renováveis (ZAER)
			</h1>
			<p class="text-muted-foreground mt-6 text-lg">
				Portugal está a acelerar a transição energética e a sua participação é decisiva. As ZAER
				permitem desenvolver projetos renováveis com menor burocracia, maior previsibilidade e
				benefícios para as comunidades locais.
			</p>
			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:gap-6">
				<Button size="lg" href="https://renovaveisparticipa.eu.consider.it/"
					>Participe no Diálogo</Button
				>
				<Button variant="outline" size="lg" href="{base}/zonas-aceleracao/"
					>O que são as ZAER?</Button
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
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="font-title text-3xl font-bold sm:text-4xl">
				O que são as ZAER e para que servem?
			</h2>
			<p class="text-muted-foreground mt-6 text-lg">
				Uma explicação simples do enquadramento técnico e legal.
			</p>
		</div>
		<div class="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:gap-12">
			<div class="flex flex-col items-center text-center">
				<AceleracaoDeProjetosRenovaveisIcon class="text-primary mb-6 h-20 w-20" />
				<h3 class="font-title mb-3 text-xl font-semibold">Aceleração de projetos renováveis</h3>
				<p class="text-muted-foreground">Simplificação e previsibilidade de procedimentos</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<CriteriosAmbientaisETerritoriaisIcon class="text-primary mb-6 h-20 w-20" />
				<h3 class="font-title mb-3 text-xl font-semibold">Critérios ambientais e territoriais</h3>
				<p class="text-muted-foreground">Integração de salvaguardas desde a fase de planeamento</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<ParticipacaoPublicaIcon class="text-primary mb-6 h-20 w-20" />
				<h3 class="font-title mb-3 text-xl font-semibold">Participação pública</h3>
				<p class="text-muted-foreground">Envolvimento dos diferentes atores ao longo do processo</p>
			</div>
			<div class="flex flex-col items-center text-center">
				<MonitorizacaoContinuaIcon class="text-primary mb-6 h-20 w-20" />
				<h3 class="font-title mb-3 text-xl font-semibold">Monitorização contínua</h3>
				<p class="text-muted-foreground">Acompanhamento e avaliação ao longo do tempo</p>
			</div>
		</div>
	</div>
</section>

<section class="bg-muted/30 py-20 md:py-32">
	<div class="container">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="font-title text-3xl font-bold sm:text-4xl">Porque devo participar?</h2>
			<p class="text-muted-foreground mt-6 text-lg">
				A participação é aberta a todos. Descubra porque a sua opinião é importante.
			</p>
		</div>
		<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
			<button
				class="flip-card group h-64 cursor-pointer"
				onclick={() => toggleCard('municipios')}
				class:flipped={flippedCards.has('municipios')}
			>
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<MunicipiosIcon class="text-primary mb-6 h-16 w-16" />
						<h3 class="font-title text-xl font-semibold">Municípios</h3>
					</div>
					<div class="flip-card-back">
						<p class="text-sm">
							Porque conhecem o território e ajudam a garantir decisões compatíveis com o
							planeamento local e as comunidades.
						</p>
					</div>
				</div>
			</button>
			<button
				class="flip-card group h-64 cursor-pointer"
				onclick={() => toggleCard('promotores')}
				class:flipped={flippedCards.has('promotores')}
			>
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<PromotoresIcon class="text-primary mb-6 h-16 w-16" />
						<h3 class="font-title text-xl font-semibold">Promotores</h3>
					</div>
					<div class="flip-card-back">
						<p class="text-sm">
							Porque contribuem para um processo mais previsível, claro e tecnicamente robusto.
						</p>
					</div>
				</div>
			</button>
			<button
				class="flip-card group h-64 cursor-pointer"
				onclick={() => toggleCard('entidades')}
				class:flipped={flippedCards.has('entidades')}
			>
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<EntidadesAmbientaisIcon class="text-primary mb-6 h-16 w-16" />
						<h3 class="font-title text-xl font-semibold">Entidades ambientais</h3>
					</div>
					<div class="flip-card-back">
						<p class="text-sm">
							Porque asseguram critérios ambientais, salvaguardas e monitorização adequada.
						</p>
					</div>
				</div>
			</button>
			<button
				class="flip-card group h-64 cursor-pointer"
				onclick={() => toggleCard('cidadaos')}
				class:flipped={flippedCards.has('cidadaos')}
			>
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<CidadaoIcon class="text-primary mb-6 h-16 w-16" />
						<h3 class="font-title text-xl font-semibold">Cidadãos</h3>
					</div>
					<div class="flip-card-back">
						<p class="text-sm">
							Porque as ZAER podem impactar o seu território e a sua opinião conta.
						</p>
					</div>
				</div>
			</button>
		</div>
		<div class="mt-12 text-center">
			<Button size="lg" href="https://renovaveisparticipa.eu.consider.it/">Participe!</Button>
		</div>
	</div>
</section>

<section class="py-20 md:py-32">
	<div class="container">
		<div class="mx-auto mb-16 max-w-2xl text-center">
			<h2 class="font-title text-3xl font-bold sm:text-4xl">
				Zonas de Aceleração da Implantação de Energias Renováveis
			</h2>
			<p class="text-muted-foreground mt-6 text-lg">
				Portugal está a identificar e planear as Zonas de Aceleração da Implantação de Energias
				Renováveis (ZAER) — locais adequados para a instalação de energia solar e eólica com
				licenciamento ambiental simplificado, conforme a Diretiva Europeia RED III. Este trabalho
				inovador procura conciliar o desenvolvimento das energias renováveis com a proteção
				ambiental, a coesão territorial e a participação pública informada.
			</p>
		</div>
		<div class="relative">
			<div class="pointer-events-none grid gap-8 blur-sm lg:h-[40rem] lg:grid-cols-3 lg:gap-12">
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
			<div class="absolute inset-0 flex items-center justify-center px-4">
				<Card.Root class="max-w-2xl text-center backdrop-blur-sm">
					<Card.Header>
						<Card.Title class="font-title text-2xl font-bold"
							>O que é que se vai passar aqui?</Card.Title
						>
					</Card.Header>
					<Card.Content>
						Um <strong>Espaço de Diálogo</strong> aberto a todos — cidadãos, autarquias, empresas, associações
						e instituições — onde pode conhecer o projeto, explorar mapas, colocar questões e contribuir
						com ideias e sugestões.
					</Card.Content>
					<Card.Footer class="text-primary flex justify-center text-lg font-semibold"
						>Participe no processo! A sua opinião é essencial.</Card.Footer
					>
				</Card.Root>
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
					<Button size="lg" href="https://renovaveisparticipa.eu.consider.it/"
						>Participar no Diálogo</Button
					>
					<Button variant="outline" size="lg" href="{base}/perguntas-frequentes/"
						>Ver Perguntas Frequentes</Button
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.flip-card {
		perspective: 1000px;
		background: transparent;
		border: none;
		padding: 0;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}

	.flip-card:hover .flip-card-inner,
	.flip-card.flipped .flip-card-inner {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		border-radius: 0.5rem;
		border: 1px solid hsl(var(--border));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		text-align: center;
	}

	.flip-card-front {
		background-color: white;
	}

	.flip-card-back {
		background-color: white;
		color: hsl(var(--foreground));
		transform: rotateY(180deg);
	}

	.flip-card:hover .flip-card-front,
	.flip-card.flipped .flip-card-front {
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
	}
</style>
