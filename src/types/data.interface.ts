import { ReactElement } from 'react';

export interface IsAccount {
  email: string;
  password: string;
}

export interface IsSignup extends IsAccount {
  confirmation: string;
}

export interface IsYearMonth {
  year: number;
  month: number;
}

export interface IsDiaryList {
  id: string;
  source: string;
}

export interface IsMetaPickerList {
  id: string;
  icon: ReactElement;
}
