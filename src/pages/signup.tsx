import {
  Container,
  Form,
  Layout,
  Text,
  Title,
} from '@/src/styles/layouts/account.style';
import { BasicBtn } from '@/src/styles/common/common.style';
import { Input, VisibilityIcon } from '@/src/components/common';
import { IsSignup } from '@/src/types/data.interface';
import { signupFn } from '@/src/api/accountApi';
import useInputRef from '@/src/hooks/useInputRef';
import {
  confirmationOptions,
  emailOptions,
  passwordOptions,
} from '@/src/utils/inputOptions';
import Link from 'next/link';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { X } from 'react-feather';

export default function SignupPage() {
  const { mutate } = useMutation(signupFn, {
    onError: (error: AxiosError) => {
      alert(error.message);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    reset,
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
    reset();
  };

  return (
    <Layout>
      <Container>
        <Form onSubmit={handleSubmit(onValid)}>
          <Title>Sign up</Title>
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
          <BasicBtn disabled={isSubmitting}>Register</BasicBtn>
        </Form>
        <Text>
          Already have an account?&nbsp;&nbsp;<Link href='/login'>Login</Link>
        </Text>
      </Container>
    </Layout>
  );
}
