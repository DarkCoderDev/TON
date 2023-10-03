declare module 'ethjs-unit' {
  import BigNumber from 'bn.js';

  export function fromWei(value: BigNumber, unit: string): string;

  export function toWei(value: BigNumber, unit: string): string;
}
