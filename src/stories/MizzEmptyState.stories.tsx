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

export const EmptyCart: Story = {
  args: {
    icon: <span className="text-5xl">🛒</span>,
    title: 'Seu carrinho está vazio',
    description: 'Adicione itens do cardápio para fazer seu pedido.',
    action: <MizzButton>Explorar cardápio</MizzButton>,
  },
};

export const NoOrders: Story = {
  args: {
    icon: <span className="text-5xl">📦</span>,
    title: 'Nenhum pedido ainda',
    description: 'Quando você fizer seu primeiro pedido, ele aparecerá aqui.',
    action: <MizzButton>Fazer primeiro pedido</MizzButton>,
  },
};
