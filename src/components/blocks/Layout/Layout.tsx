import { StLayout, StContent, StSmallContent } from './Layout.styled';
import ubuntu from '@/styles/fonts/ubuntu';
import Header from '../Header/Header';
import IProps from '@/types/IProps';

interface ILayoutProps extends IProps {
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
