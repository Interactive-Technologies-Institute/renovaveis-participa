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
				<Accordion.Content class="typography small">
					<p>
						De acordo com a Diretiva REDIII as Zonas de Aceleração de Energias Renováveis (ZAER) são
						territórios designados pelos Estados-Membros como especialmente adequados para a
						instalação de unidades de produção de energia a partir de fontes renováveis, em especial
						solar e eólico onshore. São Zonas de Aceleração porque beneficiam de um licenciamento
						ambiental simplificado.
					</p>
					<p>
						NOTA IMPORTANTE: as zonas de aceleração servem para acelerar o desenvolvimento de
						projetos de produção de energia renovável, mas não são zonas exclusivas de
						desenvolvimento de projetos de produção de energia renovável. O restante território
						nacional pode continuar a receber propostas de projetos de produção de energia renovável
						que terão, nesses casos, de dar cumprimento à legislação em vigor.
					</p>
					<p>Para identificar as ZAER, os Estados-Membros devem ter em conta:</p>
					<ul>
						<li>
							A disponibilidade local dos recursos energéticos renováveis e o potencial de produção
							de energia elétrica a partir de fontes renováveis com diferentes tecnologias;
						</li>
						<li>
							As projeções para procura local de energia, em particular de energia elétrica
							renovável;
						</li>
						<li>
							A disponibilidade da infraestrutura elétrica (rede) para receber a energia produzida
							na contiguidade da área de implantação do projeto;
						</li>
						<li>A possibilidade de usos múltiplos dos territórios identificados.</li>
					</ul>
					<p>geral@emer.gov.pt<br />www.emer.gov.pt</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="zaer-2">
				<Accordion.Trigger>As ZAER substituem outros processos de licenciamento?</Accordion.Trigger>
				<Accordion.Content class="typography small">
					<p>
						Não. As ZAER inserem-se num regime de licenciamento ambiental simplificado, mas não
						eliminam outros procedimentos obrigatórios. Continuam a aplicar-se regimes como o
						licenciamento municipal, autorizações a nível do património cultural, recursos hídricos,
						ligação à rede elétrica, entre outros. O licenciamento elétrico mantém-se obrigatório,
						embora venha a ser simplificado no âmbito das ZAER.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="zaer-3">
				<Accordion.Trigger>As ZAER já estão definidas?</Accordion.Trigger>
				<Accordion.Content class="typography small">
					<p>
						Não. Nesta fase, as ZAER ainda não estão delimitadas no território. O processo
						encontra-se numa etapa estratégica e preparatória, em que se definem critérios, opções e
						orientações que irão apoiar o seu futuro mapeamento.
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
				<Accordion.Content class="typography small">
					<p>
						Qualquer pessoa singular ou coletiva pode participar no processo: cidadãos, autarquias,
						empresas, associações, ONG, comunidades locais, academia, entre outros. A participação é
						aberta e inclusiva.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="participacao-2">
				<Accordion.Trigger>Preciso de conhecimentos técnicos para participar?</Accordion.Trigger>
				<Accordion.Content class="typography small">
					<p>
						Não. A participação não exige conhecimentos técnicos. O processo foi desenvolvido para
						permitir contributos construtivos e acessíveis, valorizando tanto o conhecimento técnico
						de alguém do setor energético ou ambiental como a experiência e perceção dos cidadãos.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="participacao-3">
				<Accordion.Trigger>A participação é vinculativa?</Accordion.Trigger>
				<Accordion.Content class="typography small">
					<p>
						Não. Os contributos não são vinculativos, mas desempenham um papel fundamental no
						processo de decisão, sendo analisados e integrados de forma estruturada, transparente e
						metodologicamente robusta no processo de AAE e no desenvolvimento do Programa Setorial.
					</p>
					<p>geral@emer.gov.pt<br />www.emer.gov.pt</p>
					<p>
						Embora não determinem automaticamente as decisões finais, os contributos são essenciais
						para aprimorar o diagnóstico, identificar oportunidades e riscos, percecionar
						preocupações e prioridades territoriais, e reforçar a qualidade, consistência e
						legitimidade do Programa.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="participacao-4">
				<Accordion.Trigger>O que acontece aos contributos?</Accordion.Trigger>
				<Accordion.Content class="typography small">
					<p>
						Os contributos são analisados, sistematizados e integrados nos documentos em elaboração
						(considerar a cronologia esperada na página principal), sempre que relevantes,
						potenciando a identificação de riscos, oportunidades, preocupações territoriais e
						prioridades sociais que apoiam uma tomada de decisão mais informada, equilibrada e
						alinhada com as expectativas da sociedade.
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
				<Accordion.Content class="typography small">
					<p>
						Nesta etapa do processo estão ainda a ser definidos os critérios, princípios e opções
						estratégicas que irão orientar, numa fase posterior, a delimitação das ZAER. A
						divulgação antecipada de mapas com delimitação de áreas poderia condicionar o processo,
						influenciar a avaliação dos critérios e gerar expectativas desajustadas antes de existir
						uma base técnica suficientemente validada.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="territorio-2">
				<Accordion.Trigger>Quando serão divulgadas as zonas?</Accordion.Trigger>
				<Accordion.Content class="typography small">
					<p>
						A delimitação das ZAER será divulgada em momento subsequente, no âmbito da discussão
						pública prevista no artigo 50.º do RJIGT. Nessa ocasião, serão disponibilizados o
						Relatório Ambiental da AAE (RT e RNT) e a proposta de Programa Setorial das ZAER,
						documentos de elevado rigor técnico, sustentados em estudos técnicos e científicos e nos
						contributos recolhidos ao longo do processo participativo.
					</p>
					<p>geral@emer.gov.pt<br />www.emer.gov.pt</p>
					<p>
						Esta fase de discussão pública visa a recolha de observações e sugestões sobre as
						soluções apresentadas na proposta de programa.
					</p>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="territorio-3">
				<Accordion.Trigger
					>Como são considerados impactos ambientais e territoriais?</Accordion.Trigger
				>
				<Accordion.Content class="typography small">
					<p>
						A avaliação é estratégica e integrada, articulando dimensões dos projetos, ecológica,
						paisagística, patrimonial, territorial, energética e social. Analisa riscos,
						oportunidades e efeitos cumulativos associados à localização das ZAER, atendendo às
						especificidades de cada território.
					</p>
					<p>
						As áreas ambiental e territorialmente sensíveis, como áreas protegidas, sítios da Rede
						Natura 2000, áreas protegidas e património cultural classificado, são excluídas da
						identificação das ZAER. Paralelamente, privilegia-se uma abordagem preventiva, orientada
						para a minimização de impactes e para a valorização de oportunidades positivas, como o
						restauro ecológico, a recuperação de áreas degradadas ou artificializadas e a
						compatibilização com outros usos do solo, contribuindo para um desenvolvimento mais
						sustentável e equilibrado do território.
					</p>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</section>
</div>
