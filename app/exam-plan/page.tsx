import styles from './page.module.css';

export default function ExamPlanPage() {
  const schools = [
    {
      id: 1,
      name: '東京大学',
      faculty: '理科一類',
      level: '第一志望',
      examDate: '2024/02/25',
      deviation: 72,
      passRate: 'C',
      status: '出願予定'
    },
    {
      id: 2,
      name: '早稲田大学',
      faculty: '基幹理工学部',
      level: '併願',
      examDate: '2024/02/15',
      deviation: 68,
      passRate: 'B',
      status: '出願済'
    },
    {
      id: 3,
      name: '慶應義塾大学',
      faculty: '理工学部',
      level: '併願',
      examDate: '2024/02/12',
      deviation: 68,
      passRate: 'B',
      status: '出願済'
    },
    {
      id: 4,
      name: '東京工業大学',
      faculty: '工学院',
      level: '併願',
      examDate: '2024/02/26',
      deviation: 65,
      passRate: 'A',
      status: '出願予定'
    },
    {
      id: 5,
      name: '上智大学',
      faculty: '理工学部',
      level: '滑り止め',
      examDate: '2024/02/05',
      deviation: 60,
      passRate: 'A',
      status: '出願済'
    }
  ];

  return (
    <div className="container">
      <div className={styles.examPlan}>
        <div className={styles.header}>
          <h1>受験校管理</h1>
          <button className="btn btn-primary">新しい学校を追加</button>
        </div>

        <div className={styles.filterSection}>
          <button className={`${styles.filterBtn} ${styles.active}`}>すべて</button>
          <button className={styles.filterBtn}>第一志望</button>
          <button className={styles.filterBtn}>併願</button>
          <button className={styles.filterBtn}>滑り止め</button>
        </div>

        <div className={styles.schoolList}>
          {schools.map((school) => (
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
                  <span className={styles.value}>{school.examDate}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>偏差値</span>
                  <span className={styles.value}>{school.deviation}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>合格可能性</span>
                  <span className={`${styles.passRate} ${styles[`rate${school.passRate}`]}`}>
                    {school.passRate}判定
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>状態</span>
                  <span className={styles.status}>{school.status}</span>
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