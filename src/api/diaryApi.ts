import { QueryFunctionContext } from 'react-query';
import { request } from '@/src/utils/request';

export const fetchDiaryListFn = async ({ queryKey }: QueryFunctionContext) => {
  const [, month, year] = queryKey;
  const response = await request.get(`diarys/years/${year}/months/${month}`);
  return response.data;
};

export const fetchDiaryDetailFn = async ({
  queryKey,
}: QueryFunctionContext) => {
  const [, id] = queryKey;
  const response = await request.get(`diarys/${id}`);
  return response.data;
};
