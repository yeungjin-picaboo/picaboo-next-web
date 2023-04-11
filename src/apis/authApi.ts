import ICredentials from '@/types/ICredentials';
import nestjsApi from '@/apis/nestjsApi';

export const registerFn = async (data: ICredentials) => {
  const { email, password } = data;
  const response = await nestjsApi.post('register', { email, password });
  return response.data;
};

export const loginFn = async (data: ICredentials) => {
  const { email, password } = data;
  const response = await nestjsApi.post('login', { email, password });
  return response.data;
};

export const logoutFn = async () => {
  const response = await nestjsApi.post('logout');
  return response.data;
};
