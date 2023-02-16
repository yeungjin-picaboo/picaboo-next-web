import { MutableRefObject } from 'react';
import { X } from 'react-feather';

export default function ResetIcon({
  _ref,
}: {
  _ref: MutableRefObject<HTMLInputElement | null>;
}) {
  const handleClick = () => {
    _ref.current!.value = '';
  };
  return <X onClick={handleClick}></X>;
}
