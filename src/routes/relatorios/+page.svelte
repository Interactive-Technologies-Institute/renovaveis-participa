<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '@/components/page-header.svelte';
	import { Button } from '@/components/ui/button';
	import * as Item from '@/components/ui/item';

	const relatorios = [
		{
			title: 'Relatório de Fatores Críticos para a Decisão',
			filename: 'relatorio_de_fatores_criticos_para_a_decisao.pdf'
		},
		{
			title: 'Proposta de Programa Setorial das Zonas de Aceleração de Energias Renováveis',
			filename: 'proposta_de_programa_setorial_das_zaer.pdf'
		},
		{
			title: 'Relatório Ambiental Preliminar',
			filename: 'relatorio_ambiental_preliminar.pdf'
		},
		{
			title: 'Resumo Não Técnico',
			filename: 'resumo_nao_tecnico.pdf'
		},
		{
			title: 'Relatório Temático Energia',
			filename: 'relatorio_tematico_energia.pdf'
		},
		{
			title: 'Relatório Temático Ecologia',
			filename: 'relatorio_tematico_ecologia.pdf'
		},
		{
			title: 'Relatório Temático Paisagem e Património Cultural',
			filename: 'relatorio_tematico_paisagem_e_patrimonio_cultural.pdf'
		},
		{
			title: 'Relatório Temático Ordenamento e Economia do Território',
			filename: 'relatorio_tematico_ordenamento_e_economia_do_territorio.pdf'
		},
		{
			title: 'Relatório Temático Jurídico',
			filename: 'relatorio_tematico_juridico.pdf'
		},
		{
			title: 'Relatório Temático Integração da Informação Espacializada',
			filename: 'relatorio_tematico_integracao_da_informacao_espacializada.pdf'
		}
	];
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
			{#each relatorios as relatorio (relatorio.filename)}
				<Item.Root variant="outline">
					<Item.Content>
						<Item.Title>{relatorio.title}</Item.Title>
					</Item.Content>
					<Item.Actions>
						<Button
							href={`${base}/relatorios/${relatorio.filename}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							Consultar
						</Button>
					</Item.Actions>
				</Item.Root>
			{/each}
		</div>
	</section>
</div>
