<script lang="ts">
	import { base } from '$app/paths';
	import { buttonVariants } from '@/components/ui/button';
	import * as Popover from '@/components/ui/popover';
	import { cn } from '@/utils';
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	type NavItemProps = HTMLAnchorAttributes & {
		content?: string;
	};

	let {
		class: className
	}: {
		class?: string;
	} & HTMLAttributes<HTMLElement> = $props();

	let open = $state(false);
</script>

{#snippet NavItem({ href, content, class: className, ...props }: NavItemProps)}
	<a
		href={`${base}${href}`}
		onclick={() => {
			open = false;
		}}
		class={cn('text-xl font-medium', className)}
		{...props}
	>
		{content}
	</a>
{/snippet}

<Popover.Root bind:open>
	<Popover.Trigger class={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), className)}>
		<div class="relative flex h-8 w-4 items-center justify-center">
			<div class="relative size-4">
				<span
					class={cn(
						'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100',
						open ? 'top-[0.4rem] -rotate-45' : 'top-1'
					)}
				></span>
				<span
					class={cn(
						'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100',
						open ? 'top-[0.4rem] rotate-45' : 'top-2.5'
					)}
				></span>
			</div>
			<span class="sr-only">Toggle Menu</span>
		</div>
	</Popover.Trigger>
	<Popover.Content
		class="bg-background/90 no-scrollbar h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100"
		align="start"
		side="bottom"
		alignOffset={-16}
		sideOffset={14}
		preventScroll
	>
		<div class="flex flex-col gap-5 overflow-auto px-6 py-6">
			{@render NavItem({ href: '/perguntas-frequentes/', content: 'Perguntas Frequentes' })}
			<div class="relative inline-flex w-fit">
				{@render NavItem({ href: '/relatorios/', content: 'Relatórios' })}
				<span
					class="bg-primary pointer-events-none absolute top-0 -right-2 size-2 rounded-full"
					aria-hidden="true"
				></span>
			</div>
			<div class="flex flex-col gap-2">
				<div class="text-muted-foreground text-sm font-medium">Estratégia de Participação</div>
				<div class="flex flex-col gap-2">
					{@render NavItem({ href: '/participacao-publica/', content: 'Participação Pública' })}
					{@render NavItem({
						href: '/metodologia-participacao-publica/',
						content: 'Metodologia de Participação Pública'
					})}
					{@render NavItem({
						href: '/processo-participacao/',
						content: 'Processo de Participação'
					})}
					{@render NavItem({ href: '/grupos-focais/', content: 'Grupos Focais' })}
					{@render NavItem({ href: '/entidades-envolvidas/', content: 'Entidades Envolvidas' })}
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<div class="text-muted-foreground text-sm font-medium">O que é …</div>
				<div class="flex flex-col gap-2">
					{@render NavItem({
						href: '/avaliacao-ambiental-estrategica/',
						content: 'Avaliação Ambiental Estratégica'
					})}
					{@render NavItem({ href: '/zonas-aceleracao/', content: 'Zonas de Aceleração' })}
					{@render NavItem({ href: '/diretrizes-europeias/', content: 'Diretrizes Europeias' })}
					{@render NavItem({ href: '/legislacao-nacional/', content: 'Legislação Nacional' })}
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<div class="text-muted-foreground text-sm font-medium">Sobre a Equipa</div>
				<div class="flex flex-col gap-2">
					{@render NavItem({ href: '/coordenacao/', content: 'Coordenação' })}
					{@render NavItem({
						href: '/equipa-das-areas-tematicas/',
						content: 'Equipa das Áreas Temáticas'
					})}
				</div>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
