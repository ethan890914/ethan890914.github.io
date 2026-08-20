import { profile } from '../data/portfolio';

const Footer = () => (
  <footer className="l-footer">
    <div className="l-footer__inner">
      <div className="l-footer__sns">
        <ul className="l-footer__sns-list">
          <li className="l-footer__sns-list-item">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="l-footer__sns-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </li>
          <li className="l-footer__sns-list-item">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="l-footer__sns-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </li>
          <li className="l-footer__sns-list-item">
            <a href={`mailto:${profile.email}`} className="l-footer__sns-link" aria-label="Email">
              Email
            </a>
          </li>
        </ul>
      </div>
      <p className="l-footer__title">{profile.name} PORTFOLIO</p>
      <div className="l-footer__copyright">
        <p className="l-footer__copyright-text">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
