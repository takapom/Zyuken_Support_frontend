"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

//学校登録時に作成する型定義
export interface CreateSchool {
    name: string;
    faculty: string;
    level: '第一志望' | '併願' | '滑り止め';
    exam_date: string;
    deviation: number;
    pass_rate?: 'A' | 'B' | 'C' | 'D' | 'E';
    application_status?: '出願予定' | '出願済' | '未出願';
}

//hooksの返り値
interface CreateReturn {
    createschool: (data: CreateSchool) => Promise<void>;
    isLoading: boolean;
    error: string | null;
}

export default function useNewSchool(): CreateReturn{
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null> (null);

    const createschool = async(data: CreateSchool) => {
        setIsLoading(true);
        setError(null);

        try{
            const token = localStorage.getItem('authToken');
            console.log('Token:', token); // デバッグ用
              if (!token) {
                  throw new Error('ログインが必要です');
              }
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
            const response = await fetch(`${apiUrl}/api/users/addschool`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok){
                let errorMessage = '登録に失敗しました';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch {
                    // JSONパースエラーの場合はステータスコードを表示
                    errorMessage = `エラー: ${response.status} ${response.statusText}`;
                }
                throw new Error(errorMessage);
            }

            router.push('/exam-plan')
        }catch(err){
        const errorMessage = err instanceof Error ? err.message : '登録に失敗しました。もう一度お試しください。';
        setError(errorMessage);
        throw err;
        }
        finally{
            setIsLoading(false);
        }
    };

    return{
        createschool,
        isLoading,
        error,
    }
}