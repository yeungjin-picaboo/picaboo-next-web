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
    watch,
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
                value:
                  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
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
              pattern: {
                value:
                  /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,20}$/,
                message:
                  'The password must be 8 to 20 characters and a combination of numbers, letters or special characters',
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
              validate: (value: string) => {
                if (watch('password') != value) {
                  return 'The password comfirmation does not match';
                }
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
