import type { Meta, StoryObj } from '@storybook/react';
import { MizzCheckbox } from '../app/components/mizz/MizzCheckbox';

const meta = {
  title: 'Componentes/Checkbox',
  component: MizzCheckbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: 'Estado marcado' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
    indeterminate: { control: 'boolean', description: 'Estado indeterminado' },
    error: { control: 'text', description: 'Mensagem de erro' },
    label: { control: 'text', description: 'Rótulo' },
  },
} satisfies Meta<typeof MizzCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Aceito os termos' },
};

export const Checked: Story = {
  args: { label: 'Aceito os termos', checked: true, onChange: () => {} },
};

export const Indeterminate: Story = {
  args: { label: 'Selecionar todos', indeterminate: true },
};

export const WithError: Story = {
  args: { label: 'Campo obrigatório', error: 'Você precisa aceitar os termos' },
};

export const Disabled: Story = {
  args: { label: 'Opção indisponível', disabled: true },
};

export const AllStates: Story = {
  name: 'States',
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <MizzCheckbox label="Unchecked (default)" />
      <MizzCheckbox label="Checked" checked onChange={() => {}} />
      <MizzCheckbox label="Indeterminate" indeterminate />
      <MizzCheckbox label="Disabled" disabled />
      <MizzCheckbox label="Disabled checked" disabled checked onChange={() => {}} />
      <MizzCheckbox label="Error" error="Campo obrigatório" />
    </div>
  ),
};
