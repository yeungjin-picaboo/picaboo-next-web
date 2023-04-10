import { BeatLoader } from 'react-spinners';
import { Message, StSpinnerContainer } from './Loading.styled';
import { CSSProperties } from 'styled-components';

interface ILoadingProps {
  size?: number;
  color?: `#${string}`;
  loading?: boolean;
  cssOverride?: CSSProperties;
  speedMultiplier?: number;
  message: string;
}

export default function Loading({
  size = 15,
  color = '#000000',
  loading = true,
  cssOverride = {},
  speedMultiplier = 1,
  message = '',
}: ILoadingProps) {
  return (
    <StSpinnerContainer>
      <BeatLoader
        size={size}
        margin={2}
        color={color}
        loading={loading}
        cssOverride={cssOverride}
        speedMultiplier={speedMultiplier}
      />
      <Message>{message}</Message>
    </StSpinnerContainer>
  );
}
