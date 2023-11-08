import { meiryo } from '@/styles/fonts/font';
import Link from 'next/link';
import { StNav, StNavItem } from './Navigation.styled';
import { useTranslation } from 'next-i18next';

interface INavigationProps {
  route: string;
  list: Array<string>;
}

export default function Navigation({ route, list }: INavigationProps) {
  const { t } = useTranslation('header');

  return (
    <StNav className={meiryo.className}>
      {list.map(el => (
        <StNavItem key={el} current={route.startsWith(`/${el}`)}>
          <Link href={`/${el}`}>
            {t(el).charAt(0).toUpperCase() + t(el).slice(1)}
          </Link>
        </StNavItem>
      ))}
    </StNav>
  );
}
