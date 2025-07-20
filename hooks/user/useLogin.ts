'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginData {
  email: string;
  password: string;
}

interface UseLoginReturn {
  login: (data: LoginData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useLogin(): UseLoginReturn {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginData) => {
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      const response = await fetch(`${apiUrl}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setError('パスワードまたはメールアドレスが違います');
        return;
      }

      const result = await response.json();
      
      // APIレスポンスから実際のトークンを取得して保存
      if (result.token) {
        localStorage.setItem('authToken', result.token);
      } else {
        throw new Error('トークンが取得できませんでした');
      }
      
      // ログイン成功後、ダッシュボードへリダイレクト
      router.push('/dashboard');
    } catch {
      setError('パスワードまたはメールアドレスが違います');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
    error,
  };
}