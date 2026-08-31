import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, phone, practice, specialty, challenge, currentSoftware, heardFrom } = body;

    const { error } = await resend.emails.send({
      from:    "Shape.Med Demo Request <onboarding@resend.dev>",
      to:      "sheetalsingh1812@gmail.com",
      subject: `Demo Request — ${name} (${practice})`,
      html: `
        <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #f5f5f5;">
          <div style="background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e5;">

            <!-- Header -->
            <div style="background: #3B82F6; padding: 1.5rem 2rem;">
              <h1 style="color: #ffffff; font-size: 1.25rem; font-weight: 700; margin: 0;">New Demo Request</h1>
              <p style="color: rgba(255,255,255,0.8); font-size: 0.875rem; margin: 0.25rem 0 0;">Shape.Med — Practice Operating System</p>
            </div>

            <!-- Contact details -->
            <div style="padding: 1.5rem 2rem; border-bottom: 1px solid #e5e5e5;">
              <h2 style="font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #888; margin: 0 0 1rem;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #888; width: 140px;">Name</td><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #1a1a1a; font-weight: 500;">${name}</td></tr>
                <tr><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #888;">Email</td><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #1a1a1a; font-weight: 500;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></td></tr>
                <tr><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #888;">Phone</td><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #1a1a1a; font-weight: 500;">${phone}</td></tr>
                <tr><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #888;">Practice</td><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #1a1a1a; font-weight: 500;">${practice}</td></tr>
                <tr><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #888;">Specialty</td><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #1a1a1a; font-weight: 500;">${specialty}</td></tr>
              </table>
            </div>

            <!-- Situation -->
            <div style="padding: 1.5rem 2rem; border-bottom: 1px solid #e5e5e5;">
              <h2 style="font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #888; margin: 0 0 1rem;">Their Situation</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #888; width: 140px; vertical-align: top;">Main challenge</td><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #1a1a1a; font-weight: 500;">${challenge}</td></tr>
                <tr><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #888; vertical-align: top;">Current software</td><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #1a1a1a; font-weight: 500;">${currentSoftware}</td></tr>
                <tr><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #888; vertical-align: top;">Heard from</td><td style="padding: 0.4rem 0; font-size: 0.875rem; color: #1a1a1a; font-weight: 500;">${heardFrom || "—"}</td></tr>
              </table>
            </div>

            <!-- Footer -->
            <div style="padding: 1rem 2rem; background: #f9f9f9;">
              <p style="font-size: 0.75rem; color: #aaa; margin: 0;">Sent from the Shape.Med website demo request form</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Send email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
