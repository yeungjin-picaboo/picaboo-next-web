import ProgressBar from '@/components/atoms/ProgressBar/ProgressBar';
import {
  StDiaryForm,
  StDiaryFormButton,
  StDiaryFormHeader,
} from '@/styles/components/StDiaryForm.styled';
import { ArrowLeft } from 'react-feather';
import { StDiaryMetaContainer } from './DiaryMetaForm.styled';
import MetaPicker from '@/components/atoms/MetaPicker/MetaPicker';
import moodList from '@/data/moods';
import weatherList from '@/data/weather';
import IDiary from '@/types/IDiary';
import { Dispatch, SetStateAction } from 'react';
import useDiaryMetaForm from '@/hooks/useDiaryMetaForm';

interface IDiaryMetaFormProps {
  entry: IDiary;
  setEntry: Dispatch<SetStateAction<IDiary>>;
}

export default function DiaryMetaForm({
  entry,
  setEntry,
}: IDiaryMetaFormProps) {
  const { weather, emotion, setWeather, setEmotion, goBack, handleSubmit } =
    useDiaryMetaForm(entry, setEntry);
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
