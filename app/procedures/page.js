import { SectionIntro, SiteFrame } from "../components/SiteFrame";
import {
  bodyServices,
  featuredServices,
  imageLibrary,
  liposuctionServices,
} from "../siteContent";

export const metadata = {
  title: "Procedures | Beso Aesthetics",
};

export default function ProceduresPage() {
  return (
    <SiteFrame>
      <SectionIntro
        kicker="Procedures"
        title="Public Service Library"
        copy="These procedure groups are based on the treatments listed on the Beso homepage: featured services, body services, and liposuction-focused offerings."
      />

      <div className="brief-divider" />

      <section>
        <p className="brief-kicker">Featured</p>
        <h2 className="brief-section-title">Top Requested</h2>
        <div className="brief-grid mt-6">
          {featuredServices.map((service, index) => (
            <article key={service} className="brief-card">
              <img
                className="brief-card-image"
                src={
                  [
                    imageLibrary.serviceA,
                    imageLibrary.serviceB,
                    imageLibrary.serviceC,
                    imageLibrary.serviceD,
                    imageLibrary.serviceE,
                  ][index % 5]
                }
                alt={`${service} procedure`}
              />
              <h3 className="brief-card-title">{service}</h3>
              <p className="brief-card-copy">
                Non-surgical treatment path tailored to individual goals.
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="brief-divider" />

      <section className="brief-grid">
        <article className="brief-card">
          <h2 className="brief-card-title">Body</h2>
          <ul className="mt-3 space-y-2 text-sm text-brief-muted">
            {bodyServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </article>
        <article className="brief-card">
          <h2 className="brief-card-title">Liposuction</h2>
          <ul className="mt-3 space-y-2 text-sm text-brief-muted">
            {liposuctionServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </article>
      </section>
    </SiteFrame>
  );
}
