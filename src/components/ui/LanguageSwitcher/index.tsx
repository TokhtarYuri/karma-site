import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';
import styles from './LanguageSwitcher.module.scss';
  
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={styles.button} onClick={toggleDropdown}>
        {i18n.language.toUpperCase()}
        <ArrowIcon className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} />
      </button>
      {isOpen && (
        <ul className={styles.dropdown}>
          <li onClick={() => handleChange('ua')}>UA</li>
          <li onClick={() => handleChange('en')}>EN</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
