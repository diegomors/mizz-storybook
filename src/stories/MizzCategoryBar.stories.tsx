import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzCategoryBar } from '../app/components/mizz/MizzCategoryBar';

const chipCategories = [
  { value: 'all', label: 'Todos' },
  { value: 'burger', label: 'Hambúrgueres' },
  { value: 'pizza', label: 'Pizzas' },
  { value: 'sushi', label: 'Sushi' },
  { value: 'acai', label: 'Açaí' },
  { value: 'drinks', label: 'Bebidas' },
  { value: 'dessert', label: 'Sobremesas' },
];

const iconCategories = [
  { value: 'burger', label: 'Burger', icon: '🍔' },
  { value: 'pizza', label: 'Pizza', icon: '🍕' },
  { value: 'sushi', label: 'Sushi', icon: '🍣' },
  { value: 'acai', label: 'Açaí', icon: '🫐' },
  { value: 'salad', label: 'Salada', icon: '🥗' },
  { value: 'drink', label: 'Bebidas', icon: '🥤' },
  { value: 'dessert', label: 'Doces', icon: '🍰' },
  { value: 'coffee', label: 'Café', icon: '☕' },
];

const meta = {
  title: 'Food & Delivery/CategoryBar',
  component: MizzCategoryBar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['chip', 'icon'] },
  },
} satisfies Meta<typeof MizzCategoryBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const ChipTemplate = () => {
  const [value, setValue] = useState('all');
  return (
    <div className="w-96">
      <MizzCategoryBar categories={chipCategories} value={value} onChange={setValue} variant="chip" />
    </div>
  );
};

export const Chip: Story = {
  render: () => <ChipTemplate />,
};

const IconTemplate = () => {
  const [value, setValue] = useState('burger');
  return (
    <div className="w-96">
      <MizzCategoryBar categories={iconCategories} value={value} onChange={setValue} variant="icon" />
    </div>
  );
};

export const Icon: Story = {
  render: () => <IconTemplate />,
};
