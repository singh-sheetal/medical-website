import { NextRequest, NextResponse } from "next/server";

const VALID_USER     = process.env.BASIC_AUTH_USER     || "shape";
const VALID_PASSWORD = process.env.BASIC_AUTH_PASSWORD || "academy2025";
const COOKIE_NAME    = "__shape_auth";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.svg|og-image.png|apple-touch-icon.png|api/screenshot).*)",
  ],
};

const LOGIN_PAGE = (error = false) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sign in — SHAPE Academy</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #F5F7F8;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }
    .card {
      background: #fff;
      border: 1px solid #E5E5E5;
      border-radius: 16px;
      padding: 2.5rem 2rem;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 16px 48px rgba(26,26,26,0.1);
    }
    .logo { font-size: 1.5rem; font-weight: 700; color: #1A1A1A; margin-bottom: 0.25rem; letter-spacing: -0.02em; }
    .logo span { color: #3B82F6; }
    .subtitle { font-size: 0.875rem; color: #7A7A7A; margin-bottom: 1.75rem; }
    .badge {
      display: inline-block; font-size: 0.6875rem; font-weight: 600;
      letter-spacing: 0.05em; text-transform: uppercase;
      background: #EAF6FA; color: #4AADC8;
      border-radius: 100px; padding: 0.25rem 0.7rem; margin-bottom: 1.5rem;
    }
    label { display: block; font-size: 0.875rem; font-weight: 500; color: #1A1A1A; margin-bottom: 0.375rem; }
    input {
      width: 100%; padding: 0.7rem 0.875rem; font-size: 0.875rem;
      color: #1A1A1A; background: #F5F7F8;
      border: 1.5px solid #E5E5E5; border-radius: 10px;
      outline: none; margin-bottom: 1rem; font-family: inherit;
    }
    input:focus { border-color: #3B82F6; background: #fff; }
    button {
      width: 100%; padding: 0.875rem; background: #3B82F6;
      color: #fff; border: none; border-radius: 10px;
      font-size: 0.9375rem; font-weight: 500; cursor: pointer;
      font-family: inherit; margin-top: 0.25rem;
    }
    button:hover { background: #1D4ED8; }
    .error {
      background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.25);
      border-radius: 8px; padding: 0.6rem 0.875rem;
      font-size: 0.8125rem; color: #1D4ED8; margin-bottom: 1rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">SHAPE <span>Academy</span></div>
    <p class="subtitle">Private preview — sign in to continue</p>
    <span class="badge">✦ AI Training for Healthcare Professionals</span>
    ${error ? `<div class="error">Incorrect username or password. Please try again.</div>` : ""}
    <form method="POST">
      <label for="u">Username</label>
      <input id="u" name="u" type="text" autocomplete="username" placeholder="Enter username" required autofocus/>
      <label for="p">Password</label>
      <input id="p" name="p" type="password" autocomplete="current-password" placeholder="Enter password" required/>
      <button type="submit">Sign in</button>
    </form>
  </div>
</body>
</html>`;

function isAuthenticated(req: NextRequest): boolean {
  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (!cookie) return false;
  try {
    const decoded = Buffer.from(cookie, "base64").toString("utf-8");
    const [u, p]  = decoded.split(":");
    return u === VALID_USER && p === VALID_PASSWORD;
  } catch {
    return false;
  }
}

async function parseBody(req: NextRequest): Promise<Record<string, string>> {
  const text = await req.text();
  const out: Record<string, string> = {};
  for (const pair of text.split("&")) {
    const idx = pair.indexOf("=");
    if (idx === -1) continue;
    const k = decodeURIComponent(pair.slice(0, idx).replace(/\+/g, " "));
    const v = decodeURIComponent(pair.slice(idx + 1).replace(/\+/g, " "));
    out[k] = v;
  }
  return out;
}

export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  // ── POST — handle login form submission ─────────────────────
  if (req.method === "POST") {
    const body = await parseBody(req);
    const u = (body.u ?? "").trim();
    const p = body.p ?? "";

    if (u === VALID_USER && p === VALID_PASSWORD) {
      const token = Buffer.from(`${u}:${p}`).toString("base64");
      // Redirect to GET on the same page, with auth cookie set
      const res = NextResponse.redirect(`${origin}/`, { status: 303 });
      res.cookies.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure:   process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge:   60 * 60 * 24 * 7, // 7 days
        path:     "/",
      });
      return res;
    }

    // Wrong credentials
    return new NextResponse(LOGIN_PAGE(true), {
      status: 401,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // ── GET — check cookie ───────────────────────────────────────
  if (isAuthenticated(req)) {
    return NextResponse.next();
  }

  // ── Not authenticated — show login page ─────────────────────
  return new NextResponse(LOGIN_PAGE(false), {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
