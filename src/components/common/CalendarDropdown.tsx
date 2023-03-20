import { StCalendar } from '@/src/styles/common/Calendar.styled';
import { IsCalendarProps } from '@/src/types/props.interface';
import { useEffect, useRef } from 'react';
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import { FormatDateString } from '@uvarov.frontend/vanilla-calendar/src/types';

export default function CalendarDropdown({
  date,
  today,
  setDate,
  setIsCalendarOpen,
}: IsCalendarProps) {
  const calendarEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!calendarEl.current || !date) return;
    const calendar = new VanillaCalendar(calendarEl.current, {
      settings: {
        lang: 'en',
        iso8601: false,
        range: {
          max: today as FormatDateString,
        },
        selected: {
          dates: [date],
        },
        onSelect: (dates: string[] | undefined, dateObj: Date) => {
          if (dates) setDate(dates[0]);
          setIsCalendarOpen(false);
        },
      },
    });
    calendar.init();
  }, [calendarEl, today]);

  return <StCalendar ref={calendarEl} />;
}
