import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@/constants/urls';

export const authRequest = axios.create({
  withCredentials: true,
  baseURL: `${BASE_URL}`,
});

authRequest.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
