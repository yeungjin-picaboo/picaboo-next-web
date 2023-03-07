import { Dispatch, ReactNode, SetStateAction } from 'react';
import { InputHTMLAttributes, ReactElement } from 'react';
import { FieldError } from 'react-hook-form';
import { IsMonth } from './data.interface';

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
  setDate: Dispatch<SetStateAction<string>>;
}

export interface IsMonthPickerProps {
  date: IsMonth;
  setDate: Dispatch<SetStateAction<IsMonth>>;
  isPickerOpen: boolean;
  setIsPickerOpen: Dispatch<SetStateAction<boolean>>;
}
