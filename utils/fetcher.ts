import axios, { AxiosRequestConfig } from 'axios';


const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
};

const axiosInstance = axios.create(config);


export const get = <T>(url: string, options?: AxiosRequestConfig) =>
  axiosInstance
    .get<T>(url)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response?.data ?? error;
    });

export const post = <T>(
  url: string,
  body?: Record<string, unknown> | unknown[] | FormData,
  options?: AxiosRequestConfig,
) =>
  axiosInstance
    .post<T>(url, body)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response?.data ?? error;
    });
