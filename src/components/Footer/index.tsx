import React from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Tiktok } from '../../assets/tiktok.svg';
import { ReactComponent as Youtube } from '../../assets/youtube.svg';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Button } from 'components/ui/Button';
const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
    <div className={clsx(styles.column, styles.frstColumn)}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
      </div>
      <div className={styles.copyright}>{t("footer.copyright")}</div>
    </div>
  
    <div className={clsx(styles.column, styles.narrowColumn)}>
      <Link to="/passengers" className="body-text">{t('footer.passengers')}</Link>
      <Link to="/about" className="body-text">{t('footer.about')}</Link>
    </div>
  
    <div className={clsx(styles.column, styles.narrowColumn)}>
      <Link to="/drivers" className="body-text">{t('footer.drivers')}</Link>
      <Link to="/privacy" className="body-text">{t('footer.privacy')}</Link>
    </div>
  
    <div className={clsx(styles.column, styles.narrowColumn)}>
      <div className="body-text">{t("footer.socials")}</div>
      <div className={styles.socialIcons}>
        <Instagram className={styles.logo} />
        <Facebook className={styles.logo} />
        <Tiktok className={styles.logo} />
        <Youtube className={styles.logo} />
      </div>
    </div>
  
    <div className={clsx(styles.column, styles.lastColumn)}>
      <Button className={styles.btn} onClick={() => console.log('Clicked!')}>
        <div className={styles.buttonContent}>
          <p className="button-text-md">{t('footer.download_app')}</p>
        </div>
      </Button>
    </div>
  </footer>
  
  );
};

export default Footer;
