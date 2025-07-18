import SignupForm from '@/components/SignupForm';
import styles from './page.module.css';

export default function SignupPage() {
  return (
    <div className={styles.container}>
      <div className={styles.signupCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className="gradient-text">受験プランナー</span>
          </h1>
          <p className={styles.subtitle}>新規会員登録</p>
        </div>

        <SignupForm />
      </div>
    </div>
  );
}