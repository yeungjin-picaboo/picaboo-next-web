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
import { Dispatch, SetStateAction, useTransition } from 'react';
import useDiaryMetaForm from '@/hooks/useDiaryMetaForm';
import { useTranslation } from 'next-i18next';

interface IDiaryMetaFormProps {
  isEditMode?: boolean;
  entry: IDiary;
  setEntry: Dispatch<SetStateAction<IDiary>>;
}

export default function DiaryMetaForm({
  isEditMode,
  entry,
  setEntry,
}: IDiaryMetaFormProps) {
  const { t } = useTranslation('diary-form');
  const { weather, emotion, setWeather, setEmotion, goBack, handleSubmit } =
    useDiaryMetaForm(isEditMode, entry, setEntry);
  return (
    <StDiaryForm onSubmit={handleSubmit}>
      <StDiaryFormHeader>
        <ArrowLeft onClick={goBack} />
      </StDiaryFormHeader>
      <ProgressBar progress={100} />
      <StDiaryMetaContainer>
        <MetaPicker
          title={t('weather')}
          list={weatherList}
          pick={weather}
          setPick={setWeather}
        />
        <MetaPicker
          title={t('mood')}
          list={moodList}
          pick={emotion}
          setPick={setEmotion}
        />
      </StDiaryMetaContainer>
      <StDiaryFormButton>{t('done')}</StDiaryFormButton>
    </StDiaryForm>
  );
}
