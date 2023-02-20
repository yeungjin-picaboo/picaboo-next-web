import { useRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export default function useInputRef(returnState: UseFormRegisterReturn) {
  const currentRef = useRef<HTMLInputElement | null>(null);
  const { ref: inputRef, ...rest } = returnState;
  const ref = (el: any) => {
    inputRef(el);
    currentRef.current = el;
  };

  return { ref, ...rest, currentRef };
}
