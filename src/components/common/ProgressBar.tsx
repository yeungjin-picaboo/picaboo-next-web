import {
  StProgress,
  StProgressBar,
} from '@/src/styles/common/ProgressBar.styled';

export default function ProgressBar({ progress = 0 }) {
  return (
    <StProgressBar>
      <StProgress progress={progress} />
    </StProgressBar>
  );
}
