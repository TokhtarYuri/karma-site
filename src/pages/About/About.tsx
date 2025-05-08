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

const About: React.FC = () => {
  const { t } = useTranslation();

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
      <Button onClick={() => console.log('Clicked!')}>
        <div className={styles.buttonContent}>
          <p className="button-text-md">
            {t('about.join_button')}
          </p>
        </div>
      </Button>
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
        <h2>
          <Trans
            i18nKey="about.main_slogan"
            components={{ br: <br /> }}
          />
        </h2>
        <div className={styles.tripImg}
          style={{ backgroundImage: `url(${woman3})` }}>
        </div>
      </div>

      <div className={styles.informationBlock}>
        <h2>
          <Trans
            i18nKey="about.company_info_title"
            components={{ br: <br /> }}
          />
        </h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src={woman4} alt="Engine Karma" className={styles.image} />
            <p className={styles.title}>{t('about.karma_engine_title')}</p>
            <p className="body-md">
              {t('about.karma_engine_description')}
            </p>
          </div>
          <div className={styles.card}>
            <img src={man1} alt="Inclusive Harmony" className={styles.image} />
            <p className={styles.title}>{t('about.inclusive_harmony_title')}</p>
            <p className="body-md">
              {t('about.inclusive_harmony_description')}
            </p>
          </div>
          <div className={styles.card}>
            <img src={woman5} alt="Daily Movement" className={styles.image} />
            <p className={styles.title}>{t('about.daily_motion_title')}</p>
            <p className="body-md">
              {t('about.daily_motion_description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
