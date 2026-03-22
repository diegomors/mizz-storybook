import type { Meta, StoryObj } from '@storybook/react';
import { MizzSkeleton } from '../app/components/mizz/MizzSkeleton';

const meta = {
  title: 'Componentes/Skeleton',
  component: MizzSkeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'circular', 'rectangular', 'rounded'], description: 'Formato' },
    width: { control: 'text', description: 'Largura' },
    height: { control: 'text', description: 'Altura' },
  },
} satisfies Meta<typeof MizzSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: { variant: 'text', width: '200px' },
};

export const Circular: Story = {
  args: { variant: 'circular', width: '48px', height: '48px' },
};

export const Rectangular: Story = {
  args: { variant: 'rectangular', width: '200px', height: '120px' },
};

export const Rounded: Story = {
  args: { variant: 'rounded', width: '200px', height: '120px' },
};

export const CardSkeleton: Story = {
  name: 'Card Skeleton (composição)',
  render: () => (
    <div className="flex flex-col gap-4 p-6 w-72 border border-neutral-30 rounded-xl">
      <MizzSkeleton variant="rounded" height="140px" />
      <div className="flex items-center gap-3">
        <MizzSkeleton variant="circular" width="40px" height="40px" />
        <div className="flex-1 flex flex-col gap-2">
          <MizzSkeleton variant="text" width="80%" />
          <MizzSkeleton variant="text" width="60%" />
        </div>
      </div>
      <MizzSkeleton variant="text" />
      <MizzSkeleton variant="text" width="70%" />
    </div>
  ),
};
