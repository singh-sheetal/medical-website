import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:            SITE_URL,
      lastModified:   new Date(),
      changeFrequency: "weekly",
      priority:       1,
    },
    {
      url:            `${SITE_URL}/#features`,
      lastModified:   new Date(),
      changeFrequency: "monthly",
      priority:       0.8,
    },
    {
      url:            `${SITE_URL}/#testimonials`,
      lastModified:   new Date(),
      changeFrequency: "monthly",
      priority:       0.7,
    },
    {
      url:            `${SITE_URL}/#faq`,
      lastModified:   new Date(),
      changeFrequency: "monthly",
      priority:       0.7,
    },
    {
      url:            `${SITE_URL}/#book-demo`,
      lastModified:   new Date(),
      changeFrequency: "monthly",
      priority:       0.9,
    },
  ];
}
