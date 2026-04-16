import { notFound } from "next/navigation";
import EntitySurfaceTemplate from "../../components/surfaces/EntitySurfaceTemplate";
import UltrasoundProofStrip from "../../components/primitives/UltrasoundProofStrip";
import {
  buildEntityLinks,
  getEntity,
  listEntitySlugs,
} from "../../lib/clinicalGraph";

export function generateStaticParams() {
  return listEntitySlugs("procedures").map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const procedure = getEntity("procedures", params.slug);
  if (!procedure) {
    return { title: "Procedure | Not Found" };
  }
  return {
    title: `${procedure.title} | Procedure`,
    description: procedure.summary,
  };
}

export default function ProcedureEntityPage({ params }) {
  const procedure = getEntity("procedures", params.slug);
  if (!procedure) {
    notFound();
  }

  return (
    <EntitySurfaceTemplate
      kicker="Procedure Surface"
      title={procedure.title}
      copy={procedure.summary}
      infoCards={[
        {
          title: "Anatomy Zones",
          items: procedure.anatomyZones,
        },
      ]}
      relatedCards={[
        {
          title: "Related Conditions",
          links: buildEntityLinks("conditions", procedure.relatedConditions),
        },
        {
          title: "Related Complications",
          links: buildEntityLinks("complications", procedure.relatedComplications),
        },
      ]}
      entityType="procedure"
      entitySlug={procedure.slug}
      stage="consideration"
    >
      <UltrasoundProofStrip items={procedure.ultrasoundProof} />
    </EntitySurfaceTemplate>
  );
}
