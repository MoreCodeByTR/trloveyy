import background from '@/assets/image.png';
import styles from './index.module.css';

export default function WeddingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={background}
          alt="Wedding Background"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1 className={styles.title}>我们的婚礼</h1>
            <p className={styles.subtitle}>欢迎来到我们的特别时刻</p>
          </div>
        </div>
      </div>
    </div>
  );
}