import type { Meta, StoryObj } from '@storybook/react';
import { MizzProfileCard } from '../app/components/mizz/MizzProfileCard';

const meta = {
  title: 'Componentes/ProfileCard',
  component: MizzProfileCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MizzProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Lalio Bueno',
    initials: 'LB',
    editable: true,
    onEditPhoto: () => {},
  },
};

export const WithPhoto: Story = {
  args: {
    name: 'Bruno Mario',
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    editable: true,
    onEditPhoto: () => {},
    subtitle: 'bruno@email.com',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'Mauro Topajós',
    initials: 'MT',
    subtitle: 'Administrador',
  },
};
