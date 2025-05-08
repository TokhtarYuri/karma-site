import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
