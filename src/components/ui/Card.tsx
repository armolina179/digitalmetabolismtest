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
        border: '0.0625rem solid #e0e0e0',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        backgroundColor: '#fff',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
