'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomNav.module.css';

const navItems = [
  { href: '/dashboard', label: 'ホーム', icon: '🏠' },
  { href: '/exam-plan', label: '志望校', icon: '🏫' },
  { href: '/mock-exams', label: '模試', icon: '📝' },
  { href: '/costs', label: '費用', icon: '💰' },
];

export default function BottomNav() {
  const pathname = usePathname();

  // ホームページでは表示しない
  if (pathname === '/') return null;

  return (
    <nav className={styles.bottomNav}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.navItem} ${
            pathname === item.href ? styles.active : ''
          }`}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}