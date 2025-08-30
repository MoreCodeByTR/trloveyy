import { useEffect, useMemo, useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './index.module.css';
import { history } from 'ice';
import FallbackLightbox from '@/components/FallbackLightbox';

import { formatImgUrl } from '@/utils';

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
      { id: 11, description: '恰同学少年', src: 'https://wx-love-img.afunapp.com/FldndRwcnllinoRoZDz8A-XFonHD' },
      { id: 1, description: '蜡笔小田和小游', src: 'https://wx-love-img.afunapp.com/FhhS5m0e0215GRMAUCS97_Y5uauw' },
      { id: 2, description: '洱海，我们来了', src: 'https://wx-love-img.afunapp.com/FjQsYlcoo4Q8KqOjVIXp-XD47vdm' },
      { id: 3, description: '去听杰哥演唱会啦', src: 'https://wx-love-img.afunapp.com/FkjxPmCImGp0W5qzOvt6uzjZAqwL' },
      { id: 4, description: '春日限定版体验', src: 'https://wx-love-img.afunapp.com/FhrDy1onJh8JrYqDPS6-YpHViZHd' },
      { id: 5, description: '入目无他人，四下皆是你', src: 'https://wx-love-img.afunapp.com/lkl9HLJKrBK5qGRkl6_Hafqd0i42' },
      { id: 7, description: '那天的花和你都很好看', src: 'https://wx-love-img.afunapp.com/Fuhvq2i8FNbMO6j6ZUtiLtGOoOoJ' },
      { id: 6, description: '要一起过很多个纪念日', src: 'https://wx-love-img.afunapp.com/FjCU_UrGMa7Pexc6fGLuBOKPYHtU' },
      { id: 8, description: '我们订婚啦', src: 'https://wx-love-img.afunapp.com/FnbIkmmiVMyQh5ax1qG3f5V5HPig' },
      { id: 9, description: '东湖的落日很美', src: 'https://wx-love-img.afunapp.com/lkjz4KyPgXVEBP6yXQ96ReWK92Jo' },
      { id: 13, description: '二妃山的粉色花海和你', src: 'https://wx-love-img.afunapp.com/lt_Q6vCAR6UZyj5bZcBG8ED37L6N' },
      { id: 10, description: '图书馆学习', src: 'https://wx-love-img.afunapp.com/lugofrqiXXjokTrs7hbOowyISItQ' },
      { id: 12, description: '吃遍所有的美食', src: 'https://wx-love-img.afunapp.com/FrWRgxh0a0d2zNU1i1UdpwUjuyNL' },
      { id: 14, description: '天府之行', src: 'https://wx-love-img.afunapp.com/Fl__JYVGYMdWDr3X3JYHcAByQ2IT' },
      { id: 15, description: '有你真甜', src: 'https://wx-love-img.afunapp.com/Fr4uZWT9yooGqWEoUPgB2n1xZRBH' },
      { id: 16, description: '春熙路', src: 'https://wx-love-img.afunapp.com/FpTLiHbxDKI-HrnLQHvDUTd6-dE7' },
      { id: 17, description: '嘿嘿嘿', src: 'https://wx-love-img.afunapp.com/FvJLcQ9A1u1yroCwBqqDSBvfLA2c' },
      { id: 18, description: '樱花开了🌸', src: 'https://wx-love-img.afunapp.com/FhJCAEUQOPNwe6EETNn1JpUGwt8k' },
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
        <p className={`${styles.subtitle}`}>你好，旧时光</p>
      </div>
      <div className={styles.content}>
        <div className={`${styles.photoGrid} ${isLoaded ? styles.loaded : ''}`}>
          {photoUrls.map((photo, index) => (
            <div key={photo.id} className={styles.photoCard} style={{ animationDelay: `${index * 0.08}s` }} onClick={() => handlePhotoClick(index)}>
              <div className={styles.photoThumb}>
                <img
                  className={styles.photoImage}
                  src={formatImgUrl(photo.src)}
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
          photos={photoUrls.map((photo) => ({ id: photo.id,
title:
             photo.description,
description: photo.description,
src: photo.src }))}
          onPhotoChange={setOpenIndex}
        />
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
