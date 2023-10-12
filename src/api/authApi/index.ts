import { AuthResponse } from '@/interfaces';
import { defaultRequest } from '@/api/axios/instances';
import { AxiosResponse } from 'axios';

export const registerUser = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
  return defaultRequest.post('/auth/register', {
    email,
    password,
  });
};
export const loginUser = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
  return defaultRequest.post('/auth/login', {
    email,
    password,
  });
};

export const checkUser = async (email: string) => {
  return defaultRequest.post('/auth/check-user', {
    email,
  });
};
