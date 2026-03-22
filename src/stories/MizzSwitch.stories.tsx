import type { Meta, StoryObj } from '@storybook/react';
import { MizzSwitch } from '../app/components/mizz/MizzSwitch';

const meta = {
  title: 'Componentes/Switch',
  component: MizzSwitch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: 'Estado ativo' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
    error: { control: 'text', description: 'Mensagem de erro' },
    label: { control: 'text', description: 'Rótulo' },
  },
} satisfies Meta<typeof MizzSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Notificações' },
};

export const Checked: Story = {
  args: { label: 'Notificações', checked: true, onChange: () => {} },
};

export const Disabled: Story = {
  args: { label: 'Indisponível', disabled: true },
};

export const WithError: Story = {
  args: { label: 'Configuração necessária', error: 'Ative para continuar' },
};

export const AllStates: Story = {
  name: 'States',
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <MizzSwitch label="Off (default)" />
      <MizzSwitch label="On" checked onChange={() => {}} />
      <MizzSwitch label="Disabled off" disabled />
      <MizzSwitch label="Disabled on" disabled checked onChange={() => {}} />
      <MizzSwitch label="Error" error="Ative para continuar" />
    </div>
  ),
};
