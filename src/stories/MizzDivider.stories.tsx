import type { Meta, StoryObj } from '@storybook/react';
import { MizzDivider } from '../app/components/mizz/MizzDivider';

const meta = {
  title: 'Componentes/Divider',
  component: MizzDivider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'], description: 'Orientação' },
    label: { control: 'text', description: 'Texto central' },
  },
} satisfies Meta<typeof MizzDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const WithLabel: Story = {
  args: { label: 'ou' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [(Story) => <div className="flex h-20 items-center gap-4"><span>Esquerda</span><Story /><span>Direita</span></div>],
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => (
    <div className="flex flex-col gap-8 p-8 w-80">
      <div>
        <p className="text-sm text-neutral-500 mb-4">Horizontal</p>
        <MizzDivider />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">Com texto</p>
        <MizzDivider label="ou continue com" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">Vertical</p>
        <div className="flex h-12 items-center gap-4">
          <span className="text-sm">Item A</span>
          <MizzDivider orientation="vertical" />
          <span className="text-sm">Item B</span>
          <MizzDivider orientation="vertical" />
          <span className="text-sm">Item C</span>
        </div>
      </div>
    </div>
  ),
};
