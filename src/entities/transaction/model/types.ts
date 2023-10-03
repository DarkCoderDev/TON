import type { DisplayedTransaction, Transaction } from '../types/transaction';

export interface TransactionStore {
  isLoading: boolean;

  isFirstLoading: boolean;

  error: null | string;

  message: string;
  setMessage(message: string): void;

  modal: boolean;
  setModal(predicate: boolean): void;

  transaction: DisplayedTransaction | null;
  setTransaction(transaction: DisplayedTransaction | null): void;

  transactions: DisplayedTransaction[];
  fetchTransactions(): void;
  clearTransactions(): void;
}

export interface TransactionAdapter {
  toDisplay(transactions: Transaction[]): DisplayedTransaction[];
}
