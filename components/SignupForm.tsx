'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSignup } from '@/hooks/user/useSignup';
import styles from '@/app/signup/page.module.css';

export default function SignupForm() {
  const { signup, isLoading, error: signupError } = useSignup();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    department: '',
    graduation_year: ''
  });
  const [validationError, setValidationError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // パスワードのバリデ
    if (formData.password !== formData.confirmPassword) {
      setValidationError('パスワードが一致しません');
      return;
    }

    //同じくパスワードのバリデ
    if (formData.password.length < 6) {
      setValidationError('パスワードは6文字以上で入力してください');
      return;
    }

    try {
      await signup({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        department: formData.department,
        graduation_year: parseInt(formData.graduation_year)
      });
    } catch {
      // エラーはuseSignup内で処理されている
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 卒業年度の選択肢を生成（現在の年から5年後まで）
  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from({ length: 6 }, (_, i) => currentYear + i);

  const error = validationError || signupError;

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="山田 太郎"
            required
            autoComplete="name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="your@email.com"
            required
            autoComplete="email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            パスワード
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="6文字以上"
            required
            autoComplete="new-password"
            minLength={6}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            パスワード（確認）
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={styles.input}
            placeholder="パスワードを再入力"
            required
            autoComplete="new-password"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="department" className={styles.label}>
            学部・学科
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={styles.input}
            placeholder="例: 工学部 情報工学科"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="graduation_year" className={styles.label}>
            卒業予定年度
          </label>
          <select
            id="graduation_year"
            name="graduation_year"
            value={formData.graduation_year}
            onChange={handleChange}
            className={styles.input}
            required
          >
            <option value="">選択してください</option>
            {graduationYears.map(year => (
              <option key={year} value={year}>
                {year}年
              </option>
            ))}
          </select>
        </div>

        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        <button
          type="submit"
          className={`btn btn-primary ${styles.submitButton}`}
          disabled={isLoading}
        >
          {isLoading ? '登録中...' : '会員登録'}
        </button>
      </form>

      <div className={styles.divider}>
        <span>または</span>
      </div>

      <button className={`btn btn-outline ${styles.googleButton}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleで会員登録
      </button>

      <div className={styles.loginLink}>
        <p>
          すでにアカウントをお持ちの方は
          <Link href="/login" className={styles.link}>
            ログイン
          </Link>
        </p>
      </div>
    </>
  );
}