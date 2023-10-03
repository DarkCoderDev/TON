import React from 'react';
import styles from './Textarea.module.css';

export const TextArea = (props: {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  maxlength?: number;
  placeholder?: string;
  rows?: number;
  [props: string]: unknown;
}) => {
  const {
    value,
    onChange,
    rows = 10,
    maxlength = 200,
    required = false,
    placeholder = '',
  } = props;

  return (
    <textarea
      {...props}
      rows={rows}
      value={value}
      onChange={onChange}
      required={required}
      maxLength={maxlength}
      placeholder={placeholder}
      className={styles.textArea}
    />
  );
};
