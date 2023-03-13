import {
  StPickerBox,
  StPickerContent,
  StPickerHeader,
  StPickerMonth,
  StPickerYear,
} from '@/src/styles/common/monthPicker';
import { IsMonthPickerProps } from '@/src/types/props.interface';
import MonthsOfYear from '@/src/utils/constant/MonthsOfYear.json';
import { MouseEvent, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

export default function MonthPicker({
  date,
  setDate,
  setIsPickerOpen,
}: IsMonthPickerProps) {
  const [updateDate, setUpdateDate] = useState(date);

  const handleYearChange = (value: number) => {
    setUpdateDate(prev => {
      return { ...prev, year: value };
    });
  };

  const handleMonthClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    setUpdateDate(prev => {
      return { ...prev, month: parseInt(button.id) };
    });
    setDate({ year: updateDate.year, month: Number(button.id) });
    setIsPickerOpen(false);
  };

  return (
    <StPickerBox>
      <StPickerHeader>
        <ChevronLeft onClick={() => handleYearChange(updateDate.year - 1)} />
        <StPickerYear>{updateDate.year}</StPickerYear>
        <ChevronRight onClick={() => handleYearChange(updateDate.year + 1)} />
      </StPickerHeader>
      <StPickerContent>
        {MonthsOfYear.short.map((value, index) => {
          return (
            <StPickerMonth
              key={value}
              id={`${index + 1}`}
              type='button'
              onClick={handleMonthClick}
            >
              {value}
            </StPickerMonth>
          );
        })}
      </StPickerContent>
    </StPickerBox>
  );
}
