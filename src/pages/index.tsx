import Link from 'next/link';
import {
  ImageBox,
  Layout,
  LinkBox,
  LinkGroup,
} from '@/src/styles/layouts/start.styles';
import { MobilePortrait } from '@/src/components/common/Responsive';
import { LogIn, UserPlus } from 'react-feather';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function StartPage() {
  return (
    <Layout>
      <ImageBox>
        <Image
          src={logo}
          fill
          sizes='100vw, (min-width: 769px) 42vw'
          priority
          alt='logo'
        />
      </ImageBox>
      <LinkGroup>
        <LinkBox>
          <Link href='/login' className='link'>
            <MobilePortrait>Get started</MobilePortrait>
            <LogIn />
          </Link>
        </LinkBox>
        <LinkBox>
          <Link href='/signup' className='link'>
            <MobilePortrait>Register</MobilePortrait>
            <UserPlus />
          </Link>
        </LinkBox>
      </LinkGroup>
    </Layout>
  );
}
