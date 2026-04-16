import { SectionIntro, SiteFrame } from "../components/SiteFrame";
import { imageLibrary, providerBio } from "../siteContent";

export const metadata = {
  title: "About | Beso Aesthetics",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <SectionIntro
        kicker="About"
        title="Welcome to Beso Aesthetics"
        copy="No matter your personal aesthetic goals, our team is committed to superior care and an unparalleled patient experience centered on trust, beautiful outcomes, and complete transparency."
      />

      <div className="brief-divider" />

      <section>
        <p className="brief-kicker">Provider</p>
        <h2 className="brief-section-title">{providerBio.name}</h2>
        <img
          className="brief-image mt-6"
          src={imageLibrary.provider}
          alt="Provider image"
        />
        <p className="brief-section-copy">{providerBio.description}</p>
      </section>

      <div className="brief-divider" />

      <section className="brief-grid">
        {providerBio.stats.map((stat) => (
          <article key={stat} className="brief-card">
            <h3 className="brief-card-title">Clinical Record</h3>
            <p className="brief-card-copy">{stat}</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
