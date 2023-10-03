import { useRouteError } from 'react-router-dom';
import { ErrorMessage } from 'shared/ui';
import styles from './Error.module.css';

export default function ErrorPage() {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <section className={styles.ErrorPage}>
        <ErrorMessage>{error.message}</ErrorMessage>
      </section>
    );
  }

  return (
    <section className={styles.error}>
      <ErrorMessage>unknown error.</ErrorMessage>
    </section>
  );
}
