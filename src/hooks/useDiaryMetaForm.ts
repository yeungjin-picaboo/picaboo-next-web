import { createDiaryFn } from '@/apis/diaryApi';
import IDiary from '@/types/IDiary';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useMutation } from 'react-query';

export default function useDiaryMetaForm(
  entry: IDiary,
  setEntry: Dispatch<SetStateAction<IDiary>>
) {
  const [weather, setWeather] = useState(entry.weather);
  const [emotion, setEmotion] = useState(entry.emotion);
  const { mutate: createDiary } = useMutation(createDiaryFn);
  const goBack = () => {
    setEntry(prev => ({ ...prev, emotion: '', weather: '' }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createDiary({ ...entry, emotion, weather });
  };
  return { weather, emotion, setWeather, setEmotion, goBack, handleSubmit };
}
