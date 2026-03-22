import type { Meta, StoryObj } from '@storybook/react';
import { MizzSelect } from '../app/components/mizz/MizzSelect';

const sampleOptions = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'ba', label: 'Bahia' },
  { value: 'rs', label: 'Rio Grande do Sul', disabled: true },
];

const meta = {
  title: 'Componentes/Select',
  component: MizzSelect,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
    error: { control: 'text', description: 'Mensagem de erro' },
    label: { control: 'text', description: 'Rótulo flutuante' },
    placeholder: { control: 'text', description: 'Texto placeholder' },
    required: { control: 'boolean', description: 'Campo obrigatório' },
  },
} satisfies Meta<typeof MizzSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Estado',
    options: sampleOptions,
    placeholder: 'Selecione um estado',
  },
};

export const WithError: Story = {
  args: {
    label: 'Estado',
    options: sampleOptions,
    error: 'Selecione um estado',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Estado',
    options: sampleOptions,
    disabled: true,
  },
};

export const AllStates: Story = {
  name: 'States',
  render: () => (
    <div className="flex flex-col gap-6 p-8 w-80">
      <MizzSelect label="Default" options={sampleOptions} placeholder="Selecione" />
      <MizzSelect label="Required" options={sampleOptions} required />
      <MizzSelect label="Error" options={sampleOptions} error="Campo obrigatório" />
      <MizzSelect label="Disabled" options={sampleOptions} disabled />
      <MizzSelect label="Com suporte" options={sampleOptions} supportingText="Escolha seu estado" />
    </div>
  ),
};
