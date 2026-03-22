# Mizz Storybook - Claude Development Guide

## Build & Development Commands
- **Start Storybook**: `npm run storybook`
- **Build Production Storybook**: `npm run build-storybook`
- **Vite Dev Server (Standalone)**: `npm run dev`
- **Vite Build**: `npm run build`

## Tech Stack
- **Framework**: React 18.3.1 (Vite based)
- **Styling**: Tailwind CSS 4.0+, Radix UI Primitives, MUI (selected icons/components), Motion (animations)
- **Storybook**: version 10+ (CSF3 format)
- **Component Logic**: `class-variance-authority` (CVA), `clsx`, `tailwind-merge`

## Coding Conventions
- **Naming**:
  - Components: `PascalCase.tsx` (e.g. `MizzButton.tsx`)
  - Utilities/Hooks: `kebab-case.ts` (e.g. `use-is-mobile.ts`)
  - Stories: `ComponentName.stories.tsx`
- **Documentation**: Use JSDoc for all component props for Storybook Autodocs.
- **Organization**:
  - Core Design components in `src/app/components/mizz/`
  - Base UI Primitives in `src/app/components/ui/`
  - Figma imports/references in `src/imports/`
- **Architecture**: Follow patterns defined in `AGENTS.md`.

## Accessibility (WCAG 2.1)
- Use Radix UI primitives whenever possible for complex UI components (Dialogs, Popovers, etc.)
- Ensure all interactive elements have visible focus states.
- Maintain a minimum contrast ratio of 4.5:1 for text.
