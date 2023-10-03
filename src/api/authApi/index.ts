import axios from 'axios';
import { loginUrl, registerUrl } from '@/constants/urls';
import { AuthResponse, RegisterData } from '@/interfaces';

export const registerUser = async (email: string, password: string) => {
  return await axios.post<RegisterData, AuthResponse>(registerUrl, {
    email,
    password,
  });
};
export const loginUser = async (email: string, password: string) => {
  return await axios.post<RegisterData, AuthResponse>(loginUrl, {
    email,
    password,
  });
};
