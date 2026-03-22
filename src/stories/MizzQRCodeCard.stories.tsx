import type { Meta, StoryObj } from '@storybook/react';
import { MizzQRCodeCard } from '../app/components/mizz/MizzQRCodeCard';

const meta = {
  title: 'Componentes/QRCodeCard',
  component: MizzQRCodeCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MizzQRCodeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'QR Code',
    subtitle: 'Escaneie para acessar',
    onCopyLink: () => {},
  },
};

export const WithActions: Story = {
  args: {
    title: 'Estação conectada',
    subtitle: 'Apresente este QR code para os clientes',
    value: 'https://xama.app/mesa/13',
    actionLabel: 'Registrar',
    onAction: () => {},
    shareLabel: 'Compartilhar estação',
    onShare: () => {},
    onCopyLink: () => {},
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    title: 'Mesa 13',
    onCopyLink: () => {},
  },
};
