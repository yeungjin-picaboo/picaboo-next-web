import { registerFn } from '@/apis/authApi';
import Input from '@/components/atoms/Input/Input';
import Loading from '@/components/atoms/Loading/Loading';
import useAuthForm from '@/hooks/useAuthForm';
import useInputRef from '@/hooks/useInputRef';
import {
  StAuthForm,
  StAuthFormContainer,
  StAuthFormLayout,
  StAuthFormText,
  StAuthFormTitle,
} from '@/styles/components/StAuthForm.styles';
import { StButton } from '@/styles/components/StButton.styles';
import {
  confirmationOptions,
  emailOptions,
  nicknameOptions,
  passwordOptions,
} from '@/utils/inputOptions';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const router = useRouter();
  const {
    isLoading,
    onSubmit,
    watch,
    isSubmitting,
    errors,
    register,
    handleResetEmail,
    handleResetNickname,
  } = useAuthForm(
    registerFn,
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
  const { currentRef: confirmCurrentRef, ...confirmation } = useInputRef(
    register('confirmation', confirmationOptions(watch))
  );
  const { currentRef: nicknameCurrentRef, ...nickname } = useInputRef(
    register('nickname', nicknameOptions)
  );

  return (
    <StAuthFormLayout>
      <StAuthFormContainer>
        {isLoading && <Loading message={'Please wait...'} />}
        {!isLoading && (
          <>
            <StAuthForm onSubmit={onSubmit}>
              <StAuthFormTitle>Sign up</StAuthFormTitle>
              <Input
                id='email'
                label='Email'
                placeholder='Email'
                resetIconMode
                handleReset={handleResetEmail}
                {...register('email', emailOptions)}
                error={errors?.email}
              />
              <Input
                id='password'
                type='password'
                label='Password'
                placeholder='Password'
                viewIconMode
                _ref={passwordCurrentRef}
                {...password}
                error={errors?.password}
              />
              <Input
                id='confirmation'
                type='password'
                label='Confirm password'
                placeholder='Confirm password'
                viewIconMode
                _ref={confirmCurrentRef}
                {...confirmation}
                error={errors?.confirmation}
              />
              <Input
                id='nickname'
                type='text'
                label='Nickname'
                placeholder='Nickname'
                resetIconMode
                handleReset={handleResetNickname}
                _ref={nicknameCurrentRef}
                {...nickname}
                error={errors?.nickname}
              />
              <StButton disabled={isSubmitting}>Register</StButton>
            </StAuthForm>
            <StAuthFormText>
              Already have an account?&nbsp;&nbsp;
              <Link href='/login'>Login</Link>
            </StAuthFormText>
          </>
        )}
      </StAuthFormContainer>
    </StAuthFormLayout>
  );
}
