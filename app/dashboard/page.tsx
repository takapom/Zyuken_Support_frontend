import styles from './page.module.css';

export default function DashboardPage() {
  return (
    <div className="container">
      <div className={styles.dashboard}>
        <h1 className={styles.title}>ダッシュボード</h1>
        
        <div className={styles.statsGrid}>
          <div className="card">
            <h3>志望校数</h3>
            <p className={styles.statValue}>8校</p>
            <p className={styles.statSubtext}>第一志望: 東京大学</p>
          </div>
          <div className="card">
            <h3>今月の模試</h3>
            <p className={styles.statValue}>3回</p>
            <p className={styles.statSubtext}>次回: 12/15 河合塾</p>
          </div>
          <div className="card">
            <h3>偏差値推移</h3>
            <p className={styles.statValue}>65.3</p>
            <p className={styles.statSubtext}>前回比: +2.1</p>
          </div>
          <div className="card">
            <h3>受験費用</h3>
            <p className={styles.statValue}>¥285,000</p>
            <p className={styles.statSubtext}>予算残: ¥115,000</p>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div className="card">
            <h2>直近のスケジュール</h2>
            <ul className={styles.scheduleList}>
              <li>
                <span className={styles.date}>12/15</span>
                <span>河合塾 全統模試</span>
              </li>
              <li>
                <span className={styles.date}>12/22</span>
                <span>駿台 大学別実戦模試</span>
              </li>
              <li>
                <span className={styles.date}>1/13-14</span>
                <span>大学入学共通テスト</span>
              </li>
              <li>
                <span className={styles.date}>2/25</span>
                <span>東京大学 前期試験</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h2>成績推移</h2>
            <div className={styles.chartPlaceholder}>
              <p>📈 グラフエリア</p>
              <p>英語: 68.5 → 70.2</p>
              <p>数学: 63.1 → 65.8</p>
              <p>国語: 62.4 → 64.1</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>今週のタスク</h2>
          <ul className={styles.taskList}>
            <li className={styles.taskItem}>
              <input type="checkbox" checked readOnly />
              <span>東京大学 願書準備</span>
            </li>
            <li className={styles.taskItem}>
              <input type="checkbox" readOnly />
              <span>早稲田大学 受験料振込</span>
            </li>
            <li className={styles.taskItem}>
              <input type="checkbox" readOnly />
              <span>模試復習（数学）</span>
            </li>
            <li className={styles.taskItem}>
              <input type="checkbox" readOnly />
              <span>英語長文問題集 P.120-140</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}