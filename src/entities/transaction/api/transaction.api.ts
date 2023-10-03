import { Api } from 'shared/api';
import { requestConfig } from 'entities/Transaction/config/request.config';
import type { AxiosRequestConfig } from 'axios';
import type {
  GetTransactionsReqParams,
  TransactionApi,
  TransactionResponse,
} from './interfaces';
import type { Transaction } from 'entities/transaction/types/transaction';

class TransactionApiV2 extends Api implements TransactionApi {
  getTransactions = async (params: GetTransactionsReqParams) =>
    this.http.get<TransactionResponse<Transaction[]>>('/getTransactions', { params });

  constructor(config: AxiosRequestConfig) {
    super(config);
  }
}

export const transactionApi = new TransactionApiV2(requestConfig);
