import { logoutFn } from '@/src/api/accountApi';
import {
  StHeader,
  StLogo,
  StNav,
  StNavItem,
} from '@/src/styles/layouts/layout.style';
import { Audiowide } from '@next/font/google';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

export default function Header() {
  const router = useRouter();
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
      <StLogo style={audiowide.style}>Pica</StLogo>
      <StNav>
        <StNavItem current={router.route === '/diary'}>
          <Link href='/diary'>Diary</Link>
        </StNavItem>
        <StNavItem current={router.route === '/stats'}>
          <Link href='/stats'>Stats</Link>
        </StNavItem>
        <StNavItem onClick={() => mutate()}>Logout</StNavItem>
      </StNav>
    </StHeader>
  );
}
