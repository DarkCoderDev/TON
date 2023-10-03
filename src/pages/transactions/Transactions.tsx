import { AddTransactionMsg } from 'features/transaction/add-message';
import { TransactionFeed } from 'features/transaction/feed';
import styles from './Transactions.module.css';

export default function TransactionPage() {
  return (
    <section className={styles.page}>
      <AddTransactionMsg />
      <TransactionFeed />
    </section>
  );
}
