import React from 'react';
import { shallow } from 'zustand/shallow';
import { useTranslation } from 'react-i18next';
import { useTransactionStore } from 'entities/Transaction';
import { Modal, TextArea, Button } from 'shared/ui';
import styles from './AddTransactionMsg.module.css';

export const AddTransactionMsg = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useTransactionStore(
    (state) => [state.message, state.setMessage],
    shallow
  );
  const [modal, setModal] = useTransactionStore(
    (state) => [state.modal, state.setModal],
    shallow
  );
  const [transaction, setTransaction] = useTransactionStore(
    (state) => [state.transaction, state.setTransaction],
    shallow
  );

  const reset = () => {
    setMessage('');
    setTransaction(null);
    setModal(false);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (transaction) {
      localStorage.setItem(transaction.hash, message);
    }
    reset();
  };

  const handleCloseModal = () => {
    if (modal) {
      reset();
    }
  };

  const handleAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Modal isOpen={modal} handleClose={handleCloseModal}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <h2 className={styles.title} id="dialog_label">
          {t('MessageText')}:
        </h2>
        <TextArea id="dialog_desc" required onChange={handleAreaChange} value={message} />
        <Button type="submit">{t('Save')}</Button>
      </form>
    </Modal>
  );
};
