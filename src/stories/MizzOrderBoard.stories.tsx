import { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  MizzOrderBoard,
  type OrderBoardColumn,
  type OrderBoardItem,
  type OrderStatus,
} from '../app/components/mizz/MizzOrderBoard';

// ─── Column presets ─────────────────────────────────────────────────

const fullColumns: OrderBoardColumn[] = [
  { status: 'pending', label: 'Novos' },
  { status: 'confirmed', label: 'Confirmados' },
  { status: 'preparing', label: 'Em Preparo' },
  { status: 'ready', label: 'Prontos' },
  { status: 'delivering', label: 'Em Rota' },
  { status: 'delivered', label: 'Finalizados' },
];

const defaultColumns: OrderBoardColumn[] = fullColumns.slice(0, 4);

// ─── Time helpers ───────────────────────────────────────────────────

function minutesAgo(m: number): Date {
  return new Date(Date.now() - m * 60_000);
}

function buildHistory(
  createdAt: Date,
  transitions: { status: OrderStatus; minutesBefore: number }[]
): { status: OrderStatus; timestamp: Date }[] {
  return transitions.map((t) => ({
    status: t.status,
    timestamp: new Date(Date.now() - t.minutesBefore * 60_000),
  }));
}

// ─── Sample orders ──────────────────────────────────────────────────

const sampleOrders: OrderBoardItem[] = [
  {
    id: '1',
    orderNumber: '4680',
    status: 'pending',
    createdAt: minutesAgo(2),
    statusHistory: buildHistory(minutesAgo(2), [{ status: 'pending', minutesBefore: 2 }]),
    totalCents: 6790,
    items: ['1x X-Burger', '1x Batata Frita G', '2x Coca-Cola'],
    deliveryCode: '1234',
    customerCode: '5678',
  },
  {
    id: '2',
    orderNumber: '4679',
    status: 'pending',
    createdAt: minutesAgo(5),
    statusHistory: buildHistory(minutesAgo(5), [{ status: 'pending', minutesBefore: 5 }]),
    totalCents: 3250,
    items: ['1x Pizza Margherita'],
    deliveryCode: '4321',
    customerCode: '8765',
  },
  {
    id: '3',
    orderNumber: '4678',
    status: 'confirmed',
    createdAt: minutesAgo(12),
    statusHistory: buildHistory(minutesAgo(12), [
      { status: 'pending', minutesBefore: 12 },
      { status: 'confirmed', minutesBefore: 8 },
    ]),
    totalCents: 8900,
    items: ['2x Açaí 500ml', '1x Granola Extra'],
    deliveryCode: '1111',
    customerCode: '2222',
  },
  {
    id: '4',
    orderNumber: '4677',
    status: 'preparing',
    createdAt: minutesAgo(20),
    statusHistory: buildHistory(minutesAgo(20), [
      { status: 'pending', minutesBefore: 20 },
      { status: 'confirmed', minutesBefore: 17 },
      { status: 'preparing', minutesBefore: 15 },
    ]),
    totalCents: 5490,
    items: ['1x Combo Família', '1x Suco Natural'],
    deliveryCode: '3333',
    customerCode: '4444',
  },
  {
    id: '5',
    orderNumber: '4676',
    status: 'ready',
    createdAt: minutesAgo(35),
    statusHistory: buildHistory(minutesAgo(35), [
      { status: 'pending', minutesBefore: 35 },
      { status: 'confirmed', minutesBefore: 30 },
      { status: 'preparing', minutesBefore: 25 },
      { status: 'ready', minutesBefore: 10 },
    ]),
    totalCents: 4500,
    items: ['3x Esfiha', '1x Kibe'],
    deliveryCode: '5555',
    customerCode: '6666',
  },
  {
    id: '6',
    orderNumber: '4675',
    status: 'delivering',
    createdAt: minutesAgo(50),
    statusHistory: buildHistory(minutesAgo(50), [
      { status: 'pending', minutesBefore: 50 },
      { status: 'confirmed', minutesBefore: 45 },
      { status: 'preparing', minutesBefore: 40 },
      { status: 'ready', minutesBefore: 30 },
      { status: 'delivering', minutesBefore: 20 },
    ]),
    totalCents: 7800,
    items: ['1x Pizza Pepperoni G'],
    deliveryCode: '7777',
    customerCode: '8888',
  },
  {
    id: '7',
    orderNumber: '4674',
    status: 'delivered',
    createdAt: minutesAgo(75),
    statusHistory: buildHistory(minutesAgo(75), [
      { status: 'pending', minutesBefore: 75 },
      { status: 'confirmed', minutesBefore: 70 },
      { status: 'preparing', minutesBefore: 60 },
      { status: 'ready', minutesBefore: 45 },
      { status: 'delivering', minutesBefore: 30 },
      { status: 'delivered', minutesBefore: 5 },
    ]),
    totalCents: 5500,
    items: ['2x Burger Smash'],
    deliveryCode: '9999',
    customerCode: '0000',
  },
];

// ─── Interactive wrapper ────────────────────────────────────────────

function InteractiveBoard({
  columns,
  initialOrders,
}: {
  columns: OrderBoardColumn[];
  initialOrders: OrderBoardItem[];
}) {
  const [orders, setOrders] = useState<OrderBoardItem[]>(initialOrders);

  const handleMove = useCallback(
    (orderId: string, _from: OrderStatus, to: OrderStatus) => {
      setOrders((prev) =>
        prev.map((o) =>
          o.id === orderId
            ? {
                ...o,
                status: to,
                statusHistory: [
                  ...o.statusHistory,
                  { status: to, timestamp: new Date() },
                ],
              }
            : o
        )
      );
    },
    []
  );

  const handleValidateCode = useCallback(
    (orderId: string, code: string, type: 'delivery' | 'customer') => {
      const order = orders.find((o) => o.id === orderId);
      if (!order) return false;
      if (type === 'delivery') return code === order.deliveryCode;
      return code === order.customerCode;
    },
    [orders]
  );

  return (
    <MizzOrderBoard
      columns={columns}
      orders={orders}
      onOrderMove={handleMove}
      onValidateCode={handleValidateCode}
    />
  );
}

// ─── Meta ───────────────────────────────────────────────────────────

const meta = {
  title: 'Food & Delivery/OrderBoard',
  component: MizzOrderBoard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Título do painel' },
    description: { control: 'text', description: 'Descrição do painel' },
  },
} satisfies Meta<typeof MizzOrderBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Board vazio — todas as colunas sem pedidos */
export const Empty: Story = {
  args: {
    columns: fullColumns,
    orders: [],
  },
};

/** Board com pedidos em todas as etapas do fluxo */
export const FullPipeline: Story = {
  args: {
    columns: fullColumns,
    orders: sampleOrders,
  },
};

/**
 * Board interativo — clique nos botões de ação para mover pedidos.
 * Para "Prontos" e "Em Rota", use os códigos: Entregador=código no dado do pedido, Cliente=código no dado do pedido.
 * Dica: Para o pedido #4676 (Prontos), use Cód. Entregador: 5555 ou Cód. Cliente: 6666.
 */
export const Interactive: Story = {
  render: () => <InteractiveBoard columns={fullColumns} initialOrders={sampleOrders} />,
};

/** Board com 4 colunas (fluxo básico de cozinha) */
export const KitchenFlow: Story = {
  args: {
    columns: defaultColumns,
    orders: sampleOrders.filter((o) =>
      ['pending', 'confirmed', 'preparing', 'ready'].includes(o.status)
    ),
  },
};

/** Board com muitos pedidos para testar scroll */
export const ManyOrders: Story = {
  args: {
    columns: fullColumns,
    orders: [
      ...sampleOrders,
      {
        id: '10',
        orderNumber: '4670',
        status: 'pending',
        createdAt: minutesAgo(30),
        statusHistory: [{ status: 'pending' as OrderStatus, timestamp: minutesAgo(30) }],
        totalCents: 12000,
        items: ['2x Pizza Grande', '1x Refrigerante 2L', '1x Sobremesa', '1x Pão de Alho'],
        deliveryCode: '1010',
        customerCode: '2020',
      },
      {
        id: '11',
        orderNumber: '4669',
        status: 'confirmed',
        createdAt: minutesAgo(15),
        statusHistory: [
          { status: 'pending' as OrderStatus, timestamp: minutesAgo(15) },
          { status: 'confirmed' as OrderStatus, timestamp: minutesAgo(12) },
        ],
        totalCents: 4750,
        items: ['1x Hambúrguer Artesanal'],
        deliveryCode: '3030',
        customerCode: '4040',
      },
      {
        id: '12',
        orderNumber: '4668',
        status: 'preparing',
        createdAt: minutesAgo(22),
        statusHistory: [
          { status: 'pending' as OrderStatus, timestamp: minutesAgo(22) },
          { status: 'confirmed' as OrderStatus, timestamp: minutesAgo(20) },
          { status: 'preparing' as OrderStatus, timestamp: minutesAgo(18) },
        ],
        totalCents: 6300,
        items: ['1x Combo Kids', '2x Suco'],
        deliveryCode: '5050',
        customerCode: '6060',
      },
      {
        id: '13',
        orderNumber: '4667',
        status: 'ready',
        createdAt: minutesAgo(40),
        statusHistory: [
          { status: 'pending' as OrderStatus, timestamp: minutesAgo(40) },
          { status: 'confirmed' as OrderStatus, timestamp: minutesAgo(35) },
          { status: 'preparing' as OrderStatus, timestamp: minutesAgo(30) },
          { status: 'ready' as OrderStatus, timestamp: minutesAgo(25) },
        ],
        totalCents: 2890,
        items: ['1x Salada Caesar'],
        deliveryCode: '7070',
        customerCode: '8080',
      },
    ],
  },
};

/** Versão mobile — redimensione o viewport para menos de 768px */
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    columns: fullColumns,
    orders: sampleOrders,
  },
};
