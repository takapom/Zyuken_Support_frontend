import styles from './page.module.css';

export default function CostsPage() {
  const costs = [
    { category: '受験料', items: [
      { name: '東京大学', amount: 17000, date: '2024/01/10', status: '未払い' },
      { name: '早稲田大学', amount: 35000, date: '2024/01/05', status: '支払い済' },
      { name: '慶應義塾大学', amount: 35000, date: '2024/01/03', status: '支払い済' },
      { name: '上智大学', amount: 35000, date: '2023/12/28', status: '支払い済' },
    ]},
    { category: '交通費', items: [
      { name: '早稲田大学 受験', amount: 1200, date: '2024/02/15', status: '予定' },
      { name: '慶應義塾大学 受験', amount: 800, date: '2024/02/12', status: '予定' },
    ]},
    { category: '宿泊費', items: [
      { name: '東京受験 ホテル', amount: 15000, date: '2024/02/24-26', status: '予約済' },
    ]},
    { category: '教材費', items: [
      { name: '赤本 英語', amount: 2200, date: '2023/12/15', status: '支払い済' },
      { name: '過去問題集 数学', amount: 3500, date: '2023/12/10', status: '支払い済' },
    ]},
  ];

  const totalPaid = 128700;
  const totalUnpaid = 34000;
  const totalEstimated = 162700;
  const budget = 400000;

  return (
    <div className="container">
      <div className={styles.costs}>
        <h1>費用管理</h1>
        
        <div className={styles.summary}>
          <div className="card">
            <h3>支払い済</h3>
            <p className={styles.amountPaid}>¥{totalPaid.toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>未払い</h3>
            <p className={styles.amountUnpaid}>¥{totalUnpaid.toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>合計見込み</h3>
            <p className={styles.amountTotal}>¥{totalEstimated.toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>予算残高</h3>
            <p className={styles.amountBudget}>¥{(budget - totalEstimated).toLocaleString()}</p>
            <div className={styles.budgetBar}>
              <div className={styles.budgetUsed} style={{ width: `${(totalEstimated / budget) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <div className={styles.addSection}>
          <button className="btn btn-primary">新しい費用を追加</button>
          <button className="btn btn-outline">レポートを出力</button>
        </div>

        <div className={styles.costCategories}>
          {costs.map((category) => (
            <div key={category.category} className="card">
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.itemList}>
                {category.items.map((item, index) => (
                  <div key={index} className={styles.costItem}>
                    <div className={styles.itemInfo}>
                      <h4>{item.name}</h4>
                      <p className={styles.itemDate}>{item.date}</p>
                    </div>
                    <div className={styles.itemRight}>
                      <span className={styles.amount}>¥{item.amount.toLocaleString()}</span>
                      <span className={`${styles.status} ${styles[item.status.replace(/[一-龥]/g, '')]}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.categoryTotal}>
                <span>小計</span>
                <span>¥{category.items.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}