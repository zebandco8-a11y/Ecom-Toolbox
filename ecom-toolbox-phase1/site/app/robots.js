export default function robots() {
  const b = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${b}/sitemap.xml` };
}
