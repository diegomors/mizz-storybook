import type { Meta, StoryObj } from '@storybook/react';
import { MizzSocialButton } from '../app/components/mizz/MizzSocialButton';

const meta = {
  title: 'Componentes/SocialButton',
  component: MizzSocialButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    provider: {
      control: 'select',
      options: ['google', 'apple'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
} satisfies Meta<typeof MizzSocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Google: Story = {
  args: { provider: 'google' },
};

export const Apple: Story = {
  args: { provider: 'apple' },
};

export const SocialLoginGroup: Story = {
  name: 'Grupo de Login Social',
  render: () => (
    <div className="flex gap-4">
      <MizzSocialButton provider="google" />
      <MizzSocialButton provider="apple" />
    </div>
  ),
};

export const SmallSize: Story = {
  name: 'Tamanho Pequeno',
  render: () => (
    <div className="flex gap-4">
      <MizzSocialButton provider="google" size="sm" />
      <MizzSocialButton provider="apple" size="sm" />
    </div>
  ),
};
