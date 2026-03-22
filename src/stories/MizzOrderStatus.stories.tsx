import type { Meta, StoryObj } from '@storybook/react';
import { MizzOrderStatus } from '../app/components/mizz/MizzOrderStatus';

const foodServiceSteps = [
  { label: 'Pedido recebido', description: '14:30', status: 'completed' as const },
  { label: 'Na cozinha', description: '14:35', status: 'completed' as const },
  { label: 'Preparando', description: '14:42', status: 'current' as const },
  { label: 'Pronto para servir', status: 'pending' as const },
];

const meta = {
  title: 'Food & Delivery/OrderStatus',
  component: MizzOrderStatus,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['vertical', 'horizontal'] },
  },
} satisfies Meta<typeof MizzOrderStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: { steps: foodServiceSteps, orientation: 'vertical' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Horizontal: Story = {
  args: { steps: foodServiceSteps, orientation: 'horizontal' },
  decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};

export const PedidoServido: Story = {
  name: 'Pedido Servido',
  args: {
    steps: foodServiceSteps.map((s) => ({ ...s, status: 'completed' as const })),
    orientation: 'vertical',
  },
};

export const FluxoCompleto: Story = {
  name: 'Fluxo Completo Food Service',
  args: {
    steps: [
      { label: 'Pedido confirmado', description: 'Mesa 13 · 14:30', status: 'completed' as const },
      { label: 'Recebido pela cozinha', description: '14:32', status: 'completed' as const },
      { label: 'Em preparo', description: '14:35', status: 'current' as const },
      { label: 'Pronto', status: 'pending' as const },
      { label: 'Servido na mesa', status: 'pending' as const },
    ],
    orientation: 'vertical',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};
