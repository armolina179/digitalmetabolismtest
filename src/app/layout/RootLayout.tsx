import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {
  children?: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      {children || <Outlet />}
    </div>
  );
}
