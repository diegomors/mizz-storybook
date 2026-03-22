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

const storeIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <path d="M9 22V12h6v10" />
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
