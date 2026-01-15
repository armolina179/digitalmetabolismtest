import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyle = {
    fontFamily: 'var(--font-body)',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    opacity: disabled ? 0.5 : 1,
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#000',
      color: '#fff',
      border: '1px solid #000',
    },
    secondary: {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #000',
    },
    outline: {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #000',
    },
  };

  const sizeStyles = {
    sm: {
      padding: '0.25rem 1rem',
      fontSize: '0.875rem',
    },
    md: {
      padding: '0.25rem 1rem',
      fontSize: '1rem',
    },
    lg: {
      padding: '0.25rem 1rem',
      fontSize: '1.125rem',
    },
  };

  return (
    <>
      <style>
        {`
          .button.button-primary:hover:not(:disabled) {
            background-color: #fff !important;
            color: #000 !important;
            border-color: #000 !important;
          }
          .button.button-secondary:hover:not(:disabled) {
            background-color: #000 !important;
            color: #fff !important;
            border-color: #000 !important;
          }
          .button.button-outline:hover:not(:disabled) {
            background-color: #000 !important;
            color: #fff !important;
            border-color: #000 !important;
          }
        `}
      </style>
      <button
        className={cn('button', `button-${variant}`, `button-${size}`, className)}
        style={{
          ...baseStyle,
          ...variantStyles[variant],
          ...sizeStyles[size],
          ...style,
        }}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
