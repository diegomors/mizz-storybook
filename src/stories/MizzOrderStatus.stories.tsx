import type { Meta, StoryObj } from '@storybook/react';
import { MizzOrderStatus } from '../app/components/mizz/MizzOrderStatus';

const steps = [
  { label: 'Pedido confirmado', description: '14:30', status: 'completed' as const },
  { label: 'Preparando', description: '14:35', status: 'completed' as const },
  { label: 'Saiu para entrega', description: '14:50', status: 'current' as const },
  { label: 'Entregue', status: 'pending' as const },
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
  args: { steps, orientation: 'vertical' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Horizontal: Story = {
  args: { steps, orientation: 'horizontal' },
  decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};

export const AllCompleted: Story = {
  args: {
    steps: steps.map((s) => ({ ...s, status: 'completed' as const })),
    orientation: 'vertical',
  },
};
