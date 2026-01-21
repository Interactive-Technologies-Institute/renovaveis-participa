<script lang="ts">
	import { base } from '$app/paths';
	import * as Avatar from '$lib/components/ui/avatar';
	import PageHeader from '@/components/page-header.svelte';

	const teamMembers = [
		{
			name: 'Professora Maria do Rosário Partidário',
			role: 'Coordenação-Geral',
			image: `${base}/images/coordenacao-geral.png`,
			bio: 'Professora Catedrática do IST-UL em Planeamento, Urbanismo e Ambiente no Departamento de Engenharia Civil, especialista em avaliação ambiental estratégica (AAE), autora da metodologia de pensamento estratégico para a sustentabilidade - ST4S (Strategic thinking for sustainability), coordenadora geral da Comissão Técnica Independente que estudou as opções para o Aeroporto, recebeu o Life-Time Achievement Award da International Association for Impact Assessment em 2015 pelos seus contributos internacionais para o desenvolvimento da AAE.'
		},
		{
			name: 'Professor Pedro Carvalho',
			role: 'Coordenação da área Energia',
			image: `${base}/images/coordenacao-energia.png`,
			bio: 'Professor catedrático do IST e investigador INESC-ID. Coordenador da Área Científica de Energia do Departamento de Engenharia Electrotécnica e de Computadores do IST e coordenador da linha temática de Transição Energética do INESC-ID, onde faz investigação na área de planeamento de sistemas de energia e otimização de redes de energia elétrica. Colaborou ativamente com o Departamento de Engenharia Electrotécnica e de Computadores da Universidade de Carnegie Mellon, nos EUA, onde foi Professor Adjunto até 2023, e responsável pelo grau dual de Doutoramento em Engenharia e Políticas Públicas com o IST.'
		},
		{
			name: 'Doutor Francisco Moreira',
			role: 'Coordenação da área Ecologia',
			image: `${base}/images/coordenacao-ecologia.jpg`,
			bio: 'Formação em Biologia. Investigador coordenador do CIBIO-BIOPOLIS (Centro de Investigação em Biodiversidade e Recursos Genéticos), Universidade do Porto; Coordenou a Cátedra de Investigação Convidada em Biodiversidade da REN (Redes Energéticas Nacionais), cofinanciada pela FCT; Coordena um protocolo de colaboração/investigação com a Lightsource bp em impactes ecológicos de parques fotovoltaicos. Foi Membro da Direção da Society for Conservation Biology – Europe section e Vice-Presidente da Liga para a Proteção da Natureza.'
		},
		{
			name: 'Dr. Sérgio Barroso',
			role: 'Coordenação da área Ordenamento e Economia do Território',
			image: `${base}/images/coordenacao-ordenamento.jpeg`,
			bio: 'Geógrafo e Urbanista, Mestre em Planeamento Regional e Urbano, Diretor do Centro de Estudos e Desenvolvimento Regional e Urbano com 30 anos de experiência em consultoria. Membro do Conselho de Escola da ENSP. Especialista em ordenamento do território, ação climática e avaliação de políticas públicas. Coordenou inúmeros planos estratégicos, regionais e municipais, urbanísticos e de ordenamento, com destaque para planos da orla costeira, bacias hidrográficas e albufeiras de águas públicas.'
		},
		{
			name: 'Professor Jorge Cancela',
			role: 'Coordenação da área Paisagem',
			image: `${base}/images/coordenacao-paisagem.jpeg`,
			bio: 'Jorge Cancela, arquiteto-paisagista, mestre em gestão ambiental, doutor em urbanismo. Professor da Faculdade de Arquitetura da Universidade de Lisboa. Sócio-fundador das empresas Biodesign, ambiente e paisagem, Lda e Ecostatus, agronomia e produtos agro-alimentares, Lda. Ex-presidente da direção da Associação Portuguesa dos Arquitetos Paisagistas. Atual Presidente do Conselho de Supervisão da Ordem dos Arquitetos. Colaborou na equipa da Prof. Maria do Rosário Partidário da avaliação ambiental da localização do novo aeroporto de Lisboa. Experiência profissional nacional e internacional de 40 anos em planos e programas de gestão da paisagem, avaliação de impacte ambiental, projetos de recuperação da paisagem, agricultura de base ecológica, avaliação ambiental estratégica.'
		},
		{
			name: 'Dra. Isabel Moraes Cardoso',
			role: 'Coordenação da área Jurídico',
			image: `${base}/images/coordenacao-juridico.jpg`,
			bio: 'Advogada, licenciada em Direito pela Faculdade de Direito de Lisboa da Universidade Católica Portuguesa, é sócia da Abalada Matos, Moraes Cardoso e Associados, Sociedade de Advogados R.L., e exerce a atividade de advocacia e de consultoria jurídica nas áreas do direito do urbanismo, ordenamento do território, ambiente, energia, imobiliário e turismo. Assessorou o licenciamento urbanístico e ambiental de projetos diversos, incluindo de energias renováveis, unidades industriais, de logística e de resíduos, e empreendimentos imobiliários e turísticos, assegurando também a coordenação jurídica de planos municipais de ordenamento do território e de regulamentos municipais nestas áreas. Conta também com intervenção em processos legislativos na área do ordenamento do território, urbanismo e ambiente, tendo assumido funções de subdiretora-geral na Direção-Geral do Ordenamento do Território e Desenvolvimento Urbano.'
		},
		{
			name: 'Doutora Sofia Simões',
			role: 'Coordenação da Integração da Informação Espacializada',
			image: `${base}/images/coordenacao-iie.jpg`,
			bio: 'Formação de base em Eng. do Ambiente; Doutorada em Sistemas de Energia (Universidade Leiden). Investigadora Principal no LNEG – Laboratório Nacional de Energia e Geologia onde coordena a Unidade de Economia de Recursos. Trabalha diversos temas ao nível de recursos para futuros de baixo carbono (água, minerais, uso do solo). Coordenou o GTAER - Grupo de Trabalho para a definição das Zonas de Aceleração de Energias Renováveis. Coordenou vários trabalhos de análise de usos do solo para a energia como o Atlas do H2 Verde Sustentável, o potencial técnico de renováveis ou a distribuição do consumo de eletricidade na indústria e sua satisfação com solar PV. É Chair do "Renewable Energy Working Party" da Agência Internacional de Energia.'
		},
		{
			name: 'Professor Nuno Jardim Nunes',
			role: 'Coordenação do Plataforma Interativa e Participativa',
			image: `${base}/images/coordenacao-pip.png`,
			bio: 'Professor Catedrático do Técnico da Universidade de Lisboa onde preside ao Instituto de Tecnologias Interactivas (ITI) do LARSyS uma unidade de investigação de excelência na interseção entre o design, a interação e as tecnologias digitais. Nuno é co-Director da parceria internacional com a Universidade de Carnegie Mellon onde é professor convidado no Human-Computer Interaction Institute (HCII). Nuno é um defensor do papel do design na cultura participada e na sustentabilidade. A sua investigação influencia como as tecnologias digitais (de sensores a inteligência artificial, histórias interativas e realidade mista) podem envolver e inspirar a cidadania inclusiva e sustentável. Os seus contributos levaram à criação da visão para uma Bauhaus do Mar que será proposta como uma das cinco redes temáticas Europeias.'
		}
	];
</script>

<PageHeader
	title="Coordenação"
	description="Conheça a equipa de coordenação responsável pela condução do projeto de zonas de aceleração de energias renováveis."
/>

<div class="container my-12 md:my-24">
	<div class="grid gap-12 md:grid-cols-2">
		{#each teamMembers as member}
			<div class="flex flex-col">
				<Avatar.Root class="mb-6 h-40 w-40">
					<Avatar.Image src={member.image} alt={member.name} class="object-cover" />
					<Avatar.Fallback class="text-lg"
						>{member.name
							.split(' ')
							.map((n) => n[0])
							.join('')}</Avatar.Fallback
					>
				</Avatar.Root>
				<h3 class="text-primary mb-2 text-xl font-semibold">{member.name}</h3>
				<h4 class="text-muted-foreground mb-4 text-sm font-bold uppercase">
					{member.role}
				</h4>
				<p class="text-muted-foreground text-justify leading-relaxed">{member.bio}</p>
			</div>
		{/each}
	</div>
</div>
