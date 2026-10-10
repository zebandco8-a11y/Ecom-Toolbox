import { tools } from "../lib/tools";
export default function sitemap() {
  const b = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [{ url: b }, ...tools.map(t => ({ url: `${b}/tools/${t.slug}` }))];
}
