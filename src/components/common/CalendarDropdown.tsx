import { useEffect, useRef } from 'react';
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import { FormatDateString } from '@uvarov.frontend/vanilla-calendar/src/types';
import { IsCalendarProps } from '@/src/types/props.interface';
import { StCalendarWrapper } from '@/src/styles/common/calendar';

export default function CalendarDropdown({
  date,
  today,
  setDate,
  setIsCalendarOpen,
}: IsCalendarProps) {
  const calendarEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!calendarEl.current) return;
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
      },
      actions: {
        clickDay(e: MouseEvent, dates: string[] | undefined) {
          e.preventDefault();
          console.log(dates);
          if (dates) setDate(dates[0]);
          setIsCalendarOpen(false);
        },
      },
    });
    calendar.init();
  }, [calendarEl, today]);

  return <StCalendarWrapper ref={calendarEl} />;
}
