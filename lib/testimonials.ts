import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The AI Fundamentals course gave me exactly what I needed — a clear, honest picture of which tools are worth using and which aren't. Jan speaks our language. No hype, just practical guidance.",
    name: "Dr. Sarah Mitchell",
    title: "General Practitioner",
    company: "Munich Family Practice",
  },
  {
    id: "t2",
    quote:
      "I was sceptical about AI in medicine before this course. Now I use it every day for documentation and it genuinely gives me 90 minutes back. The legal clarity around the EU AI Act alone was worth the €49.",
    name: "Dr. James Okafor",
    title: "Internal Medicine Specialist",
    company: "City Medical Centre, Berlin",
  },
  {
    id: "t3",
    quote:
      "What sets SHAPE Academy apart is that Jan has actually worked in a practice. He doesn't talk at you — he works through real scenarios with you. The discussion half of each session is where the real learning happens.",
    name: "Dr. Priya Sharma",
    title: "Paediatrician",
    company: "Sunshine Children's Clinic",
  },
  {
    id: "t4",
    quote:
      "We sent three of our MFAs through the AI Fundamentals course. Within two weeks they were confidently using AI tools for scheduling and patient communication. The team asked for more — now we're booking the full series.",
    name: "Dr. Thomas Bergmann",
    title: "Practice Owner",
    company: "Bergmann Orthopaedics, Hamburg",
  },
  {
    id: "t5",
    quote:
      "The data security module was something I didn't know I needed. I now understand exactly what's compliant, what isn't, and how to talk to my patients about it. That confidence is invaluable.",
    name: "Dr. Amara Diallo",
    title: "Cardiologist",
    company: "HeartCare Associates",
  },
  {
    id: "t6",
    quote:
      "I've attended other digital health events. SHAPE Academy is different because it's small, focused, and taught by people who still see patients. You leave with a plan, not just inspiration.",
    name: "Dr. Elena Kowalski",
    title: "Dermatologist",
    company: "Kowalski Skin Clinic, Vienna",
  },
];

export const featuredTestimonials: Testimonial[] = [
  testimonials[0],
  testimonials[2],
  testimonials[4],
];
