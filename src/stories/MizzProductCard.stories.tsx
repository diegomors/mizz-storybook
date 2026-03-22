import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzProductCard } from '../app/components/mizz/MizzProductCard';
import { MizzRating } from '../app/components/mizz/MizzRating';
import { MizzQuantitySelector } from '../app/components/mizz/MizzQuantitySelector';
import { MizzIconButton } from '../app/components/mizz/MizzIconButton';

const meta = {
  title: 'Food & Delivery/ProductCard',
  component: MizzProductCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['vertical', 'horizontal'] },
    unavailable: { control: 'boolean' },
  },
} satisfies Meta<typeof MizzProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    title: 'Hambúrguer Artesanal',
    description: 'Pão brioche, blend 180g, queijo cheddar, bacon crocante',
    price: 'R$ 32,90',
    originalPrice: 'R$ 42,90',
    badge: '-24%',
    variant: 'vertical',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
  },
  decorators: [(Story) => <div className="w-56"><Story /></div>],
};

export const Horizontal: Story = {
  args: {
    title: 'Pizza Margherita',
    description: 'Molho de tomate, mozzarella fresca, manjericão',
    price: 'R$ 45,00',
    variant: 'horizontal',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop',
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const Unavailable: Story = {
  args: {
    title: 'Açaí Bowl',
    description: 'Açaí, banana, granola, mel',
    price: 'R$ 22,00',
    unavailable: true,
    variant: 'vertical',
  },
  decorators: [(Story) => <div className="w-56"><Story /></div>],
};

const WithActionsTemplate = () => {
  const [qty, setQty] = useState(0);
  return (
    <div className="w-56">
      <MizzProductCard
        title="Suco Natural"
        description="Laranja, cenoura e gengibre"
        price="R$ 12,90"
        originalPrice="R$ 15,00"
        badge="Novo"
        rating={<MizzRating value={4.5} readOnly size="sm" showValue />}
        action={
          qty === 0 ? (
            <MizzIconButton
              variant="filled"
              size="sm"
              icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>}
              aria-label="Adicionar"
              onClick={() => setQty(1)}
            />
          ) : (
            <MizzQuantitySelector value={qty} onChange={setQty} size="sm" min={0} />
          )
        }
        variant="vertical"
      />
    </div>
  );
};

export const WithActions: Story = {
  name: 'Com ações (add/quantity)',
  render: () => <WithActionsTemplate />,
};

export const Grid: Story = {
  name: 'Grid de produtos',
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[500px]">
      {[
        { title: 'Hambúrguer', price: 'R$ 32,90', badge: 'Popular' },
        { title: 'Pizza', price: 'R$ 45,00', originalPrice: 'R$ 55,00' },
        { title: 'Açaí Bowl', price: 'R$ 22,00' },
        { title: 'Suco Natural', price: 'R$ 12,90', badge: 'Novo' },
      ].map((p) => (
        <MizzProductCard key={p.title} {...p} variant="vertical" onClick={() => {}} />
      ))}
    </div>
  ),
};
