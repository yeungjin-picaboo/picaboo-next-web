import ICredentials from '@/types/ICredentials';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

export default function useAuthForm(
  apiFunction: (data: ICredentials) => Promise<any>,
  onSuccess: (data: any) => void,
  onError: (error: AxiosError) => void
) {
  const { mutate, isLoading } = useMutation(apiFunction, {
    onSuccess: onSuccess,
    onError: onError,
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    resetField,
    watch,
  } = useForm({
    defaultValues: { email: '', password: '', confirmation: '' },
  });

  const onValid = async (data: ICredentials) => {
    mutate(data);
  };
  const handleResetEmail = () => {
    resetField('email');
  };

  return {
    isLoading,
    onSubmit: handleSubmit(onValid),
    isSubmitting,
    errors,
    register,
    resetField,
    watch,
    handleResetEmail,
  };
}
