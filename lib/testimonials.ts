import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "MedicalOS has completely transformed how I run my practice. I used to spend 2 hours every evening catching up on notes. Now they're done before the patient even leaves the room.",
    name: "Dr. Sarah Mitchell",
    title: "General Practitioner",
    company: "Mitchell Family Clinic",
  },
  {
    id: "t2",
    quote:
      "The prescription safety checks alone are worth it. I caught a potentially serious interaction that I might have missed on a busy day. That's the kind of safety net every doctor needs.",
    name: "Dr. James Okafor",
    title: "Internal Medicine Specialist",
    company: "City Medical Centre",
  },
  {
    id: "t3",
    quote:
      "Our no-show rate dropped by 55% within the first month of using the smart scheduling. Patients love the reminders and the ability to reschedule online without calling.",
    name: "Dr. Priya Sharma",
    title: "Paediatrician",
    company: "Sunshine Children's Clinic",
  },
  {
    id: "t4",
    quote:
      "Digitising 10 years of paper records felt impossible. MedicalOS did it in a weekend. Everything is now searchable, linked to the right patient, and accessible from anywhere.",
    name: "Dr. Thomas Bergmann",
    title: "Orthopaedic Surgeon",
    company: "Bergmann Orthopaedics",
  },
  {
    id: "t5",
    quote:
      "I was sceptical about AI in a medical setting, but the clinical notes are genuinely impressive. They're accurate, structured exactly how I need them, and save me at least 90 minutes a day.",
    name: "Dr. Amara Diallo",
    title: "Cardiologist",
    company: "HeartCare Associates",
  },
  {
    id: "t6",
    quote:
      "Billing used to be a nightmare — chasing insurance claims, missing payments, manual invoices. Now it all happens automatically. Our revenue collection improved by 30% in three months.",
    name: "Dr. Elena Kowalski",
    title: "Dermatologist",
    company: "Kowalski Skin Clinic",
  },
];

export const featuredTestimonials: Testimonial[] = [
  testimonials[0],
  testimonials[2],
  testimonials[4],
];
