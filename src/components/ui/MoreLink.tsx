import { Link } from 'react-router-dom';

type MoreLinkProps = {
  to: string;
  label?: string;
};

const MoreLink = ({ to, label = 'MORE' }: MoreLinkProps) => (
  <div className="c-more">
    <Link to={to} className="c-more__link group">
      <span className="c-more__text">{label}</span>
      <span className="c-more__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  </div>
);

export default MoreLink;
