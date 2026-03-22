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

export const Default: Story = {
  args: {
    title: 'Burger King - Centro',
    address: 'Av. Paulista, 1578 - Bela Vista, São Paulo',
    distance: '1.2 km',
    estimatedTime: '15 min',
    icon: <span className="text-lg">📍</span>,
    action: <MizzButton size="sm" variant="filled">Navegar</MizzButton>,
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const DeliveryDriver: Story = {
  args: {
    title: 'Entregador a caminho',
    address: 'João está a 3 min de você',
    estimatedTime: '3 min',
    icon: <span className="text-lg">🛵</span>,
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};
