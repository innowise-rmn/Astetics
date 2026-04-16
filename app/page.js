import Link from "next/link";
import { SectionIntro, SiteFrame } from "./components/SiteFrame";
import ConversionRail from "./components/primitives/ConversionRail";
import UltrasoundProofStrip from "./components/primitives/UltrasoundProofStrip";
import { getHomepageLinks } from "./lib/clinicalGraph";

export default function HomePage() {
  const entryLinks = getHomepageLinks();

  return (
    <SiteFrame>
      <SectionIntro
        kicker="Platform Entry Surface"
        title="Beso Intelligence Platform Prototype"
        copy="This prototype is now structured as a dual ecosystem: patient acquisition surfaces and provider authority surfaces composed from an entity graph."
      />

      <div className="brief-divider" />

      <section>
        <p className="brief-kicker">01 / Ecosystem Split</p>
        <h2 className="brief-section-title">Two ecosystems, one platform</h2>
        <div className="brief-grid mt-6">
          <article className="brief-card">
            <h3 className="brief-card-title">Patient Ecosystem</h3>
            <p className="brief-card-copy">
              Search-first entity surfaces for procedures, conditions,
              complications, comparisons, and timelines.
            </p>
          </article>
          <article className="brief-card">
            <h3 className="brief-card-title">Provider Ecosystem</h3>
            <p className="brief-card-copy">
              Authority surfaces for dashboard workflows, case operations, and
              future academy/atlas/registry modules.
            </p>
            <Link className="brief-button mt-5" href="/app/provider/portal">
              Open Provider Portal
            </Link>
          </article>
        </div>
      </section>

      <div className="brief-divider" />

      <section>
        <p className="brief-kicker">02 / Graph Entry Families</p>
        <h2 className="brief-section-title">Patient page-family prototypes</h2>
        <div className="brief-grid mt-6">
          {entryLinks.map((entry) => (
            <article key={entry.href} className="brief-card">
              <h3 className="brief-card-title">{entry.title}</h3>
              <p className="brief-card-copy">{entry.description}</p>
              <Link className="brief-button mt-5" href={entry.href}>
                Open Surface
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="brief-divider" />

      <UltrasoundProofStrip
        items={[
          "Ultrasound evidence is modeled as a reusable primitive, not one-off media.",
          "Proof surfaces are intended across procedure and complication entities.",
        ]}
      />

      <div className="brief-divider" />

      <ConversionRail entityType="homepage" entitySlug="entry" stage="mixed" />
    </SiteFrame>
  );
}
