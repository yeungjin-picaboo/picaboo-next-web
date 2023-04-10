import { MutableRefObject, useState } from 'react';

export default function useViewToggle(
  inputRef: MutableRefObject<HTMLInputElement | null>
) {
  const [visible, setVisible] = useState(false);
  const handleIconClick = () => {
    inputRef.current!.type = visible ? 'password' : 'text';
    setVisible(!visible);
  };

  return { visible, handleIconClick };
}
