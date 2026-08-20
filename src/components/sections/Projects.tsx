import { useState } from 'react';
import PageShell from '../PageShell';
import { projects } from '../../data/portfolio';
import ListItem from '../ui/ListItem';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const current = projects[activeProject];

  return (
    <PageShell>
      <section className="p-projects">
        <div className="p-projects__inner">
          <div className="p-projects__content">
            <div className="p-projects__head">
              <h2 className="p-projects__title font-eng reveal-mask">Projects</h2>
            </div>

            <div className="p-projects__body">
              <ul className="p-news_top__list">
                {projects.map((project, index) => (
                  <ListItem
                    key={project.title}
                    year={project.year}
                    dateLabel={project.year}
                    title={project.title}
                    category={project.category}
                    staggerIndex={index}
                    href={`#project-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveProject(index);
                    }}
                  />
                ))}
              </ul>

              <div
                className="p-projects__showcase reveal-item"
                style={{ '--reveal-delay': '0.6s' } as React.CSSProperties}
              >
                <div className="p-projects__showcase-inner">
                  <div className="p-projects__showcase-head">
                    <span className="p-projects__showcase-index font-eng">
                      {String(activeProject + 1).padStart(2, '0')}
                    </span>
                    <span className="p-projects__showcase-total font-eng">
                      / {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="p-projects__showcase-title">{current.title}</h3>
                  {current.subtitle && (
                    <p className="p-projects__showcase-sub font-eng">{current.subtitle}</p>
                  )}
                  <p className="p-projects__showcase-period font-eng">{current.period}</p>
                  {current.github && (
                    <a
                      className="p-projects__github font-eng"
                      href={current.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                  <ul className="p-projects__showcase-list">
                    {current.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="p-projects__showcase-nav">
                    <button
                      type="button"
                      onClick={() => setActiveProject((p) => (p > 0 ? p - 1 : projects.length - 1))}
                      className="p-projects__nav-btn font-eng"
                      aria-label="Previous project"
                    >
                      ← Prev
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveProject((p) => (p < projects.length - 1 ? p + 1 : 0))}
                      className="p-projects__nav-btn font-eng"
                      aria-label="Next project"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Projects;
