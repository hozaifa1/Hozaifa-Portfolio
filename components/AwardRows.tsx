import Image from 'next/image';
import { awards } from '@/lib/academic';

export default function AwardRows({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="award-list">
      {awards.map((award) => (
        <article key={award.slug} className="edu-block">
          <div className="edu-left">
            <div className="edu-label">{detailed ? award.date : award.shortDate}</div>
          </div>
          <div className="edu-right">
            {detailed ? (
              <h2 className="award-title">{award.title}</h2>
            ) : (
              <h3 className="award-title">{award.title}</h3>
            )}
            <p className="award-organiser">{award.organiser}</p>
            <p className="award-text">{detailed ? award.built : award.summary}</p>
            {detailed ? (
              <div className="award-numbers">
                {award.numbers.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            ) : null}
            {award.sourceHref ? (
              <p className="award-text" style={{ marginTop: '14px' }}>
                <a
                  className="text-link"
                  href={award.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Source for ${award.title}: ${award.sourceLabel} (opens in a new tab)`}
                >
                  Source: {award.sourceLabel} {'↗'}
                </a>
              </p>
            ) : null}
            {detailed && award.image ? (
              <a
                className="award-shot"
                href={award.sourceHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={award.image.src}
                  alt={award.image.alt}
                  width={award.image.width}
                  height={award.image.height}
                  sizes="(max-width: 960px) 100vw, 640px"
                />
              </a>
            ) : null}
            {detailed && award.href ? (
              <p className="award-text" style={{ marginTop: '14px' }}>
                <a className="text-link" href={award.href} target="_blank" rel="noreferrer">
                  {award.href.replace('https://', '')}
                </a>
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
