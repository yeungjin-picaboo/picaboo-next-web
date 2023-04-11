import { QueryFunctionContext } from 'react-query';
import nestjsApi from './nestjsApi';
import djangoApi from './djangoApi';
import IDiaryFields from '@/types/IDiaryFields';
import IDiary from '@/types/IDiary';

export const fetchDiaryListFn = async ({ queryKey }: QueryFunctionContext) => {
  const [, month, year] = queryKey;
  const response = await nestjsApi.get(`diary/years/${year}/months/${month}`);
  return response.data;
};

export const fetchDiaryDetailFn = async ({
  queryKey,
}: QueryFunctionContext) => {
  const [, id] = queryKey;
  const response = await nestjsApi.get(`diary/${id}`);
  return response.data;
};

export const fetchDiaryMetaFn = async (data: IDiaryFields) => {
  const longitude = 0;
  const latitude = 0;
  const response = await djangoApi.get('diary/meta', {
    params: { ...data, longitude, latitude },
  });
  return response.data;
};

export const createDiaryPictureFn = async (data: IDiaryFields) => {
  const response = await djangoApi.post('diary/picture', data);
  return response.data;
};

export const createDiaryFn = async (data: IDiary) => {
  const response = await nestjsApi.post('diary', data);
  return response.data;
};
