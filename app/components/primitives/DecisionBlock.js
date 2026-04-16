export default function DecisionBlock({
  question,
  leftLabel,
  leftSignals,
  rightLabel,
  rightSignals,
  answer,
  differential,
}) {
  return (
    <section className="brief-card">
      <p className="brief-kicker">Decision Primitive</p>
      <h2 className="brief-section-title mt-2">{question}</h2>
      <div className="brief-grid mt-6">
        <article className="rounded-md border border-brief-line p-4">
          <h3 className="brief-card-title">{leftLabel}</h3>
          <ul className="mt-3 space-y-2 text-sm text-brief-muted">
            {leftSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-md border border-brief-line p-4">
          <h3 className="brief-card-title">{rightLabel}</h3>
          <ul className="mt-3 space-y-2 text-sm text-brief-muted">
            {rightSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </article>
      </div>
      <div className="mt-6 rounded-md border border-brief-accent/60 bg-brief-panel p-4">
        <p className="brief-card-title">Explicit Answer</p>
        <p className="brief-card-copy mt-2">{answer}</p>
        <p className="brief-card-copy mt-2">{differential}</p>
      </div>
    </section>
  );
}
