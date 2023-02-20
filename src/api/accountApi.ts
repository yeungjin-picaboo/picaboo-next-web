import { IsAccount } from '../types/data.interface';
import { request } from '../utils/request';

export const signupFn = async (data: IsAccount) => {
  const response = await request.post('signup', data);
  return response.data;
};

export const loginFn = async (data: IsAccount) => {
  const response = await request.post('login', data);
  return response.data;
};
