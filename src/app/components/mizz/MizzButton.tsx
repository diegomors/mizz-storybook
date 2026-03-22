import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../ui/utils';

const mizzButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-38 select-none cursor-pointer',
  {
    variants: {
      variant: {
        /** Filled (default) - Botão com fundo sólido */
        filled:
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-sm',
        /** Outlined - Botão com borda */
        outlined:
          'border border-primary text-primary bg-transparent hover:bg-primary/5 active:bg-primary/10',
        /** Text - Botão sem fundo nem borda */
        text: 'text-primary bg-transparent hover:bg-primary/5 active:bg-primary/10',
      },
      size: {
        sm: 'h-10 px-4 text-sm rounded-full',
        md: 'h-11 px-6 text-sm rounded-full',
        lg: 'h-14 px-8 text-base rounded-full',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  }
);

/** Propriedades para o componente MizzButton */
export interface MizzButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof mizzButtonVariants> {
  /** Ícone a ser exibido antes do conteúdo */
  startIcon?: ReactNode;
  /** Ícone a ser exibido depois do conteúdo */
  endIcon?: ReactNode;
}

/**
 * MizzButton - Componente de botão do Design System Mizz.
 * Configurações: filled (padrão), outlined e text.
 * Estados: enabled, focused, pressed, disabled.
 */
const MizzButton = forwardRef<HTMLButtonElement, MizzButtonProps>(
  ({ className, variant, size, startIcon, endIcon, children, ...props }, ref) => {
    return (
      <button
        className={cn(mizzButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {startIcon && <span className="flex items-center" aria-hidden="true">{startIcon}</span>}
        <span>{children}</span>
        {endIcon && <span className="flex items-center" aria-hidden="true">{endIcon}</span>}
      </button>
    );
  }
);

MizzButton.displayName = 'MizzButton';

export { MizzButton, mizzButtonVariants };
