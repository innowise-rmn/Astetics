import { SectionIntro, SiteFrame } from "../../components/SiteFrame";
import { imageLibrary } from "../../siteContent";

const publicAssets = [
  "Featured treatment thumbnails",
  "Before-and-after preview media (public variants)",
  "Homepage promotional visual assets",
  "Academy and procedure hero assets",
];

export const metadata = {
  title: "R2 Public | Beso Aesthetics",
};

export default function R2PublicPage() {
  return (
    <SiteFrame>
      <SectionIntro
        kicker="R2 / Beso Public"
        title="Public Media Surface"
        copy="This route represents public, non-auth media that can be CDN-served for marketing and informational pages."
      />
      <img
        className="brief-image mt-8"
        src={imageLibrary.featuredA}
        alt="Public media sample"
      />
      <div className="brief-divider" />
      <section className="brief-grid">
        {publicAssets.map((asset) => (
          <article key={asset} className="brief-card">
            <h2 className="brief-card-title">Public Asset</h2>
            <p className="brief-card-copy">{asset}</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
