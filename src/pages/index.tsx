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

export default function StartPage() {
  return (
    <Layout>
      <ImageBox>
        <Image src='/logo.png' fill alt='' />
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
