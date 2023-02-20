import { MutableRefObject, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

export default function VisibilityIcon({
  _ref,
}: {
  _ref: MutableRefObject<HTMLInputElement | null>;
}) {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    _ref.current!.type = visible ? 'password' : 'text';
    setVisible(!visible);
  };
  return (
    <>
      {visible && <Eye onClick={handleClick} />}
      {!visible && <EyeOff onClick={handleClick} />}
    </>
  );
}
