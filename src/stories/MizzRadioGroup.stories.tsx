import type { Meta, StoryObj } from '@storybook/react';
import { MizzRadioGroup } from '../app/components/mizz/MizzRadioGroup';
import { useState } from 'react';

/**
 * # MizzRadioGroup
 * 
 * Componente de grupo de radio buttons do Design System Mizz com suporte
 * completo a acessibilidade e diferentes layouts.
 * 
 * ## Recursos de Acessibilidade
 * - Marcação semântica com role="radiogroup"
 * - Labels associados corretamente a cada opção
 * - Suporte a `aria-required`, `aria-invalid` e `aria-describedby`
 * - Navegação completa por teclado (setas direcionais)
 * - Estados de foco visíveis
 * - Compatível com leitores de tela
 */
const meta = {
  title: 'Mizz/RadioGroup',
  component: MizzRadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Grupo de radio buttons para seleção única entre múltiplas opções.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Orientação do layout',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Campo obrigatório',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MizzRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const deliveryOptions = [
  { value: 'delivery', label: 'Entrega' },
  { value: 'pickup', label: 'Retirada' },
  { value: 'dine-in', label: 'Comer no local' },
];

export const Default: Story = {
  args: {
    name: 'delivery-method',
    label: 'Método de entrega',
    options: deliveryOptions,
  },
};

export const WithDescription: Story = {
  args: {
    name: 'payment-method',
    label: 'Forma de pagamento',
    options: [
      { 
        value: 'credit', 
        label: 'Cartão de crédito',
        description: 'Parcelamento em até 12x sem juros'
      },
      { 
        value: 'debit', 
        label: 'Cartão de débito',
        description: 'Pagamento à vista com desconto'
      },
      { 
        value: 'pix', 
        label: 'PIX',
        description: 'Aprovação instantânea'
      },
      { 
        value: 'money', 
        label: 'Dinheiro',
        description: 'Pagar na entrega'
      },
    ],
  },
};

export const Required: Story = {
  args: {
    name: 'size',
    label: 'Tamanho da pizza',
    required: true,
    options: [
      { value: 'small', label: 'Pequena (25cm)' },
      { value: 'medium', label: 'Média (30cm)' },
      { value: 'large', label: 'Grande (35cm)' },
      { value: 'xlarge', label: 'Extra grande (40cm)' },
    ],
  },
};

export const WithError: Story = {
  args: {
    name: 'terms',
    label: 'Aceite os termos',
    required: true,
    error: 'Você precisa aceitar os termos para continuar',
    options: [
      { value: 'accept', label: 'Aceito os termos e condições' },
      { value: 'decline', label: 'Não aceito' },
    ],
  },
};

export const WithDisabledOption: Story = {
  args: {
    name: 'subscription',
    label: 'Plano de assinatura',
    options: [
      { value: 'free', label: 'Gratuito', description: 'Funcionalidades básicas' },
      { value: 'pro', label: 'Pro', description: 'Funcionalidades avançadas' },
      { value: 'enterprise', label: 'Enterprise', description: 'Em breve', disabled: true },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    name: 'rating',
    label: 'Avaliação',
    orientation: 'horizontal',
    options: [
      { value: '1', label: '⭐' },
      { value: '2', label: '⭐⭐' },
      { value: '3', label: '⭐⭐⭐' },
      { value: '4', label: '⭐⭐⭐⭐' },
      { value: '5', label: '⭐⭐⭐⭐⭐' },
    ],
  },
};

/**
 * Exemplo controlado com estado
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('medium');
    
    return (
      <div className="flex flex-col gap-4">
        <MizzRadioGroup
          name="controlled-size"
          label="Tamanho da pizza"
          value={value}
          onChange={setValue}
          options={[
            { value: 'small', label: 'Pequena', description: '4 fatias' },
            { value: 'medium', label: 'Média', description: '8 fatias' },
            { value: 'large', label: 'Grande', description: '12 fatias' },
          ]}
        />
        
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Valor selecionado:</strong> {value}
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Exemplo de formulário completo
 */
export const FormExample: Story = {
  render: () => {
    const [deliveryMethod, setDeliveryMethod] = useState('delivery');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      
      if (!paymentMethod) {
        newErrors.payment = 'Selecione uma forma de pagamento';
      }
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert(`Pedido confirmado!\nEntrega: ${deliveryMethod}\nPagamento: ${paymentMethod}`);
      }
    };

    return (
      <div className="flex flex-col gap-6 p-8 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900">Finalizar pedido</h3>
        
        <MizzRadioGroup
          name="delivery"
          label="Método de entrega"
          value={deliveryMethod}
          onChange={setDeliveryMethod}
          options={[
            { 
              value: 'delivery', 
              label: 'Entrega',
              description: 'Receba em casa em até 45 minutos'
            },
            { 
              value: 'pickup', 
              label: 'Retirada',
              description: 'Retire na loja em 30 minutos'
            },
            { 
              value: 'dine-in', 
              label: 'Comer no local',
              description: 'Reserve uma mesa'
            },
          ]}
        />
        
        <MizzRadioGroup
          name="payment"
          label="Forma de pagamento"
          value={paymentMethod}
          onChange={(val) => {
            setPaymentMethod(val);
            setErrors({});
          }}
          required
          error={errors.payment}
          options={[
            { 
              value: 'credit', 
              label: 'Cartão de crédito',
              description: 'Até 12x sem juros'
            },
            { 
              value: 'debit', 
              label: 'Cartão de débito',
              description: 'À vista com desconto'
            },
            { 
              value: 'pix', 
              label: 'PIX',
              description: 'Aprovação instantânea'
            },
            { 
              value: 'money', 
              label: 'Dinheiro',
              description: 'Pagar na entrega',
              disabled: deliveryMethod !== 'delivery'
            },
          ]}
        />
        
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-3 bg-[#ff5c00] text-white rounded-lg font-medium hover:bg-[#e55200] transition-colors"
        >
          Confirmar pedido
        </button>
      </div>
    );
  },
};

/**
 * Exemplo mostrando todas as variações
 */
export const AllVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 bg-gray-50 rounded-xl" style={{ width: '600px' }}>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Vertical (padrão)</h3>
        <MizzRadioGroup
          name="vertical-example"
          label="Escolha uma opção"
          options={[
            { value: 'opt1', label: 'Opção 1' },
            { value: 'opt2', label: 'Opção 2' },
            { value: 'opt3', label: 'Opção 3' },
          ]}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Horizontal</h3>
        <MizzRadioGroup
          name="horizontal-example"
          label="Escolha uma opção"
          orientation="horizontal"
          options={[
            { value: 'opt1', label: 'Opção 1' },
            { value: 'opt2', label: 'Opção 2' },
            { value: 'opt3', label: 'Opção 3' },
          ]}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Com descrições</h3>
        <MizzRadioGroup
          name="description-example"
          label="Escolha um plano"
          options={[
            { 
              value: 'basic', 
              label: 'Básico',
              description: 'Para iniciantes'
            },
            { 
              value: 'premium', 
              label: 'Premium',
              description: 'Recursos avançados'
            },
          ]}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Com erro</h3>
        <MizzRadioGroup
          name="error-example"
          label="Campo obrigatório"
          required
          error="Este campo é obrigatório"
          options={[
            { value: 'yes', label: 'Sim' },
            { value: 'no', label: 'Não' },
          ]}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Com opção desabilitada</h3>
        <MizzRadioGroup
          name="disabled-example"
          label="Selecione uma opção"
          options={[
            { value: 'opt1', label: 'Opção disponível' },
            { value: 'opt2', label: 'Opção desabilitada', disabled: true },
            { value: 'opt3', label: 'Outra opção disponível' },
          ]}
        />
      </div>
    </div>
  ),
};
