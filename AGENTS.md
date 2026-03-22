# Architecture Rules & Conventions - Mizz Storybook

This document defines the architectural patterns, coding conventions, and engineering principles that govern this component library. Follow these when adding new components, fixing bugs, or refactoring existing code.

The goal is **pragmatic consistency** — apply these patterns where they reduce complexity, not as ceremony. Avoid over-engineering; use only what is necessary for the current scope.

---

## Table of Contents

1. [Project Architecture](#project-architecture)
2. [Component Organization](#component-organization)
3. [SOLID Principles in Practice](#solid-principles-in-practice)
4. [File & Module Naming](#file--module-naming)
5. [Code Style](#code-style)
6. [Documentation & Comments](#documentation--comments)
7. [Storybook Patterns](#storybook-patterns)

---

## Project Architecture

The project is a specialized Storybook environment for the **Mizz Design System**. It focuses on UI components, visual documentation, and design specifications.

```
┌──────────────────────────────────────────────────────┐
│  src/app/components/mizz/ (Core Design System)       │
│  src/app/components/ui/   (Base Primitives/shadcn)   │
└──────┬───────────────────────────────────────────────┘
       │  documented in ▼
┌──────────────────────────────────────────────────────┐
│  src/stories/             (Storybook Stories & MDX)  │
└──────┬───────────────────────────────────────────────┘
       │  references ▼
┌──────────────────────────────────────────────────────┐
│  src/imports/             (Figma Specification Files)│
│  src/styles/              (Global Styles & Tokens)   │
│  src/assets/              (Static Assets)            │
└──────────────────────────────────────────────────────┘
```

### Layer Definitions

| Layer | Purpose |
|---|---|
| `src/app/components/mizz/` | The implementation of the Mizz Design System components. |
| `src/app/components/ui/` | Low-level UI primitives (often based on Radix UI or shadcn). |
| `src/stories/` | Storybook configuration and component stories (CSF3). |
| `src/imports/` | Visual references and specifications directly from Figma. |
| `src/styles/` | Global CSS, Tailwind configurations, and theme tokens. |

---

## Component Organization

### Component Structure

Each significant component should be self-contained in its own file (or folder if it has many sub-components).

- **Mizz Components**: Prefixed with `Mizz` (e.g., `MizzButton.tsx`).
- **UI Primitives**: Generic names (e.g., `button.tsx`).

### Guidelines

- **Atomic Design-ish**: While not strictly Enforced, keep components focused. A `MizzCard` might be composed of `MizzCardHeader`, `MizzCardContent`, etc.
- **Composition over Inheritance**: Use React composition patterns to build complex components.
- **Base Primitives**: Always check `src/app/components/ui/` before building a new primitive. Leverage Radix UI for accessibility.

---

## SOLID Principles in Practice

Apply SOLID where it reduces complexity. These are practical patterns, not dogma.

### Single Responsibility

Each component should own **one visual concern**:

- `MizzButton`: Handles button styles, states, and simple click behavior.
- `MizzTextField`: Handles input layout, labels, and error states.

### Open/Closed

Prefer extension over modification:

- **New Components**: Add new files. Don't add unrelated logic to existing components.
- **Variant Pattern**: Use `class-variance-authority` (CVA) to handle variants like `primary`, `secondary`, `outline` without bloating the logic.

### Dependency Inversion

- Components should depend on **types and interfaces**, not hardcoded values where possible.
- Use CSS variables/Tailwind tokens for colors and spacing instead of hardcoded hex values.

---

## File & Module Naming

| Element | Convention | Example |
|---|---|---|
| TypeScript files | `kebab-case.ts` / `kebab-case.tsx` | `mizz-button.tsx`, `use-is-mobile.ts` |
| React components (files) | `PascalCase.tsx` (for Mizz) | `MizzButton.tsx`, `MizzCard.tsx` |
| React components (exports) | `PascalCase` | `MizzButton`, `MizzCard` |
| Custom hooks | `use-<name>.ts` (file), `use<Name>` (export) | `use-disclosure.ts` → `useDisclosure()` |
| Stories files | `<ComponentName>.stories.tsx` | `MizzButton.stories.tsx` |
| Documentation files | `<Name>.mdx` | `Introduction.mdx` |
| Constants | `UPPER_SNAKE_CASE` | `MIZZ_ORANGE` |
| Types | `PascalCase` | `MizzButtonProps` |

---

## Code Style

### General

- **TypeScript strict mode** — Leverage the compiler. Avoid `any`.
- **Prefer explicit imports** — `import { X, Y } from 'module'`, not `import *`.
- **Keep components focused** — extract sub-components if a file exceeds ~200 lines.
- **Prefer functional components** and hooks.

### Type Safety

- Define explicit interfaces for Component `Props`.
- Use JSDoc to document props so they appear in Storybook's "Controls" panel.

### Component Patterns

- **Composability**: Use `Slot` from `@radix-ui/react-slot` if you need to support `asChild`.
- **Styling**: Use Tailwind CSS for 90% of styling. Use `cn()` utility for merging classes.
- **Accessibility**: Use Radix UI primitives for complex interactions (Dialogs, Popovers, etc.).

---

## Documentation & Comments

### Component Documentation

Every component should have a brief JSDoc comment. This is used by Storybook's Autodocs.

```typescript
/**
 * MizzButton - The primary action component for the Mizz Design System.
 * Supports multiple variants and sizes.
 */
export const MizzButton = ({ ... }) => { ... }
```

### Prop Documentation

Document props using JSDoc. This provides tooltips in Storybook.

```typescript
export interface MizzButtonProps {
  /** The visual variant of the button */
  variant?: 'primary' | 'secondary' | 'outline';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
}
```

---

## Storybook Patterns

### Use CSF3

We use Component Story Format 3 (CSF3).

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { MizzButton } from './MizzButton';

const meta: Meta<typeof MizzButton> = {
  component: MizzButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MizzButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};
```

### Controls & Actions

- Use `argTypes` to define custom control types if Storybook doesn't infer them correctly.
- Use `fn()` from `@storybook/test` for event handler mocks (e.g., `onClick: fn()`).

### MDX Documentation

Use `.mdx` files for long-form documentation, design guidelines, and foundations like "Colors" and "Typography".

---

## Quick Reference for LLM Agents

1. **Read `AGENTS.md` first**.
2. **Read `DESIGN_SYSTEM.md`** to understand available components and tokens.
3. **New component = new file + new story**.
4. **Follow the `Mizz` prefix** for core design system components.
5. **Use Tailwind CSS** for styling.
6. **Ensure Accessibility** by using Radix UI primitives.
7. **Document everything with JSDoc**.
8. **Stay lean** - don't add complex state logic unless necessary for the UI demonstration.
