import { SectionIntro, SiteFrame } from "../components/SiteFrame";
import { imageLibrary } from "../siteContent";

const complicationFocus = [
  "Cellulite texture and contour irregularities",
  "Localized fullness (chin, buffalo hump, body)",
  "Facial volume balance and profile harmony",
  "Post-procedure planning and expectations",
];

export const metadata = {
  title: "Complications | Beso Aesthetics",
};

export default function ComplicationsPage() {
  return (
    <SiteFrame>
      <SectionIntro
        kicker="Complications"
        title="Targeted Aesthetic Concerns"
        copy="This public page groups common concern categories reflected in the featured Beso treatment lineup."
      />
      <img
        className="brief-image mt-8"
        src={imageLibrary.serviceD}
        alt="Complications overview visual"
      />
      <div className="brief-divider" />
      <section className="brief-grid">
        {complicationFocus.map((item) => (
          <article key={item} className="brief-card">
            <h2 className="brief-card-title">Concern Area</h2>
            <p className="brief-card-copy">{item}</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
