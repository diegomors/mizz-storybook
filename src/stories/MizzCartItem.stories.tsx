import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzCartItem } from '../app/components/mizz/MizzCartItem';
import { MizzQuantitySelector } from '../app/components/mizz/MizzQuantitySelector';

const meta = {
  title: 'Food & Delivery/CartItem',
  component: MizzCartItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MizzCartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const CartItemTemplate = () => {
  const [qty, setQty] = useState(2);
  return (
    <div className="w-96">
      <MizzCartItem
        image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop"
        title="Hambúrguer Artesanal"
        description="Sem cebola, extra queijo cheddar"
        price="R$ 65,80"
        quantityControl={<MizzQuantitySelector value={qty} onChange={setQty} size="sm" min={1} />}
        onRemove={() => alert('Remover!')}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <CartItemTemplate />,
};

export const CartList: Story = {
  name: 'Lista do carrinho',
  render: () => (
    <div className="w-96 p-4 bg-card rounded-xl border border-border">
      <h3 className="text-base font-medium text-card-foreground mb-3">Seu pedido</h3>
      <MizzCartItem
        title="Hambúrguer Artesanal"
        description="Sem cebola"
        price="R$ 32,90"
        onRemove={() => {}}
      />
      <MizzCartItem
        title="Batata Frita G"
        price="R$ 18,00"
        onRemove={() => {}}
      />
      <MizzCartItem
        title="Refrigerante 350ml"
        price="R$ 8,00"
        onRemove={() => {}}
      />
      <div className="flex justify-between pt-3 mt-1 border-t border-border">
        <span className="text-sm font-medium text-card-foreground">Total</span>
        <span className="text-base font-bold text-foreground">R$ 58,90</span>
      </div>
    </div>
  ),
};
