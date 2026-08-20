import type { CategoryTag } from '../../data/portfolio';

type ListItemProps = {
  year: string;
  dateLabel?: string;
  title: string;
  category: CategoryTag;
  staggerIndex?: number;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const categoryColors: Record<CategoryTag, string> = {
  WORK: 'tag-work',
  PROJECT: 'tag-project',
  RESEARCH: 'tag-research',
  EDUCATION: 'tag-education',
};

const ListItem = ({
  year,
  dateLabel,
  title,
  category,
  staggerIndex,
  href,
  onClick,
}: ListItemProps) => {
  const staggerStyle =
    staggerIndex !== undefined
      ? ({ '--reveal-delay': `${0.45 + staggerIndex * 0.15}s` } as React.CSSProperties)
      : undefined;

  const content = (
    <div className="p-news_item__inner">
      <div className="p-news_item__content">
          <div className="p-news_item__date">
            <div className="p-news_item__date-ym">
              <span className="p-news_item__date-ym-text">{dateLabel ?? year}</span>
            </div>
        </div>
        <div className="p-news_item__title">
          <span className="p-news_item__title-text">{title}</span>
        </div>
        <div className="p-news_item__category">
          <span className={`p-news_item__category-tag ${categoryColors[category]}`}>
            {category}
          </span>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <li className="p-news_item reveal-stagger" style={staggerStyle}>
        <a href={href} className="p-news_item__link" onClick={onClick}>
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="p-news_item reveal-stagger" style={staggerStyle}>
      {content}
    </li>
  );
};

export default ListItem;
