import type { Meta, StoryObj } from '@storybook/react';
import { MizzOnboardingSlide } from '../app/components/mizz/MizzOnboardingSlide';

const meta = {
  title: 'Telas/OnboardingSlide',
  component: MizzOnboardingSlide,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 375, height: 700, overflow: 'hidden', borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MizzOnboardingSlide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pedidos: Story = {
  args: {
    title: 'Começar a realizar pedidos',
    subtitle: 'Escaneie o QR code da mesa para acessar o cardápio e fazer seus pedidos direto pelo app.',
    currentStep: 0,
    totalSteps: 3,
    actionLabel: 'Continuar',
    illustration: (
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" stroke="white" strokeWidth="2" opacity="0.85">
        <rect x="40" y="20" width="80" height="120" rx="12" />
        <rect x="55" y="50" width="50" height="50" rx="4" strokeDasharray="4 4" />
        <rect x="65" y="60" width="30" height="30" rx="2" />
        <circle cx="80" cy="130" r="4" />
        <path d="M70 36h20" strokeLinecap="round" />
      </svg>
    ),
  },
};

export const Funcionario: Story = {
  args: {
    title: 'Receba pedidos sendo funcionário',
    subtitle: 'Gerencie mesas e atenda clientes de forma simples e rápida pelo aplicativo.',
    currentStep: 1,
    totalSteps: 3,
    actionLabel: 'Continuar',
    illustration: (
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" stroke="white" strokeWidth="2" opacity="0.85">
        <circle cx="80" cy="50" r="20" />
        <path d="M60 75c0 0 10 15 20 15s20-15 20-15" />
        <rect x="45" y="90" width="70" height="50" rx="8" />
        <path d="M65 105h30M65 115h20" strokeLinecap="round" />
        <circle cx="120" cy="45" r="10" />
        <path d="M117 45l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
};

export const Administrador: Story = {
  args: {
    title: 'Administrando o estabelecimento',
    subtitle: 'Controle estações, funcionários e acompanhe relatórios de vendas do seu restaurante.',
    currentStep: 2,
    totalSteps: 3,
    actionLabel: 'Começar',
    secondaryLabel: 'Pular',
    illustration: (
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" stroke="white" strokeWidth="2" opacity="0.85">
        <rect x="30" y="40" width="100" height="80" rx="8" />
        <path d="M30 60h100" />
        <rect x="42" y="70" width="30" height="20" rx="4" />
        <rect x="82" y="70" width="36" height="8" rx="2" />
        <rect x="82" y="84" width="24" height="8" rx="2" />
        <circle cx="57" cy="80" r="6" />
        <path d="M54 80l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M45 100h70" strokeLinecap="round" strokeDasharray="4 4" />
      </svg>
    ),
  },
};
