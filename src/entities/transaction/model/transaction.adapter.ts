import BigNumber from 'bn.js';
import utils from 'ethjs-unit';
import { Blockchain } from 'shared/lib/utils/blockchain';
import { toTime } from 'shared/lib/format/toTime';
import { TRANSACTION_STATUS } from 'entities/Transaction/consts';
import { generateKey, getSourceInfo } from 'entities/Transaction/lib';
import type {
  DisplayedTransaction,
  Transaction,
} from 'entities/Transaction/types/transaction';
import type { TransactionAdapter } from './types';

export class TransactionAdapterV2 implements TransactionAdapter {
  public toDisplay(transactions: Transaction[]): DisplayedTransaction[] {
    const adaptedTransactions: DisplayedTransaction[] = [];

    for (const transaction of transactions) {
      const sourceInfo = getSourceInfo(transaction);
      const amount = transaction.out_msgs.reduce(
        (sum, outMsg) => sum.sub(new BigNumber(outMsg.value)),
        new BigNumber(transaction.in_msg.value)
      );
      const isReceived = !amount.isNeg();
      const hash = Blockchain.hashToHex(transaction.transaction_id.hash);
      const amountFormatted = utils.fromWei(amount, Blockchain.UNIT);

      const adaptedTransaction: DisplayedTransaction = {
        hash,
        isReceived,
        key: generateKey(hash),
        message: sourceInfo.message,
        status: isReceived ? TRANSACTION_STATUS.Received : TRANSACTION_STATUS.Sent,
        lt: transaction.transaction_id.lt,
        amount: isReceived ? `+ ${amountFormatted}` : amountFormatted,
        address: isReceived ? sourceInfo.fromAddress : sourceInfo.toAddress,
        time: toTime(new Date(transaction.utime * 1000)),
        fee: transaction.fee,
      };

      adaptedTransactions.push(adaptedTransaction);
    }

    return adaptedTransactions;
  }
}

export const transactionAdapter = new TransactionAdapterV2();
