import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../ui/utils';

/** Propriedades para o componente MizzTextField */
export interface MizzTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /** Rótulo do campo */
  label?: string;
  /** Mensagem de erro a ser exibida */
  error?: string;
  /** Texto auxiliar para orientação */
  helperText?: string;
  /** Ícone a ser exibido no início do campo */
  startIcon?: ReactNode;
  /** Ícone a ser exibido no final do campo */
  endIcon?: ReactNode;
}

/**
 * MizzTextField - Componente de entrada de texto para o Design System Mizz.
 * Oferece suporte a rótulos, mensagens de erro, textos auxiliares e ícones.
 */
const MizzTextField = forwardRef<HTMLInputElement, MizzTextFieldProps>(
  ({ className, label, error, helperText, startIcon, endIcon, id, required, disabled, ...props }, ref) => {
    // Gera ID único se não fornecido, para acessibilidade adequada
    const fieldId = id || useId();
    const errorId = `${fieldId}-error`;
    const helperId = `${fieldId}-helper`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {/* Label com indicador de campo obrigatório */}
        {label && (
          <label 
            htmlFor={fieldId} 
            className="text-sm font-medium text-neutral-900 px-0.5"
          >
            {label}
            {required && (
              <span className="text-negative-2 ml-1" aria-label="obrigatório">
                *
              </span>
            )}
          </label>
        )}
        
        {/* Container do input com ícones */}
        <div className="relative flex items-center group">
          {/* Ícone inicial */}
          {startIcon && (
            <span 
              className={cn(
                "absolute left-3.5 flex items-center pointer-events-none transition-colors",
                error ? "text-negative-2" : "text-neutral-500 group-focus-within:text-primary"
              )}
              aria-hidden="true"
            >
              {startIcon}
            </span>
          )}
          
          {/* Input */}
          <input
            id={fieldId}
            className={cn(
              'flex h-12 w-full rounded-xl border-2 bg-neutral-0 px-4 py-2 text-base transition-all',
              'placeholder:text-neutral-500',
              'focus-visible:outline-none focus-visible:ring-0',
              'disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-neutral-10',
              'hover:border-neutral-50',
              // Adiciona padding quando há ícones
              startIcon && 'pl-11',
              endIcon && 'pr-11',
              // Estados de erro
              error
                ? 'border-negative-2 text-negative-2'
                : 'border-neutral-30 text-neutral-900 focus-visible:border-primary',
              className
            )}
            ref={ref}
            required={required}
            disabled={disabled}
            // Acessibilidade: conecta input com mensagens de erro/ajuda
            aria-invalid={!!error}
            aria-describedby={cn(
              error && errorId,
              helperText && !error && helperId
            )}
            {...props}
          />
          
          {/* Ícone final */}
          {endIcon && (
            <span 
              className={cn(
                "absolute right-3.5 flex items-center pointer-events-none transition-colors",
                error ? "text-negative-2" : "text-neutral-500 group-focus-within:text-primary"
              )}
              aria-hidden="true"
            >
              {endIcon}
            </span>
          )}
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
        
        {/* Texto auxiliar */}
        {helperText && !error && (
          <p 
            id={helperId} 
            className="text-xs text-neutral-500 px-1"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

MizzTextField.displayName = 'MizzTextField';

export { MizzTextField };
