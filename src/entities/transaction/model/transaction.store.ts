import { create } from 'zustand';
import { isAxiosError } from 'axios';
import { REQUEST_PARAMS } from 'entities/Transaction/consts';
import { transactionAdapter } from 'entities/Transaction/model/transaction.adapter';
import { transactionApi } from 'entities/Transaction/api';
import type { DisplayedTransaction } from 'entities/Transaction/types/transaction';
import type { TransactionStore } from './types';

export const useTransactionStore = create<TransactionStore>((set, get) => ({
  isFirstLoading: true,
  isLoading: false,
  error: null,

  modal: false,
  setModal: (predicate) => set({ modal: predicate }),

  message: '',
  setMessage: (message) => set({ message }),

  transaction: null,
  setTransaction: (transaction) => set({ transaction }),

  transactions: [],
  fetchTransactions: async () => {
    const { transactions, isFirstLoading } = get();
    try {
      if (transactions.length) {
        set({ isLoading: true });
        const lastTransaction = transactions.at(-1) as DisplayedTransaction;
        REQUEST_PARAMS.lt = lastTransaction.lt;
        REQUEST_PARAMS.hash = lastTransaction.hash;
      }

      const response = await transactionApi.getTransactions(REQUEST_PARAMS);

      const adaptedTransactions = transactionAdapter.toDisplay(response.data.result);

      set((prev) => ({ transactions: prev.transactions.concat(adaptedTransactions) }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        set({ error: e.message });
      }
      if (isAxiosError(e)) {
        set({ error: e.response!.data.error });
      }
    } finally {
      if (isFirstLoading) {
        set({ isFirstLoading: false });
      }
      set({ isLoading: false });
    }
  },
  clearTransactions: () => {
    set({ transactions: [] });
    set({ isFirstLoading: true });
    delete REQUEST_PARAMS.lt;
    delete REQUEST_PARAMS.hash;
  },
}));
