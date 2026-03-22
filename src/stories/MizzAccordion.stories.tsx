import type { Meta, StoryObj } from '@storybook/react';
import { MizzAccordion } from '../app/components/mizz/MizzAccordion';

const faqItems = [
  { value: 'delivery', title: 'Qual o prazo de entrega?', content: 'O prazo de entrega varia de 30 a 60 minutos, dependendo da distância e do preparo do pedido.' },
  { value: 'payment', title: 'Quais formas de pagamento?', content: 'Aceitamos cartão de crédito, débito, PIX e vale-refeição. Pagamento na entrega disponível para pedidos acima de R$ 30.' },
  { value: 'cancel', title: 'Posso cancelar meu pedido?', content: 'Sim, você pode cancelar até 5 minutos após a confirmação. Após o preparo iniciar, o cancelamento não é mais possível.' },
  { value: 'allergy', title: 'E se eu tiver alergias alimentares?', content: 'Todos os pratos possuem informações sobre alérgenos. Você pode adicionar observações especiais ao seu pedido.' },
];

const meta = {
  title: 'Componentes/Accordion',
  component: MizzAccordion,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['single', 'multiple'] },
  },
} satisfies Meta<typeof MizzAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: { items: faqItems, type: 'single' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const Multiple: Story = {
  args: { items: faqItems, type: 'multiple', defaultValue: ['delivery'] },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};
