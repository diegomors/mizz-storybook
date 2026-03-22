import type { Meta, StoryObj } from '@storybook/react';
import { MizzChip } from '../app/components/mizz/MizzChip';
import { Star } from 'lucide-react';

const meta = {
  title: 'Componentes/Chip',
  component: MizzChip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined'], description: 'Variante visual' },
    size: { control: 'select', options: ['sm', 'md'], description: 'Tamanho' },
    selected: { control: 'boolean', description: 'Estado selecionado' },
    loading: { control: 'boolean', description: 'Estado de carregamento' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
  },
} satisfies Meta<typeof MizzChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: { children: 'Tag', variant: 'filled' },
};

export const Outlined: Story = {
  args: { children: 'Tag', variant: 'outlined' },
};

export const Selected: Story = {
  args: { children: 'Selecionado', variant: 'filled', selected: true, onClick: () => {} },
};

export const WithIcon: Story = {
  args: { children: 'Favorito', startIcon: <Star size={14} />, variant: 'filled', onClick: () => {} },
};

export const Closable: Story = {
  args: { children: 'Removível', variant: 'outlined', onClose: () => alert('Fechar!') },
};

export const LoadingChip: Story = {
  name: 'Loading',
  args: { children: 'Processando', loading: true, onClick: () => {} },
};

export const AllVariants: Story = {
  name: 'Variantes',
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex gap-3 flex-wrap">
        <MizzChip variant="filled">Filled</MizzChip>
        <MizzChip variant="outlined">Outlined</MizzChip>
        <MizzChip variant="filled" selected onClick={() => {}}>Selected</MizzChip>
        <MizzChip variant="outlined" selected onClick={() => {}}>Selected</MizzChip>
      </div>
      <div className="flex gap-3 flex-wrap">
        <MizzChip variant="filled" startIcon={<Star size={14} />} onClick={() => {}}>Com ícone</MizzChip>
        <MizzChip variant="outlined" onClose={() => {}}>Removível</MizzChip>
        <MizzChip variant="filled" loading onClick={() => {}}>Loading</MizzChip>
        <MizzChip variant="filled" disabled onClick={() => {}}>Disabled</MizzChip>
      </div>
    </div>
  ),
};
