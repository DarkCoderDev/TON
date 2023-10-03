import { TON } from 'shared/consts/ton';
import type { GetTransactionsReqParams } from 'entities/Transaction/api';

export const REQUEST_PARAMS: GetTransactionsReqParams = { address: TON.address, limit: 15 };
