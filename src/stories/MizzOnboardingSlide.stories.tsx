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
    subtitle: 'Escaneie o QR code da mesa para começar a fazer seus pedidos.',
    currentStep: 0,
    totalSteps: 3,
    actionLabel: 'Continuar',
  },
};

export const Funcionario: Story = {
  args: {
    title: 'Receba pedidos sendo funcionário',
    subtitle: 'Gerencie mesas e atenda clientes de forma simples e rápida.',
    currentStep: 1,
    totalSteps: 3,
    actionLabel: 'Continuar',
  },
};

export const Administrador: Story = {
  args: {
    title: 'Administrando o estabelecimento',
    subtitle: 'Controle estações, funcionários e relatórios do seu negócio.',
    currentStep: 2,
    totalSteps: 3,
    actionLabel: 'Continuar',
    secondaryLabel: 'Pular',
  },
};
