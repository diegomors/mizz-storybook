import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzTabs } from '../app/components/mizz/MizzTabs';
import { Home, User, Settings } from 'lucide-react';

const sampleTabs = [
  { value: 'home', label: 'Início' },
  { value: 'profile', label: 'Perfil' },
  { value: 'settings', label: 'Configurações' },
  { value: 'disabled', label: 'Desabilitada', disabled: true },
];

const iconTabs = [
  { value: 'home', label: 'Início', icon: <Home size={16} /> },
  { value: 'profile', label: 'Perfil', icon: <User size={16} /> },
  { value: 'settings', label: 'Configurações', icon: <Settings size={16} /> },
];

const meta = {
  title: 'Componentes/Tabs',
  component: MizzTabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['underline', 'filled'], description: 'Variante visual' },
    fullWidth: { control: 'boolean', description: 'Expandir largura total' },
  },
} satisfies Meta<typeof MizzTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underline: Story = {
  args: { tabs: sampleTabs, value: 'home', variant: 'underline' },
};

export const Filled: Story = {
  args: { tabs: sampleTabs, value: 'home', variant: 'filled' },
};

export const WithIcons: Story = {
  args: { tabs: iconTabs, value: 'home', variant: 'underline' },
};

export const FullWidth: Story = {
  args: { tabs: sampleTabs, value: 'home', fullWidth: true },
  decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};

const InteractiveTemplate = () => {
  const [value, setValue] = useState('home');
  return (
    <div className="flex flex-col gap-4 w-[500px]">
      <MizzTabs tabs={sampleTabs} value={value} onChange={setValue} variant="underline" />
      <div className="p-4 text-sm text-neutral-500 bg-neutral-10 rounded-lg">
        Aba selecionada: <strong className="text-neutral-900">{value}</strong>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  name: 'Interativo',
  render: () => <InteractiveTemplate />,
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => (
    <div className="flex flex-col gap-8 p-8 w-[500px]">
      <div>
        <p className="text-sm text-neutral-500 mb-4">Underline</p>
        <MizzTabs tabs={sampleTabs} value="home" variant="underline" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">Filled</p>
        <MizzTabs tabs={sampleTabs} value="home" variant="filled" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">Com ícones</p>
        <MizzTabs tabs={iconTabs} value="home" variant="underline" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">Full width</p>
        <MizzTabs tabs={sampleTabs} value="home" variant="underline" fullWidth />
      </div>
    </div>
  ),
};
