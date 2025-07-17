import styles from './page.module.css';

export default function MockExamsPage() {
  const mockExams = [
    {
      id: 1,
      name: '河合塾 全統記述模試',
      date: '2024/11/23',
      status: '結果返却',
      overallScore: 68.5,
      scores: {
        english: 72.3,
        math: 65.4,
        japanese: 68.0,
        science: 69.2,
        social: 67.5
      }
    },
    {
      id: 2,
      name: '駿台 大学別実戦模試',
      date: '2024/10/15',
      status: '結果返却',
      overallScore: 66.2,
      scores: {
        english: 70.1,
        math: 62.8,
        japanese: 65.5,
        science: 67.0,
        social: 65.8
      }
    },
    {
      id: 3,
      name: '河合塾 全統マーク模試',
      date: '2024/12/15',
      status: '受験予定',
      overallScore: null,
      scores: null
    }
  ];

  return (
    <div className="container">
      <div className={styles.mockExams}>
        <div className={styles.header}>
          <h1>模試管理</h1>
          <button className="btn btn-primary">新しい模試を追加</button>
        </div>

        <div className={styles.statsSection}>
          <div className="card">
            <h3>直近の偏差値</h3>
            <p className={styles.bigNumber}>68.5</p>
            <p className={styles.trend}>↑ +2.3</p>
          </div>
          <div className="card">
            <h3>得意科目</h3>
            <p className={styles.subject}>英語</p>
            <p className={styles.subjectScore}>72.3</p>
          </div>
          <div className="card">
            <h3>苦手科目</h3>
            <p className={styles.subject}>数学</p>
            <p className={styles.subjectScore}>65.4</p>
          </div>
          <div className="card">
            <h3>次回模試</h3>
            <p className={styles.nextDate}>12/15</p>
            <p className={styles.nextName}>河合塾</p>
          </div>
        </div>

        <h2 className={styles.sectionTitle}>模試一覧</h2>
        <div className={styles.examList}>
          {mockExams.map((exam) => (
            <div key={exam.id} className="card">
              <div className={styles.examHeader}>
                <div>
                  <h3>{exam.name}</h3>
                  <p className={styles.examDate}>{exam.date}</p>
                </div>
                <span className={`${styles.statusBadge} ${exam.status === '結果返却' ? styles.completed : styles.scheduled}`}>
                  {exam.status}
                </span>
              </div>
              
              {exam.scores && (
                <>
                  <div className={styles.overallScore}>
                    <span>総合偏差値</span>
                    <span className={styles.scoreValue}>{exam.overallScore}</span>
                  </div>
                  
                  <div className={styles.subjectScores}>
                    <div className={styles.scoreItem}>
                      <span>英語</span>
                      <span>{exam.scores.english}</span>
                    </div>
                    <div className={styles.scoreItem}>
                      <span>数学</span>
                      <span>{exam.scores.math}</span>
                    </div>
                    <div className={styles.scoreItem}>
                      <span>国語</span>
                      <span>{exam.scores.japanese}</span>
                    </div>
                    <div className={styles.scoreItem}>
                      <span>理科</span>
                      <span>{exam.scores.science}</span>
                    </div>
                    <div className={styles.scoreItem}>
                      <span>社会</span>
                      <span>{exam.scores.social}</span>
                    </div>
                  </div>
                </>
              )}
              
              <div className={styles.examActions}>
                {exam.status === '結果返却' ? (
                  <>
                    <button className="btn btn-outline">詳細分析を見る</button>
                    <button className={styles.editBtn}>編集</button>
                  </>
                ) : (
                  <button className="btn btn-primary">リマインダーを設定</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}