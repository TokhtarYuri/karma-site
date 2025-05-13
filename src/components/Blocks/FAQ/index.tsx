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

// Анимация контейнера — задает задержку между элементами
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

// Анимация одного элемента (тайтла и вопроса)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FAQ = ({ faqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className={styles.faqSection}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2 className={styles.title} variants={itemVariants}>
        {t("home.faq")}
      </motion.h2>

      <motion.div className={styles.faqList} variants={containerVariants}>
        {faqs.map((faq, index) => (
          <motion.div key={index} className={styles.faqItem} variants={itemVariants}>
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
                  initial={{ opacity: 0, y: 30, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 30, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.answerWrapper}
                >
                  <div className={clsx('body-md', styles.answer)}>{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

  );
};

export default FAQ;
