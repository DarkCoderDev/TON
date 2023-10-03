import React from 'react';
import { shallow } from 'zustand/shallow';
import { useIntersection, useDebounce } from 'shared/lib/hooks';
import { useTransactionStore } from 'entities/Transaction/model';
import { Transaction } from 'entities/Transaction';
import { FeedSkeleton } from './skeleton';
import { Loader } from 'shared/ui';
import styles from './TransactionFeed.module.css';

export const TransactionFeed = () => {
  const [transactions, fetchTransactions, clearTransactions] = useTransactionStore(
    (state) => [state.transactions, state.fetchTransactions, state.clearTransactions],
    shallow
  );
  const debouncedFetchTransaction = useDebounce(fetchTransactions, 1000);
  const [isLoading, isFirstLoading] = useTransactionStore(
    (state) => [state.isLoading, state.isFirstLoading],
    shallow
  );
  const errorMessage = useTransactionStore((state) => state.error),
    isError = Boolean(errorMessage);
  const { $observable } = useIntersection(debouncedFetchTransaction);

  React.useEffect(() => () => clearTransactions(), []);

  if (isError) {
    throw new Error(errorMessage!);
  }

  return (
    <div className={styles.feed}>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction.key} />
      ))}
      <Loader visible={isLoading} />
      <span hidden={isError || isLoading} ref={$observable} />
      <FeedSkeleton visible={isFirstLoading} />
    </div>
  );
};
