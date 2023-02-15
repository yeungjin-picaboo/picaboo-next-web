import { InputHTMLAttributes, Ref } from 'react';
import { FieldError } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: FieldError | undefined;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupFormTypes extends LoginForm {
  confirmation: string;
}
