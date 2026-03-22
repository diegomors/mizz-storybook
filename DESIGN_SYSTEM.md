# Mizz Design System

Sistema de design para o aplicativo Mizz baseado no Material Theme.

## Como iniciar o Storybook

```bash
npm run storybook
```

O Storybook será aberto em `http://localhost:6006`

## Estrutura do Projeto

```
src/
├── app/
│   └── components/
│       ├── mizz/          # Design System Components
│       │   ├── MizzButton.tsx
│       │   ├── MizzTextField.tsx
│       │   ├── MizzRadioGroup.tsx
│       │   └── MizzPageControl.tsx
│       └── ui/            # Utilities
│           └── utils.ts
├── styles/                # Global Styles & Tokens
└── stories/               # Storybook Stories & MDX
    ├── Introduction.mdx
    ├── Colors.mdx
    ├── MizzButton.stories.tsx
    ├── MizzTextField.stories.tsx
    ├── MizzRadioGroup.stories.tsx
    └── MizzPageControl.stories.tsx
```

## Paleta de Cores

### Primária
- **O300**: `#ff5c00` - rgb(255, 92, 0)

### Semânticas
- **Negativo 1**: `#ffdad6` - rgb(255, 218, 214)
- **Negativo 2**: `#ff5449` - rgb(255, 84, 73)
- **Positivo 1**: `#e6faf1` - rgb(230, 250, 241)
- **Positivo 2**: `#00ca75` - rgb(0, 202, 117)

### Neutras
Escala de B0 (#ffffff) a B900 (#000000).

## Componentes

### MizzButton

Botão com configurações filled, outlined e text.

```tsx
<MizzButton variant="filled">Enabled</MizzButton>
<MizzButton variant="outlined">Enabled</MizzButton>
<MizzButton variant="text">Enabled</MizzButton>
```

### MizzTextField

Campo de texto outlined com label flutuante.

```tsx
<MizzTextField label="Label" placeholder="Input" />
```

### MizzRadioGroup

Radio button para seleção única.

```tsx
<MizzRadioGroup
  name="options"
  options={[
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
  ]}
  value={selected}
  onChange={setSelected}
/>
```

### MizzPageControl

Indicador de página para navegação.

```tsx
<MizzPageControl count={3} selected={1} onChange={setPage} />
```

## Tecnologias

- React 18.3.1
- TypeScript
- Tailwind CSS 4.1.12
- Storybook 10.3.1
- Class Variance Authority
