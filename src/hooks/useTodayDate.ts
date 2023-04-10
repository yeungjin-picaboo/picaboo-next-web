import getTodayDate from '@/utils/getTodayDate';
import { useEffect, useState } from 'react';

interface ITodayDate {
  year: number;
  month: number;
  day: number;
  dateStr: string;
}

export default function useTodayDate() {
  const [todayDate, setTodayDate] = useState<ITodayDate>(getTodayDate());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTodayDate(getTodayDate());
    }, getMsUntilMidnight());

    return () => clearTimeout(timeoutId);
  }, [todayDate]);

  const getMsUntilMidnight = () => {
    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime();
    return msUntilMidnight;
  };

  return todayDate;
}
