import Link from 'next/link';
import { LogOut, Shield } from 'react-feather';
import { UserCircle } from 'tabler-icons-react';
import Navigation from '../Navigation/Navigation';
import {
  StDropdown,
  StDropdownItem,
  StDropdownMenu,
  StHeader,
  StLogo,
  StMenu,
} from './Header.styled';
import useHeader from '@/hooks/useHeader';
import comforterBrush from '@/styles/fonts/comforterBrush';

export default function Header() {
  const { route, isOpen, dropdownRef, handleDropdown, handleLogout } =
    useHeader();

  return (
    <StHeader>
      <StLogo className={comforterBrush.className}>Picaboo</StLogo>
      <StMenu>
        <Navigation route={route} list={['diary', 'stats', 'nfts', 'qna']} />
        <StDropdownMenu ref={dropdownRef}>
          <UserCircle
            onClick={handleDropdown}
            size={36}
            strokeWidth={1}
            color={'white'}
          />
          {isOpen && (
            <StDropdown>
              <StDropdownItem>
                <Shield size={20} />
                <Link href='/account'>Account</Link>
              </StDropdownItem>
              <StDropdownItem onClick={handleLogout}>
                <LogOut size={20} />
                Logout
              </StDropdownItem>
            </StDropdown>
          )}
        </StDropdownMenu>
      </StMenu>
    </StHeader>
  );
}
