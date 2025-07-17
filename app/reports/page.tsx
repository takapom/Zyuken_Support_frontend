import styles from './page.module.css';

export default function ReportsPage() {
  const reportTypes = [
    {
      id: 1,
      title: '成績推移レポート',
      description: '模試の成績推移をグラフで表示し、強みと弱みを分析',
      icon: '📈',
      lastGenerated: '2023/11/25',
      status: '最新'
    },
    {
      id: 2,
      title: '受験校分析レポート',
      description: '志望校の偏差値・倉率・入試傾向をまとめた資料',
      icon: '🏫',
      lastGenerated: '2023/11/20',
      status: '最新'
    },
    {
      id: 3,
      title: '費用サマリー',
      description: '受験にかかる費用の内訳と予算管理状況',
      icon: '💰',
      lastGenerated: '2023/11/15',
      status: '更新可能'
    },
    {
      id: 4,
      title: '学習計画レポート',
      description: '目標偏差値に向けた学習計画と進捗状況',
      icon: '📝',
      lastGenerated: '2023/11/10',
      status: '更新可能'
    }
  ];

  const recentReports = [
    { name: '成績推移レポート_202311.pdf', date: '2023/11/25', size: '2.4MB' },
    { name: '受験校分析_202311.pdf', date: '2023/11/20', size: '1.8MB' },
    { name: '費用サマリー_202311.xlsx', date: '2023/11/15', size: '450KB' },
  ];

  return (
    <div className="container">
      <div className={styles.reports}>
        <h1>レポート生成</h1>
        
        <div className={styles.reportTypes}>
          {reportTypes.map((report) => (
            <div key={report.id} className="card">
              <div className={styles.reportHeader}>
                <div className={styles.reportIcon}>{report.icon}</div>
                <div>
                  <h3>{report.title}</h3>
                  <p className={styles.reportDescription}>{report.description}</p>
                </div>
              </div>
              
              <div className={styles.reportMeta}>
                <div>
                  <span className={styles.metaLabel}>最終生成:</span>
                  <span>{report.lastGenerated}</span>
                </div>
                <span className={`${styles.statusBadge} ${report.status === '最新' ? styles.latest : styles.outdated}`}>
                  {report.status}
                </span>
              </div>
              
              <div className={styles.reportActions}>
                <button className="btn btn-primary">レポートを生成</button>
                <button className={styles.previewBtn}>プレビュー</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.recentSection}>
          <h2>最近生成したレポート</h2>
          <div className="card">
            <div className={styles.fileList}>
              {recentReports.map((file, index) => (
                <div key={index} className={styles.fileItem}>
                  <div className={styles.fileInfo}>
                    <h4>{file.name}</h4>
                    <p>
                      <span>{file.date}</span>
                      <span className={styles.fileSize}>{file.size}</span>
                    </p>
                  </div>
                  <div className={styles.fileActions}>
                    <button className={styles.downloadBtn}>ダウンロード</button>
                    <button className={styles.shareBtn}>共有</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}