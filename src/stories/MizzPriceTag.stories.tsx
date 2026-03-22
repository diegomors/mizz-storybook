import type { Meta, StoryObj } from '@storybook/react';
import { MizzPriceTag } from '../app/components/mizz/MizzPriceTag';

const meta = {
  title: 'Componentes/PriceTag',
  component: MizzPriceTag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    price: { control: 'number' },
    originalPrice: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    showDiscount: { control: 'boolean' },
    currency: { control: 'text' },
  },
} satisfies Meta<typeof MizzPriceTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { price: 29.90 },
};

export const WithDiscount: Story = {
  args: { price: 19.90, originalPrice: 29.90, showDiscount: true },
};

export const AllSizes: Story = {
  name: 'Tamanhos',
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <MizzPriceTag price={29.90} originalPrice={39.90} showDiscount size="sm" />
      <MizzPriceTag price={29.90} originalPrice={39.90} showDiscount size="md" />
      <MizzPriceTag price={29.90} originalPrice={39.90} showDiscount size="lg" />
    </div>
  ),
};

export const DifferentCurrencies: Story = {
  name: 'Moedas',
  render: () => (
    <div className="flex flex-col gap-3 p-8">
      <MizzPriceTag price={29.90} currency="R$" />
      <MizzPriceTag price={9.99} currency="$" />
      <MizzPriceTag price={8.50} currency="€" />
    </div>
  ),
};
