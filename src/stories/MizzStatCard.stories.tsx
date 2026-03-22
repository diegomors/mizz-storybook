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
      // Ícone de prato/food service
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2l-4 6-4-6v13a4 4 0 004 4h0a4 4 0 004-4z" />
      </svg>
    ),
  },
};

export const DashboardGrid: Story = {
  name: 'Grid de Dashboard',
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-[400px]">
      <MizzStatCard value="10" label="pedidos" variant="primary" />
      <MizzStatCard
        value="345"
        label="Faturamento (R$)"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
        }
      />
      <MizzStatCard
        value="7"
        label="Mesas ativas"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 14h16M6 14v6M18 14v6M8 14V8a4 4 0 018 0v6" />
          </svg>
        }
      />
      <MizzStatCard
        value="28 min"
        label="Tempo médio"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        }
      />
    </div>
  ),
};
