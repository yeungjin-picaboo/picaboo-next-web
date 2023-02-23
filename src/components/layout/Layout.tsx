import { StLayout, StContent } from '@/src/styles/layouts/layout.style';
import { IsProps } from '@/src/types/props.interface';
import Header from './Header';

export default function Layout({ children }: IsProps) {
  return (
    <StLayout>
      <Header />
      <StContent>{children}</StContent>
    </StLayout>
  );
}
