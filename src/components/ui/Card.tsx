import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn('card', className)}
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '1.5rem',
        backgroundColor: '#fff',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
