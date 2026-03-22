import { forwardRef, useCallback, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from 'react';
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
  /** Exibe spinner de carregamento e impede cliques duplicados */
  loading?: boolean;
}

/**
 * MizzButton - Componente de botão do Design System Mizz.
 * Configurações: filled (padrão), outlined e text.
 * Estados: enabled, focused, pressed, disabled, loading.
 * Quando loading=true, o botão fica desabilitado e exibe um spinner,
 * impedindo cliques duplicados.
 */
const MizzButton = forwardRef<HTMLButtonElement, MizzButtonProps>(
  ({ className, variant, size, startIcon, endIcon, loading, disabled, onClick, children, ...props }, ref) => {
    const isDisabled = disabled || loading;

    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        if (isDisabled) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      },
      [isDisabled, onClick]
    );

    return (
      <button
        className={cn(mizzButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        onClick={handleClick}
        {...props}
      >
        {loading && (
          <span className="flex items-center animate-spin" aria-hidden="true">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </span>
        )}
        {!loading && startIcon && <span className="flex items-center" aria-hidden="true">{startIcon}</span>}
        <span>{children}</span>
        {!loading && endIcon && <span className="flex items-center" aria-hidden="true">{endIcon}</span>}
      </button>
    );
  }
);

MizzButton.displayName = 'MizzButton';

export { MizzButton, mizzButtonVariants };
