import { QueryFunctionContext } from 'react-query';
import axiosInstance from '@/utils/axiosInstance';
import IDiaryFields from '@/types/IDiaryFields';
import IDiary from '@/types/IDiary';

export const fetchDiaryListFn = async ({ queryKey }: QueryFunctionContext) => {
  const [, month, year] = queryKey;
  const response = await axiosInstance.get(
    `diary/years/${year}/months/${month}`
  );
  return response.data;
};

export const fetchDiaryDetailFn = async ({
  queryKey,
}: QueryFunctionContext) => {
  const [, id] = queryKey;
  const response = await axiosInstance.get(`diary/${id}`);
  return response.data;
};

export const fetchDiaryMetaFn = async (data: IDiaryFields) => {
  const longitude = 0;
  const latitude = 0;
  const response = await axiosInstance.get('diary/meta', {
    params: { ...data, longitude, latitude },
  });
  return response.data;
};

export const createDiaryFn = async (data: IDiary) => {
  const response = await axiosInstance.post('diary', data);
  return response.data;
};
