// ─────────────────────────────────────────────────────────────
// SHAPE Consulting image registry
// All images sourced directly from shapeconsulting.app (Wix CDN)
// ─────────────────────────────────────────────────────────────

const WIX = "https://static.wixstatic.com/media";

// Helper to build full-resolution Wix URLs
function wix(id: string, ext: string, params = "w_1200,q_90,enc_auto") {
  return `${WIX}/${id}~mv2.${ext}/v1/fill/${params}/${id}~mv2.${ext}`;
}

export const images = {
  // ── Logo ────────────────────────────────────────────────
  logo: `${WIX}/f72710_8450931f44f54442ae52d37c70957931~mv2.png`,

  // ── Team photos ─────────────────────────────────────────
  team: {
    founder: wix("f72710_e7ebed37056e467a9e46b39f29dea87c", "jpg", "w_600,h_600,al_c,q_90,enc_auto"),
    ashutosh: wix("f72710_0e7d15ef6dde46fdb816d031f4d63574", "jpg", "w_600,h_600,al_c,q_90,enc_auto"),
    eelco: wix("f72710_e1341d5e96c14959a827c88c558b5976", "jpg", "w_600,h_600,al_c,q_90,enc_auto"),
  },

  // ── Homepage ─────────────────────────────────────────────
  hero: {
    // Doctor with stethoscope — main homepage image
    doctorBg: wix("f72710_1a65e07e1a1a4510bf5315b63184d70f", "jpg", "w_1200,h_800,al_c,q_90,enc_auto"),
  },

  // ── Podcast ──────────────────────────────────────────────
  podcast: {
    thumbnail: `${WIX}/f72710_d892737ce5ee43c3ae3bbcd236bc2e7f~mv2.jpeg/v1/fill/w_900,h_600,al_c,q_90,enc_auto/thumbnail.jpeg`,
    icon: `${WIX}/f72710_105508c5b5424dd6b32211d8c5142179~mv2.png/v1/fill/w_200,h_200,al_c,q_90,enc_auto/podcast.png`,
  },
} as const;

// ── Team members data ─────────────────────────────────────
export const teamMembers = [
  {
    name: "Dr. Thomas Weber",
    role: "Doctor & Founder",
    bio: "Physician and managing director of SHAPE Consulting. Passionate about helping healthcare teams use AI safely and confidently in their daily work.",
    image: images.team.founder,
  },
  {
    name: "Ashutosh Singh",
    role: "AI Expert & Lecturer",
    bio: "AI specialist and lecturer at LPDG. Brings deep technical expertise in large language models and their practical applications in healthcare.",
    image: images.team.ashutosh,
  },
  {
    name: "Dr. Eelco Kunst",
    role: "Chairman, Advisory Board",
    bio: "Experienced physician and healthcare leader. Guides the strategic direction of SHAPE Academy's curriculum and consulting approach.",
    image: images.team.eelco,
  },
];
