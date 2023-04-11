import ProgressBar from '@/components/atoms/ProgressBar/ProgressBar';
import {
  StDiaryForm,
  StDiaryFormButton,
  StDiaryFormHeader,
} from '@/styles/components/StDiaryForm.styles';
import { ArrowLeft } from 'react-feather';
import { StDiaryMetaContainer } from './DiaryMetaForm.styled';
import MetaPicker from '@/components/atoms/MetaPicker/MetaPicker';
import moodList from '@/data/moods';
import weatherList from '@/data/weather';
import IDiary from '@/types/IDiary';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { useMutation } from 'react-query';
import { createDiaryFn, createDiaryPictureFn } from '@/apis/diaryApi';

interface IDiaryMetaFormProps {
  entry: IDiary;
  setEntry: Dispatch<SetStateAction<IDiary>>;
}

export default function DiaryMetaForm({
  entry,
  setEntry,
}: IDiaryMetaFormProps) {
  const { mutate: createDiary } = useMutation(createDiaryFn);
  const { mutate: createDiaryPicture } = useMutation(createDiaryPictureFn);
  const [weather, setWeather] = useState(entry.weather);
  const [emotion, setEmotion] = useState(entry.emotion);
  const goBack = () => {
    setEntry(prev => ({ ...prev, emotion: '', weather: '' }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createDiary({ ...entry, emotion, weather });
    createDiaryPicture({
      title: entry.title,
      content: entry.content,
      emotion: entry.emotion,
    });
  };
  return (
    <StDiaryForm onSubmit={handleSubmit}>
      <StDiaryFormHeader>
        <ArrowLeft onClick={goBack} />
      </StDiaryFormHeader>
      <ProgressBar progress={100} />
      <StDiaryMetaContainer>
        <MetaPicker
          title='Weather'
          list={weatherList}
          pick={weather}
          setPick={setWeather}
        />
        <MetaPicker
          title='Mood'
          list={moodList}
          pick={emotion}
          setPick={setEmotion}
        />
      </StDiaryMetaContainer>
      <StDiaryFormButton>Done</StDiaryFormButton>
    </StDiaryForm>
  );
}
