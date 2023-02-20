import { ReactNode } from 'react';
import { InputHTMLAttributes, ReactElement } from 'react';
import { FieldError } from 'react-hook-form';

export interface IsProps {
  children?: ReactNode;
}

export interface IsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: FieldError | undefined;
  icon?: ReactElement;
}
