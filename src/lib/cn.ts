/**
 * Utility function to merge class names
 * Simple implementation for combining className strings
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
