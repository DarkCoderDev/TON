import type { Transaction } from 'entities/Transaction/types/transaction';

export const getSourceInfo = (transaction: Transaction) => {
  const sourceInfo = {
    message: '',
    fromAddress: '',
    toAddress: '',
  };

  if (transaction.in_msg.source) {
    const {
      in_msg: { source, destination, message },
    } = transaction;

    sourceInfo.message = message;
    sourceInfo.toAddress = destination;
    sourceInfo.fromAddress = source;
  }

  if (transaction.out_msgs.length) {
    const {
      out_msgs: [{ source, destination, message }],
    } = transaction;

    sourceInfo.message = message;
    sourceInfo.toAddress = destination;
    sourceInfo.fromAddress = source;
  }

  return sourceInfo;
};

export const generateKey = (hash: string) => `${hash}_${new Date().getTime()}`;
