import { type FC } from 'react';
import svgPaths from '../../../imports/svg-ok8lgu6xay';
import { cn } from '../ui/utils';

/** Propriedades para o componente MizzLogo */
export interface MizzLogoProps {
  /** Variante de exibição do logo: completo ou apenas o ícone */
  variant?: 'full' | 'icon';
  /** Tamanho pré-definido do logo */
  size?: 'sm' | 'md' | 'lg';
  /** Classes CSS adicionais */
  className?: string;
}

const Hand = () => {
  return (
    <div className="absolute h-[169.031px] left-[-10.42px] top-[-9.79px] w-[111.495px]">
      <svg 
        className="absolute block size-full" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 111.495 169.031"
        aria-hidden="true"
      >
        <g>
          <path d={svgPaths.p3840e380} fill="black" />
          <path d={svgPaths.p22606d00} fill="black" />
          <path d={svgPaths.p33a65800} fill="black" />
          <path d={svgPaths.pfbe8180} fill="#FCFCFC" />
          <path d={svgPaths.p199b7a00} fill="#FCFCFC" />
          <path d={svgPaths.p979c300} fill="#FCFCFC" />
        </g>
      </svg>
    </div>
  );
};

/**
 * MizzLogo - Componente de marca para o Design System Mizz.
 * Renderiza o logo completo (ícone + texto) ou apenas o ícone.
 */
const MizzLogo: FC<MizzLogoProps> = ({ variant = 'full', size = 'md', className }) => {
  const sizeClasses = {
    sm: { container: 'h-[40px]', icon: 'size-[40px] rounded-[45px]', text: 'h-[22.4px] w-[130.4px]' },
    md: { container: 'h-[60px]', icon: 'size-[60px] rounded-[68px]', text: 'h-[33.6px] w-[195.6px]' },
    lg: { container: 'h-[120px]', icon: 'size-[120px] rounded-[136px]', text: 'h-[67.3px] w-[391.2px]' },
  };

  const currentSize = sizeClasses[size];

  if (variant === 'icon') {
    return (
      <div 
        className={cn('relative bg-[#ff5c00] overflow-clip', currentSize.icon, className)}
        role="img"
        aria-label="Logo Mizz"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-[calc(50%+0.16px)]" style={{ width: '80.5%', height: '88.2%' }}>
          <Hand />
        </div>
      </div>
    );
  }

  return (
    <div 
      className={cn('flex gap-3 items-end', currentSize.container, className)}
      role="img"
      aria-label="Logo Mizz"
    >
      <div className={cn('relative bg-[#ff5c00] overflow-clip shrink-0', currentSize.icon)}>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-[calc(50%+0.16px)]" style={{ width: '80.5%', height: '88.2%' }}>
          <Hand />
        </div>
      </div>
      <div className={cn('relative shrink-0', currentSize.text)}>
        <svg 
          className="absolute block size-full" 
          fill="none" 
          preserveAspectRatio="none" 
          viewBox="0 0 391.219 67.3125"
          aria-hidden="true"
        >
          <g>
            <path d={svgPaths.p3e5bae00} fill="white" />
            <path d={svgPaths.p206c7500} fill="white" />
            <path d={svgPaths.p29e83870} fill="white" />
            <path d={svgPaths.p2f97b500} fill="white" />
          </g>
        </svg>
      </div>
    </div>
  );
};

MizzLogo.displayName = 'MizzLogo';

export { MizzLogo };
