import { StDateBox, StYear } from '@/src/styles/common/monthPicker';
import getTodayDate from '@/src/utils/getTodayDate';
import { useMemo } from 'react';
import { ChevronDown } from 'react-feather';

const monthFull = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function MonthPicker() {
  const { year, month } = useMemo(() => getTodayDate(), []);
  return (
    <StDateBox>
      <>{monthFull[month - 1]}</>
      <StYear>{year}</StYear>
      <ChevronDown />
    </StDateBox>
  );
}
