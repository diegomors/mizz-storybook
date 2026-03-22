import type { Meta, StoryObj } from '@storybook/react';
import { MizzAddressCard } from '../app/components/mizz/MizzAddressCard';

const meta = {
  title: 'Food & Delivery/AddressCard',
  component: MizzAddressCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    iconType: { control: 'select', options: ['home', 'work', 'other'] },
    selected: { control: 'boolean' },
  },
} satisfies Meta<typeof MizzAddressCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Casa',
    address: 'Rua das Flores, 123 - Jardim Primavera',
    complement: 'Apto 42, Bloco B',
    iconType: 'home',
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const Selected: Story = {
  args: {
    label: 'Casa',
    address: 'Rua das Flores, 123 - Jardim Primavera',
    iconType: 'home',
    selected: true,
    onSelect: () => {},
    onEdit: () => {},
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const AddressList: Story = {
  name: 'Lista de endereços',
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <MizzAddressCard
        label="Casa"
        address="Rua das Flores, 123 - Jardim Primavera"
        complement="Apto 42, Bloco B"
        iconType="home"
        selected
        onSelect={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <MizzAddressCard
        label="Trabalho"
        address="Av. Paulista, 1578 - Bela Vista"
        iconType="work"
        onSelect={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <MizzAddressCard
        label="Academia"
        address="Rua Augusta, 500 - Consolação"
        iconType="other"
        onSelect={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  ),
};
