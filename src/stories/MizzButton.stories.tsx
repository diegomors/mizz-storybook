import type { Meta, StoryObj } from '@storybook/react';
import { MizzButton } from '../app/components/mizz/MizzButton';
import { Heart, ShoppingCart, Send } from 'lucide-react';

/**
 * # MizzButton
 * 
 * Componente de botão do Design System Mizz com suporte completo a acessibilidade,
 * estados de loading automático e proteção contra múltiplos cliques.
 * 
 * ## Recursos de Acessibilidade
 * - Suporte completo para navegação por teclado
 * - Estados `aria-busy` e `aria-disabled` apropriados
 * - Indicador visual de foco com anel de destaque
 * - Compatível com leitores de tela
 * 
 * ## Controle de Integridade
 * - Previne múltiplos cliques durante processamento
 * - Estado de loading automático durante operações assíncronas
 * - Debounce integrado de 300ms após cada clique
 */
const meta = {
  title: 'Mizz/Button',
  component: MizzButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Botão principal do Design System Mizz com estados de loading e acessibilidade completa.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Variante visual do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Exibe indicador de carregamento e desabilita interações',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do botão',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof MizzButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Fazer pedido',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Cancelar',
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    children: 'Ver cardápio',
    variant: 'outline',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Mais opções',
    variant: 'ghost',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'Pequeno',
    variant: 'primary',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Médio',
    variant: 'primary',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Grande',
    variant: 'primary',
    size: 'lg',
  },
};

export const Loading: Story = {
  args: {
    children: 'Processando...',
    variant: 'primary',
    size: 'md',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Desabilitado',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const WithStartIcon: Story = {
  args: {
    children: 'Adicionar ao carrinho',
    variant: 'primary',
    size: 'md',
    startIcon: <ShoppingCart size={18} />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Enviar mensagem',
    variant: 'primary',
    size: 'md',
    endIcon: <Send size={18} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Curtir',
    variant: 'outline',
    size: 'md',
    startIcon: <Heart size={18} />,
    endIcon: <span className="ml-1 text-xs">42</span>,
  },
};

export const AsyncOperation: Story = {
  args: {
    children: 'Salvar alterações',
    variant: 'primary',
    size: 'md',
    onClick: async () => {
      // Simula operação assíncrona
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Alterações salvas com sucesso!');
    },
  },
};

/**
 * Exemplo mostrando todas as variantes do botão
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-gray-50 rounded-xl">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Variantes</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <MizzButton variant="primary">Primary</MizzButton>
          <MizzButton variant="secondary">Secondary</MizzButton>
          <MizzButton variant="outline">Outline</MizzButton>
          <MizzButton variant="ghost">Ghost</MizzButton>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Tamanhos</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <MizzButton variant="primary" size="sm">Small</MizzButton>
          <MizzButton variant="primary" size="md">Medium</MizzButton>
          <MizzButton variant="primary" size="lg">Large</MizzButton>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Estados</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <MizzButton variant="primary">Normal</MizzButton>
          <MizzButton variant="primary" loading>Loading</MizzButton>
          <MizzButton variant="primary" disabled>Disabled</MizzButton>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Com ícones</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <MizzButton variant="primary" startIcon={<ShoppingCart size={18} />}>
            Adicionar
          </MizzButton>
          <MizzButton variant="outline" endIcon={<Send size={18} />}>
            Enviar
          </MizzButton>
          <MizzButton variant="secondary" startIcon={<Heart size={18} />} endIcon={<span>42</span>}>
            Curtir
          </MizzButton>
        </div>
      </div>
    </div>
  ),
};
