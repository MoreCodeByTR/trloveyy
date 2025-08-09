import { useState, useEffect } from 'react';
import styles from './index.module.css';

export default function VlogPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const videos = [
    {
      id: 'proposal',
      title: '求婚视频',
      description: '浪漫的求婚时刻',
      duration: '3:45',
      thumbnail: '💍',
      category: '求婚',
    },
    {
      id: 'engagement',
      title: '订婚派对',
      description: '温馨的订婚庆祝',
      duration: '5:20',
      thumbnail: '🎉',
      category: '订婚',
    },
    {
      id: 'preparation',
      title: '婚礼筹备',
      description: '忙碌而甜蜜的筹备过程',
      duration: '8:15',
      thumbnail: '📋',
      category: '筹备',
    },
    {
      id: 'wedding-ceremony',
      title: '婚礼仪式',
      description: '神圣的婚礼仪式',
      duration: '12:30',
      thumbnail: '💒',
      category: '仪式',
    },
    {
      id: 'reception',
      title: '婚宴现场',
      description: '欢乐的婚宴时光',
      duration: '15:45',
      thumbnail: '🍽️',
      category: '婚宴',
    },
    {
      id: 'honeymoon',
      title: '蜜月旅行',
      description: '甜蜜的蜜月时光',
      duration: '20:10',
      thumbnail: '✈️',
      category: '蜜月',
    },
  ];

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={`${styles.title} ${isLoaded ? styles.loaded : ''}`}>
          Wedding Vlog
        </h1>
        <p className={`${styles.subtitle} ${isLoaded ? styles.loaded : ''}`}>
          婚礼视频记录
        </p>
      </div>

      <div className={styles.content}>
        <div className={`${styles.videoGrid} ${isLoaded ? styles.loaded : ''}`}>
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`${styles.videoCard} ${
                playingVideo === video.id ? styles.playing : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleVideoClick(video.id)}
            >
              <div className={styles.videoThumbnail}>
                <div className={styles.thumbnailEmoji}>{video.thumbnail}</div>
                <div className={styles.playButton}>
                  {playingVideo === video.id ? '⏸️' : '▶️'}
                </div>
                <div className={styles.duration}>{video.duration}</div>
                <div className={styles.category}>{video.category}</div>
              </div>

              <div className={styles.videoInfo}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>

              {playingVideo === video.id && (
                <div className={styles.videoPlayer}>
                  <div className={styles.playerPlaceholder}>
                    <div className={styles.playerIcon}>🎬</div>
                    <p>视频播放中...</p>
                  </div>
                </div>
              )}
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

