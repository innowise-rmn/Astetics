import { activeCases } from "../mockData";

export default function ProviderCasesPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="brief-kicker">Provider Cases</p>
        <h1 className="brief-section-title">Case Library</h1>
        <p className="brief-section-copy">
          Mocked list of provider-accessible cases (row-level ownership behavior
          to be wired later).
        </p>
      </section>

      <section>
        <article className="brief-card">
          <h2 className="brief-card-title">My Cases</h2>
          <ul className="mt-4 space-y-3 text-sm text-brief-muted">
            {activeCases.map((item) => (
              <li key={item.id} className="rounded-md border border-brief-line p-3">
                <p className="text-brief-ink">
                  {item.id} · {item.patientAlias}
                </p>
                <p>{item.complication}</p>
                <p>
                  {item.status} · Updated {item.updatedAt}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
