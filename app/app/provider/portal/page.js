import {
  activeCases,
  mediaAccess,
  notifications,
  pendingSubmissions,
  providerSummary,
  recentOutcomes,
} from "../mockData";

export default function ProviderPortalPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="brief-kicker">Provider Portal</p>
        <h1 className="brief-section-title">Clinical Operations Hub</h1>
        <p className="brief-section-copy">
          Mocked provider workspace aligned to the brief: active cases, pending
          submissions, outcomes, media access, and workflow notifications.
        </p>
      </section>

      <section className="brief-grid">
        {providerSummary.metrics.map((metric) => (
          <article key={metric.label} className="brief-card">
            <h2 className="brief-card-title">{metric.label}</h2>
            <p className="mt-3 text-2xl font-semibold text-brief-ink">
              {metric.value}
            </p>
          </article>
        ))}
      </section>

      <section className="brief-grid">
        <article className="brief-card">
          <h2 className="brief-card-title">Active Cases</h2>
          <ul className="mt-4 space-y-3 text-sm text-brief-muted">
            {activeCases.map((item) => (
              <li key={item.id} className="rounded-md border border-brief-line p-3">
                <p className="text-brief-ink">{item.id}</p>
                <p>{item.complication}</p>
                <p>
                  {item.patientAlias} · {item.status} · Updated {item.updatedAt}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article className="brief-card">
          <h2 className="brief-card-title">Pending Submissions</h2>
          <ul className="mt-4 space-y-3 text-sm text-brief-muted">
            {pendingSubmissions.map((item) => (
              <li key={item.id} className="rounded-md border border-brief-line p-3">
                <p className="text-brief-ink">
                  {item.id} · {item.kind}
                </p>
                <p>{item.note}</p>
                <p>Submitted {item.submittedAt}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="brief-grid">
        <article className="brief-card">
          <h2 className="brief-card-title">Recent Outcomes</h2>
          <ul className="mt-4 space-y-3 text-sm text-brief-muted">
            {recentOutcomes.map((item) => (
              <li key={item.id} className="rounded-md border border-brief-line p-3">
                <p className="text-brief-ink">
                  {item.id} · {item.caseId}
                </p>
                <p>
                  Result: {item.result} · Observed {item.observedAt}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article className="brief-card">
          <h2 className="brief-card-title">Clinical Media Access</h2>
          <ul className="mt-4 space-y-3 text-sm text-brief-muted">
            {mediaAccess.map((item) => (
              <li
                key={item.asset}
                className="rounded-md border border-brief-line p-3"
              >
                <p className="text-brief-ink">
                  {item.asset} · {item.type}
                </p>
                <p>{item.access}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section>
        <article className="brief-card">
          <h2 className="brief-card-title">Workflow Notifications</h2>
          <ul className="mt-4 space-y-2 text-sm text-brief-muted">
            {notifications.map((note) => (
              <li key={note} className="rounded-md border border-brief-line p-3">
                {note}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
