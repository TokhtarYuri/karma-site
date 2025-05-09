import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitch from '../ui/ThemeSwitch';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import LanguageSwitcher from 'components/ui/LanguageSwitcher';
import clsx from 'clsx';
import { Button } from 'components/ui/Button';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);


  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
      </div>

      <nav className={styles.menuDesktop}>
        <Link to="/passengers">{t('menu.passengers')}</Link>
        <Link to="/drivers">{t('menu.drivers')}</Link>
        <Link to="/about">{t('menu.about')}</Link>
      </nav>

      <div className={styles.controlsDesktop}>
        <LanguageSwitcher />
        <ThemeSwitch />
      </div>

      <a className={styles.phoneDesktop} href="tel:699">
        <PhoneIcon className={styles.phoneIcon} />
        <span>699</span>
      </a>

      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <BurgerIcon />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.topRow}>
            <div className={styles.controls}>
              <LanguageSwitcher />
              <ThemeSwitch />
            </div>
            <a className={styles.phone} href="tel:699">
              <PhoneIcon className={styles.phoneIcon} />
              <span>699</span>
            </a>
          </div>
          <nav className={styles.menuMobile}>
            <Link to="/passengers" onClick={() => setMenuOpen(false)}>{t('menu.passengers')}</Link>
            <Link to="/drivers" onClick={() => setMenuOpen(false)}>{t('menu.drivers')}</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>{t('menu.about')}</Link>
          </nav>
             <Button  className={styles.closeButton} onClick={() => setMenuOpen(false)}>
      {t('menu.сlose')}
    </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

