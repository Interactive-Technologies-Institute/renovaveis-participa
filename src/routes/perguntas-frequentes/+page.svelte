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
		<h2 class="mb-6 text-2xl font-bold">Sobre as ZAER e o PSZAER</h2>
		<Accordion.Root type="single" class="w-full">
			<Accordion.Item value="zaer-1">
				<Accordion.Trigger>O que são as ZAER?</Accordion.Trigger>
				<Accordion.Content class="typography small">
					<p>
						A Diretiva (UE) 2023/2413, do Parlamento Europeu e do Conselho, de 18 de outubro de
						2023, relativa à promoção da utilização de energia proveniente de fontes renováveis (RED
						III), determina que cada Estado-Membro deve assegurar que as autoridades competentes
						adotam um ou mais planos que designem Zonas de Aceleração da Implantação de Energias
						Renováveis, com vista à simplificação e celeridade dos procedimentos administrativos e
						de licenciamento, salvaguardando valores ambientais e territoriais relevantes.
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
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="zaer-2">
				<Accordion.Trigger>O que é o PSZAER?</Accordion.Trigger>
				<Accordion.Content class="typography small">
					<p>
						O Programa Setorial das Zonas de Aceleração da Implantação de Energias Renováveis, é o
						instrumento estruturante que procura integrar, de forma coordenada e territorialmente
						consistente, os objetivos nacionais de política energética e climática, bem como os
						objetivos ambientais, de conservação da natureza e de defesa do património cultural,
						permitindo enquadrar a identificação e delimitação das Zonas de Aceleração da
						Implantação de Energias Renováveis numa lógica de planeamento estratégico, de
						antecipação de conflitos de uso do solo, de reforço da previsibilidade e da segurança
						jurídica das decisões administrativas, e de promoção de uma implementação mais célere e
						eficaz dos projetos de energias renováveis, através da identificação de zonas cuja
						pré-análise permite um licenciamento mais simplificado.
					</p>
					<p>
						O PSZAER contribui para o cumprimento da reforma de «Simplificação do quadro jurídico e
						regulamentar aplicável aos projetos de energias renováveis» do PRR - Plano de
						Recuperação e Resiliência (RP-C21-r48), constituindo parte integrante do calendário de
						atribuição de nova capacidade em matéria de energias renováveis para o desenvolvimento
						de projetos de energias renováveis.
					</p>
					<p>
						A elaboração do PSZAER, cujo procedimento de elaboração foi publicado em Diário da
						República pelo Despacho n.º 1532-B/2026, de 6 de fevereiro, enquanto instrumento de
						planeamento destinado a definir orientações estratégicas e diretivas para a
						identificação, delimitação e implementação das Zonas de Aceleração da Implantação de
						Energias Renováveis (ZAER), procura assegurar os seguintes objetivos:
					</p>
					<ul>
						<li>
							a) Contribuir para a concretização do PNEC 2030 e para o cumprimento das metas de
							neutralidade carbónica;
						</li>
						<li>
							b) Promover o aumento da produção de energia a partir de fontes renováveis de forma
							ordenada e sustentável;
						</li>
						<li>
							c) Identificar medidas destinadas à simplificação e à celeridade dos procedimentos
							administrativos e de licenciamento dos projetos inseridos nas ZAER, nos termos da
							Diretiva (UE) 2023/2413 (RED III);
						</li>
						<li>
							d) Garantir a compatibilização do PSZAER com os instrumentos de gestão territorial em
							vigor;
						</li>
						<li>
							e) Assegurar a proteção ambiental e paisagística, considerando os valores naturais e
							culturais em presença no território;
						</li>
						<li>
							f) Definir critérios técnicos e operacionais para a identificação e delimitação das
							ZAER, incluindo avaliação do potencial energético e dos impactos ambientais;
						</li>
						<li>
							g) Promover a articulação interinstitucional entre as entidades públicas e privadas
							envolvidas, garantindo coerência entre as políticas públicas setoriais e o ordenamento
							do território;
						</li>
						<li>
							h) Contribuir para a segurança e soberania do abastecimento energético, através da
							identificação de localizações estratégicas para desenvolvimento de projetos de energia
							renovável;
						</li>
						<li>
							i) Incentivar a inovação tecnológica e industrial no setor das energias renováveis, em
							linha com a estratégia do XXV Governo Constitucional para a transição energética;
						</li>
						<li>
							j) Criar oportunidades de emprego verde e de desenvolvimento económico local,
							promovendo a participação das comunidades nas áreas de influência das ZAER;
						</li>
						<li>
							k) Apoiar a integração de energias renováveis na rede elétrica nacional, promovendo
							soluções de flexibilidade, armazenamento e redes inteligentes;
						</li>
						<li>
							l) Assegurar a monitorização e avaliação periódica dos impactos sociais, económicos e
							ambientais das ZAER.
						</li>
					</ul>
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
						alinhada com as expectativas da sociedade
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
