import { StLayout, StContent, StSmallContent } from './Layout.styled';
import ubuntu from '@/styles/fonts/ubuntu';
import { ReactNode } from 'react';
import Header from '../Header/Header';

interface ILayoutProps {
  children?: ReactNode;
  type: 'default' | 'small';
}

export default function Layout({ children, type }: ILayoutProps) {
  return (
    <StLayout>
      <Header />
      {type === 'default' && (
        <StContent className={ubuntu.className}>{children}</StContent>
      )}
      {type === 'small' && (
        <StSmallContent className={ubuntu.className}>{children}</StSmallContent>
      )}
    </StLayout>
  );
}
