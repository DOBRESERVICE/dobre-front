export interface RentInfoData {
  id: number;
  timeInRent: string;
  price: string;
}

export interface ResponseData {
  user: User;
  authToken: string;
}

export interface AuthResponse {
  data: ResponseData;
  status: number;
}
export interface RegisterData {
  email: string;
  password: string;
}
export interface User {
  role: string;
  id: string;
  email: string;
  password: string;
  is_activated: boolean;
  updatedAt: string;
  createdAt: string;
  deletedAt: any;
}
