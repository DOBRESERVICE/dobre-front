import { AuthResponse, RegisterData } from '@/interfaces';
import { defaultRequest } from '@/api/axios/instances';

export const registerUser = async (email: string, password: string) => {
  return await defaultRequest.post<RegisterData, AuthResponse>('/auth/register', {
    email,
    password,
  });
};
export const loginUser = async (email: string, password: string) => {
  return await defaultRequest.post<RegisterData, AuthResponse>('/auth/login', {
    email,
    password,
  });
};
