<script lang="ts">
	import { getMarkerColor, renewableAreas } from '$lib/data';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import { setContext } from 'svelte';
	import { key, mapboxgl, type MBMapContext } from './map';
	import Marker from './marker.svelte';

	interface MapProps {
		lng: number;
		lat: number;
		zoom: number;
		children?: import('svelte').Snippet;
		selectedAreaId?: string | null;
		onAreaSelect?: (areaId: string) => void;
	}

	let {
		lng = $bindable(),
		lat = $bindable(),
		zoom = $bindable(),
		children,
		selectedAreaId = null,
		onAreaSelect
	}: MapProps = $props();

	let map: mapboxgl.Map | undefined = $state();

	setContext<MBMapContext>(key, {
		getMap: () => map
	});

	function updateProps() {
		if (!map) return;
		zoom = map.getZoom();
		lng = map.getCenter().lng;
		lat = map.getCenter().lat;
	}

	function initialize(node: HTMLElement) {
		map = new mapboxgl.Map({
			container: node,
			style: 'mapbox://styles/mapbox/light-v11',
			center: [lng, lat],
			zoom: zoom,
			minZoom: 1,
			maxZoom: 15
		});
		map.addControl(new mapboxgl.NavigationControl());

		map.on('move', updateProps);

		return {
			destroy() {
				map?.off('move', updateProps);
				map?.remove();
				map = undefined;
			}
		};
	}

	function handleAreaClick(areaId: string) {
		if (onAreaSelect) {
			onAreaSelect(areaId);
		}
	}
</script>

<div class="h-full w-full overflow-hidden" use:initialize>
	{#if map}
		{@render children?.()}
		{#each renewableAreas as area}
			<Marker lng={area.coordinates[0]} lat={area.coordinates[1]}>
				<div
					class="renewable-marker"
					style="
						background-color: {getMarkerColor(area.type)};
						width: 12px;
						height: 12px;
						border-radius: 50%;
						border: 2px solid white;
						box-shadow: 0 2px 4px rgba(0,0,0,0.3);
						cursor: pointer;
						transition: transform 0.2s;
					"
					class:scale-125={selectedAreaId === area.id}
					onclick={() => handleAreaClick(area.id)}
					onkeypress={(e) => e.key === 'Enter' && handleAreaClick(area.id)}
					role="button"
					tabindex="0"
				></div>
				<div slot="popup" class="min-w-48 rounded-lg bg-white p-3 shadow-lg">
					<h3 class="text-sm font-semibold text-gray-900">{area.name}</h3>
					<p class="mt-1 text-xs text-gray-600">{area.location}</p>
					<div class="mt-2 flex items-center justify-between">
						<span class="text-xs text-gray-500">Tipo: {area.type}</span>
						<span class="text-xs font-medium text-blue-600">{area.capacity}</span>
					</div>
					<div class="mt-2">
						<span class="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
							{area.status}
						</span>
					</div>
				</div>
			</Marker>
		{/each}
	{/if}
</div>

<style>
	:global(.mapboxgl-map) {
		font: inherit;
	}
	:global(.mapboxgl-popup-content) {
		padding: 0;
		border-radius: 6px;
	}
	.renewable-marker:hover {
		transform: scale(1.1);
	}
</style>
