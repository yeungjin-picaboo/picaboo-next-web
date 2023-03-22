import { logoutFn } from '@/src/api/accountApi';
import useDropdown from '@/src/hooks/useDropdown';
import {
  StDropdown,
  StDropdownItem,
  StDropdownMenu,
  StHeader,
  StLogo,
  StMenu,
  StNav,
  StNavItem,
} from '@/src/styles/layouts/Layout.styled';
import audiowide from '@/src/utils/font/audiowide';
import ubuntu from '@/src/utils/font/ubuntu';
import Link from 'next/link';
import { LogOut, Shield } from 'react-feather';
import { UserCircle } from 'tabler-icons-react';
import { AxiosError } from 'axios';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import Navigation from './Navigation';

export default function Header() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useDropdown(dropdownRef);
  const { mutate } = useMutation(logoutFn, {
    onSuccess: data => {
      alert(data.message);
      router.push('/');
    },
    onError: (error: AxiosError) => {
      alert(error.message);
    },
  });

  return (
    <StHeader>
      <StLogo className={audiowide.className}>Pica</StLogo>
      <StMenu>
        <Navigation
          route={router.route}
          list={['diaries', 'stats', 'nfts', 'qna']}
        />
        <StDropdownMenu ref={dropdownRef}>
          <UserCircle
            onClick={() => setIsOpen(!isOpen)}
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
              <StDropdownItem onClick={() => mutate()}>
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
