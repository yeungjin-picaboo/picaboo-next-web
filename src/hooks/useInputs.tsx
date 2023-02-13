import { ChangeEvent, useCallback, useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const handleReset = useCallback(() => setValue(''), []);
  return {
    value,
    onChange: handleChange,
    handleReset,
  };
};

export default useInput;
