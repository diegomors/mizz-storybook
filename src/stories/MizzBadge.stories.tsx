import type { Meta, StoryObj } from '@storybook/react';
import { MizzBadge } from '../app/components/mizz/MizzBadge';
import { Bell } from 'lucide-react';

const meta = {
  title: 'Componentes/Badge',
  component: MizzBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'success', 'error'], description: 'Variante' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Tamanho' },
    content: { control: 'text', description: 'Conteúdo (número ou texto)' },
    dot: { control: 'boolean', description: 'Modo ponto (sem conteúdo)' },
    max: { control: 'number', description: 'Valor máximo (ex: 99)' },
    visible: { control: 'boolean', description: 'Visibilidade' },
  },
} satisfies Meta<typeof MizzBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { content: 5, variant: 'primary' },
};

export const WithMax: Story = {
  args: { content: 150, max: 99, variant: 'error' },
};

export const Dot: Story = {
  args: { dot: true, variant: 'error' },
};

export const OnIcon: Story = {
  args: {
    content: 3,
    variant: 'error',
    children: undefined,
  },
  render: (args) => (
    <MizzBadge {...args}>
      <Bell size={24} />
    </MizzBadge>
  ),
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex gap-6 items-center">
        <MizzBadge content={3} variant="primary" />
        <MizzBadge content={3} variant="secondary" />
        <MizzBadge content={3} variant="success" />
        <MizzBadge content={3} variant="error" />
      </div>
      <div className="flex gap-6 items-center">
        <MizzBadge dot variant="primary" />
        <MizzBadge dot variant="error" />
        <MizzBadge content={150} max={99} variant="error" />
      </div>
      <div className="flex gap-8 items-center">
        <MizzBadge content={3} variant="error"><Bell size={24} /></MizzBadge>
        <MizzBadge dot variant="error"><Bell size={24} /></MizzBadge>
        <MizzBadge content={99} variant="primary" max={99}><Bell size={24} /></MizzBadge>
      </div>
    </div>
  ),
};
