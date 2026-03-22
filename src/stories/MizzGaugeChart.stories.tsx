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
    subtitle: 'Tempo médio de atendimento',
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
      <MizzGaugeChart value={40} label="40%" size="sm" />
      <MizzGaugeChart value={65} label="65%" size="md" />
      <MizzGaugeChart value={85} label="85%" size="lg" />
    </div>
  ),
};

export const DashboardExample: Story = {
  name: 'Exemplo Dashboard',
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-6">
      <MizzGaugeChart value={75} label="28 min" badge="-5%" badgeColor="positive" subtitle="Tempo médio de atendimento" />
      <MizzGaugeChart value={45} label="28 min" badge="+12%" badgeColor="negative" subtitle="Tempo médio de preparo" />
    </div>
  ),
};
