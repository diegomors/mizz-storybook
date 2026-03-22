import { type ReactNode } from 'react';
import { cn } from '../ui/utils';

/** Propriedades para o componente MizzEmptyState */
export interface MizzEmptyStateProps {
  /** Ícone ou ilustração */
  icon?: ReactNode;
  /** Título */
  title: string;
  /** Descrição */
  description?: string;
  /** Ação (ex: botão) */
  action?: ReactNode;
  /** Classes CSS adicionais */
  className?: string;
}

/**
 * MizzEmptyState - Estado vazio do Design System Mizz.
 * Usado quando uma lista está vazia, busca não retorna resultados, etc.
 */
export const MizzEmptyState = ({
  icon,
  title,
  description,
  action,
  className,
}: MizzEmptyStateProps) => {
  return (
    <div className={cn('flex flex-col items-center justify-center text-center py-12 px-6', className)}>
      {icon ? (
        <div className="text-muted-foreground mb-4">{icon}</div>
      ) : (
        <div className="mb-4 text-muted-foreground">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M22 28h20M22 36h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )}
      <h3 className="text-lg font-medium text-foreground mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground max-w-xs mb-4">{description}</p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
};
