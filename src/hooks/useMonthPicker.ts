import IYearMonth from '@/types/IYearMonth';
import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';

export default function useMonthPicker(
  date: IYearMonth,
  setDate: Dispatch<SetStateAction<IYearMonth | null>>,
  setIsPickerOpen: Dispatch<SetStateAction<boolean>>
) {
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
      return { ...prev, month: button.id };
    });
    setDate({ year: updateDate.year, month: button.id });
    setIsPickerOpen(false);
  };

  return {
    year: updateDate.year,
    decrementYear: () => handleYearChange(updateDate.year - 1),
    incrementYear: () => handleYearChange(updateDate.year + 1),
    handleMonthClick,
  };
}
