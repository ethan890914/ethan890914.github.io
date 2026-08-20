import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/portfolio";
import githubSVG from "../assets/github.svg";
import linkedinSVG from "../assets/linkedin.svg";
import emailSVG from "../assets/email.svg";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

type NavbarProps = {
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

const Navbar = ({ isDarkMode, onToggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHero = location.pathname === "/";

  const isLinkActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      <div className={`l-logo ${isHero ? "on-hero" : ""}`}>
        <Link
          to="/"
          className="l-logo__link font-eng font-light tracking-widest text-sm md:text-base"
        >
          {profile.name}
        </Link>
      </div>

      <nav className={`l-nav hidden md:block ${isHero ? "on-hero" : ""}`}>
        <ul className="l-nav__list">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`l-nav__list-item ${isLinkActive(link.path) ? "is-current" : ""}`}
            >
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className="l-nav__link"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className={`l-theme-toggle ${isHero ? "on-hero" : ""}`}
        onClick={onToggleTheme}
        aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        aria-pressed={isDarkMode}
      >
        <span aria-hidden="true">{isDarkMode ? "☼" : "☾"}</span>
        <span>{isDarkMode ? "Light" : "Dark"}</span>
      </button>

      <aside className={`l-sns hidden md:block ${isHero ? "on-hero" : ""}`}>
        <ul className="l-sns__list">
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="l-sns__link"
            >
              <img
                src={githubSVG}
                alt="GitHub"
              />
            </a>
          </li>
          <li>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="l-sns__link"
            >
              <img
                src={linkedinSVG}
                alt="LinkedIn"
              />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="l-sns__link">
              <img
                src={emailSVG}
                alt="Email"
              />
            </a>
          </li>
        </ul>
      </aside>

      <button
        className={`l-ham md:hidden ${isMenuOpen ? "menu-open" : ""} ${isHero ? "on-hero" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      />

      <div className={`l-menu md:hidden ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="l-menu__wrapper">
          <div className="l-menu__inner">
            <nav className="l-menu__nav">
              <ul className="l-menu__nav-list">
                {navLinks.map((link) => (
                  <li key={link.name} className="l-menu__nav-list-item">
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className="l-menu__nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="l-menu__sns">
              <ul className="l-menu__sns-list">
                <li>
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`}>Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
