import type { Meta, StoryObj } from '@storybook/react';
import { MizzAvatar } from '../app/components/mizz/MizzAvatar';

const meta = {
  title: 'Componentes/Avatar',
  component: MizzAvatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'], description: 'Tamanho' },
    src: { control: 'text', description: 'URL da imagem' },
    alt: { control: 'text', description: 'Texto alternativo' },
    initials: { control: 'text', description: 'Iniciais (fallback)' },
  },
} satisfies Meta<typeof MizzAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Usuário',
    size: 'md',
  },
};

export const WithInitials: Story = {
  args: { initials: 'DM', size: 'md' },
};

export const FallbackIcon: Story = {
  args: { size: 'md' },
};

export const BrokenImage: Story = {
  args: { src: 'https://invalid-url.com/broken.jpg', initials: 'FB', alt: 'Fallback' },
};

export const AllSizes: Story = {
  name: 'Tamanhos',
  render: () => (
    <div className="flex items-end gap-4 p-8">
      <MizzAvatar size="sm" initials="SM" />
      <MizzAvatar size="md" initials="MD" />
      <MizzAvatar size="lg" initials="LG" />
      <MizzAvatar size="xl" initials="XL" />
    </div>
  ),
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <MizzAvatar src="https://i.pravatar.cc/150?img=5" alt="Com imagem" size="lg" />
      <MizzAvatar initials="DM" size="lg" />
      <MizzAvatar size="lg" />
    </div>
  ),
};
