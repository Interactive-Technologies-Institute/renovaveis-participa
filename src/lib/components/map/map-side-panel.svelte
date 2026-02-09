<script lang="ts">
	import {
		getAreaStatusColor,
		getAreaTypeColor,
		renewableAreas,
		type RenewableArea
	} from '$lib/data';
	import { Button } from '@/components/ui/button';
	import { Separator } from '@/components/ui/separator';

	interface Props {
		selectedArea?: RenewableArea | null;
		areas?: RenewableArea[];
	}

	let { selectedArea = $bindable(null), areas = renewableAreas }: Props = $props();
</script>

<div class="bg-background flex h-full flex-col">
	<div class="border-b p-6">
		<h2 class="text-foreground text-2xl font-bold">Zonas de Aceleração</h2>
		<p class="text-muted-foreground mt-2">
			Explore as zonas designadas para desenvolvimento de energias renováveis
		</p>
	</div>
	<div class="flex-1 overflow-y-auto">
		{#if selectedArea}
			<div class="p-6">
				<div class="mb-4 flex items-center gap-2">
					<Button variant="ghost" size="sm" onclick={() => (selectedArea = null)} class="p-2">
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</Button>
					<span class="text-muted-foreground text-sm">Voltar à lista</span>
				</div>
				<div class="space-y-4">
					<div>
						<h3 class="text-foreground text-xl font-semibold">{selectedArea.name}</h3>
						<p class="text-muted-foreground">{selectedArea.location}</p>
					</div>

					<div class="flex gap-2">
						<span
							class="rounded-full px-2 py-1 text-xs font-medium {getAreaTypeColor(
								selectedArea.type
							)}"
						>
							{selectedArea.type}
						</span>
						<span
							class="rounded-full px-2 py-1 text-xs font-medium {getAreaStatusColor(
								selectedArea.status
							)}"
						>
							{selectedArea.status}
						</span>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<p class="text-foreground text-sm font-medium">Capacidade</p>
							<p class="text-primary text-lg font-semibold">{selectedArea.capacity}</p>
						</div>
						<div>
							<p class="text-foreground text-sm font-medium">Tipo</p>
							<p class="text-muted-foreground text-sm">{selectedArea.type}</p>
						</div>
					</div>
					<Separator />
					<div>
						<h4 class="text-foreground mb-2 font-semibold">Descrição</h4>
						<p class="text-muted-foreground text-sm leading-relaxed">
							{selectedArea.description}
						</p>
					</div>
					<div class="pt-4">
						<Button class="w-full">Saiba Mais sobre este Projeto</Button>
					</div>
				</div>
			</div>
		{:else}
			<div class="space-y-4 p-6">
				{#each areas as area (area.id)}
					<div
						class="hover:bg-muted/50 cursor-pointer rounded-lg border p-4 transition-colors"
						onclick={() => (selectedArea = area)}
						role="button"
						tabindex="0"
						onkeypress={(e) => e.key === 'Enter' && (selectedArea = area)}
					>
						<div class="mb-2 flex items-start justify-between">
							<h3 class="text-foreground font-semibold">{area.name}</h3>
							<span
								class="rounded-full px-2 py-1 text-xs font-medium {getAreaStatusColor(area.status)}"
							>
								{area.status}
							</span>
						</div>
						<p class="text-muted-foreground mb-3 text-sm">{area.location}</p>
						<div class="flex items-center justify-between">
							<div class="flex gap-2">
								<span
									class="rounded-full px-2 py-1 text-xs font-medium {getAreaTypeColor(area.type)}"
								>
									{area.type}
								</span>
								<span class="text-primary text-xs font-medium">{area.capacity}</span>
							</div>
							<svg
								class="text-muted-foreground h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<div class="bg-muted/20 border-t p-6">
		<div class="text-center">
			<p class="text-muted-foreground mb-3 text-sm">Tem questões sobre alguma área?</p>
			<Button variant="outline" size="sm" href="https://renovaveisparticipa.eu.consider.it/"
				>Participe no Diálogo</Button
			>
		</div>
	</div>
</div>
