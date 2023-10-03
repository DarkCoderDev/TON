import { TON } from 'shared/consts/ton';
import type { AxiosRequestConfig } from 'axios';

export const requestConfig: AxiosRequestConfig = {
  baseURL: TON.api,
};
