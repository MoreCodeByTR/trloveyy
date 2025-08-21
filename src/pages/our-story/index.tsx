import { useState, useEffect } from 'react';
import styles from './index.module.css';
import FallbackLightbox, { PhotoItem } from '../../components/FallbackLightbox';
import { formatImgUrl } from '@/utils';

const dailyPhotos = [
  'https://wx-love-img.afunapp.com/FhhS5m0e0215GRMAUCS97_Y5uauw',
  'https://wx-love-img.afunapp.com/FjQsYlcoo4Q8KqOjVIXp-XD47vdm',
  'https://wx-love-img.afunapp.com/FkjxPmCImGp0W5qzOvt6uzjZAqwL',
  'https://wx-love-img.afunapp.com/FhrDy1onJh8JrYqDPS6-YpHViZHd',
  'https://wx-love-img.afunapp.com/lkl9HLJKrBK5qGRkl6_Hafqd0i42',
  'https://wx-love-img.afunapp.com/FjCU_UrGMa7Pexc6fGLuBOKPYHtU',
  'https://wx-love-img.afunapp.com/Fuhvq2i8FNbMO6j6ZUtiLtGOoOoJ',
  'https://wx-love-img.afunapp.com/FnbIkmmiVMyQh5ax1qG3f5V5HPig',
  'https://wx-love-img.afunapp.com/Fg3z69kHqRMIjRLzcy8uHPvEH81u',
  'https://wx-love-img.afunapp.com/lkjz4KyPgXVEBP6yXQ96ReWK92Jo',
  'https://wx-love-img.afunapp.com/lugofrqiXXjokTrs7hbOowyISItQ',
  'https://wx-love-img.afunapp.com/FldndRwcnllinoRoZDz8A-XFonHD',
  'https://wx-love-img.afunapp.com/FrWRgxh0a0d2zNU1i1UdpwUjuyNL',
  'https://wx-love-img.afunapp.com/lt_Q6vCAR6UZyj5bZcBG8ED37L6N',
  'https://wx-love-img.afunapp.com/Fl__JYVGYMdWDr3X3JYHcAByQ2IT',
  'https://wx-love-img.afunapp.com/Fr4uZWT9yooGqWEoUPgB2n1xZRBH',
  'https://wx-love-img.afunapp.com/FpTLiHbxDKI-HrnLQHvDUTd6-dE7',
  'https://wx-love-img.afunapp.com/FvJLcQ9A1u1yroCwBqqDSBvfLA2c',
  'https://wx-love-img.afunapp.com/FhJCAEUQOPNwe6EETNn1JpUGwt8k',
];

export default function OurStoryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
        <h1 className={`${styles.title} ${isLoaded ? styles.loaded : ''}`}>恋爱日常</h1>
        <p className={`${styles.subtitle} ${isLoaded ? styles.loaded : ''}`}>记录我们在一起的每一个美好瞬间</p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.photoGrid} ${isLoaded ? styles.loaded : ''}`}>
          {dailyPhotos.map((url, index) => (
            <div className={styles.photoCard} style={{ animationDelay: `${index * 0.1}s` }} onClick={() => handlePhotoClick(index)}>
              <img src={formatImgUrl(url)} className={styles.photo} />
            </div>
          ))}
        </div>
      </div>

      <FallbackLightbox
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        currentPhoto={currentPhotoIndex}
        photos={dailyPhotos.map((url, index) => ({ id: index, title: `日常照片${index + 1}`, description: '珍贵回忆', src: url }))}
        onPhotoChange={handlePhotoChange}
      />

      <div className={styles.backButton} onClick={() => window.history.back()}>
        ← 返回首页
      </div>
    </div>
  );
}
