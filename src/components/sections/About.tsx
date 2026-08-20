import PageShell from '../PageShell';
import { education, skills } from '../../data/portfolio';

const About = () => (
  <PageShell>
    <section className="l-section">
      <div className="l-section__sidebar" aria-hidden="true" />
      <div className="l-inner">
        <div className="p-about">
          <h2 className="l-section__title font-eng reveal-mask">About</h2>

          <div className="p-about__content">
            <div className="p-about__intro reveal-item" style={{ '--reveal-delay': '0.4s' } as React.CSSProperties}>
              <p className="p-about__text">
                I'm a software engineer focused on full-stack development and AI-powered
                applications. I enjoy building products that are both technically robust and
                thoughtfully designed — from production features at startups to research in
                computer vision and machine learning.
              </p>
            </div>

            <div
              className="p-about__block reveal-item"
              style={{ '--reveal-delay': '0.55s' } as React.CSSProperties}
            >
              <h3 className="p-about__heading font-eng">Education</h3>
              <ul className="p-about__list">
                {education.map((edu) => (
                  <li key={edu.school} className="p-about__list-item">
                    <div className="p-about__list-head">
                      <span className="p-about__list-title">{edu.school}</span>
                      <span className="p-about__list-date font-eng">{edu.date}</span>
                    </div>
                    <p className="p-about__list-sub">
                      {edu.degree} · {edu.location}
                    </p>
                    {edu.coursework && <p className="p-about__list-detail">{edu.coursework}</p>}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-about__block reveal-item"
              style={{ '--reveal-delay': '0.7s' } as React.CSSProperties}
            >
              <h3 className="p-about__heading font-eng">Skills</h3>
              <div className="p-about__skills">
                {skills.map((skill) => (
                  <div key={skill.category} className="p-about__skill">
                    <span className="p-about__skill-cat font-eng">{skill.category}</span>
                    <span className="p-about__skill-items">{skill.items}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default About;
