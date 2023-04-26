import { useEffect, useRef, useState } from 'react';

const useInterval = (callback: () => unknown, delay: number | null) => {
  const savedCallback = useRef(callback);
  const [timeId, setTimeId] = useState<NodeJS.Timer>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) {
      return;
    }

    const timeId = setInterval(() => savedCallback.current(), delay);
    setTimeId(timeId);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(timeId);
  }, [delay]);
};

export default useInterval;
