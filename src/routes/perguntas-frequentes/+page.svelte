<script lang="ts">
	import PageHeader from '@/components/page-header.svelte';
	import * as Accordion from '@/components/ui/accordion';
</script>

<PageHeader
	title="Perguntas Frequentes"
	description="Encontre respostas para as questões mais comuns sobre as ZAER e o processo de participação pública."
/>

<div class="container mx-auto max-w-4xl px-4 py-8">
	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold">Sobre as ZAER</h2>
		<Accordion.Root type="single" class="w-full">
			<Accordion.Item value="zaer-1">
				<Accordion.Trigger>O que são as ZAER?</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="zaer-2">
				<Accordion.Trigger>As ZAER substituem outros processos de licenciamento?</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="zaer-3">
				<Accordion.Trigger>As ZAER já estão definidas?</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore.
					</p>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</section>
	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold">Sobre a participação</h2>
		<Accordion.Root type="single" class="w-full">
			<Accordion.Item value="participacao-1">
				<Accordion.Trigger>Quem pode participar?</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="participacao-2">
				<Accordion.Trigger>Preciso de conhecimentos técnicos?</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="participacao-3">
				<Accordion.Trigger>A participação é vinculativa?</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="participacao-4">
				<Accordion.Trigger>O que acontece aos contributos?</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</section>
	<section class="mb-12">
		<h2 class="mb-6 text-2xl font-bold">Sobre território e impactos</h2>
		<Accordion.Root type="single" class="w-full">
			<Accordion.Item value="territorio-1">
				<Accordion.Trigger>Porque não existem mapas ou zonas nesta fase?</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="territorio-2">
				<Accordion.Trigger>Quando serão divulgadas as zonas?</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="territorio-3">
				<Accordion.Trigger
					>Como são considerados impactos ambientais e territoriais?</Accordion.Trigger
				>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</section>
</div>
