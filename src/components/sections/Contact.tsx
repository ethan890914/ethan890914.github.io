import PageShell from '../PageShell';
import { profile } from '../../data/portfolio';

const Contact = () => (
  <PageShell>
    <section className="l-section">
      <div className="l-section__sidebar" aria-hidden="true" />
      <div className="l-inner">
        <div className="p-contact">
          <h2 className="l-section__title font-eng reveal-mask">Contact</h2>
          <div className="p-contact__content">
            <p
              className="p-contact__intro reveal-item"
              style={{ '--reveal-delay': '0.4s' } as React.CSSProperties}
            >
              Open to full-time opportunities and interesting collaborations. Feel free to reach
              out.
            </p>
            <ul className="p-contact__list">
              {[
                {
                  label: 'Email',
                  value: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  label: 'Phone',
                  value: profile.phone,
                  href: `tel:${profile.phone.replace(/\s/g, '')}`,
                },
                {
                  label: 'Location',
                  value: profile.location,
                },
                {
                  label: 'GitHub',
                  value: profile.social.github.replace('https://', ''),
                  href: profile.social.github,
                  external: true,
                },
                {
                  label: 'LinkedIn',
                  value: profile.social.linkedin.replace('https://', ''),
                  href: profile.social.linkedin,
                  external: true,
                },
              ].map((item, index) => (
                <li
                  key={item.label}
                  className="reveal-item"
                  style={{ '--reveal-delay': `${0.5 + index * 0.1}s` } as React.CSSProperties}
                >
                  <span className="p-contact__label font-eng">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="p-contact__value"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="p-contact__value">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Contact;
