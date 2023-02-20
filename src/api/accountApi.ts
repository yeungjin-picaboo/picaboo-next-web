import { IsAccount } from '../types/data.interface';
import { request } from '../utils/request';

export const signupFn = async (data: IsAccount) => {
  const response = await request.post('signup', data);
  return response.data;
};
