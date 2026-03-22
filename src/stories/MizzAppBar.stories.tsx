import type { Meta, StoryObj } from '@storybook/react';
import { MizzAppBar } from '../app/components/mizz/MizzAppBar';
import { MizzIconButton } from '../app/components/mizz/MizzIconButton';

const meta = {
  title: 'Componentes/AppBar',
  component: MizzAppBar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    transparent: { control: 'boolean' },
  },
} satisfies Meta<typeof MizzAppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Pedidos',
    onBack: () => {},
  },
};

export const WithActions: Story = {
  args: {
    title: 'Pedidos',
    onBack: () => {},
    actions: (
      <div className="flex gap-1">
        <MizzIconButton size="sm" variant="ghost" aria-label="Notificações" icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
        } />
        <MizzIconButton size="sm" variant="ghost" aria-label="Configurações" icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        } />
      </div>
    ),
  },
};

export const NoBackButton: Story = {
  args: {
    title: 'Painel',
  },
};

export const Transparent: Story = {
  args: {
    title: 'Pedidos',
    onBack: () => {},
    transparent: true,
  },
  decorators: [
    (Story) => (
      <div className="bg-primary p-0">
        <Story />
      </div>
    ),
  ],
};
