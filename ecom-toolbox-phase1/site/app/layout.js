import "./globals.css";
import Link from "next/link";
import { siteName } from "../lib/tools";
export const metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: `${siteName} – Free tools for online sellers`, template: `%s | ${siteName}` },
  description: "Free browser-based tools for ecommerce sellers: counters, keyword cleaners, HTML formatters and more." };
export default function Root({ children }) {
  return <html lang="en"><body>
    <header><Link href="/" className="logo">{siteName}</Link></header>
    <main>{children}</main>
    <footer>© {new Date().getFullYear()} {siteName}. Tools run in your browser; your text is never uploaded.</footer>
  </body></html>;
}
