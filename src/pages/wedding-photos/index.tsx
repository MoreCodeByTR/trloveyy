import { useEffect, useMemo, useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './index.module.css';
import { history } from 'ice';
import FallbackLightbox, { PhotoItem } from '@/components/FallbackLightbox';

import photo01 from '@/assets/ps/01.png';
import photo02 from '@/assets/ps/02.png';
import photo03 from '@/assets/ps/03.png';
import photo04 from '@/assets/ps/04.png';
import photo05 from '@/assets/ps/05.png';
import photo06 from '@/assets/ps/06.png';
import photo07 from '@/assets/ps/07.png';
import photo08 from '@/assets/ps/08.png';

export default function WeddingPhotosPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lightboxError, setLightboxError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // 检测移动端并自动使用备用方案
    if (typeof window !== 'undefined') {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        setUseFallback(true);
      }
    }
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
      { id: 7, title: '婚纱照 7', description: '浪漫的婚纱摄影', src: photo06 },
      { id: 8, title: '婚纱照 8', description: '温柔与笑意', src: photo08 },
    ],
    [],
  );

  const handlePhotoClick = useCallback((index: number) => {
    try {
      setLightboxError(false);
      setOpenIndex(index);
    } catch (error) {
      console.error('Lightbox打开失败:', error);
      setLightboxError(true);
    }
  }, []);

  const handleLightboxClose = useCallback(() => {
    setOpenIndex(null);
    setLightboxError(false);
  }, []);

  // 检查是否为移动端
  const isMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return false;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.photoGrid} ${isLoaded ? styles.loaded : ''}`}>
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={styles.photoCard}
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => handlePhotoClick(index)}
            >
              <div className={styles.photoThumb}>
                <img
                  className={styles.photoImage}
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`图片加载失败: ${photo.src}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
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

      {/* 错误提示 */}
      {lightboxError && (
        <div className={styles.errorMessage}>
          <p>图片查看器加载失败，请点击图片直接查看</p>
        </div>
      )}

      {/* 使用备用Lightbox还是原生Lightbox */}
      {useFallback ? (
        <FallbackLightbox
          isOpen={openIndex !== null}
          onClose={handleLightboxClose}
          currentPhoto={openIndex ?? 0}
          photos={photos}
          onPhotoChange={setOpenIndex}
        />
      ) : (
        !lightboxError && (
          <Lightbox
            open={openIndex !== null}
            close={handleLightboxClose}
            index={openIndex ?? 0}
            slides={photos.map((photo) => ({ src: photo.src }))}
            // 移动端优化配置
            carousel={{
              finite: true,
              preload: 1,
            }}
            // 触摸手势配置
            gestures={{
              swipeTolerance: 50,
              swipeMinVelocity: 0.25,
            }}
            // 渲染配置
            render={{
              buttonPrev: openIndex === 0 ? () => null : undefined,
              buttonNext: openIndex === photos.length - 1 ? () => null : undefined,
            }}
            // 移动端特定配置
            {...(isMobile && {
              carousel: {
                finite: true,
                preload: 1,
              },
              gestures: {
                swipeTolerance: 80,
                swipeMinVelocity: 0.2,
              },
            })}
          />
        )
      )}

      <div className={styles.backButton} onClick={() => history?.push('/?showMenus=true')}>
        ← 返回首页
      </div>
    </div>
  );
}

