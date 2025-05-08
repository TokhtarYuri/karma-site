import React from 'react';
import styles from './FeatureIconsBlock.module.scss';

interface FeatureItem {
  icon: string;
  title: string;
  subtitle: string;
}

interface FeatureIconsBlockProps {
  items: FeatureItem[];
}

const FeatureIconsBlock: React.FC<FeatureIconsBlockProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map(({ icon, title }, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.iconWrapper}>
          {icon}
          </div>
          <div className={styles.text}>
            <p className="subtitle-md">{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureIconsBlock;
