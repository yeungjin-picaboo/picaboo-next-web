import {
  Container,
  Form,
  Layout,
  Text,
  Title,
} from '@/src/styles/signup.style'; // css
import { BasicBtn } from '@/src/styles/common.style'; // css
import Input from '@/src/components/common/Input'; // component
import Link from 'next/link'; // next
import { useForm } from 'react-hook-form'; // react-hook-form
import { SignupFormTypes } from '@/src/types/form.interface'; // typescript

export default function SignupLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmation: '',
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
            {...register('email', {
              required: {
                value: true,
                message: 'The email adress is required',
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'The input is not a valid email address',
              },
            })}
            error={errors?.email}
          />
          <Input
            id='password'
            type='password'
            label='Password'
            placeholder='Password'
            {...register('password', {
              required: { value: true, message: 'The password is required' },
              minLength: {
                value: 8,
                message: 'The password must have at least 8 characters',
              },
            })}
            error={errors?.password}
          />
          <Input
            id='confirm'
            type='password'
            label='Confirm password'
            placeholder='Confirm password'
            {...register('confirmation', {
              required: {
                value: true,
                message: 'The password comfirmation is required',
              },
            })}
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
