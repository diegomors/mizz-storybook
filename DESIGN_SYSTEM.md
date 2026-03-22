# Mizz Design System

Sistema de design completo para o aplicativo Mizz - facilitador de pedidos em restaurantes.

## 🚀 Como iniciar o Storybook

```bash
npm run storybook
```

O Storybook será aberto em `http://localhost:6006`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   └── components/
│       ├── mizz/          # Design System Components
│       │   ├── MizzButton.tsx
│       │   ├── MizzTextField.tsx
│       │   ├── MizzRadioGroup.tsx
│       │   ├── MizzCard.tsx
│       │   ├── MizzLogo.tsx
│       │   └── MizzBadge.tsx
│       └── ui/            # UI Primitives (shadcn/base)
├── imports/               # Imported Figma Components
│   ├── Colors.tsx         # Full color palette
│   ├── Guide.tsx          # Brand identity guide
│   ├── Materials.tsx      # Support visual materials
│   └── Components.tsx     # Component specifications
└── stories/               # Storybook Stories
    ├── Introduction.mdx
    ├── Colors.mdx
    ├── Typography.mdx
    ├── UsageGuide.mdx
    ├── FigmaImports.stories.tsx
    ├── MizzButton.stories.tsx
    ├── MizzTextField.stories.tsx
    ├── MizzRadioGroup.stories.tsx
    ├── MizzCard.stories.tsx
    ├── MizzLogo.stories.tsx
    ├── MizzBadge.stories.tsx
    └── FullExample.stories.tsx
```

## 📦 Figma Imported Files

The following files were imported directly from Figma and contain the original design system:

- **`/src/imports/Colors.tsx`** - Full color palette with RGB values
- **`/src/imports/Guide.tsx`** - Full brand identity guide
- **`/src/imports/Materials.tsx`** - Banners and promotional materials
- **`/src/imports/Components.tsx`** - Component technical specifications

To use these components:

```tsx
import Guide from './imports/Guide';
import Colors from './imports/Colors';

function MyPage() {
  return <Guide />;
}
```

**Nota**: Estes arquivos são referências visuais. Para desenvolvimento, use os componentes React em `/src/app/components/mizz/`.

## 🎨 Paleta de Cores

### Cores Primárias
- **Laranja Mizz**: `#ff5c00` - Cor principal da marca
- **Preto**: `#000000` - Cor secundária
- **Branco**: `#ffffff` - Cor neutra

### Cores Semânticas
- **Negativo 1**: `#ff8585` - rgb(255, 133, 133)
- **Negativo 2**: `#ff4949` - rgb(255, 73, 73)
- **Positivo 1**: `#85ff85` - rgb(133, 255, 133)
- **Positivo 2**: `#00d68f` - rgb(0, 214, 143)

### Cores Neutras
Escala de cinzas de B0 a B900 para backgrounds, bordas e textos secundários.

## ✏️ Tipografia

**Família**: Be Vietnam Pro

**Pesos disponíveis**:
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)
- ExtraBold (800)

**Escala tipográfica**:
- Heading 1: 96px / ExtraBold / -1.92px tracking
- Heading 2: 64px / ExtraBold
- Heading 3: 40px / Bold / -0.8px tracking
- Heading 4: 32px / Bold
- Heading 5: 25.2px / SemiBold
- Body Large: 20px / Regular
- Body Medium: 18px / Regular
- Body Small: 16px / Regular
- Caption: 14px / Regular
- Small Text: 12px / Regular

## 🧩 Componentes

### MizzButton

Botão com múltiplas variantes e tamanhos.

**Variantes**:
- `primary` - Laranja com texto branco
- `secondary` - Preto com texto branco
- `outline` - Borda laranja com texto laranja
- `ghost` - Transparente com hover

**Tamanhos**:
- `sm` - 36px de altura
- `md` - 44px de altura
- `lg` - 56px de altura

**Exemplo**:
```tsx
import { MizzButton } from './components/mizz/MizzButton';

<MizzButton variant="primary" size="md">
  Fazer pedido
</MizzButton>
```

### MizzTextField

Campo de texto com label, validação e helper text.

**Props**:
- `label` - Rótulo do campo
- `error` - Mensagem de erro
- `helperText` - Texto de ajuda
- `disabled` - Estado desabilitado

**Exemplo**:
```tsx
import { MizzTextField } from './components/mizz/MizzTextField';

<MizzTextField
  label="Email"
  placeholder="seu@email.com"
  helperText="Usaremos este email para confirmações"
/>
```

### MizzRadioGroup

Grupo de radio buttons para seleção única.

**Props**:
- `name` - Nome do grupo
- `options` - Array de opções
- `value` - Valor selecionado
- `onChange` - Callback de mudança
- `label` - Label do grupo

**Exemplo**:
```tsx
import { MizzRadioGroup } from './components/mizz/MizzRadioGroup';

<MizzRadioGroup
  name="payment"
  label="Método de pagamento"
  options={[
    { value: 'credit', label: 'Cartão de crédito' },
    { value: 'pix', label: 'PIX' },
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

### MizzCard

Container para conteúdo com múltiplas variantes.

**Variantes**:
- `default` - Card simples sem bordas
- `outlined` - Card com borda
- `elevated` - Card com sombra

**Subcomponentes**:
- `MizzCardHeader`
- `MizzCardTitle`
- `MizzCardDescription`
- `MizzCardContent`
- `MizzCardFooter`

**Exemplo**:
```tsx
import {
  MizzCard,
  MizzCardHeader,
  MizzCardTitle,
  MizzCardDescription,
  MizzCardContent,
} from './components/mizz/MizzCard';

<MizzCard variant="elevated">
  <MizzCardHeader>
    <MizzCardTitle>Combo do Dia</MizzCardTitle>
    <MizzCardDescription>
      Hambúrguer + Batata + Refrigerante
    </MizzCardDescription>
  </MizzCardHeader>
  <MizzCardContent>
    <p>R$ 29,90</p>
  </MizzCardContent>
</MizzCard>
```

### MizzLogo

Logo da marca Mizz em diferentes variações.

**Variantes**:
- `full` - Logo completo (ícone + texto)
- `icon` - Apenas o ícone

**Tamanhos**:
- `sm` - 40px
- `md` - 60px
- `lg` - 120px

**Exemplo**:
```tsx
import { MizzLogo } from './components/mizz/MizzLogo';

<MizzLogo variant="full" size="md" />
```

### MizzBadge

Badge para indicar status ou informações importantes.

**Variantes**:
- `primary` - Laranja com texto branco
- `secondary` - Preto com texto branco
- `outline` - Borda laranja com texto laranja
- `ghost` - Transparente com hover

**Tamanhos**:
- `sm` - 20px de altura
- `md` - 24px de altura
- `lg` - 32px de altura

**Exemplo**:
```tsx
import { MizzBadge } from './components/mizz/MizzBadge';

<MizzBadge variant="primary" size="md">
  Novo
</MizzBadge>
```

## 📖 Guia de Identidade Visual

O design system inclui o guia completo de identidade visual importado do Figma, que contém:

- Conceito da marca
- Desenho e proporções do logo
- Assinaturas da marca
- Cromias institucionais
- Versões monocromáticas
- Usos proibidos

Acesse em: **Fundamentos > Guia de Identidade Visual**

## 🎯 Materiais Visuais de Apoio

Banners e materiais promocionais prontos para uso:

- Banners para redes sociais
- Posts para Instagram
- Materiais publicitários

Acesse em: **Fundamentos > Materiais Visuais de Apoio**

## ♿ Acessibilidade

Todos os componentes seguem as diretrizes WCAG 2.1:

- Contraste mínimo de cores (AAA para elementos importantes)
- Focus visível em todos os elementos interativos
- Suporte a navegação por teclado
- Labels descritivas para leitores de tela

## 📱 Responsividade

Os componentes são responsivos e funcionam bem em diferentes tamanhos de tela:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🛠️ Tecnologias Utilizadas

- **React** 18.3.1
- **TypeScript**
- **Tailwind CSS** 4.1.12
- **Storybook** 10.3.1
- **Class Variance Authority** - Para variantes de componentes
- **Radix UI** - Para componentes acessíveis

## 📝 Como Contribuir

1. Crie novos componentes em `/src/app/components/mizz/`
2. Crie stories correspondentes em `/src/stories/`
3. Documente as props e variantes
4. Garanta acessibilidade (WCAG 2.1)
5. Teste em diferentes tamanhos de tela

## 📄 Licença

Desenvolvido com ❤️ pela equipe Mizz