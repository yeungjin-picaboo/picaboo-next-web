import Link from 'next/link';
import { emailOptions, passwordOptions } from '@/utils/inputOptions';
import ubuntu from '@/styles/fonts/ubuntu';
import Loading from '@/components/atoms/Loading/Loading';
import Input from '@/components/atoms/Input/Input';
import { StButton } from '@/styles/components/StButton.styles';
import {
  StAuthForm,
  StAuthFormContainer,
  StAuthFormLayout,
  StAuthFormText,
  StAuthFormTitle,
} from '@/styles/components/StAuthForm.styles';
import useAuthForm from '@/hooks/useAuthForm';
import useInputRef from '@/hooks/useInputRef';
import { loginFn } from '@/apis/authApi';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const {
    isLoading,
    onSubmit,
    isSubmitting,
    errors,
    register,
    handleResetEmail,
  } = useAuthForm(
    loginFn,
    data => {
      alert(data.message);
      router.push('/diary');
    },
    (error: AxiosError) => {
      alert(error.message);
    }
  );
  const { currentRef: passwordCurrentRef, ...password } = useInputRef(
    register('password', passwordOptions)
  );

  return (
    <StAuthFormLayout className={ubuntu.className}>
      <StAuthFormContainer>
        {isLoading && <Loading message={'Please wait...'} />}
        {!isLoading && (
          <>
            <StAuthForm onSubmit={onSubmit}>
              <StAuthFormTitle>Login</StAuthFormTitle>
              <Input
                id='email'
                label='Email'
                placeholder='Email'
                resetIconMode
                handleResetEmail={handleResetEmail}
                {...register('email', emailOptions)}
                error={errors?.email}
              />
              <Input
                id='password'
                type='password'
                label='Password'
                placeholder='Password'
                _ref={passwordCurrentRef}
                {...password}
                viewIconMode
                error={errors?.password}
              />
              <Link href='/forgot'>Forgot password?</Link>
              <StButton disabled={isSubmitting}>Login</StButton>
            </StAuthForm>
            <StAuthFormText>
              Don’t have an account?&nbsp;&nbsp;
              <Link href='/register'>Register</Link>
            </StAuthFormText>
          </>
        )}
      </StAuthFormContainer>
    </StAuthFormLayout>
  );
}
