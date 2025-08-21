import { useState, useEffect, useMemo } from 'react';
import { Countdown } from '@/components/Countdown';
import background from '@/assets/image.png';
import styles from './index.module.css';
import { Visible } from '@/components/Visible';
import { history, useSearchParams } from 'ice';
import { useMusic } from './layout';

export default function WeddingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMenus, setShowMenus] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const targetDate = useMemo(() => new Date('2025-10-02T00:00:00+08:00'), []);
  const [searchParams] = useSearchParams();
  const { playMusic } = useMusic();

  // 倒计时逻辑已封装到 Countdown 组件

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (searchParams.get('showMenus') === 'true') {
      setShowMenus(true);
    }
  }, [searchParams]);

  const menuItems = [
    {
      id: 'wedding-day',
      title: 'Wedding Day',
      subtitle: '婚礼日期地点',
      icon: 'https://wx-love-img.afunapp.com/FutnlW919EqqqgFyFAHV8Pf1qffi',
      link: '/wedding-day',
    },
    {
      id: 'our-story',
      title: 'Our Story',
      subtitle: '我们的故事',
      icon: 'https://wx-love-img.afunapp.com/FjVDrmUmwJc4OLNEPtXZzoXNw0m2',
      link: '/our-story',
    },
    {
      id: 'wedding-photos',
      title: 'Wedding Photos',
      subtitle: '婚纱照',
      icon: 'https://wx-love-img.afunapp.com/FhxJDlyYUgWuTJuXUnU50LLV_L_D',
      link: '/wedding-photos',
    },
    {
      id: 'vlog',
      title: 'Vlog',
      subtitle: '婚礼视频',
      icon: 'https://wx-love-img.afunapp.com/FgNwuyEM4H5sA7ISa-jb4BTSj5BE',
      link: '/vlog',
    },
  ];

  const handleMenuClick = (link: string) => {
    history?.push(link);
  };

  const handleEnterClick = () => {
    setShowMenus(true);
    // 点击进入时播放音乐
    playMusic();
  };

  const handleBackClick = () => {
    setShowMenus(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={background} alt="Wedding Background" className={`${styles.backgroundImage} ${isLoaded ? styles.loaded : ''}`} />
        <div className={`${styles.overlay} ${isLoaded ? styles.loaded : ''}`}>
          <Visible when={!showMenus}>
            <div className={styles.countdown}>
              <Countdown targetDate={targetDate} />
            </div>
          </Visible>
          <div className={styles.content}>
            <Visible when={!showMenus}>
              <h1 className={`${styles.title} ${isLoaded ? styles.loaded : ''}`}>我们的婚礼</h1>
              <p className={`${styles.subtitle} ${isLoaded ? styles.loaded : ''}`}>欢迎来到我们的特别时刻</p>
            </Visible>
            {!showMenus ? (
              <div className={`${styles.enterButton} ${isLoaded ? styles.loaded : ''}`}>
                <button onClick={handleEnterClick} className={styles.enterBtn}>
                  走进ta们的婚礼
                </button>
                <div style={{ position: 'absolute', top: '0px', right: '-60px' }}>
                  <img src="https://wx-love-img.afunapp.com/FnML4Rrd2c5InXAv60yskq2XXPG5" alt="logo" width={100} />
                </div>
              </div>
            ) : (
              <div className={`${styles.menuGrid} ${showMenus ? styles.show : ''}`}>
                {menuItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`${styles.menuItem} ${hoveredMenu === item.id ? styles.hovered : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onMouseEnter={() => setHoveredMenu(item.id)}
                    onMouseLeave={() => setHoveredMenu(null)}
                    onClick={() => handleMenuClick(item.link)}
                  >
                    <div className={styles.menuIcon}>
                      <img src={item.icon} alt={item.title} width={100} />
                    </div>
                    <div className={styles.menuContent}>
                      <h3 className={styles.menuTitle}>{item.title}</h3>
                      <p className={styles.menuSubtitle}>{item.subtitle}</p>
                    </div>
                    <div className={styles.menuArrow}>→</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showMenus && (
        <div className={styles.backButton} onClick={handleBackClick}>
          ← 返回
        </div>
      )}
    </div>
  );
}
