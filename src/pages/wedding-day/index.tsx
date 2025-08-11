import { useState, useEffect } from 'react';
import { history } from 'ice';
import styles from './index.module.css';
import { Toast } from 'antd-mobile';
import copy from 'copy-to-clipboard';

export default function WeddingDayPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const weddingInfo = {
    date: '2025年10月2日',
    time: '16:00',
  };

  const groomInfo = {
    title: '新郎家',
    address: '武穴市大法寺镇双庙村田仕润垸',
    phone: '18671358292',
    contact: '田睿',
  };

  const brideInfo = {
    title: '新娘家',
    address: '蕲春县彭思镇彭思村',
    phone: '18671358292',
    contact: '游燕',
  };

  const handleCopyAddress = async (address: string) => {
    copy(address);
    Toast.show({
      content: '目的地已复制，请自行前往地图搜索导航',
      duration: 3000,
    });
  };

  const handleCopyPhone = async (phone: string) => {
    copy(phone);
    Toast.show({
      content: '手机号码已复制，欢迎随时联系',
      duration: 3000,
    });
  };

  return (
    <div className={styles.wapper}>
      <div className={styles.container}>
        {/* 欢迎图 */}
        <div className={`${styles.welcomeImage} ${isLoaded ? styles.loaded : ''}`}>
          <img src="https://wx-love-img.afunapp.com/FpAWUCgFpwSRAZ5P-pL-F-vKbbwm" className={styles.mainBkg} alt="welcome" />
          <div className={styles.welcomeOverlay}>
            <h1 className={styles.welcomeTitle}>欢迎参加我们的婚礼</h1>
            <p className={styles.welcomeSubtitle}>Welcome to Our Wedding</p>
          </div>
        </div>

        {/* 婚礼基本信息 */}
        <div className={`${styles.weddingInfo} ${isLoaded ? styles.loaded : ''}`}>
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <h2 className={styles.infoTitle}>婚礼信息</h2>
              <div className={styles.infoIcon}>💒</div>
            </div>

            <div className={styles.infoContent}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>日期：{weddingInfo.date} {weddingInfo.time}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>地点：湖北 黄冈</span>
              </div>
            </div>
          </div>
          {/* 新娘家信息 */}
          <div className={`${styles.locationCard} ${isLoaded ? styles.loaded : ''}`}>
            <div className={styles.locationHeader}>
              <h3 className={styles.locationTitle}>
                {brideInfo.title}
              </h3>
              <div className={styles.locationIcon}>🏠</div>
            </div>
            <div className={styles.locationContent}>
              <div className={styles.addressContainer}>
                <span style={{ marginRight: '6px' }}>
                  <img src="https://wx-love-img.afunapp.com/Fqn_d1wxD1Bw0UxoEfC34jYeTp3j" width={20} />
                </span>
                <span className={styles.locationValue}>{brideInfo.address}</span>
                <span onClick={() => handleCopyAddress(brideInfo.address)}>
                  <img src="https://wx-love-img.afunapp.com/FgbnngKRt5fQGxiIwLaiUtwqymww" width={20} />
                </span>
              </div>
              <div className={styles.locationRow}>
                <span>
                  <img src="https://wx-love-img.afunapp.com/FmiFIjtQ9ir6MN0PLItjBfrGFsDP" width={20} />
                </span>
                <span className={styles.locationValue} onClick={() => handleCopyPhone(brideInfo.phone)}>
                  {brideInfo.phone}
                  <span onClick={() => handleCopyPhone(brideInfo.phone)}>
                    <img src="https://wx-love-img.afunapp.com/FgbnngKRt5fQGxiIwLaiUtwqymww" width={20} />
                  </span>
                </span>
              </div>
            </div>
          </div>


          {/* 新郎家信息 */}
          <div className={`${styles.locationCard} ${isLoaded ? styles.loaded : ''}`}>
            <div className={styles.locationHeader}>
              <h3 className={styles.locationTitle}>{groomInfo.title}</h3>
              <div className={styles.locationIcon}>🏠</div>
            </div>
            <div className={styles.locationContent}>
              <div className={styles.addressContainer}>
                <span style={{ marginRight: '6px' }}>
                  <img src="https://wx-love-img.afunapp.com/Fqn_d1wxD1Bw0UxoEfC34jYeTp3j" width={20} />
                </span>
                <span className={styles.locationValue}>{groomInfo.address}</span>
                <span onClick={() => handleCopyAddress(groomInfo.address)}>
                  <img src="https://wx-love-img.afunapp.com/FgbnngKRt5fQGxiIwLaiUtwqymww" width={20} />
                </span>
              </div>
              <div className={styles.locationRow}>
                <span>
                  <img src="https://wx-love-img.afunapp.com/FmiFIjtQ9ir6MN0PLItjBfrGFsDP" width={20} />
                </span>
                <span className={styles.locationValue} onClick={() => handleCopyPhone(groomInfo.phone)}>
                  {groomInfo.phone}
                  <span onClick={() => handleCopyPhone(groomInfo.phone)}>
                    <img src="https://wx-love-img.afunapp.com/FgbnngKRt5fQGxiIwLaiUtwqymww" width={20} />
                  </span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.backButton} onClick={() => history?.push('/?showMenus=true')}>
        ← 返回首页
      </div>
    </div>


  );
}
