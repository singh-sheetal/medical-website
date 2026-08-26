import { NextRequest, NextResponse } from "next/server";

// ─── Credentials ─────────────────────────────────────────────
// Set these in Vercel → Settings → Environment Variables
// BASIC_AUTH_USER and BASIC_AUTH_PASSWORD
// Locally, add them to .env.local
const VALID_USER     = process.env.BASIC_AUTH_USER     || "shape";
const VALID_PASSWORD = process.env.BASIC_AUTH_PASSWORD || "academy2025";

// ─── Routes to protect ───────────────────────────────────────
// Protect everything except Next.js internals and static files
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.svg|og-image.png|apple-touch-icon.png).*)",
  ],
};

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (authHeader) {
    // Authorization: Basic <base64(user:password)>
    const base64 = authHeader.split(" ")[1] ?? "";
    const decoded = Buffer.from(base64, "base64").toString("utf-8");
    const [user, ...rest] = decoded.split(":");
    const password = rest.join(":"); // handle passwords containing ":"

    if (user === VALID_USER && password === VALID_PASSWORD) {
      return NextResponse.next();
    }
  }

  // Not authenticated — prompt the browser
  return new NextResponse("Access restricted. Please sign in.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="SHAPE Academy — Private Preview"`,
      "Content-Type": "text/plain",
    },
  });
}
