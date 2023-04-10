import { ChevronDown, X } from 'react-feather';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import ProgressBar from '@/components/atoms/ProgressBar/ProgressBar';
import {
  StDiaryForm,
  StDiaryFormButton,
  StDiaryFormHeader,
} from '@/styles/components/StDiaryForm.styles';
import {
  StDiaryContentTextarea,
  StDiaryDateSelector,
  StDiaryEntryBox,
  StDiaryTitleInput,
  StSelectedDate,
} from './DiaryEntryForm.styled';

export default function DiaryEntryForm() {
  return (
    <StDiaryForm>
      <StDiaryFormHeader>
        <X />
        <StDiaryDateSelector>
          <StSelectedDate>
            {dayjs(new Date()).locale('en-us').format('dddd, MMMM D, YYYY')}
          </StSelectedDate>
          <ChevronDown />
        </StDiaryDateSelector>
      </StDiaryFormHeader>
      <ProgressBar progress={50} />
      <StDiaryEntryBox>
        <StDiaryTitleInput placeholder='How was your day?' />
        <StDiaryContentTextarea placeholder='+ description' />
      </StDiaryEntryBox>
      <StDiaryFormButton disabled={true}>Next</StDiaryFormButton>
    </StDiaryForm>
  );
}
