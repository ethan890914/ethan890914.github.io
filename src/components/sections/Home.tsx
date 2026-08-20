import { Link } from 'react-router-dom';
import { profile } from '../../data/portfolio';
import MoreLink from '../ui/MoreLink';

const Home = () => (
  <section className="p-hero">
    <div className="p-hero__content">
      <div className="p-hero__text">
        <p className="p-hero__subtitle font-eng reveal-item" style={{ '--reveal-delay': '0.3s' } as React.CSSProperties}>
          Portfolio
        </p>
        <h1 className="p-hero__title font-eng reveal-mask" style={{ '--reveal-delay': '0.5s' } as React.CSSProperties}>
          Yi-Han (Ethan) Ding
        </h1>
        <p className="p-hero__role font-eng reveal-item" style={{ '--reveal-delay': '0.8s' } as React.CSSProperties}>
          {profile.title}
        </p>
        <p className="p-hero__desc reveal-item" style={{ '--reveal-delay': '1s' } as React.CSSProperties}>
          {profile.tagline}
        </p>
      </div>
      <div className="p-hero__more reveal-item" style={{ '--reveal-delay': '1.2s' } as React.CSSProperties}>
        <MoreLink to="/about" label="MORE" />
      </div>
    </div>
    <div className="p-hero__scroll-hint font-eng reveal-item" style={{ '--reveal-delay': '1.5s' } as React.CSSProperties}>
      <Link to="/experience" className="p-hero__scroll-btn">
        <span>Explore</span>
        <span className="p-hero__scroll-line" />
      </Link>
    </div>
  </section>
);

export default Home;
