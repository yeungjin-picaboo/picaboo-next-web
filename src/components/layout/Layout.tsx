import {
  StLayout,
  StContent,
  StContainer,
} from '@/src/styles/layouts/layout.style';
import { IsProps } from '@/src/types/props.interface';
import Header from './Header';

export default function Layout({ children }: IsProps) {
  return (
    <StLayout>
      <StContainer>
        <Header />
        <StContent>{children}</StContent>
      </StContainer>
    </StLayout>
  );
}
