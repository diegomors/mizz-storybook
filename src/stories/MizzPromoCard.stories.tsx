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
    title: 'Combo do dia com 20% OFF!',
    description: 'Hambúrguer + Batata + Refrigerante',
    couponCode: 'COMBO20',
    onClick: () => {},
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const HappyHour: Story = {
  args: {
    title: 'Happy Hour',
    description: 'Chopp em dobro das 17h às 20h',
    onClick: () => {},
  },
  render: (args) => (
    <div className="w-96">
      <MizzPromoCard
        {...args}
        className="[background:linear-gradient(135deg,#f59e0b_0%,#d97706_100%)]"
        icon={
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M8 2v4M16 2v4M6 6h12l-1 14H7L6 6z" />
            <path d="M9 10c0 2 3 4 3 4s3-2 3-4" />
          </svg>
        }
      />
    </div>
  ),
};

export const PromoCarousel: Story = {
  name: 'Carrossel de promoções',
  render: () => (
    <div className="flex gap-4 overflow-x-auto w-[500px] pb-2">
      <MizzPromoCard
        title="Combo do dia"
        description="Burger + Batata + Refri"
        couponCode="COMBO20"
        className="min-w-[280px] bg-primary"
        onClick={() => {}}
      />
      <MizzPromoCard
        title="Happy Hour"
        description="Chopp em dobro 17h-20h"
        className="min-w-[280px] [background:linear-gradient(135deg,#f59e0b,#d97706)]"
        onClick={() => {}}
      />
      <MizzPromoCard
        title="Sobremesa grátis"
        description="Em pedidos acima de R$80"
        couponCode="DOCE"
        className="min-w-[280px] [background:linear-gradient(135deg,#7c3aed,#a78bfa)]"
        onClick={() => {}}
      />
    </div>
  ),
};
