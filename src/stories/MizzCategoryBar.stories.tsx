import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzCategoryBar } from '../app/components/mizz/MizzCategoryBar';

const chipCategories = [
  { value: 'all', label: 'Todos' },
  { value: 'pratos', label: 'Pratos Principais' },
  { value: 'entradas', label: 'Entradas' },
  { value: 'bebidas', label: 'Bebidas' },
  { value: 'sobremesas', label: 'Sobremesas' },
  { value: 'combos', label: 'Combos' },
  { value: 'acompanhamentos', label: 'Acompanhamentos' },
];

const iconCategories = [
  { value: 'burger', label: 'Burger', icon: <span>🍔</span> },
  { value: 'pizza', label: 'Pizza', icon: <span>🍕</span> },
  { value: 'sushi', label: 'Sushi', icon: <span>🍣</span> },
  { value: 'salada', label: 'Salada', icon: <span>🥗</span> },
  { value: 'massa', label: 'Massa', icon: <span>🍝</span> },
  { value: 'churrasco', label: 'Churrasco', icon: <span>🥩</span> },
  { value: 'bebida', label: 'Bebidas', icon: <span>🍺</span> },
  { value: 'sobremesa', label: 'Doces', icon: <span>🍰</span> },
  { value: 'cafe', label: 'Café', icon: <span>☕</span> },
];

const meta = {
  title: 'Food Service/CategoryBar',
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
