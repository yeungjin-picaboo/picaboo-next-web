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

export default function SignupLayout() {
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
            value=''
            onChange={() => {}}
            handleReset={() => {}}
            required
          />
          <LabelInput
            type='password'
            id='password'
            label='Password'
            placeholder='Password'
            value=''
            onChange={() => {}}
            handleReset={() => {}}
            required
          />
          <LabelInput
            type='password'
            id='confirm'
            label='Confirm password'
            placeholder='Confirm password'
            value=''
            onChange={() => {}}
            handleReset={() => {}}
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
