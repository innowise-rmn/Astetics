const ENTITY_ROUTE_SEGMENTS = {
  procedures: "procedure",
  conditions: "condition",
  complications: "complication",
  comparisons: "compare",
  timelines: "timeline",
};

const procedures = [
  {
    slug: "lip-filler",
    title: "Lip Filler",
    summary:
      "Anatomy-aware lip enhancement with ultrasound-informed planning and follow-up.",
    anatomyZones: ["lips", "perioral"],
    relatedConditions: ["thin-lips", "perioral-lines"],
    relatedComplications: ["filler-migration", "tyndall-effect"],
    ultrasoundProof: [
      "18MHz sagittal scan confirms placement plane.",
      "Pre/post scan pair documented for follow-up.",
    ],
  },
  {
    slug: "jawline-filler",
    title: "Jawline Filler",
    summary:
      "Contour-focused jawline definition with zone planning and risk-aware injection strategy.",
    anatomyZones: ["jawline", "lower-face"],
    relatedConditions: ["chin-asymmetry", "volume-loss"],
    relatedComplications: ["vascular-occlusion", "nodule"],
    ultrasoundProof: [
      "Vessel mapping completed before treatment.",
      "Post-treatment scan archived in case record.",
    ],
  },
];

const conditions = [
  {
    slug: "thin-lips",
    title: "Thin Lips",
    summary:
      "Symptom-first entry surface mapping aesthetic concern to procedural options.",
    typicalProcedures: ["lip-filler"],
    relatedComparisons: ["migration-vs-swelling"],
  },
  {
    slug: "chin-asymmetry",
    title: "Chin Asymmetry",
    summary:
      "Condition-focused guidance for balancing profile and lower-face proportions.",
    typicalProcedures: ["jawline-filler"],
    relatedComparisons: ["lump-vs-granuloma"],
  },
  {
    slug: "perioral-lines",
    title: "Perioral Lines",
    summary:
      "Condition entity for lines around the mouth and perioral volume transitions.",
    typicalProcedures: ["lip-filler"],
    relatedComparisons: ["tyndall-vs-bruising"],
  },
  {
    slug: "volume-loss",
    title: "Volume Loss",
    summary:
      "Condition entity for age-related contour deflation and support planning.",
    typicalProcedures: ["jawline-filler"],
    relatedComparisons: ["migration-vs-swelling"],
  },
];

const complications = [
  {
    slug: "vascular-occlusion",
    title: "Vascular Occlusion",
    summary:
      "High-urgency complication surface with clinical escalation framing and corrective pathways.",
    urgency: "High",
    linkedProcedures: ["jawline-filler"],
    linkedComparisons: ["tyndall-vs-bruising"],
  },
  {
    slug: "filler-migration",
    title: "Filler Migration",
    summary:
      "Diagnostic surface focused on differential signs and corrective planning.",
    urgency: "Moderate",
    linkedProcedures: ["lip-filler"],
    linkedComparisons: ["migration-vs-swelling"],
  },
  {
    slug: "tyndall-effect",
    title: "Tyndall Effect",
    summary:
      "Blue-gray discoloration often associated with superficial filler placement.",
    urgency: "Moderate",
    linkedProcedures: ["lip-filler"],
    linkedComparisons: ["tyndall-vs-bruising"],
  },
  {
    slug: "nodule",
    title: "Nodule",
    summary:
      "Palpable or visible localized product-related irregularity requiring differential review.",
    urgency: "Moderate",
    linkedProcedures: ["jawline-filler"],
    linkedComparisons: ["lump-vs-granuloma"],
  },
];

const comparisons = [
  {
    slug: "migration-vs-swelling",
    title: "Migration vs Swelling",
    question: "Is this migration or normal swelling?",
    leftLabel: "Swelling",
    leftSignals: [
      "Diffuse and soft fullness",
      "Improves day-by-day in first week",
      "No discrete product ridge on scan",
    ],
    rightLabel: "Migration",
    rightSignals: [
      "Persistent fullness beyond expected window",
      "Visible product displacement pattern",
      "Scan shows filler outside intended zone",
    ],
    answer:
      "If fullness persists and scan confirms displaced product, this is more consistent with migration.",
    differential:
      "Temporal resolution plus ultrasound location is the decisive differential.",
    relatedComplications: ["filler-migration"],
  },
  {
    slug: "tyndall-vs-bruising",
    title: "Tyndall vs Bruising",
    question: "Is this Tyndall effect or post-procedure bruising?",
    leftLabel: "Bruising",
    leftSignals: [
      "Color changes over several days",
      "Usually resolves within 1-2 weeks",
      "No persistent blue cast under static lighting",
    ],
    rightLabel: "Tyndall Effect",
    rightSignals: [
      "Stable blue-gray hue in treatment area",
      "Persists beyond normal bruise timeline",
      "Often linked to superficial filler placement",
    ],
    answer:
      "Persistent blue hue with superficial product pattern is more consistent with Tyndall effect.",
    differential:
      "Duration and color stability are primary clues; imaging confirms placement depth.",
    relatedComplications: ["tyndall-effect", "vascular-occlusion"],
  },
  {
    slug: "lump-vs-granuloma",
    title: "Lump vs Granuloma",
    question: "Is this a simple lump or granuloma response?",
    leftLabel: "Post-procedure Lump",
    leftSignals: [
      "Early onset after treatment",
      "May soften with conservative monitoring",
      "Often non-inflammatory presentation",
    ],
    rightLabel: "Granuloma",
    rightSignals: [
      "Persistent or progressive inflammatory pattern",
      "May present with delayed timeline",
      "Requires structured corrective pathway",
    ],
    answer:
      "Persistent inflammatory behavior and delayed onset increases suspicion for granuloma.",
    differential:
      "Timeline plus inflammatory features guides escalation and targeted management.",
    relatedComplications: ["nodule"],
  },
];

const timelines = [
  {
    slug: "lip-filler-day-by-day",
    title: "Lip Filler Day-by-Day Timeline",
    summary:
      "Recovery progression surface capturing expected checkpoints and escalation cues.",
    relatedProcedures: ["lip-filler"],
    relatedComplications: ["filler-migration", "tyndall-effect"],
    checkpoints: [
      { label: "Day 1", note: "Expected swelling and tenderness." },
      { label: "Day 3", note: "Swelling should begin trending down." },
      { label: "Week 1", note: "Shape starts stabilizing." },
      { label: "Week 2", note: "Most swelling should resolve." },
      { label: "Month 1+", note: "Outcome review and optimization planning." },
    ],
  },
];

export const graph = {
  procedures,
  conditions,
  complications,
  comparisons,
  timelines,
};

export function listEntitySlugs(type) {
  return (graph[type] ?? []).map((item) => item.slug);
}

export function getEntity(type, slug) {
  return (graph[type] ?? []).find((item) => item.slug === slug) ?? null;
}

export function buildEntityHref(type, slug) {
  const segment = ENTITY_ROUTE_SEGMENTS[type];
  if (!segment || !slug) {
    return null;
  }
  return `/${segment}/${slug}`;
}

export function buildEntityLink(type, slug) {
  const entity = getEntity(type, slug);
  if (!entity) {
    return null;
  }

  const href = buildEntityHref(type, slug);
  if (!href) {
    return null;
  }

  return {
    href,
    label: entity.title,
    slug: entity.slug,
    type,
  };
}

export function buildEntityLinks(type, slugs) {
  return slugs
    .map((slug) => buildEntityLink(type, slug))
    .filter((item) => item !== null);
}

export function getHomepageLinks() {
  return [
    {
      title: "Procedure",
      href: `/procedure/${procedures[0].slug}`,
      description: "Commercial-intent treatment entity pages.",
    },
    {
      title: "Condition",
      href: `/condition/${conditions[0].slug}`,
      description: "Symptom-language entry pages for patient search.",
    },
    {
      title: "Complication",
      href: `/complication/${complications[0].slug}`,
      description: "Authority surfaces for urgent high-trust scenarios.",
    },
    {
      title: "Comparison",
      href: `/compare/${comparisons[0].slug}`,
      description: "Decision-engine format built for explicit answers.",
    },
    {
      title: "Timeline",
      href: `/timeline/${timelines[0].slug}`,
      description: "Recovery progression pages for recurring patient intent.",
    },
  ];
}
