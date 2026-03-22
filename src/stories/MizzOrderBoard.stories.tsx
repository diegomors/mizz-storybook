import type { Meta, StoryObj } from '@storybook/react';
import { MizzOrderBoard, type OrderBoardColumn, type OrderBoardItem } from '../app/components/mizz/MizzOrderBoard';

const defaultColumns: OrderBoardColumn[] = [
  { status: 'pending', label: 'Novos' },
  { status: 'confirmed', label: 'Confirmados' },
  { status: 'preparing', label: 'Em Preparo' },
  { status: 'ready', label: 'Prontos' },
];

const deliveryColumns: OrderBoardColumn[] = [
  { status: 'confirmed', label: 'Confirmados' },
  { status: 'preparing', label: 'Em Preparo' },
  { status: 'ready', label: 'Prontos' },
  { status: 'delivering', label: 'Em Rota' },
];

const fullColumns: OrderBoardColumn[] = [
  { status: 'pending', label: 'Novos' },
  { status: 'confirmed', label: 'Confirmados' },
  { status: 'preparing', label: 'Em Preparo' },
  { status: 'ready', label: 'Prontos' },
  { status: 'delivering', label: 'Em Rota' },
  { status: 'delivered', label: 'Entregues' },
];

const sampleOrders: OrderBoardItem[] = [
  {
    id: '1',
    orderNumber: '4680',
    status: 'pending',
    timeAgo: 'há 2 min',
    total: 'R$ 67.90',
    items: ['1x X-Burger', '1x Batata Frita G', '2x Coca-Cola'],
  },
  {
    id: '2',
    orderNumber: '4679',
    status: 'pending',
    timeAgo: 'há 5 min',
    total: 'R$ 32.50',
    items: ['1x Pizza Margherita'],
  },
  {
    id: '3',
    orderNumber: '4678',
    status: 'confirmed',
    timeAgo: 'há 8 min',
    total: 'R$ 89.00',
    items: ['2x Açaí 500ml', '1x Granola Extra'],
  },
  {
    id: '4',
    orderNumber: '4677',
    status: 'preparing',
    timeAgo: 'há 15 min',
    total: 'R$ 54.90',
    items: ['1x Combo Família', '1x Suco Natural'],
  },
  {
    id: '5',
    orderNumber: '4676',
    status: 'ready',
    timeAgo: 'há 22 min',
    total: 'R$ 45.00',
    items: ['3x Esfiha', '1x Kibe'],
  },
];

const deliveryOrders: OrderBoardItem[] = [
  {
    id: '3',
    orderNumber: '4678',
    status: 'confirmed',
    timeAgo: 'há 8 min',
    total: 'R$ 89.00',
    items: ['2x Açaí 500ml', '1x Granola Extra'],
  },
  {
    id: '6',
    orderNumber: '4676',
    status: 'delivering',
    timeAgo: 'há cerca de 4 horas',
    total: 'R$ 45.00',
  },
];

const meta = {
  title: 'Food & Delivery/OrderBoard',
  component: MizzOrderBoard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do painel',
    },
    description: {
      control: 'text',
      description: 'Descrição do painel',
    },
    emptyMessage: {
      control: 'text',
      description: 'Mensagem exibida quando a coluna está vazia',
    },
    onOrderClick: {
      action: 'orderClicked',
      description: 'Callback ao clicar em um pedido',
    },
  },
} satisfies Meta<typeof MizzOrderBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Board vazio — todas as colunas sem pedidos */
export const Empty: Story = {
  args: {
    columns: defaultColumns,
    orders: [],
  },
};

/** Board com pedidos distribuídos em várias colunas */
export const WithOrders: Story = {
  args: {
    columns: defaultColumns,
    orders: sampleOrders,
  },
};

/** Board de delivery com coluna "Em Rota" */
export const DeliveryFlow: Story = {
  args: {
    columns: deliveryColumns,
    orders: deliveryOrders,
    title: 'Painel de Pedidos',
    description: 'Gerencie o fluxo de preparo e entrega em tempo real.',
  },
};

/** Board com muitos pedidos para testar scroll */
export const ManyOrders: Story = {
  args: {
    columns: defaultColumns,
    orders: [
      ...sampleOrders,
      {
        id: '10',
        orderNumber: '4670',
        status: 'pending',
        timeAgo: 'há 30 min',
        total: 'R$ 120.00',
        items: ['2x Pizza Grande', '1x Refrigerante 2L', '1x Sobremesa', '1x Pão de Alho'],
      },
      {
        id: '11',
        orderNumber: '4669',
        status: 'confirmed',
        timeAgo: 'há 12 min',
        total: 'R$ 47.50',
        items: ['1x Hambúrguer Artesanal'],
      },
      {
        id: '12',
        orderNumber: '4668',
        status: 'preparing',
        timeAgo: 'há 18 min',
        total: 'R$ 63.00',
        items: ['1x Combo Kids', '2x Suco'],
      },
      {
        id: '13',
        orderNumber: '4667',
        status: 'ready',
        timeAgo: 'há 25 min',
        total: 'R$ 28.90',
        items: ['1x Salada Caesar'],
      },
    ],
  },
};

/** Board com fluxo completo (6 colunas) */
export const FullPipeline: Story = {
  args: {
    columns: fullColumns,
    orders: [
      ...sampleOrders,
      {
        id: '20',
        orderNumber: '4675',
        status: 'delivering',
        timeAgo: 'há 30 min',
        total: 'R$ 78.00',
        items: ['1x Pizza Pepperoni G'],
      },
      {
        id: '21',
        orderNumber: '4674',
        status: 'delivered',
        timeAgo: 'há 1 hora',
        total: 'R$ 55.00',
        items: ['2x Burger Smash'],
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
    columns: defaultColumns,
    orders: sampleOrders,
  },
};
