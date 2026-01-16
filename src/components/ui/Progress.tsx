import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

export function Progress({ value, max = 100, className, ...props }: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      className={cn('progress', className)}
      style={{
        width: '100%',
        height: '0.5rem',
        backgroundColor: '#e0e0e0',
        borderRadius: '0.25rem',
        overflow: 'hidden',
      }}
      {...props}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: '#000',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
}
