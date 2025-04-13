// components/ThemeSwitch.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeSwitch;
