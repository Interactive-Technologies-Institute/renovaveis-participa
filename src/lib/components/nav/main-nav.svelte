<script lang="ts">
	import { base } from '$app/paths';
	import * as NavigationMenu from '@/components/ui/navigation-menu';
	import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className
	}: {
		class?: string;
	} & HTMLAttributes<HTMLElement> = $props();
</script>

<NavigationMenu.Root class={className} viewport={false}>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href="{base}/faq" class={navigationMenuTriggerStyle()}>FAQ</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href="{base}/relatorios" class={navigationMenuTriggerStyle()}>Relatórios</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Estratégia de Participação</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="{base}/participacao-publica">
							Participação Pública
						</NavigationMenu.Link>
						<NavigationMenu.Link href="{base}/processo-participacao">
							Processo de Participação
						</NavigationMenu.Link>
						<NavigationMenu.Link href="{base}/focus-groups">Focus Groups</NavigationMenu.Link>
						<NavigationMenu.Link href="{base}/entidades-envolvidas">
							Entidades Envolvidas
						</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>O que é …</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="{base}/aae">AAE</NavigationMenu.Link>
						<NavigationMenu.Link href="{base}/areas-aceleracao"
							>Áreas de Aceleração</NavigationMenu.Link
						>
						<NavigationMenu.Link href="{base}/diretrizes-europeias">
							Diretrizes Europeias
						</NavigationMenu.Link>
						<NavigationMenu.Link href="{base}/legislacao-nacional">
							Legislação Nacional
						</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Sobre a Equipa</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="{base}/composicao">Composição</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
