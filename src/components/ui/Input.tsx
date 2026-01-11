import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  const inputElement = (
    <input
      className={cn('input', className)}
      style={{
        fontFamily: 'var(--font-body)',
        width: '100%',
        padding: '0.75rem',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        fontSize: '1rem',
      }}
      {...props}
    />
  );

  if (label) {
    return (
      <label style={{ display: 'block', width: '100%' }}>
        <span style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-body)' }}>
          {label}
        </span>
        {inputElement}
      </label>
    );
  }

  return inputElement;
}
