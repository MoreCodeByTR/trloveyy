import { useState, useEffect } from 'react';
import styles from './wedding-day.module.css';

export default function WeddingDayPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const schedule = [
    {
      id: 'ceremony',
      time: '14:00',
      title: '婚礼仪式',
      description: '神圣的婚礼仪式开始',
      icon: '💒',
      details: '在亲朋好友的见证下，我们许下永恒的誓言',
    },
    {
      id: 'reception',
      time: '15:30',
      title: '婚宴开始',
      description: '温馨的婚宴时光',
      icon: '🍽️',
      details: '与亲朋好友共享美食，分享我们的喜悦',
    },
    {
      id: 'toast',
      time: '16:30',
      title: '敬酒环节',
      description: '向亲朋好友敬酒',
      icon: '🥂',
      details: '感谢大家的祝福，让我们一起举杯庆祝',
    },
    {
      id: 'dance',
      time: '17:30',
      title: '第一支舞',
      description: '浪漫的第一支舞',
      icon: '💃',
      details: '在美妙的音乐中，我们翩翩起舞',
    },
    {
      id: 'cake',
      time: '18:00',
      title: '切蛋糕',
      description: '甜蜜的蛋糕时刻',
      icon: '🎂',
      details: '一起切下象征甜蜜生活的婚礼蛋糕',
    },
    {
      id: 'party',
      time: '18:30',
      title: '庆祝派对',
      description: '欢乐的庆祝派对',
      icon: '🎉',
      details: '与大家一同庆祝这个特别的日子',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={`${styles.title} ${isLoaded ? styles.loaded : ''}`}>
          Wedding Day
        </h1>
        <p className={`${styles.subtitle} ${isLoaded ? styles.loaded : ''}`}>
          婚礼当天流程
        </p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.scheduleContainer} ${isLoaded ? styles.loaded : ''}`}>
          {schedule.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.scheduleItem} ${
                activeSection === item.id ? styles.active : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setActiveSection(activeSection === item.id ? null : item.id)}
            >
              <div className={styles.timeBadge}>
                <span className={styles.time}>{item.time}</span>
              </div>

              <div className={styles.itemContent}>
                <div className={styles.itemIcon}>{item.icon}</div>
                <div className={styles.itemText}>
                  <h3>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                  {activeSection === item.id && (
                    <p className={styles.itemDetails}>{item.details}</p>
                  )}
                </div>
              </div>

              <div className={styles.itemArrow}>
                {activeSection === item.id ? '−' : '+'}
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