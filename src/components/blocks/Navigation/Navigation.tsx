import ubuntu from '@/styles/fonts/ubuntu';
import Link from 'next/link';
import { StNav, StNavItem } from './Navigation.styled';

interface INavigationProps {
  route: string;
  list: Array<string>;
}

export default function Navigation({ route, list }: INavigationProps) {
  return (
    <StNav className={ubuntu.className}>
      {list.map(el => (
        <StNavItem key={el} current={route.startsWith(`/${el}`)}>
          <Link href={`/${el}`}>
            {el.charAt(0).toUpperCase() + el.slice(1)}
          </Link>
        </StNavItem>
      ))}
    </StNav>
  );
}
