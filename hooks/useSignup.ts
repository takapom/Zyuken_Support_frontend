'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SignupData {
  email: string;
  password: string;
  name: string;
  department: string;
  graduation_year: number;
}

interface UseSignupReturn {
  signup: (data: SignupData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function useSignup(): UseSignupReturn {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (data: SignupData) => {
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      const response = await fetch(`${apiUrl}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '登録に失敗しました');
      }

      // 登録成功後、ログインページへリダイレクト
      router.push('/login?registered=true');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '登録に失敗しました。もう一度お試しください。';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signup,
    isLoading,
    error,
  };
}