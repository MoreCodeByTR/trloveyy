import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from './index.module.css';
import { Visible } from '../Visible';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: (error: any) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, title, autoPlay = false, controls = true, loop = false, muted = false, onPlay, onPause, onEnded, onError }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);

  // 检测是否为移动设备
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isIOS = /ipad|iphone|ipod/.test(userAgent);
      setIsMobile(isMobileDevice);

      // iOS设备特殊处理
      if (isIOS && videoRef.current) {
        const video = videoRef.current;
        video.setAttribute('webkit-playsinline', 'true');
        video.setAttribute('playsinline', 'true');
        video.setAttribute('x5-video-player-type', 'h5');
        video.setAttribute('x5-video-player-fullscreen', 'true');
        video.setAttribute('x5-video-orientation', 'portraint');
        console.log('iOS设备视频属性设置完成');
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 移动端自动全屏播放
  useEffect(() => {
    if (isMobile && videoRef.current) {
      const video = videoRef.current;

      const handlePlay = () => {
        if (video.requestFullscreen) {
          video.requestFullscreen().catch(console.error);
        } else if ((video as any).webkitRequestFullscreen) {
          (video as any).webkitRequestFullscreen().catch(console.error);
        } else if ((video as any).msRequestFullscreen) {
          (video as any).msRequestFullscreen().catch(console.error);
        }
      };

      video.addEventListener('play', handlePlay);
      return () => video.removeEventListener('play', handlePlay);
    }
  }, [isMobile]);

  // 全屏状态监听
  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement;

      const newIsFullscreen = !!fullscreenElement;
      console.log('全屏状态变化:', newIsFullscreen);
      setIsFullscreen(newIsFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    // 初始化时检查当前全屏状态
    handleFullscreenChange();

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // 控制栏自动隐藏
  useEffect(() => {
    if (isPlaying && !isMobile) {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout);
      }

      const timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);

      setControlsTimeout(timeout);
    }
  }, [isPlaying, isMobile, controlsTimeout]);

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [isPlaying]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, []);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = parseFloat(e.target.value);
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    try {
      if (!isFullscreen) {
        // 进入全屏
        console.log('尝试进入全屏模式...');

        // iOS Safari 特殊处理
        if (isMobile && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
          console.log('检测到iOS设备，使用特殊全屏处理');

          // iOS Safari 使用 webkitEnterFullscreen
          if ((video as any).webkitEnterFullscreen) {
            (video as any).webkitEnterFullscreen();
            console.log('iOS webkitEnterFullscreen 调用成功');
            return;
          }

          // 如果 webkitEnterFullscreen 不可用，尝试其他方法
          if ((video as any).webkitRequestFullscreen) {
            (video as any).webkitRequestFullscreen();
            console.log('iOS webkitRequestFullscreen 调用成功');
            return;
          }

          // iOS 备选方案：使用 playsinline 和 webkit-playsinline
          video.setAttribute('webkit-playsinline', 'true');
          video.setAttribute('playsinline', 'true');
          console.log('iOS 使用 playsinline 模式');
          return;
        }

        // 标准全屏API
        if (video.requestFullscreen) {
          video.requestFullscreen().then(() => {
            console.log('成功进入全屏模式');
          }).catch((error) => {
            console.error('requestFullscreen 失败:', error);
          });
        } else if ((video as any).webkitRequestFullscreen) {
          (video as any).webkitRequestFullscreen().then(() => {
            console.log('成功进入 webkit 全屏模式');
          }).catch((error) => {
            console.error('webkitRequestFullscreen 失败:', error);
          });
        } else if ((video as any).mozRequestFullScreen) {
          (video as any).mozRequestFullScreen().then(() => {
            console.log('成功进入 moz 全屏模式');
          }).catch((error) => {
            console.error('mozRequestFullScreen 失败:', error);
          });
        } else if ((video as any).msRequestFullscreen) {
          (video as any).msRequestFullscreen().then(() => {
            console.log('成功进入 ms 全屏模式');
          }).catch((error) => {
            console.error('msRequestFullscreen 失败:', error);
          });
        } else {
          console.warn('当前浏览器不支持全屏API');
          // 尝试使用容器全屏作为备选方案
          if (containerRef.current) {
            if (containerRef.current.requestFullscreen) {
              containerRef.current.requestFullscreen().catch(console.error);
            } else if ((containerRef.current as any).webkitRequestFullscreen) {
              (containerRef.current as any).webkitRequestFullscreen().catch(console.error);
            }
          }
        }
      } else {
        // 退出全屏
        console.log('尝试退出全屏模式...');

        // iOS Safari 特殊处理
        if (isMobile && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
          console.log('iOS设备退出全屏');
          // iOS Safari 会自动处理退出全屏，无需手动调用
          return;
        }

        if (document.exitFullscreen) {
          document.exitFullscreen().then(() => {
            console.log('成功退出全屏模式');
          }).catch((error) => {
            console.error('exitFullscreen 失败:', error);
          });
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen().then(() => {
            console.log('成功退出 webkit 全屏模式');
          }).catch((error) => {
            console.error('webkitExitFullscreen 失败:', error);
          });
        } else if ((document as any).mozCancelFullScreen) {
          (document as any).mozCancelFullScreen().then(() => {
            console.log('成功退出 moz 全屏模式');
          }).catch((error) => {
            console.error('mozCancelFullScreen 失败:', error);
          });
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen().then(() => {
            console.log('成功退出 ms 全屏模式');
          }).catch((error) => {
            console.error('msExitFullscreen 失败:', error);
          });
        }
      }
    } catch (error) {
      console.error('全屏操作异常:', error);
    }
  }, [isFullscreen, isMobile]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = useCallback(() => {
    if (!isMobile) {
      setShowControls(true);
      if (controlsTimeout) {
        clearTimeout(controlsTimeout);
      }
    }
  }, [isMobile, controlsTimeout]);

  return (
    <div ref={containerRef} className={`${styles.videoPlayer} ${isFullscreen ? styles.fullscreen : ''}`} onMouseMove={handleMouseMove} onMouseLeave={() => !isMobile && setShowControls(false)}>
      <video
        ref={videoRef}
        className={styles.video}
        poster={poster}
        autoPlay={autoPlay}
        controls={false}
        loop={loop}
        muted={muted}
        playsInline
        webkit-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint"
        onPlay={() => {
          setIsPlaying(true);
          onPlay?.();
        }}
        onPause={() => {
          setIsPlaying(false);
          onPause?.();
        }}
        onEnded={onEnded}
        onError={onError}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={src} type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>

      {/* 自定义控制栏 */}
      {controls && (
        <div className={`${styles.controls} ${showControls ? styles.show : ''}`}>
          {/* 播放/暂停按钮 */}
          <div className={styles.controlButton} onClick={handlePlayPause} aria-label={isPlaying ? '暂停' : '播放'}>
            {isPlaying ? (
              <img src="https://wx-love-img.afunapp.com/FgZJZaDaoHmCvPiU-XJuFQfubWHE" width={28} height={28} alt="播放" />
            ) : (
              <img src="https://wx-love-img.afunapp.com/FuWl1ur5_vwEVDkMubbuxy-1a5LR" width={28} height={28} alt="暂停" />
            )}
          </div>

          {/* 进度条 */}
          <div className={styles.progressContainer}>
            <input type="range" className={styles.progressBar} min={0} max={duration || 0} value={currentTime} onChange={handleSeek} step={0.1} />
            <div className={styles.timeDisplay}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* 音量控制 */}
          <div className={styles.volumeContainer}>
            <input type="range" className={styles.volumeBar} min={0} max={1} value={volume} onChange={handleVolumeChange} step={0.1} />
          </div>

          {/* 全屏按钮 */}
          <div className={styles.controlButton} onClick={handleFullscreen} aria-label={isFullscreen ? '退出全屏' : '全屏'}>
            <img src="https://wx-love-img.afunapp.com/Foor7aEMtiJL4MkL6NQCopR1RFn8" width={28} height={28} alt="全屏" />
          </div>
        </div>
      )}

      {/* 标题显示 */}
      {title && (
        <div className={styles.titleOverlay}>
          <h3>{title}</h3>
        </div>
      )}

      {/* 移动端播放提示 */}
      <Visible when={!isPlaying}>
        <div className={styles.mobilePlayHint} onClick={handlePlayPause}>
          <div className={styles.playIcon}>
            <img src="https://wx-love-img.afunapp.com/FuWl1ur5_vwEVDkMubbuxy-1a5LR" width={40} height={40} alt="播放" />
          </div>

          <p>点击播放</p>
        </div>
      </Visible>
    </div>
  );
};

export default VideoPlayer;
