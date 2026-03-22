import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzToast } from '../app/components/mizz/MizzToast';
import { MizzButton } from '../app/components/mizz/MizzButton';

const meta = {
  title: 'Componentes/Toast',
  component: MizzToast,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'error', 'info'], description: 'Variante' },
    duration: { control: 'number', description: 'Duração em ms (0 = sem auto-fechar)' },
  },
} satisfies Meta<typeof MizzToast>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastTemplate = ({ variant, message }: { variant: 'default' | 'success' | 'error' | 'info'; message: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MizzButton onClick={() => setOpen(true)}>Mostrar Toast</MizzButton>
      <MizzToast open={open} onClose={() => setOpen(false)} variant={variant} duration={5000}>
        {message}
      </MizzToast>
    </>
  );
};

export const Default: Story = {
  render: () => <ToastTemplate variant="default" message="Mensagem padrão" />,
};

export const Success: Story = {
  render: () => <ToastTemplate variant="success" message="Salvo com sucesso!" />,
};

export const Error: Story = {
  render: () => <ToastTemplate variant="error" message="Erro ao processar." />,
};

export const Info: Story = {
  render: () => <ToastTemplate variant="info" message="Nova atualização disponível." />,
};

const WithActionTemplate = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MizzButton onClick={() => setOpen(true)}>Toast com ação</MizzButton>
      <MizzToast
        open={open}
        onClose={() => setOpen(false)}
        variant="default"
        duration={0}
        action={
          <button
            className="text-sm font-medium text-primary-foreground underline hover:no-underline"
            onClick={() => { alert('Desfeito!'); setOpen(false); }}
          >
            Desfazer
          </button>
        }
      >
        Item excluído.
      </MizzToast>
    </>
  );
};

export const WithAction: Story = {
  name: 'Com ação (Desfazer)',
  render: () => <WithActionTemplate />,
};

const AllVariantsTemplate = () => {
  const [variant, setVariant] = useState<'default' | 'success' | 'error' | 'info' | null>(null);
  const messages = {
    default: 'Mensagem padrão do sistema.',
    success: 'Operação realizada com sucesso!',
    error: 'Erro ao processar a solicitação.',
    info: 'Nova atualização disponível.',
  };
  return (
    <div className="flex gap-3 flex-wrap">
      <MizzButton variant="outlined" onClick={() => setVariant('default')}>Default</MizzButton>
      <MizzButton variant="outlined" onClick={() => setVariant('success')}>Success</MizzButton>
      <MizzButton variant="outlined" onClick={() => setVariant('error')}>Error</MizzButton>
      <MizzButton variant="outlined" onClick={() => setVariant('info')}>Info</MizzButton>
      {variant && (
        <MizzToast
          open={!!variant}
          onClose={() => setVariant(null)}
          variant={variant}
          duration={3000}
        >
          {messages[variant]}
        </MizzToast>
      )}
    </div>
  );
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => <AllVariantsTemplate />,
};
