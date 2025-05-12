import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './FAQ.module.scss';
import { Plus, Minus } from 'lucide-react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
};

const FAQ = ({ faqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>{t("home.faq")}</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.questionRow} onClick={() => toggle(index)}>
              <span className={clsx('title-lg', styles.question)}>{faq.question}</span>
              <span className={styles.icon}>
                {openIndex === index ? (
                  <Minus className={styles.iconSvg} stroke="var(--text-color)" />
                ) : (
                  <Plus className={styles.iconSvg} stroke="var(--text-color)" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.answerWrapper}
                >
                  <div className={clsx('body-md', styles.answer)}>{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
