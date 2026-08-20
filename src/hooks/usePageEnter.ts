import { useEffect, useState } from 'react';

export function usePageEnter(delay = 120) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(false);
    const timer = window.setTimeout(() => setEntered(true), delay);
    return () => window.clearTimeout(timer);
  }, []);

  return entered;
}
