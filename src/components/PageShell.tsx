import { useEffect } from 'react';
import { usePageEnter } from '../hooks/usePageEnter';

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

const PageShell = ({ children, className = '' }: PageShellProps) => {
  const entered = usePageEnter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`l-page ${className} ${entered ? 'on-enter' : ''}`.trim()}>{children}</div>
  );
};

export default PageShell;
