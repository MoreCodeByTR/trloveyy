import { useState, useEffect } from 'react';
import styles from './index.module.css';
import FallbackLightbox, { PhotoItem } from '../../components/FallbackLightbox';

export default function OurStoryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const dailyPhotos: PhotoItem[] = [
    {
      id: 1,
      title: '日常照片1',
      description: '美好的回忆',
      src: 'https://wx-love-img.afunapp.com/FrA_6hxQPjO-lvYtInfw_JCkUHpi',
    },
    {
      id: 2,
      title: '日常照片2',
      description: '甜蜜时光',
      src: 'https://wx-love-img.afunapp.com/FoCQ5usVUC9dgprLjI6MoQhsiuhJ',
    },
    {
      id: 3,
      title: '日常照片3',
      description: '幸福瞬间',
      src: 'https://wx-love-img.afunapp.com/Fsf3jZo4Ay7W08_AL9okYvLaR9rX',
    },
    {
      id: 4,
      title: '日常照片4',
      description: '温馨时刻',
      src: 'https://wx-love-img.afunapp.com/FvPmOCoiFk3p7sOVdquYBay00Eol',
    },
    {
      id: 5,
      title: '日常照片5',
      description: '珍贵回忆',
      src: 'https://wx-love-img.afunapp.com/FpDRj3TuNnAIRF6gan1CQuskscET',
    },
  ];

  const handlePhotoClick = (index: number) => {
    setCurrentPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePhotoChange = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={`${styles.title} ${isLoaded ? styles.loaded : ''}`}>
          恋爱日常
        </h1>
        <p className={`${styles.subtitle} ${isLoaded ? styles.loaded : ''}`}>
          记录我们在一起的每一个美好瞬间
        </p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.photoGrid} ${isLoaded ? styles.loaded : ''}`}>
          {dailyPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={styles.photoCard}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handlePhotoClick(index)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className={styles.photo}
              />
            </div>
          ))}
        </div>
      </div>

      <FallbackLightbox
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        currentPhoto={currentPhotoIndex}
        photos={dailyPhotos}
        onPhotoChange={handlePhotoChange}
      />

      <div className={styles.backButton} onClick={() => window.history.back()}>
        ← 返回首页
      </div>
    </div>
  );
}

