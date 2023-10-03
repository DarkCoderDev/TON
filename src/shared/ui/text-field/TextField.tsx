import React from 'react';
import styles from './TextField.module.css';

export const TextField = (props: {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}) => {
  const { placeholder, handleChange, value } = props;

  return (
    <input
      {...props}
      type="text"
      className={styles.textField}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};
