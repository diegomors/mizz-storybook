import type { Meta, StoryObj } from '@storybook/react';
import { MizzFeedbackCard } from '../app/components/mizz/MizzFeedbackCard';

const meta = {
  title: 'Componentes/FeedbackCard',
  component: MizzFeedbackCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MizzFeedbackCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Avalie seu pedido',
    subtitle: 'Como foi sua experiência?',
    onSubmit: (data) => console.log('Feedback:', data),
  },
};

export const AppRating: Story = {
  name: 'Avaliação do App',
  args: {
    title: 'O que achou do aplicativo do xama?',
    subtitle: 'Sua avaliação nos ajuda a melhorar',
    submitLabel: 'Enviar avaliação',
    placeholder: 'Conte-nos o que podemos melhorar...',
    onSubmit: (data) => console.log('Rating:', data),
  },
};

export const Disabled: Story = {
  args: {
    title: 'Avalie seu pedido',
    disabled: true,
    initialRating: 4,
  },
};
