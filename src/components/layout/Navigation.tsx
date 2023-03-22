import { StNav, StNavItem } from '@/src/styles/layouts/Layout.styled';
import { IsNavigationProps } from '@/src/types/props.interface';
import { ubuntu } from '@/src/utils/font';
import Link from 'next/link';

export default function Navigation({ route, list }: IsNavigationProps) {
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
