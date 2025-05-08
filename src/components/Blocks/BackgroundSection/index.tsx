import React from 'react';
import styles from './BackgroundSection.module.scss';

interface BackgroundSectionProps {
  backgroundImage: string;
  title: React.ReactNode;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ backgroundImage, title }) => {
  return (
    <div
      className={styles.backgroundSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default BackgroundSection;
