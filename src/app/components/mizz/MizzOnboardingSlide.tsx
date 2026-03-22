import type { ReactNode } from 'react';
import { cn } from '../ui/utils';

/** Propriedades para o componente MizzOnboardingSlide */
export interface MizzOnboardingSlideProps {
  /** Título principal */
  title: string;
  /** Subtítulo/descrição */
  subtitle?: string;
  /** Ilustração ou imagem (ReactNode ou URL) */
  illustration?: ReactNode;
  /** Índice do slide atual (0-based) */
  currentStep?: number;
  /** Total de slides */
  totalSteps?: number;
  /** Texto do botão de ação */
  actionLabel?: string;
  /** Callback do botão de ação */
  onAction?: () => void;
  /** Texto do link secundário (ex: "Pular") */
  secondaryLabel?: string;
  /** Callback do link secundário */
  onSecondary?: () => void;
  /** Classes CSS adicionais */
  className?: string;
}

/**
 * MizzOnboardingSlide - Slide de onboarding do Design System Mizz.
 * Background primário, ilustração, título, subtítulo e botão de ação.
 */
export const MizzOnboardingSlide = ({
  title,
  subtitle,
  illustration,
  currentStep,
  totalSteps,
  actionLabel = 'Continuar',
  onAction,
  secondaryLabel,
  onSecondary,
  className,
}: MizzOnboardingSlideProps) => {
  return (
    <div
      className={cn(
        'flex flex-col h-full min-h-[600px] bg-primary text-primary-foreground',
        className
      )}
    >
      {/* Illustration area */}
      <div className="flex-1 flex items-center justify-center p-8">
        {illustration || (
          <div className="w-48 h-48 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-8 pb-8 space-y-4">
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
        {subtitle && (
          <p className="text-base opacity-80 leading-relaxed">{subtitle}</p>
        )}

        {/* Page indicators */}
        {totalSteps && totalSteps > 1 && (
          <div className="flex gap-2 py-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === currentStep
                    ? 'w-6 bg-primary-foreground'
                    : 'w-2 bg-primary-foreground/40'
                )}
              />
            ))}
          </div>
        )}

        {/* Action button */}
        <button
          type="button"
          onClick={onAction}
          className="w-full h-14 rounded-lg bg-secondary text-secondary-foreground font-medium text-base hover:bg-secondary/90 active:bg-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
        >
          {actionLabel}
        </button>

        {/* Secondary link */}
        {secondaryLabel && (
          <button
            type="button"
            onClick={onSecondary}
            className="w-full text-center text-sm opacity-70 hover:opacity-100 transition-opacity py-2"
          >
            {secondaryLabel}
          </button>
        )}
      </div>
    </div>
  );
};
