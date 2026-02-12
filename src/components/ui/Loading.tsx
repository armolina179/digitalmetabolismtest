import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import styles from './Loading.module.css';

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function Loading({
  label = 'Loading...',
  className,
  ...props
}: LoadingProps) {
  return (
    <div className={cn(styles.loading, className)} role="status" aria-live="polite" {...props}>
      <span className={styles.dot} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
