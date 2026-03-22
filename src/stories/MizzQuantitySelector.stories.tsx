import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzQuantitySelector } from '../app/components/mizz/MizzQuantitySelector';

const meta = {
  title: 'Componentes/QuantitySelector',
  component: MizzQuantitySelector,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    min: { control: 'number' },
    max: { control: 'number' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof MizzQuantitySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const [value, setValue] = useState(args.value ?? 1);
  return <MizzQuantitySelector {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: { value: 1, min: 0, max: 10 },
};

export const Small: Story = {
  render: (args) => <Template {...args} />,
  args: { value: 1, size: 'sm' },
};

export const Loading: Story = {
  render: (args) => <Template {...args} />,
  args: { value: 2, loading: true },
};

export const WithMax: Story = {
  render: (args) => <Template {...args} />,
  args: { value: 5, max: 5 },
};
