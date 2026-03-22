import { cn } from '../ui/utils';

export interface MizzPageControlProps {
  /** Total number of pages */
  count: number;
  /** Current active page (1-indexed) */
  current: number;
  /** Callback when page changes */
  onChange?: (page: number) => void;
  /** Optional orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Optional size */
  size?: 'sm' | 'md' | 'lg';
  /** CSS classes */
  className?: string;
}

/**
 * MizzPageControl - A numeric page indicator for navigation.
 * Typically used in onboarding, carousels, or multi-step forms.
 */
export const MizzPageControl = ({
  count,
  current,
  onChange,
  orientation = 'horizontal',
  size = 'md',
  className,
}: MizzPageControlProps) => {
  const pages = Array.from({ length: count }, (_, i) => i + 1);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  return (
    <div 
      className={cn(
        'flex gap-2',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        className
      )}
    >
      {pages.map((page) => {
        const isSelected = page === current;
        
        return (
          <button
            key={page}
            onClick={() => onChange?.(page)}
            className={cn(
              'flex items-center justify-center rounded-full font-bold transition-all',
              sizeClasses[size],
              isSelected 
                ? 'bg-primary text-neutral-0 shadow-md transform scale-110' 
                : 'bg-neutral-10 text-neutral-500 hover:bg-neutral-20 hover:text-neutral-900 border-2 border-transparent'
            )}
            aria-current={isSelected ? 'page' : undefined}
            aria-label={`Página ${page}`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
