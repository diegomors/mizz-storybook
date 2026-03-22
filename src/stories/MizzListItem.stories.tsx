import type { Meta, StoryObj } from '@storybook/react';
import { MizzListItem } from '../app/components/mizz/MizzListItem';
import { MizzAvatar } from '../app/components/mizz/MizzAvatar';
import { MizzBadge } from '../app/components/mizz/MizzBadge';

const meta = {
  title: 'Componentes/ListItem',
  component: MizzListItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MizzListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Minha conta', subtitle: 'Gerencie seus dados', onClick: () => {} },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const SettingsMenu: Story = {
  name: 'Menu de configurações',
  render: () => (
    <div className="w-80 bg-card rounded-xl border border-border overflow-hidden">
      <MizzListItem
        leading={<MizzAvatar initials="DM" size="sm" />}
        title="Diego Moreira"
        subtitle="diego@email.com"
        onClick={() => {}}
      />
      <MizzListItem
        leading={<span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l7-5 7 5v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" stroke="currentColor" strokeWidth="1.2"/></svg></span>}
        title="Endereços"
        subtitle="3 endereços salvos"
        onClick={() => {}}
      />
      <MizzListItem
        title="Pedidos"
        trailing={<MizzBadge content={2} variant="error" size="sm" />}
        onClick={() => {}}
      />
      <MizzListItem
        title="Notificações"
        trailing={
          <span className="text-xs text-positive-2 font-medium">Ativadas</span>
        }
        onClick={() => {}}
      />
      <MizzListItem
        title="Sair"
        onClick={() => {}}
        divider={false}
      />
    </div>
  ),
};
