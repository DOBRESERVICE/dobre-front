import axios from 'axios';
import { BASE_URL } from '@/constants/urls';

export const tokenRequest = axios.create({
  withCredentials: true,
  baseURL: `${BASE_URL}`,
});
export const defaultRequest = axios.create({
  baseURL: `${BASE_URL}`,
});

tokenRequest.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
