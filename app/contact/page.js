import { SectionIntro, SiteFrame } from "../components/SiteFrame";
import { contactDetails, imageLibrary } from "../siteContent";

export const metadata = {
  title: "Contact | Beso Aesthetics",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <SectionIntro
        kicker="Contact"
        title="Get In Touch With Us"
        copy="Receive specials and promos, schedule a consultation, or ask the team about your treatment goals."
      />
      <img
        className="brief-image mt-8"
        src={imageLibrary.hero}
        alt="New York location visual"
      />

      <div className="brief-divider" />

      <section className="brief-grid">
        <article className="brief-card">
          <h2 className="brief-card-title">{contactDetails.city}</h2>
          <p className="brief-card-copy">{contactDetails.address}</p>
          <a className="brief-button mt-6" href={contactDetails.phoneHref}>
            {contactDetails.phoneDisplay}
          </a>
        </article>
        <article className="brief-card">
          <h2 className="brief-card-title">Parking Garage Address</h2>
          <p className="brief-card-copy">{contactDetails.parking}</p>
          <p className="brief-card-copy">
            Protected by reCAPTCHA. Privacy and terms apply.
          </p>
        </article>
      </section>
    </SiteFrame>
  );
}
