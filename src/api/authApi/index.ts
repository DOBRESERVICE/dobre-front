import { AuthResponse, RequestData } from '@/interfaces';
import { authRequest } from '@/api/axios/instances';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '@/constants/urls';

export const registerUser = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
  return authRequest.post('/auth/register', {
    email,
    password,
  });
};
export const loginUser = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
  return authRequest.post('/auth/login', {
    email,
    password,
  });
};

export const checkUser = async (email: string) => {
  return axios.post(BASE_URL + '/auth/check-user', {
    email,
  });
};
