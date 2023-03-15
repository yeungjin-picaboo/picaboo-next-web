import { IsAccount } from '@/src/types/data.interface';
import { request } from '@/src/utils/request';

export const signupFn = async (data: IsAccount) => {
  const response = await request.post('signup', data);
  return response.data;
};

export const loginFn = async (data: IsAccount) => {
  const response = await request.post('login', data);
  return response.data;
};

export const logoutFn = async () => {
  const response = await request.post('logout');
  return response.data;
};
