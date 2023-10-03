import type { PropsWithChildren } from 'react';
import styles from './ErrorText.module.css';

export const ErrorMessage = (props: PropsWithChildren) => {
  const { children } = props;

  return <h2 className={styles.errorText}>{children}</h2>;
};
