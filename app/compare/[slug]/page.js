import { notFound } from "next/navigation";
import EntitySurfaceTemplate from "../../components/surfaces/EntitySurfaceTemplate";
import DecisionBlock from "../../components/primitives/DecisionBlock";
import {
  buildEntityLinks,
  getEntity,
  listEntitySlugs,
} from "../../lib/clinicalGraph";

export function generateStaticParams() {
  return listEntitySlugs("comparisons").map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const comparison = getEntity("comparisons", params.slug);
  if (!comparison) {
    return { title: "Comparison | Not Found" };
  }
  return {
    title: `${comparison.title} | Comparison`,
    description: comparison.question,
  };
}

export default function ComparisonEntityPage({ params }) {
  const comparison = getEntity("comparisons", params.slug);
  if (!comparison) {
    notFound();
  }

  return (
    <EntitySurfaceTemplate
      kicker="Comparison Surface"
      title={comparison.title}
      copy="Decision-engine format designed for direct answers and clear differential logic."
      relatedCards={[
        {
          title: "Related Complications",
          links: buildEntityLinks(
            "complications",
            comparison.relatedComplications ?? []
          ),
        },
      ]}
      entityType="comparison"
      entitySlug={comparison.slug}
      stage="decision"
    >
      <DecisionBlock
        question={comparison.question}
        leftLabel={comparison.leftLabel}
        leftSignals={comparison.leftSignals}
        rightLabel={comparison.rightLabel}
        rightSignals={comparison.rightSignals}
        answer={comparison.answer}
        differential={comparison.differential}
      />
    </EntitySurfaceTemplate>
  );
}
