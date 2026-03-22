import type { Meta, StoryObj } from '@storybook/react';
import { MizzSpinner } from '../app/components/mizz/MizzSpinner';

const meta = {
  title: 'Componentes/Spinner',
  component: MizzSpinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Tamanho' },
    label: { control: 'text', description: 'Rótulo acessível' },
  },
} satisfies Meta<typeof MizzSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 'md' },
};

export const AllSizes: Story = {
  name: 'Tamanhos',
  render: () => (
    <div className="flex items-center gap-6 p-8">
      <div className="flex flex-col items-center gap-2">
        <MizzSpinner size="sm" />
        <span className="text-xs text-neutral-500">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MizzSpinner size="md" />
        <span className="text-xs text-neutral-500">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MizzSpinner size="lg" />
        <span className="text-xs text-neutral-500">lg</span>
      </div>
    </div>
  ),
};
