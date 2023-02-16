import {
  Container,
  Form,
  Layout,
  Text,
  Title,
} from '@/src/styles/signup.style';
import { BasicBtn } from '@/src/styles/common.style';
import Input from '@/src/components/common/Input';
import ResetIcon from '@/src/components/common/ResetIcon';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { SignupFormTypes } from '@/src/types/form.interface';
import VisibilityIcon from '../common/VisibilityIcon';
import { useRef } from 'react';

export default function SignupLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmation: '',
    },
  });
  const emailCurrentRef = useRef<HTMLInputElement | null>(null);
  const passwordCurrentRef = useRef<HTMLInputElement | null>(null);
  const confirmCurrentRef = useRef<HTMLInputElement | null>(null);
  const { ref: emailRef, ...email } = register('email', {
    required: {
      value: true,
      message: 'The email adress is required',
    },
    pattern: {
      value:
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      message: 'The input is not a valid email address',
    },
  });
  const { ref: passwordRef, ...password } = register('password', {
    required: { value: true, message: 'The password is required' },
    pattern: {
      value:
        /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,20}$/,
      message:
        'The password must be 8 to 20 characters and a combination of numbers, letters or special characters',
    },
  });
  const { ref: confirmRef, ...confirm } = register('confirmation', {
    required: {
      value: true,
      message: 'The password comfirmation is required',
    },
    validate: (value: string) => {
      if (watch('password') != value) {
        return 'The password comfirmation does not match';
      }
    },
  });
  const onValid = async (data: SignupFormTypes) => {
    console.log(data);
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
            icon={<ResetIcon _ref={emailCurrentRef} />}
            ref={el => {
              emailRef(el);
              emailCurrentRef.current = el;
            }}
            {...email}
            error={errors?.email}
          />
          <Input
            id='password'
            type='password'
            label='Password'
            placeholder='Password'
            icon={<VisibilityIcon _ref={passwordCurrentRef} />}
            ref={el => {
              passwordRef(el);
              passwordCurrentRef.current = el;
            }}
            {...password}
            error={errors?.password}
          />
          <Input
            id='confirm'
            type='password'
            label='Confirm password'
            placeholder='Confirm password'
            icon={<VisibilityIcon _ref={confirmCurrentRef} />}
            ref={el => {
              confirmRef(el);
              confirmCurrentRef.current = el;
            }}
            {...confirm}
            error={errors?.confirmation}
          />
          <BasicBtn disabled={false}>Register</BasicBtn>
        </Form>
        <Text>
          Already have an account?&nbsp;&nbsp;<Link href='/login'>Login</Link>
        </Text>
      </Container>
    </Layout>
  );
}
