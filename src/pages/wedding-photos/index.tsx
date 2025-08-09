import { useState, useEffect } from 'react';
import styles from './index.module.css';

export default function WeddingPhotosPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const photos = [
    { id: 1, title: '婚纱照', description: '浪漫的婚纱摄影', emoji: '👰' },
    { id: 2, title: '外景拍摄', description: '美丽的户外风景', emoji: '🌅' },
    { id: 3, title: '室内写真', description: '温馨的室内拍摄', emoji: '🏠' },
    { id: 4, title: '情侣照', description: '甜蜜的二人世界', emoji: '💑' },
    { id: 5, title: '创意摄影', description: '独特的创意角度', emoji: '✨' },
    { id: 6, title: '黑白经典', description: '永恒的经典瞬间', emoji: '📷' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={`${styles.title} ${isLoaded ? styles.loaded : ''}`}>
          Wedding Photos
        </h1>
        <p className={`${styles.subtitle} ${isLoaded ? styles.loaded : ''}`}>
          婚礼照片集
        </p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.photoGrid} ${isLoaded ? styles.loaded : ''}`}>
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`${styles.photoCard} ${
                selectedPhoto === photo.id ? styles.selected : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <div className={styles.photoPlaceholder}>
                <div className={styles.photoEmoji}>{photo.emoji}</div>
                <div className={styles.photoOverlay}>
                  <span className={styles.viewButton}>查看</span>
                </div>
              </div>
              <div className={styles.photoInfo}>
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.backButton} onClick={() => window.history.back()}>
        ← 返回首页
      </div>
    </div>
  );
}

