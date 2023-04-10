import { StProgress, StProgressBar } from './ProgressBar.styled';

interface IProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress = 0 }: IProgressBarProps) {
  return (
    <StProgressBar>
      <StProgress progress={progress} />
    </StProgressBar>
  );
}
