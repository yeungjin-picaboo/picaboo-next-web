import { StLayout, StContent, StSmallContent } from './Layout.styled';
import Header from '../Header/Header';
import IProps from '@/types/IProps';
import { meiryo } from '@/styles/fonts/font';

interface ILayoutProps extends IProps {
  type: 'default' | 'small';
}

export default function Layout({ children, type }: ILayoutProps) {
  return (
    <StLayout>
      <Header />
      {type === 'default' && (
        <StContent className={meiryo.className}>{children}</StContent>
      )}
      {type === 'small' && (
        <StSmallContent className={meiryo.className}>{children}</StSmallContent>
      )}
    </StLayout>
  );
}
