<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '@/components/page-header.svelte';
	import { Button } from '@/components/ui/button';
	import * as Item from '@/components/ui/item';
</script>

<PageHeader title="Relatórios" />
<div class="container my-12 md:my-24">
	<div class="typography">
		<p>
			Os relatórios constituem a base técnica e ambiental do processo ZAER e sustentam a
			participação pública informada. Está prevista a elaboração dos seguintes relatórios:
		</p>
		<ul>
			<li>Relatório de Fatores Críticos para a Decisão.</li>
			<li>Relatório Ambiental Preliminar.</li>
			<li>Relatório Ambiental Final.</li>
		</ul>
		<p>A calendarização prevista para a divulgação dos relatórios será partilhada em breve.</p>
	</div>
	<section class="typography mt-10 flex flex-col gap-4">
		<h2 class="">Relatórios disponíveis</h2>
		<div class="not-typography flex max-w-lg flex-col gap-4">
			<Item.Root variant="outline">
				<Item.Content>
					<Item.Title>Relatório de Fatores Críticos para a Decisão</Item.Title>
				</Item.Content>
				<Item.Actions>
					<Button href={`${base}/relatorios/rfcd.pdf`} target="_blank" rel="noopener noreferrer">
						Consultar
					</Button>
				</Item.Actions>
			</Item.Root>
		</div>
	</section>
</div>
