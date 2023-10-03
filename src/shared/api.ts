import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

export class Api {
  protected readonly http: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.http = axios.create(config);
  }
}
