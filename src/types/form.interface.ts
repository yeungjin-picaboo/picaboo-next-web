import { InputHTMLAttributes, ReactElement } from 'react';
import { FieldError } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: FieldError | undefined;
  icon?: ReactElement;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupFormTypes extends LoginForm {
  confirmation: string;
}
