import styles from './index.module.css';
import VideoPlayer from '@/components/VideoPlayer';
import { history } from 'ice';

export default function VlogPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={`${styles.title}`}>
            Wedding Vlog
          </h1>
          <p className={`${styles.subtitle}`}>
            婚礼视频记录
          </p>
        </div>
        <div>
          更新中...
        </div>
        <div className={styles.videoContainer}>
          {/* <VideoPlayer src="http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4" />
          <VideoPlayer src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" /> */}
        </div>
      </div>
      <div className={styles.backButton} onClick={() => history?.push('/?showMenus=true')}>
        ← 返回首页
      </div>
    </div>
  );
}

