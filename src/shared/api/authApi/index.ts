import { AuthResponse } from '@/interfaces';
import { defaultRequest, tokenRequest } from '@/shared/api/axios/instances';
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

export const sendEmailOnRecovery = async (email: string) => {
  return defaultRequest.get(`/auth/restore-email/${email}`);
};

export const recoveryPassword = async (token: string, password: string) => {
  return defaultRequest.post('/auth/restore-email', {
    token,
    password,
  });
};

export const confirmEmail = async (token: string) => {
  return defaultRequest.get(`/auth/confirm-email/${token}`);
};
