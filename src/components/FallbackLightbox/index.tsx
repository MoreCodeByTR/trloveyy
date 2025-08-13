import styles from './index.module.css';

type PhotoItem = {
  id: number;
  title: string;
  description: string;
  src: string;
};

interface FallbackLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: number;
  photos: PhotoItem[];
  onPhotoChange: (index: number) => void;
}

const FallbackLightbox = ({
  isOpen,
  onClose,
  currentPhoto,
  photos,
  onPhotoChange,
}: FallbackLightboxProps) => {
  if (!isOpen) return null;

  const handlePrev = () => {
    if (currentPhoto > 0) {
      onPhotoChange(currentPhoto - 1);
    }
  };

  const handleNext = () => {
    if (currentPhoto < photos.length - 1) {
      onPhotoChange(currentPhoto + 1);
    }
  };

  return (
    <div className={styles.fallbackLightbox}>
      <div className={styles.fallbackOverlay} onClick={onClose} />
      <div className={styles.fallbackContent}>
        <button className={styles.fallbackClose} onClick={onClose}>×</button>
        <div className={styles.fallbackImageContainer}>
          <img
            src={photos[currentPhoto]?.src}
            alt={photos[currentPhoto]?.title}
            className={styles.fallbackImage}
          />
        </div>
        <div className={styles.fallbackNavigation}>
          <button
            className={styles.fallbackNavBtn}
            onClick={handlePrev}
            disabled={currentPhoto === 0}
          >
            ‹
          </button>
          <span className={styles.fallbackCounter}>
            {currentPhoto + 1} / {photos.length}
          </span>
          <button
            className={styles.fallbackNavBtn}
            onClick={handleNext}
            disabled={currentPhoto === photos.length - 1}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default FallbackLightbox;
export type { PhotoItem };