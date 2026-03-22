import type { Meta, StoryObj } from '@storybook/react';
import { MizzDeliveryBanner } from '../app/components/mizz/MizzDeliveryBanner';

const meta = {
  title: 'Food Service/DeliveryBanner',
  component: MizzDeliveryBanner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'promo'] },
  },
} satisfies Meta<typeof MizzDeliveryBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Preparo em 25-35 min', subtitle: 'Seu pedido está na fila', variant: 'default' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const PedidoPronto: Story = {
  name: 'Pedido Pronto',
  args: { title: 'Pedido pronto!', subtitle: 'Seu pedido está disponível para retirada', variant: 'success' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const CozinhaCheia: Story = {
  name: 'Cozinha Cheia',
  args: { title: 'Cozinha com alta demanda', subtitle: 'Tempo de preparo pode ser maior', variant: 'warning' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const Promo: Story = {
  args: { title: 'Combo do dia: Burger + Refri', subtitle: 'Desconto de 15% até 18h', variant: 'promo' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <MizzDeliveryBanner variant="default" title="Preparo em 25-35 min" subtitle="Pedido na fila da cozinha" />
      <MizzDeliveryBanner variant="success" title="Pedido pronto!" subtitle="Disponível para retirada na mesa" />
      <MizzDeliveryBanner variant="warning" title="Cozinha com alta demanda" subtitle="Tempo de preparo maior" />
      <MizzDeliveryBanner variant="promo" title="Combo do dia com 15% OFF" subtitle="Válido até 18h" />
    </div>
  ),
};
