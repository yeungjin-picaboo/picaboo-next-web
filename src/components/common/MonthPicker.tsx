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
import { MouseEvent, useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from 'react-feather';
import MonthsOfYear from '@/src/utils/constant/MonthsOfYear.json';

export default function MonthPicker() {
  const [display, setDisplay] = useState(false);
  const [date, setDate] = useState({
    year: 2023,
    month: 1,
  });
  useEffect(() => {
    const { year, month } = getTodayDate();
    setDate({ year: year, month: month });
  }, []);

  const handleChangeYear = (value: number) => {
    setDate(prev => {
      return { ...prev, year: value };
    });
  };

  const handleClickMonth = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    setDate(prev => {
      return { ...prev, month: parseInt(button.id) };
    });
    setDisplay(false);
  };

  return (
    <>
      {date && (
        <StPickerLayout>
          <StDateBox onClick={() => setDisplay(prev => !prev)}>
            <>{MonthsOfYear.full[date.month - 1]}</>
            <StYear>{date.year}</StYear>
            {display ? <ChevronUp /> : <ChevronDown />}
          </StDateBox>
          {display && (
            <StPickerBox>
              <StPickerHeader>
                <ChevronLeft onClick={() => handleChangeYear(date.year - 1)} />
                <StPickerYear>{date.year}</StPickerYear>
                <ChevronRight onClick={() => handleChangeYear(date.year + 1)} />
              </StPickerHeader>
              <StPickerContent>
                {MonthsOfYear.short.map((value, index) => {
                  return (
                    <StPickerMonth
                      key={value}
                      id={`${index + 1}`}
                      type='button'
                      onClick={handleClickMonth}
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
