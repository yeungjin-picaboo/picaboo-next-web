import { QueryFunctionContext } from 'react-query';
import axiosInstance from '@/utils/axiosInstance';
import IDiary from '@/types/IDiary';
import IDiaryAnalysisRequest from '@/types/IDiaryAnalysisRequest';

export const fetchDiaryListFn = async ({ queryKey }: QueryFunctionContext) => {
  const [, month, year] = queryKey;
  const response = await axiosInstance.get(
    `diary/years/${year}/months/${month}`
  );
  return response.data;
};

export const fetchDiaryFn = async ({ queryKey }: QueryFunctionContext) => {
  const [, id] = queryKey;
  const response = await axiosInstance.get(`diary/${id}`);
  return response.data;
};

export const fetchDiaryDatesFn = async () => {
  const response = await axiosInstance.get('diary/dates');
  return response.data;
};

export const fetchDiaryMetaFn = async (data: IDiaryAnalysisRequest) => {
  const response = await axiosInstance.post('diary/meta', data);
  return response.data;
};

export const createDiaryFn = async (data: IDiary) => {
  const response = await axiosInstance.post('diary', data);
  return response.data;
};

export const updateDiaryFn = async (data: IDiary) => {
  const { diary_id, title, content, weather, emotion } = data;
  const response = await axiosInstance.put(`diary/${diary_id}`, {
    title,
    content,
    weather,
    emotion,
  });
  return response.data;
};

export const deleteDiaryFn = async (id: string) => {
  const response = await axiosInstance.delete(`diary/${id}`);
  return response.data;
};
