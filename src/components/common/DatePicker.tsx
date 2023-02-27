import { useEffect, useMemo, useRef } from 'react';
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import { FormatDateString } from '@uvarov.frontend/vanilla-calendar/src/types';
import getTodayDate from '@/src/utils/getTodayDate';
import { IsDatePickerProps } from '@/src/types/props.interface';

export default function DatePicker({ setDate }: IsDatePickerProps) {
  const calendarEl = useRef<HTMLDivElement>(null);
  const dateStr = useMemo(() => getTodayDate(), []);

  useEffect(() => {
    if (!calendarEl.current) return;
    const calendar = new VanillaCalendar(calendarEl.current, {
      settings: {
        lang: 'en',
        iso8601: false,
        range: {
          max: dateStr as FormatDateString,
        },
        selected: {
          dates: [dateStr],
        },
      },
      actions: {
        clickDay(e: MouseEvent, dates: string[] | undefined) {
          e.preventDefault();
          console.log(dates);
          if (dates) setDate(dates[0]);
          // 여기에 해당 날짜 일기 데이터 가져오는 코드 작성해야 함
        },
      },
    });
    calendar.init();
  }, [calendarEl, dateStr]);

  return <div ref={calendarEl}></div>;
}
