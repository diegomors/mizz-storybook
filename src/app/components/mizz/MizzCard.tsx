import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../ui/utils';

/** Propriedades para o componente MizzCard */
export interface MizzCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Variante visual do card */
  variant?: 'default' | 'outlined' | 'elevated';
  /** Se verdadeiro, torna o card interativo com hover */
  interactive?: boolean;
}

/**
 * MizzCard - Componente de container para agrupar conteúdo relacionado.
 * Oferece variantes visualmente distintas e suporte a estados interativos.
 */
const MizzCard = forwardRef<HTMLDivElement, MizzCardProps>(
  ({ className, variant = 'default', interactive = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-3xl transition-all',
          variant === 'default' && 'bg-neutral-0 border border-neutral-20',
          variant === 'outlined' && 'bg-neutral-0 border-2 border-neutral-30',
          variant === 'elevated' && 'bg-neutral-0 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-neutral-10',
          // Estados interativos
          interactive && 'cursor-pointer hover:shadow-[0_15px_45px_rgb(0,0,0,0.1)] hover:scale-[1.01] active:scale-[0.99]',
          // Acessibilidade para cards interativos
          interactive && 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          className
        )}
        // Torna o card focável se for interativo
        tabIndex={interactive ? 0 : undefined}
        // Indica que é clicável para tecnologias assistivas
        role={interactive ? 'button' : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MizzCard.displayName = 'MizzCard';

/** Header do card, geralmente contém o título e a descrição */
const MizzCardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-2 p-6', className)}
    {...props}
  />
));
MizzCardHeader.displayName = 'MizzCardHeader';

/** Título principal do card */
const MizzCardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-semibold text-black', className)}
    {...props}
  />
));
MizzCardTitle.displayName = 'MizzCardTitle';

/** Descrição secundária do card */
const MizzCardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-base text-gray-600', className)}
    {...props}
  />
));
MizzCardDescription.displayName = 'MizzCardDescription';

/** Conteúdo principal do card */
const MizzCardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
MizzCardContent.displayName = 'MizzCardContent';

/** Rodapé do card, geralmente contém ações ou metadados */
const MizzCardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
MizzCardFooter.displayName = 'MizzCardFooter';

export {
  MizzCard,
  MizzCardHeader,
  MizzCardFooter,
  MizzCardTitle,
  MizzCardDescription,
  MizzCardContent,
};
