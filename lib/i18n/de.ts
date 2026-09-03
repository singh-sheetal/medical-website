import { Translations } from "./en";

export const de: Translations = {
  nav: {
    product:  "Produkt",
    modules:  "Module",
    team:     "Team",
    faq:      "FAQ",
    about:    "Über uns",
    contact:  "Kontakt",
    demo:     "Demo anfragen",
    language: "EN",
  },

  hero: {
    badge:    "Praxis-Betriebssystem",
    headline1: "Das Betriebssystem",
    headline2: "für Ihre Praxis",
    headline3: "entwickelt",
    sub: "Shape.Med gibt Ärzten und Praxismanagern volle Übersicht über ihr Team, ihr Wissen und ihren täglichen Betrieb — alles an einem Ort. Entwickelt von SHAPE Consulting.",
    cta1: "Demo anfragen",
    cta2: "Funktionen entdecken",
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
    cta:      "Demo anfragen",
    location: "Deutschland",
    hours:    "Mo–Fr, 9:00–18:00 Uhr",
    cards: [
      { label: "E-Mail",         value: "info@shapeconsulting.app" },
      { label: "Telefon",         value: "+49 175 959 67 81" },
      { label: "Bürozeiten",      value: "Mo–Fr, 9:00–18:00 Uhr" },
    ],
  },

  about: {
    eyebrow:  "Über uns",
    heading:  "Von Ärzten entwickelt, für Praxen gemacht",
    body:     "SHAPE Consulting ist ein in Deutschland ansässiges Medizinberatungsunternehmen, gegründet von Ärzten und Gesundheitsexperten. Wir helfen medizinischen Praxen, digitale Tools und KI sicher einzusetzen — durch praxisnahe Schulungen, strategische Beratung und zweckorientierte Software wie Shape.Med. Unsere Mission ist einfach: Medizin neu denken, mit KI, für Menschen.",
    cta:      "Mehr über SHAPE Consulting erfahren",
    url:      "https://www.shapeconsulting.app",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Häufig gestellte Fragen",
    items: [
      {
        q: "Was sind die 5 Module von Shape.Med?",
        a: "Shape.Med besteht aus fünf Kernmodulen: Das Dashboard gibt Ihnen einen Echtzeit-Überblick über überfällige Aufgaben, Kompetenzlücken und ausstehende Freigaben. Organisation ermöglicht es Ihnen, Rollen zu definieren, Mitarbeiterkompetenzen zu erfassen und Lücken zu erkennen. Das Praxishandbuch ist Ihr lebendes Praxishandbuch — SOPs, Checklisten und Geräteanweisungen, versioniert und freigabepflichtig. Aufgaben & Routinen verwaltet Aufgabenzuweisung, Eskalation und wiederkehrende Routinen. Mitteilungen hält Ihr gesamtes Team mit strukturierten Mitteilungen der Praxisleitung informiert.",
      },
      {
        q: "Wie lange dauert die Einrichtung von Shape.Med für meine Praxis?",
        a: "Die meisten Praxen sind innerhalb eines Arbeitstages einsatzbereit. Unser Onboarding-Team begleitet Sie durch die Ersteinrichtung — Rollendefinition, Mitarbeiterimport und Konfiguration des Kompetenzkatalogs — damit Sie Shape.Med sofort nutzen können.",
      },
      {
        q: "Ist Shape.Med DSGVO-konform? Wo werden meine Daten gespeichert?",
        a: "Ja, vollständig. Alle Daten werden auf verschlüsselten Servern in Deutschland gespeichert und streng DSGVO-konform verarbeitet. Wir stellen im Rahmen jedes Abonnements einen Auftragsverarbeitungsvertrag (AVV) bereit. Für die Nutzung von Shape.Med sind keine Patientendaten erforderlich.",
      },
      {
        q: "Wie viele Mitarbeitende können Shape.Med nutzen?",
        a: "Es gibt keine feste Begrenzung der Nutzeranzahl. Shape.Med unterstützt Praxen jeder Größe — vom Einzelarzt mit kleinem Team bis zur größeren Gemeinschaftspraxis mit 20 oder mehr Mitarbeitenden. Jedes Teammitglied erhält einen eigenen Login mit rollenbasiertem Zugriff.",
      },
      {
        q: "Kann Shape.Med an mehreren Praxisstandorten genutzt werden?",
        a: "Ja. Shape.Med unterstützt mehrere Standorte über ein einziges Konto. Personal, Rollen und Kompetenzen werden zentral verwaltet, während Aufgabenzuweisung und Koordination standortspezifisch oder standortübergreifend konfiguriert werden können.",
      },
      {
        q: "Lässt sich Shape.Med in bestehende Praxisverwaltungssoftware integrieren?",
        a: "Shape.Med ist als eigenständige Praxis-Betriebsebene konzipiert, die sich auf Teammanagement, Wissen und Koordination konzentriert — Bereiche, die die meisten Praxisverwaltungssysteme nicht abdecken. Es ergänzt Ihre bestehende Software, anstatt sie zu ersetzen. Integrationsmöglichkeiten befinden sich auf der Roadmap.",
      },
      {
        q: "Wie kann ich eine Demo anfordern?",
        a: "Klicken Sie auf die Schaltfläche Demo anfragen auf dieser Seite, füllen Sie ein kurzes Formular über Ihre Praxis aus, und wir melden uns innerhalb eines Werktages, um einen persönlichen Rundgang zu vereinbaren.",
      },
      {
        q: "Welcher Support steht zur Verfügung?",
        a: "Wir bieten direkten Support per E-Mail und Telefon während der Geschäftszeiten (Mo–Fr, 9:00–18:00 Uhr). Sie erreichen uns unter info@shapeconsulting.app oder +49 175 959 67 81. Für neue Praxen bietet unser Onboarding-Team während der Einrichtungsphase persönliche Unterstützung.",
      },
    ],
  },

  footer: {
    tagline:   "Das Praxis-Betriebssystem von SHAPE Consulting.",
    copyright: "SHAPE Consulting UG. Alle Rechte vorbehalten.",
    links: {
      product:  "Produkt",
      team:     "Team",
      faq:      "FAQ",
    about:    "Über uns",
    contact:  "Kontakt",
      privacy:  "Datenschutz",
      imprint:  "Impressum",
      gdpr:     "DSGVO",
    },
    badges: ["DSGVO-konform", "Made in Germany", "Von Ärzten entwickelt"],
  },

  form: {
    trigger:     "Demo anfragen",
    title:       "Demo anfragen",
    subtitle:    "Erzählen Sie uns von Ihrer Praxis und wir vereinbaren eine persönliche Demo — ganz unverbindlich.",
    step1:       "Ihre Praxis",
    step2:       "Ihre Situation",
    step3:       "Vielen Dank",
    of:          "von",
    next:        "Weiter",
    back:        "Zurück",
    submit:      "Anfrage senden",
    submitting:  "Wird gesendet...",
    // Step 1
    name:        "Vollständiger Name",
    namePh:      "Dr. Anna Weber",
    email:       "E-Mail-Adresse",
    emailPh:     "anna.weber@praxis.de",
    phone:       "Telefonnummer",
    phonePh:     "+49 175 959 67 81",
    practice:    "Praxisname",
    practicePh:  "Praxis am Markt",
    specialty:   "Fachrichtung",
    specialtyPh: "Fachrichtung wählen",
    specialties: ["Allgemeinmedizin", "Dermatologie", "Gynäkologie", "Orthopädie", "Pädiatrie", "Kardiologie", "Psychiatrie", "Sonstiges"],
    teamSize:    "Anzahl Mitarbeitende",
    teamSizes:   ["1–5", "6–10", "11–20", "20+"],
    // Step 2
    challenge:       "Was ist Ihre größte operative Herausforderung?",
    challengeOpts:   ["Kompetenzmanagement im Team", "SOPs aktuell halten", "Aufgaben- & Routinenmanagement", "Teamkommunikation", "All das oben Genannte"],
    currentSoftware: "Nutzen Sie aktuell eine Praxisverwaltungssoftware?",
    softwareOpts:    ["Nein, wir nutzen Tabellen / Papier", "Ja, und wir sind zufrieden", "Ja, möchten aber wechseln", "Wir evaluieren gerade Optionen"],
    heardFrom:       "Wie haben Sie von Shape.Med erfahren?",
    heardFromPh:     "z. B. Kollege, Google, LinkedIn...",
    // Step 3
    successTitle:    "Vielen Dank!",
    successMsg:      "Wir haben Ihre Anfrage erhalten und melden uns innerhalb eines Werktages, um Ihre persönliche Demo zu vereinbaren.",
    successSub:      "In der Zwischenzeit können Sie das Produkt oben erkunden.",
    close:           "Schließen",
    // Validation
    required:    "Dieses Feld ist erforderlich",
    invalidEmail:"Bitte geben Sie eine gültige E-Mail-Adresse ein",
  },
};
