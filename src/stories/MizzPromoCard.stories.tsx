import type { Meta, StoryObj } from '@storybook/react';
import { MizzPromoCard } from '../app/components/mizz/MizzPromoCard';

const meta = {
  title: 'Food & Delivery/PromoCard',
  component: MizzPromoCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MizzPromoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '20% OFF no primeiro pedido!',
    description: 'Use o cupom e aproveite',
    couponCode: 'BEMVINDO20',
    onClick: () => {},
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const WithGradient: Story = {
  args: {
    title: 'Frete grátis',
    description: 'Em pedidos acima de R$ 50',
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    onClick: () => {},
  },
  render: (args) => (
    <div className="w-96">
      <MizzPromoCard
        {...args}
        className="[background:linear-gradient(135deg,#667eea_0%,#764ba2_100%)]"
      />
    </div>
  ),
};

export const PromoCarousel: Story = {
  name: 'Carrossel de promoções',
  render: () => (
    <div className="flex gap-4 overflow-x-auto w-[500px] pb-2">
      <MizzPromoCard
        title="20% OFF"
        description="Primeiro pedido"
        couponCode="BEMVINDO20"
        className="min-w-[280px] bg-primary"
        onClick={() => {}}
      />
      <MizzPromoCard
        title="Frete grátis"
        description="Pedidos +R$50"
        className="min-w-[280px] [background:linear-gradient(135deg,#16a34a,#22c55e)]"
        onClick={() => {}}
      />
      <MizzPromoCard
        title="Combo especial"
        description="Burger + Batata + Refri"
        couponCode="COMBO30"
        className="min-w-[280px] [background:linear-gradient(135deg,#7c3aed,#a78bfa)]"
        onClick={() => {}}
      />
    </div>
  ),
};
