import { HashLoader } from 'react-spinners';
import { Message, StSpinnerContainer } from './ImageLoading.styled';
import { CSSProperties } from 'styled-components';

interface ILoadingProps {
  size?: number;
  color?: `#${string}`;
  loading?: boolean;
  cssOverride?: CSSProperties;
  speedMultiplier?: number;
  message: string;
}

export default function ImageLoading({
  size = 40,
  color = '#bababa',
  loading = true,
  cssOverride = {},
  speedMultiplier = 1,
  message = '',
}: ILoadingProps) {
  return (
    <StSpinnerContainer>
      <HashLoader
        size={size}
        color={color}
        loading={loading}
        cssOverride={cssOverride}
        speedMultiplier={speedMultiplier}
      />
      <Message>{message}</Message>
    </StSpinnerContainer>
  );
}
