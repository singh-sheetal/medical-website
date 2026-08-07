# Domain & Deployment Setup Guide

Step-by-step instructions for connecting your domain and going live.

---

## Step 1 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Select the `medical-website` repository
4. Vercel auto-detects Next.js — leave all settings as default
5. Click **Deploy**

Your site is now live at `your-project.vercel.app`

---

## Step 2 — Set Environment Variables in Vercel

1. Go to your project in Vercel → **Settings → Environment Variables**
2. Add the following for **Production**:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Your GA4 ID (e.g. `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_BOOKING_URL` | Your Cal.com or Calendly link |

3. Click **Save** and redeploy

---

## Step 3 — Connect Your Custom Domain

1. In Vercel → **Settings → Domains**
2. Click **Add Domain** → type your domain (e.g. `yourdomain.com`)
3. Vercel shows you DNS records to add

### If your domain is at Namecheap
- Go to **Domain List → Manage → Advanced DNS**
- Add an **A Record**: `@` → Vercel's IP (shown in dashboard)
- Add a **CNAME Record**: `www` → `cname.vercel-dns.com`

### If your domain is at Cloudflare
- Go to **DNS → Records**
- Add an **A Record**: `@` → Vercel's IP, **Proxy status: DNS only** (grey cloud)
- Add a **CNAME Record**: `www` → `cname.vercel-dns.com`, **Proxy status: DNS only**

4. DNS propagation takes 5–30 minutes
5. Vercel auto-provisions your SSL certificate — no action needed

---

## Step 4 — Set Up Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property → select **Web**
3. Enter your domain and site name
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
5. Add it to Vercel environment variables as `NEXT_PUBLIC_GA_MEASUREMENT_ID`
6. Redeploy — analytics starts tracking immediately

Analytics only fires when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
It does not fire on localhost.

---

## Step 5 — Update the Booking URL

1. Create a [Cal.com](https://cal.com) or [Calendly](https://calendly.com) account
2. Set up a 30-minute "Demo" event type
3. Copy your booking page URL
4. Add it to Vercel as `NEXT_PUBLIC_BOOKING_URL`
5. Update `lib/navigation.ts` — change `bookingUrl` to use the env var:

```typescript
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#book-demo";
```

---

## Step 6 — Verify Everything

After going live, check these URLs:

| URL | Expected |
|---|---|
| `yourdomain.com` | Landing page loads |
| `yourdomain.com/sitemap.xml` | XML sitemap |
| `yourdomain.com/robots.txt` | Crawl rules |
| `yourdomain.com/opengraph-image` | OG preview image |

Test social sharing by pasting your URL into:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## Step 7 — Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain as a property
3. Verify ownership via DNS record (Vercel makes this easy)
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
5. Google will begin indexing within 1–7 days

---

## Updating the Site

Every push to `main` automatically deploys to production via Vercel.
Every pull request gets its own preview URL for review before merging.

```bash
# Make a change, then:
git add .
git commit -m "Your change description"
git push
# → Vercel deploys automatically in ~60 seconds
```
