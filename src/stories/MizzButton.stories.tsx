import type { Meta, StoryObj } from '@storybook/react';
import { MizzButton } from '../app/components/mizz/MizzButton';
import { Star } from 'lucide-react';

const meta = {
  title: 'Componentes/Button',
  component: MizzButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
      description: 'Configuração visual do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
  },
} satisfies Meta<typeof MizzButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Configuração ---

export const Filled: Story = {
  args: {
    children: 'Enabled',
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Enabled',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    children: 'Enabled',
    variant: 'text',
  },
};

// --- Estados ---

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'filled',
    disabled: true,
  },
};

// --- Show icon ---

export const WithIcon: Story = {
  args: {
    children: 'Enabled',
    variant: 'filled',
    startIcon: <Star size={18} />,
  },
};

// --- Visão geral ---

export const AllConfigurations: Story = {
  name: 'Configuração',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <p className="text-sm text-neutral-500 mb-4">filled (default)</p>
        <MizzButton variant="filled">Enabled</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">outlined</p>
        <MizzButton variant="outlined">Enabled</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">text</p>
        <MizzButton variant="text">Enabled</MizzButton>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  name: 'State',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <p className="text-sm text-neutral-500 mb-4">enabled (default)</p>
        <MizzButton variant="filled">Enabled</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">disabled</p>
        <MizzButton variant="filled" disabled>Disabled</MizzButton>
      </div>
    </div>
  ),
};

export const ShowIcon: Story = {
  name: 'Show icon',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <p className="text-sm text-neutral-500 mb-4">false (default)</p>
        <MizzButton variant="filled">Enabled</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">true</p>
        <MizzButton variant="filled" startIcon={<Star size={18} />}>Enabled</MizzButton>
      </div>
    </div>
  ),
};
