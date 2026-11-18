import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://tech-talent.nu/sitemap.xml",
    host: "https://tech-talent.nu",
  };
}
