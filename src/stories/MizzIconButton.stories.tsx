import type { Meta, StoryObj } from '@storybook/react';
import { MizzIconButton } from '../app/components/mizz/MizzIconButton';
import { Heart, Share2, Trash2, Plus } from 'lucide-react';

const meta = {
  title: 'Componentes/IconButton',
  component: MizzIconButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined', 'standard'], description: 'Variante' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Tamanho' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
    loading: { control: 'boolean', description: 'Estado de carregamento (impede cliques duplicados)' },
  },
} satisfies Meta<typeof MizzIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: { icon: <Heart size={20} />, 'aria-label': 'Favoritar', variant: 'standard' },
};

export const Filled: Story = {
  args: { icon: <Plus size={20} />, 'aria-label': 'Adicionar', variant: 'filled' },
};

export const Outlined: Story = {
  args: { icon: <Share2 size={20} />, 'aria-label': 'Compartilhar', variant: 'outlined' },
};

export const Loading: Story = {
  args: { icon: <Trash2 size={20} />, 'aria-label': 'Excluir', loading: true, variant: 'filled' },
};

export const Disabled: Story = {
  args: { icon: <Heart size={20} />, 'aria-label': 'Favoritar', disabled: true },
};

export const AllVariants: Story = {
  name: 'Variantes e Estados',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <p className="text-sm text-neutral-500 mb-4">Configurações</p>
        <div className="flex gap-4 items-center">
          <MizzIconButton variant="filled" icon={<Plus size={20} />} aria-label="Filled" />
          <MizzIconButton variant="outlined" icon={<Share2 size={20} />} aria-label="Outlined" />
          <MizzIconButton variant="standard" icon={<Heart size={20} />} aria-label="Standard" />
        </div>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">Tamanhos</p>
        <div className="flex gap-4 items-center">
          <MizzIconButton size="sm" icon={<Heart size={16} />} aria-label="Pequeno" variant="filled" />
          <MizzIconButton size="md" icon={<Heart size={20} />} aria-label="Médio" variant="filled" />
          <MizzIconButton size="lg" icon={<Heart size={24} />} aria-label="Grande" variant="filled" />
        </div>
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-4">Estados</p>
        <div className="flex gap-4 items-center">
          <MizzIconButton variant="filled" icon={<Heart size={20} />} aria-label="Enabled" />
          <MizzIconButton variant="filled" icon={<Heart size={20} />} aria-label="Loading" loading />
          <MizzIconButton variant="filled" icon={<Heart size={20} />} aria-label="Disabled" disabled />
        </div>
      </div>
    </div>
  ),
};
