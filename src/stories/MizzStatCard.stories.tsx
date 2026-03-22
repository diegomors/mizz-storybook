import type { Meta, StoryObj } from '@storybook/react';
import { MizzStatCard } from '../app/components/mizz/MizzStatCard';

const meta = {
  title: 'Componentes/StatCard',
  component: MizzStatCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'primary', 'accent'] },
  },
} satisfies Meta<typeof MizzStatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '345',
    label: 'Pedidos hoje',
  },
};

export const Primary: Story = {
  args: {
    value: '10',
    label: 'pedidos',
    variant: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    value: '1573',
    label: 'Total de pedidos',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
};

export const DashboardGrid: Story = {
  name: 'Grid de Dashboard',
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-[400px]">
      <MizzStatCard value="10" label="pedidos" variant="primary" />
      <MizzStatCard value="345" label="Faturamento" />
      <MizzStatCard value="7" label="Mesas ativas" />
      <MizzStatCard value="1573" label="Total de pedidos" />
    </div>
  ),
};
