import { notFound } from "next/navigation";
import EntitySurfaceTemplate from "../../components/surfaces/EntitySurfaceTemplate";
import {
  buildEntityLinks,
  getEntity,
  listEntitySlugs,
} from "../../lib/clinicalGraph";

export function generateStaticParams() {
  return listEntitySlugs("conditions").map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const condition = getEntity("conditions", params.slug);
  if (!condition) {
    return { title: "Condition | Not Found" };
  }
  return {
    title: `${condition.title} | Condition`,
    description: condition.summary,
  };
}

export default function ConditionEntityPage({ params }) {
  const condition = getEntity("conditions", params.slug);
  if (!condition) {
    notFound();
  }

  return (
    <EntitySurfaceTemplate
      kicker="Condition Surface"
      title={condition.title}
      copy={condition.summary}
      relatedCards={[
        {
          title: "Typical Procedures",
          links: buildEntityLinks("procedures", condition.typicalProcedures),
        },
        {
          title: "Related Comparisons",
          links: buildEntityLinks("comparisons", condition.relatedComparisons),
        },
      ]}
      entityType="condition"
      entitySlug={condition.slug}
      stage="awareness"
    />
  );
}
