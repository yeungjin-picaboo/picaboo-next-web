import { fetchDiaryMetaFn } from '@/apis/diaryApi';
import IDiary from '@/types/IDiary';
import { AxiosError } from 'axios';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import useGeolocation from './useGeolocation';

export default function useDiaryEntryForm(
  title: string,
  content: string,
  setEntry: Dispatch<SetStateAction<IDiary>>
) {
  const { position, error } = useGeolocation();
  const { mutate, isLoading } = useMutation(fetchDiaryMetaFn, {
    onSuccess: data => {
      setEntry(current => ({
        ...current,
        emotion: data.emotion,
        weather: data.weather,
      }));
    },
    onError: (error: AxiosError) => {
      alert(error.message);
    },
  });
  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEntry(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let latitude = 0;
    let longitude = 0;
    if (!error) {
      latitude = position.latitude;
      longitude = position.longitude;
    }
    mutate({ title, content, latitude, longitude });
  };
  const isDisabled = title.length === 0 || content.length === 0;

  return { isLoading, handleChange, handleSubmit, isDisabled };
}
