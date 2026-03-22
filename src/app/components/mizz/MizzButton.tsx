import { forwardRef, useState, type ButtonHTMLAttributes, type ReactNode, type MouseEvent } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../ui/utils';

const mizzButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 select-none cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm active:scale-[0.98]',
        secondary: 'bg-neutral-900 text-neutral-0 hover:bg-neutral-900/90 shadow-sm active:scale-[0.98]',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5 active:scale-[0.98]',
        ghost: 'text-neutral-900 hover:bg-neutral-10 active:scale-[0.98]',
        neutral: 'bg-neutral-20 text-neutral-900 hover:bg-neutral-30 active:scale-[0.98]',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'lg',
    },
  }
);

/** Propriedades para o componente MizzButton */
export interface MizzButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof mizzButtonVariants> {
  /** Se verdadeiro, mostra um indicador de carregamento e desabilita interações */
  loading?: boolean;
  /** Ícone a ser exibido antes do conteúdo */
  startIcon?: ReactNode;
  /** Ícone a ser exibido depois do conteúdo */
  endIcon?: ReactNode;
}

/**
 * MizzButton - O componente principal de ação para o Design System Mizz.
 * Suporta múltiplas variantes (primary, secondary, outline, ghost) e tamanhos.
 * Inclui proteção contra múltiplos cliques e estados de carregamento.
 */
const MizzButton = forwardRef<HTMLButtonElement, MizzButtonProps>(
  ({ className, variant, size, rounded, loading, startIcon, endIcon, disabled, children, onClick, ...props }, ref) => {
    const [isProcessing, setIsProcessing] = useState(false);

    // Controle de integridade: previne múltiplos cliques durante processamento
    const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
      if (isProcessing || loading || disabled) {
        e.preventDefault();
        return;
      }

      setIsProcessing(true);
      
      try {
        await onClick?.(e);
      } finally {
        // Reset do estado após um pequeno delay para evitar cliques muito rápidos
        setTimeout(() => {
          setIsProcessing(false);
        }, 300);
      }
    };

    const isDisabled = disabled || loading || isProcessing;
    const showLoading = loading || isProcessing;

    return (
      <button
        className={cn(mizzButtonVariants({ variant, size, rounded, className }))}
        ref={ref}
        disabled={isDisabled}
        onClick={handleClick}
        // Acessibilidade: indica estado de carregamento para leitores de tela
        aria-busy={showLoading}
        aria-disabled={isDisabled}
        {...props}
      >
        {/* Indicador de loading */}
        {showLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        
        {/* Ícone inicial */}
        {!showLoading && startIcon && <span aria-hidden="true">{startIcon}</span>}
        
        {/* Conteúdo do botão */}
        <span>{children}</span>
        
        {/* Ícone final */}
        {!showLoading && endIcon && <span aria-hidden="true">{endIcon}</span>}
      </button>
    );
  }
);

MizzButton.displayName = 'MizzButton';

export { MizzButton, mizzButtonVariants };
