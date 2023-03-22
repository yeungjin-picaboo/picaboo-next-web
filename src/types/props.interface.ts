import { Dispatch, ReactNode, SetStateAction } from 'react';
import { InputHTMLAttributes, ReactElement } from 'react';
import { FieldError } from 'react-hook-form';
import { IsMetaPickerList, IsYearMonth } from './data.interface';

export interface IsProps {
  children?: ReactNode;
}

export interface IsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: FieldError | undefined;
  icon?: ReactElement;
}

export interface IsCalendarProps {
  date: string;
  today: string;
  setDate: Dispatch<SetStateAction<string>>;
  setIsCalendarOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IsMonthPickerProps {
  date: IsYearMonth;
  setDate: Dispatch<SetStateAction<IsYearMonth>>;
  setIsPickerOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IsMetaPickerProps {
  title: string;
  list: Array<IsMetaPickerList>;
}

export interface IsNavigationProps {
  route: string;
  list: Array<string>;
}
