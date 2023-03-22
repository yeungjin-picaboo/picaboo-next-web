import {
  StDiaryContentTextarea,
  StDiaryFormDate,
  StDiaryEntryBox,
  StDiaryEntryFormHeader,
  StDiaryTitleInput,
  StDiaryFormDateBox,
  StDiaryForm,
  StDiaryFormButton,
} from '@/src/styles/layouts/DiaryForm.styled';
import dayjs from 'dayjs';
import { ChevronDown, X } from 'react-feather';
import ProgressBar from '../common/ProgressBar';
import 'dayjs/locale/es';

export default function DiaryEntryForm() {
  return (
    <StDiaryForm>
      <StDiaryEntryFormHeader>
        <X />
        <StDiaryFormDateBox>
          <StDiaryFormDate>
            {dayjs(new Date()).locale('en-us').format('dddd, MMMM D, YYYY')}
          </StDiaryFormDate>
          <ChevronDown />
        </StDiaryFormDateBox>
      </StDiaryEntryFormHeader>
      <ProgressBar progress={50} />
      <StDiaryEntryBox>
        <StDiaryTitleInput placeholder='How was your day?' />
        <StDiaryContentTextarea placeholder='+ description' />
      </StDiaryEntryBox>
      <StDiaryFormButton disabled={true}>Next</StDiaryFormButton>
    </StDiaryForm>
  );
}
