import ICredentials from '@/types/ICredentials';
import { UseFormWatch } from 'react-hook-form';

export const emailOptions = {
  required: {
    value: true,
    message: 'The email adress is required',
  },
  pattern: {
    value:
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    message: 'The input is not a valid email address',
  },
};

export const passwordOptions = {
  required: { value: true, message: 'The password is required' },
  pattern: {
    value:
      /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,20}$/,
    message:
      'The password must be 8 to 20 characters and a combination of numbers, letters or special characters',
  },
};

export const confirmationOptions = (watch: UseFormWatch<ICredentials>) => {
  return {
    required: {
      value: true,
      message: 'The password comfirmation is required',
    },
    validate: (value: string) => {
      if (watch('password') != value) {
        return 'The password comfirmation does not match';
      }
    },
  };
};
