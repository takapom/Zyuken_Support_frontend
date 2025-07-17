'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="container">
      <div className={styles.settings}>
        <h1>設定</h1>
        
        <div className={styles.settingsLayout}>
          <div className={styles.sidebar}>
            <button
              className={`${styles.tabButton} ${activeTab === 'profile' ? styles.active : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              👤 プロフィール
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'notifications' ? styles.active : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              🔔 通知設定
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'privacy' ? styles.active : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              🔒 プライバシー
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'data' ? styles.active : ''}`}
              onClick={() => setActiveTab('data')}
            >
              💾 データ管理
            </button>
          </div>
          
          <div className="card" style={{ flex: 1 }}>
            {activeTab === 'profile' && (
              <div className={styles.tabContent}>
                <h2>プロフィール設定</h2>
                <div className={styles.formGroup}>
                  <label>名前</label>
                  <input type="text" defaultValue="山田 太郎" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label>メールアドレス</label>
                  <input type="email" defaultValue="yamada@example.com" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label>志望学部系統</label>
                  <select className={styles.select}>
                    <option>理系</option>
                    <option>文系</option>
                    <option>医系</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>卒業予定年</label>
                  <input type="text" defaultValue="2024" className={styles.input} />
                </div>
                <button className="btn btn-primary">保存</button>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div className={styles.tabContent}>
                <h2>通知設定</h2>
                <div className={styles.notificationItem}>
                  <div>
                    <h4>模試リマインダー</h4>
                    <p>模試の3日前に通知を受け取る</p>
                  </div>
                  <label className={styles.switch}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.notificationItem}>
                  <div>
                    <h4>出願締切アラート</h4>
                    <p>出願締切の1週間前に通知</p>
                  </div>
                  <label className={styles.switch}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.notificationItem}>
                  <div>
                    <h4>成績更新通知</h4>
                    <p>新しい模試結果が追加されたとき</p>
                  </div>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
            )}
            
            {activeTab === 'privacy' && (
              <div className={styles.tabContent}>
                <h2>プライバシー設定</h2>
                <div className={styles.privacyItem}>
                  <h4>データの公開範囲</h4>
                  <select className={styles.select}>
                    <option>非公開（自分のみ）</option>
                    <option>保護者と共有</option>
                    <option>先生と共有</option>
                  </select>
                </div>
                <div className={styles.privacyItem}>
                  <h4>パスワード変更</h4>
                  <button className="btn btn-outline">パスワードを変更</button>
                </div>
                <div className={styles.privacyItem}>
                  <h4>2段階認証</h4>
                  <button className="btn btn-outline">設定する</button>
                </div>
              </div>
            )}
            
            {activeTab === 'data' && (
              <div className={styles.tabContent}>
                <h2>データ管理</h2>
                <div className={styles.dataItem}>
                  <div>
                    <h4>データエクスポート</h4>
                    <p>すべてのデータをCSV形式でダウンロード</p>
                  </div>
                  <button className="btn btn-outline">エクスポート</button>
                </div>
                <div className={styles.dataItem}>
                  <div>
                    <h4>データバックアップ</h4>
                    <p>最終バックアップ: 2023/11/25 14:30</p>
                  </div>
                  <button className="btn btn-primary">今すぐバックアップ</button>
                </div>
                <div className={styles.dataItem}>
                  <div>
                    <h4>アカウント削除</h4>
                    <p>すべてのデータが完全に削除されます</p>
                  </div>
                  <button className={styles.dangerBtn}>アカウントを削除</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}