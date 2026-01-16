import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

interface RootLayoutProps {
  children?: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      {children || <Outlet />}
    </div>
  );
}
