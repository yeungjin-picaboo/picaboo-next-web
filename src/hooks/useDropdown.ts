import { useState, useEffect, RefObject } from 'react';

export default function useDropdown(
  ref: RefObject<HTMLElement>,
  initialState: boolean = false
) {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  const handleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return [isOpen, setIsOpen, handleOpen] as const;
}
