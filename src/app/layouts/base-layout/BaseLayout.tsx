import React from 'react';
import styles from './BaseLayout.module.css';

export const BaseLayout = (props: { header: React.ReactNode; content: React.ReactNode }) => {
  const { content, header } = props;

  return (
    <div className={styles.layout}>
      <header className={styles.header}>{header}</header>

      <main className={styles.main}>{content}</main>
    </div>
  );
};
