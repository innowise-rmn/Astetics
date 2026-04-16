import { notFound } from "next/navigation";
import EntitySurfaceTemplate from "../../components/surfaces/EntitySurfaceTemplate";
import UltrasoundProofStrip from "../../components/primitives/UltrasoundProofStrip";
import {
  buildEntityLinks,
  getEntity,
  listEntitySlugs,
} from "../../lib/clinicalGraph";

export function generateStaticParams() {
  return listEntitySlugs("complications").map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const complication = getEntity("complications", params.slug);
  if (!complication) {
    return { title: "Complication | Not Found" };
  }
  return {
    title: `${complication.title} | Complication`,
    description: complication.summary,
  };
}

export default function ComplicationEntityPage({ params }) {
  const complication = getEntity("complications", params.slug);
  if (!complication) {
    notFound();
  }

  return (
    <EntitySurfaceTemplate
      kicker="Complication Surface"
      title={complication.title}
      copy={complication.summary}
      infoCards={[
        {
          title: "Urgency",
          copy: complication.urgency,
        },
      ]}
      relatedCards={[
        {
          title: "Linked Procedures",
          links: buildEntityLinks("procedures", complication.linkedProcedures),
        },
        {
          title: "Linked Comparisons",
          links: buildEntityLinks("comparisons", complication.linkedComparisons),
        },
      ]}
      entityType="complication"
      entitySlug={complication.slug}
      stage="urgency"
    >
      <UltrasoundProofStrip
        items={[
          "Complication scan is indexed by anatomy zone and severity.",
          "Corrective pathway preserves well-placed product when possible.",
        ]}
      />
    </EntitySurfaceTemplate>
  );
}
