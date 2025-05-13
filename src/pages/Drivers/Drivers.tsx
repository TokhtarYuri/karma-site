import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import drivers from '../../assets/drivers.png';
import driversApp from '../../assets/drivers-app.png';
import blueCar from '../../assets/blue-car.png';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

import { ReactComponent as BigLogo } from '../../assets/big-logo.svg';

import BackgroundSection from 'components/Blocks/BackgroundSection';
import styles from './Drivers.module.scss';
import type { ContentBlockData } from './ContentBlockWithImg';
import { Button } from 'components/ui/Button';
import clsx from 'clsx';
import { ContentBlock } from 'components/Blocks/ContentBlockWithImg';
import FeatureIconsBlock from 'components/Blocks/FeatureIconsBlock';
import FAQ from 'components/Blocks/FAQ';
import { motion } from 'framer-motion';

const Drivers: React.FC = () => {
  const { t } = useTranslation();
  // Анимация для контейнера (задержка между детьми)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Анимация для одного элемента
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const featureItems = [
    {
      icon: "🥹",
      title: <Trans
        i18nKey="drivers.features.flexible_schedule"
        components={{ br: <br /> }}
      />,
    },
    {
      icon: "🌟",
      title:
        <Trans
          i18nKey="drivers.features.regular_orders"
          components={{ br: <br /> }}
        />,
    },
    {
      icon: "💪",
      title: <Trans
        i18nKey="drivers.features.stable_income"
        components={{ br: <br /> }}
      />,
    },
  ];


  const contentAppBlockData: ContentBlockData = {
    image: driversApp,
    imagePosition: 'left',
    columnRatio: '50-50',
    title: <h2>
      <Trans
        i18nKey="drivers.subtitle"
        components={{ br: <br /> }}
      />
    </h2>,
    content: <>
      <p className={clsx('body-md', styles.contentApp)}>{t("drivers.description")}</p>
      <ul className={styles.advantagesList}>
        {t("drivers.advantages_of_the_application", { returnObjects: true }).map((item: string, index: number) => (
          <li key={index} className={clsx('title-sm-bold', styles.advantageItem)}>
            {item}
          </li>
        ))}
      </ul>
    </>,
    buttons: (
      <div className={styles.buttonGroup}>
        <Button onClick={() => console.log('Clicked!')}>
          <div className={styles.buttonContent}>
            <p className="button-text-md">
              {t('drivers.cta_button')}
            </p>
          </div>
        </Button>
      </div>
    ),
    customStyles: {
      content: styles.contentAppBlockDataContent,
    }
  };

  return (
    <div className={styles.driversContainer}>
      <div className={styles.driversMainImg}>
        <BackgroundSection
          backgroundImage={drivers}
          title={
            <Trans
              i18nKey="drivers.title"
              components={{ br: <br /> }}
            />}
        />
      </div>
      <div className={styles.contentAppBlockData}>
        <ContentBlock data={contentAppBlockData} />
      </div>
      <div className={styles.featureIconsBlock}>
        <FeatureIconsBlock items={featureItems} />
      </div>
      <motion.div
        className={styles.stepsBlock}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>{t('drivers.steps_title')}</h2>

        <motion.div
          className={styles.peculiaritiesContainer}
          variants={containerVariants}
        >
          <motion.div
            className={clsx(styles.peculiarity, styles.peculiarity1)}
            variants={itemVariants}
          >
            <p className={clsx('subtitle-md', styles.mb)}>
              <Trans i18nKey="drivers.steps.download_app" components={{ br: <br /> }} />
            </p>
          </motion.div>

          <motion.div
            className={clsx(styles.peculiarity, styles.peculiarity2)}
            variants={itemVariants}
          >
            <ArrowRight className={styles.imgArrowRight} />
            <div>
              <p className={clsx('subtitle-md', styles.mb)}>
                <Trans i18nKey="drivers.steps.add_vehicle" components={{ br: <br /> }} />
              </p>
            </div>
          </motion.div>

          <motion.div
            className={clsx(styles.peculiarity, styles.peculiarity3)}
            variants={itemVariants}
          >
            <ArrowRight className={styles.imgArrowRight} />
            <div>
              <p className={clsx('subtitle-md', styles.mb)}>
                <Trans i18nKey="drivers.steps.register" components={{ br: <br /> }} />
              </p>
            </div>
          </motion.div>

          <motion.div
            className={clsx(styles.peculiarity, styles.peculiarity3)}
            variants={itemVariants}
          >
            <ArrowRight className={styles.imgArrowRight} />
            <div>
              <p className={clsx('subtitle-md', styles.mb)}>
                <Trans i18nKey="drivers.steps.accept_orders" components={{ br: <br /> }} />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
<div className={styles.blueCarContainer}>
      <motion.div
        className={styles.bigLogoContainer}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <BigLogo className={styles.bigLogo} />
      </motion.div>

      <motion.div
        className={styles.blueCar}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src={blueCar} alt="blue car" className={styles.blueCarImage} />
      </motion.div>
    </div>
      <div className={styles.faqsContainer}>
        <FAQ faqs={t("drivers.faqs", { returnObjects: true }) as FAQItem[]} />
      </div>
    </div>);
};

export default Drivers;
