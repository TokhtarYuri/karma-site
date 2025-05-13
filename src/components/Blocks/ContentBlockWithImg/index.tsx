import React from 'react';
import styles from './ContentBlockWithImg.module.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const fadeFrom = (direction: 'left' | 'right' | 'bottom') => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'bottom' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };
  return variants;
};

export const ContentBlock = ({ data }) => {
  const {
    image,
    imagePosition = 'left',
    columnRatio = '50-50',
    title,
    content,
    buttons,
    className,
    customStyles = {},
    animateOnMount = false,
  } = data;

  const [leftRatio, rightRatio] = columnRatio.split('-');
  const isImageLeft = imagePosition === 'left';
  const [isMobile, setIsMobile] = React.useState(false);

  const animationProps = animateOnMount
    ? { initial: 'hidden', animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageVariants = fadeFrom(imagePosition);
  const contentVariants = fadeFrom(imagePosition === 'left' ? 'right' : 'left');
  const buttonVariants = fadeFrom('bottom');

  return (
    <div
      className={clsx(
        styles.contentBlock,
        isImageLeft ? styles.imageLeft : styles.imageRight,
        className,
        customStyles.wrapper
      )}
    >
      {!isMobile && (
        <>
          <motion.div
            className={clsx(styles.imageColumn, customStyles.imageColumn)}
            style={{ flex: leftRatio }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <img src={image} alt="Content Block" className={styles.image} />
          </motion.div>

          <motion.div
            className={clsx(styles.contentColumn, customStyles.contentColumn)}
            style={{ flex: rightRatio }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={contentVariants}
          >
            {title && (
              <motion.div
                className={clsx(styles.title, customStyles.title)}
                variants={fadeFrom('left')}
              >
                {title}
              </motion.div>
            )}
            {content && (
              <motion.div
                className={clsx(styles.content, customStyles.content)}
                variants={fadeFrom('left')}
                transition={{ delay: 0.2 }}
              >
                {content}
              </motion.div>
            )}
            {buttons && (
              <motion.div
                className={clsx(styles.buttons, customStyles.buttons)}
                variants={buttonVariants}
                transition={{ delay: 0.4 }}
              >
                {buttons}
              </motion.div>
            )}
          </motion.div>
        </>
      )}
      {isMobile && (
        <motion.div
          className={clsx(styles.mobileColumn)}
          {...animationProps}
          variants={fadeFrom('bottom')}
        >
          {title && <div className={clsx(styles.title, customStyles.title)}>{title}</div>}
          <div className={clsx(styles.imageColumn, customStyles.imageColumn)}>
            <img src={image} alt="Content Block" className={styles.image} />
          </div>
          {content && <div className={clsx(styles.content, customStyles.content)}>{content}</div>}
          {buttons && <div className={clsx(styles.buttons, customStyles.buttons)}>{buttons}</div>}
        </motion.div>
      )}

    </div>
  );
};
