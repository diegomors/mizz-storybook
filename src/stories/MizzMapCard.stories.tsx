import type { Meta, StoryObj } from '@storybook/react';
import { MizzMapCard } from '../app/components/mizz/MizzMapCard';
import { MizzButton } from '../app/components/mizz/MizzButton';

const meta = {
  title: 'Food & Delivery/MapCard',
  component: MizzMapCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MizzMapCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const restaurantIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2l-4 6-4-6v13a4 4 0 004 4h0a4 4 0 004-4z" />
  </svg>
);

export const Default: Story = {
  args: {
    title: 'Restaurante Forno Mágico',
    address: 'Av. Paulista, 1578 - Bela Vista, São Paulo',
    distance: '1.2 km',
    estimatedTime: '15 min',
    icon: restaurantIcon,
    action: <MizzButton size="sm" variant="filled">Como chegar</MizzButton>,
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const Estabelecimento: Story = {
  name: 'Estabelecimento',
  args: {
    title: 'Cantina Buono',
    address: 'Rua das Flores, 234 - Centro',
    distance: '800 m',
    estimatedTime: '10 min a pé',
    icon: restaurantIcon,
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};
