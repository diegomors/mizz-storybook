import { forwardRef, useId } from 'react';
import { cn } from '../ui/utils';

/** Representação de uma opção de rádio */
export interface MizzRadioOption {
  /** Valor da opção */
  value: string;
  /** Rótulo da opção */
  label: string;
  /** Descrição adicional opcional */
  description?: string;
  /** Se verdadeiro, desabilita esta opção específica */
  disabled?: boolean;
}

/** Propriedades para o componente MizzRadioGroup */
export interface MizzRadioGroupProps {
  /** Nome do grupo de radio buttons */
  name: string;
  /** Opções disponíveis */
  options: MizzRadioOption[];
  /** Valor selecionado */
  value?: string;
  /** Callback quando o valor muda */
  onChange?: (value: string) => void;
  /** Rótulo do grupo */
  label?: string;
  /** Se verdadeiro, marca o campo como obrigatório */
  required?: boolean;
  /** Mensagem de erro */
  error?: string;
  /** Orientação do layout */
  orientation?: 'vertical' | 'horizontal';
  /** Classes CSS adicionais */
  className?: string;
}

/**
 * MizzRadioGroup - Componente de seleção única para o Design System Mizz.
 * Permite que o usuário escolha uma opção entre várias.
 */
const MizzRadioGroup = forwardRef<HTMLDivElement, MizzRadioGroupProps>(
  ({ 
    name, 
    options, 
    value, 
    onChange, 
    label, 
    required,
    error,
    orientation = 'vertical',
    className 
  }, ref) => {
    const groupId = useId();
    const errorId = `${groupId}-error`;

    return (
      <div ref={ref} className={cn('flex flex-col gap-3', className)}>
        {/* Label do grupo */}
        {label && (
          <label className="text-sm font-medium text-neutral-900 px-0.5">
            {label}
            {required && (
              <span className="text-negative-2 ml-1" aria-label="obrigatório">
                *
              </span>
            )}
          </label>
        )}
        
        {/* Grupo de opções */}
        <div 
          role="radiogroup"
          aria-label={label}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'flex gap-2',
            orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'
          )}
        >
          {options.map((option, index) => {
            const isChecked = value === option.value;
            const optionId = `${groupId}-option-${index}`;
            
            return (
              <label
                key={option.value}
                htmlFor={optionId}
                className={cn(
                  'flex items-start gap-4 cursor-pointer p-3 rounded-xl transition-all border-2',
                  'hover:bg-neutral-10',
                  isChecked 
                    ? 'border-primary bg-primary/5' 
                    : 'border-neutral-20 bg-neutral-0',
                  option.disabled && 'opacity-40 cursor-not-allowed hover:bg-transparent grayscale'
                )}
              >
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    id={optionId}
                    type="radio"
                    name={name}
                    value={option.value}
                    checked={isChecked}
                    onChange={(e) => !option.disabled && onChange?.(e.target.value)}
                    disabled={option.disabled}
                    className="peer sr-only"
                    aria-describedby={option.description ? `${optionId}-desc` : undefined}
                  />
                  
                  {/* Círculo externo */}
                  <div 
                    className={cn(
                      'w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center',
                      isChecked 
                        ? 'border-primary bg-primary' 
                        : error 
                        ? 'border-negative-2'
                        : 'border-neutral-30 bg-neutral-0',
                      'peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2'
                    )} 
                  >
                    {/* Círculo interno (indicador de seleção) */}
                    <div 
                      className={cn(
                        'w-2.5 h-2.5 rounded-full bg-neutral-0 transition-transform duration-200',
                        isChecked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      )} 
                    />
                  </div>
                </div>
                
                {/* Label e descrição */}
                <div className="flex flex-col gap-0.5">
                  <span className={cn(
                    "text-base font-medium transition-colors",
                    isChecked ? "text-neutral-900" : "text-neutral-500"
                  )}>
                    {option.label}
                  </span>
                  {option.description && (
                    <span 
                      id={`${optionId}-desc`}
                      className="text-sm text-neutral-500"
                    >
                      {option.description}
                    </span>
                  )}
                </div>
              </label>
            );
          })}
        </div>
        
        {/* Mensagem de erro */}
        {error && (
          <p 
            id={errorId}
            className="text-xs font-medium text-negative-2 px-1"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

MizzRadioGroup.displayName = 'MizzRadioGroup';

export { MizzRadioGroup };
