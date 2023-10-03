import cn from 'classnames';
import { shallow } from 'zustand/shallow';
import { useTranslation } from 'react-i18next';
import { useTransactionStore } from 'entities/transaction/model';
import { StatusIcon } from 'entities/transaction/ui';
import type { DisplayedTransaction } from 'entities/transaction/types/transaction';
import styles from './Transaction.module.css';

export const Transaction = (props: { transaction: DisplayedTransaction }) => {
  const { transaction } = props;
  const transactionMsg = localStorage.getItem(transaction.hash) || transaction.message;
  const { t } = useTranslation();
  const [setTransaction, setModal, setMessage] = useTransactionStore(
    (state) => [state.setTransaction, state.setModal, state.setMessage],
    shallow
  );

  const handleClick = () => {
    setTransaction(transaction);
    setMessage(transaction.message);
    setModal(true);
  };

  return (
    <article className={styles.transaction} onClick={handleClick}>
      <StatusIcon isReceived={transaction.isReceived} />

      <div className={styles.content}>
        <section className={styles.section}>
          <h4 className={styles.field}>{t(transaction.status)}</h4>
          <span className={cn(styles.value, { [styles.textGreen]: transaction.isReceived })}>
            {transaction.amount} TON
          </span>
        </section>

        <section className={styles.section}>
          <span className={styles.field}>{transaction.address}</span>
          <span className={styles.field}>{transaction.time}</span>
        </section>

        {transactionMsg && <p className={styles.msg}>{transactionMsg}</p>}
      </div>
    </article>
  );
};
