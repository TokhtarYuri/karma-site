// src/components/Header/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import ThemeSwitch from '../ui/ThemeSwitch';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import LanguageSwitcher from 'components/ui/LanguageSwitcher';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
      </div>

      <nav className={styles.menu}>
        <Link to="/passengers" className="body-text">{t('menu.passengers')}</Link>
        <Link to="/drivers" className="body-text">{t('menu.drivers')}</Link>
        <Link to="/about" className="body-text">{t('menu.about')}</Link>
      </nav>

      <div className={styles.controls}>
        <LanguageSwitcher />
        <ThemeSwitch />
      </div>

      <a className={styles.phone} href="tel:699">
        <PhoneIcon className={styles.phoneIcon} />
        <span>699</span>
      </a>
    </header>
  );
};

export default Header;
