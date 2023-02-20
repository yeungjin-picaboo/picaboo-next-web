import { IsProps } from '@/src/types/props.interface';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Responsive = ({ children }: IsProps) => {
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

export const MobilePortrait = ({ children }: IsProps) => {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);

  const mobilePortrait = useMediaQuery({
    query: '(max-width:480px)',
  });

  useEffect(() => {
    setIsMobilePortrait(mobilePortrait);
  }, [mobilePortrait]);

  return <>{isMobilePortrait && children}</>;
};

export const MobileLandscape = ({ children }: IsProps) => {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  const mobileLandscape = useMediaQuery({
    query: '(min-width:481px) and (max-width:768px)',
  });

  useEffect(() => {
    setIsMobileLandscape(mobileLandscape);
  }, [mobileLandscape]);

  return <>{isMobileLandscape && children}</>;
};

export const Tablet = ({ children }: IsProps) => {
  const [isTablet, setIsTablet] = useState(false);

  const tablet = useMediaQuery({
    query: '(min-width:769px) and (max-width:1199px)',
  });

  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);

  return <>{isTablet && children}</>;
};

export const PC = ({ children }: IsProps) => {
  const [isPc, setIsPc] = useState(false);

  const pc = useMediaQuery({
    query: '(min-width:1200px)',
  });

  useEffect(() => {
    setIsPc(pc);
  }, [pc]);

  return <>{isPc && children}</>;
};
