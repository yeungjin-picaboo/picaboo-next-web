import {
  StDateBox,
  StPickerBox,
  StPickerContent,
  StPickerHeader,
  StPickerLayout,
  StPickerMonth,
  StPickerYear,
  StYear,
} from '@/src/styles/common/monthPicker';
import getTodayDate from '@/src/utils/getTodayDate';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from 'react-feather';
import MonthsOfYear from '@/src/utils/constant/MonthsOfYear.json';
import useDropdown from '@/src/hooks/useDropdown';

export default function MonthPicker() {
  const [date, setDate] = useState({
    year: 2023,
    month: 1,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useDropdown(dropdownRef);

  useEffect(() => {
    const { year, month } = getTodayDate();
    setDate({ year: year, month: month });
  }, []);

  const handleYearChange = (value: number) => {
    setDate(prev => {
      return { ...prev, year: value };
    });
  };

  const handleMonthClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    setDate(prev => {
      return { ...prev, month: parseInt(button.id) };
    });
    setIsOpen(!isOpen);
  };

  return (
    <>
      {date && (
        <StPickerLayout ref={dropdownRef}>
          <StDateBox onClick={() => setIsOpen(!isOpen)}>
            <>{MonthsOfYear.full[date.month - 1]}</>
            <StYear>{date.year}</StYear>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </StDateBox>
          {isOpen && (
            <StPickerBox>
              <StPickerHeader>
                <ChevronLeft onClick={() => handleYearChange(date.year - 1)} />
                <StPickerYear>{date.year}</StPickerYear>
                <ChevronRight onClick={() => handleYearChange(date.year + 1)} />
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
          )}
        </StPickerLayout>
      )}
    </>
  );
}
