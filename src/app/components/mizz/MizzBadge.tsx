import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../ui/utils';

const mizzBadgeVariants = cva(
  'inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-bold transition-colors uppercase tracking-wider',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-neutral-0',
        success: 'bg-positive-2 text-neutral-0',
        error: 'bg-negative-2 text-neutral-0',
        warning: 'bg-primary/20 text-primary',
        neutral: 'bg-neutral-20 text-neutral-500',
        outline: 'border-2 border-primary text-primary bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

/** Propriedades para o componente MizzBadge */
export interface MizzBadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof mizzBadgeVariants> {
  /** Ícone a ser exibido antes do conteúdo */
  startIcon?: ReactNode;
  /** Se verdadeiro, adiciona um ponto indicador */
  dot?: boolean;
}

/**
 * MizzBadge - Componente de etiqueta/status para o Design System Mizz.
 * Utilizado para destacar informações curtas e categorias.
 */
const MizzBadge = forwardRef<HTMLSpanElement, MizzBadgeProps>(
  ({ className, variant, startIcon, dot, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(mizzBadgeVariants({ variant, className }), 'gap-1.5')}
        // Acessibilidade: indica que é um rótulo/status
        role="status"
        {...props}
      >
        {/* Ponto indicador */}
        {dot && (
          <span 
            className="h-2 w-2 rounded-full bg-current" 
            aria-hidden="true"
          />
        )}
        
        {/* Ícone inicial */}
        {startIcon && <span aria-hidden="true">{startIcon}</span>}
        
        {/* Conteúdo */}
        {children}
      </span>
    );
  }
);

MizzBadge.displayName = 'MizzBadge';

export { MizzBadge, mizzBadgeVariants };
