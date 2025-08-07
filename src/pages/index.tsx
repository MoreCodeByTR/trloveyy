import { useState, useEffect } from 'react';
import background from '@/assets/image.png';
import styles from './index.module.css';
import { Visible } from '@/components/Visible';

export default function WeddingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMenus, setShowMenus] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const menuItems = [
    {
      id: 'our-story',
      title: 'Our Story',
      subtitle: '我们的故事',
      icon: '💕',
      link: '/our-story',
    },
    {
      id: 'wedding-photos',
      title: 'Wedding Photos',
      subtitle: '婚礼照片',
      icon: '📸',
      link: '/wedding-photos',
    },
    {
      id: 'wedding-day',
      title: 'Wedding Day',
      subtitle: '婚礼当天',
      icon: '💒',
      link: '/wedding-day',
    },
    {
      id: 'vlog',
      title: 'Vlog',
      subtitle: '婚礼视频',
      icon: '🎬',
      link: '/vlog',
    },
  ];

  const handleMenuClick = (link: string) => {
    // 使用简单的页面跳转
    window.location.href = link;
  };

  const handleEnterClick = () => {
    setShowMenus(true);
  };

  const handleBackClick = () => {
    setShowMenus(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={background} alt="Wedding Background" className={`${styles.backgroundImage} ${isLoaded ? styles.loaded : ''}`} />
        <div className={`${styles.overlay} ${isLoaded ? styles.loaded : ''}`}>
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
                    <div className={styles.menuIcon}>{item.icon}</div>
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
