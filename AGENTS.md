# Architecture Rules & Conventions - Mizz Storybook

Patterns and conventions for this component library.

---

## Project Architecture

```
src/
├── app/components/mizz/   # Core Design System (4 components)
├── app/components/ui/     # Utilities (cn helper)
├── stories/               # Storybook Stories & MDX
└── styles/                # Global Styles & Tokens
```

## Component Organization

- **Mizz Components**: Prefixed with `Mizz` (e.g., `MizzButton.tsx`).
- Components: Button, TextField, RadioGroup, PageControl.
- Use `class-variance-authority` (CVA) for variants.
- Use `cn()` from `utils.ts` for merging Tailwind classes.

## File Naming

| Element | Convention | Example |
|---|---|---|
| React components | `PascalCase.tsx` | `MizzButton.tsx` |
| Stories | `<Component>.stories.tsx` | `MizzButton.stories.tsx` |
| Documentation | `<Name>.mdx` | `Colors.mdx` |

## Code Style

- TypeScript strict mode.
- Functional components with hooks.
- JSDoc for all component props (Storybook Autodocs).
- Tailwind CSS for styling with CSS variable tokens.
- WCAG 2.1 accessibility.

## Storybook Patterns

- CSF3 format.
- `tags: ['autodocs']` on all stories.
- Title pattern: `Componentes/<Name>` or `Fundamentos/<Name>`.
