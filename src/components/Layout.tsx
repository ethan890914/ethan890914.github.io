import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => setLoaded(true), 80);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`l-wrapper ${loaded ? 'on-load' : ''}`}>
      <Navbar />
      <main className="l-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
