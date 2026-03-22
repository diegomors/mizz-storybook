import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzBottomSheet } from '../app/components/mizz/MizzBottomSheet';
import { MizzButton } from '../app/components/mizz/MizzButton';
import { MizzListItem } from '../app/components/mizz/MizzListItem';

const meta = {
  title: 'Componentes/BottomSheet',
  component: MizzBottomSheet,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MizzBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicTemplate = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MizzButton onClick={() => setOpen(true)}>Abrir Bottom Sheet</MizzButton>
      <MizzBottomSheet open={open} onClose={() => setOpen(false)} title="Opções">
        <div className="flex flex-col gap-1">
          <MizzListItem title="Editar perfil" subtitle="Alterar nome e foto" onClick={() => {}} />
          <MizzListItem title="Endereços" subtitle="Gerenciar endereços de entrega" onClick={() => {}} />
          <MizzListItem title="Pagamento" subtitle="Cartões e métodos" onClick={() => {}} />
          <MizzListItem title="Sair" onClick={() => setOpen(false)} divider={false} />
        </div>
      </MizzBottomSheet>
    </>
  );
};

export const Default: Story = {
  render: () => <BasicTemplate />,
};
