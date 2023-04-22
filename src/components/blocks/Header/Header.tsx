import Link from 'next/link';
import { LogOut, Shield } from 'react-feather';
import { UserCircle, Wallet } from 'tabler-icons-react';
import Navigation from '../Navigation/Navigation';
import {
  StDropdown,
  StDropdownItem,
  StHeader,
  StHeaderLeft,
  StHeaderRight,
  StLogo,
  StLogoText,
  StUserDropdown,
  StWalletBox,
  StWalletText,
} from './Header.styled';
import useHeader from '@/hooks/useHeader';
import comforterBrush from '@/styles/fonts/comforterBrush';
import Image from 'next/image';
import ubuntu from '@/styles/fonts/ubuntu';

export default function Header() {
  const { route, isOpen, dropdownRef, handleDropdown, handleLogout } =
    useHeader();

  return (
    <StHeader>
      <StHeaderLeft>
        <StLogo href='/diary' className={comforterBrush.className}>
          <Image src='/logo.png' alt='' width={40} height={40} />
          <StLogoText>Picaboo</StLogoText>
        </StLogo>
        <Navigation
          route={route}
          list={['diary', 'stats', 'marketplace', 'qna']}
        />
      </StHeaderLeft>
      <StHeaderRight>
        <StWalletBox>
          <Wallet size={30} strokeWidth={1} />
          <StWalletText className={ubuntu.className}>
            Connect Wallet
          </StWalletText>
        </StWalletBox>
        <StUserDropdown ref={dropdownRef} isOpen={isOpen}>
          <UserCircle onClick={handleDropdown} size={30} strokeWidth={1} />
          {isOpen && (
            <StDropdown>
              <StDropdownItem>
                <Shield size={18} />
                <Link href='/account'>Account</Link>
              </StDropdownItem>
              <StDropdownItem onClick={handleLogout}>
                <LogOut size={18} />
                Logout
              </StDropdownItem>
            </StDropdown>
          )}
        </StUserDropdown>
      </StHeaderRight>
    </StHeader>
  );
}
