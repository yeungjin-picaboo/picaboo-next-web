import { StLayout, StContainer } from '@/src/styles/layouts/layout.style';
import { IsProps } from '@/src/types/props.interface';
import ubuntu from '@/src/utils/font/ubuntu';
import Header from './Header';

export default function Layout({ children }: IsProps) {
  return (
    <StLayout>
      <StContainer>
        <Header />
        <div className={ubuntu.className}>{children}</div>
      </StContainer>
    </StLayout>
  );
}
