import { Eye, EyeOff } from 'react-feather';
import { MutableRefObject } from 'react';
import useViewToggle from '@/hooks/useViewToggle';

interface IViewToggleProps {
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

export default function ViewToggle({ inputRef }: IViewToggleProps) {
  const { visible, handleIconClick } = useViewToggle(inputRef);

  return (
    <>
      {visible && <Eye onClick={handleIconClick} />}
      {!visible && <EyeOff onClick={handleIconClick} />}
    </>
  );
}
