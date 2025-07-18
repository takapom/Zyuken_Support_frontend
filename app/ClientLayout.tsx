'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import BottomNav from '@/components/BottomNav';
import { useAuth } from '@/contexts/AuthContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  
  // ナビゲーションを表示しないページのリスト
  const noNavPages = ['/login', '/signup', '/'];
  const shouldShowNav = isAuthenticated && !noNavPages.includes(pathname);

  return (
    <>
      {shouldShowNav && <Navigation />}
      <main style={{ minHeight: shouldShowNav ? 'calc(100vh - 64px)' : '100vh' }}>
        {children}
      </main>
      {shouldShowNav && <BottomNav />}
    </>
  );
}