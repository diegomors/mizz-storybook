import type { Meta, StoryObj } from '@storybook/react';
import { MizzEstablishmentItem } from '../app/components/mizz/MizzEstablishmentItem';

const meta = {
  title: 'Componentes/EstablishmentItem',
  component: MizzEstablishmentItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MizzEstablishmentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Ícone de restaurante/food service
const storeIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2l-4 6-4-6v13a4 4 0 004 4h0a4 4 0 004-4z" />
  </svg>
);

export const Default: Story = {
  args: {
    name: 'Forno Mágico',
    subtitle: 'Rua das Flores, 123',
    icon: storeIcon,
    onClick: () => {},
  },
};

export const WithActions: Story = {
  args: {
    name: 'Forno Mágico',
    subtitle: 'Rua das Flores, 123',
    icon: storeIcon,
    showActions: true,
    onEdit: () => {},
    onDelete: () => {},
  },
};

export const EstablishmentList: Story = {
  name: 'Lista de Estabelecimentos',
  render: () => (
    <div className="flex flex-col gap-3">
      <MizzEstablishmentItem name="Forno Mágico" subtitle="Rua das Flores, 123" icon={storeIcon} showActions onEdit={() => {}} onDelete={() => {}} />
      <MizzEstablishmentItem name="Cantina Buono" subtitle="Av. Brasil, 456" icon={storeIcon} showActions onEdit={() => {}} onDelete={() => {}} />
      <MizzEstablishmentItem name="Burger House" subtitle="Rua do Sol, 789" icon={storeIcon} showActions onEdit={() => {}} onDelete={() => {}} />
    </div>
  ),
};
