import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/light.min.css';
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import { FormatDateString } from '@uvarov.frontend/vanilla-calendar/src/types';
import { StDatePicker } from './DatePicker.styled';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import React from 'react';

interface IDatePickerProps {
  date: string;
  today: string;
  setDate: Dispatch<SetStateAction<string>>;
  setIsCalendarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DatePicker({
  date,
  today,
  setDate,
  setIsCalendarOpen,
}: IDatePickerProps) {
  const datePickerEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!datePickerEl.current || !date) return;
    const datePicker = new VanillaCalendar(datePickerEl.current, {
      settings: {
        lang: 'en',
        iso8601: false,
        range: {
          max: today as FormatDateString,
        },
      },
      actions: {
        clickDay(event, dates) {
          setDate(dates[0]);
          setIsCalendarOpen(false);
        },
      },
    });
    datePicker.init();
  }, [datePickerEl, today]);

  return <StDatePicker ref={datePickerEl} />;
}
