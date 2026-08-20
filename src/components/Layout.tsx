import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  const toggleTheme = () => {
    setIsDarkMode((current) => {
      const next = !current;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    setLoaded(false);
    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => setLoaded(true), 80);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`l-wrapper ${loaded ? 'on-load' : ''} ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main className="l-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
