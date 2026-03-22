import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzRating } from '../app/components/mizz/MizzRating';

const meta = {
  title: 'Componentes/Rating',
  component: MizzRating,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 5, step: 0.5 } },
    max: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    readOnly: { control: 'boolean' },
    showValue: { control: 'boolean' },
    reviewCount: { control: 'number' },
  },
} satisfies Meta<typeof MizzRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 4, readOnly: true, showValue: true },
};

export const WithReviewCount: Story = {
  args: { value: 4.5, readOnly: true, showValue: true, reviewCount: 234 },
};

export const HalfStar: Story = {
  args: { value: 3.5, readOnly: true, showValue: true },
};

const InteractiveTemplate = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="flex flex-col gap-2 items-center">
      <MizzRating value={value} onChange={setValue} size="lg" />
      <span className="text-sm text-muted-foreground">Selecionado: {value}</span>
    </div>
  );
};

export const Interactive: Story = {
  name: 'Interativo',
  render: () => <InteractiveTemplate />,
};

export const Sizes: Story = {
  name: 'Tamanhos',
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <MizzRating value={4} size="sm" readOnly showValue />
      <MizzRating value={4} size="md" readOnly showValue />
      <MizzRating value={4} size="lg" readOnly showValue />
    </div>
  ),
};
