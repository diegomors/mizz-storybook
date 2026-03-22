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
      options: ['filled', 'secondary', 'outlined', 'ghost', 'text', 'destructive'],
      description: 'Configuração visual do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Botão ocupa 100% da largura',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento (impede cliques duplicados)',
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

export const Secondary: Story = {
  args: {
    children: 'Continuar',
    variant: 'secondary',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Enabled',
    variant: 'outlined',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Cancelar',
    variant: 'ghost',
  },
};

export const Text: Story = {
  args: {
    children: 'Enabled',
    variant: 'text',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Deletar',
    variant: 'destructive',
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

// --- Full Width ---

export const FullWidth: Story = {
  args: {
    children: 'Cadastrar',
    variant: 'filled',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    ),
  ],
};

export const FullWidthSecondary: Story = {
  name: 'Full Width Secondary',
  args: {
    children: 'Continuar',
    variant: 'secondary',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    ),
  ],
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
        <p className="text-sm text-neutral-500 mb-4">secondary</p>
        <MizzButton variant="secondary">Continuar</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">outlined</p>
        <MizzButton variant="outlined">Enabled</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">ghost</p>
        <MizzButton variant="ghost">Cancelar</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">text</p>
        <MizzButton variant="text">Enabled</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">destructive</p>
        <MizzButton variant="destructive">Deletar</MizzButton>
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

export const Loading: Story = {
  args: {
    children: 'Salvando...',
    variant: 'filled',
    loading: true,
  },
};

export const AllStatesWithLoading: Story = {
  name: 'State (com loading)',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <p className="text-sm text-neutral-500 mb-4">enabled</p>
        <MizzButton variant="filled">Enabled</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">disabled</p>
        <MizzButton variant="filled" disabled>Disabled</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">loading (impede cliques duplicados)</p>
        <MizzButton variant="filled" loading>Salvando...</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">loading outlined</p>
        <MizzButton variant="outlined" loading>Carregando...</MizzButton>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">loading text</p>
        <MizzButton variant="text" loading>Aguarde...</MizzButton>
      </div>
    </div>
  ),
};

export const AuthExample: Story = {
  name: 'Exemplo Autenticação',
  render: () => (
    <div className="flex flex-col gap-4 p-6" style={{ width: 375 }}>
      <MizzButton variant="filled" fullWidth>Cadastrar</MizzButton>
      <MizzButton variant="secondary" fullWidth>Continuar</MizzButton>
      <MizzButton variant="outlined" fullWidth>Acessar painel</MizzButton>
      <MizzButton variant="text" fullWidth>Recuperar senha</MizzButton>
      <div className="flex gap-3 justify-center">
        <MizzButton variant="ghost" size="sm">Cancelar</MizzButton>
        <MizzButton variant="destructive" size="sm">Deletar</MizzButton>
      </div>
    </div>
  ),
};
