import {
  LoadingText,
  StSpinnerContainer,
} from '@/src/styles/common/Loading.styled';
import { BeatLoader } from 'react-spinners';

export default function Loading({
  size = 15,
  color = '#000000',
  loading = true,
  cssOverride = {},
  speedMultiplier = 1,
  message = '',
}) {
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
      <LoadingText>{message}</LoadingText>
    </StSpinnerContainer>
  );
}
