import { NextRequest, NextResponse } from "next/server";

const VALID_USER     = process.env.BASIC_AUTH_USER     || "shape";
const VALID_PASSWORD = process.env.BASIC_AUTH_PASSWORD || "academy2025";
const COOKIE_NAME    = "__shape_auth";
const COOKIE_VALUE   = "authenticated";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.svg|og-image.png|apple-touch-icon.png).*)",
  ],
};

const LOGIN_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sign in — SHAPE Academy</title>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{font-family:system-ui,-apple-system,sans-serif;background:#F5F7F8;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:1.5rem}
    .card{background:#fff;border:1px solid #E5E5E5;border-radius:16px;padding:2.5rem 2rem;width:100%;max-width:400px;box-shadow:0 16px 48px rgba(26,26,26,0.1)}
    .logo{font-size:1.5rem;font-weight:700;color:#1A1A1A;margin-bottom:0.25rem;letter-spacing:-0.02em}
    .logo span{color:#F25E1B}
    .subtitle{font-size:0.875rem;color:#7A7A7A;margin-bottom:1.75rem}
    .badge{display:inline-block;font-size:0.6875rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;background:#EAF6FA;color:#4AADC8;border-radius:100px;padding:0.25rem 0.7rem;margin-bottom:1.5rem}
    label{display:block;font-size:0.875rem;font-weight:500;color:#1A1A1A;margin-bottom:0.375rem}
    input{width:100%;padding:0.7rem 0.875rem;font-size:0.875rem;color:#1A1A1A;background:#F5F7F8;border:1.5px solid #E5E5E5;border-radius:10px;outline:none;margin-bottom:1rem;font-family:inherit}
    input:focus{border-color:#F25E1B;background:#fff}
    button{width:100%;padding:0.875rem;background:#F25E1B;color:#fff;border:none;border-radius:10px;font-size:0.9375rem;font-weight:500;cursor:pointer;font-family:inherit;margin-top:0.25rem}
    button:hover{background:#D44E0E}
    .error{background:rgba(242,94,27,0.08);border:1px solid rgba(242,94,27,0.25);border-radius:8px;padding:0.6rem 0.875rem;font-size:0.8125rem;color:#C44E0F;margin-bottom:1rem}
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">SHAPE <span>Academy</span></div>
    <p class="subtitle">Private preview — sign in to continue</p>
    <span class="badge">✦ AI Training for Healthcare Professionals</span>
    <form method="POST" action="/__auth">
      __ERROR__
      <label for="u">Username</label>
      <input id="u" name="u" type="text" autocomplete="username" placeholder="Enter username" required autofocus/>
      <label for="p">Password</label>
      <input id="p" name="p" type="password" autocomplete="current-password" placeholder="Enter password" required/>
      <button type="submit">Sign in</button>
    </form>
  </div>
</body>
</html>`;

function loginPage(error = false) {
  const err = error
    ? `<div class="error">Incorrect username or password. Please try again.</div>`
    : "";
  return LOGIN_HTML.replace("__ERROR__", err);
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
  const { pathname } = req.nextUrl;

  // Handle form POST
  if (pathname === "/__auth" && req.method === "POST") {
    const body = await parseBody(req);
    if (body.u === VALID_USER && body.p === VALID_PASSWORD) {
      const res = NextResponse.redirect(new URL("/", req.url));
      res.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
        httpOnly: true,
        secure:   true,
        sameSite: "lax",
        maxAge:   60 * 60 * 24 * 7, // 7 days
        path:     "/",
      });
      return res;
    }
    // Wrong credentials
    return new NextResponse(loginPage(true), {
      status: 401,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Check auth cookie
  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (cookie === COOKIE_VALUE) {
    return NextResponse.next();
  }

  // Show login page
  return new NextResponse(loginPage(false), {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
