export const en = {
  nav: {
    product:  "Product",
    modules:  "Modules",
    team:     "Team",
    contact:  "Contact",
    demo:     "Request a Demo",
    language: "DE",
  },

  hero: {
    badge:    "Practice Operating System",
    headline1: "The operating system",
    headline2: "your practice",
    headline3: "has been waiting for.",
    sub: "Shape.Med gives doctors and practice managers full visibility over their team, their knowledge, and their daily operations — all in one place. Built by SHAPE Consulting.",
    cta1: "Request a Demo",
    cta2: "See how it works",
    trust1: "No technical setup required",
    trust2: "GDPR compliant",
    trust3: "Made in Germany",
    stat1v: "5", stat1u: " modules", stat1l: "In one platform",
    stat2v: "10", stat2u: "+ roles",  stat2l: "Role-based access",
    stat3v: "39", stat3u: " skills",  stat3l: "Competency catalogue",
  },

  modules: {
    eyebrow: "What Shape.Med Does",
    heading: "Everything your practice needs. Finally in one place.",
    sub: "Shape.Med replaces scattered spreadsheets, paper folders, and WhatsApp groups with a single structured operating system for your practice.",
    items: [
      {
        id: "dashboard",
        badge: "Dashboard",
        heading: "Your practice at a glance",
        description: "One screen shows everything that needs your attention — overdue tasks, competency gaps, pending approvals, and today's coordination. No more chasing updates.",
        bullets: [
          "Overdue tasks flagged with urgency levels",
          "Competency gaps identified across your team",
          "Pending document approvals in one inbox",
          "Today's coordination overview — done, pending, overdue",
        ],
      },
      {
        id: "organisation",
        badge: "Organisation",
        heading: "Know who knows what",
        description: "Define roles, map competencies, and see exactly where your team stands. The competency matrix shows gaps before they become problems.",
        bullets: [
          "Role definitions with required competencies attached",
          "Staff competency matrix — visual and searchable",
          "39-item competency catalogue out of the box",
          "Multi-location and multi-team support",
        ],
      },
      {
        id: "praxishandbuch",
        badge: "Practice Manual",
        heading: "SOPs your team will actually use",
        description: "A living, searchable practice manual — SOPs, checklists, device instructions, and internal policies. Version-controlled, approval-gated, always up to date.",
        bullets: [
          "SOPs, checklists, device instructions, and policies",
          "Document approval workflow with sign-off tracking",
          "20 ready-made templates to start immediately",
          "Version control and scheduled review dates",
        ],
      },
      {
        id: "aufgaben",
        badge: "Tasks & Routines",
        heading: "Nothing falls through the cracks",
        description: "Assign tasks to specific staff with due dates, categories, and priority levels. Recurring routines are templated so they run automatically.",
        bullets: [
          "Tasks assigned by role, person, and category",
          "Critical and escalated flags for urgent items",
          "Categories: QM, Hygiene, IT, Safety, Learning, Patient Flow",
          "Routine templates for recurring tasks",
        ],
      },
      {
        id: "mitteilungen",
        badge: "Messages",
        heading: "One place for team communication",
        description: "Practice leadership announcements visible to the whole team — holiday closures, new procedures, software changes, team events. No more lost WhatsApp messages.",
        bullets: [
          "Announcements from practice leadership",
          "Visible to all staff — no one misses important updates",
          "Replaces scattered WhatsApp and email threads",
          "Timestamped and archivable",
        ],
      },
    ],
  },

  features: {
    eyebrow: "Key Features",
    heading: "Built for how practices actually work",
    items: [
      { badge: "Competency Matrix",    heading: "See the full picture",      body: "A visual matrix of every role and every competency. Gaps are highlighted automatically so you always know where training is needed." },
      { badge: "Approval Workflow",     heading: "Documents that stay current", body: "Every SOP goes through a structured review and approval process. Expired documents are flagged before they become compliance risks." },
      { badge: "Task Escalation",       heading: "Nothing gets ignored",       body: "Overdue tasks escalate automatically. Critical items surface to the practice owner so urgent issues never stay buried." },
      { badge: "Template Library",      heading: "Start in minutes",           body: "20 ready-made templates for the most common practice workflows. Adapt them to your setup or start fresh." },
      { badge: "Multi-Location",        heading: "One system, two locations",  body: "Run multiple practice locations from a single account. Staff, roles, and competencies are managed across all sites." },
      { badge: "Role-Based Access",     heading: "Right access, right people", body: "Each staff member sees only what they need. Practice owners have full visibility; MFAs see their own tasks and responsibilities." },
    ],
  },

  team: {
    eyebrow: "The Team",
    heading:  "Built by medical professionals",
    sub:      "SHAPE Consulting was founded by people who understand the daily reality of running a medical practice.",
    members: [
      { name: "Dr. Thomas Weber", role: "Doctor & Founder", bio: "Physician and managing director of SHAPE Consulting. Built Shape.Med from firsthand experience of the operational challenges doctors face every day." },
      { name: "Ashutosh Singh",   role: "AI Expert & Lecturer", bio: "AI specialist and lecturer at LPDG. Brings deep technical expertise in building intelligent, practical tools for healthcare environments." },
      { name: "Dr. Eelco Kunst",  role: "Chairman, Advisory Board", bio: "Experienced physician and healthcare leader. Guides the product vision and ensures Shape.Med reflects real clinical and operational needs." },
    ],
  },

  contact: {
    eyebrow: "Get in Touch",
    heading:  "Interested in Shape.Med?",
    sub:      "We'd love to show you what Shape.Med can do for your practice. Send us an email and we'll arrange a personal demo — no commitment required.",
    email:    "info@shapeconsulting.app",
    phone:    "+49 175 959 67 81",
    cta:      "Request a Demo by Email",
    location: "Germany",
    hours:    "Mon–Fri, 9:00–18:00 CET",
    cards: [
      { label: "Email us",    value: "info@shapeconsulting.app" },
      { label: "Call us",     value: "+49 175 959 67 81" },
      { label: "Office hours", value: "Mon–Fri, 9:00–18:00 CET" },
    ],
  },

  footer: {
    tagline:   "The Practice Operating System by SHAPE Consulting.",
    copyright: "SHAPE Consulting UG. All rights reserved.",
    links: {
      product:  "Product",
      team:     "Team",
      contact:  "Contact",
      privacy:  "Privacy Policy",
      imprint:  "Imprint",
      gdpr:     "GDPR",
    },
    badges: ["GDPR Compliant", "Made in Germany", "By Doctors"],
  },
};

export type Translations = typeof en;
