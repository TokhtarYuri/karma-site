import { ContentBlock } from 'components/Blocks/ContentBlockWithImg';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styles from './Passengers.module.scss';
import type { ContentBlockData } from './ContentBlockWithImg';
import imgCarWhite from '../../assets/car-white.png';
import backgroundImg from '../../assets/passengers-main.png';
import iPhone14 from '../../assets/iPhone-14.png';
import intercity from '../../assets/intercity.png';
import delivery from '../../assets/delivery.png';

import { Button } from 'components/ui/Button';
import { ReactComponent as AppleLogo } from '../../assets/logo-apple.svg';
import BackgroundSection from 'components/Blocks/BackgroundSection';
import FeatureIconsBlock from 'components/Blocks/FeatureIconsBlock';
import { ReactComponent as TaxiIcon } from '../../assets/taxi.svg';
import { ReactComponent as MoneyIcon } from '../../assets/money.svg';
import { ReactComponent as SafetyIcon } from '../../assets/safety.svg';
import { ReactComponent as BonusCar } from '../../assets/bonus-car.svg';
import clsx from 'clsx';
import FAQ from 'components/Blocks/FAQ';
import { motion } from 'framer-motion';


const Passengers: React.FC = () => {
  const { t } = useTranslation();

  const featureItems = [
    {
      icon: "🚕",
      title: <Trans
        i18nKey="passenger.fast_pickup"
        components={{ br: <br /> }}
      />,
    },
    {
      icon: "🤑",
      title:
        <Trans
          i18nKey="passenger.cheap_trip"
          components={{ br: <br /> }}
        />,
    },
    {
      icon: "👌",
      title: <Trans
        i18nKey="passenger.safe_trip"
        components={{ br: <br /> }}
      />,
    },
  ];


  const contentAppBlockData: ContentBlockData = {
    image: iPhone14,
    imagePosition: 'right',
    columnRatio: '55-45',
    title: <h2>
      <Trans
        i18nKey="passenger.app"
        components={{ br: <br /> }}
      />
    </h2>,
    content: <p className={clsx('body-md', styles.contentApp)}>{t("passenger.app_description")}</p>,
    buttons: (
      <div className={styles.buttonGroup}>
        <Button className={styles.btn} onClick={() => console.log('Clicked!')}>
          <div className={styles.buttonContent}>
            <p className="button-text-md">
              {t('passenger.download_app')}
            </p>
          </div>
        </Button>
      </div>
    )
  };


  const intercityBlockData: ContentBlockData = {
    image: intercity,
    imagePosition: 'left',
    columnRatio: '55-45',
    title: <h2>
      <Trans
        i18nKey="passenger.intercity"
        components={{ br: <br /> }}
      />
    </h2>,
    content: <p className={clsx('body-md', styles.contentApp)}>{t("passenger.intercity.description")}</p>,
  };

  const deliveryBlockData: ContentBlockData = {
    image: delivery,
    imagePosition: 'right',
    columnRatio: '45-55',
    title: <h2>
      <Trans
        i18nKey="passenger.delivery"
        components={{ br: <br /> }}
      />
    </h2>,
    content: <p className={clsx('body-md', styles.contentApp)}>{t("passenger.delivery.description")}</p>,
  };


  return (<>
    <div className={styles.passengers}>
      <div className={styles.passengersMainImg}>
        <BackgroundSection
          backgroundImage={backgroundImg}
          title={
            <Trans
              i18nKey="passenger.title"
              components={{ br: <br /> }}
            />}
        />
      </div>
      <div className={styles.featureIconsBlock}>
        <FeatureIconsBlock items={featureItems} />
      </div>
      <div className={styles.contentAppBlockData}>
        <ContentBlock data={contentAppBlockData} />
      </div>

      <div className={styles.bonusContainer}>
        <motion.p
          className="headline-bold"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Trans
            i18nKey="passenger.bonus"
            components={{ br: <br /> }}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <BonusCar />
        </motion.div>
      </div>

      <div className={styles.intercityBlockData}>
        <ContentBlock data={intercityBlockData} />
      </div>
      <div className={styles.deliveryBlockData}>
        <ContentBlock data={deliveryBlockData} />
      </div>
      <div className={styles.faqsContainer}>
        <FAQ faqs={t("passenger.faqs", { returnObjects: true }) as FAQItem[]} />
      </div>
    </div>
  </>);
};

export default Passengers;
