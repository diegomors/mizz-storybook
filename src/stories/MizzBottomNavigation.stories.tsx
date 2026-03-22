import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzBottomNavigation } from '../app/components/mizz/MizzBottomNavigation';

const navItems = [
  {
    value: 'home',
    label: 'Início',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 8l7-5 7 5v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" stroke="currentColor" strokeWidth="1.5" /><path d="M7 17V10h6v7" stroke="currentColor" strokeWidth="1.5" /></svg>,
  },
  {
    value: 'search',
    label: 'Buscar',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  },
  {
    value: 'orders',
    label: 'Pedidos',
    badge: 2,
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M7 8h6M7 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  },
  {
    value: 'profile',
    label: 'Perfil',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M4 17c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" /></svg>,
  },
];

const meta = {
  title: 'Food & Delivery/BottomNavigation',
  component: MizzBottomNavigation,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MizzBottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const [value, setValue] = useState('home');
  return (
    <div className="w-[375px] border border-border rounded-xl overflow-hidden bg-card">
      <div className="h-48 flex items-center justify-center text-muted-foreground text-sm">
        Conteúdo da página
      </div>
      <MizzBottomNavigation items={navItems} value={value} onChange={setValue} />
    </div>
  );
};

export const Default: Story = {
  render: () => <Template />,
};
