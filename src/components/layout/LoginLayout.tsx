import { loginFn } from '@/src/api/accountApi';
import useInputRef from '@/src/hooks/useInputRef';
import { BasicBtn } from '@/src/styles/common/common.style';
import {
  Layout,
  Container,
  Title,
  Form,
  Text,
} from '@/src/styles/layouts/account.style';
import { IsAccount } from '@/src/types/data.interface';
import { emailOptions, passwordOptions } from '@/src/utils/inputOptions';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { X } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Input, VisibilityIcon } from '../common';

export default function LoginLayout() {
  const { mutate } = useMutation(loginFn, {
    onError: (error: AxiosError) => {
      alert(error.message);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
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
    console.log(data);
    mutate(data);
    reset();
  };

  return (
    <Layout>
      <Container>
        <Form onSubmit={handleSubmit(onValid)}>
          <Title>Login</Title>
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
          <BasicBtn disabled={isSubmitting}>Register</BasicBtn>
        </Form>
        <Text>
          Don’t have an account?&nbsp;&nbsp;<Link href='/signup'>Register</Link>
        </Text>
      </Container>
    </Layout>
  );
}
