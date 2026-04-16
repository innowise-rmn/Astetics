export default function UltrasoundProofStrip({ items }) {
  return (
    <section className="brief-card">
      <p className="brief-kicker">Ultrasound Proof</p>
      <h2 className="brief-section-title mt-2">Evidence Strip</h2>
      <p className="brief-section-copy">
        Reusable trust module designed to appear across patient and provider
        surfaces.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-brief-muted">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-brief-line p-3">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
