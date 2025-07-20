"use client"

import useNewSchool from "@/hooks/add/useNewSchool"
import { useState } from "react"
import Link from "next/link"
import styles from '@/app/add-school/page.module.css'

export default function NewSchool(){
    const { createschool, isLoading, error } = useNewSchool()
    const [schoolData, setSchoolData] = useState({
      name: '',
      faculty: '',
      level: '',
      exam_date: '',
      deviation: 50,
      pass_rate: '',
      application_status: ''})

    //送信処理
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createschool({
                name: schoolData.name,
                faculty: schoolData.faculty,
                level: schoolData.level as '第一志望' | '併願' | '滑り止め',
                exam_date: schoolData.exam_date,
                deviation: schoolData.deviation,
                pass_rate: schoolData.pass_rate ? schoolData.pass_rate as 'A' | 'B' | 'C' | 'D' | 'E' : undefined,
                application_status: schoolData.application_status ? schoolData.application_status as '出願予定' | '出願済' | '未出願' : undefined
            });
        } catch (err) {
            // エラーはuseNewSchoolフック内で処理される
            console.error('School registration error:', err);
        }
    }

    //入力内容が変更した時の処理
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSchoolData(prev => ({
            ...prev,
            [name]: name === 'deviation' ? parseInt(value) || 0 : value
        }));
    }

    return(
        <div className={styles.container}>
            <div className={styles.formCard}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        <span className="gradient-text">志望校追加</span>
                    </h1>
                    <p className={styles.subtitle}>新しい志望校を登録</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            学校名
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={schoolData.name}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="例: 東京大学"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="faculty" className={styles.label}>
                            学部・学科
                        </label>
                        <input
                            type="text"
                            id="faculty"
                            name="faculty"
                            value={schoolData.faculty}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="例: 工学部 情報工学科"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            志望度
                        </label>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="level"
                                    value="第一志望"
                                    checked={schoolData.level === '第一志望'}
                                    onChange={handleChange}
                                    required
                                />
                                第一志望
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="level"
                                    value="併願"
                                    checked={schoolData.level === '併願'}
                                    onChange={handleChange}
                                />
                                併願
                            </label>
                            <label className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="level"
                                    value="滑り止め"
                                    checked={schoolData.level === '滑り止め'}
                                    onChange={handleChange}
                                />
                                滑り止め
                            </label>
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="exam_date" className={styles.label}>
                                試験日
                            </label>
                            <input
                                type="date"
                                id="exam_date"
                                name="exam_date"
                                value={schoolData.exam_date}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="deviation" className={styles.label}>
                                偏差値
                            </label>
                            <input
                                type="number"
                                id="deviation"
                                name="deviation"
                                value={schoolData.deviation}
                                onChange={handleChange}
                                className={styles.input}
                                min="0"
                                max="100"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="pass_rate" className={styles.label}>
                                合格可能性（任意）
                            </label>
                            <select
                                id="pass_rate"
                                name="pass_rate"
                                value={schoolData.pass_rate}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="">選択してください</option>
                                <option value="A">A（80%以上）</option>
                                <option value="B">B（60-79%）</option>
                                <option value="C">C（40-59%）</option>
                                <option value="D">D（20-39%）</option>
                                <option value="E">E（20%未満）</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="application_status" className={styles.label}>
                                出願状況（任意）
                            </label>
                            <select
                                id="application_status"
                                name="application_status"
                                value={schoolData.application_status}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="">選択してください</option>
                                <option value="出願予定">出願予定</option>
                                <option value="出願済">出願済</option>
                                <option value="未出願">未出願</option>
                            </select>
                        </div>
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
                        {isLoading ? '登録中...' : '志望校を追加'}
                    </button>

                    <Link href="/exam-plan" className="btn btn-outline">
                        <button
                            type="button"
                            className={`btn btn-outline ${styles.cancelButton}`}
                        >
                            キャンセル
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}