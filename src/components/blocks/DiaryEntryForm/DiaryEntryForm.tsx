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
import { UseMutateFunction, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import IDiaryFields from '@/types/IDiaryFields';
import IDiary from '@/types/IDiary';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { fetchDiaryMetaFn } from '@/apis/diaryApi';
import Loading from '@/components/atoms/Loading/Loading';

interface IDiaryEntryFormProps {
  title: string;
  content: string;
  date: Date;
  setEntry: Dispatch<SetStateAction<IDiary>>;
}

export default function DiaryEntryForm({
  title,
  content,
  date,
  setEntry,
}: IDiaryEntryFormProps) {
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
    mutate({ title, content });
  };
  const isDisabled = title.length === 0 || content.length === 0;

  return (
    <>
      {isLoading && <Loading message='Analyzing...' />}
      {!isLoading && (
        <StDiaryForm onSubmit={handleSubmit}>
          <StDiaryFormHeader>
            <X />
            <StDiaryDateSelector>
              <StSelectedDate>
                {dayjs(date).locale('en-us').format('dddd, MMMM D, YYYY')}
              </StSelectedDate>
              <ChevronDown />
            </StDiaryDateSelector>
          </StDiaryFormHeader>
          <ProgressBar progress={50} />
          <StDiaryEntryBox>
            <StDiaryTitleInput
              name='title'
              placeholder='How was your day?'
              value={title}
              onChange={handleChange}
            />
            <StDiaryContentTextarea
              name='content'
              placeholder='+ description'
              value={content}
              onChange={handleChange}
            />
          </StDiaryEntryBox>
          <StDiaryFormButton disabled={isDisabled}>Next</StDiaryFormButton>
        </StDiaryForm>
      )}
    </>
  );
}
