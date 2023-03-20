import logo from '@/public/logo.png';
import { MobilePortrait } from '@/src/components/common/Responsive';
import {
  StIndexLayout,
  StIndexLogoBox,
  StIndexLink,
  StIndexLinkGroup,
} from '@/src/styles/layouts/Start.styled';
import Image from 'next/image';
import { LogIn, UserPlus } from 'react-feather';

export default function StartPage() {
  return (
    <StIndexLayout>
      <StIndexLogoBox>
        <Image
          src={logo}
          fill
          sizes='100vw, (min-width: 769px) 42vw'
          priority
          alt='logo'
        />
      </StIndexLogoBox>
      <StIndexLinkGroup>
        <StIndexLink href='/login'>
          <MobilePortrait>Get started</MobilePortrait>
          <LogIn />
        </StIndexLink>
        <StIndexLink href='/signup'>
          <MobilePortrait>Register</MobilePortrait>
          <UserPlus />
        </StIndexLink>
      </StIndexLinkGroup>
    </StIndexLayout>
  );
}
