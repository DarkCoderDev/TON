export interface Msg {
  '@type': string;
  'source': string;
  'destination': string;
  'value': string;
  'fwd_fee': string;
  'ihr_fee': string;
  'created_lt': string;
  'body_hash': string;
  'msg_data': {
    '@type': string;
    'body': string;
    'text': string;
    'init_state': string;
  };
  'message': string;
}

export interface Transaction {
  '@type': string;
  'utime': number;
  'data': string;
  'transaction_id': {
    '@type': string;
    'lt': string;
    'hash': string;
  };
  'fee': string;
  'storage_fee': string;
  'other_fee': string;
  'in_msg': Msg;
  'out_msgs': Msg[];
}

export interface DisplayedTransaction {
  key: string;
  isReceived: boolean;
  address: string;
  fee: string;
  hash: string;
  amount: string;
  lt: string;
  time: string;
  message: string;
  status: string;
}
