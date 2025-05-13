import React from 'react';
import styles from './FeatureIconsBlock.module.scss';
import { motion } from 'framer-motion';

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
        <motion.div
          key={index}
          className={styles.item}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
            delay: index * 0.5,
          }}
          viewport={{ once: true, amount: 0.5 }} // появление только один раз, когда видно 20% блока
        >
          <div className={styles.iconWrapper}>{icon}</div>
          <div className={styles.text}>
            <p className="subtitle-md">{title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureIconsBlock;
