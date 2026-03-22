import type { Meta, StoryObj } from '@storybook/react';
import { MizzSplashScreen } from '../app/components/mizz/MizzSplashScreen';

const meta = {
  title: 'Telas/SplashScreen',
  component: MizzSplashScreen,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 375, height: 700, overflow: 'hidden', borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MizzSplashScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    appName: 'xama',
    variant: 'dark',
  },
};

export const Primary: Story = {
  args: {
    appName: 'xama',
    variant: 'primary',
  },
};

export const Light: Story = {
  args: {
    appName: 'xama',
    variant: 'light',
  },
};

export const WithLoading: Story = {
  args: {
    appName: 'xama',
    variant: 'dark',
    loading: true,
  },
};
