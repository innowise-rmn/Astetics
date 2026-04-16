import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionIntro, SiteFrame } from "../../components/SiteFrame";
import { academyArticles, imageLibrary } from "../../siteContent";

export function generateStaticParams() {
  return academyArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = academyArticles.find((item) => item.slug === params.slug);
  if (!article) {
    return { title: "Academy | Not Found" };
  }
  return { title: `${article.title} | Academy` };
}

export default function AcademySlugPage({ params }) {
  const article = academyArticles.find((item) => item.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <SiteFrame>
      <SectionIntro
        kicker="Academy"
        title={article.title}
        copy={article.summary}
      />
      <img
        className="brief-image mt-8"
        src={imageLibrary.galleryA}
        alt="Academy feature visual"
      />

      <div className="brief-divider" />

      <section className="brief-grid">
        {academyArticles.map((item) => (
          <article key={item.slug} className="brief-card">
            <h2 className="brief-card-title">{item.title}</h2>
            <p className="brief-card-copy">{item.summary}</p>
            <Link className="brief-button mt-5" href={`/academy/${item.slug}`}>
              Read Article
            </Link>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
