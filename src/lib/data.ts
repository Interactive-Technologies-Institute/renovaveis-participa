export interface RenewableArea {
	id: string;
	name: string;
	type: 'Solar' | 'Eólica' | 'Mista';
	location: string;
	capacity: string;
	status: 'Proposta' | 'Em análise' | 'Aprovada' | 'Em construção';
	description: string;
	coordinates: [number, number];
}

export const renewableAreas: RenewableArea[] = [
	{
		id: '1',
		name: 'Área de Aceleração Óbidos',
		type: 'Eólica',
		location: 'Óbidos, Leiria',
		capacity: '150 MW',
		status: 'Em análise',
		description:
			'Área designada para desenvolvimento de energia eólica com potencial para instalação de turbinas de alta eficiência.',
		coordinates: [-8.1353, 39.4208]
	},
	{
		id: '2',
		name: 'Zona Solar Moura',
		type: 'Solar',
		location: 'Moura, Beja',
		capacity: '220 MW',
		status: 'Aprovada',
		description:
			'Grande instalação fotovoltaica aprovada para contribuir significativamente para os objetivos de energia renovável.',
		coordinates: [-7.8536, 38.5667]
	},
	{
		id: '3',
		name: 'Projeto Misto Leiria',
		type: 'Mista',
		location: 'Leiria',
		capacity: '180 MW',
		status: 'Proposta',
		description:
			'Proposta de instalação combinada de energia solar e eólica para maximizar a eficiência energética.',
		coordinates: [-8.4103, 40.2111]
	},
	{
		id: '4',
		name: 'Castelo Branco Solar',
		type: 'Solar',
		location: 'Castelo Branco',
		capacity: '95 MW',
		status: 'Em construção',
		description:
			'Central fotovoltaica em fase de construção com tecnologia de última geração para maximizar a produção de energia solar.',
		coordinates: [-7.4227, 39.2436]
	},
	{
		id: '5',
		name: 'Porto Wind Zone',
		type: 'Eólica',
		location: 'Porto',
		capacity: '200 MW',
		status: 'Proposta',
		description:
			'Zona proposta para desenvolvimento eólico offshore com potencial para turbinas de alta capacidade.',
		coordinates: [-8.6291, 41.1579]
	}
];

export function getAreaTypeColor(type: string): string {
	switch (type) {
		case 'Solar':
			return 'bg-amber-100 text-amber-800';
		case 'Eólica':
			return 'bg-cyan-100 text-cyan-800';
		case 'Mista':
			return 'bg-emerald-100 text-emerald-800';
		default:
			return 'bg-gray-100 text-gray-800';
	}
}

export function getAreaStatusColor(status: string): string {
	switch (status) {
		case 'Proposta':
			return 'bg-blue-100 text-blue-800';
		case 'Em análise':
			return 'bg-yellow-100 text-yellow-800';
		case 'Aprovada':
			return 'bg-green-100 text-green-800';
		case 'Em construção':
			return 'bg-orange-100 text-orange-800';
		default:
			return 'bg-gray-100 text-gray-800';
	}
}

export function getMarkerColor(type: string): string {
	switch (type) {
		case 'Solar':
			return '#f59e0b';
		case 'Eólica':
			return '#06b6d4';
		case 'Mista':
			return '#10b981';
		default:
			return '#6b7280';
	}
}
