import React from 'react';
import styles from './WhatWeOffer.module.scss';
import imgCar from '../../../assets/car-offer.png';
import imgDog from '../../../assets/dog-offer.png';
import imgBox from '../../../assets/box-offer.png';
import imgWoman from '../../../assets/woman-offer.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const WhatWeOffer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      <motion.h2
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t("home.what_we_offer")}
      </motion.h2>

      <div className={styles.grid}>
        <div className={styles.row1}>
          <motion.div
            className={`${styles.card} ${styles.card1}`}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={imgCar} alt="Car Class" className={styles.image} />
            <p className={styles.text}>{t("home.car_class")}</p>
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.card2}`}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={imgDog} alt="Pet Transport" className={styles.image} />
            <p className={styles.text}>{t("home.pet_transport")}</p>
          </motion.div>
        </div>

        <div className={styles.row2}>
          <motion.div
            className={`${styles.card} ${styles.card3}`}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={imgBox} alt="Item Delivery" className={styles.image} />
            <p className={styles.text}>{t("home.item_delivery")}</p>
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.card4}`}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={imgWoman} alt="Safety Trip" className={styles.image} />
            <p className={styles.text}>{t("home.safety_trip")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
