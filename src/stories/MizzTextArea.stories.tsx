import type { Meta, StoryObj } from '@storybook/react';
import { MizzTextArea } from '../app/components/mizz/MizzTextArea';

const meta = {
  title: 'Componentes/TextArea',
  component: MizzTextArea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Rótulo flutuante' },
    error: { control: 'text', description: 'Mensagem de erro' },
    supportingText: { control: 'text', description: 'Texto de suporte' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
    required: { control: 'boolean', description: 'Campo obrigatório' },
    maxLength: { control: 'number', description: 'Limite de caracteres' },
  },
} satisfies Meta<typeof MizzTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Descrição', placeholder: 'Digite sua descrição...' },
};

export const WithError: Story = {
  args: { label: 'Descrição', error: 'Campo obrigatório', required: true },
};

export const WithCharCounter: Story = {
  args: {
    label: 'Bio',
    maxLength: 200,
    value: 'Olá, sou desenvolvedor.',
    supportingText: 'Conte sobre você',
  },
};

export const Disabled: Story = {
  args: { label: 'Descrição', disabled: true, value: 'Conteúdo bloqueado' },
};

export const AllStates: Story = {
  name: 'States',
  render: () => (
    <div className="flex flex-col gap-6 p-8 w-96">
      <MizzTextArea label="Default" />
      <MizzTextArea label="Required" required />
      <MizzTextArea label="Error" error="Campo obrigatório" />
      <MizzTextArea label="Disabled" disabled value="Bloqueado" />
      <MizzTextArea label="Com contador" maxLength={100} value="Texto curto" supportingText="Texto de suporte" />
    </div>
  ),
};
