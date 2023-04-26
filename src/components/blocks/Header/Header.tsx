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
import WalletModal from '../WalletModal/WalletModal';

export default function Header() {
  const {
    route,
    isModalOpen,
    isDropdownOpen,
    dropdownRef,
    handleDropdown,
    handleModalOpen,
    handleModalClose,
    handleLogout,
  } = useHeader();

  return (
    <StHeader>
      <StHeaderLeft>
        <StLogo href='/diary' className={comforterBrush.className}>
          <Image src='/logo.png' alt='' width={40} height={40} />
          <StLogoText>Picaboo</StLogoText>
        </StLogo>
        <Navigation
          route={route}
          list={['diary', 'stats', 'marketplace', 'question']}
        />
      </StHeaderLeft>
      <StHeaderRight>
        <StWalletBox onClick={handleModalOpen}>
          <Wallet size={30} strokeWidth={1} />
          <StWalletText className={ubuntu.className}>
            Connect Wallet
          </StWalletText>
        </StWalletBox>
        {isModalOpen && <WalletModal handleClose={handleModalClose} />}
        <StUserDropdown ref={dropdownRef} isOpen={isDropdownOpen}>
          <UserCircle onClick={handleDropdown} size={30} strokeWidth={1} />
          {isDropdownOpen && (
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
