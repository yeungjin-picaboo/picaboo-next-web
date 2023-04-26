import { createDiaryFn, updateDiaryFn } from '@/apis/diaryApi';
import IDiary from '@/types/IDiary';
import { useRouter } from 'next/router';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useMutation } from 'react-query';

export default function useDiaryMetaForm(
  isEditMode: boolean,
  entry: IDiary,
  setEntry: Dispatch<SetStateAction<IDiary>>
) {
  const router = useRouter();
  const [weather, setWeather] = useState(entry.weather);
  const [emotion, setEmotion] = useState(entry.emotion);
  const { mutate: createDiary } = useMutation(createDiaryFn);
  const { mutate: updateDiary } = useMutation(updateDiaryFn);
  const goBack = () => {
    setEntry(prev => ({ ...prev, emotion: '', weather: '' }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditMode) {
      updateDiary({ ...entry, emotion, weather });
    } else {
      createDiary({ ...entry, emotion, weather });
    }
    setTimeout(() => {}, 1000);
    router.push('/diary');
  };
  return { weather, emotion, setWeather, setEmotion, goBack, handleSubmit };
}
