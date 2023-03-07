export interface IsAccount {
  email: string;
  password: string;
}

export interface IsSignup extends IsAccount {
  confirmation: string;
}

export interface IsMonth {
  year: number;
  month: number;
}
