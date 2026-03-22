import type { Meta, StoryObj } from '@storybook/react';
import { MizzAlert } from '../app/components/mizz/MizzAlert';

const meta = {
  title: 'Componentes/Alert',
  component: MizzAlert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'], description: 'Variante' },
    title: { control: 'text', description: 'Título' },
  },
} satisfies Meta<typeof MizzAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: { variant: 'info', title: 'Informação', children: 'Esta é uma mensagem informativa.' },
};

export const Success: Story = {
  args: { variant: 'success', title: 'Sucesso', children: 'Operação realizada com sucesso!' },
};

export const Warning: Story = {
  args: { variant: 'warning', title: 'Atenção', children: 'Verifique os dados antes de continuar.' },
};

export const Error: Story = {
  args: { variant: 'error', title: 'Erro', children: 'Não foi possível completar a operação.' },
};

export const Closable: Story = {
  args: {
    variant: 'info',
    title: 'Aviso',
    children: 'Clique no X para fechar.',
    onClose: () => alert('Fechado!'),
  },
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => (
    <div className="flex flex-col gap-4 p-8 w-[500px]">
      <MizzAlert variant="info" title="Informação">Mensagem informativa para o usuário.</MizzAlert>
      <MizzAlert variant="success" title="Sucesso">Operação concluída com sucesso!</MizzAlert>
      <MizzAlert variant="warning" title="Atenção">Verifique os dados informados.</MizzAlert>
      <MizzAlert variant="error" title="Erro">Falha ao processar sua solicitação.</MizzAlert>
      <MizzAlert variant="info" onClose={() => {}}>Alerta com botão de fechar.</MizzAlert>
    </div>
  ),
};
