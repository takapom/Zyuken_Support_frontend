import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            <span className="gradient-text">受験プランナー</span>で
            <br />
            夢の大学合格へ
          </h1>
          <p className={styles.subtitle}>
            受験校管理、模試スケジュール、費用計算まで
            <br />
            あなたの受験を全面サポート
          </p>
          <div className={styles.heroButtons}>
            <Link href="/login" className="btn btn-primary">
              ログインする
            </Link>
            <Link href="#features" className="btn btn-outline">
              機能を見る
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>主な機能</h2>
          <div className={styles.featureGrid}>
            <div className="card">
              <div className={styles.featureIcon}>📊</div>
              <h3>ダッシュボード</h3>
              <p>受験の進捗を一目で確認。模試の成績推移や志望校の合格可能性をグラフで表示</p>
            </div>
            <div className="card">
              <div className={styles.featureIcon}>🏫</div>
              <h3>受験校管理</h3>
              <p>志望校の情報を一元管理。偏差値、試験日程、必要書類をまとめて管理</p>
            </div>
            <div className="card">
              <div className={styles.featureIcon}>📝</div>
              <h3>模試管理</h3>
              <p>模試のスケジュールと成績を記録。苦手分野の分析で効率的な学習をサポート</p>
            </div>
            <div className="card">
              <div className={styles.featureIcon}>💰</div>
              <h3>費用管理</h3>
              <p>受験料、交通費、宿泊費など受験にかかる費用を計算・管理</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>15,000+</h3>
              <p className={styles.statLabel}>利用者数</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>98%</h3>
              <p className={styles.statLabel}>満足度</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>500+</h3>
              <p className={styles.statLabel}>対応大学</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>24/7</h3>
              <p className={styles.statLabel}>サポート</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>今すぐ受験プランナーを始めよう</h2>
          <p>無料で全ての機能をお試しいただけます</p>
          <Link href="/dashboard" className="btn btn-secondary">
            無料で始める
          </Link>
        </div>
      </section>
    </div>
  );
}