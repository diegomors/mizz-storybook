import { type ReactNode } from 'react';
import { cn } from '../ui/utils';

/** Propriedades para o componente MizzDeliveryBanner */
export interface MizzDeliveryBannerProps {
  /** Ícone */
  icon?: ReactNode;
  /** Texto principal */
  title: string;
  /** Subtexto (ex: tempo, distância) */
  subtitle?: string;
  /** Variante */
  variant?: 'default' | 'success' | 'warning' | 'promo';
  /** Classes CSS adicionais */
  className?: string;
}

/**
 * MizzDeliveryBanner - Banner informativo de entrega do Design System Mizz.
 * Usado para exibir tempo de entrega, frete grátis, promoções, etc.
 */
export const MizzDeliveryBanner = ({
  icon,
  title,
  subtitle,
  variant = 'default',
  className,
}: MizzDeliveryBannerProps) => {
  const variantStyles = {
    default: 'bg-muted text-foreground',
    success: 'bg-positive-1 text-positive-2',
    warning: 'bg-warning-1 text-warning-2',
    promo: 'bg-primary/10 text-primary',
  };

  const defaultIcons: Record<string, ReactNode> = {
    default: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    success: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10l2 2h3l2-3h4l2-2h1l1 5H2l1-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="6" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    warning: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l7.5 13H2.5L10 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 8.5v3M10 13.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    promo: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2 4h4l-3 3 1 5-4-2-4 2 1-5-3-3h4l2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  };

  return (
    <div className={cn('flex items-center gap-3 px-4 py-2.5 rounded-lg', variantStyles[variant], className)}>
      <span className="flex-shrink-0">{icon || defaultIcons[variant]}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium">{title}</p>
        {subtitle && <p className="text-xs opacity-80 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
};
