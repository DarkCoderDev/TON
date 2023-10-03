import type { ApiResponse } from 'shared/types/api-response';
import type { Transaction } from 'entities/transaction/types/transaction';

export interface TransactionApi {
  getTransactions(
    params: GetTransactionsReqParams
  ): ApiResponse<TransactionResponse<Transaction[]>>;
}

export interface TransactionResponse<T> {
  ok: boolean;
  result: T;
}

export interface GetTransactionsReqParams {
  address: string;
  limit: number;
  lt?: string;
  hash?: string;
}
