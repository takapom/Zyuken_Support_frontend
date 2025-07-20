'use client';

import styles from './page.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { useGetSchools } from '@/hooks/getdata/useGetSchool';

export default function ExamPlanPage() {
  const { schools, error, loading, fetchSchools } = useGetSchools();

  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);


  return (
    <div className="container">
      <div className={styles.examPlan}>
        <div className={styles.header}>
          <h1>受験校管理</h1>
          <Link href="/add-school">
          <button className="btn btn-primary">新しい学校を追加</button>
          </Link>
        </div>

        <div className={styles.filterSection}>
          <button className={`${styles.filterBtn} ${styles.active}`}>すべて</button>
          <button className={styles.filterBtn}>第一志望</button>
          <button className={styles.filterBtn}>併願</button>
          <button className={styles.filterBtn}>滑り止め</button>
        </div>

        {loading && (
          <div className={styles.loading}>
            <p>学校情報を読み込んでいます...</p>
          </div>
        )}

        {error && (
          <div className={styles.error}>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && schools && schools.length === 0 && (
          <div className={styles.empty}>
            <p>登録された学校がありません。</p>
          </div>
        )}

        <div className={styles.schoolList}>
          {schools && Array.isArray(schools) && schools.map((school) => (
            <div key={school.id} className="card">
              <div className={styles.schoolHeader}>
                <div>
                  <h3>{school.name}</h3>
                  <p className={styles.faculty}>{school.faculty}</p>
                </div>
                <span className={`${styles.levelBadge} ${styles[school.level.replace(/[一-龥]/g, '')]}`}>
                  {school.level}
                </span>
              </div>
              
              <div className={styles.schoolInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>試験日</span>
                  <span className={styles.value}>{school.exam_date}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>偏差値</span>
                  <span className={styles.value}>{school.deviation}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>合格可能性</span>
                  <span className={`${styles.passRate} ${styles[`rate${school.pass_rate}`]}`}>
                    {school.pass_rate}判定
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>状態</span>
                  <span className={styles.status}>{school.application_status}</span>
                </div>
              </div>
              
              <div className={styles.schoolActions}>
                <button className="btn btn-outline">詳細を見る</button>
                <button className={styles.editBtn}>編集</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}