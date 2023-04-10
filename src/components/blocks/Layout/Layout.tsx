import { StLayout, StContainer, StContent } from './Layout.styled';
import ubuntu from '@/styles/fonts/ubuntu';
import { ReactNode } from 'react';
import Header from '../Header/Header';

interface ILayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <StLayout>
      <StContainer>
        <Header />
        <StContent className={ubuntu.className}>{children}</StContent>
      </StContainer>
    </StLayout>
  );
}
