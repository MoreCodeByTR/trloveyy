import { useEffect, useMemo, useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './index.module.css';
import { history } from 'ice';
import FallbackLightbox from '@/components/FallbackLightbox';

import { formatImgUrl } from '@/utils';

export default function WeddingphotoUrlsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lightboxError, setLightboxError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
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
      { id: 1, title: '婚纱照1', description: '月色和雪色之间', src: 'https://wx-love-img.afunapp.com/Fj58oX2pZIKLvO0PsQEVq0YXEdQa' },
      { id: 2, title: '婚纱照2', description: '月色和雪色之间', src: 'https://wx-love-img.afunapp.com/FtcREsHOrSOeih8rcA9Y9_mKVkyc' },
      { id: 41, title: '婚纱照41', description: '日月星辉之中', src: 'https://wx-love-img.afunapp.com/Fpd_1XK7B3ynTkDMBNB3gkq6Sxn4' },
      { id: 42, title: '婚纱照42', description: '日月星辉之中', src: 'https://wx-love-img.afunapp.com/Fu1ZykAlbUa88ae5g1f7RNJGINQa' },
      { id: 15, title: '婚纱照15', description: '你是第三种绝色', src: 'https://wx-love-img.afunapp.com/FueQAE3BmQgTxuWmeYcacbR_gJ8n' },
      { id: 16, title: '婚纱照16', description: '你是第三种绝色', src: 'https://wx-love-img.afunapp.com/FjoQHPwzL_4lStTR1HXWIGMm8rOU' },
      { id: 5, title: '婚纱照5', description: '既见君子', src: 'https://wx-love-img.afunapp.com/FjSoVjOQcRW48aEjiJLffFKPVu8N' },
      { id: 6, title: '婚纱照6', description: '既见君子', src: 'https://wx-love-img.afunapp.com/FqpdALQApUBvrnBs_mQqptu1017S' },
      { id: 7, title: '婚纱照7', description: '云胡不喜', src: 'https://wx-love-img.afunapp.com/FqpxTwHm7XnDCXSawXq2UTyNylUM' },
      { id: 8, title: '婚纱照8', description: '云胡不喜', src: 'https://wx-love-img.afunapp.com/FknM9RIaljsxkeCq6hyTM-eJFIYe' },
      { id: 11, title: '婚纱照11', description: '日落归山海', src: 'https://wx-love-img.afunapp.com/FpeoDZDcckvSla2KLJAshYIh3Eyv' },
      { id: 12, title: '婚纱照12', description: '日落归山海', src: 'https://wx-love-img.afunapp.com/Fo1Bmkw2F9b7MLwD65atdwBIEIW_' },
      { id: 3, title: '婚纱照3', description: '山海藏深意', src: 'https://wx-love-img.afunapp.com/Fjb6iG1zF0BOsEVm3eIcbSDrPO6w' },
      { id: 10, title: '婚纱照10', description: '山海藏深意', src: 'https://wx-love-img.afunapp.com/Fi7PAGtEQVAo9iximKVhHB454cpD' },
      { id: 9, title: '婚纱照9', description: '山海藏深意', src: 'https://wx-love-img.afunapp.com/Fhq2S3VCepEdHMPcNQ7BCEv55C2u' },
      { id: 13, title: '婚纱照13', description: '愿得一心人', src: 'https://wx-love-img.afunapp.com/Fr-U2ilbiy6fPI7eMPwEvIZ_xsUE' },
      { id: 43, title: '婚纱照43', description: '白首不相离', src: 'https://wx-love-img.afunapp.com/Fjz7jYHKeOzIFbFsDN0Gs2KocSBL' },
      { id: 44, title: '婚纱照44', description: '白首不相离', src: 'https://wx-love-img.afunapp.com/Fl5F_mE9x5_YYcbx3BQR8OKXjiDt' },
      { id: 14, title: '婚纱照14', description: '南风知我意', src: 'https://wx-love-img.afunapp.com/FtHDoQoC2hfI1KA_IMlydzK0haGU' },
      { id: 4, title: '婚纱照4', description: '吹梦到西洲', src: 'https://wx-love-img.afunapp.com/FmiGnJlo26XASeOq3Pu8tzGzEQ2x' },
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
        <div className={styles.photoGrid}>
          {photoUrls.map((photo, index) => (
            <div key={photo.id} className={styles.photoCard} style={{ animationDelay: `${index * 0.08}s` }} onClick={() => handlePhotoClick(index)}>
              <div className={styles.photoThumb}>
                <img
                  className={styles.photoImage}
                  src={formatImgUrl(photo.src)}
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
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 使用备用Lightbox还是原生Lightbox */}
      {useFallback ? (
        <FallbackLightbox isOpen={openIndex !== null} onClose={handleLightboxClose} currentPhoto={openIndex ?? 0} photos={photoUrls} onPhotoChange={setOpenIndex} />
      ) : (
        !lightboxError && (
          <Lightbox
            open={openIndex !== null}
            close={handleLightboxClose}
            index={openIndex ?? 0}
            slides={photoUrls.map((photo) => ({ src: formatImgUrl(photo.src) }))}
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
