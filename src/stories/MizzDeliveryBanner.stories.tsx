import type { Meta, StoryObj } from '@storybook/react';
import { MizzDeliveryBanner } from '../app/components/mizz/MizzDeliveryBanner';

const meta = {
  title: 'Food & Delivery/DeliveryBanner',
  component: MizzDeliveryBanner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'promo'] },
  },
} satisfies Meta<typeof MizzDeliveryBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Entrega em 30-45 min', subtitle: 'Pedido mínimo R$ 20,00', variant: 'default' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const FreeDelivery: Story = {
  args: { title: 'Frete grátis!', subtitle: 'Para pedidos acima de R$ 50', variant: 'success' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const HighDemand: Story = {
  args: { title: 'Alta demanda', subtitle: 'Tempo de entrega pode ser maior', variant: 'warning' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const Promo: Story = {
  args: { title: 'Use PROMO10 e ganhe 10% off', subtitle: 'Válido até hoje', variant: 'promo' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <MizzDeliveryBanner variant="default" title="Entrega em 30-45 min" subtitle="Pedido mínimo R$ 20" />
      <MizzDeliveryBanner variant="success" title="Frete grátis!" subtitle="Pedidos acima de R$ 50" />
      <MizzDeliveryBanner variant="warning" title="Alta demanda" subtitle="Tempo maior que o habitual" />
      <MizzDeliveryBanner variant="promo" title="Cupom PROMO10" subtitle="10% de desconto" />
    </div>
  ),
};
