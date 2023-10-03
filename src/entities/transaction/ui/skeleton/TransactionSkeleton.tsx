import { Skeleton } from 'shared/ui';
import styles from './TransactionSkeleton.module.css';

export const TransactionSkeleton = () => {
  return (
    <article className={styles.skeleton}>
      <Skeleton.Img />

      <div className={styles.content}>
        <section className={styles.section}>
          <Skeleton.Text />
          <Skeleton.Text />
        </section>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <Skeleton.Text />
          <Skeleton.Text />
        </section>
      </div>
    </article>
  );
};
