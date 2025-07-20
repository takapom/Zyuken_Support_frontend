// hooks/useGetSchools.ts
'use client'

import { useState, useCallback } from "react"

export interface School {
    id: number;
    name: string;
    faculty: string;
    level: '第一志望' | '併願' | '滑り止め';
    exam_date: string;
    deviation: number;
    pass_rate?: 'A' | 'B' | 'C' | 'D' | 'E';
    application_status?: '出願予定' | '出願済' | '未出願';
}

export function useGetSchools() {
  const [schools, setSchools]   = useState<School[]>([])
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState<string | null>(null)

  const fetchSchools = useCallback(async () => {
    setError(null)
    setLoading(true)
    try {
      const token = localStorage.getItem("authToken")
      if (!token) throw new Error("ログインが必要です")

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/schools`,
        { headers: { Authorization: `Bearer ${token}` }}
      )

      if (!res.ok) throw new Error("学校情報の取得に失敗しました")
      const data = await res.json()
      
      if (Array.isArray(data)) {
        setSchools(data)
      } else if (data && Array.isArray(data.schools)) {
        // レスポンスが { schools: [...] } 形式の場合
        setSchools(data.schools)
      } else {
        console.error('Unexpected response format:', data)
        setSchools([])
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "不明なエラー")
    } finally {
      setLoading(false)
    }
  }, [])

  return { schools, loading, error, fetchSchools }
}
