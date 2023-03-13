import { signupFn } from '@/src/api/accountApi';
import Loading from '@/src/components/common/Loading';
import Input from '@/src/components/common/Input';
import VisibilityIcon from '@/src/components/common/VisibilityIcon';
import useInputRef from '@/src/hooks/useInputRef';
import {
  StAuthFormContainer,
  StAuthFormLayout,
  StAuthForm,
  StAuthFormText,
  StAuthFormTitle,
} from '@/src/styles/layouts/authForm.style';
import { StButton } from '@/src/styles/common/common.style';
import { IsSignup } from '@/src/types/data.interface';
import {
  confirmationOptions,
  emailOptions,
  passwordOptions,
} from '@/src/utils/inputOptions';
import { ubuntu } from '@/src/utils/font';
import Link from 'next/link';
import { X } from 'react-feather';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function SignupPage() {
  const { mutate, isLoading } = useMutation(signupFn, {
    onSuccess: data => {
      alert(data.message);
      router.push('/diary');
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
    watch,
    resetField,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmation: '',
    },
  });
  const { currentRef: passwordCurrentRef, ...password } = useInputRef(
    register('password', passwordOptions)
  );
  const { currentRef: confirmCurrentRef, ...confirmation } = useInputRef(
    register('confirmation', confirmationOptions(watch))
  );
  const onValid = async (data: IsSignup) => {
    // console.log({ email: data.email, password: data.password });
    mutate({ email: data.email, password: data.password });
  };

  return (
    <StAuthFormLayout className={ubuntu.className}>
      <StAuthFormContainer>
        {isLoading && <Loading message={'Please wait...'} />}
        {!isLoading && (
          <>
            <StAuthForm onSubmit={handleSubmit(onValid)}>
              <StAuthFormTitle>Sign up</StAuthFormTitle>
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
              <Input
                id='confirmation'
                type='password'
                label='Confirm password'
                placeholder='Confirm password'
                icon={<VisibilityIcon _ref={confirmCurrentRef} />}
                {...confirmation}
                error={errors?.confirmation}
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
