'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navigation.module.css';

const navItems = [
  { href: '/dashboard', label: 'ダッシュボード', icon: '📊' },
  { href: '/exam-plan', label: '受験校管理', icon: '🏫' },
  { href: '/mock-exams', label: '模試管理', icon: '📝' },
  { href: '/costs', label: '費用管理', icon: '💰' },
  { href: '/reports', label: 'レポート', icon: '📈' },
  { href: '/settings', label: '設定', icon: '⚙️' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoIcon}>🎓</span>
          <span className={styles.logoText}>受験プランナー</span>
        </Link>
        
        <button 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          type="button"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
        
        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ''
                }`}
                onClick={closeMenu}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        {isMenuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div>
        )}
      </div>
    </nav>
  );
}