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

export const renewableAreas: RenewableArea[] = [];

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
