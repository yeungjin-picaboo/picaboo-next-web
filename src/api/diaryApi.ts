import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { request } from '../utils/request';

export const fetchDiaryListFn = async ({ queryKey }: QueryFunctionContext) => {
  const [, month, year] = queryKey;
  const response = await request.get(`diary/list/year/${year}/months/${month}`);
  return response.data;
};
