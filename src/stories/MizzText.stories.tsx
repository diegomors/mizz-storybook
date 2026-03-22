import type { Meta, StoryObj } from '@storybook/react';
import { MizzText, MizzHighlight } from '../app/components/mizz/MizzText';

const meta = {
  title: 'Tipografia/Text',
  component: MizzText,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'h1', 'h2', 'h3', 'h4', 'subtitle', 'body', 'bodySmall', 'caption', 'overline', 'label', 'price', 'priceSmall'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'muted', 'success', 'error', 'warning', 'info', 'inherit'],
    },
    align: { control: 'select', options: ['left', 'center', 'right'] },
    truncate: { control: 'boolean' },
  },
} satisfies Meta<typeof MizzText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  name: 'Escala tipográfica',
  render: () => (
    <div className="flex flex-col gap-4 p-8 max-w-xl">
      <MizzText variant="display">Display — Grandes destaques</MizzText>
      <MizzText variant="h1">Heading 1 — Títulos de página</MizzText>
      <MizzText variant="h2">Heading 2 — Seções</MizzText>
      <MizzText variant="h3">Heading 3 — Subseções</MizzText>
      <MizzText variant="h4">Heading 4 — Cards e blocos</MizzText>
      <MizzText variant="subtitle">Subtitle — Subtítulo</MizzText>
      <MizzText variant="body">Body — Texto padrão do corpo, usado para parágrafos e descrições longas.</MizzText>
      <MizzText variant="bodySmall">Body Small — Texto secundário menor</MizzText>
      <MizzText variant="caption">Caption — Legendas e notas</MizzText>
      <MizzText variant="overline">Overline — Rótulos e categorias</MizzText>
      <MizzText variant="label">Label — Campos de formulário</MizzText>
      <MizzText variant="price">R$ 29,90</MizzText>
      <MizzText variant="priceSmall">R$ 14,90</MizzText>
    </div>
  ),
};

export const Colors: Story = {
  name: 'Cores semânticas',
  render: () => (
    <div className="flex flex-col gap-3 p-8">
      <MizzText variant="subtitle" color="default">Default — Texto padrão</MizzText>
      <MizzText variant="subtitle" color="primary">Primary — Destaque principal</MizzText>
      <MizzText variant="subtitle" color="secondary">Secondary — Texto secundário</MizzText>
      <MizzText variant="subtitle" color="muted">Muted — Texto silenciado</MizzText>
      <MizzText variant="subtitle" color="success">Success — Confirmação</MizzText>
      <MizzText variant="subtitle" color="error">Error — Erro</MizzText>
      <MizzText variant="subtitle" color="warning">Warning — Alerta</MizzText>
      <MizzText variant="subtitle" color="info">Info — Informação</MizzText>
    </div>
  ),
};

export const WithHighlight: Story = {
  name: 'Texto com destaque parcial',
  render: () => (
    <div className="flex flex-col gap-6 p-8 max-w-lg">
      <MizzText variant="h2">
        Peça agora e ganhe <MizzHighlight color="primary" variant="text" weight="bold">20% de desconto</MizzHighlight> no primeiro pedido
      </MizzText>

      <MizzText variant="body">
        Entrega <MizzHighlight color="success" variant="background">grátis</MizzHighlight> para pedidos acima de <MizzHighlight color="primary" variant="text">R$ 50,00</MizzHighlight>.
      </MizzText>

      <MizzText variant="body">
        Prazo estimado: <MizzHighlight color="info" variant="underline">30-45 minutos</MizzHighlight>. Acompanhe em tempo real.
      </MizzText>

      <MizzText variant="bodySmall" color="secondary">
        Oferta válida até <MizzHighlight color="warning" variant="background">31/12</MizzHighlight>. Consulte os <MizzHighlight color="primary" variant="underline">termos e condições</MizzHighlight>.
      </MizzText>
    </div>
  ),
};

export const HighlightVariants: Story = {
  name: 'Variantes de destaque',
  render: () => (
    <div className="flex flex-col gap-4 p-8 max-w-lg">
      <MizzText variant="body">
        Destaque <MizzHighlight color="primary" variant="text">texto colorido</MizzHighlight>
      </MizzText>
      <MizzText variant="body">
        Destaque <MizzHighlight color="success" variant="background">com fundo</MizzHighlight>
      </MizzText>
      <MizzText variant="body">
        Destaque <MizzHighlight color="error" variant="underline">sublinhado</MizzHighlight>
      </MizzText>
      <MizzText variant="body">
        Cores: <MizzHighlight color="primary">primary</MizzHighlight> / <MizzHighlight color="success">success</MizzHighlight> / <MizzHighlight color="error">error</MizzHighlight> / <MizzHighlight color="warning">warning</MizzHighlight> / <MizzHighlight color="info">info</MizzHighlight>
      </MizzText>
    </div>
  ),
};

export const Truncated: Story = {
  name: 'Truncamento',
  render: () => (
    <div className="flex flex-col gap-4 p-8 w-64">
      <MizzText variant="subtitle" truncate>
        Este texto será truncado com reticências quando ultrapassar a largura do container
      </MizzText>
      <MizzText variant="body" lineClamp={2}>
        Este texto terá no máximo duas linhas visíveis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </MizzText>
    </div>
  ),
};
