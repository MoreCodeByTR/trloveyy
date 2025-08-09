import { useState, useEffect } from 'react';
import styles from './index.module.css';

export default function OurStoryPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={`${styles.title} ${isLoaded ? styles.loaded : ''}`}>
          Our Story
        </h1>
        <p className={`${styles.subtitle} ${isLoaded ? styles.loaded : ''}`}>
          我们的爱情故事
        </p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.storySection} ${isLoaded ? styles.loaded : ''}`}>
          <div className={styles.storyCard}>
            <div className={styles.storyIcon}>💕</div>
            <h3>初次相遇</h3>
            <p>在那个阳光明媚的下午，我们在咖啡厅相遇了...</p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyIcon}>🌹</div>
            <h3>甜蜜时光</h3>
            <p>一起走过的每一个瞬间，都是我们最珍贵的回忆...</p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyIcon}>💍</div>
            <h3>求婚时刻</h3>
            <p>在星空下的浪漫求婚，那一刻我们决定携手一生...</p>
          </div>
        </div>
      </div>

      <div className={styles.backButton} onClick={() => window.history.back()}>
        ← 返回首页
      </div>
    </div>
  );
}

