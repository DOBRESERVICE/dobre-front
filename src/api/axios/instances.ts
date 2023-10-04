import axios from 'axios';
import { BASE_URL } from '@/constants/urls';

export const defaultRequest = axios.create({
  baseURL: `${BASE_URL}`,
});
