import {
  StDiaryForm,
  StDiaryFormButton,
  StDiaryMetaFormBox,
  StDiaryMetaPickerHeader,
} from '@/src/styles/layouts/DiaryForm.styled';
import { ArrowLeft, Smile } from 'react-feather';
import MetaPickerBox from '../common/MetaPickerBox';
import ProgressBar from '../common/ProgressBar';

export default function DiaryMetaPickerForm() {
  return (
    <StDiaryForm>
      <StDiaryMetaFormBox>
        <StDiaryMetaPickerHeader>
          <ArrowLeft />
        </StDiaryMetaPickerHeader>
        <ProgressBar progress={100} />
        <MetaPickerBox
          title='Weather'
          list={[
            { id: 'smile', icon: <Smile /> },
            { id: 'smile2', icon: <Smile /> },
            { id: 'smile3', icon: <Smile /> },
            { id: 'smile4', icon: <Smile /> },
            { id: 'smile5', icon: <Smile /> },
          ]}
        />
        <MetaPickerBox
          title='Mood'
          list={[
            { id: 'smile', icon: <Smile /> },
            { id: 'smile2', icon: <Smile /> },
            { id: 'smile3', icon: <Smile /> },
            { id: 'smile4', icon: <Smile /> },
            { id: 'smile5', icon: <Smile /> },
            { id: 'smile6', icon: <Smile /> },
            { id: 'smile7', icon: <Smile /> },
            { id: 'smile8', icon: <Smile /> },
            { id: 'smile9', icon: <Smile /> },
          ]}
        />
      </StDiaryMetaFormBox>
      <StDiaryFormButton>Done</StDiaryFormButton>
    </StDiaryForm>
  );
}
