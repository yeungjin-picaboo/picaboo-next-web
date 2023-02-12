import {
  Container,
  Form,
  Layout,
  Text,
  Title,
} from '@/src/styles/signup.style';
import { BasicBtn } from '@/src/styles/common.style';
import Link from 'next/link';
import LabelInput from '../common/BasicInput';
import { useState } from 'react';
import useInput from '../hook/useInputs';

export default function SignupLayout() {
  const email = useInput('');
  const password = useInput('');
  const passwordConfirmation = useInput('');
  return (
    <Layout>
      <Container>
        <Form onSubmit={() => {}}>
          <Title>Sign up</Title>
          <LabelInput
            type='email'
            id='email'
            label='Email'
            placeholder='Email'
            {...email}
            required
          />
          <LabelInput
            type='password'
            id='password'
            label='Password'
            placeholder='Password'
            {...password}
            required
          />
          <LabelInput
            type='password'
            id='confirm'
            label='Confirm password'
            placeholder='Confirm password'
            {...passwordConfirmation}
            required
          />
          <BasicBtn disabled={true}>Register</BasicBtn>
        </Form>
        <Text>
          Already have an account?&nbsp;&nbsp;<Link href='/login'>Login</Link>
        </Text>
      </Container>
    </Layout>
  );
}
