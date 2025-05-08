import React from 'react';
import styles from './ContentBlockWithImg.module.scss';
import clsx from 'clsx';

type ColumnRatio = '30-70' | '40-60' | '50-50' | '60-40' | '70-30';

interface ContentBlockData {
  image: string;
  imagePosition?: 'left' | 'right';
  columnRatio?: ColumnRatio;
  title?: React.ReactNode;
  content?: React.ReactNode;
  buttons?: React.ReactNode;
  className?: string;
  customStyles?: {
    wrapper?: string;
    imageColumn?: string;
    contentColumn?: string;
    title?: string;
    content?: string;
    buttons?: string;
  };
}

interface ContentBlockProps {
  data: ContentBlockData;
}
export const ContentBlock: React.FC<ContentBlockProps> = ({ data }) => {
  const {
    image,
    imagePosition = 'left',
    columnRatio = '50-50',
    title,
    content,
    buttons,
    className,
    customStyles = {},
  } = data;

  const [leftRatio, rightRatio] = columnRatio.split('-');
  const isImageLeft = imagePosition === 'left';

  return (
    <div
      className={clsx(
        styles.contentBlock,
        isImageLeft ? styles.imageLeft : styles.imageRight,
        className,
        customStyles.wrapper
      )}
    >
      <div
        className={clsx(styles.imageColumn, customStyles.imageColumn)}
        style={{ flex: leftRatio }}
      >
        <img src={image} alt="Content Block" className={styles.image} />
      </div>

      <div
        className={clsx(styles.contentColumn, customStyles.contentColumn)}
        style={{ flex: rightRatio }}
      >
        {title && <div className={clsx(styles.title, customStyles.title)}>{title}</div>}
        {content && <div className={clsx(styles.content, customStyles.content)}>{content}</div>}
        {buttons && <div className={clsx(styles.buttons, customStyles.buttons)}>{buttons}</div>}
      </div>
    </div>
  );
};
