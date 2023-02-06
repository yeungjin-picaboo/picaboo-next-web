import Link from 'next/link';
import {
  Layout,
  LinkBox,
  LinkGroup,
  LinkText,
  Logo,
  SubTitle,
  Title,
} from '@/src/styles/start.styles';
import { useMediaQuery } from 'react-responsive';
import { LogIn, UserPlus } from 'react-feather';
import { Barriecito } from '@next/font/google';

const barriecito = Barriecito({ weight: '400', subsets: ['latin'] });

export default function StartLayout() {
  const isMobilePortrait = useMediaQuery({
    query: '(max-width:480px)',
  });
  return (
    <Layout>
      <Logo style={barriecito.style}>Picaboo</Logo>
      <Title>AI draws a picture based on your own diary</Title>
      {!isMobilePortrait && (
        <SubTitle>Let&apos;s share a picture of your favorite diary.</SubTitle>
      )}
      <LinkGroup>
        <LinkBox>
          <Link href='/login'>GET STARTED</Link>
          <LogIn />
        </LinkBox>
        <LinkBox>
          <Link href='/signup'>REGISTER</Link>
          <UserPlus />
        </LinkBox>
      </LinkGroup>
    </Layout>
  );
}
