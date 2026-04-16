import Link from "next/link";
import { SectionIntro, SiteFrame } from "../SiteFrame";
import ConversionRail from "../primitives/ConversionRail";

export default function EntitySurfaceTemplate({
  kicker,
  title,
  copy,
  infoCards = [],
  relatedCards = [],
  entityType,
  entitySlug,
  stage,
  children,
}) {
  const visibleRelatedCards = relatedCards.filter((card) => card.links.length > 0);

  return (
    <SiteFrame>
      <SectionIntro kicker={kicker} title={title} copy={copy} />

      {infoCards.length > 0 ? (
        <>
          <div className="brief-divider" />
          <section className="brief-grid">
            {infoCards.map((card) => (
              <article key={card.title} className="brief-card">
                <h2 className="brief-card-title">{card.title}</h2>
                {card.copy ? <p className="brief-card-copy mt-3">{card.copy}</p> : null}
                {card.items ? (
                  <ul className="mt-3 space-y-2 text-sm text-brief-muted">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </section>
        </>
      ) : null}

      {visibleRelatedCards.length > 0 ? (
        <>
          <div className="brief-divider" />
          <section className="brief-grid">
            {visibleRelatedCards.map((card) => (
              <article key={card.title} className="brief-card">
                <h2 className="brief-card-title">{card.title}</h2>
                <ul className="mt-3 space-y-2 text-sm text-brief-muted">
                  {card.links.map((link) => (
                    <li key={link.href}>
                      <Link className="brief-nav-link" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </>
      ) : null}

      {children ? (
        <>
          <div className="brief-divider" />
          {children}
        </>
      ) : null}

      <div className="brief-divider" />
      <ConversionRail entityType={entityType} entitySlug={entitySlug} stage={stage} />
    </SiteFrame>
  );
}
