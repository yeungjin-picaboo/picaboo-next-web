import { ChevronDown, ChevronUp, X } from 'react-feather';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import ProgressBar from '@/components/atoms/ProgressBar/ProgressBar';
import {
  StDiaryForm,
  StDiaryFormButton,
  StDiaryFormHeader,
} from '@/styles/components/StDiaryForm.styled';
import {
  StDiaryContentTextarea,
  StDiaryDateContainer,
  StDiaryDateSelector,
  StDiaryEntryBox,
  StDiaryTitleInput,
  StSelectedDate,
} from './DiaryEntryForm.styled';
import IDiary from '@/types/IDiary';
import { Dispatch, SetStateAction, useRef } from 'react';
import Loading from '@/components/atoms/Loading/Loading';
import useDiaryEntryForm from '@/hooks/useDiaryEntryForm';
import useDropdown from '@/hooks/useDropdown';
import DatePicker from '@/components/atoms/DatePicker/DatePicker';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

interface IDiaryEntryFormProps {
  today: string;
  title: string;
  content: string;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
  setEntry: Dispatch<SetStateAction<IDiary>>;
}

export default function DiaryEntryForm({
  today,
  title,
  content,
  date,
  setDate,
  setEntry,
}: IDiaryEntryFormProps) {
  const { t } = useTranslation('diary-form');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCalendarOpen, setIsCalendarOpen, handleCalendarOpen] =
    useDropdown(dropdownRef);
  const { isLoading, handleChange, handleSubmit, isDisabled } =
    useDiaryEntryForm(title, content, setEntry);
  return (
    <>
      {isLoading && <Loading message='Analyzing with AI...' />}
      {!isLoading && (
        <StDiaryForm onSubmit={handleSubmit}>
          <StDiaryFormHeader>
            <Link href='/diary'>
              <X />
            </Link>
            <StDiaryDateContainer>
              <StDiaryDateSelector ref={dropdownRef}>
                <StSelectedDate onClick={handleCalendarOpen}>
                  {dayjs(date).locale('en-us').format('dddd, MMMM D, YYYY')}
                  {isCalendarOpen ? <ChevronDown /> : <ChevronUp />}
                </StSelectedDate>
                {isCalendarOpen && (
                  <DatePicker
                    current={today}
                    selected={date}
                    setSelected={setDate}
                    setIsCalendarOpen={setIsCalendarOpen}
                  />
                )}
              </StDiaryDateSelector>
            </StDiaryDateContainer>
          </StDiaryFormHeader>
          <ProgressBar progress={50} />
          <StDiaryEntryBox>
            <StDiaryTitleInput
              name='title'
              placeholder={t('title_placeholder')}
              value={title}
              onChange={handleChange}
            />
            <StDiaryContentTextarea
              name='content'
              placeholder={t('desc_placeholder')}
              value={content}
              onChange={handleChange}
            />
          </StDiaryEntryBox>
          <StDiaryFormButton disabled={isDisabled}>
            {t('next')}
          </StDiaryFormButton>
        </StDiaryForm>
      )}
    </>
  );
}
