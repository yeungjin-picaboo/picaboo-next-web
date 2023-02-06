import { IProps } from '@/src/types/common.interface';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Responsive = ({ children }: IProps) => {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPc, setIsPc] = useState(false);

  const mobilePortrait = useMediaQuery({
    query: '(max-width:480px)',
  });
  const mobileLandscape = useMediaQuery({
    query: '(min-width:481px) and (max-width:768px)',
  });
  const tablet = useMediaQuery({
    query: '(min-width:769px) and (max-width:1199px)',
  });
  const pc = useMediaQuery({
    query: '(min-width:1200px)',
  });

  useEffect(() => {
    setIsMobilePortrait(mobilePortrait);
    setIsMobileLandscape(mobileLandscape);
    setIsTablet(tablet);
    setIsPc(pc);
  }, [mobileLandscape, mobilePortrait, pc, tablet]);

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
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);

  const mobilePortrait = useMediaQuery({
    query: '(max-width:480px)',
  });

  useEffect(() => {
    setIsMobilePortrait(mobilePortrait);
  }, [mobilePortrait]);

  return <>{isMobilePortrait && children}</>;
};

export const MobileLandscape = ({ children }: IProps) => {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  const mobileLandscape = useMediaQuery({
    query: '(min-width:481px) and (max-width:768px)',
  });

  useEffect(() => {
    setIsMobileLandscape(mobileLandscape);
  }, [mobileLandscape]);

  return <>{isMobileLandscape && children}</>;
};

export const Tablet = ({ children }: IProps) => {
  const [isTablet, setIsTablet] = useState(false);

  const tablet = useMediaQuery({
    query: '(min-width:769px) and (max-width:1199px)',
  });

  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);

  return <>{isTablet && children}</>;
};

export const PC = ({ children }: IProps) => {
  const [isPc, setIsPc] = useState(false);

  const pc = useMediaQuery({
    query: '(min-width:1200px)',
  });

  useEffect(() => {
    setIsPc(pc);
  }, [pc]);

  return <>{isPc && children}</>;
};
