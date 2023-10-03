import type { AxiosResponse } from 'axios';

export type ApiResponse<T> = Promise<AxiosResponse<T>>;
