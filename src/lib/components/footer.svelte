<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '@/components/ui/button';
	import Graph from './icons/graph.svelte';
	import { Separator } from './ui/separator';
</script>

<footer class="bg-muted/50 border-t py-12">
	<div class="container">
		<div class="grid gap-8 lg:grid-cols-4">
			<div class="flex flex-col items-start">
				<div class="items-left flex gap-2">
					<div class="bg-primary flex h-8 w-8 items-center justify-center rounded-md">
						<Graph height={20} width={20} class="text-primary-foreground" />
					</div>
					<span class="font-title text-lg font-bold">RenováveisParticipa</span>
				</div>
				<p class="text-muted-foreground mt-4 mb-8 text-sm">
					Espaço de diálogo sobre as Opções Estratégicas para as Áreas de Aceleração de Energias
					Renováveis em Portugal
				</p>
				<img src="{base}/ist-logo.svg" alt="IST Logo" class="h-20 w-auto" />
			</div>
			<div>
				<h3 class="font-semibold">Estratégia de Participação</h3>
				<ul class="text-muted-foreground mt-4 space-y-2 text-sm">
					<li>
						<a href="{base}/participacao-publica/" class="hover:text-foreground"
							>Participação Pública</a
						>
					</li>
					<li>
						<a href="{base}/processo-participacao/" class="hover:text-foreground">
							Processo de Participação
						</a>
					</li>
					<li><a href="{base}/focus-groups/" class="hover:text-foreground">Focus Groups</a></li>
					<li>
						<a href="{base}/entidades-envolvidas/" class="hover:text-foreground"
							>Entidades Envolvidas</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-foreground font-semibold">O que é …</h3>
				<ul class="text-muted-foreground mt-4 space-y-2 text-sm">
					<li><a href="{base}/aae/" class="hover:text-foreground">AAE</a></li>
					<li>
						<a href="{base}/areas-aceleracao/" class="hover:text-foreground">Áreas de Aceleração</a>
					</li>
					<li>
						<a href="{base}/diretrizes-europeias/" class="hover:text-foreground"
							>Diretrizes Europeias</a
						>
					</li>
					<li>
						<a href="{base}/legislacao-nacional/" class="hover:text-foreground"
							>Legislação Nacional</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-foreground font-semibold">Recursos</h3>
				<ul class="text-muted-foreground mt-4 space-y-2 text-sm">
					<li><a href="{base}/relatorios/" class="hover:text-foreground">Relatórios</a></li>
					<li><a href="{base}/faq/" class="hover:text-foreground">FAQ</a></li>
					<li><a href="{base}/composicao/" class="hover:text-foreground">Sobre a Equipa</a></li>
				</ul>
			</div>
		</div>
		<Separator class="my-8" />
		<div
			class="text-muted-foreground flex flex-col gap-4 text-center text-sm md:flex-row md:justify-between"
		>
			<p>&copy; {new Date().getFullYear()} Renováveis Participa. Todos os direitos reservados.</p>
			<div class="flex justify-center md:justify-end">
				<Button variant="ghost" size="sm">Voltar ao topo ↑</Button>
			</div>
		</div>
	</div>
</footer>
