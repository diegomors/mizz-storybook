import type { Meta, StoryObj } from '@storybook/react';
import { MizzEmptyState } from '../app/components/mizz/MizzEmptyState';
import { MizzButton } from '../app/components/mizz/MizzButton';

const meta = {
  title: 'Componentes/EmptyState',
  component: MizzEmptyState,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MizzEmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Nenhum resultado encontrado',
    description: 'Tente ajustar os filtros ou fazer uma nova busca.',
    action: <MizzButton variant="outlined" size="sm">Limpar filtros</MizzButton>,
  },
};

export const CardapioVazio: Story = {
  name: 'Cardápio Vazio',
  args: {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="14" y="8" width="36" height="48" rx="4" />
        <path d="M22 20h20M22 28h16M22 36h12" strokeLinecap="round" />
        <path d="M28 44h8" strokeLinecap="round" strokeDasharray="2 3" />
      </svg>
    ),
    title: 'Cardápio indisponível',
    description: 'O estabelecimento ainda não cadastrou itens no cardápio.',
    action: <MizzButton variant="outlined" size="sm">Voltar</MizzButton>,
  },
};

export const SemPedidos: Story = {
  name: 'Sem Pedidos',
  args: {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="28" r="16" />
        <circle cx="32" cy="28" r="8" strokeDasharray="3 3" />
        <path d="M16 48h32" strokeLinecap="round" />
        <path d="M22 52h20" strokeLinecap="round" />
      </svg>
    ),
    title: 'Nenhum pedido ainda',
    description: 'Quando você fizer seu primeiro pedido, ele aparecerá aqui.',
    action: <MizzButton>Ver cardápio</MizzButton>,
  },
};

export const MesaVazia: Story = {
  name: 'Mesa Vazia',
  args: {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 32h40" strokeLinecap="round" />
        <path d="M16 32v16M48 32v16" strokeLinecap="round" />
        <path d="M22 32v-6a10 10 0 0120 0v6" />
        <circle cx="32" cy="20" r="4" strokeDasharray="2 2" />
      </svg>
    ),
    title: 'Mesa sem atendimento',
    description: 'Escaneie o QR code da mesa para iniciar um atendimento.',
    action: <MizzButton>Escanear QR Code</MizzButton>,
  },
};
