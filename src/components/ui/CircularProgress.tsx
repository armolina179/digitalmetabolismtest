import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  current: number;
  total: number;
  size?: number;
}

export function CircularProgress({ 
  current, 
  total, 
  size = 120, 
  className, 
  ...props 
}: CircularProgressProps) {
  const percentage = Math.min(Math.max((current / total) * 100, 0), 100);
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={cn('circular-progress', className)}
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '62.4375rem',
        padding: '1rem 0.5rem',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
      {...props}
    >
      <svg
        width={size}
        height={size}
        style={{
          transform: 'rotate(-90deg)',
          position: 'absolute',
        }}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#000"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.3s ease',
          }}
        />
      </svg>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {current} / {total}
      </div>
    </div>
  );
}
