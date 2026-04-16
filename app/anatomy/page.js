import { SectionIntro, SiteFrame } from "../components/SiteFrame";
import { imageLibrary } from "../siteContent";

const anatomyAreas = [
  "Face and profile balancing",
  "Chin and jawline contour",
  "Body sculpting zones",
  "Breast and silhouette enhancement",
];

export const metadata = {
  title: "Anatomy | Beso Aesthetics",
};

export default function AnatomyPage() {
  return (
    <SiteFrame>
      <SectionIntro
        kicker="Anatomy"
        title="Treatment Zones"
        copy="A high-level view of anatomical regions highlighted in Beso's public service categories."
      />
      <img
        className="brief-image mt-8"
        src={imageLibrary.serviceB}
        alt="Anatomy zone visual"
      />
      <div className="brief-divider" />
      <section className="brief-grid">
        {anatomyAreas.map((area) => (
          <article key={area} className="brief-card">
            <h2 className="brief-card-title">Zone</h2>
            <p className="brief-card-copy">{area}</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
