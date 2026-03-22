import type { Meta, StoryObj } from '@storybook/react';
import {
  MizzCard,
  MizzCardHeader,
  MizzCardTitle,
  MizzCardDescription,
  MizzCardContent,
  MizzCardFooter,
} from '../app/components/mizz/MizzCard';
import { MizzButton } from '../app/components/mizz/MizzButton';
import { MizzBadge } from '../app/components/mizz/MizzBadge';

/**
 * # MizzCard
 * 
 * Componente de card do Design System Mizz com suporte a diferentes variantes
 * e modo interativo com acessibilidade completa.
 * 
 * ## Recursos de Acessibilidade
 * - Cards interativos são focáveis via teclado (tabindex="0")
 * - Indicador visual de foco com anel de destaque
 * - Role "button" para cards clicáveis
 * - Compatível com leitores de tela
 */
const meta = {
  title: 'Mizz/Card',
  component: MizzCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de card flexível com header, conteúdo e footer customizáveis.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Variante visual do card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    interactive: {
      control: 'boolean',
      description: 'Torna o card interativo com efeitos de hover e foco',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MizzCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MizzCard>
      <MizzCardHeader>
        <MizzCardTitle>Título do Card</MizzCardTitle>
        <MizzCardDescription>
          Esta é uma descrição do card que fornece mais contexto sobre o conteúdo.
        </MizzCardDescription>
      </MizzCardHeader>
      <MizzCardContent>
        <p className="text-gray-700">
          Conteúdo principal do card. Aqui você pode adicionar qualquer elemento ou componente.
        </p>
      </MizzCardContent>
      <MizzCardFooter>
        <MizzButton variant="primary">Ação principal</MizzButton>
        <MizzButton variant="ghost">Cancelar</MizzButton>
      </MizzCardFooter>
    </MizzCard>
  ),
};

export const Outlined: Story = {
  render: () => (
    <MizzCard variant="outlined">
      <MizzCardHeader>
        <MizzCardTitle>Card com borda</MizzCardTitle>
        <MizzCardDescription>
          Este card possui uma borda definida ao redor.
        </MizzCardDescription>
      </MizzCardHeader>
      <MizzCardContent>
        <p className="text-gray-700">
          Ideal para interfaces que precisam de mais separação visual entre elementos.
        </p>
      </MizzCardContent>
    </MizzCard>
  ),
};

export const Elevated: Story = {
  render: () => (
    <MizzCard variant="elevated">
      <MizzCardHeader>
        <MizzCardTitle>Card elevado</MizzCardTitle>
        <MizzCardDescription>
          Este card possui sombra para dar sensação de profundidade.
        </MizzCardDescription>
      </MizzCardHeader>
      <MizzCardContent>
        <p className="text-gray-700">
          Perfeito para destacar elementos importantes na interface.
        </p>
      </MizzCardContent>
    </MizzCard>
  ),
};

export const Interactive: Story = {
  render: () => (
    <MizzCard 
      variant="outlined" 
      interactive
      onClick={() => alert('Card clicado!')}
    >
      <MizzCardHeader>
        <MizzCardTitle>Card interativo</MizzCardTitle>
        <MizzCardDescription>
          Clique neste card para interagir com ele.
        </MizzCardDescription>
      </MizzCardHeader>
      <MizzCardContent>
        <p className="text-gray-700">
          Este card possui estados de hover, foco e active, além de ser acessível via teclado.
        </p>
      </MizzCardContent>
    </MizzCard>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <MizzCard variant="outlined">
      <MizzCardHeader>
        <div className="flex items-center justify-between">
          <MizzCardTitle>Pedido #1234</MizzCardTitle>
          <MizzBadge variant="success">Entregue</MizzBadge>
        </div>
        <MizzCardDescription>
          Pedido realizado em 15 de março de 2026
        </MizzCardDescription>
      </MizzCardHeader>
      <MizzCardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">2x Pizza Margherita</span>
            <span className="font-medium">R$ 89,90</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">1x Refrigerante</span>
            <span className="font-medium">R$ 8,00</span>
          </div>
          <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
            <span>Total</span>
            <span>R$ 97,90</span>
          </div>
        </div>
      </MizzCardContent>
      <MizzCardFooter className="gap-2">
        <MizzButton variant="outline" className="flex-1">Ver detalhes</MizzButton>
        <MizzButton variant="primary" className="flex-1">Pedir novamente</MizzButton>
      </MizzCardFooter>
    </MizzCard>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <MizzCard variant="elevated" interactive>
      <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 rounded-t-2xl flex items-center justify-center">
        <span className="text-6xl">🍕</span>
      </div>
      <MizzCardHeader>
        <div className="flex items-center justify-between">
          <MizzCardTitle>Pizza Margherita</MizzCardTitle>
          <MizzBadge variant="primary">Novo</MizzBadge>
        </div>
        <MizzCardDescription>
          Molho de tomate, mussarela, manjericão fresco e azeite
        </MizzCardDescription>
      </MizzCardHeader>
      <MizzCardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#ff5c00]">R$ 44,90</span>
          <span className="text-sm text-gray-500">Serve 2 pessoas</span>
        </div>
      </MizzCardContent>
      <MizzCardFooter>
        <MizzButton variant="primary" className="w-full">
          Adicionar ao carrinho
        </MizzButton>
      </MizzCardFooter>
    </MizzCard>
  ),
};

/**
 * Exemplo mostrando todas as variantes lado a lado
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-gray-50 rounded-xl" style={{ width: '100%', maxWidth: '1200px' }}>
      <h3 className="text-lg font-semibold text-gray-900">Variantes de Card</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MizzCard>
          <MizzCardHeader>
            <MizzCardTitle>Default</MizzCardTitle>
            <MizzCardDescription>
              Card padrão sem borda ou sombra
            </MizzCardDescription>
          </MizzCardHeader>
          <MizzCardContent>
            <p className="text-sm text-gray-700">
              Conteúdo do card default
            </p>
          </MizzCardContent>
        </MizzCard>

        <MizzCard variant="outlined">
          <MizzCardHeader>
            <MizzCardTitle>Outlined</MizzCardTitle>
            <MizzCardDescription>
              Card com borda definida
            </MizzCardDescription>
          </MizzCardHeader>
          <MizzCardContent>
            <p className="text-sm text-gray-700">
              Conteúdo do card outlined
            </p>
          </MizzCardContent>
        </MizzCard>

        <MizzCard variant="elevated">
          <MizzCardHeader>
            <MizzCardTitle>Elevated</MizzCardTitle>
            <MizzCardDescription>
              Card com sombra elevada
            </MizzCardDescription>
          </MizzCardHeader>
          <MizzCardContent>
            <p className="text-sm text-gray-700">
              Conteúdo do card elevated
            </p>
          </MizzCardContent>
        </MizzCard>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mt-4">Cards Interativos</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MizzCard variant="outlined" interactive>
          <MizzCardHeader>
            <MizzCardTitle>Card Clicável</MizzCardTitle>
            <MizzCardDescription>
              Passe o mouse ou use Tab para focar
            </MizzCardDescription>
          </MizzCardHeader>
          <MizzCardContent>
            <p className="text-sm text-gray-700">
              Este card é totalmente interativo e acessível
            </p>
          </MizzCardContent>
        </MizzCard>

        <MizzCard variant="elevated" interactive>
          <MizzCardHeader>
            <MizzCardTitle>Com Elevação</MizzCardTitle>
            <MizzCardDescription>
              Elevação aumenta no hover
            </MizzCardDescription>
          </MizzCardHeader>
          <MizzCardContent>
            <p className="text-sm text-gray-700">
              Efeito de profundidade dinâmica
            </p>
          </MizzCardContent>
        </MizzCard>
      </div>
    </div>
  ),
};
