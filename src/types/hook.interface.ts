import { FormEvent } from 'react';

export interface UseFormProps {
  initialState: { [key: string]: string };
  onSubmit: (value: { [key: string]: string }) => void;
  validate: (value: { [key: string]: string }) => boolean;
}
