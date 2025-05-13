import React from 'react';
import styles from './BackgroundSection.module.scss';
import { motion } from 'framer-motion';

interface BackgroundSectionProps {
  backgroundImage: string;
  title: React.ReactNode;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ backgroundImage, title }) => {
  return (
    <motion.div
      className={styles.backgroundSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

export default BackgroundSection;
