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

export default function WeddingphotoUrlsPage() {
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

  const photoUrls = useMemo(() => {
    return [
      { id: 1, title: '婚纱照1', description: '前世今生', src: 'https://wx-love-img.afunapp.com/Fj58oX2pZIKLvO0PsQEVq0YXEdQa' },
      { id: 2, title: '婚纱照2', description: '喜结良缘', src: 'https://wx-love-img.afunapp.com/FtcREsHOrSOeih8rcA9Y9_mKVkyc' },
      { id: 3, title: '婚纱照3', description: '相约今生', src: 'https://wx-love-img.afunapp.com/Fjb6iG1zF0BOsEVm3eIcbSDrPO6w' },
      { id: 4, title: '婚纱照4', description: '白头偕老', src: 'https://wx-love-img.afunapp.com/FmhW1z2iWaroJKhjoh_I6FLho-cC' },
      { id: 5, title: '婚纱照5', description: '执子之手', src: 'https://wx-love-img.afunapp.com/FjSoVjOQcRW48aEjiJLffFKPVu8N' },
      { id: 6, title: '婚纱照6', description: '与子偕老', src: 'https://wx-love-img.afunapp.com/FqpdALQApUBvrnBs_mQqptu1017S' },
      { id: 7, title: '婚纱照7', description: '相濡以沫', src: 'https://wx-love-img.afunapp.com/FqpxTwHm7XnDCXSawXq2UTyNylUM' },
      { id: 8, title: '婚纱照8', description: '相敬如宾', src: 'https://wx-love-img.afunapp.com/FknM9RIaljsxkeCq6hyTM-eJFIYe' },
      { id: 9, title: '婚纱照9', description: '相依相伴', src: 'https://wx-love-img.afunapp.com/FnLAJlS-qH17VXDeRdyjtjABzfO7' },
      { id: 10, title: '婚纱照10', description: '永结同心', src: 'https://wx-love-img.afunapp.com/FocelcZwWbCkVhKtTQqiPV6rfl7s' },
      { id: 11, title: '婚纱照11', description: '一生一世', src: 'https://wx-love-img.afunapp.com/FpeoDZDcckvSla2KLJAshYIh3Eyv' },
      { id: 12, title: '婚纱照12', description: '不离不弃', src: 'https://wx-love-img.afunapp.com/Fo1Bmkw2F9b7MLwD65atdwBIEIW_' },
      { id: 13, title: '婚纱照13', description: '幸福美满', src: 'https://wx-love-img.afunapp.com/Fr-U2ilbiy6fPI7eMPwEvIZ_xsUE' },
      { id: 14, title: '婚纱照14', description: '以爱之名', src: 'https://wx-love-img.afunapp.com/FtHDoQoC2hfI1KA_IMlydzK0haGU' },
      { id: 15, title: '婚纱照15', description: '有你真甜', src: 'https://wx-love-img.afunapp.com/FueQAE3BmQgTxuWmeYcacbR_gJ8n' },
      { id: 16, title: '婚纱照16', description: '情窦初开', src: 'https://wx-love-img.afunapp.com/FjoQHPwzL_4lStTR1HXWIGMm8rOU' },
    ];
  }, []);

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
      <div className={styles.header}>
        <p className={`${styles.subtitle}`}>婚纱照</p>
      </div>
      <div className={styles.content}>
        <div className={`${styles.photoGrid} ${isLoaded ? styles.loaded : ''}`}>
          {photoUrls.map((photo, index) => (
            <div key={photo.id} className={styles.photoCard} style={{ animationDelay: `${index * 0.08}s` }} onClick={() => handlePhotoClick(index)}>
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
        <FallbackLightbox isOpen={openIndex !== null} onClose={handleLightboxClose} currentPhoto={openIndex ?? 0} photos={photoUrls} onPhotoChange={setOpenIndex} />
      ) : (
        !lightboxError && (
          <Lightbox
            open={openIndex !== null}
            close={handleLightboxClose}
            index={openIndex ?? 0}
            slides={photoUrls.map((photo) => ({ src: photo.src }))}
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
              buttonNext: openIndex === photoUrls.length - 1 ? () => null : undefined,
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
