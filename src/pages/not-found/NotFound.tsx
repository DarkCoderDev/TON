import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.css';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className={styles.notFoundPage}>
      <h2 className={styles.heading}>{t('NotFoundHeading')}.</h2>
    </section>
  );
}
