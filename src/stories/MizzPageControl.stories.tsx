import type { Meta, StoryObj } from '@storybook/react';
import { MizzPageControl } from '../app/components/mizz/MizzPageControl';
import { useState } from 'react';

const meta = {
  title: 'Componentes/PageControl',
  component: MizzPageControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    count: { control: { type: 'number', min: 1, max: 10 }, description: 'Número de páginas' },
    selected: { control: { type: 'number', min: 1, max: 10 }, description: 'Página selecionada' },
  },
} satisfies Meta<typeof MizzPageControl>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Properties ---

export const Selected1: Story = {
  name: 'selected: 1 (default)',
  args: {
    count: 3,
    selected: 1,
  },
};

export const Selected2: Story = {
  name: 'selected: 2',
  args: {
    count: 3,
    selected: 2,
  },
};

export const Selected3: Story = {
  name: 'selected: 3',
  args: {
    count: 3,
    selected: 3,
  },
};

// --- Visão geral ---

export const Properties: Story = {
  name: 'Properties',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <p className="text-xs text-neutral-500 mb-4">selected: 1 (default)</p>
        <MizzPageControl count={3} selected={1} />
      </div>
      <div>
        <p className="text-xs text-neutral-500 mb-4">selected: 2</p>
        <MizzPageControl count={3} selected={2} />
      </div>
      <div>
        <p className="text-xs text-neutral-500 mb-4">selected: 3</p>
        <MizzPageControl count={3} selected={3} />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  name: 'Interactive',
  render: () => {
    const [page, setPage] = useState(1);

    return (
      <div className="flex flex-col items-center gap-6 p-8">
        <div className="w-64 h-32 flex items-center justify-center rounded-lg bg-neutral-10 text-neutral-500">
          Página {page}
        </div>
        <MizzPageControl count={3} selected={page} onChange={setPage} />
      </div>
    );
  },
};
