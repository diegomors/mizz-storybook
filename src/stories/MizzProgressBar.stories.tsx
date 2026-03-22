import type { Meta, StoryObj } from '@storybook/react';
import { MizzProgressBar } from '../app/components/mizz/MizzProgressBar';

const meta = {
  title: 'Componentes/ProgressBar',
  component: MizzProgressBar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 }, description: 'Valor (0-100)' },
    variant: { control: 'select', options: ['primary', 'success', 'error'], description: 'Variante' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Tamanho' },
    showValue: { control: 'boolean', description: 'Exibir valor em texto' },
  },
} satisfies Meta<typeof MizzProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 60, variant: 'primary' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const WithValue: Story = {
  args: { value: 75, showValue: true, variant: 'primary' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Indeterminate: Story = {
  args: { variant: 'primary' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => (
    <div className="flex flex-col gap-8 p-8 w-80">
      <div>
        <p className="text-sm text-neutral-500 mb-2">Primary (60%)</p>
        <MizzProgressBar value={60} variant="primary" showValue />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Success (100%)</p>
        <MizzProgressBar value={100} variant="success" showValue />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Error (30%)</p>
        <MizzProgressBar value={30} variant="error" showValue />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Indeterminate</p>
        <MizzProgressBar variant="primary" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-2">Tamanhos</p>
        <div className="flex flex-col gap-3">
          <MizzProgressBar value={50} size="sm" />
          <MizzProgressBar value={50} size="md" />
          <MizzProgressBar value={50} size="lg" />
        </div>
      </div>
    </div>
  ),
};
