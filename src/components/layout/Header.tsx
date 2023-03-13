import { logoutFn } from '@/src/api/accountApi';
import {
  StDropdown,
  StDropdownItem,
  StHeader,
  StLogo,
  StNav,
  StNavItem,
} from '@/src/styles/layouts/layout.style';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { UserCircle } from 'tabler-icons-react';
import audiowide from '@/src/utils/font/audiowide';
import ubuntu from '@/src/utils/font/ubuntu';
import { useRef } from 'react';
import useDropdown from '@/src/hooks/useDropdown';
import { LogOut, Shield } from 'react-feather';

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
      <StNav className={ubuntu.className}>
        <StNavItem current={router.route === '/diary'}>
          <Link href='/diarys'>Diarys</Link>
        </StNavItem>
        <StNavItem current={router.route === '/stats'}>
          <Link href='/stats'>Stats</Link>
        </StNavItem>
        <StNavItem current={router.route === '/nfts'}>
          <Link href='/nfts'>Nfts</Link>
        </StNavItem>
        <StNavItem current={router.route === '/qna'}>
          <Link href='/qna'>QnA</Link>
        </StNavItem>
        <StNavItem ref={dropdownRef}>
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
        </StNavItem>
      </StNav>
    </StHeader>
  );
}
