import ProgressBar from '@/components/atoms/ProgressBar/ProgressBar';
import {
  StDiaryForm,
  StDiaryFormButton,
  StDiaryFormHeader,
} from '@/styles/components/StDiaryForm.styles';
import { ArrowLeft } from 'react-feather';
import { StDiaryMetaContainer } from './DiaryMetaForm.styled';
import MetaPicker from '@/components/atoms/MetaPicker/MetaPicker';
import moods from '@/data/moods';
import weather from '@/data/weather';

export default function DiaryMetaForm() {
  return (
    <StDiaryForm>
      <StDiaryFormHeader>
        <ArrowLeft />
      </StDiaryFormHeader>
      <ProgressBar progress={100} />
      <StDiaryMetaContainer>
        <MetaPicker title='Weather' list={weather} />
        <MetaPicker title='Mood' list={moods} />
      </StDiaryMetaContainer>
      <StDiaryFormButton>Done</StDiaryFormButton>
    </StDiaryForm>
  );
}
