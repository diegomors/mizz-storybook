import type { Meta, StoryObj } from '@storybook/react';
import { MizzGaugeChart } from '../app/components/mizz/MizzGaugeChart';

const meta = {
  title: 'Componentes/GaugeChart',
  component: MizzGaugeChart,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    badgeColor: { control: 'select', options: ['positive', 'negative', 'warning', 'primary'] },
  },
} satisfies Meta<typeof MizzGaugeChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 65,
    label: '28 min',
    subtitle: 'Tempo médio de preparo',
  },
};

export const WithBadge: Story = {
  args: {
    value: 75,
    label: '28 min',
    badge: '-5%',
    badgeColor: 'positive',
    subtitle: 'Tempo médio de atendimento',
  },
};

export const AllSizes: Story = {
  name: 'Tamanhos',
  render: () => (
    <div className="flex items-end gap-8">
      <MizzGaugeChart value={40} label="40%" size="sm" subtitle="Ocupação" />
      <MizzGaugeChart value={65} label="65%" size="md" subtitle="Satisfação" />
      <MizzGaugeChart value={85} label="85%" size="lg" subtitle="Eficiência" />
    </div>
  ),
};

export const DashboardRelatórios: Story = {
  name: 'Relatórios do Restaurante',
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-6">
      <MizzGaugeChart value={75} label="28 min" badge="-5%" badgeColor="positive" subtitle="Tempo médio de preparo" />
      <MizzGaugeChart value={45} label="12 min" badge="+2 min" badgeColor="warning" subtitle="Tempo médio de espera" />
      <MizzGaugeChart value={90} label="4.5" badge="ótimo" badgeColor="positive" subtitle="Avaliação dos clientes" />
      <MizzGaugeChart value={60} label="18/30" subtitle="Mesas ocupadas" />
    </div>
  ),
};
