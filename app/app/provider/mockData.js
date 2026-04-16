export const providerSummary = {
  providerName: "Sadyk Fayz, PA-C",
  metrics: [
    { label: "Active Cases", value: 18 },
    { label: "Pending Review", value: 4 },
    { label: "Outcomes This Week", value: 11 },
    { label: "Avg Case Turnaround", value: "2.4d" },
  ],
};

export const activeCases = [
  {
    id: "CASE-8421",
    patientAlias: "PT-1298",
    complication: "Cellulite texture irregularity",
    status: "In Follow-up",
    updatedAt: "2026-04-14",
  },
  {
    id: "CASE-8397",
    patientAlias: "PT-1043",
    complication: "Buffalo hump contour concern",
    status: "Post-Procedure",
    updatedAt: "2026-04-13",
  },
  {
    id: "CASE-8312",
    patientAlias: "PT-0922",
    complication: "Facial profile balancing",
    status: "Pre-Op Planning",
    updatedAt: "2026-04-12",
  },
];

export const pendingSubmissions = [
  {
    id: "SUB-1902",
    kind: "Case update",
    note: "Awaiting moderation review",
    submittedAt: "2026-04-14 09:18",
  },
  {
    id: "SUB-1898",
    kind: "Ultrasound upload",
    note: "Thumbnail processing queued",
    submittedAt: "2026-04-13 18:42",
  },
];

export const recentOutcomes = [
  {
    id: "OUT-5561",
    caseId: "CASE-8244",
    result: "Resolved",
    observedAt: "2026-04-14",
  },
  {
    id: "OUT-5553",
    caseId: "CASE-8211",
    result: "Partial",
    observedAt: "2026-04-13",
  },
  {
    id: "OUT-5548",
    caseId: "CASE-8188",
    result: "Unchanged",
    observedAt: "2026-04-12",
  },
];

export const mediaAccess = [
  {
    asset: "US-CASE-8421-01",
    type: "Ultrasound",
    access: "Signed URL (5 min)",
  },
  {
    asset: "BA-CASE-8397-03",
    type: "Before/After",
    access: "Signed URL (5 min)",
  },
];

export const notifications = [
  "Moderation approved 2 submissions in the last 24 hours.",
  "1 upload failed checksum validation and needs re-upload.",
  "Daily provider digest generated at 08:00.",
];
