import type { Meta, StoryObj } from '@storybook/react';
import { MizzLogo } from '../app/components/mizz/MizzLogo';

/**
 * # MizzLogo
 * 
 * Componente de logo da marca Mizz com variantes completa e ícone.
 * 
 * ## Recursos de Acessibilidade
 * - Role "img" para semântica correta
 * - aria-label "Logo Mizz" para leitores de tela
 * - SVGs decorativos marcados com aria-hidden="true"
 */
const meta = {
  title: 'Mizz/Logo',
  component: MizzLogo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Logo da marca Mizz disponível em versão completa e apenas ícone.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'icon'],
      description: 'Variante de exibição do logo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'full' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do logo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
  },
} satisfies Meta<typeof MizzLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullSmall: Story = {
  args: {
    variant: 'full',
    size: 'sm',
  },
};

export const FullMedium: Story = {
  args: {
    variant: 'full',
    size: 'md',
  },
};

export const FullLarge: Story = {
  args: {
    variant: 'full',
    size: 'lg',
  },
};

export const IconSmall: Story = {
  args: {
    variant: 'icon',
    size: 'sm',
  },
};

export const IconMedium: Story = {
  args: {
    variant: 'icon',
    size: 'md',
  },
};

export const IconLarge: Story = {
  args: {
    variant: 'icon',
    size: 'lg',
  },
};

/**
 * Exemplo mostrando todos os tamanhos da variante completa
 */
export const AllSizesFull: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-gray-900 rounded-xl items-start">
      <div>
        <p className="text-white text-sm mb-3">Small</p>
        <MizzLogo variant="full" size="sm" />
      </div>
      
      <div>
        <p className="text-white text-sm mb-3">Medium</p>
        <MizzLogo variant="full" size="md" />
      </div>
      
      <div>
        <p className="text-white text-sm mb-3">Large</p>
        <MizzLogo variant="full" size="lg" />
      </div>
    </div>
  ),
};

/**
 * Exemplo mostrando todos os tamanhos da variante ícone
 */
export const AllSizesIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-gray-900 rounded-xl items-start">
      <div>
        <p className="text-white text-sm mb-3">Small</p>
        <MizzLogo variant="icon" size="sm" />
      </div>
      
      <div>
        <p className="text-white text-sm mb-3">Medium</p>
        <MizzLogo variant="icon" size="md" />
      </div>
      
      <div>
        <p className="text-white text-sm mb-3">Large</p>
        <MizzLogo variant="icon" size="lg" />
      </div>
    </div>
  ),
};

/**
 * Exemplo de uso em diferentes backgrounds
 */
export const OnDifferentBackgrounds: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="p-8 bg-gray-900 rounded-xl">
        <p className="text-white text-sm mb-4">Fundo escuro (recomendado)</p>
        <MizzLogo variant="full" size="md" />
      </div>
      
      <div className="p-8 bg-white border-2 border-gray-200 rounded-xl">
        <p className="text-gray-900 text-sm mb-4">Fundo claro</p>
        <MizzLogo variant="icon" size="md" />
      </div>
      
      <div className="p-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
        <p className="text-white text-sm mb-4">Fundo gradiente</p>
        <MizzLogo variant="icon" size="md" />
      </div>
    </div>
  ),
};

/**
 * Exemplo de uso em contexto de navegação
 */
export const InNavbar: Story = {
  render: () => (
    <div className="bg-gray-900 p-4 rounded-xl" style={{ width: '100%', maxWidth: '1200px' }}>
      <div className="flex items-center justify-between">
        <MizzLogo variant="full" size="sm" />
        
        <nav className="flex gap-6 text-white text-sm">
          <a href="#" className="hover:text-[#ff5c00] transition-colors">Início</a>
          <a href="#" className="hover:text-[#ff5c00] transition-colors">Cardápio</a>
          <a href="#" className="hover:text-[#ff5c00] transition-colors">Sobre</a>
          <a href="#" className="hover:text-[#ff5c00] transition-colors">Contato</a>
        </nav>
        
        <button className="px-4 py-2 bg-[#ff5c00] text-white rounded-lg text-sm font-medium hover:bg-[#e55200] transition-colors">
          Fazer pedido
        </button>
      </div>
    </div>
  ),
};

/**
 * Exemplo de uso em loading/splash screen
 */
export const SplashScreen: Story = {
  render: () => (
    <div 
      className="flex items-center justify-center bg-gray-900 rounded-xl" 
      style={{ width: '100%', maxWidth: '600px', height: '400px' }}
    >
      <div className="flex flex-col items-center gap-6">
        <MizzLogo variant="icon" size="lg" className="animate-pulse" />
        <p className="text-white text-lg">Carregando...</p>
      </div>
    </div>
  ),
};
