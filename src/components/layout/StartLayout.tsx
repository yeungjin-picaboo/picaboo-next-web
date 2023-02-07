import Link from 'next/link';
import {
  Content,
  Layout,
  LinkBox,
  LinkGroup,
  Logo,
  SubTitle,
  Title,
} from '@/src/styles/start.styles';
import { useMediaQuery } from 'react-responsive';
import { LogIn, UserPlus } from 'react-feather';
import { Barriecito } from '@next/font/google';
import Image from 'next/image';

const barriecito = Barriecito({ weight: '400', subsets: ['latin'] });

export default function StartLayout() {
  const isTablet = useMediaQuery({
    query: '(min-width:769px) and (max-width:1199px)',
  });
  const isPc = useMediaQuery({
    query: '(min-width:1200px)',
  });
  return (
    <Layout>
      <Logo style={barriecito.style}>
        <span>P</span>i<span>c</span>a<span>b</span>oo
      </Logo>
      <Content>
        <Title>AI draws a picture based on your diary</Title>
        {(isTablet || isPc) && (
          <SubTitle>Let&apos;s share a picture of your favorite diary</SubTitle>
        )}
        <LinkGroup>
          <LinkBox>
            <Link href='/login' className='link'>
              GET STARTED
              <LogIn />
            </Link>
          </LinkBox>
          <LinkBox>
            <Link href='/signup' className='link'>
              REGISTER
              <UserPlus />
            </Link>
          </LinkBox>
        </LinkGroup>
      </Content>
    </Layout>
  );
}
