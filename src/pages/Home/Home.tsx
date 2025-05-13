import { ContentBlock } from 'components/Blocks/ContentBlockWithImg';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import imgCarBlack from '../../assets/car-black.png';
import imgCarWhite from '../../assets/car-white.png';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import imgMan from '../../assets/man.png';
import { Button } from 'components/ui/Button';
import styles from './Home.module.scss';
import type { ContentBlockData } from './ContentBlockWithImg';
import clsx from 'clsx';
import { ReactComponent as AppleLogo } from '../../assets/logo-apple.svg';
import { ReactComponent as GooglePlayLogo } from '../../assets/logo-google-play.svg';
import { useTheme } from '../../context/ThemeContext';
import { WhatWeOffer } from 'components/Blocks/WathWeOffer';
import FAQ from 'components/Blocks/FAQ';
import { motion } from 'framer-motion';


const Home: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const points = t('home.point', { returnObjects: true }) as { title: string; description: string }[];


  const contentBlockData: ContentBlockData = {
    image: theme === 'dark' ? imgCarBlack : imgCarWhite,
    imagePosition: 'right',
    columnRatio: '60-40',
    title: <h1>
      <Trans
        i18nKey="home.slogan"
        components={{ br: <br /> }}
      />
    </h1>,
    content: <p className="title-md">{t("home.install_app")}</p>,
    buttons: (
      <div className={styles.buttonGroup}>
        <Button className={styles.btn} onClick={() => console.log('Clicked!')}>
          <div className={styles.buttonContent}>
            <AppleLogo className={styles.logo} />
            <div className={styles.buttonTextColumn}>
              <p className="button-text-lg">
                {t('home.download_from')}
              </p>
              <p className="button-text-bold">
                {t('home.app_store')}
              </p>
            </div>
          </div>
        </Button>

        <Button className={styles.btn} onClick={() => console.log('Clicked!')}>
          <div className={styles.buttonContent}>
            <GooglePlayLogo className={styles.logo} />
            <div className={styles.buttonTextColumn}>
              <p className="button-text-lg">{t('home.download_from')}</p>
              <p className="button-text-bold">{t('home.google_play')}</p>
            </div>
          </div>
        </Button>
      </div>
    ),
    customStyles: {
      wrapper: styles.contentBlockDataWrapper,
      title: styles.contentBlockDataTitle,
      content: styles.contentBlockDataContent,
    }
  };


  const contentDriverData: ContentBlockData = {
    image: imgMan,
    imagePosition: 'left',
    columnRatio: '50-50',
    title: <h2>{t("home.driver_income")}</h2>,
    content:
      <div className={styles.grid}>
        {points.map((point, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.bullet}>•</span>
            <div className={styles.pointContant}>
              <p className='title-sm-bold'>{point.title}</p>
              <p className='body-md'>{point.description}</p>
            </div>
          </div>
        ))}
      </div>,
    buttons:
      <div className={styles.buttonGroup}>
        <Button className={styles.btn} onClick={() => console.log('Clicked!')}>
          <div className={styles.buttonContent}>
            <p className="button-text-bold">
              {t('home.become_partner')}
            </p>
          </div>
        </Button>
      </div>,
    customStyles: {
      wrapper: styles.contentDriverDataWrapper,
      title: styles.contentDriverDataTitle,
      content: styles.contentDriverDataContent,
    }
  };

  return (
    <>
      <div className={styles.contentBlockData}>
        <ContentBlock data={{ ...contentBlockData, animateOnMount: true }} />

      </div>
      <div className={styles.whatWeOffer}>
        <WhatWeOffer />
      </div>
      <div className={styles.peculiaritiesContainer}>
        <motion.div
          className={styles.peculiaritiesTitle}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3>{t('home.why_karma')}</h3>
        </motion.div>

        <motion.div
          className={clsx(styles.peculiarity, styles.peculiarity1)}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className={clsx('title-sm-bold', styles.mb)}>{t('home.comfort')}</p>
          <p className="body-text">{t('home.car_choice')}</p>
        </motion.div>

        <motion.div
          className={clsx(styles.peculiarity, styles.peculiarity2)}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ArrowRight className={styles.imgArrowRight} />
          <div>
            <p className={clsx('title-sm-bold', styles.mb)}>{t('home.speed')}</p>
            <p className="body-text">{t('home.fast_search')}</p>
          </div>
        </motion.div>

        <motion.div
          className={clsx(styles.peculiarity, styles.peculiarity3)}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ArrowRight className={styles.imgArrowRight} />
          <div>
            <p className={clsx('title-sm-bold', styles.mb)}>{t('home.economy')}</p>
            <p className="body-text">{t('home.price_control')}</p>
          </div>
        </motion.div>
      </div>
      <div className={styles.contentDriverData}>
        <ContentBlock data={contentDriverData} />
      </div>

      <div className={styles.faqsContainer}>
        <FAQ faqs={t("home.faqs", { returnObjects: true }) as FAQItem[]} />
      </div>
    </>
  );
};

export default Home;
