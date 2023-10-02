import axios from 'axios';
import { loginUrl, registerUrl } from '@/constants/urls';

export const registerUser = async (email: string, password: string) => {
  return await axios.post(registerUrl, {
    email,
    password,
  });
};
export const loginUser = async (email: string, password: string) => {
  return await axios.post(loginUrl, {
    email,
    password,
  });
};
