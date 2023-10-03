import React from 'react';
import styles from './Button.module.css';

export const Button = (
  props: React.PropsWithChildren<{
    type?: 'submit' | 'button';
    handleClick?: () => void;
    isDisabled?: boolean;
  }>
) => {
  const { children, isDisabled = false, handleClick, type = 'button' } = props;

  return (
    <button
      {...props}
      disabled={isDisabled}
      type={type}
      className={styles.button}
      onClick={handleClick}>
      {children}
    </button>
  );
};
