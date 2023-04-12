import ICredentials from '@/types/ICredentials';
import axiosInstance from '@/utils/axiosInstance';

export const registerFn = async (data: ICredentials) => {
  const { email, password } = data;
  const response = await axiosInstance.post('register', { email, password });
  return response.data;
};

export const loginFn = async (data: ICredentials) => {
  const { email, password } = data;
  const response = await axiosInstance.post('login', { email, password });
  return response.data;
};

export const logoutFn = async () => {
  const response = await axiosInstance.post('logout');
  return response.data;
};
