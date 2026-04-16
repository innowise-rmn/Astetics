"use client";

const intents = [
  { id: "book", label: "Book Consult" },
  { id: "call", label: "Call Now" },
  { id: "ask", label: "Ask a Question" },
];

export default function ConversionRail({ entityType, entitySlug, stage }) {
  const handleClick = (intent) => {
    // Temporary instrumentation stub until analytics is wired.
    console.info("conversion_intent", {
      intent,
      entityType,
      entitySlug,
      stage,
      at: new Date().toISOString(),
    });
  };

  return (
    <section className="brief-card">
      <p className="brief-kicker">Conversion Primitive</p>
      <h2 className="brief-section-title mt-2">Context CTA Rail</h2>
      <p className="brief-card-copy mt-3">
        Entity: {entityType} / {entitySlug} - Funnel stage: {stage}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {intents.map((intent) => (
          <button
            key={intent.id}
            type="button"
            className="brief-button"
            onClick={() => handleClick(intent.id)}
          >
            {intent.label}
          </button>
        ))}
      </div>
    </section>
  );
}
