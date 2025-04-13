// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import ThemeSwitch from '../ui/ThemeSwitch';
import './Header.module.css'; 
import { ReactComponent as PhoneIcon } from 'src/images/phone.svg';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">LOGO</Link>
      </div>

      <nav className="header__menu">
        <Link to="/passengers">Пассажирам</Link>
        <Link to="/drivers">Водителям</Link>
        <Link to="/about">Про компанию</Link>
      </nav>

      <div className="header__right">
        {/* Мовний селектор (тимчасово статичний) */}
        <select className="header__lang">
          <option value="ru">RU</option>
          <option value="uk">UK</option>
          <option value="en">EN</option>
        </select>

        {/* Світчер теми */}
        <ThemeSwitch />

        {/* Телефон */}
        <div className="header__phone">
          <PhoneIcon className="phone-icon" />
          <span>699</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
