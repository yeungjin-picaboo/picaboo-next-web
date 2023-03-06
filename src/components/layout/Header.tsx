import { logoutFn } from '@/src/api/accountApi';
import {
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
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  // 로그아웃
  // const { mutate } = useMutation(logoutFn, {
  //   onSuccess: data => {
  //     alert(data.message);
  //     router.push('/');
  //   },
  //   onError: (error: AxiosError) => {
  //     alert(error.message);
  //   },
  // });

  return (
    <StHeader>
      <StLogo className={audiowide.className}>Pica</StLogo>
      <StNav className={ubuntu.className}>
        <StNavItem current={router.route === '/diary'}>
          <Link href='/diary'>Diary</Link>
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
        <StNavItem>
          <UserCircle size={36} strokeWidth={1} color={'white'} />
        </StNavItem>
      </StNav>
    </StHeader>
  );
}
