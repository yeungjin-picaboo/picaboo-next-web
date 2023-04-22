import MONTHS_SHORT from '@/data/months_short.json';
import { ChevronLeft, ChevronRight } from 'react-feather';
import {
  StMonthPickerArrow,
  StMonthPickerBox,
  StMonthPickerContent,
  StMonthPickerHeader,
  StMonthPickerMonth,
  StMonthPickerYear,
} from './MonthPicker.styled';
import useMonthPicker from '../../../hooks/useMonthPicker';
import { Dispatch, SetStateAction } from 'react';
import IYearMonth from '@/types/IYearMonth';

interface IMonthPickerProps {
  date: IYearMonth;
  setDate: Dispatch<SetStateAction<IYearMonth | null>>;
  setIsPickerOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MonthPicker({
  date,
  setDate,
  setIsPickerOpen,
}: IMonthPickerProps) {
  const { year, decrementYear, incrementYear, handleMonthClick } =
    useMonthPicker(date, setDate, setIsPickerOpen);

  return (
    <StMonthPickerBox>
      <StMonthPickerHeader>
        <StMonthPickerArrow onClick={decrementYear}>
          <ChevronLeft />
        </StMonthPickerArrow>
        <StMonthPickerYear>{year}</StMonthPickerYear>
        <StMonthPickerArrow onClick={incrementYear}>
          <ChevronRight />
        </StMonthPickerArrow>
      </StMonthPickerHeader>
      <StMonthPickerContent>
        {MONTHS_SHORT.map((value, index) => {
          return (
            <StMonthPickerMonth
              key={value}
              id={`${index + 1}`}
              type='button'
              onClick={handleMonthClick}
            >
              {value}
            </StMonthPickerMonth>
          );
        })}
      </StMonthPickerContent>
    </StMonthPickerBox>
  );
}
