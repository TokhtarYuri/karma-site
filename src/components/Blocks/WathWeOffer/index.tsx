import React from 'react';
import styles from './WhatWeOffer.module.scss';
import imgCar from '../../../assets/car-offer.png';
import imgDog from '../../../assets/dog-offer.png';
import imgBox from '../../../assets/box-offer.png';
import imgWoman from '../../../assets/woman-offer.png';
import { useTranslation } from 'react-i18next';


export const WhatWeOffer: React.FC = () => {
    const { t } = useTranslation();
    const cards = [
        {
            text: t("home.car_class"),
            image: imgCar,
            style: styles.card1,
        },
        {
            text: t("home.pet_transport"),
            image: imgDog,
            style: styles.card2,
        },
        {
            text: t("home.item_delivery"),
            image: imgBox,
            style: styles.card3,
        },
        {
            text: t("home.safety_trip"),
            image: imgWoman,
            style: styles.card4,
        },
    ];
    return (
        <section className={styles.wrapper}>
            <h2>{t("home.what_we_offer")}</h2>
            <div className={styles.grid}>
                <div className={styles.row1}>
                    <div className={`${styles.card} ${styles.card1}`}>
                        <img src={imgCar} alt="Car Class" className={styles.image} />
                        <p className={styles.text}>{t("home.car_class")}</p>
                    </div>
                    <div className={`${styles.card} ${styles.card2}`}>
                        <img src={imgDog} alt="Pet Transport" className={styles.image} />
                        <p className={styles.text}>{t("home.pet_transport")}</p>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={`${styles.card} ${styles.card3}`}>
                        <img src={imgBox} alt="Item Delivery" className={styles.image} />
                        <p className={styles.text}>{t("home.item_delivery")}</p>
                    </div>
                    <div className={`${styles.card} ${styles.card4}`}>
                        <img src={imgWoman} alt="Safety Trip" className={styles.image} />
                        <p className={styles.text}>{t("home.safety_trip")}</p>
                    </div>
                </div>
            </div>

        </section>
    );
};
