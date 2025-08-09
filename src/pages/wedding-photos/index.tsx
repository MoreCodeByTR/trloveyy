import { useEffect, useMemo, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './index.module.css';

import photo01 from '@/assets/ps/01.png';
import photo02 from '@/assets/ps/02.png';
import photo03 from '@/assets/ps/03.png';
import photo04 from '@/assets/ps/04.png';
import photo05 from '@/assets/ps/05.png';
import photo06 from '@/assets/ps/06.png';
import photo07 from '@/assets/ps/07.png';
import photo08 from '@/assets/ps/08.png';

type PhotoItem = {
  id: number;
  title: string;
  description: string;
  src: string;
};

export default function WeddingPhotosPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // 目前资源示例仅有 01.png，这里重复使用以示例布局。后续可直接扩充为多张不同图片。
  const photos: PhotoItem[] = useMemo(
    () => [
      { id: 1, title: '婚纱照 1', description: '浪漫的婚纱摄影', src: photo01 },
      { id: 2, title: '婚纱照 2', description: '唯美的光影瞬间', src: photo02 },
      { id: 3, title: '婚纱照 3', description: '温柔与笑意', src: photo03 },
      { id: 4, title: '婚纱照 4', description: '自然与纯粹', src: photo07 },
      { id: 5, title: '婚纱照 5', description: '彼此的眼神', src: photo04 },
      { id: 6, title: '婚纱照 6', description: '细节与质感', src: photo05 },
      { id: 7, title: '婚纱照 1', description: '浪漫的婚纱摄影', src: photo06 },
      { id: 8, title: '婚纱照 3', description: '温柔与笑意', src: photo08 },
    ],
    [],
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.photoGrid} ${isLoaded ? styles.loaded : ''}`}>
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={styles.photoCard}
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => setOpenIndex(index)}
            >
              <div className={styles.photoThumb}>
                <img className={styles.photoImage} src={photo.src} alt={photo.title} loading="lazy" />
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

      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        index={openIndex ?? 0}
        slides={photos.map((photo) => ({ src: photo.src }))}
      />

      <div className={styles.backButton} onClick={() => window.history.back()}>
        ← 返回首页
      </div>
    </div>
  );
}

