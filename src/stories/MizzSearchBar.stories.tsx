import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzSearchBar } from '../app/components/mizz/MizzSearchBar';

const meta = {
  title: 'Componentes/SearchBar',
  component: MizzSearchBar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof MizzSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const [value, setValue] = useState('');
  return (
    <div className="w-80">
      <MizzSearchBar
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        onSearch={(v) => alert(`Buscar: ${v}`)}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: { placeholder: 'Buscar restaurantes e pratos...' },
};

export const Loading: Story = {
  render: (args) => <Template {...args} />,
  args: { placeholder: 'Buscando...', loading: true },
};
