import type { Meta, StoryObj } from '@storybook/react';
import { MizzBadge } from '../app/components/mizz/MizzBadge';
import { Check, AlertCircle, Clock, Star } from 'lucide-react';

/**
 * # MizzBadge
 * 
 * Componente de badge do Design System Mizz para exibir status, contadores
 * e etiquetas com semântica acessível.
 * 
 * ## Recursos de Acessibilidade
 * - Role "status" para indicar informação de estado
 * - Ícones marcados com aria-hidden="true"
 * - Compatível com leitores de tela
 */
const meta = {
  title: 'Mizz/Badge',
  component: MizzBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge para exibir status, categorias e notificações.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning', 'neutral', 'outline'],
      description: 'Variante visual do badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    dot: {
      control: 'boolean',
      description: 'Adiciona um ponto indicador no início',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof MizzBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Destaque',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'Aprovado',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    children: 'Erro',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    children: 'Atenção',
    variant: 'warning',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Neutro',
    variant: 'neutral',
  },
};

export const Outline: Story = {
  args: {
    children: 'Contorno',
    variant: 'outline',
  },
};

export const WithDot: Story = {
  args: {
    children: 'Online',
    variant: 'success',
    dot: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Entregue',
    variant: 'success',
    startIcon: <Check size={14} />,
  },
};

export const WarningWithIcon: Story = {
  args: {
    children: 'Pendente',
    variant: 'warning',
    startIcon: <Clock size={14} />,
  },
};

export const ErrorWithIcon: Story = {
  args: {
    children: 'Cancelado',
    variant: 'error',
    startIcon: <AlertCircle size={14} />,
  },
};

export const Counter: Story = {
  args: {
    children: '99+',
    variant: 'primary',
  },
};

/**
 * Exemplo mostrando todas as variantes de badge
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-gray-50 rounded-xl">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Variantes de cor</h3>
        <div className="flex gap-3 items-center flex-wrap">
          <MizzBadge variant="primary">Primary</MizzBadge>
          <MizzBadge variant="success">Success</MizzBadge>
          <MizzBadge variant="error">Error</MizzBadge>
          <MizzBadge variant="warning">Warning</MizzBadge>
          <MizzBadge variant="neutral">Neutral</MizzBadge>
          <MizzBadge variant="outline">Outline</MizzBadge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Com ponto indicador</h3>
        <div className="flex gap-3 items-center flex-wrap">
          <MizzBadge variant="success" dot>Online</MizzBadge>
          <MizzBadge variant="error" dot>Offline</MizzBadge>
          <MizzBadge variant="warning" dot>Ocupado</MizzBadge>
          <MizzBadge variant="neutral" dot>Ausente</MizzBadge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Com ícones</h3>
        <div className="flex gap-3 items-center flex-wrap">
          <MizzBadge variant="success" startIcon={<Check size={14} />}>
            Entregue
          </MizzBadge>
          <MizzBadge variant="warning" startIcon={<Clock size={14} />}>
            Pendente
          </MizzBadge>
          <MizzBadge variant="error" startIcon={<AlertCircle size={14} />}>
            Cancelado
          </MizzBadge>
          <MizzBadge variant="primary" startIcon={<Star size={14} />}>
            Destaque
          </MizzBadge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Contadores</h3>
        <div className="flex gap-3 items-center flex-wrap">
          <MizzBadge variant="primary">5</MizzBadge>
          <MizzBadge variant="error">99+</MizzBadge>
          <MizzBadge variant="success">12</MizzBadge>
          <MizzBadge variant="neutral">0</MizzBadge>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Status de pedido</h3>
        <div className="flex gap-3 items-center flex-wrap">
          <MizzBadge variant="warning" startIcon={<Clock size={14} />}>
            Preparando
          </MizzBadge>
          <MizzBadge variant="primary" dot>
            Saiu para entrega
          </MizzBadge>
          <MizzBadge variant="success" startIcon={<Check size={14} />}>
            Entregue
          </MizzBadge>
          <MizzBadge variant="error" startIcon={<AlertCircle size={14} />}>
            Cancelado
          </MizzBadge>
        </div>
      </div>
    </div>
  ),
};

/**
 * Exemplo de uso em contexto real
 */
export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-xl border-2 border-gray-200" style={{ width: '400px' }}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Pedido #1234</h3>
        <MizzBadge variant="success" startIcon={<Check size={14} />}>
          Entregue
        </MizzBadge>
      </div>
      
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Status do pagamento</span>
          <MizzBadge variant="success" dot>Confirmado</MizzBadge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Prioridade</span>
          <MizzBadge variant="warning">Alta</MizzBadge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Categoria</span>
          <MizzBadge variant="outline">Pizzas</MizzBadge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Notificações</span>
          <MizzBadge variant="primary">3</MizzBadge>
        </div>
      </div>
    </div>
  ),
};
