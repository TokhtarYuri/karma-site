import clsx from 'clsx';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styles from './About.module.scss';
import { Button } from 'components/ui/Button';
import BackgroundSection from 'components/Blocks/BackgroundSection';
import { ContentBlock } from 'components/Blocks/ContentBlockWithImg';
import about from '../../assets/about.png';
import woman1 from '../../assets/about-woman-1.png';
import woman2 from '../../assets/about-woman-2.png';
import woman3 from '../../assets/about-woman-3.png';
import woman4 from '../../assets/about-woman-4.png';
import woman5 from '../../assets/about-woman-5.png';
import man1 from '../../assets/about-man-1.png';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const contentAboutBlock1: ContentBlockData = {
    image: woman1,
    imagePosition: 'right',
    columnRatio: '60-40',
    title: <h2>
      <Trans
        i18nKey="about.subtitle"
        components={{ br: <br /> }}
      />
    </h2>,
    content: <>
      <p className={clsx('body-md', styles.contentApp)}>{t("about.comfort_description")}</p>
    </>,
    buttons: (
      <div className={styles.buttonGroup}>
        <Button className={styles.btn} onClick={() => console.log('Clicked!')}>
          <div className={styles.buttonContent}>
            <p className="button-text-md">
              {t('about.join_button')}
            </p>
          </div>
        </Button>
      </div>
    ),
    customStyles: {
      content: styles.contentBlock1,
      imageColumn: styles.imageColumn,
    }
  };

  const contentAboutBlock2: ContentBlockData = {
    image: woman2,
    imagePosition: 'left',
    columnRatio: '60-40',
    title: <h2>
      <Trans
        i18nKey="about.our_values_title"
        components={{ br: <br /> }}
      />
    </h2>,
    content: <>
      <p className={clsx('body-md', styles.contentApp)}>{t("about.comfort_repeat_description")}</p>
    </>,
    customStyles: {
      content: styles.contentBlock2,
    }
  };


  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutMainImg}>
        <BackgroundSection
          backgroundImage={about}
          title={
            <Trans
              i18nKey="about.title"
              components={{ br: <br /> }}
            />}
        />
      </div>
      <div className={styles.contentAboutBlock1}>
        <ContentBlock data={contentAboutBlock1} />
      </div>
      <div className={styles.contentAboutBlock2}>
        <ContentBlock data={contentAboutBlock2} />
      </div>
      <div className={styles.tripBlock}>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Trans
            i18nKey="about.main_slogan"
            components={{ br: <br /> }}
          />
        </motion.h2>
        <motion.div
          className={styles.tripImg}
          style={{ backgroundImage: `url(${woman3})` }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>

      (
      <div className={styles.informationBlock}>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Trans i18nKey="about.company_info_title" components={{ br: <br /> }} />
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.card} variants={cardVariants}>
            <img src={woman4} alt="Engine Karma" className={styles.image} />
            <p className={styles.title}>{t('about.karma_engine_title')}</p>
            <p className="body-md">{t('about.karma_engine_description')}</p>
          </motion.div>

          <motion.div className={styles.card} variants={cardVariants}>
            <img src={man1} alt="Inclusive Harmony" className={styles.image} />
            <p className={styles.title}>{t('about.inclusive_harmony_title')}</p>
            <p className="body-md">{t('about.inclusive_harmony_description')}</p>
          </motion.div>

          <motion.div className={styles.card} variants={cardVariants}>
            <img src={woman5} alt="Daily Movement" className={styles.image} />
            <p className={styles.title}>{t('about.daily_motion_title')}</p>
            <p className="body-md">{t('about.daily_motion_description')}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
