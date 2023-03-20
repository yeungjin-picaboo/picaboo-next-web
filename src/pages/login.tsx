import { loginFn } from '@/src/api/accountApi';
import Loading from '@/src/components/common/Loading';
import Input from '@/src/components/common/Input';
import VisibilityIcon from '@/src/components/common/VisibilityIcon';
import useInputRef from '@/src/hooks/useInputRef';
import {
  StAuthFormContainer,
  StAuthForm,
  StAuthFormLayout,
  StAuthFormTitle,
  StAuthFormText,
} from '@/src/styles/layouts/authForm.style';
import { StButton } from '@/src/styles/common/common.style';
import { IsAccount } from '@/src/types/data.interface';
import { emailOptions, passwordOptions } from '@/src/utils/inputOptions';
import { ubuntu } from '@/src/utils/font';
import Link from 'next/link';
import { X } from 'react-feather';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { mutate, isLoading } = useMutation(loginFn, {
    onSuccess: data => {
      alert(data.message);
      router.push('/diaries');
    },
    onError: (error: AxiosError) => {
      alert(error.message);
      // message 결과에 따라 input 필드 초기화 구현해야함
    },
  });
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    resetField,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { currentRef: passwordCurrentRef, ...password } = useInputRef(
    register('password', passwordOptions)
  );
  const onValid = async (data: IsAccount) => {
    mutate(data);
  };

  return (
    <StAuthFormLayout className={ubuntu.className}>
      <StAuthFormContainer>
        {isLoading && <Loading message={'Please wait...'} />}
        {!isLoading && (
          <>
            <StAuthForm onSubmit={handleSubmit(onValid)}>
              <StAuthFormTitle>Login</StAuthFormTitle>
              <Input
                id='email'
                label='Email'
                placeholder='Email'
                icon={<X onClick={() => resetField('email')} />}
                {...register('email', emailOptions)}
                error={errors?.email}
              />
              <Input
                id='password'
                type='password'
                label='Password'
                placeholder='Password'
                icon={<VisibilityIcon _ref={passwordCurrentRef} />}
                {...password}
                error={errors?.password}
              />
              <Link href='/forgot'>Forgot password?</Link>
              <StButton disabled={isSubmitting}>Register</StButton>
            </StAuthForm>
            <StAuthFormText>
              Don’t have an account?&nbsp;&nbsp;
              <Link href='/signup'>Register</Link>
            </StAuthFormText>
          </>
        )}
      </StAuthFormContainer>
    </StAuthFormLayout>
  );
}
