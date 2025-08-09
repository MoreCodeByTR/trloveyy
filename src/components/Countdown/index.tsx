import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './index.module.css';

export type CountdownProps = {
  targetDate: string | Date;
  className?: string;
  onEnd?: () => void;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function Countdown({ targetDate, className, onEnd }: CountdownProps) {
  const target = useMemo(() => (typeof targetDate === 'string' ? new Date(targetDate) : targetDate), [targetDate]);

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = Date.now();
    const targetMs = target.getTime();
    const diffMs = Math.max(0, targetMs - now);

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [target]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = calculateTimeLeft();
        if (
          next.days === 0 &&
          next.hours === 0 &&
          next.minutes === 0 &&
          next.seconds === 0 &&
          !(prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0)
        ) {
          onEnd?.();
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft, onEnd]);

  const pad2 = (value: number) => String(value).padStart(2, '0');

  return (
    <div className={`${styles.countdown} ${className ?? ''}`.trim()}>
      <div className={styles.group}>
        <span className={styles.value}>{timeLeft.days}</span>
        <span className={styles.label}>天</span>
      </div>
      <span className={styles.sep}>:</span>
      <div className={styles.group}>
        <span className={styles.value}>{pad2(timeLeft.hours)}</span>
        <span className={styles.label}>时</span>
      </div>
      <span className={styles.sep}>:</span>
      <div className={styles.group}>
        <span className={styles.value}>{pad2(timeLeft.minutes)}</span>
        <span className={styles.label}>分</span>
      </div>
      <span className={styles.sep}>:</span>
      <div className={styles.group}>
        <span className={styles.value}>{pad2(timeLeft.seconds)}</span>
        <span className={styles.label}>秒</span>
      </div>
    </div>
  );
}


