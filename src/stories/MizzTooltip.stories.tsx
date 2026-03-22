import type { Meta, StoryObj } from '@storybook/react';
import { MizzTooltip } from '../app/components/mizz/MizzTooltip';
import { MizzIconButton } from '../app/components/mizz/MizzIconButton';
import { MizzButton } from '../app/components/mizz/MizzButton';

const meta = {
  title: 'Componentes/Tooltip',
  component: MizzTooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    content: { control: 'text' },
  },
} satisfies Meta<typeof MizzTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Adicionar ao carrinho',
    children: <MizzButton>Hover me</MizzButton>,
    position: 'top',
  },
};

export const AllPositions: Story = {
  name: 'Posições',
  render: () => (
    <div className="flex gap-8 p-16">
      <MizzTooltip content="Top" position="top"><MizzButton variant="outlined" size="sm">Top</MizzButton></MizzTooltip>
      <MizzTooltip content="Bottom" position="bottom"><MizzButton variant="outlined" size="sm">Bottom</MizzButton></MizzTooltip>
      <MizzTooltip content="Left" position="left"><MizzButton variant="outlined" size="sm">Left</MizzButton></MizzTooltip>
      <MizzTooltip content="Right" position="right"><MizzButton variant="outlined" size="sm">Right</MizzButton></MizzTooltip>
    </div>
  ),
};
