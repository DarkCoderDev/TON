import { useTranslation } from 'react-i18next';
import styles from './Welcome.module.css';

export default function WelcomePage() {
  const { t } = useTranslation();

  return (
    <section className={styles.welcomePage}>
      <h2 className={styles.welcomeHeading}>{t('WelcomeHeading')} 💎</h2>
    </section>
  );
}
