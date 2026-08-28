import { Translations } from "./en";

export const de: Translations = {
  nav: {
    product:  "Produkt",
    modules:  "Module",
    team:     "Team",
    contact:  "Kontakt",
    demo:     "Demo anfragen",
    language: "EN",
  },

  hero: {
    badge:    "Praxis-Betriebssystem",
    headline1: "Das Betriebssystem,",
    headline2: "auf das Ihre Praxis",
    headline3: "gewartet hat.",
    sub: "Shape.Med gibt Ärzten und Praxismanagern volle Übersicht über ihr Team, ihr Wissen und ihren täglichen Betrieb — alles an einem Ort. Entwickelt von SHAPE Consulting.",
    cta1: "Demo anfragen",
    cta2: "So funktioniert es",
    trust1: "Keine technische Einrichtung nötig",
    trust2: "DSGVO-konform",
    trust3: "Made in Germany",
    stat1v: "5", stat1u: " Module",      stat1l: "In einer Plattform",
    stat2v: "10", stat2u: "+ Rollen",    stat2l: "Rollenbasierter Zugriff",
    stat3v: "39", stat3u: " Kompetenzen", stat3l: "Kompetenzkatalog",
  },

  modules: {
    eyebrow: "Was Shape.Med leistet",
    heading: "Alles, was Ihre Praxis braucht. Endlich an einem Ort.",
    sub: "Shape.Med ersetzt verstreute Tabellen, Papierordner und WhatsApp-Gruppen durch ein einziges strukturiertes Betriebssystem für Ihre Praxis.",
    items: [
      {
        id: "dashboard",
        badge: "Dashboard",
        heading: "Ihre Praxis auf einen Blick",
        description: "Ein Bildschirm zeigt alles, was Ihre Aufmerksamkeit erfordert — überfällige Aufgaben, Kompetenzlücken, ausstehende Freigaben und die heutige Koordination. Kein Nachfragen mehr.",
        bullets: [
          "Überfällige Aufgaben mit Dringlichkeitsstufen",
          "Kompetenzlücken im Team automatisch erkannt",
          "Ausstehende Dokumentenfreigaben im Posteingang",
          "Heutige Koordinationsübersicht — erledigt, ausstehend, überfällig",
        ],
      },
      {
        id: "organisation",
        badge: "Organisation",
        heading: "Wissen, wer was kann",
        description: "Rollen definieren, Kompetenzen zuordnen und genau sehen, wo Ihr Team steht. Die Kompetenzmatrix zeigt Lücken, bevor sie zum Problem werden.",
        bullets: [
          "Rollendefinitionen mit zugeordneten Pflichtkompetenzen",
          "Kompetenzmatrix — visuell und durchsuchbar",
          "39 Kompetenzen im Katalog ab Tag eins",
          "Mehrere Standorte und Teams unterstützt",
        ],
      },
      {
        id: "praxishandbuch",
        badge: "Praxishandbuch",
        heading: "SOPs, die Ihr Team wirklich nutzt",
        description: "Ein lebendes, durchsuchbares Praxishandbuch — SOPs, Checklisten, Geräteanweisungen und interne Richtlinien. Versioniert, freigabepflichtig, immer aktuell.",
        bullets: [
          "SOPs, Checklisten, Geräteanweisungen und Richtlinien",
          "Dokumenten-Freigabeworkflow mit Unterschriften-Tracking",
          "20 fertige Vorlagen für sofortigen Start",
          "Versionskontrolle und geplante Prüftermine",
        ],
      },
      {
        id: "aufgaben",
        badge: "Aufgaben & Routinen",
        heading: "Nichts fällt durch das Raster",
        description: "Aufgaben gezielt an Mitarbeitende vergeben — mit Fälligkeiten, Kategorien und Prioritätsstufen. Wiederkehrende Routinen werden als Vorlagen angelegt und laufen automatisch.",
        bullets: [
          "Aufgaben nach Rolle, Person und Kategorie vergeben",
          "Kritisch- und Eskaliert-Markierungen für dringende Punkte",
          "Kategorien: QM, Hygiene, IT, Sicherheit, Lernen, Patientenfluss",
          "Routinenvorlagen für wiederkehrende Aufgaben",
        ],
      },
      {
        id: "mitteilungen",
        badge: "Mitteilungen",
        heading: "Eine Stelle für Teamkommunikation",
        description: "Mitteilungen der Praxisleitung für das gesamte Team — Schließungszeiten, neue Abläufe, Softwareänderungen, Teamevents. Keine verlorenen WhatsApp-Nachrichten mehr.",
        bullets: [
          "Mitteilungen von der Praxisleitung",
          "Für alle Mitarbeitenden sichtbar — niemand verpasst etwas Wichtiges",
          "Ersetzt verstreute WhatsApp- und E-Mail-Ketten",
          "Zeitgestempelt und archivierbar",
        ],
      },
    ],
  },

  features: {
    eyebrow: "Funktionen",
    heading: "Gebaut für den Praxisalltag",
    items: [
      { badge: "Kompetenzmatrix",    heading: "Das große Bild sehen",          body: "Eine visuelle Matrix aller Rollen und Kompetenzen. Lücken werden automatisch hervorgehoben — so wissen Sie immer, wo Schulungsbedarf besteht." },
      { badge: "Freigabe-Workflow",   heading: "Dokumente, die aktuell bleiben", body: "Jede SOP durchläuft einen strukturierten Prüf- und Freigabeprozess. Abgelaufene Dokumente werden markiert, bevor sie zum Compliance-Risiko werden." },
      { badge: "Aufgaben-Eskalation", heading: "Nichts wird ignoriert",         body: "Überfällige Aufgaben eskalieren automatisch. Kritische Punkte werden der Praxisleitung angezeigt, damit dringende Probleme nicht vergraben bleiben." },
      { badge: "Vorlagenbibliothek",  heading: "In Minuten starten",            body: "20 fertige Vorlagen für die häufigsten Praxisabläufe. Anpassen oder von Grund auf neu erstellen." },
      { badge: "Mehrere Standorte",   heading: "Ein System, zwei Standorte",    body: "Mehrere Praxisstandorte aus einem Konto verwalten. Mitarbeitende, Rollen und Kompetenzen werden standortübergreifend gepflegt." },
      { badge: "Rollenbasierter Zugriff", heading: "Richtiger Zugriff, richtige Personen", body: "Jede/r Mitarbeiter/in sieht nur, was relevant ist. Praxisinhaber haben volle Übersicht; MFAs sehen ihre eigenen Aufgaben." },
    ],
  },

  team: {
    eyebrow: "Das Team",
    heading:  "Entwickelt von medizinischen Fachkräften",
    sub:      "SHAPE Consulting wurde von Menschen gegründet, die den Praxisalltag aus eigener Erfahrung kennen.",
    members: [
      { name: "Dr. Thomas Weber", role: "Arzt & Gründer", bio: "Arzt und Geschäftsführer von SHAPE Consulting. Hat Shape.Med aus eigener Erfahrung mit den operativen Herausforderungen entwickelt, denen Ärzte täglich begegnen." },
      { name: "Ashutosh Singh",   role: "KI-Experte & Dozent", bio: "KI-Spezialist und Dozent an der LPDG. Bringt tiefes technisches Wissen beim Aufbau intelligenter, praxistauglicher Tools für das Gesundheitswesen." },
      { name: "Dr. Eelco Kunst",  role: "Vorsitzender, Beirat", bio: "Erfahrener Arzt und Healthcare-Leader. Lenkt die Produktvision und stellt sicher, dass Shape.Med echten klinischen und operativen Anforderungen entspricht." },
    ],
  },

  contact: {
    eyebrow: "Kontakt",
    heading:  "Interesse an Shape.Med?",
    sub:      "Wir zeigen Ihnen gerne, was Shape.Med für Ihre Praxis leisten kann. Schreiben Sie uns — wir vereinbaren eine persönliche Demo, ganz unverbindlich.",
    email:    "info@shapeconsulting.app",
    phone:    "+49 175 959 67 81",
    cta:      "Demo per E-Mail anfragen",
    location: "Deutschland",
    hours:    "Mo–Fr, 9:00–18:00 Uhr",
    cards: [
      { label: "E-Mail",         value: "info@shapeconsulting.app" },
      { label: "Telefon",         value: "+49 175 959 67 81" },
      { label: "Bürozeiten",      value: "Mo–Fr, 9:00–18:00 Uhr" },
    ],
  },

  footer: {
    tagline:   "Das Praxis-Betriebssystem von SHAPE Consulting.",
    copyright: "SHAPE Consulting UG. Alle Rechte vorbehalten.",
    links: {
      product:  "Produkt",
      team:     "Team",
      contact:  "Kontakt",
      privacy:  "Datenschutz",
      imprint:  "Impressum",
      gdpr:     "DSGVO",
    },
    badges: ["DSGVO-konform", "Made in Germany", "Von Ärzten entwickelt"],
  },
};
