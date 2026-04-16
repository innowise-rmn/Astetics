import { notFound } from "next/navigation";
import EntitySurfaceTemplate from "../../components/surfaces/EntitySurfaceTemplate";
import {
  buildEntityLinks,
  getEntity,
  listEntitySlugs,
} from "../../lib/clinicalGraph";

export function generateStaticParams() {
  return listEntitySlugs("timelines").map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const timeline = getEntity("timelines", params.slug);
  if (!timeline) {
    return { title: "Timeline | Not Found" };
  }
  return {
    title: `${timeline.title} | Timeline`,
    description: "Day-by-day progression surface",
  };
}

export default function TimelineEntityPage({ params }) {
  const timeline = getEntity("timelines", params.slug);
  if (!timeline) {
    notFound();
  }

  return (
    <EntitySurfaceTemplate
      kicker="Timeline Surface"
      title={timeline.title}
      copy="Progression page template rendered from timeline checkpoints."
      relatedCards={[
        {
          title: "Related Procedures",
          links: buildEntityLinks("procedures", timeline.relatedProcedures ?? []),
        },
        {
          title: "Related Complications",
          links: buildEntityLinks(
            "complications",
            timeline.relatedComplications ?? []
          ),
        },
      ]}
      entityType="timeline"
      entitySlug={timeline.slug}
      stage="awareness"
    >
      <section className="brief-card">
        <h2 className="brief-card-title">Progression Checkpoints</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-5">
          {timeline.checkpoints.map((checkpoint) => (
            <article
              key={checkpoint.label}
              className="rounded-md border border-brief-line p-3"
            >
              <p className="text-xs uppercase tracking-display text-brief-accent">
                {checkpoint.label}
              </p>
              <p className="mt-2 text-sm text-brief-muted">{checkpoint.note}</p>
            </article>
          ))}
        </div>
      </section>
    </EntitySurfaceTemplate>
  );
}
