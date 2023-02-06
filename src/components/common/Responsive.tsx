import { IProps } from '@/src/types/common.interface';
import { useMediaQuery } from 'react-responsive';

export const Responsive = ({ children }: IProps) => {
  const isMobilePortrait = useMediaQuery({
    query: '(max-width:480px)',
  });
  const isMobileLandscape = useMediaQuery({
    query: '(min-width:481px) and (max-width:768px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:769px) and (max-width:1199px)',
  });
  const isPc = useMediaQuery({
    query: '(min-width:1200px)',
  });
  return (
    <>
      {isMobilePortrait && <>{children}</>}
      {isMobileLandscape && <>{children}</>}
      {isTablet && <>{children}</>}
      {isPc && <>{children}</>}
    </>
  );
};

export const MobilePortrait = ({ children }: IProps) => {
  const isMobilePortrait = useMediaQuery({
    query: '(max-width:480px)',
  });
  return <>{isMobilePortrait && children}</>;
};

export const MobileLandscape = ({ children }: IProps) => {
  const isMobileLandscape = useMediaQuery({
    query: '(min-width:481px) and (max-width:768px)',
  });
  return <>{isMobileLandscape && children}</>;
};

export const Tablet = ({ children }: IProps) => {
  const isTablet = useMediaQuery({
    query: '(min-width:769px) and (max-width:1199px)',
  });
  return <>{isTablet && children}</>;
};

export const PC = ({ children }: IProps) => {
  const isPc = useMediaQuery({
    query: '(min-width:1200px)',
  });
  return <>{isPc && children}</>;
};
