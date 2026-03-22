import type { Meta, StoryObj } from '@storybook/react';
import { MizzOrderCard } from '../app/components/mizz/MizzOrderCard';
import { MizzButton } from '../app/components/mizz/MizzButton';

const meta = {
  title: 'Componentes/OrderCard',
  component: MizzOrderCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['pending', 'preparing', 'ready', 'delivered', 'cancelled'],
    },
  },
} satisfies Meta<typeof MizzOrderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pending: Story = {
  args: {
    orderNumber: '1234',
    tableLabel: 'Mesa 13',
    status: 'pending',
    items: ['1x Hambúrguer Clássico', '2x Refrigerante', '1x Batata Frita'],
    total: 'R$ 67,90',
    timestamp: '14:32',
  },
};

export const Preparing: Story = {
  args: {
    orderNumber: '1235',
    tableLabel: 'Mesa 7',
    status: 'preparing',
    items: ['2x Pizza Margherita'],
    total: 'R$ 89,00',
    timestamp: '14:45',
  },
};

export const Ready: Story = {
  args: {
    orderNumber: '1233',
    tableLabel: 'Mesa 5',
    status: 'ready',
    items: ['1x Salada Caesar', '1x Suco Natural'],
    total: 'R$ 42,50',
    timestamp: '14:15',
  },
};

export const WithActions: Story = {
  args: {
    orderNumber: '1234',
    tableLabel: 'Mesa 13',
    status: 'pending',
    items: ['1x Hambúrguer Clássico', '2x Refrigerante'],
    total: 'R$ 67,90',
    timestamp: '14:32',
    actions: (
      <>
        <MizzButton variant="ghost" size="sm">Cancelar</MizzButton>
        <MizzButton variant="filled" size="sm">Aceitar pedido</MizzButton>
      </>
    ),
  },
};

export const AllStatuses: Story = {
  name: 'Todos os Status',
  render: () => (
    <div className="flex flex-col gap-4 max-w-[360px]">
      <MizzOrderCard orderNumber="1234" tableLabel="Mesa 13" status="pending" items={['1x Hambúrguer']} total="R$ 32,00" timestamp="14:32" />
      <MizzOrderCard orderNumber="1235" tableLabel="Mesa 7" status="preparing" items={['2x Pizza']} total="R$ 89,00" timestamp="14:45" />
      <MizzOrderCard orderNumber="1233" tableLabel="Mesa 5" status="ready" items={['1x Salada']} total="R$ 28,50" timestamp="14:15" />
      <MizzOrderCard orderNumber="1232" tableLabel="Mesa 2" status="delivered" items={['3x Café']} total="R$ 18,00" timestamp="13:50" />
      <MizzOrderCard orderNumber="1231" tableLabel="Mesa 1" status="cancelled" items={['1x Sopa']} total="R$ 22,00" timestamp="13:30" />
    </div>
  ),
};
