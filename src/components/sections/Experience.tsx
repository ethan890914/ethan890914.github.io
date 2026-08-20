import { useState } from 'react';
import PageShell from '../PageShell';
import { experience } from '../../data/portfolio';
import ListItem from '../ui/ListItem';
import MoreLink from '../ui/MoreLink';
import { media } from '../../data/portfolio';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(0);
  const current = experience[activeExperience ?? 0];
  const currentIndex = activeExperience ?? 0;

  return (
    <PageShell>
      <section className="p-news_top">
        <div className="p-news_top__inner">
          <div className="p-news_top__content">
            <div className="p-news_top__head">
              <h2 className="p-news_top__title font-eng reveal-mask">Experience</h2>
              <div className="p-news_top__more reveal-item" style={{ '--reveal-delay': '0.5s' } as React.CSSProperties}>
                <MoreLink to="/projects" />
              </div>
            </div>

            <div className="p-news_top__body">
              <ul className="p-news_top__list">
                {experience.map((exp, index) => (
                  <ListItem
                    key={exp.title}
                    year={exp.year}
                    dateLabel={exp.year}
                    title={exp.title}
                    category={exp.category}
                    staggerIndex={index}
                    href={`#exp-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveExperience(index);
                    }}
                  />
                ))}
              </ul>

              {activeExperience !== null && <div className="p-projects__showcase p-exp-showcase reveal-item">
                <div className="p-projects__showcase-inner">
                  <div className="p-projects__showcase-head">
                    <span className="p-projects__showcase-index font-eng">
                      {String(activeExperience + 1).padStart(2, '0')}
                    </span>
                    <span className="p-projects__showcase-total font-eng">
                      / {String(experience.length).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="p-projects__showcase-title">{current.title}</h3>
                  <p className="p-projects__showcase-sub font-eng">
                    {current.company} · {current.location} · {current.period}
                  </p>
                  <ul className="p-projects__showcase-list">
                    {current.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {activeExperience === 0 && (
                    <div className="p-exp-showcase__video">
                      <p className="p-exp-showcase__video-label font-eng">Heptabase experience</p>
                      <div className="p-media__frame">
                        <iframe
                          src={media.heptabaseExperienceUrl}
                          title="Heptabase experience"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                  <div className="p-projects__showcase-nav">
                    <button type="button" onClick={() => setActiveExperience(currentIndex > 0 ? currentIndex - 1 : experience.length - 1)} className="p-projects__nav-btn font-eng">
                      ← Prev
                    </button>
                    <button type="button" onClick={() => setActiveExperience(currentIndex < experience.length - 1 ? currentIndex + 1 : 0)} className="p-projects__nav-btn font-eng">
                      Next →
                    </button>
                  </div>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Experience;
