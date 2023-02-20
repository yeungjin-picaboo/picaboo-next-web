import Link from 'next/link';
import {
  Layout,
  LinkBox,
  LinkGroup,
  SubTitle,
  Title,
} from '@/src/styles/layouts/start.styles';
import { useMediaQuery } from 'react-responsive';
import { ArrowRight, UserPlus } from 'react-feather';
import { Barriecito } from '@next/font/google';

const barriecito = Barriecito({ weight: '400', subsets: ['latin'] });

export default function StartPage() {
  const isTablet = useMediaQuery({
    query: '(min-width:769px) and (max-width:1199px)',
  });
  const isPc = useMediaQuery({
    query: '(min-width:1200px)',
  });

  return (
    <Layout>
      <Title style={barriecito.style}>
        <span>P</span>i<span>c</span>a<span>b</span>oo draws a picture based on
        your diary
      </Title>
      {(isTablet || isPc) && (
        <SubTitle>
          You can create an NFT
          <br />
          collection with diary pictures.
        </SubTitle>
      )}
      <LinkGroup>
        <LinkBox>
          <Link href='/login' className='link'>
            Get started
            <ArrowRight />
          </Link>
        </LinkBox>
        <LinkBox>
          <Link href='/signup' className='link'>
            Register
            <UserPlus />
          </Link>
        </LinkBox>
      </LinkGroup>
    </Layout>
  );
}
