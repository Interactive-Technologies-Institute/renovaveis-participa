<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '@/components/ui/button';
	import GlobeIcon from '@lucide/svelte/icons/globe';
	import MailIcon from '@lucide/svelte/icons/mail';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import { Separator } from './ui/separator';
</script>

<footer class="bg-muted/50 border-t py-12">
	<div class="container">
		<div class="grid gap-8 lg:grid-cols-4">
			<div class="flex flex-col items-start gap-4">
				<p class="text-muted-foreground max-w-[18rem] text-sm">
					Espaço de diálogo sobre as Opções Estratégicas para as Zonas de Aceleração de Energias
					Renováveis em Portugal
				</p>
				<div class="text-muted-foreground">
					<p class="text-sm">
						Dúvidas ou sugestões? <a
							href="mailto:joanafmdias@tecnico.ulisboa.pt"
							class="text-primary hover:text-foreground transition-color">Contacte-nos</a
						>
					</p>
				</div>
				<div class="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
					<img src="{base}/ist-logo.svg" alt="IST Logo" class="h-12 w-auto" />
					<div class="flex flex-col items-center">
						<img src="{base}/images/logo-emer.png" alt="EMER 2030 Logo" class="h-12 w-auto" />
						<div class="flex items-center">
							<Button
								href="https://emer.gov.pt/"
								target="_blank"
								rel="noopener noreferrer"
								variant="link"
								size="icon-sm"
								aria-label="Website EMER"
							>
								<GlobeIcon />
							</Button>
							<Button
								href="mailto:geral@emer.gov.pt"
								variant="link"
								size="icon-sm"
								aria-label="Email EMER"
							>
								<MailIcon />
							</Button>
							<Button
								href="tel:+351213231578"
								variant="link"
								size="icon-sm"
								aria-label="Telefone EMER"
							>
								<PhoneIcon />
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<ul class="text-muted-foreground space-y-2 font-semibold">
					<li>
						<a href="{base}/perguntas-frequentes/" class="hover:text-foreground"
							>Perguntas Frequentes</a
						>
					</li>
					<li><a href="{base}/relatorios/" class="hover:text-foreground">Relatórios</a></li>
				</ul>
				<p class="text-foreground mt-6 font-semibold">Sobre a Equipa</p>
				<ul class="text-muted-foreground mt-4 space-y-2 text-sm">
					<li><a href="{base}/coordenacao/" class="hover:text-foreground">Coordenação</a></li>
					<li>
						<a href="{base}/equipa-das-areas-tematicas/" class="hover:text-foreground"
							>Equipa das Áreas Temáticas</a
						>
					</li>
				</ul>
			</div>
			<div>
				<p class="font-semibold">Estratégia de Participação</p>
				<ul class="text-muted-foreground mt-4 space-y-2 text-sm">
					<li>
						<a href="{base}/participacao-publica/" class="hover:text-foreground"
							>Participação Pública</a
						>
					</li>
					<li>
						<a href="{base}/metodologia-participacao-publica/" class="hover:text-foreground"
							>Metodologia de Participação Pública</a
						>
					</li>
					<li>
						<a href="{base}/processo-participacao/" class="hover:text-foreground"
							>Processo de Participação</a
						>
					</li>
					<li><a href="{base}/grupos-focais/" class="hover:text-foreground">Grupos Focais</a></li>
					<li>
						<a href="{base}/entidades-envolvidas/" class="hover:text-foreground"
							>Entidades Envolvidas</a
						>
					</li>
				</ul>
			</div>
			<div>
				<p class="text-foreground font-semibold">O que é …</p>
				<ul class="text-muted-foreground mt-4 space-y-2 text-sm">
					<li>
						<a href="{base}/avaliacao-ambiental-estrategica/" class="hover:text-foreground"
							>Avaliação Ambiental Estratégica</a
						>
					</li>
					<li>
						<a href="{base}/zonas-aceleracao/" class="hover:text-foreground">Zonas de Aceleração</a>
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
