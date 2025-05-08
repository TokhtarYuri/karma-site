// components/ThemeSwitch.tsx
import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import styles from './ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ThemeSwitch;
