import { Outlet } from 'ice';
import { useState, useRef, useEffect, createContext, useContext } from 'react';
import styles from './layout.module.css';

// 创建音乐播放上下文
export const MusicContext = createContext<{
  isPlaying: boolean;
  togglePlay: () => void;
  playMusic: () => void;
}>({
  isPlaying: false,
  togglePlay: () => {},
  playMusic: () => {},
});

// 自定义Hook
export const useMusic = () => useContext(MusicContext);

const Layout = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 婚礼音乐URL - 您可以根据需要更换
  const musicUrl = 'https://wx-love-img.afunapp.com/loWmUQJWSuWWxTP4DVWlp60VGPGb'; // 示例音乐链接

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playMusic = () => {
    if (!audioRef.current || isPlaying) return;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const musicContextValue = {
    isPlaying,
    togglePlay,
    playMusic,
  };

  return (
    <MusicContext.Provider value={musicContextValue}>
      <div>
        {/* 全局音乐播放器 */}
        <div className={styles.musicPlayer}>
          <div className={`${styles.musicIcon} ${isPlaying ? styles.playing : ''}`} onClick={togglePlay}>
            <img src="https://wx-love-img.afunapp.com/FrG6qbCQGuRgkJZMnf7wmtUxSBPI" width={28} height={28} alt="播放" />
          </div>
        </div>
        {/* 音频元素 */}
        <audio ref={audioRef} src={musicUrl} preload="metadata" />
        <Outlet />
      </div>
    </MusicContext.Provider>
  );
};

export default Layout;