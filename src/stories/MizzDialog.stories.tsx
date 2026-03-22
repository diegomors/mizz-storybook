import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzDialog } from '../app/components/mizz/MizzDialog';
import { MizzButton } from '../app/components/mizz/MizzButton';

const meta = {
  title: 'Componentes/Dialog',
  component: MizzDialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Tamanho' },
    closeOnBackdrop: { control: 'boolean', description: 'Fechar ao clicar no backdrop' },
  },
} satisfies Meta<typeof MizzDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicDialogTemplate = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MizzButton onClick={() => setOpen(true)}>Abrir Dialog</MizzButton>
      <MizzDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmar ação"
        actions={
          <>
            <MizzButton variant="text" onClick={() => setOpen(false)}>Cancelar</MizzButton>
            <MizzButton onClick={() => setOpen(false)}>Confirmar</MizzButton>
          </>
        }
      >
        Tem certeza que deseja realizar esta ação? Esta operação não pode ser desfeita.
      </MizzDialog>
    </>
  );
};

export const Default: Story = {
  render: () => <BasicDialogTemplate />,
};

const LoadingDialogTemplate = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <>
      <MizzButton onClick={() => setOpen(true)}>Dialog com Loading</MizzButton>
      <MizzDialog
        open={open}
        onClose={() => { if (!loading) setOpen(false); }}
        title="Excluir item"
        actions={
          <>
            <MizzButton variant="text" onClick={() => setOpen(false)} disabled={loading}>
              Cancelar
            </MizzButton>
            <MizzButton onClick={handleConfirm} loading={loading}>
              {loading ? 'Excluindo...' : 'Excluir'}
            </MizzButton>
          </>
        }
      >
        Ao excluir este item, todos os dados associados serão perdidos permanentemente.
        O botão de confirmação não pode ser clicado novamente enquanto estiver em loading.
      </MizzDialog>
    </>
  );
};

export const WithLoadingButton: Story = {
  name: 'Com botão loading (sem clique duplicado)',
  render: () => <LoadingDialogTemplate />,
};

const SizesTemplate = () => {
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | null>(null);
  return (
    <div className="flex gap-4">
      <MizzButton variant="outlined" onClick={() => setSize('sm')}>Small</MizzButton>
      <MizzButton variant="outlined" onClick={() => setSize('md')}>Medium</MizzButton>
      <MizzButton variant="outlined" onClick={() => setSize('lg')}>Large</MizzButton>
      {size && (
        <MizzDialog
          open={!!size}
          onClose={() => setSize(null)}
          title={`Dialog ${size?.toUpperCase()}`}
          size={size}
          actions={<MizzButton onClick={() => setSize(null)}>Fechar</MizzButton>}
        >
          Este dialog está usando o tamanho <strong>{size}</strong>.
        </MizzDialog>
      )}
    </div>
  );
};

export const Sizes: Story = {
  name: 'Tamanhos',
  render: () => <SizesTemplate />,
};
