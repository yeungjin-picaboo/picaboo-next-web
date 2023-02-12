import {
  ButtonHTMLAttributes,
  ChangeEvent,
  InputHTMLAttributes,
  MouseEvent,
  ReactNode,
} from 'react';

export interface IProps {
  children?: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
  children: ReactNode;
}
